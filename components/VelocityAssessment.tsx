"use client";

import { useMemo, useState } from "react";
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
} from "@/lib/velocity-assessment";

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

type Step = "intro" | "company" | "awareness" | "revenue" | "trust" | "results";

const PILLAR_STEPS: Exclude<Step, "intro" | "company" | "results">[] = [
  "awareness",
  "revenue",
  "trust",
];

const fieldClass =
  "w-full border-2 border-hair bg-white px-4 py-3 text-lg text-navy focus:border-blue focus:outline-none";

const labelClass = "mt-6 block text-sm font-bold uppercase tracking-[.05em] text-[#42465c]";

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
    <div className="mt-3 flex flex-col gap-3">
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
  const [step, setStep] = useState<Step>("intro");
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(emptyCompanyInfo);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedLabels, setSelectedLabels] = useState<Record<string, string>>({});
  const [finalResponse, setFinalResponse] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const scores = useMemo(() => {
    const awareness = scorePillar(answers, "awareness");
    const revenue = scorePillar(answers, "revenue");
    const trust = scorePillar(answers, "trust");
    return { awareness, revenue, trust, total: awareness + revenue + trust };
  }, [answers]);

  function selectAnswer(pillar: Pillar, questionId: string, label: string, score: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    setSelectedLabels((prev) => ({ ...prev, [questionId]: label }));
  }

  const companyInfoComplete =
    companyInfo.firstName.trim() !== "" &&
    companyInfo.lastName.trim() !== "" &&
    companyInfo.email.trim() !== "" &&
    companyInfo.companyName.trim() !== "" &&
    companyInfo.companySize !== "" &&
    companyInfo.companyGoals !== "" &&
    companyInfo.icpConfidence !== "";

  function pillarComplete(pillar: Pillar) {
    return QUESTIONS[pillar].every((q) => answers[q.id] !== undefined);
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
      // the person seeing their result \u2014 see CTRL task on email wiring.
    } finally {
      setSubmitting(false);
    }
  }

  const progressSteps: Step[] = ["company", "awareness", "revenue", "trust"];
  const currentProgressIndex = progressSteps.indexOf(step);

  return (
    <div className="mx-auto max-w-[1180px] px-12 pb-24">
      {step !== "intro" && step !== "results" && (
        <div className="mb-14 mt-4 flex gap-2">
          {progressSteps.map((s, i) => (
            <div
              key={s}
              className={`h-[3px] flex-1 ${
                i <= currentProgressIndex ? "bg-blue" : "bg-hair"
              }`}
            />
          ))}
        </div>
      )}

      {step === "intro" && (
        <div className="pt-4">
          <p className="max-w-[640px] text-lg leading-[1.7] text-[#42465c]">{INTRO_COPY}</p>
          <button
            type="button"
            onClick={() => setStep("company")}
            className={`${ctaSolid} mt-8`}
          >
            <AnimatedChevron className="text-white" />
            Start
          </button>

          <div className="mt-20 border-t border-hair pt-16">
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              <AnimatedChevron className="text-blue" />
              How it works
            </h2>
            <ol className="mt-8 flex flex-col gap-6">
              {HOW_IT_WORKS.map((item, i) => (
                <li key={item} className="flex gap-5">
                  <span className="font-display shrink-0 text-[22px] font-bold text-blue">
                    {i + 1}
                  </span>
                  <p className="text-lg leading-[1.7] text-[#42465c]">{item}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-[640px] border-l-[3px] border-blue pl-5 text-lg italic leading-[1.6] text-[#42465c]">
              &ldquo;{PULL_QUOTE}&rdquo;
            </p>
          </div>
        </div>
      )}

      {step === "company" && (
        <div className="pt-4">
          <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
            <AnimatedChevron className="text-blue" />
            About you
          </h2>
          <p className="mt-4 max-w-[640px] text-lg leading-[1.7] text-[#42465c]">
            {COMPANY_INFO_INTRO}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-x-8 md:grid-cols-2">
            <div>
              <label className={labelClass}>First name</label>
              <input
                className={fieldClass}
                value={companyInfo.firstName}
                onChange={(e) => setCompanyInfo({ ...companyInfo, firstName: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClass}>Last name</label>
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

          <label className={labelClass}>{COMPANY_SIZE.label}</label>
          <select
            className={fieldClass}
            value={companyInfo.companySize}
            onChange={(e) => setCompanyInfo({ ...companyInfo, companySize: e.target.value })}
          >
            <option value="" disabled>
              Select one\u2026
            </option>
            {COMPANY_SIZE.options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>

          <label className={labelClass}>{COMPANY_GOALS.label}</label>
          <OptionList
            options={COMPANY_GOALS.options}
            selected={companyInfo.companyGoals}
            onSelect={(v) => setCompanyInfo({ ...companyInfo, companyGoals: v })}
          />

          <label className={labelClass}>{ICP_CONFIDENCE.label}</label>
          <OptionList
            options={ICP_CONFIDENCE.options}
            selected={companyInfo.icpConfidence}
            onSelect={(v) => setCompanyInfo({ ...companyInfo, icpConfidence: v })}
          />

          <button
            type="button"
            disabled={!companyInfoComplete}
            onClick={() => setStep("awareness")}
            className={`${ctaSolid} mt-10 disabled:cursor-not-allowed disabled:opacity-30`}
          >
            Continue
          </button>
        </div>
      )}

      {PILLAR_STEPS.includes(step as (typeof PILLAR_STEPS)[number]) && (
        <div className="pt-4">
          <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
            <AnimatedChevron className="text-blue" />
            {PILLAR_LABEL[step as Pillar]}
          </h2>
          <p className="mt-4 max-w-[640px] text-lg leading-[1.7] text-[#42465c]">
            {SECTION_INTROS[step as Pillar]}
          </p>

          <div className="mt-4 flex flex-col gap-10">
            {QUESTIONS[step as Pillar].map((q, i) => (
              <div key={q.id}>
                <p className="font-display text-[20px] font-semibold text-navy">
                  {i + 1}. {q.prompt}
                </p>
                <OptionList
                  options={q.options.map((o) => o.label)}
                  selected={selectedLabels[q.id] ?? ""}
                  onSelect={(label) => {
                    const opt = q.options.find((o) => o.label === label)!;
                    selectAnswer(step as Pillar, q.id, label, opt.score);
                  }}
                />
              </div>
            ))}
          </div>

          {step === "trust" ? (
            <div className="mt-10">
              <label className={labelClass}>{FINAL_QUESTION_PROMPT}</label>
              <textarea
                className={`${fieldClass} min-h-[120px]`}
                value={finalResponse}
                onChange={(e) => setFinalResponse(e.target.value)}
              />
              <button
                type="button"
                disabled={!pillarComplete("trust") || submitting}
                onClick={handleFinish}
                className={`${ctaSolid} mt-10 disabled:cursor-not-allowed disabled:opacity-30`}
              >
                {submitting ? "Scoring\u2026" : "Get my score"}
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={!pillarComplete(step as Pillar)}
              onClick={() =>
                setStep(step === "awareness" ? "revenue" : "trust")
              }
              className={`${ctaSolid} mt-10 disabled:cursor-not-allowed disabled:opacity-30`}
            >
              Continue
            </button>
          )}
        </div>
      )}

      {step === "results" && (
        <div id="results" className="pt-4">
          <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
            <AnimatedChevron className="text-blue" />
            Your Velocity score
          </h2>

          <div className="mt-8 border-2 border-navy p-8 md:p-10">
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
                      <div
                        className={`h-2 ${barBg[color]}`}
                        style={{ width: `${(score / 12) * 100}%` }}
                      />
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
                <div
                  key={pillar}
                  className={`flex flex-col border-t-[6px] ${borderColor[color]} pt-6`}
                >
                  <h3 className="font-display text-[20px] font-semibold">
                    {PILLAR_LABEL[pillar]}
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-[#42465c]">
                    {PILLAR_BLURBS[pillar][band]}
                  </p>
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
  );
}
