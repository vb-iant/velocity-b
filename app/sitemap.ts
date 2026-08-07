import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";

// Falls back to the production domain if the env var isn't set (e.g. preview deploys).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://velocity-b.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/growth`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/uk-expansion`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/velocity-sprint`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/how-we-work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/our-work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/resources`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/velocity-assessment`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/meet-alex`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const postPages: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...postPages];
}
