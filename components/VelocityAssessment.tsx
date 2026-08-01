"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatedChevron } from "@/components/AnimatedChevron";
import {
  COMPANY_INFO_INTRO,
  COMPANY_SIZE,
  COMPANY_GOALS,
  ICP_CONFIDENCE,
  SECTION_INTROS,
  QUESTIONS,
  FINAL_QUESTION_PROMPT,
  INTRO_COPY,
  HOW_IT_WORKS,
  PULL_QUOTE,
  scorePillar,
  pillarBand,
  totalBand,
  TOTAL_BAND_LABEL,
  PILLAR_LABEL,
  PILLAR_COLOR,
  PILLAR_BLURBS,
  TOTAL_SCORE_CTA,
  type Pillar,
  type ScoredQuestion,
} from "@/lib/velocity-assessment";

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

const fieldClass =
  "w-full border-2 border-hair bg-white px-4 py-3 text-lg text-navy focus:border-blue focus:outline-none";
const labelClass = "mt-6 block text-sm font-bold uppercase tracking-[.05em] text-[#42465c]";
const kickerClass = "text-sm font-bold uppercase tracking-[.08em] text-blue";
const hintClass = "mt-4 text-sm font-semibold text-[#9096a8]";

const barBg: Record<"blue" | "orange" | "navy", string> = {
  blue: "bg-blue",
  orange: "bg-orange",
  navy: "bg-navy",
};
const borderColor: Record<"blue" | "orange" | "navy", string> = {
  blue: "border-blue",
  orange: "border-orange",
  navy: "border-navy",
};

type SelectField = "companySize" | "companyGoals" | "icpConfidence";

type Screen =
  | { kind: "basics" }
  | { kind: "select"; field: SelectField }
  | { kind: "scored"; pillar: Pillar; question: ScoredQuestion; indexInPillar: number }
  | { kind: "final" };

const PILLAR_ORDER: Pillar[] = ["awareness", "revenue", "trust"];

const SCREENS: Screen[] = [
  { kind: "basics" },
  { kind: "select", field: "companySize" },
  { kind: "select", field: "companyGoals" },
  { kind: "select", field: "icpConfidence" },
  ...PILLAR_ORDER.flatMap((pillar) =>
    QUESTIONS[pillar].map((question, indexInPillar) => ({
      kind: "scored" as const,
      pillar,
      question,
      indexInPillar,
    }))
  ),
  { kind: "final" },
];

const SELECT_FIELD_MAP: Record<SelectField, { label: string; options: string[]; kicker: string }> = {
  companySize: { ...COMPANY_SIZE, kicker: "About your company" },
  companyGoals: { ...COMPANY_GOALS, kicker: "About your company" },
  icpConfidence: { ...ICP_CONFIDENCE, kicker: "About your company" },
};

interface CompanyInfo {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  companySize: string;
  companyGoals: string;
  icpConfidence: string;
}

const emptyCompanyInfo: CompanyInfo = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  companySize: "",
  companyGoals: "",
  icpConfidence: "",
};

function OptionList({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`w-full border-2 px-5 py-4 text-left text-lg leading-[1.5] transition-colors ${
              isSelected
                ? "border-navy bg-[#fafbfd] font-semibold text-navy"
                : "border-hair text-[#42465c] hover:border-blue"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function VelocityAssessment() {
  const [step, setStep] = useState<"intro" | "screen" | "results">("intro");
  const [screenIndex, setScreenIndex] = useState(0);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(emptyCompanyInfo);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedLabels, setSelectedLabels] = useState<Record<string, string>>({});
  const [finalResponse, setFinalResponse] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, screenIndex]);

  const scores = useMemo(() => {
    const awareness = scorePillar(answers, "awareness");
    const revenue = scorePillar(answers, "revenue");
    const trust = scorePillar(answers, "trust");
    return { awareness, revenue, trust, total: awareness + revenue + trust };
  }, [answers]);

  const screen = SCREENS[screenIndex];

  function selectAnswer(questionId: string, label: string, score: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    setSelectedLabels((prev) => ({ ...prev, [questionId]: label }));
  }

  const basicsMissing = [
    !companyInfo.firstName.trim() && "first name",
    !companyInfo.lastName.trim() && "last name",
    !companyInfo.email.trim() && "email",
    !companyInfo.companyName.trim() && "company name",
  ].filter(Boolean) as string[];

  let canContinue = true;
  let missingHint = "";

  if (screen.kind === "basics") {
    canContinue = basicsMissing.length === 0;
    missingHint =
      basicsMissing.length > 0
        ? `${basicsMissing.length} required field${basicsMissing.length > 1 ? "s" : ""} left to complete: ${basicsMissing.join(", ")}`
        : "";
  } else if (screen.kind === "select") {
    canContinue = companyInfo[screen.field] !== "";
    missingHint = canContinue ? "" : "Select an answer to continue";
  } else if (screen.kind === "scored") {
    canContinue = answers[screen.question.id] !== undefined;
    missingHint = canContinue ? "" : "Select an answer to continue";
  }

  async function handleFinish() {
    setSubmitting(true);
    setStep("results");
    try {
      await fetch("/api/velocity-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyInfo,
          answers: selectedLabels,
          scores,
          finalResponse,
        }),
      });
    } catch {
      // Scoring is computed client-side, so a failed submission doesn't block
      // the person seeing their result — see CTRL task on email wiring.
    } finally {
      setSubmitting(false);
    }
  }

  function goNext() {
    if (screenIndex < SCREENS.length - 1) {
      setScreenIndex(screenIndex + 1);
    } else {
      handleFinish();
    }
  }

  const totalScreens = SCREENS.length;
  const progressPct = step === "screen" ? ((screenIndex + 1) / totalScreens) * 100 : 0;

  return (
    <main>
      <section className="mx-auto max-w-[1180px] px-12 pt-20">
        <h1 className={kickerClass}>The Velocity Assessment</h1>
        {step === "intro" ? (
          <div className="mt-3 grid grid-cols-1 items-start gap-14 md:grid-cols-2">
            <div>
              <h2 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
                <AnimatedChevron className="text-blue" />
                How&rsquo;s your sales and marketing doing?
              </h2>
              <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
                Really doing.
              </h2>
            </div>
            <div>
              <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">{INTRO_COPY}</p>
            </div>
          </div>
        ) : (
          <h2 className="font-display mt-3 text-[26px] font-bold leading-[1.15] tracking-tight md:text-[32px]">
            How&rsquo;s your sales and marketing doing? <span className="text-blue">Really doing.</span>
          </h2>
        )}
      </section>

      <div ref={topRef} className="mx-auto max-w-[1180px] px-12 pb-24">
        {step === "screen" && (
          <div className="mb-10 mt-10">
            <div className="h-[3px] w-full bg-hair">
              <div className="h-[3px] bg-blue transition-all" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        )}

        {step === "intro" && (
          <div className="mt-16 border-t border-hair pt-16">
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              <AnimatedChevron className="text-blue" />
              How it works
            </h2>
            <ol className="mt-8 flex flex-col gap-6">
              {HOW_IT_WORKS.map((item, i) => (
                <li key={item} className="flex gap-5">
                  <span className="font-display shrink-0 text-[22px] font-bold text-blue">{i + 1}</span>
                  <p className="text-lg leading-[1.7] text-[#42465c]">{item}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-[640px] border-l-[3px] border-blue pl-5 text-lg italic leading-[1.6] text-[#42465c]">
              &ldquo;{PULL_QUOTE}&rdquo;
            </p>
            <button type="button" onClick={() => setStep("screen")} className={`${ctaSolid} mt-10`}>
              <AnimatedChevron className="text-white" />
              Start
            </button>
          </div>
        )}

        {step === "screen" && screen.kind === "basics" && (
          <div>
            <p className={kickerClass}>About you</p>
            <p className="mt-4 max-w-[640px] text-lg leading-[1.7] text-[#42465c]">{COMPANY_INFO_INTRO}</p>
            <div className="mt-6 grid grid-cols-1 gap-x-8 md:grid-cols-2">
              <div>
                <label className={`${labelClass} mt-0`}>First name</label>
                <input
                  className={fieldClass}
                  value={companyInfo.firstName}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className={`${labelClass} mt-0`}>Last name</label>
                <input
                  className={fieldClass}
                  value={companyInfo.lastName}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, lastName: e.target.value })}
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  className={fieldClass}
                  value={companyInfo.email}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                />
              </div>
              <div>
                <label className={labelClass}>Company name</label>
                <input
                  className={fieldClass}
                  value={companyInfo.companyName}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, companyName: e.target.value })}
                />
              </div>
            </div>
            {missingHint && <p className={hintClass}>{missingHint}</p>}
            <button
              type="button"
              disabled={!canContinue}
              onClick={goNext}
              className={`${ctaSolid} mt-6 disabled:cursor-not-allowed disabled:opacity-30`}
            >
              Continue
            </button>
          </div>
        )}

        {step === "screen" && screen.kind === "select" && (
          <div>
            <p className={kickerClass}>{SELECT_FIELD_MAP[screen.field].kicker}</p>
            <h2 className="font-display mt-3 text-[26px] font-semibold leading-tight text-navy md:text-[30px]">
              {SELECT_FIELD_MAP[screen.field].label}
            </h2>
            <OptionList
              options={SELECT_FIELD_MAP[screen.field].options}
              selected={companyInfo[screen.field]}
              onSelect={(v) => setCompanyInfo({ ...companyInfo, [screen.field]: v })}
            />
            {missingHint && <p className={hintClass}>{missingHint}</p>}
            <button
              type="button"
              disabled={!canContinue}
              onClick={goNext}
              className={`${ctaSolid} mt-6 disabled:cursor-not-allowed disabled:opacity-30`}
            >
              Continue
            </button>
          </div>
        )}

        {step === "screen" && screen.kind === "scored" && (
          <div>
            <p className={kickerClass}>
              {PILLAR_LABEL[screen.pillar]} &middot; Question {screen.indexInPillar + 1} of 4
            </p>
            {screen.indexInPillar === 0 && (
              <p className="mt-4 max-w-[640px] text-lg leading-[1.7] text-[#42465c]">
                {SECTION_INTROS[screen.pillar]}
              </p>
            )}
            <h2 className="font-display mt-4 text-[26px] font-semibold leading-tight text-navy md:text-[30px]">
              {screen.question.prompt}
            </h2>
            <OptionList
              options={screen.question.options.map((o) => o.label)}
              selected={selectedLabels[screen.question.id] ?? ""}
              onSelect={(label) => {
                const opt = screen.question.options.find((o) => o.label === label)!;
                selectAnswer(screen.question.id, label, opt.score);
              }}
            />
            {missingHint && <p className={hintClass}>{missingHint}</p>}
            <button
              type="button"
              disabled={!canContinue}
              onClick={goNext}
              className={`${ctaSolid} mt-6 disabled:cursor-not-allowed disabled:opacity-30`}
            >
              Continue
            </button>
          </div>
        )}

        {step === "screen" && screen.kind === "final" && (
          <div>
            <p className={kickerClass}>Almost done</p>
            <h2 className="font-display mt-3 text-[26px] font-semibold leading-tight text-navy md:text-[30px]">
              {FINAL_QUESTION_PROMPT}
            </h2>
            <textarea
              className={`${fieldClass} mt-6 min-h-[120px]`}
              value={finalResponse}
              onChange={(e) => setFinalResponse(e.target.value)}
              placeholder="Optional"
            />
            <button
              type="button"
              disabled={submitting}
              onClick={goNext}
              className={`${ctaSolid} mt-6 disabled:cursor-not-allowed disabled:opacity-30`}
            >
              {submitting ? "Scoring\u2026" : "Get my score"}
            </button>
          </div>
        )}

        {step === "results" && (
          <div id="results">
            <div className="border-2 border-navy p-8 md:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <span className="font-display text-[56px] font-bold leading-none text-navy">
                  {scores.total}
                  <span className="text-[24px] font-semibold text-[#9096a8]">/36</span>
                </span>
                <span className="font-display text-[24px] font-bold text-blue">
                  {TOTAL_BAND_LABEL[totalBand(scores.total)]}
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {(["awareness", "revenue", "trust"] as Pillar[]).map((pillar) => {
                  const score = scores[pillar];
                  const color = PILLAR_COLOR[pillar];
                  return (
                    <div key={pillar}>
                      <div className="flex justify-between text-sm font-bold uppercase tracking-[.05em] text-[#42465c]">
                        <span>{PILLAR_LABEL[pillar]}</span>
                        <span>{score}/12</span>
                      </div>
                      <div className="mt-1.5 h-2 w-full bg-hair">
                        <div className={`h-2 ${barBg[color]}`} style={{ width: `${(score / 12) * 100}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
              {(["awareness", "revenue", "trust"] as Pillar[]).map((pillar) => {
                const band = pillarBand(scores[pillar]);
                const color = PILLAR_COLOR[pillar];
                return (
                  <div key={pillar} className={`flex flex-col border-t-[6px] ${borderColor[color]} pt-6`}>
                    <h3 className="font-display text-[20px] font-semibold">{PILLAR_LABEL[pillar]}</h3>
                    <p className="mt-2 text-base leading-[1.7] text-[#42465c]">{PILLAR_BLURBS[pillar][band]}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 bg-navy px-8 py-14 text-center text-white md:px-16">
              <p className="mx-auto max-w-[560px] text-lg leading-[1.7] text-[#cfd6e8]">
                {TOTAL_SCORE_CTA[totalBand(scores.total)]}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className={ctaAccent}>
                  Book a chat
                </Link>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-block border-2 border-white px-[30px] py-4 text-[15px] font-bold text-white"
                >
                  Save as PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
