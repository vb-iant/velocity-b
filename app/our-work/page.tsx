import Link from "next/link";
import { AnimatedChevron } from "@/components/AnimatedChevron";

export const metadata = {
  title: "Our Work — Velocity-B",
};

const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

const colorClasses = {
  blue: "border-blue",
  orange: "border-orange",
  navy: "border-navy",
};

const CASE_STUDIES = [
  {
    title: "When sales is the name of the game",
    client: "3radical",
    color: "blue" as const,
    body: "For 3radical, a gamification platform for enterprise loyalty programmes, we built the sales engagement process and supporting value propositions from the ground up. Pipeline grew past £1.5m, we closed £500k of new-logo business along the way, and we helped the leadership team secure additional investment on top of it.",
  },
  {
    title: "Great technology, great clients, ready for the next step in growth",
    client: "Orange Logic",
    color: "orange" as const,
    body: "We took the go-to-market strategy from brand messaging and ideal customer profile through to persona work, content strategy, and creative and copy briefs — and helped the CEO's team grow by hiring and mentoring as the company scaled.",
  },
  {
    title: "Bringing sales science to data science",
    client: "Mango Solutions",
    color: "navy" as const,
    body: "At Mango Solutions, one of the largest data science consultancies in the UK, we built out the sales and marketing function and stepped into CRO leadership. Annual revenue grew past £7m, and we helped the leadership team navigate a successful exit through acquisition.",
  },
  {
    title: "A strategic helping hand",
    client: "Storyblok",
    color: "blue" as const,
    body: "We spent a long-term engagement as CMO advisor to Storyblok, working alongside a CMO who was new in the role on planning, hiring, and building out the team, plus messaging and general strategic advisory, in a properly crowded content management category. Storyblok's CMO later credited the engagement publicly as instrumental to his own success in the role.",
  },
  {
    title: "Action at a fraction",
    client: "Connex One",
    color: "orange" as const,
    body: "Connex One, a fast-growing international contact-centre software provider, brought us in as fractional CMO following investment. We built the marketing function from scratch, hired the team, chose and implemented a new CRM, and launched a new website and message — all of which fed into revenue growth and a successful Series C round.",
  },
  {
    title: "More projects",
    client: "A handful without a full case study yet",
    color: "navy" as const,
    body: "A marketing strategy and planning engagement for a UK tech services reseller in a crowded market, support for the international launch of a DAM product following an acquisition, positioning and messaging for a DAM services consultancy, digital asset management AI/ML technology advisory for a start-up, an influencer marketing programme for a Forrester/Gartner-recognised vendor, and content strategy, planning and execution for an international software business.",
  },
];

export default function OurWorkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <h1 className="font-display max-w-[900px] text-[42px] font-bold leading-[1.06] tracking-tight md:text-[56px]">
          <AnimatedChevron className="text-blue" />
          Real results, from people who&rsquo;ll actually vouch for us.
        </h1>
        <p className="mt-6 max-w-[660px] text-lg leading-[1.7] text-[#42465c]">
          Not our first rodeo. If there&rsquo;s one thing we&rsquo;d want you
          to take from this page, it&rsquo;s experience — this is a time for
          innovation, sure, but there&rsquo;s no need to risk the business
          finding that out the hard way. Trust us, we&rsquo;ve been there.
        </p>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.client}
              className={`flex flex-col border-t-[6px] pt-6 ${colorClasses[study.color]}`}
            >
              <h3 className="font-display text-[22px] font-semibold">
                {study.title}
              </h3>
              <div className="font-display mt-1.5 text-sm font-bold text-blue">
                {study.client}
              </div>
              <p className="mt-3 text-lg leading-[1.7] text-[#42465c]">
                {study.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto mb-9 max-w-[640px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          <AnimatedChevron className="text-blue" />
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
