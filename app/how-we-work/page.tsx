import Link from "next/link";
import { DriveCard } from "@/components/DriveCard";

export const metadata = {
  title: "How We Work — Velocity-B",
};

const ctaOutline =
  "inline-block border-2 border-navy px-[30px] py-4 text-[15px] font-bold text-navy";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

const DRIVE_PANELS = [
  {
    letter: "D",
    title: "Diagnose",
    body: "Before we do anything else, we spend real time working out what's actually going on, with honest conversations with the people closest to the problem to understand what's working and what isn't, with no assumptions.",
  },
  {
    letter: "R",
    title: "Refine",
    body: "A diagnosis without a plan is just opinion. This is where we turn what we've found into something you'd actually want to run: sharper positioning, a tighter story, a sequence of moves that makes sense for your stage and the team you've actually got, not a generic playbook we've dusted off and put your logo on.",
  },
  {
    letter: "I",
    title: "Implement",
    body: "Plans are the easy part. Actually doing the work is where most consultancies quietly step back and leave you to it. We don't. This is where, with our team of specialists, we roll up our sleeves alongside your team: building, writing, launching, running the campaigns.",
  },
  {
    letter: "V",
    title: "Validate",
    body: "We check what happened against what we said would happen, using data rather than a good feeling about how things are going. If it's working, we can tell you why. If it isn't, we'll tell you that too.",
  },
  {
    letter: "E",
    title: "Expand",
    body: "Once something's proven, we scale it. More of what's working, into the next market, the next segment, the next stage of growth. This is also usually where we start talking about handing over, tightening up, or stepping back, depending on what you need from us next.",
  },
];

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
    title: "Lead nurture",
    body: "Turning interest into pipeline instead of letting it go cold.",
    color: "border-navy text-navy",
  },
  {
    title: "Local account management",
    body: "A real point of contact in-market, not a rep working a spreadsheet from another time zone.",
    color: "border-blue text-blue",
  },
  {
    title: "Localised content marketing",
    body: "Messaging and content built for a specific market, not translated after the fact.",
    color: "border-orange text-orange",
  },
];

export default function HowWeWorkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h1 className="font-display text-[36px] font-bold leading-[1.04] tracking-tight md:text-[72px]">
              How We Work
            </h1>
            <div className="font-display text-[36px] font-bold leading-[1.04] tracking-tight text-blue md:text-[72px]">
              One method.
            </div>
            <div className="font-display text-[36px] font-bold leading-[1.04] tracking-tight text-blue md:text-[72px]">
              Five stages.
            </div>
            <div className="font-display text-[36px] font-bold leading-[1.04] tracking-tight text-blue md:text-[72px]">
              No guesswork.
            </div>
          </div>
          <div>
            <p className="max-w-[520px] text-lg leading-[1.75] text-[#42465c]">
              Growing a B2B SaaS company with a small team is hard. You
              don&rsquo;t need more theory or buzzwords; you need clear
              thinking, experienced support, and help turning good enough
              into growth.
            </p>
            <p className="max-w-[520px] text-lg leading-[1.75] text-[#42465c]">
              We&rsquo;ve done this before, different companies, different
              sectors, the same underlying pattern turning up again and
              again, where growth stalls, or the story isn&rsquo;t landing,
              or the ground has simply shifted underneath you faster than
              anyone had time to notice.
            </p>
          </div>
        </div>
      </section>

      {/* DRIVE */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[1fr_1.25fr]">
          <div>
            <h1 className="font-display text-3xl font-bold leading-[1.06] tracking-tight">
              DRIVE
            </h1>
            <div className="font-display mb-4 text-[22px] font-bold leading-[1.25] tracking-tight text-blue">
              Diagnose. Refine. Implement. Validate. Expand.
            </div>
            <p className="text-base leading-[1.75] text-[#42465c]">
              What we&rsquo;ve got isn&rsquo;t a slide deck full of frameworks
              with clever names for their own sake; it&rsquo;s a way of
              working called DRIVE, and it&rsquo;s the same method whether
              we&rsquo;re untangling your pipeline, getting a UK launch ready
              to land, or making a portfolio company investor-ready.
            </p>
            <p className="text-base leading-[1.75] text-[#42465c]">
              Five stages, one thread running through everything we do; we
              don&rsquo;t skip straight to execution before we understand
              the problem, and we don&rsquo;t disappear when the work has to
              start.
            </p>
            <p className="text-base leading-[1.75] text-[#42465c]">
              While some clients take the full cycle end to end, others
              really just need the DR, a sharp, outside diagnosis and a plan
              they can run with themselves through implement onwards.
            </p>
            <div className="mt-6 w-full">
              <DriveCard />
            </div>
          </div>

          <div>
            {DRIVE_PANELS.map((panel, i) => (
              <div
                key={panel.letter}
                className={`grid grid-cols-[80px_1fr] gap-0 border-t border-hair md:grid-cols-[120px_1fr] ${
                  i === DRIVE_PANELS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex items-start justify-center py-8">
                  <span
                    className={`font-display flex h-14 w-14 items-center justify-center rounded-full border-2 text-xl font-extrabold ${
                      i === DRIVE_PANELS.length - 1
                        ? "border-orange bg-orange text-white"
                        : "border-blue text-navy"
                    }`}
                  >
                    {panel.letter}
                  </span>
                </div>
                <div className="py-8 pl-4">
                  <h3 className="font-display mb-2.5 text-2xl font-bold">{panel.title}</h3>
                  <p className="max-w-[640px] text-[16.5px] leading-[1.6] text-[#42465c]">
                    {panel.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Implement Can Look Like */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[28px] font-bold leading-tight tracking-tight md:text-[44px]">
          What Implement Can Look Like
        </h2>
        <p className="max-w-[700px] text-lg leading-[1.75] text-[#42465c]">
          When we refer to implement and rolling up our sleeves, these are
          the services we provide:
        </p>
        <p className="max-w-[700px] text-lg leading-[1.75] text-[#42465c]">
          Not every engagement needs all five stages, and we won&rsquo;t
          pretend it does just because a longer engagement suits us better.
          Some people want the full cycle end to end. Others really just
          need a sharp, outside diagnosis and a plan they can run with
          themselves — so that&rsquo;s what we scope for, rather than
          upselling a process nobody asked for.
        </p>
        <div className="mt-6 grid grid-cols-1 border-l border-t border-hair md:grid-cols-3">
          {IMPLEMENT_SERVICES.map((service) => (
            <div
              key={service.title}
              className={`-mt-px border-b border-r border-hair border-t-4 p-6 ${service.color.split(" ")[0]}`}
            >
              <h3 className={`font-display mb-2 text-base font-bold ${service.color.split(" ")[1]}`}>
                {service.title}
              </h3>
              <p className="text-sm leading-[1.6] text-[#42465c]">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-16 text-center">
        <p className="mx-auto max-w-[720px] text-lg leading-[1.75] text-[#42465c]">
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
        <Link href="/about" className={`${ctaOutline} mt-8`}>
          About Us
        </Link>
      </section>

      {/* Final CTA */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-7 max-w-[760px] text-[28px] font-bold leading-tight tracking-tight text-white md:text-[44px]">
          Get started with a free Velocity Assessment.
        </h2>
        <p className="mx-auto mb-7 max-w-[600px] text-[#cfd6e8]">
          10 questions, 15 minutes of your time, our free report, and a
          30-minute consultation.
        </p>
        <Link href="/contact" className={ctaAccent}>
          Velocity Assessment
        </Link>
      </div>
    </main>
  );
}
