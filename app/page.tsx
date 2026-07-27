import Link from "next/link";
import { DriveCard } from "@/components/DriveCard";

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
              Growth doesn&rsquo;t need more buzzwords.
            </h1>
            <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
              It needs someone who&rsquo;s actually done it.
            </h2>
          </div>
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              We help B2B tech companies compete, scale, and grow with
              hands-on go-to-market advice, built from having actually done
              the job ourselves rather than just advised on it from the
              sidelines. We&rsquo;re a small, execution-focused team, not a
              big agency with layers of account management standing between
              you and the person actually doing the work — if something
              needs doing, we roll up our sleeves and do it alongside you.
            </p>
            <Link href="/contact" className={`${ctaSolid} mt-5`}>
              Let&rsquo;s get started
            </Link>
          </div>
        </div>
      </section>

      {/* Start Where You Are */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          Start Where You Are
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-3">
          <div className="flex flex-col border-t-[6px] border-blue pt-6">
            <h3 className="font-display text-[22px] font-semibold">Growth</h3>
            <p className="mt-2 text-[15.5px] leading-[1.7] text-[#42465c]">
              If you&rsquo;re a B2B SaaS company trying to grow with a small
              team, you probably don&rsquo;t need more theory — you need
              clear thinking, experienced hands, and help turning &ldquo;good
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
            <h3 className="font-display text-[22px] font-semibold">UK Expansion</h3>
            <p className="mt-2 text-[15.5px] leading-[1.7] text-[#42465c]">
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
          <div className="flex flex-col border-t-[6px] border-navy pt-6">
            <h3 className="font-display text-[22px] font-semibold">Investors</h3>
            <p className="mt-2 text-[15.5px] leading-[1.7] text-[#42465c]">
              From pre-investment due diligence to hands-on fractional
              leadership, we help turn founder-led hustle into something that
              actually looks like portfolio value on paper.
            </p>
            <Link
              href="/investors"
              className="font-display mt-auto pt-4 text-sm font-bold text-navy"
            >
              Explore Investors →
            </Link>
          </div>
        </div>
      </section>

      {/* Awareness / Revenue / Trust */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[30%_70%]">
          <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
            Awareness.
            <br />
            Revenue.
            <br />
            Trust.
          </h2>
          <p className="max-w-[520px] text-lg leading-[1.7] text-[#42465c]">
            Awareness, Revenue, Trust — that&rsquo;s the whole point, and
            it&rsquo;s been the same three things since we started doing
            this. Not clicks, not vanity metrics, not a pipeline report that
            looks better than the pipeline actually is. If something
            we&rsquo;re doing doesn&rsquo;t move one of those three, we
            probably shouldn&rsquo;t be doing it.
          </p>
        </div>
      </section>

      {/* Reduce Risk, Create Velocity */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          Reduce Risk, Create Velocity
        </h2>
        <p className="mt-3 max-w-[520px] text-lg leading-[1.7] text-[#42465c]">
          Our engagements are agile, providing just the help you need, with a
          flexible deployment model.
        </p>
        <div className="mt-8 grid grid-cols-1 border-t border-hair md:grid-cols-4">
          {[
            {
              title: "Evaluate",
              color: "text-blue",
              body: "We stress-test your go-to-market strategy, data, messaging, systems, and team, so you get a clear, honest picture of what's working, what's slowing revenue, and what actually needs to change.",
            },
            {
              title: "Advise",
              color: "text-orange",
              body: "We work with your leadership team to refine positioning, clarify priorities, and align sales and marketing around a plan people can actually run with, not just a document everyone nods at once.",
            },
            {
              title: "Execute",
              color: "text-navy",
              body: "We embed with your team to actually deliver it: building campaigns, improving conversion, sharpening messaging, fixing the tooling that's quietly getting in the way.",
            },
            {
              title: "Lead",
              color: "text-blue",
              body: "Fractional marketing or sales leadership steps in to provide experienced oversight and coach your team, without the cost or delay of a full-time hire.",
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
              <p className="text-[14.5px] leading-[1.6] text-[#42465c]">{cell.body}</p>
            </div>
          ))}
        </div>
        <Link href="/how-we-work" className={`${ctaOutline} mt-8`}>
          How we help
        </Link>
      </section>

      {/* How We Work / DRIVE */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
              How We Work
            </h2>
            <p className="mt-3 max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Every engagement runs on the same proven process — a method we
              call DRIVE: Diagnose, Refine, Implement, Validate, Expand. Five
              stages, one thread, no guesswork about what happens next.
            </p>
            <Link href="/how-we-work" className={`${ctaOutline} mt-3`}>
              See how we work
            </Link>
          </div>
          <div className="flex justify-end">
            <DriveCard />
          </div>
        </div>
      </section>

      {/* Not Our First Rodeo */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-16 text-center">
        <h2 className="font-display mb-3.5 text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          Not Our First Rodeo
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

      {/* Not Sure Where to Start */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          Not Sure Where to Start?
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-16 md:grid-cols-[40%_60%]">
          <div className="flex flex-col">
            <p className="max-w-[460px] text-lg leading-[1.7] text-[#42465c]">
              Take the ten-minute Velocity Assessment and get a free,
              personalised read on how your sales and marketing stack up — no
              obligation, no sales call required first.
            </p>
            <Link href="/contact" className={`${ctaAccent} mt-auto self-start`}>
              Velocity Assessment
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="max-w-[460px] text-lg leading-[1.7] text-[#42465c]">
              Ready for something more specific? Each offer has its own
              Roadmap — a fixed-scope, paid diagnostic that hands you a clear
              plan for what&rsquo;s actually holding things back, yours to
              run with whether or not you bring us in to execute it.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-4">
              <Link href="/growth" className={ctaOutline}>
                Growth Roadmap
              </Link>
              <Link href="/uk-expansion" className={ctaOutline}>
                UK Roadmap
              </Link>
              <Link href="/investors" className={ctaOutline}>
                Revenue Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-7 max-w-[760px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          Every company&rsquo;s story is different, and we&rsquo;d like to
          hear yours.
        </h2>
        <Link href="/contact" className={ctaAccent}>
          Book a 30-minute consultation
        </Link>
      </div>
    </main>
  );
}
