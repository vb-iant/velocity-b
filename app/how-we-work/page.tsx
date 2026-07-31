import Link from "next/link";
import Image from "next/image";
import { AnimatedChevron } from "@/components/AnimatedChevron";
import { DriveCard } from "@/components/DriveCard";

export const metadata = {
  title: "How We Work — Velocity-B",
};

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaOutline =
  "inline-block border-2 border-navy px-[30px] py-4 text-[15px] font-bold text-navy";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

const IMPLEMENT_SERVICES = [
  {
    title: "Fractional marketing leadership",
    body: "Hands-on experienced support for your marketing function, without the cost or delay of a full-time hire.",
    color: "border-blue text-blue",
  },
  {
    title: "Fractional sales leadership",
    body: "An experienced CRO who can engage quickly, drive your sales function and get your pipeline moving.",
    color: "border-orange text-orange",
  },
  {
    title: "Whitelabel sales execution",
    body: "We run outbound and pipeline generation as an extension of your team, under your name.",
    color: "border-navy text-navy",
  },
  {
    title: "Revenue operations review",
    body: "We review the sales and marketing technology and processes and recommend where you can sharpen up.",
    color: "border-navy text-navy",
  },
  {
    title: "Account management",
    body: "A real point of contact in-market, understanding customer needs and cross-sell/up-sell opportunities.",
    color: "border-blue text-blue",
  },
  {
    title: "Content Marketing",
    body: 'Not just "random acts of content", but compelling content built for your market and buyer, executed against an engagement strategy.',
    color: "border-orange text-orange",
  },
];

export default function HowWeWorkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              <AnimatedChevron className="text-blue" />Forget
              <br />
              the TLAs.
            </h1>
            <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
              Just GSD.
            </h2>
          </div>
          <div>
            <p className="max-w-[520px] text-lg leading-[1.7] text-[#42465c]">
              GSD: Get Sh*t Done. It&rsquo;s the only TLA we&rsquo;ll own, no
              strategy frameworks, no pointless decks, no process for the
              sake of process.
            </p>
            <p className="mt-4 max-w-[520px] text-lg leading-[1.7] text-[#42465c]">
              We&rsquo;ve done this before, different companies, different
              sectors, the same underlying pattern turning up again and
              again, where growth stalls, or the story isn&rsquo;t landing,
              or the ground has simply shifted underneath you faster than
              anyone had time to notice. <strong>We can help.</strong>
            </p>
            <Link href="/contact" className={`${ctaSolid} mt-5`}>
              Let&rsquo;s chat
            </Link>
          </div>
        </div>
      </section>

      {/* A Process for Growth */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              <AnimatedChevron className="text-blue" />A Simple Process for Growth
            </h2>
            <p className="mt-4 text-lg leading-[1.7] text-[#42465c]">
              Our engagements are agile, providing just the help you need,
              with a flexible deployment model.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-[19px] font-bold text-blue">
                  Evaluate
                </h3>
                <p className="mt-1.5 text-lg leading-[1.6] text-[#42465c]">
                  We quickly stress-test your go-to-market strategy, data,
                  messaging, and execution, so you get a clear picture of
                  what&rsquo;s working, what&rsquo;s slowing revenue, and
                  what needs to change.
                </p>
              </div>
              <div>
                <h3 className="font-display text-[19px] font-bold text-navy">
                  Engage
                </h3>
                <p className="mt-1.5 text-lg leading-[1.6] text-[#42465c]">
                  We work with your team to refine positioning, clarify
                  priorities, and align sales and marketing around an
                  executable revenue plan.
                </p>
              </div>
              <div>
                <h3 className="font-display text-[19px] font-bold text-orange">
                  Execute
                </h3>
                <p className="mt-1.5 text-lg leading-[1.6] text-[#42465c]">
                  We embed with your team to deliver it: building
                  campaigns, improving conversion, sharpening messaging,
                  fixing the tooling that&rsquo;s quietly getting in the
                  way.
                </p>
              </div>
            </div>
          </div>
          <div>
            <DriveCard />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />How we work
        </h2>
        <p className="mt-4 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          When we refer to rolling up our sleeves and getting sh*t done,
          for each engagement, we provide a blend of capabilities from our
          managing partners and trusted network of specialists, that
          include:
        </p>
        <div className="mt-8 grid grid-cols-1 border-l border-t border-hair md:grid-cols-3">
          {IMPLEMENT_SERVICES.map((service) => (
            <div
              key={service.title}
              className={`-mt-px border-b border-r border-hair border-t-4 p-6 ${service.color.split(" ")[0]}`}
            >
              <h3 className={`font-display mb-2.5 text-[17px] font-bold ${service.color.split(" ")[1]}`}>
                {service.title}
              </h3>
              <p className="text-lg leading-[1.6] text-[#42465c]">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Alex & Ian */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Meet Alex &amp; Ian
        </h2>
        <p className="mt-4 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          Our managing partners have decades of sales and marketing
          leadership experience and a tight, trusted network of experts who
          get sh*t done when called upon.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col border-t-[6px] border-orange pt-6">
            <a
              href="https://www.linkedin.com/in/alex-simonson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Alex Simonson on LinkedIn"
              className="group relative block h-[120px] w-[120px] overflow-hidden"
            >
              <Image
                src="/team/alex.jpg"
                alt="Alex Simonson"
                width={120}
                height={120}
                className="h-[120px] w-[120px] object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/25" />
            </a>
            <h3 className="font-display mt-4 text-[22px] font-semibold">Alex Simonson</h3>
            <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">
              A seasoned sales leader with over 20 years of experience,
              driving SaaS and data-led revenue growth strategies with a wide
              range of companies from start-ups to global enterprises.
            </p>
            <p className="mt-6 text-lg italic leading-[1.6] text-navy">
              &ldquo;Alex coached me to win some of the most complex and
              exciting individual projects I have worked on.&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#9096a8]">
              — Bruce Seymour, Client Director, MantisNLP
            </p>
          </div>
          <div className="flex flex-col border-t-[6px] border-blue pt-6">
            <a
              href="https://www.linkedin.com/in/iantruscott/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ian Truscott on LinkedIn"
              className="group relative block h-[120px] w-[120px] overflow-hidden"
            >
              <Image
                src="/team/ian.jpg"
                alt="Ian Truscott"
                width={120}
                height={120}
                className="h-[120px] w-[120px] object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/25" />
            </a>
            <h3 className="font-display mt-4 text-[22px] font-semibold">Ian Truscott</h3>
            <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">
              Founder of Velocity B, based on a background in tech and
              product development, Ian is an experienced marketing leader,
              4x CMO, writer, and trusted advisor.
            </p>
            <p className="mt-6 text-lg italic leading-[1.6] text-navy">
              &ldquo;I recommend anyone looking for a voice of reason in the
              software technology world to seek Ian&rsquo;s input.&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#9096a8]">
              — Siobhan Fagan, Chief Editor, Reworked
            </p>
          </div>
        </div>
        <p className="mt-12 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          No account managers. No junior hand-offs. You work directly with
          senior operators who have built, scaled, and led B2B GTM engines
          before.
        </p>
        <Link href="/about" className={`${ctaOutline} mt-6`}>
          About Us
        </Link>
      </section>

      {/* Our Experience */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-16 text-center">
        <h2 className="font-display mb-3.5 text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Our Experience
        </h2>
        <p className="mx-auto max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          This isn&rsquo;t theory we picked up from a book. It&rsquo;s honed
          from hard-earned experience, sometimes making the mistakes you
          don&rsquo;t want to, and you can learn more about some of that in{" "}
          <Link href="/our-work" className="font-semibold text-navy">
            Our Work
          </Link>{" "}
          or connect with us on{" "}
          <a
            href="https://www.linkedin.com/company/velocityb"
            target="_blank"
            rel="noopener"
            className="font-semibold text-navy"
          >
            LinkedIn
          </a>
          .
        </p>
        <Link href="/our-work" className={`${ctaOutline} mt-8`}>
          Our Work
        </Link>
      </section>

      {/* Ready to Start */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-3 max-w-[760px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          <AnimatedChevron className="text-blue" />Ready to Start?
        </h2>
        <h3 className="font-display mx-auto mb-7 max-w-[640px] text-xl font-semibold text-white/90">
          Turn Your Sales &amp; Marketing Into a Growth Engine.
        </h3>
        <p className="mx-auto mb-9 max-w-[640px] text-lg leading-[1.7] text-white/80">
          Skip months of trial and error with our{" "}
          <strong className="text-white">8-week Velocity Sprint</strong>, a
          high-intensity, fixed-scope program to audit your revenue
          operations, build your outbound playbook, and launch active sales
          campaigns.
        </p>
        <Link href="/velocity-sprint" className={ctaAccent}>
          Discover The Velocity Sprint
        </Link>
      </div>
    </main>
  );
}
