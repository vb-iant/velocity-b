// Velocity Assessment — data model, questions, and scored-result copy.
// Source of truth: Notion "Velocity Assessment" page (VB Content Refresh).
// Re-fetch that page before editing any copy here — Ian/Alex edit it directly.

export type Pillar = "awareness" | "revenue" | "trust";
export type Band = "low" | "developing" | "strong";
export type TotalBand = "low" | "potential" | "high";

export interface ScoredOption {
  label: string;
  score: 3 | 2 | 1;
}

export interface ScoredQuestion {
  id: string;
  prompt: string;
  options: ScoredOption[];
}

export interface SelectField {
  id: string;
  label: string;
  options: string[];
}

// ---------------------------------------------------------------------------
// Company info (unscored — context for Ian/Alex, not part of the score)
// ---------------------------------------------------------------------------

export const COMPANY_INFO_INTRO =
  "We'll start by asking for a bit about you and your company. Ten minutes, no obligation, no sales call required \u2014 but we will email you a report.";

export const COMPANY_SIZE: SelectField = {
  id: "companySize",
  label: "Company Size",
  options: ["Less than 20", "20\u201349", "50\u2013200", "200\u20131000", "1000+"],
};

export const COMPANY_GOALS: SelectField = {
  id: "companyGoals",
  label: "Which statement best describes where your company is right now?",
  options: [
    "We need to grow as a start-up",
    "We need to perform a turnaround",
    "We're established but need to accelerate our growth",
    "We're focused on maintaining our market position",
  ],
};

// Context-only — does not count toward the Awareness score.
export const ICP_CONFIDENCE: SelectField = {
  id: "icpConfidence",
  label:
    "How confident are you in your understanding of your market and your Ideal Customer Profile (ICP)?",
  options: [
    "Very confident \u2014 we've done detailed market research and documented our ICP, personas, and buyer's journey",
    "Somewhat confident \u2014 we've done some limited research and documented that",
    "We don't have any of this documented",
  ],
};

// ---------------------------------------------------------------------------
// Scored sections (12 questions, 1\u20133 points each, 4 per pillar)
// ---------------------------------------------------------------------------

export const SECTION_INTROS: Record<Pillar, string> = {
  awareness: "Now for four questions on the first of our ART goals \u2014 Awareness.",
  revenue: "Next, four questions on Revenue.",
  trust: "Last section \u2014 four questions on Trust.",
};

export const QUESTIONS: Record<Pillar, ScoredQuestion[]> = {
  awareness: [
    {
      id: "awareness-1",
      prompt: "How confident are you in your brand's visibility with your ICP and target market?",
      options: [
        { label: "We have insight, data and tools that give us confidence", score: 3 },
        { label: "We have limited intelligence on brand awareness", score: 2 },
        { label: "We have no formal process or tools for measuring our visibility", score: 1 },
      ],
    },
    {
      id: "awareness-2",
      prompt: "How effective is your web and social presence at creating inbound opportunities?",
      options: [
        { label: "We have a solid pipeline of inbound opportunities", score: 3 },
        { label: "Very little of our pipeline is inbound", score: 2 },
        { label: "All of our pipeline comes from outbound sales activity", score: 1 },
      ],
    },
    {
      id: "awareness-3",
      prompt: "Are you producing content that your target buyer actually engages with?",
      options: [
        { label: "Yes \u2014 we have metrics, tools, and dashboards that show this", score: 3 },
        { label: "Some of our content lands, but our visibility or output is limited", score: 2 },
        { label: "We don't produce enough relevant content, and can't measure the impact anyway", score: 1 },
      ],
    },
    {
      id: "awareness-4",
      prompt: "How confident are you that you're reaching future buyers who aren't in the market today?",
      options: [
        { label: "Very confident \u2014 we have intent data to show this", score: 3 },
        { label: "Somewhat confident \u2014 we measure consistent traffic to our content", score: 2 },
        { label: "We're not confident we're reaching the right audience", score: 1 },
      ],
    },
  ],
  revenue: [
    {
      id: "revenue-1",
      prompt: "How aligned are sales and marketing on lead quality and handover?",
      options: [
        { label: "We have a well-understood, robust process from lead to close", score: 3 },
        { label: "Somewhat aligned, but there are gaps in lead quality and process", score: 2 },
        { label: "Not at all \u2014 marketing works to different metrics than sales", score: 1 },
      ],
    },
    {
      id: "revenue-2",
      prompt: "How confident are you that you have enough pipeline coverage to meet revenue targets?",
      options: [
        { label: "Very confident \u2014 our coverage will meet or exceed target", score: 3 },
        { label: "We're dependent on the majority of our pipeline converting to hit target", score: 2 },
        { label: "We already know our coverage will fall short", score: 1 },
      ],
    },
    {
      id: "revenue-3",
      prompt: "Are opportunities closing at an acceptable rate and within an acceptable timeframe?",
      options: [
        { label: "Yes \u2014 we're happy with our current sales velocity", score: 3 },
        { label: "Somewhat \u2014 there's friction in closing opportunities", score: 2 },
        { label: "We're struggling to get opportunities closed", score: 1 },
      ],
    },
    {
      id: "revenue-4",
      prompt: "Does your sales process actually support your ICP's buying process?",
      options: [
        { label: "Yes \u2014 we understand our ICP's buying process and it's mapped to our sales process", score: 3 },
        { label: "We have a sales process, but we're unclear if it maps to how people actually buy", score: 2 },
        { label: "Our sales process is unstructured", score: 1 },
      ],
    },
  ],
  trust: [
    {
      id: "trust-1",
      prompt: "Do you have real insight into customer satisfaction and feedback?",
      options: [
        { label: "Yes \u2014 we run regular customer satisfaction surveys", score: 3 },
        { label: "We have some anecdotal sense of customer satisfaction", score: 2 },
        { label: "No \u2014 we don't have any formal customer satisfaction data", score: 1 },
      ],
    },
    {
      id: "trust-2",
      prompt: "Are sales and marketing actively working to build advocacy and trust with existing customers?",
      options: [
        { label: "We have a robust customer success team, supported by marketing", score: 3 },
        { label: "We commit limited resources to customer success in sales and marketing", score: 2 },
        { label: "Sales and marketing are focused on new business only", score: 1 },
      ],
    },
    {
      id: "trust-3",
      prompt: "How much of your new business comes from advocates and referrals?",
      options: [
        { label: "We have a solid pipeline of new business from referrals", score: 3 },
        { label: "We occasionally get referral business", score: 2 },
        { label: "We rarely get referral business", score: 1 },
      ],
    },
    {
      id: "trust-4",
      prompt: "Do you have a dependable group of customers who'll provide references, reviews, and case studies?",
      options: [
        { label: "Yes \u2014 we're satisfied with the number of case studies we have", score: 3 },
        { label: "We have some good case studies, but need more", score: 2 },
        { label: "We struggle to get references, reviews, and case studies", score: 1 },
      ],
    },
  ],
};

export const FINAL_QUESTION_PROMPT =
  "Is there anything we've missed in terms of understanding your sales and marketing, or anything else you'd like to add?";

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

export function scorePillar(answers: Record<string, number>, pillar: Pillar): number {
  return QUESTIONS[pillar].reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
}

export function pillarBand(score: number): Band {
  if (score >= 10) return "strong";
  if (score >= 7) return "developing";
  return "low";
}

export function totalBand(score: number): TotalBand {
  if (score >= 30) return "high";
  if (score >= 21) return "potential";
  return "low";
}

export const TOTAL_BAND_LABEL: Record<TotalBand, string> = {
  low: "Low Velocity",
  potential: "Potential Velocity",
  high: "High Velocity",
};

export const PILLAR_LABEL: Record<Pillar, string> = {
  awareness: "Awareness",
  revenue: "Revenue",
  trust: "Trust",
};

export const PILLAR_COLOR: Record<Pillar, "blue" | "orange" | "navy"> = {
  awareness: "blue",
  revenue: "orange",
  trust: "navy",
};

// ---------------------------------------------------------------------------
// Instant result screen \u2014 recommendation blurbs (fixed text, selected by band)
// ---------------------------------------------------------------------------

export const PILLAR_BLURBS: Record<Pillar, Record<Band, string>> = {
  awareness: {
    low: "Right now, most of what happens before someone finds you is invisible to you \u2014 which makes it hard to know what's working, let alone scale it. A clearer ICP, a sharper story, and some basic visibility tracking would go a long way. This is exactly the gap a Growth Roadmap is built to close.",
    developing:
      "There are real signals here \u2014 some content that lands, some sense of who's paying attention \u2014 but the picture's patchy rather than joined-up. The next step isn't doing more, it's connecting what you're already measuring so you can tell which activity is actually moving the needle.",
    strong:
      "You know who you're talking to, and you're reaching them \u2014 which puts you ahead of most companies at your stage. Worth a proper look at whether that visibility is compounding or just holding steady, before you assume it'll keep working on its own.",
  },
  revenue: {
    low: "Sales and marketing sound like they're running two different versions of the same business. That's rarely a people problem \u2014 it's usually a process one \u2014 and it tends to get expensive fast once you're relying on hope to hit target. This is squarely what a Revenue-focused Roadmap is for.",
    developing:
      "There's a real process here, and real numbers behind it, but you're leaning harder on pipeline conversion than you'd probably like. Tightening the handover between marketing and sales, and getting a clearer read on where deals stall, is the difference between hoping and knowing.",
    strong:
      "Your pipeline holds up, and your process reflects how your buyers actually buy \u2014 rarer than it should be. Worth stress-testing now, while it's working, rather than waiting for growth to expose the cracks.",
  },
  trust: {
    low: "Customer success and advocacy aren't really on the radar yet \u2014 common at this stage, but also the fastest, cheapest growth lever going unused. A handful of structured references would change more sales conversations than another round of outbound.",
    developing:
      "There are some proof points and some structure around customer success, but it's ad hoc rather than a system. Turning satisfied customers into a repeatable source of advocacy \u2014 rather than a happy accident \u2014 is well within reach.",
    strong:
      "Customers actively vouch for you, and it shows. The opportunity now is making that trust do more commercial work \u2014 feeding it into sales enablement and awareness, rather than letting it sit in a folder of nice quotes.",
  },
};

export const TOTAL_SCORE_CTA: Record<TotalBand, string> = {
  low: "The GTM function needs some attention. We'll follow up personally once we've had a proper look at your answers \u2014 in the meantime, if you'd rather not wait, you're welcome to book a chat.",
  potential:
    "Solid in places, with some real opportunities being missed. We'll follow up with our take once we've read through your answers properly.",
  high: "You're in good shape. Let's dig deeper and talk about how you scale further from here.",
};

// ---------------------------------------------------------------------------
// Landing / intro copy
// ---------------------------------------------------------------------------

export const INTRO_COPY =
  "Twelve questions, about ten minutes, and an honest score across Awareness, Revenue, and Trust \u2014 no gamified quiz gimmicks, no drip-fed email sequence, just a straight read from two people who've run this stuff themselves.";

export const HOW_IT_WORKS = [
  "Answer 12 quick questions across Awareness, Revenue, and Trust.",
  "Get your score straight away, right there on screen.",
  "We read every response personally \u2014 if there's something worth digging into, you'll get a fuller written report with 9 tailored recommendations, plus an optional 30-minute call. No obligation, no sales call required first.",
];

export const PULL_QUOTE =
  "No fluff, no generic scorecards \u2014 just a straight read, from people who've done the job.";
