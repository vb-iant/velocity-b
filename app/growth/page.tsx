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
    color: "blue" as const,
    body: "Deals tend to trickle in through founder relationships and referrals, which is lovely until you realise there's no repeatable engine behind any of it — so growth ends up capped by how many conversations one or two people can physically have in a week.",
  },
  {
    kicker: "02",
    title: "Positioning",
    color: "orange" as const,
    body: "The pitch changes depending on who's telling it, which means nobody's quite sure how to describe what you do in one sentence — and if your own team can't repeat it confidently, it's not reasonable to expect a prospect to either.",
  },
  {
    kicker: "03",
    title: "Alignment",
    color: "navy" as const,
    body: "Sales says one thing, marketing says another, and the founders are quietly doing a third thing in the background because someone has to — everyone's busy, but not everyone's necessarily pulling in the same direction.",
  },
  {
    kicker: "04",
    title: "Ops",
    color: "blue" as const,
    body: "The systems that should be doing the boring, repetitive work — tracking, nurturing, reporting — either don't exist yet or don't talk to each other, so that work gets done manually, if it gets done at all.",
  },
  {
    kicker: "05",
    title: "Leadership",
    color: "orange" as const,
    body: "There's no one actually owning growth as a function; it's either the founders' problem by default, or it's nobody's problem in particular until the numbers make it everyone's problem at once.",
  },
];

const colorClasses = {
  blue: { border: "border-blue", text: "text-blue" },
  orange: { border: "border-orange", text: "text-orange" },
  navy: { border: "border-navy", text: "text-navy" },
};

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

const SPRINT_PHASES = [
  {
    label: "Phase 1 · Weeks 1–3",
    title: "Foundation & Architecture",
    color: "blue" as const,
    items: [
      {
        title: "MarTech Audit",
        body: "Rationalize your tech stack, cut redundant software costs, and set up modern sales infrastructure.",
      },
      {
        title: "ICP & Positioning",
        body: "Define target buyer profiles and craft high-converting multi-channel messaging.",
      },
      {
        title: "The Growth Playbook",
        body: "A complete, repeatable go-to-market execution blueprint.",
      },
    ],
  },
  {
    label: "Phase 2 · Weeks 4–8",
    title: "Live Execution & Market Testing",
    color: "orange" as const,
    items: [
      {
        title: "Campaign Launch",
        body: "Active sales, marketing, and BD execution targeting your highest-value prospects.",
      },
      {
        title: "Weekly Optimization Loops",
        body: "Real-time data collection, message testing, and pipeline review.",
      },
      {
        title: "Scaling Roadmap",
        body: "Data-backed recommendations for full long-term scaling.",
      },
    ],
  },
];

export default function GrowthPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              <AnimatedChevron className="text-blue" />What got you here,
            </h1>
            <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
              Might not get you to what&rsquo;s next.
            </h2>
          </div>
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Growing a B2B SaaS company with a small team is hard. You
              don&rsquo;t need more theory or buzzwords, you need clear
              thinking, experienced support, and help turning good enough
              into growth.
            </p>
            <Link href="/contact" className={`${ctaSolid} mt-7`}>
              Let&rsquo;s get started — book a chat
            </Link>
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
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
          {PAIN_POINTS.map((cell) => {
            const c = colorClasses[cell.color];
            return (
              <div key={cell.kicker} className={`flex flex-col border-t-[6px] pt-6 ${c.border}`}>
                <span className={`font-display mb-2 block text-[11px] font-extrabold tracking-[0.08em] ${c.text}`}>
                  {cell.kicker}
                </span>
                <h3 className="font-display text-[22px] font-semibold">{cell.title}</h3>
                <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">{cell.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Revenue-as-a-Service */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Revenue-as-a-Service
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              If you&rsquo;re a B2B SaaS company trying to grow with a small
              team, you probably don&rsquo;t need more theory, you need clear
              thinking, experienced hands, and help turning &ldquo;good
              enough&rdquo; into an actual growth engine.
            </p>
            <p className="mt-4 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              And we provide this as a service, not siloed sales and
              marketing teams, a blend of sales, marketing, business
              development, and account management that works for and with
              your business, while you get on with the business of building
              a great product.
            </p>
          </div>
          <div>
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
            <Link href="/contact" className={`${ctaOutline} mt-8`}>
              Get in touch — find out more
            </Link>
          </div>
        </div>
      </section>

      {/* The Velocity Sprint */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Start with a Velocity Sprint
        </h2>
        <p className="mt-4 max-w-[860px] text-lg leading-[1.7] text-[#42465c]">
          Skip months of trial and error, redundant MarTech costs, and
          disconnected sales and marketing teams. The{" "}
          <strong className="text-navy">8-Week Velocity Sprint</strong> gives
          you a complete revenue audit, a tailored go-to-market playbook,
          optimized infrastructure, and live multi-channel execution.{" "}
          <strong className="text-navy">Built to deliver fast results, you get:</strong>
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {SPRINT_PHASES.map((phase) => {
            const c = colorClasses[phase.color];
            return (
              <div key={phase.title} className={`border-t-[6px] pt-6 ${c.border}`}>
                <div className={`font-display text-[12px] font-bold uppercase tracking-[.08em] ${c.text}`}>
                  {phase.label}
                </div>
                <h3 className="font-display mt-2 text-[24px] font-semibold">
                  {phase.title}
                </h3>
                <ul className="mt-4">
                  {phase.items.map((item, i) => (
                    <li
                      key={item.title}
                      className={`relative border-hair py-3 pl-6 text-lg leading-[1.6] text-[#42465c] ${
                        i !== 0 ? "border-t" : ""
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-[19px] h-[6px] w-[6px] ${
                          phase.color === "blue" ? "bg-blue" : "bg-orange"
                        }`}
                      />
                      <strong className="text-navy">{item.title}</strong> —{" "}
                      {item.body}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <Link href="/velocity-sprint" className={`${ctaAccent} mt-10`}>
          Let&rsquo;s get started
        </Link>
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
