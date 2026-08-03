import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByAuthor, getAllAuthors, getAllTags, getTagBySlug, type Author } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";

export const AUTHOR_PAGE_SIZE = 9;

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getAuthorPageCount(authorSlug: string): number {
  return Math.max(1, Math.ceil(getPostsByAuthor(authorSlug).length / AUTHOR_PAGE_SIZE));
}

export function AuthorArchiveContent({
  author,
  currentPage,
}: {
  author: Author;
  currentPage: number;
}) {
  const posts = getPostsByAuthor(author.slug);
  const authors = getAllAuthors();
  const tags = getAllTags();

  const totalPages = Math.max(1, Math.ceil(posts.length / AUTHOR_PAGE_SIZE));
  if (currentPage > totalPages || currentPage < 1) {
    notFound();
  }

  const pagePosts = posts.slice(
    (currentPage - 1) * AUTHOR_PAGE_SIZE,
    currentPage * AUTHOR_PAGE_SIZE
  );

  function pageHref(page: number) {
    return page <= 1 ? `/blog/author/${author.slug}` : `/blog/author/${author.slug}/page/${page}`;
  }

  return (
    <main>
      {/* Hero — author info left, empty right, matches the blog index hero-split pattern */}
      <section className="mx-auto max-w-[1180px] px-12 pb-14 pt-[90px]">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-navy font-display text-xl font-bold text-white">
              {initials(author.name)}
            </div>
            <div>
              <h1 className="font-display text-[32px] font-bold leading-[1.1] tracking-tight md:text-[40px]">
                {author.name}
              </h1>
              {author.role && (
                <div className="mt-1 text-sm font-semibold text-orange">{author.role}</div>
              )}
            </div>
          </div>
          <div>
            <p className="max-w-[460px] text-lg leading-[1.7] text-[#42465c]">{author.bio}</p>
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-block text-[13px] font-semibold text-blue"
              >
                Follow {author.name.split(" ")[0]} on LinkedIn →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="mx-auto max-w-[1180px] px-12 pb-24">
        {pagePosts.length === 0 ? (
          <p className="text-[#42465c]">No posts from {author.name} yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-9 gap-y-11 md:grid-cols-3">
            {pagePosts.map((post, i) => {
              const primaryTagSlug = post.frontmatter.tags?.[0];
              const primaryTag = primaryTagSlug ? getTagBySlug(primaryTagSlug) : null;
              return (
                <PostCard
                  key={post.frontmatter.slug}
                  post={post}
                  author={authors[post.frontmatter.author] ?? null}
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
