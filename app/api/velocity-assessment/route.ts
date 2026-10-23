import { NextRequest, NextResponse } from "next/server";
import {
  buildMarkdown,
  type AssessmentPayload,
} from "@/lib/velocity-assessment-submission";

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
//
// Oct 2026: HubSpot downgraded to Free, so the Workflow notification no
// longer fires. The notification email now comes from Web3Forms, sent
// browser-side by components/VelocityAssessment.tsx using the same Markdown.

const HUBSPOT_PORTAL_ID = "143941905";
const HUBSPOT_FORM_GUID = "c2860f60-7ae0-4a09-af35-4f84d3402171";
const HUBSPOT_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

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
