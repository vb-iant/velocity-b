import { NextRequest, NextResponse } from "next/server";
import {
  QUESTIONS,
  PILLAR_LABEL,
  pillarBand,
  totalBand,
  TOTAL_BAND_LABEL,
  FINAL_QUESTION_PROMPT,
  type Pillar,
} from "@/lib/velocity-assessment";

// Velocity Assessment submission endpoint.
//
// Per the Notion spec ("Velocity Assessment" page, Technical Appendix ->
// "HubSpot submission — FINAL, TESTED, WORKING") and CTRL task
// tm-1785597349110: build a Markdown document from the full payload
// (company info, all 12 Q&A as text, final comment, scores/bands), then
// POST it to HubSpot's documented Forms Submission API v3 endpoint as JSON.
// No auth/token needed — this is a public, unauthenticated endpoint by
// design. Tested live 2026-08-02 against the real portal (Contact created,
// Company matched/associated, assessment_submission field populated,
// internal notification email fired via HubSpot Workflow).

const HUBSPOT_PORTAL_ID = "143941905";
const HUBSPOT_FORM_GUID = "c2860f60-7ae0-4a09-af35-4f84d3402171";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

const PILLAR_ORDER: Pillar[] = ["awareness", "revenue", "trust"];

interface CompanyInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  companyName?: string;
  companySize?: string;
  companyGoals?: string;
  icpConfidence?: string;
}

interface Scores {
  awareness: number;
  revenue: number;
  trust: number;
  total: number;
}

interface AssessmentPayload {
  companyInfo?: CompanyInfo;
  answers?: Record<string, string>;
  scores?: Scores;
  finalResponse?: string;
}

function buildMarkdown(payload: AssessmentPayload): string {
  const { companyInfo = {}, answers = {}, scores, finalResponse } = payload;

  const lines: string[] = [];

  lines.push("# Velocity Assessment submission");
  lines.push("");
  lines.push("## Company info");
  lines.push(`- **Name:** ${companyInfo.firstName ?? ""} ${companyInfo.lastName ?? ""}`.trim());
  lines.push(`- **Email:** ${companyInfo.email ?? ""}`);
  lines.push(`- **Company:** ${companyInfo.companyName ?? ""}`);
  lines.push(`- **Company size:** ${companyInfo.companySize ?? ""}`);
  lines.push(`- **Company goals:** ${companyInfo.companyGoals ?? ""}`);
  lines.push(`- **ICP confidence:** ${companyInfo.icpConfidence ?? ""}`);
  lines.push("");

  if (scores) {
    lines.push("## Scores");
    for (const pillar of PILLAR_ORDER) {
      const score = scores[pillar];
      lines.push(`- **${PILLAR_LABEL[pillar]}:** ${score}/12 (${pillarBand(score)})`);
    }
    lines.push(`- **Total:** ${scores.total}/36 (${TOTAL_BAND_LABEL[totalBand(scores.total)]})`);
    lines.push("");
  }

  for (const pillar of PILLAR_ORDER) {
    lines.push(`## ${PILLAR_LABEL[pillar]}`);
    for (const question of QUESTIONS[pillar]) {
      const answer = answers[question.id] ?? "(not answered)";
      lines.push(`**${question.prompt}**`);
      lines.push(answer);
      lines.push("");
    }
  }

  lines.push("## Final question");
  lines.push(`**${FINAL_QUESTION_PROMPT}**`);
  lines.push(finalResponse?.trim() ? finalResponse.trim() : "(no response)");

  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const payload = body as AssessmentPayload;

  if (!payload?.companyInfo?.email || !payload.companyInfo.firstName) {
    return NextResponse.json(
      { ok: false, error: "Missing required company info" },
      { status: 400 }
    );
  }

  const markdown = buildMarkdown(payload);
  const { companyInfo } = payload;

  const hubspotBody = {
    fields: [
      { objectTypeId: "0-1", name: "firstname", value: companyInfo.firstName ?? "" },
      { objectTypeId: "0-1", name: "lastname", value: companyInfo.lastName ?? "" },
      { objectTypeId: "0-1", name: "email", value: companyInfo.email ?? "" },
      { objectTypeId: "0-2", name: "name", value: companyInfo.companyName ?? "" },
      { objectTypeId: "0-1", name: "assessment_submission", value: markdown },
    ],
    context: {
      pageUri: "https://velocity-b.com/velocity-assessment",
      pageName: "Velocity Assessment",
    },
  };

  try {
    const hubspotRes = await fetch(HUBSPOT_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotBody),
    });

    if (!hubspotRes.ok) {
      const errorText = await hubspotRes.text();
      console.error("HubSpot submission failed:", hubspotRes.status, errorText);
      return NextResponse.json(
        { ok: false, error: "HubSpot submission failed" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("HubSpot submission error:", err);
    return NextResponse.json({ ok: false, error: "HubSpot submission error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
