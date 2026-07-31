import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AnimatedChevron } from "@/components/AnimatedChevron";

export const metadata: Metadata = {
  title: "About — Velocity-B",
  description:
    "Velocity B started with a simple idea: growing B2B tech companies deserve commercial thinking that's as sharp as their product.",
};

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaOutline =
  "inline-block border-2 border-navy px-[30px] py-4 text-[15px] font-bold text-navy";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

// Tailwind needs full, static class strings to detect them at build time —
// a template-literal color (e.g. `border-${color}`) gets purged. Map to
// complete class strings instead.
const NETWORK_COLORS = {
  blue: { border: "border-blue", text: "text-blue" },
  orange: { border: "border-orange", text: "text-orange" },
  navy: { border: "border-navy", text: "text-navy" },
} as const;

const NETWORK = [
  {
    role: "Senior Copywriter",
    body: "No, AI can’t do the good stuff, but our favourite copywriter can.",
    color: "blue" as const,
  },
  {
    role: "SEO / GEO",
    body: "We were there when they created their agency; they’re there for us now.",
    color: "orange" as const,
  },
  {
    role: "Creative & Design",
    body: "Worked with the same designer since 2018, still surprised by her speed.",
    color: "navy" as const,
  },
  {
    role: "CRM",
    body: "Our friend has worked with the big brands, and is unfazed by whatever your CRM is hiding.",
    color: "blue" as const,
  },
  {
    role: "Win/Loss",
    body: "Part detective, part CIA operative — he’ll figure out why that deal went down.",
    color: "orange" as const,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              <AnimatedChevron className="text-blue" />Less deck.
            </h1>
            <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
              More done.
            </h2>
          </div>
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Velocity B started with a simple idea: growing B2B tech
              companies deserve commercial thinking that&rsquo;s as sharp as
              their product.
            </p>
            <p className="mt-4 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              We bring the kind of strategic thinking you&rsquo;d expect from
              a seasoned commercial leadership team &mdash; corporate
              strategy, ICP clarity, sales velocity, disciplined revenue
              operations &mdash; but with a GSD (Get Sh*t Done) philosophy
              and a willingness to roll up our sleeves and do the work.{" "}
              <strong className="text-navy">
                Not theoretical playbooks. Hands-on execution.
              </strong>
            </p>
            <Link href="/contact" className={`${ctaSolid} mt-5`}>
              Let&rsquo;s talk
            </Link>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Experience
        </h2>
        <p className="mt-4 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          We know a great product rarely proves enough on its own. To grow
          sustainably, you need a go-to-market plan that actually joins
          marketing and sales together, delivering real, reliable revenue
          &mdash; not just a plan that looks impressive in a deck.
        </p>
        <p className="mt-4 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          Velocity B is built on hard-won experience from the GTM front line
          &mdash; as CROs, CMOs, and revenue leaders &mdash; around a simple
          mantra: creating ART, Awareness, Revenue, and Trust. We&rsquo;ve
          been doing this since 2018, under a couple of earlier names you
          probably won&rsquo;t recognise, and we&rsquo;ve helped plenty of
          sales and marketing teams get where they were trying to go.
        </p>
      </section>

      {/* Why Velocity B */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Why Velocity B?
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
          <p className="text-lg leading-[1.7] text-[#42465c]">
            The experience of a seasoned commercial team, without the cost,
            risk, or time of hiring one. We&rsquo;ve spent decades building
            and leading go-to-market teams for successful B2B software
            companies, in home markets and new ones alike.
          </p>
          <p className="text-lg leading-[1.7] text-[#42465c]">
            We understand what actually separates &ldquo;just another new
            entrant&rdquo; from someone buyers trust &mdash; the cultural
            nuances, sales rhythm, and credibility cues that are easy to get
            wrong from the outside, and easy to miss if you haven&rsquo;t
            lived them.
          </p>
          <p className="text-lg leading-[1.7] text-[#42465c]">
            We&rsquo;ve got a get-it-done attitude &mdash; we don&rsquo;t
            just advise, we deliver. From diagnosis to execution, we roll our
            sleeves up and make sure it adds up to measurable growth.
          </p>
        </div>
        <Link href="/how-we-work" className={`${ctaAccent} mt-10`}>
          Learn How We Work
        </Link>
      </section>

      {/* Meet Alex & Ian */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Meet Alex &amp; Ian
        </h2>
        <p className="mt-4 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          Every engagement starts with the two of us. Not a rotating cast,
          not whoever happens to be free that month &mdash; Ian and Alex, in
          the room, accountable, from the first conversation through to the
          results.
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
              Alex is a seasoned sales leader with over twenty years of
              experience driving SaaS and data-led revenue growth, from
              scrappy start-ups to global enterprises. He helps clients
              navigate complex markets with commercial clarity &mdash; sales
              leadership grounded in real customer engagement and data
              science, not just a quota and a CRM login.
            </p>
            <p className="mt-6 text-lg italic leading-[1.6] text-navy">
              &ldquo;Alex coached me to win some of the most complex and
              exciting individual projects I have worked on. If you want a
              loud, blustering, control merchant, this isn&rsquo;t Alex. What
              you get instead is calm, thoughtful, high EQ, strategically
              gifted support.&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#9096a8]">
              — Bruce Seymour, Director, MantisNLP
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
              With a background in tech and product development, Ian is a 4x
              CMO, writer, and trusted advisor who&rsquo;s spent two decades
              helping B2B companies build genuine commercial momentum rather
              than just marketing activity. He founded Velocity B, and still
              writes about a lot of this most weeks on his own blog, if you
              want a sense of how he thinks.
            </p>
            <p className="mt-6 text-lg italic leading-[1.6] text-navy">
              &ldquo;I recommend anyone looking for a voice of reason in the
              software technology world to seek Ian&rsquo;s input.&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#9096a8]">
              — Siobhan Fagan, Editor-in-Chief, Reworked
            </p>
          </div>
        </div>
      </section>

      {/* The Network */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />The Network
        </h2>
        <p className="mt-4 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          Beyond the two of us, we work with a small, vetted network of
          specialists, brought in when a project calls for expertise we
          don&rsquo;t have in-house, scoped tightly to the needs of that
          particular engagement. It&rsquo;s not a bench of names we roll out
          for every project &mdash; it&rsquo;s a model, and it means you get
          the specific expertise you actually need without paying for a big
          team you don&rsquo;t.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {NETWORK.map((item) => {
            const colors = NETWORK_COLORS[item.color];
            return (
              <div key={item.role} className={`border-l-2 ${colors.border} pl-5`}>
                <div
                  className={`font-display text-[13px] font-bold uppercase tracking-wider ${colors.text}`}
                >
                  {item.role}
                </div>
                <p className="mt-1.5 text-lg leading-[1.7] text-[#42465c]">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* That's us — what about you? */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-3 max-w-[760px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          <AnimatedChevron className="text-blue" />That&rsquo;s us &mdash;
          what about you?
        </h2>
        <p className="mx-auto mb-9 max-w-[560px] text-lg leading-[1.7] text-white/80">
          Let&rsquo;s have a short, no-obligation 30-minute call; we&rsquo;ll
          talk through your GTM challenges and tell you honestly whether we
          can help.
        </p>
        <Link href="/contact" className={ctaAccent}>
          Book a Meeting
        </Link>
      </div>
    </main>
  );
}
