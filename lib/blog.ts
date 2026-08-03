// Blog content loader — parses the flat-file content model migrated from HubSpot.
// Reading time is computed here from word count, not stored as data (see CTRL task:
// "Compute blog post reading time from word count").
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const AUTHORS_DIR = path.join(process.cwd(), "content", "authors");
const TAGS_PATH = path.join(process.cwd(), "content", "tags.json");

export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  excerpt?: string;
  originalUrl?: string;
}

export interface BlogPost {
  frontmatter: BlogPostFrontmatter;
  content: string;
  readingTime: number;
}

export interface Author {
  name: string;
  slug: string;
  role?: string;
  linkedin?: string;
  avatar?: string;
  bio: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

const WORDS_PER_MINUTE = 200;

function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      frontmatter: data as BlogPostFrontmatter,
      content,
      readingTime: computeReadingTime(content),
    };
  });
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as BlogPostFrontmatter,
    content,
    readingTime: computeReadingTime(content),
  };
}

let authorCache: Record<string, Author> | null = null;

export function getAllAuthors(): Record<string, Author> {
  if (authorCache) return authorCache;
  const result: Record<string, Author> = {};
  if (fs.existsSync(AUTHORS_DIR)) {
    for (const file of fs.readdirSync(AUTHORS_DIR).filter((f) => f.endsWith(".md"))) {
      const raw = fs.readFileSync(path.join(AUTHORS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const fm = data as Omit<Author, "bio">;
      result[fm.slug] = { ...fm, bio: content.trim() };
    }
  }
  authorCache = result;
  return result;
}

export function getAuthorBySlug(slug: string): Author | null {
  return getAllAuthors()[slug] ?? null;
}

let tagsCache: Tag[] | null = null;

export function getAllTags(): Tag[] {
  if (tagsCache) return tagsCache;
  if (!fs.existsSync(TAGS_PATH)) return [];
  tagsCache = JSON.parse(fs.readFileSync(TAGS_PATH, "utf8"));
  return tagsCache as Tag[];
}

export function getTagBySlug(slug: string): Tag | null {
  return getAllTags().find((t) => t.slug === slug) ?? null;
}

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return getAllBlogPosts().filter((p) => p.frontmatter.author === authorSlug);
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const all = getAllBlogPosts();
  const postTags = new Set(post.frontmatter.tags ?? []);

  const scored = all
    .filter((p) => p.frontmatter.slug !== post.frontmatter.slug)
    .map((p) => {
      const sharedTags = (p.frontmatter.tags ?? []).filter((t) => postTags.has(t)).length;
      return { post: p, sharedTags };
    })
    .filter((entry) => entry.sharedTags > 0)
    .sort((a, b) => {
      if (b.sharedTags !== a.sharedTags) return b.sharedTags - a.sharedTags;
      return (
        new Date(b.post.frontmatter.date).getTime() -
        new Date(a.post.frontmatter.date).getTime()
      );
    });

  return scored.slice(0, count).map((entry) => entry.post);
}

export function formatPostDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
