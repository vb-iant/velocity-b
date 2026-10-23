// Shared by the assessment API route (HubSpot) and the assessment component
// (Web3Forms notification email), so both receive the same write-up.

import {
  QUESTIONS,
  PILLAR_LABEL,
  pillarBand,
  totalBand,
  TOTAL_BAND_LABEL,
  FINAL_QUESTION_PROMPT,
  type Pillar,
} from "@/lib/velocity-assessment";

const PILLAR_ORDER: Pillar[] = ["awareness", "revenue", "trust"];

export interface CompanyInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  companyName?: string;
  companySize?: string;
  companyGoals?: string;
  icpConfidence?: string;
}

export interface Scores {
  awareness: number;
  revenue: number;
  trust: number;
  total: number;
}

export interface AssessmentPayload {
  companyInfo?: CompanyInfo;
  answers?: Record<string, string>;
  scores?: Scores;
  finalResponse?: string;
}

export function buildMarkdown(payload: AssessmentPayload): string {
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
