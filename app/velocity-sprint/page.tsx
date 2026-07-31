import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedChevron } from "@/components/AnimatedChevron";
import { HubspotForm } from "@/components/HubspotForm";

const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";
const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";

export const metadata: Metadata = {
  title: "The Velocity Sprint | Velocity-B",
  description:
    "An 8-week, fixed-scope program to audit your revenue operations, build your go-to-market playbook, and launch live sales and marketing execution.",
};

const phases = [
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

const results = [
  {
    title: "An Audited, Lean MarTech Infrastructure",
    body: "Clean CRM setups, deliverability-optimized domains, and automated data enrichment.",
    color: "border-blue",
  },
  {
    title: "A Tested Go-To-Market Playbook",
    body: "Validated positioning and outbound scripts that resonate with real buyers.",
    color: "border-orange",
  },
  {
    title: "Real Market Intelligence",
    body: "Hard data on what message converts, who buys, and how to scale your pipeline long-term.",
    color: "border-navy",
  },
  {
    title: "Hands-on Execution",
    body: "Sales, marketing, and BD working off the same roadmap and early campaign results.",
    color: "border-blue",
  },
];

export default function VelocitySprintPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="font-display mb-5 text-[12px] font-bold uppercase tracking-[.1em] text-blue">
          The Velocity Sprint
        </div>
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <h1 className="font-display text-[42px] font-bold leading-[1.05] tracking-tight md:text-[56px]">
            Transform your revenue operations in 8 weeks.
          </h1>
          <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
            Skip months of trial and error, redundant MarTech costs, and
            disconnected sales and marketing teams. The{" "}
            <strong className="text-navy">8-Week Velocity Sprint</strong>{" "}
            gives you a complete revenue audit, a tailored go-to-market
            playbook, optimized infrastructure, and live multi-channel
            execution.
          </p>
        </div>
      </section>

      {/* The Velocity Sprint / form */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              <AnimatedChevron className="text-blue" />The Velocity Sprint
            </h2>
            <p className="mt-4 max-w-[640px] text-lg leading-[1.7] text-[#42465c]">
              Revenue isn&rsquo;t created in silos. Sales, Marketing, BD, and
              Account Management must run on a single, synchronized engine.
              The 8-Week Velocity Sprint builds and tests that engine in real
              market conditions — fast.
            </p>
            <p className="mt-6 font-semibold text-navy">What we cover:</p>

            {phases.map((phase) => (
              <div
                key={phase.title}
                className={`mt-8 border-t-[6px] pt-6 ${
                  phase.color === "blue" ? "border-blue" : "border-orange"
                }`}
              >
                <div
                  className={`font-display text-[12px] font-bold uppercase tracking-[.08em] ${
                    phase.color === "blue" ? "text-blue" : "text-orange"
                  }`}
                >
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
            ))}
          </div>

          <div id="form" className="sticky top-8 scroll-mt-8 border-t-[6px] border-navy bg-[#fafbfd] px-8 py-9">
            <h3 className="font-display text-[22px] font-semibold">
              Ready to Build Your Revenue Engine?
            </h3>
            <p className="mt-2 text-base leading-[1.7] text-[#42465c]">
              Stop guessing what works. Let&rsquo;s audit your system, build
              your strategy, and launch live campaigns in 8 weeks.
            </p>

            <div className="mt-6">
              <HubspotForm
                portalId="143941905"
                formId="9a6ddf10-2fd2-45df-8613-c8fb61ba876b"
                region="eu1"
                targetId="velocity-sprint-form"
              />
            </div>

            <p className="mt-4 text-sm italic text-[#9096a8]">
              No long-term commitments required; let&rsquo;s chat and see if
              this is right for you.
            </p>
          </div>
        </div>
      </section>

      {/* You'll Get Results */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />You&rsquo;ll Get Results
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {results.map((item) => (
            <div key={item.title} className={`border-t-4 pt-6 ${item.color}`}>
              <h3 className="font-display text-[20px] font-semibold">{item.title}</h3>
              <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">{item.body}</p>
            </div>
          ))}
        </div>
        <a href="#form" className={`${ctaSolid} mt-10`}>
          Ready to start?
        </a>
      </section>

      {/* Not quite ready */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-7 max-w-[640px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          <AnimatedChevron className="text-blue" />Not quite ready? Let&rsquo;s chat.
        </h2>
        <Link href="/contact" className={ctaAccent}>
          Get in touch
        </Link>
      </div>
    </main>
  );
}
