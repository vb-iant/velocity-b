import { getAllBlogPosts, getAuthorBySlug } from "@/lib/blog";

// Set NEXT_PUBLIC_SITE_URL in Vercel project settings once the site is live on its
// real domain — falls back to velocity-b.com in the meantime.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://velocity-b.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllBlogPosts();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.frontmatter.slug}`;
      const author = getAuthorBySlug(post.frontmatter.author);
      const pubDate = new Date(post.frontmatter.date).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>${
        author ? `\n      <dc:creator>${escapeXml(author.name)}</dc:creator>` : ""
      }${
        post.frontmatter.excerpt
          ? `\n      <description>${escapeXml(post.frontmatter.excerpt)}</description>`
          : ""
      }
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Velocity Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Ideas on creating velocity in sales and marketing.</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
