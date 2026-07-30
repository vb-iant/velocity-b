import Link from "next/link";
import { AnimatedChevron } from "@/components/AnimatedChevron";

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

const REVENUE_AS_A_SERVICE = [
  {
    label: "Fractional representation",
    body: "working as you, with your voice, values, and proposition properly embedded operating as you.",
  },
  {
    label: "A full-service revenue team",
    body: "sales leadership, local onshore business development, account management, customer success, creative, and field marketing, all in one place.",
  },
  {
    label: "Shared performance goals",
    body: "our fee structure mixes retainer and performance, so we've got real skin in the game alongside you, not just an invoice to send.",
  },
  {
    label: "Flexible, agile delivery",
    body: "a fast, tailored onboarding process to start, then we scale the service up or down as you actually need it.",
  },
  {
    label: "Revenue and marketing operations",
    body: "we sort out the tech, the CRM, the digital platforms, the AI tools, and the data, ensuring it's clean, segmented and integrated.",
  },
];

const VELOCITY_SPRINT = [
  {
    label: "MarTech Audit",
    body: "Rationalize your tech stack, cut redundant software costs, and set up modern sales infrastructure.",
  },
  {
    label: "ICP & Positioning",
    body: "Define target buyer profiles and craft high-converting multi-channel messaging.",
  },
  {
    label: "The Growth Playbook",
    body: "A complete, repeatable go-to-market execution blueprint.",
  },
  {
    label: "Campaign Launch",
    body: "Active sales, marketing, and BD execution targeting your highest-value prospects.",
  },
  {
    label: "Weekly Optimization Loops",
    body: "Real-time data collection, message testing, and pipeline review.",
  },
  {
    label: "Scaling Roadmap",
    body: "Data-backed recommendations for full long-term scaling.",
  },
];

export default function GrowthPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              <AnimatedChevron className="text-blue" />What got you here,
            </h1>
            <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
              Might not get you to what&rsquo;s next.
            </h2>
            <p className="mt-5 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Growing a B2B SaaS company with a small team is hard. You
              don&rsquo;t need more theory or buzzwords, you need clear
              thinking, experienced support, and help turning good enough
              into growth.
            </p>
            <Link href="/contact" className={`${ctaSolid} mt-7`}>
              Let&rsquo;s get started — book a chat
            </Link>
          </div>
          <div className="mt-2 border border-hair bg-[#fafbfd] p-9">
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
                WHAT GOT YOU HERE
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
      </section>

      {/* Where Growth Gets Stuck */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Where Growth Gets Stuck
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
                <p className="text-lg leading-[1.7] text-[#42465c]">{cell.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Revenue-as-a-Service */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              <AnimatedChevron className="text-blue" />Revenue-as-a-Service
            </h2>
            <p className="mt-4 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              If you&rsquo;re a B2B SaaS company trying to grow with a small
              team, you probably don&rsquo;t need more theory, you need clear
              thinking, experienced hands, and help turning &ldquo;good
              enough&rdquo; into an actual growth engine.
            </p>
            <p className="mt-4 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              We call this the Revenue Department, not siloed sales and
              marketing teams, a blend of sales, marketing, business
              development, and account management that works for and with
              your business, while you get on with the business of building
              a great product.
            </p>
            <p className="mt-4 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              And we provide this as a service.
            </p>
            <Link href="/contact" className={`${ctaOutline} mt-7 self-start`}>
              Let&rsquo;s show you
            </Link>
          </div>
          <ul className="space-y-5">
            {REVENUE_AS_A_SERVICE.map((item) => (
              <li key={item.label} className="border-t-[3px] border-blue pt-4">
                <p className="text-lg leading-[1.7] text-[#42465c]">
                  <strong className="font-display font-bold text-navy">
                    {item.label}
                  </strong>{" "}
                  — {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Velocity Sprint */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              <AnimatedChevron className="text-blue" />The Velocity Sprint
            </h2>
            <p className="mt-4 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Skip months of trial and error, redundant MarTech costs, and
              disconnected sales and marketing teams. The{" "}
              <strong className="text-navy">8-Week Velocity Sprint</strong>{" "}
              gives you a complete revenue audit, a tailored go-to-market
              playbook, optimized infrastructure, and live multi-channel
              execution.
            </p>
            <Link href="/velocity-sprint" className={`${ctaAccent} mt-7 self-start`}>
              Let&rsquo;s get started
            </Link>
          </div>
          <div>
            <h3 className="font-display mb-5 text-[22px] font-semibold">
              Built to deliver fast results, you get:
            </h3>
            <ul className="space-y-5">
              {VELOCITY_SPRINT.map((item) => (
                <li key={item.label} className="border-t-[3px] border-orange pt-4">
                  <p className="text-lg leading-[1.7] text-[#42465c]">
                    <strong className="font-display font-bold text-navy">
                      {item.label}
                    </strong>{" "}
                    — {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Not Our First Rodeo */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-16 text-center">
        <h2 className="font-display mb-3.5 text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Not Our First Rodeo
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

      {/* Final CTA */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-7 max-w-[760px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          <AnimatedChevron className="text-blue" />Every company&rsquo;s
          story is different, and we&rsquo;d genuinely like to hear yours.
        </h2>
        <Link href="/contact" className={ctaAccent}>
          Get in touch
        </Link>
      </div>
    </main>
  );
}
