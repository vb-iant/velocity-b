import Link from "next/link";
import { AnimatedChevron } from "@/components/AnimatedChevron";

export const metadata = {
  title: "UK Expansion — Velocity-B",
};

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaOutline =
  "inline-block border-2 border-navy px-[30px] py-4 text-[15px] font-bold text-navy";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

const colorClasses = {
  blue: { border: "border-blue", text: "text-blue", dot: "bg-blue" },
  orange: { border: "border-orange", text: "text-orange", dot: "bg-orange" },
  navy: { border: "border-navy", text: "text-navy", dot: "bg-navy" },
};

const CHALLENGES = [
  {
    kicker: "01",
    color: "blue" as const,
    body: "The first sales leader who takes months to hire and onboard doesn't work out, and the momentum, revenue, and budget spent goes with them.",
  },
  {
    kicker: "02",
    color: "orange" as const,
    body: "Expensive senior salespeople get hired but struggle to sell in a market that's untested and unproven for you.",
  },
  {
    kicker: "03",
    color: "navy" as const,
    body: "It's hard to engage and manage the right agency partners, grow the channel network, and build an ecosystem remotely.",
  },
  {
    kicker: "04",
    color: "blue" as const,
    body: "Building buyer trust and customer advocacy remotely is difficult without in-market, in-time-zone resources.",
  },
  {
    kicker: "05",
    color: "orange" as const,
    body: "Local marketing conditions, category competitors, buying groups, and processes differ from those back home.",
  },
  {
    kicker: "06",
    color: "navy" as const,
    body: "Early customers churn, or cross-sell and upsell opportunities get lost, without proper local account management.",
  },
];

const WHAT_WE_DO = [
  {
    label: "Fractional in-market representation",
    body: "working as you, with your voice, values, and proposition embedded in the UK market, not represented from a distance.",
  },
  {
    label: "A full-service satellite team",
    body: "sales leadership, local business development, account management, customer success, creative, and field marketing, all in one place.",
  },
  {
    label: "Back-office support",
    body: "trusted local accountants and legal partners handle the admin of UK compliance, so you don't have to learn it from scratch.",
  },
];

const HOW_WE_DO_IT = [
  {
    label: "Shared performance goals",
    body: "our fee structure blends retainer and performance, so we've got real skin in the game, not just an invoice to send.",
  },
  {
    label: "Flexible, agile delivery",
    body: "a fast, tailored onboarding sprint to start, then we scale the service up or down as you need it.",
  },
  {
    label: "Our 3 E's approach",
    body: "we keep the process light — Evaluate, Engage, and Execute — so we can quickly identify what matters and start adding value fast.",
  },
];

const SPRINT_PHASES = [
  {
    label: "Phase 1 · Weeks 1–3",
    title: "Foundation & Architecture",
    color: "blue" as const,
    items: [
      {
        title: "Market Audit",
        body: "Local competitive landscape analysis, market size and valuation.",
      },
      {
        title: "ICP & Positioning",
        body: "Define local target buyer profiles and craft high-converting multi-channel messaging.",
      },
      {
        title: "The UK Growth Playbook",
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

export default function UkExpansionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              <AnimatedChevron className="text-blue" />
              The UK, without the guesswork.
            </h1>
            <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
              Or the cold start.
            </h2>
          </div>
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Whether you&rsquo;re heading east from the U.S. or west from
              Europe, entering the UK&rsquo;s lucrative tech market can be a
              milestone in your company&rsquo;s growth, and we can help.
            </p>
            <div className="font-display mt-5 text-[22px] font-semibold text-blue">
              We become your UK team. Your voice, your values, your pipeline.
            </div>
            <Link href="/contact" className={`${ctaSolid} mt-7`}>
              Let&rsquo;s get started
            </Link>
          </div>
        </div>
      </section>

      {/* Land in the UK */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              <AnimatedChevron className="text-blue" />
              Land in the UK with Velocity
            </h2>
            <p className="mt-4 max-w-none text-lg leading-[1.7] text-[#42465c]">
              You&rsquo;ve already proven the model back home, so the UK
              looks like the obvious next step: same language, a market that
              feels familiar on the surface, a lot of the same buyer logic
              underneath. Except it isn&rsquo;t quite the same.
            </p>
            <p className="mt-4 max-w-none text-lg leading-[1.7] text-[#42465c]">
              Most companies end up doing one of two things: sending someone
              over cold and hoping for the best, or waiting so long to make
              the move that the opportunity&rsquo;s moved on without them.
            </p>
            <p className="mt-4 max-w-none text-lg leading-[1.7] text-[#42465c]">
              We&rsquo;re that local team, from day one. Not a reseller, not
              a logo slapped onto a partnership page — an actual extension
              of you, in the UK, from the first conversation through to a
              fully running pipeline.
            </p>
          </div>
          <div className="border border-hair bg-[#fafbfd] p-9">
            <svg viewBox="0 0 260 340" width="100%" height="320" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 53.4,160.8 L 42.3,185.5 L 26.8,178.0 L 14.0,178.5 L 18.3,159.3 L 14.0,140.0 L 31.3,138.5 L 53.4,160.8 Z"
                fill="#e7e8ee"
                stroke="#5CA6FF"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M 108.2,14.0 L 86.2,52.9 L 107.2,48.0 L 129.8,48.2 L 124.4,77.5 L 105.9,109.7 L 127.2,112.0 L 128.8,115.8 L 147.2,158.2 L 161.3,164.0 L 174.0,205.0 L 179.9,219.2 L 204.9,226.0 L 202.4,249.0 L 191.9,259.6 L 200.1,278.2 L 181.6,297.0 L 154.0,296.7 L 118.8,306.6 L 109.2,299.5 L 95.6,316.3 L 76.5,312.3 L 62.0,326.0 L 51.0,318.8 L 81.3,281.0 L 99.8,273.3 L 99.6,273.2 L 67.4,267.3 L 61.5,252.9 L 83.1,241.8 L 71.8,222.4 L 75.7,198.9 L 106.4,202.1 L 106.4,202.1 L 109.5,181.2 L 95.6,159.1 L 95.3,158.6 L 70.3,152.3 L 65.4,142.5 L 72.9,126.4 L 66.1,116.5 L 55.0,133.5 L 53.8,98.9 L 43.3,80.5 L 50.8,43.4 L 66.9,14.2 L 83.3,17.0 L 108.2,14.0 Z"
                fill="#e7e8ee"
                stroke="#5CA6FF"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="167.6" cy="270.3" r="5" fill="#FF8A3D" />
              <text
                x="177"
                y="274"
                fill="#0A1543"
                fontSize="12"
                fontWeight="700"
                className="font-display"
              >
                LONDON
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Challenges We've Seen */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          Challenges We&rsquo;ve Seen
        </h2>
        <p className="mt-3 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          It&rsquo;s hard to keep all the plates spinning remotely in a new
          market, while you&rsquo;re still focused on building sales and
          channels at home. We&rsquo;ve seen these challenges close up —
          maybe you&rsquo;ll recognise them.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
          {CHALLENGES.map((item) => {
            const c = colorClasses[item.color];
            return (
              <div key={item.kicker} className={`border-t-[6px] pt-6 ${c.border}`}>
                <span className={`font-display mb-2 block text-[11px] font-extrabold tracking-[0.08em] ${c.text}`}>
                  {item.kicker}
                </span>
                <p className="text-lg leading-[1.7] text-[#42465c]">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How We Help */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          How We Help
        </h2>
        <p className="mt-3 max-w-[640px] text-lg leading-[1.7] text-[#42465c]">
          Two ways to engage, customized to you, built for Series A/B
          companies who&rsquo;ve already got product-market fit at home and a
          12–18 month goal to establish traction in the UK. You&rsquo;re not
          testing an idea here; you&rsquo;re bringing a proven one into a new
          market, and that deserves to be done properly rather than
          experimentally.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="border-t-[6px] border-blue pt-6">
            <h3 className="font-display text-[22px] font-semibold">UK-as-a-Service</h3>
            <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">
              This is the core offer, and it does what it says: we run your
              UK presence as if we were your own team — sales, marketing,
              local account management, localised content, and everything in
              between so you end up with a functioning UK operation without
              having to hire one from scratch.
            </p>
          </div>
          <div className="border-t-[6px] border-orange pt-6">
            <h3 className="font-display text-[22px] font-semibold">GTM Support</h3>
            <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">
              For companies who want strategic and tactical help without
              taking on the full embedded-team model, we scope this to
              whatever&rsquo;s actually missing — fractional sales or
              marketing leadership, hands-on coaching, or targeted tactical
              support to move the needle on a specific problem (see How We
              Work for the full list of what that can include).
            </p>
          </div>
        </div>
        <Link href="/contact" className={`${ctaSolid} mt-9`}>
          Get in touch - Find out more
        </Link>
      </section>

      {/* UK-as-a-Service detail */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          UK-as-a-Service
        </h2>
        <p className="mt-3 max-w-none text-lg leading-[1.7] text-[#42465c]">
          We become your UK team, in practice as much as in name:
        </p>
        <div className="mt-8 grid grid-cols-1 gap-x-10 md:grid-cols-2">
          <div>
            <span className="font-display block text-[11px] font-extrabold tracking-[0.08em] text-blue">
              WHAT WE DO
            </span>
            <ul className="mt-4 space-y-5">
              {WHAT_WE_DO.map((item) => (
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
          <div className="mt-8 md:mt-0">
            <span className="font-display block text-[11px] font-extrabold tracking-[0.08em] text-orange">
              HOW WE DO IT
            </span>
            <ul className="mt-4 space-y-5">
              {HOW_WE_DO_IT.map((item) => (
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

      {/* Get Started with a Velocity Sprint */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          Get Started with a Velocity Sprint
        </h2>
        <p className="mt-4 max-w-[860px] text-lg leading-[1.7] text-[#42465c]">
          This <strong className="text-navy">8-Week Velocity Sprint</strong>{" "}
          gives you a complete revenue audit, a tailored go-to-market
          playbook, optimized infrastructure, and live multi-channel
          execution. Meaning you can skip months of trial and error,
          redundant MarTech costs, and disconnected sales and marketing
          teams.
        </p>
        <p className="mt-4 max-w-[860px] text-lg leading-[1.7] text-[#42465c]">
          The sprint is tailored to your needs and can include:
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
                      <span className={`absolute left-0 top-[19px] h-[6px] w-[6px] ${c.dot}`} />
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

      {/* Our Experience */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-16 text-center">
        <h2 className="font-display mb-3.5 text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          Our Experience
        </h2>
        <p className="mx-auto max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          We have direct experience leading growth for US software
          businesses in the UK, including Tibco, Attus, Alterian, and GEP,
          and expansion in the UK for European businesses, including SAP and
          Censhare.
        </p>
        <div className="mt-8 mb-8 flex flex-wrap items-center justify-center">
          {["Tibco", "Attus", "Alterian", "GEP", "SAP", "Censhare"].map((name, i) => (
            <span
              key={name}
              className={`font-display px-6 text-xl font-bold text-[#9096a8] ${
                i !== 0 ? "border-l border-hair" : ""
              }`}
            >
              {name}
            </span>
          ))}
        </div>
        <Link href="/our-work" className={ctaOutline}>
          See Our Work
        </Link>
      </section>

      {/* Final CTA */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-7 max-w-[760px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          Ready to Land?
        </h2>
        <p className="mx-auto mb-7 max-w-[600px] text-[#cfd6e8]">
          We&rsquo;ve given you a glimpse of how we help, and every
          company&rsquo;s story is different — we&rsquo;d like to hear yours.
        </p>
        <Link href="/contact" className={ctaAccent}>
          Get in Touch
        </Link>
      </div>
    </main>
  );
}
