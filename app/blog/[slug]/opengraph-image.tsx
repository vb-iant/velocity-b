import { getAllBlogPosts, getBlogPostBySlug, getAllTags, getAuthorBySlug } from "@/lib/blog";
import { renderBlogOgImage, ogSize, ogContentType, accentForTagIndex } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Velocity-B Blog";

// Force static generation so this route is pre-rendered per slug at build
// time (via generateStaticParams below), rather than deployed as an
// on-demand serverless function — which was reading content/blog/*.md at
// request time and silently falling back to the generic placeholder because
// those files aren't traced into the function bundle.
export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.frontmatter.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  const allTags = getAllTags();
  const primaryTagSlug = post?.frontmatter.tags?.[0];
  const tagIndex = primaryTagSlug ? allTags.findIndex((t) => t.slug === primaryTagSlug) : -1;
  const tag = tagIndex >= 0 ? allTags[tagIndex] : null;
  const author = post?.frontmatter.author ? getAuthorBySlug(post.frontmatter.author) : null;

  return renderBlogOgImage({
    tag: tag?.name ?? "Blog",
    title: post?.frontmatter.title ?? "Velocity-B Blog",
    author: author?.name ?? "Velocity-B",
    accent: accentForTagIndex(tagIndex >= 0 ? tagIndex : 0),
  });
}
