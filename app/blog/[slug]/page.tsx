import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getAuthorBySlug,
  getAllTags,
  getRelatedPosts,
  formatPostDate,
} from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.frontmatter.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} — Velocity-B Blog`,
    description: post.frontmatter.excerpt,
  };
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const author = getAuthorBySlug(post.frontmatter.author);
  const allTags = getAllTags();
  const postTags = allTags.filter((t) => post.frontmatter.tags?.includes(t.slug));
  const related = getRelatedPosts(post, 3);
  const relatedAuthorsBySlug = Object.fromEntries(
    related.map((p) => [p.frontmatter.slug, getAuthorBySlug(p.frontmatter.author)])
  );

  const authorName = author?.name ?? "Velocity-B";
  const primaryTag = postTags[0];

  return (
    <main>
      {/* Hero — tag+title left, empty right; divider; author aligned right below; excerpt at article width */}
      <section className="mx-auto max-w-[1180px] px-12 pb-8 pt-[90px]">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div>
            {primaryTag && (
              <span className="mb-6 inline-block rounded-full border-[1.5px] border-blue px-4 py-[6px] font-display text-xs font-bold uppercase tracking-wider text-blue">
                {primaryTag.name}
              </span>
            )}
            <h1 className="font-display text-[40px] font-bold leading-[1.05] tracking-tight md:text-[56px]">
              {post.frontmatter.title}
            </h1>
          </div>
          <div />
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-14 border-t border-hair pt-7 md:grid-cols-2">
          <div />
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-navy font-display text-base font-bold text-white">
              {initials(authorName)}
            </div>
            <div className="text-sm leading-snug">
              <div className="font-display text-[15px] font-bold text-navy">
                {author ? (
                  <Link href={`/blog/author/${author.slug}`} className="hover:text-blue">
                    {authorName}
                  </Link>
                ) : (
                  authorName
                )}
              </div>
              <div className="text-[13px] text-[#9096a8]">
                {author?.role ? `${author.role} · ` : ""}
                {formatPostDate(post.frontmatter.date)} · {post.readingTime} min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-[760px] px-12 pt-14">
        <div className="blog-prose">
          <ReactMarkdown
            components={{
              h2: (props) => (
                <h2 className="mb-4 mt-11 font-display text-[28px] font-bold leading-[1.2] tracking-tight" {...props} />
              ),
              p: (props) => (
                <p className="my-5 text-lg leading-[1.75] text-[#42465c]" {...props} />
              ),
              a: (props) => <a className="text-blue underline" {...props} />,
              img: (props) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="my-6 w-full rounded" {...props} alt={props.alt ?? ""} />
              ),
              hr: () => <hr className="my-11 border-hair" />,
              em: (props) => <em className="text-navy" {...props} />,
              strong: (props) => <strong className="text-navy" {...props} />,
              ul: (props) => <ul className="my-5 list-disc pl-6 text-lg leading-[1.75] text-[#42465c]" {...props} />,
              ol: (props) => <ol className="my-5 list-decimal pl-6 text-lg leading-[1.75] text-[#42465c]" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Author box — same width as the article, sits where the in-article CTA
            placeholder was in the mockup; static closing CTA used for now instead
            of a dedicated in-article one (see CTRL task on that) */}
        <hr className="my-11 border-hair" />
        {author && (
          <div className="flex items-start gap-6 rounded-[10px] border border-hair bg-[#fafbfd] p-9">
            <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-blue font-display text-xl font-bold text-white">
              {initials(author.name)}
            </div>
            <div>
              <h3 className="mb-1 font-display text-lg font-bold">
                <Link href={`/blog/author/${author.slug}`} className="hover:text-blue">
                  {author.name}
                </Link>
              </h3>
              {author.role && (
                <div className="mb-2.5 text-[13px] font-semibold text-orange">{author.role}</div>
              )}
              <p className="mb-2.5 text-[15px] leading-[1.6] text-[#42465c]">
                {author.role && author.bio.startsWith(`${author.role} - `)
                  ? author.bio.slice(author.role.length + 3)
                  : author.bio}
              </p>
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="text-[13px] font-semibold text-blue"
                >
                  Follow {author.name.split(" ")[0]} on LinkedIn →
                </a>
              )}
            </div>
          </div>
        )}

        <div className="mt-7">
          <NewsletterSignup />
        </div>

        {postTags.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2.5">
            {postTags.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.slug}`}
                className="rounded-full border border-hair bg-[#fafbfd] px-4 py-[7px] font-display text-xs font-semibold text-[#42465c] hover:border-navy"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Related posts — tag-based auto-match */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1180px] border-t border-hair px-12 pb-24 pt-[70px]">
          <h2 className="mb-9 font-display text-[28px] font-bold">Related posts</h2>
          <div className="grid grid-cols-1 gap-x-9 gap-y-11 md:grid-cols-3">
            {related.map((p, i) => (
              <PostCard
                key={p.frontmatter.slug}
                post={p}
                author={relatedAuthorsBySlug[p.frontmatter.slug]}
                tag={allTags.find((t) => p.frontmatter.tags?.[0] === t.slug) ?? null}
                index={i}
              />
            ))}
          </div>
        </section>
      )}

      {/* Closing CTA — standard across all blog templates */}
      <div className="bg-navy px-12 py-[100px] text-center text-white">
        <h2 className="mb-[18px] font-display text-[38px] font-bold text-white">
          Want to go deeper?
        </h2>
        <p className="mx-auto mb-8 max-w-[520px] text-lg leading-[1.6] text-white/75">
          If this topic struck a chord, let&rsquo;s look at what it means for your business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-orange px-[34px] py-4 text-[15px] font-bold text-navy"
        >
          Let&rsquo;s chat
        </Link>
      </div>
    </main>
  );
}
