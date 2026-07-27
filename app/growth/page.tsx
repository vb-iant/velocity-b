import Link from "next/link";
import { DriveCard } from "@/components/DriveCard";

export const metadata = {
  title: "Growth — Velocity-B",
};

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaOutline =
  "inline-block border-2 border-navy px-[30px] py-4 text-[15px] font-bold text-navy";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

const PAIN_POINTS = [
  {
    kicker: "01",
    title: "Pipeline",
    body: "Deals tend to trickle in through founder relationships and referrals, which is lovely until you realise there's no repeatable engine behind any of it — so growth ends up capped by how many conversations one or two people can physically have in a week.",
  },
  {
    kicker: "02",
    title: "Positioning",
    body: "The pitch changes depending on who's telling it, which means nobody's quite sure how to describe what you do in one sentence — and if your own team can't repeat it confidently, it's not reasonable to expect a prospect to either.",
  },
  {
    kicker: "03",
    title: "Alignment",
    body: "Sales says one thing, marketing says another, and the founders are quietly doing a third thing in the background because someone has to — everyone's busy, but not everyone's necessarily pulling in the same direction.",
  },
  {
    kicker: "04",
    title: "Ops",
    body: "The systems that should be doing the boring, repetitive work — tracking, nurturing, reporting — either don't exist yet or don't talk to each other, so that work gets done manually, if it gets done at all.",
  },
  {
    kicker: "05",
    title: "Leadership",
    body: "There's no one actually owning growth as a function; it's either the founders' problem by default, or it's nobody's problem in particular until the numbers make it everyone's problem at once.",
  },
];

const HELP_LIST = [
  "We start by diagnosing the constraint, not the typical assumptions",
  "From there we refine a sharper story and a plan that fits you, rather than handing you a generic growth playbook with your logo pasted on top.",
  "Then we implement, building the pipeline, fixing the positioning, getting the systems connected, sometimes as fractional sales or marketing leadership if that's where the actual gap is alongside your team.",
  'We validate against real numbers, and once it\'s working, we expand it, and help you figure out what "owning growth" properly looks like from here.',
];

export default function GrowthPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="font-display text-[36px] font-bold leading-[1.04] tracking-tight md:text-[72px]">
              Founder-led sales got you here.
            </h1>
            <h2 className="font-display mt-0.5 text-[36px] font-bold leading-[1.04] tracking-tight text-blue md:text-[72px]">
              It won&rsquo;t get you to what&rsquo;s next.
            </h2>
            <Link href="/contact" className={`${ctaSolid} mt-7`}>
              Let&rsquo;s get started — book a chat
            </Link>
          </div>
          <div>
            <p className="text-[19px] leading-[1.7] text-[#42465c]">
              It works, for a while, right up until it doesn&rsquo;t: you hit
              a ceiling that founder-led sales can&rsquo;t get you past,
              it&rsquo;s where most B2B companies get stuck, and it&rsquo;s a
              known problem with a known way through.
            </p>
            <div className="mt-7 border border-hair bg-[#fafbfd] p-9">
              <svg viewBox="0 0 340 150" width="100%" height="170">
                <path
                  d="M4,96 Q54,90 104,98 T204,92 T310,96"
                  fill="none"
                  stroke="#c7cad6"
                  strokeWidth="3"
                  strokeDasharray="2 10"
                  strokeLinecap="round"
                />
                <path
                  d="M4,108 C74,104 130,58 210,32 S300,10 336,4"
                  fill="none"
                  stroke="#5CA6FF"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="336" cy="4" r="9" fill="#FF8A3D" />
                <text
                  x="4"
                  y="78"
                  fill="#9096a8"
                  fontSize="13"
                  fontWeight="600"
                  className="font-body"
                >
                  FOUNDER-LED SALES
                </text>
                <text
                  x="150"
                  y="24"
                  fill="#0A1543"
                  fontSize="13"
                  fontWeight="700"
                  className="font-body"
                >
                  REPEATABLE ENGINE
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Where Growth Gets Stuck */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight md:text-[46px]">
          Where Growth Gets Stuck
        </h2>
        <p className="mt-3 max-w-[640px] text-lg leading-[1.7] text-[#42465c]">
          The symptoms show up in different places, but they&rsquo;re usually
          connected.
        </p>
        <div className="mt-8 grid grid-cols-1 border-t border-hair md:grid-cols-5">
          {PAIN_POINTS.map((cell, i) => {
            const color = i % 2 === 0 ? "text-blue" : "text-orange";
            const borderColor = i % 2 === 0 ? "border-blue" : "border-orange";
            return (
              <div
                key={cell.kicker}
                className={`border-t-[3px] pt-6 ${borderColor} ${
                  i !== PAIN_POINTS.length - 1 ? "md:border-r md:border-r-hair" : ""
                } ${i !== 0 ? "md:pl-5" : ""} md:pr-5`}
              >
                <span className={`font-display mb-3 block text-[11px] font-extrabold tracking-[0.08em] ${color}`}>
                  {cell.kicker}
                </span>
                <h3 className="font-display mb-2.5 text-base font-bold">{cell.title}</h3>
                <p className="text-[13.5px] leading-[1.6] text-[#42465c]">{cell.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How We Help / DRIVE */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col items-start">
            <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight md:text-[46px]">
              How We Help
            </h2>
            <div className="mt-6 w-full">
              <DriveCard />
            </div>
            <Link href="/how-we-work" className={`${ctaOutline} mt-6`}>
              See how we work
            </Link>
          </div>
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              We run all of this through DRIVE — the same method behind
              everything we do (see How We Work) — scoped end to end for
              Growth engagements.
            </p>
            <ul className="mt-5 space-y-4">
              {HELP_LIST.map((item) => (
                <li key={item} className="relative max-w-[480px] pl-6 text-lg leading-[1.7] text-[#42465c]">
                  <span className="absolute left-0 top-[11px] h-[9px] w-[9px] rounded-full bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Not Our First Rodeo */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-16 text-center">
        <h2 className="font-display mb-3.5 text-[28px] font-bold leading-tight tracking-tight md:text-[46px]">
          Not Our First Rodeo
        </h2>
        <p className="mx-auto max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          Trust us, we&rsquo;ve been there. At 3radical, we built the sales
          engagement process and value propositions from the ground up —
          pipeline grew past £1.5m, with £500k of new-logo business closed
          and additional investment secured. At Connex One, we stepped in as
          fractional CMO following investment and built the marketing
          function from scratch — new CRM, new website, new message —
          feeding straight into a successful Series C.
        </p>
        <Link href="/our-work" className={`${ctaOutline} mt-9`}>
          See Our Work
        </Link>
      </section>

      {/* Growth Roadmap */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight md:text-[46px]">
          The Growth Roadmap
        </h2>
        <div className="mt-8 grid grid-cols-1 items-stretch gap-16 md:grid-cols-2">
          <div className="flex flex-col">
            <p className="max-w-[640px] text-lg leading-[1.7] text-[#42465c]">
              Want the diagnose stage on its own, before committing to
              anything bigger? The Growth Roadmap is a fixed-scope, paid
              engagement — we diagnose what&rsquo;s actually holding growth
              back and hand you a refined roadmap for fixing it: sharper
              positioning, a clear read on where the real constraint sits,
              and a plan you can run with yourself, whether or not you bring
              us in to execute it.
            </p>
            <Link href="/contact" className={`${ctaAccent} mt-auto self-start`}>
              Growth Roadmap
            </Link>
          </div>
          <div className="flex flex-col bg-blue p-9">
            <svg className="mb-6" viewBox="0 0 140 90" width="140" height="90">
              <path
                d="M10,75 A60,60 0 0 1 130,75"
                fill="none"
                stroke="rgba(255,255,255,.28)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M10,75 A60,60 0 0 1 130,75"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="188.5 188.5"
                strokeDashoffset="56"
              />
              <line
                x1="70"
                y1="75"
                x2="70"
                y2="23"
                stroke="#FF8A3D"
                strokeWidth="4"
                strokeLinecap="round"
                transform="rotate(36 70 75)"
              />
              <circle cx="70" cy="75" r="7" fill="#FFFFFF" />
            </svg>
            <p className="mb-6 text-white/85">
              Want the diagnose stage on us? Start with the free Velocity
              Assessment if you&rsquo;re not ready to commit yet.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-block self-start bg-white px-[30px] py-4 text-[15px] font-bold text-navy"
            >
              Velocity Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-7 max-w-[760px] text-[28px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          Every company&rsquo;s story is different, and we&rsquo;d genuinely
          like to hear yours.
        </h2>
        <Link href="/contact" className={ctaAccent}>
          Book a 30-minute consultation
        </Link>
      </div>
    </main>
  );
}
