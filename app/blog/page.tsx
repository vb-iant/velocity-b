import Link from "next/link";
import { getAllBlogPosts, getAllAuthors, getAllTags, getTagBySlug } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";

export const metadata = {
  title: "Blog — Velocity-B",
};

const PAGE_SIZE = 9;

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams: { tag?: string; page?: string };
}) {
  const allPosts = getAllBlogPosts();
  const authors = getAllAuthors();
  const tags = getAllTags();

  const activeTag = searchParams.tag ? getTagBySlug(searchParams.tag) : null;
  const filteredPosts = activeTag
    ? allPosts.filter((p) => p.frontmatter.tags?.includes(activeTag.slug))
    : allPosts;

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const requestedPage = parseInt(searchParams.page ?? "1", 10) || 1;
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const pagePosts = filteredPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function pageHref(page: number) {
    const params = new URLSearchParams();
    if (activeTag) params.set("tag", activeTag.slug);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return `/blog${qs ? `?${qs}` : ""}`;
  }

  return (
    <main>
      {/* Hero — title left, intro right, matches the homepage hero-split pattern */}
      <section className="mx-auto max-w-[1180px] px-12 pb-14 pt-[90px]">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <h1 className="font-display text-[44px] font-bold leading-[1.02] tracking-tight md:text-[60px]">
            Velocity Blog
          </h1>
          <p className="max-w-[460px] text-lg leading-[1.7] text-[#42465c]">
            Here we share some of our ideas on creating velocity in sales and marketing.
          </p>
        </div>
      </section>

      {/* Tag filter — functional, filters via ?tag= */}
      <div className="mx-auto flex max-w-[1180px] flex-wrap gap-2.5 px-12 pb-14">
        <Link
          href="/blog"
          className={`rounded-full border px-[18px] py-2 font-display text-[13px] font-semibold ${
            !activeTag
              ? "border-navy bg-navy text-white"
              : "border-hair bg-[#fafbfd] text-[#42465c] hover:border-navy"
          }`}
        >
          All
        </Link>
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/blog?tag=${tag.slug}`}
            className={`rounded-full border px-[18px] py-2 font-display text-[13px] font-semibold ${
              activeTag?.slug === tag.slug
                ? "border-navy bg-navy text-white"
                : "border-hair bg-[#fafbfd] text-[#42465c] hover:border-navy"
            }`}
          >
            {tag.name}
          </Link>
        ))}
      </div>

      {/* Post grid */}
      <section className="mx-auto max-w-[1180px] px-12 pb-24">
        {pagePosts.length === 0 ? (
          <p className="text-[#42465c]">No posts found for this tag yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-9 gap-y-11 md:grid-cols-3">
            {pagePosts.map((post, i) => {
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

        {totalPages > 1 && (
          <div className="mt-[70px] flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={pageHref(p)}
                className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold ${
                  p === currentPage ? "bg-navy text-white" : "text-[#42465c] hover:text-blue"
                }`}
              >
                {p}
              </Link>
            ))}
            {currentPage < totalPages && (
              <Link
                href={pageHref(currentPage + 1)}
                className="ml-2 rounded-full border-[1.5px] border-hair px-4 py-2 text-sm font-bold text-[#42465c] hover:border-navy"
              >
                Next →
              </Link>
            )}
          </div>
        )}
      </section>

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
