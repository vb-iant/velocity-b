import Link from "next/link";
import Image from "next/image";
import { AnimatedChevron } from "@/components/AnimatedChevron";

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaOutline =
  "inline-block border-2 border-navy px-[30px] py-4 text-[15px] font-bold text-navy";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
              <AnimatedChevron className="text-blue" />Growth doesn&rsquo;t need more buzzwords.
            </h1>
            <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
              It needs someone who&rsquo;s been there and can do it.
            </h2>
          </div>
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Hi, we help B2B tech companies compete, scale, and grow, based
              on hard-won experience and expertise, with a fractional
              offering we call &ldquo;Revenue-as-a-Service&rdquo;.
            </p>
            <p className="mt-4 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              We&rsquo;re a small, execution-focused team; if something needs
              doing, we roll up our sleeves and do it alongside you.
            </p>
            <Link href="/contact" className={`${ctaSolid} mt-5`}>
              Let&rsquo;s get started
            </Link>
          </div>
        </div>
      </section>

      {/* Revenue-as-a-Service */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Revenue-as-a-Service
        </h2>
        <p className="mt-4 max-w-[720px] text-lg leading-[1.7] text-[#42465c]">
          We believe that growing companies need a Revenue Department, not
          siloed sales and marketing teams, and we provide this as a service.
          It&rsquo;s a blend of sales, marketing, business development, and
          account management that works for and with your business, while you
          get on with the business of building a great product.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="flex flex-col border-t-[6px] border-blue pt-6">
            <h3 className="font-display text-[22px] font-semibold">For Growth</h3>
            <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">
              If you&rsquo;re a B2B SaaS company trying to grow with a small
              team, you probably don&rsquo;t need more theory, you need clear
              thinking, experienced hands, and help turning &ldquo;good
              enough&rdquo; into an actual growth engine.
            </p>
            <Link
              href="/growth"
              className="font-display mt-auto pt-4 text-sm font-bold text-blue"
            >
              Explore Growth →
            </Link>
          </div>
          <div className="flex flex-col border-t-[6px] border-orange pt-6">
            <h3 className="font-display text-[22px] font-semibold">For UK Expansion</h3>
            <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">
              Heading into the UK from the US or mainland Europe is a genuine
              milestone, and it&rsquo;s easy to either rush it or wait too
              long. We&rsquo;ve done this before, and we can help you land it
              properly.
            </p>
            <Link
              href="/uk-expansion"
              className="font-display mt-auto pt-4 text-sm font-bold text-orange"
            >
              Explore UK Expansion →
            </Link>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[30%_70%]">
          <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
            <AnimatedChevron className="text-blue" />The Outcome
          </h2>
          <p className="max-w-[520px] text-lg leading-[1.7] text-[#42465c]">
            <strong>Awareness, Revenue, Trust. </strong>We believe this is the
            goal of the revenue department and goals we set ourselves. Not
            clicks, not vanity metrics, not a pipeline report that looks
            better than the pipeline actually is. If something we&rsquo;re
            doing doesn&rsquo;t move one of those three, we probably
            shouldn&rsquo;t be doing it.
          </p>
        </div>
      </section>

      {/* Reduce Risk, Create Velocity */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Reduce Risk, Create Velocity
        </h2>
        <p className="mt-3 max-w-[520px] text-lg leading-[1.7] text-[#42465c]">
          Our engagements are agile, providing just the help you need, with a
          flexible deployment model.
        </p>
        <div className="mt-8 grid grid-cols-1 border-t border-hair md:grid-cols-3">
          {[
            {
              title: "Evaluate",
              color: "text-blue",
              body: "We quickly stress-test your go-to-market strategy, data, messaging, and execution, so you get a clear picture of what's working, what's slowing revenue, and what needs to change.",
            },
            {
              title: "Engage",
              color: "text-orange",
              body: "We work with your team to refine positioning, clarify priorities, and align sales and marketing around an executable revenue plan.",
            },
            {
              title: "Execute",
              color: "text-navy",
              body: "We embed with your team to deliver it: building campaigns, improving conversion, sharpening messaging, fixing the tooling that's quietly getting in the way.",
            },
          ].map((cell, i, arr) => (
            <div
              key={cell.title}
              className={`border-t-4 border-blue pl-0 pt-6 ${
                i === 1 ? "border-orange" : i === 2 ? "border-navy" : "border-blue"
              } ${i !== arr.length - 1 ? "md:border-r md:border-r-hair" : ""} ${
                i !== 0 ? "md:pl-6" : ""
              } md:pr-6`}
            >
              <h3 className={`font-display mb-2.5 text-[17px] font-bold ${cell.color}`}>
                {cell.title}
              </h3>
              <p className="text-lg leading-[1.6] text-[#42465c]">{cell.body}</p>
            </div>
          ))}
        </div>
        <Link href="/how-we-work" className={`${ctaOutline} mt-8`}>
          How we help
        </Link>
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
              Founder of Velocity B. A reformed techie with a background in
              product development, Ian is an experienced marketing leader, a
              4x B2B CMO, former analyst, and trusted advisor.
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

      {/* Not Our First Rodeo */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-16 text-center">
        <h2 className="font-display mb-3.5 text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />Not Our First Rodeo
        </h2>
        <p className="mx-auto max-w-[680px] text-lg leading-[1.7] text-[#42465c]">
          We&rsquo;ve helped teams at companies like 3radical, Orange Logic,
          Mango Solutions, Storyblok, and Connex One sharpen their
          go-to-market and get to results that actually show up in the
          numbers, not just the deck.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center">
          {["3radical", "Orange Logic", "Mango Solutions", "Storyblok", "Connex One"].map(
            (name, i) => (
              <span
                key={name}
                className={`font-display px-7 text-[22px] font-bold ${
                  i !== 0 ? "border-l border-hair" : ""
                }`}
              >
                {name}
              </span>
            )
          )}
        </div>
        <Link href="/our-work" className={`${ctaOutline} mt-9`}>
          See Our Work
        </Link>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-16">
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg italic leading-[1.6] text-navy">
              &ldquo;...been extremely effective in driving the sales and
              marketing team to a joined-up, well-oiled machine.&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#9096a8]">
              — Matt Aldridge, former CEO, Mango Solutions
            </p>
          </div>
          <div>
            <p className="text-lg italic leading-[1.6] text-navy">
              &ldquo;...the enthusiasm for planning and creative thinking
              allows any business to accelerate forward.&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#9096a8]">
              — Emily Nicholls, Global Field Marketing Director, Sitecore
            </p>
          </div>
        </div>
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
