"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  {
    label: "Evaluate",
    short: "EV",
    desc: "Quickly stress-test what's slowing revenue, and what needs to change.",
    color: "blue",
  },
  {
    label: "Engage",
    short: "EN",
    desc: "Work with your team to build an executable revenue plan.",
    color: "navy",
  },
  {
    label: "Execute",
    short: "EX",
    desc: "Let's make it happen!",
    color: "orange",
  },
] as const;

const TEXT_COLOR: Record<string, string> = {
  blue: "text-blue",
  navy: "text-navy",
  orange: "text-orange",
};

const BORDER_COLOR: Record<string, string> = {
  blue: "border-blue",
  navy: "border-navy",
  orange: "border-orange",
};

const BG_COLOR: Record<string, string> = {
  blue: "bg-blue",
  navy: "bg-navy",
  orange: "bg-orange",
};

const SCHEDULE_MS = [150, 1750, 3350, 5100]; // 3 stages + summary
const LOOP_MS = 8100;

// scene index 0-2 = a stage, scene index 3 = the summary badge row
type Scene = number;

function StageScene({ index }: { index: number }) {
  const stage = STAGES[index];
  const isLast = index === STAGES.length - 1;
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <span className="font-display text-xs font-bold tracking-[0.08em] text-navy">
          STAGE 0{index + 1} / 03
        </span>
        <div className="flex gap-1.5">
          {STAGES.map((_, i) => (
            <div
              key={i}
              className={`h-[7px] w-[7px] rounded-full ${
                i <= index ? BG_COLOR[stage.color] : "bg-navy/15"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="my-4 flex items-center gap-3">
        <span
          className={`font-display text-[clamp(36px,7.5vw,64px)] font-extrabold leading-none tracking-tight ${
            isLast ? "text-orange" : TEXT_COLOR[stage.color]
          }`}
        >
          {stage.label}
        </span>
        <span
          className={`font-display text-[clamp(42px,8.5vw,72px)] font-extrabold leading-none ${
            isLast ? "text-orange" : TEXT_COLOR[stage.color]
          }`}
        >
          &gt;
        </span>
      </div>
      <p className="text-base leading-snug text-navy/70">{stage.desc}</p>
    </>
  );
}

function SummaryScene() {
  return (
    <>
      <div className="mb-2 font-display text-[11px] font-bold tracking-[0.1em] text-blue">
        A REPEATABLE GROWTH PROCESS
      </div>
      <div className="mb-7 font-display text-[clamp(24px,4.5vw,34px)] font-extrabold tracking-tight text-navy">
        Evaluate. Engage. Execute.
      </div>
      <div className="flex items-start justify-between">
        {STAGES.map((s, i) => {
          const isLast = i === STAGES.length - 1;
          return (
            <div key={s.label} className="relative flex flex-1 flex-col items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center font-display text-[11px] font-extrabold ${
                  isLast
                    ? "rounded-lg bg-orange text-white"
                    : `rounded-full border-2 bg-white ${BORDER_COLOR[s.color]} ${TEXT_COLOR[s.color]}`
                }`}
              >
                {s.short}
              </div>
              <div
                className={`mt-2 text-center font-display text-[8.5px] font-bold uppercase tracking-wider ${
                  isLast ? "text-navy" : TEXT_COLOR[s.color]
                }`}
              >
                {s.label}
              </div>
              {!isLast && (
                <div className="absolute right-[-13px] top-0.5 font-display text-lg font-extrabold text-navy/30">
                  &gt;
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function DriveCard() {
  const [visibleScene, setVisibleScene] = useState<Scene>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    function clearTimers() {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    }

    function runSequence() {
      clearTimers();
      SCHEDULE_MS.forEach((delay, i) => {
        timers.current.push(setTimeout(() => setVisibleScene(i), delay));
      });
      timers.current.push(setTimeout(runSequence, LOOP_MS));
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runSequence();
          } else {
            clearTimers();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(card);

    return () => {
      clearTimers();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative box-border flex aspect-square w-full max-w-[460px] flex-col
                 overflow-hidden border border-hair bg-[#fafbfd] p-10"
    >
      <div className="relative flex-1 overflow-hidden">
        <div
          key={visibleScene}
          className="absolute inset-0 flex flex-col justify-center transition-opacity duration-500"
        >
          {visibleScene === 3 ? <SummaryScene /> : <StageScene index={visibleScene} />}
        </div>
      </div>
    </div>
  );
}
