import Link from "next/link";
import { AnimatedChevron } from "@/components/AnimatedChevron";
import { PostCard } from "@/components/blog/PostCard";
import { getAllBlogPosts, getAllAuthors, getTagBySlug } from "@/lib/blog";

export const metadata = {
  title: "Resources — Velocity-B",
  description:
    "Free guides, a velocity assessment, and ideas on creating velocity in sales and marketing — ungated, no forms, drawn from doing this rather than reading about it.",
};

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";
const ctaOutline =
  "inline-block border-2 border-navy px-[30px] py-4 text-[15px] font-bold text-navy";
const ctaAccent = "inline-block bg-orange px-[30px] py-4 text-[15px] font-bold text-navy";

const BORDER_COLORS = ["border-blue", "border-orange", "border-navy"];

const GUIDES = [
  {
    title: "Sales Playbook Template",
    body: "A proven template for building clarity, consistency, and speed into your sales process, drawn from years of doing this rather than reading about it.",
    href: "/resources/sales-playbook-template.pdf",
    inside: [
      "ICP, buyer personas, and qualification criteria (BANT/CHAMP) in one place",
      "A defined pipeline: stages, exit criteria, and forecasting",
      "Prospect meeting and demo playbooks, from prep to follow-up",
      "Objection handling, discounting rules, and negotiation guidance",
      "Post-sale onboarding, renewal, and advocacy process",
    ],
  },
  {
    title: "B2B Tech Growth Guide",
    body: "Tired of growth hacks and hustle-porn shortcuts? A practical walk through six real GTM disciplines across sales and marketing.",
    href: "/resources/b2b-tech-growth-guide.pdf",
    inside: [
      "How to define a sharp ICP and real buyer clarity",
      "Choosing your category position: align, reframe, or create",
      "Sizing genuine demand, not wishful-thinking TAM",
      "Building a Minimum Viable GTM Engine (people, process, tech)",
      "Content and metrics that actually drive revenue, not vanity numbers",
    ],
  },
  {
    title: "The Series B Marketing Playbook",
    body: "What investors are actually looking for, and how marketing can lead on turning growth into an investable story.",
    href: "/resources/series-b-marketing-playbook.pdf",
    inside: [
      "What investors actually look for: category clarity, credibility, traction",
      "The three pillars: Narrative, Execution, Proof",
      "Avoiding the \"differentiated, not different\" positioning trap",
      "Building a repeatable demand engine investors trust",
      "Turning customer stories into a scalable, shareable growth asset",
    ],
  },
];

export default function ResourcesPage() {
  const latestPosts = getAllBlogPosts().slice(0, 3);
  const authors = getAllAuthors();

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-[1180px] px-12 py-20">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
            <AnimatedChevron className="text-blue" />
            Our Ideas
            <br />
            <span className="text-blue">Here for free.</span>
          </h1>
          <div>
            <p className="max-w-[480px] text-lg leading-[1.7] text-[#42465c]">
              Free assets, sharing our experience to help you get velocity —
              ungated, no forms, but if you find them useful, please get in
              touch.
            </p>
            <Link href="/contact" className={`${ctaSolid} mt-6`}>
              Let&rsquo;s chat
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          Guides
        </h2>
        <div className="mt-10 flex flex-col">
          {GUIDES.map((guide, i) => (
            <div
              key={guide.title}
              className={`grid grid-cols-1 gap-8 border-t-[6px] ${BORDER_COLORS[i % 3]} py-9 md:grid-cols-2 md:items-start md:gap-16`}
            >
              <div className="flex flex-col items-start">
                <h3 className="font-display text-[22px] font-semibold">
                  {guide.title}
                </h3>
                <p className="mt-2 text-lg leading-[1.7] text-[#42465c]">
                  {guide.body}
                </p>
                <a
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaOutline} mt-6`}
                >
                  Read It Now
                </a>
              </div>

              <div>
                <div className="font-display text-[13px] font-bold uppercase tracking-wider text-[#9096a8]">
                  What&rsquo;s inside?
                </div>
                <ul className="mt-3 space-y-2">
                  {guide.inside.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-base leading-[1.6] text-[#42465c]"
                    >
                      <span className="mt-[3px] text-blue">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Velocity Assessment */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <div className="flex flex-col items-start gap-10 bg-blue px-10 py-14 md:flex-row md:items-center md:px-14">
          <div>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight text-white md:text-[40px]">
              <AnimatedChevron className="text-white" />
              Velocity Assessment
            </h2>
            <p className="mt-4 max-w-[620px] text-lg leading-[1.7] text-white/90">
              A ten-minute questionnaire that shows you how your sales and
              marketing stack up across three GTM disciplines, with a free,
              personalised report suggesting nine quick ways to improve.
            </p>
            <Link
              href="/velocity-assessment"
              className="mt-7 inline-block bg-white px-[30px] py-4 text-[15px] font-bold text-navy"
            >
              Take the Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* From the Blog */}
      <section className="mx-auto max-w-[1180px] border-t border-hair px-12 py-20">
        <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          From the Blog
        </h2>
        {latestPosts.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-x-9 gap-y-11 md:grid-cols-3">
            {latestPosts.map((post, i) => {
              const author = authors[post.frontmatter.author] ?? null;
              const primaryTagSlug = post.frontmatter.tags?.[0];
              const primaryTag = primaryTagSlug ? getTagBySlug(primaryTagSlug) : null;
              return (
                <PostCard
                  key={post.frontmatter.slug}
                  post={post}
                  author={author}
                  tag={primaryTag}
                  index={i}
                />
              );
            })}
          </div>
        )}
        <Link href="/blog" className={`${ctaOutline} mt-10`}>
          Visit the Blog
        </Link>
      </section>

      {/* Closing CTA */}
      <div className="bg-navy px-12 py-24 text-center text-white">
        <h2 className="font-display mx-auto max-w-[640px] text-[32px] font-bold leading-tight tracking-tight text-white md:text-[46px]">
          <AnimatedChevron className="text-blue" />
          Every company&rsquo;s story is different, and we&rsquo;d like to
          hear yours.
        </h2>
        <Link href="/contact" className={`${ctaAccent} mt-9`}>
          Book a 30-Minute Consultation
        </Link>
      </div>
    </main>
  );
}
