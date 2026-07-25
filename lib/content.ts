// Loads markdown content from /content/<slug>.md with frontmatter,
// per the flat-file content pattern from technical-setup-reference.md.
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PageFrontmatter {
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
  [key: string]: unknown;
}

export interface PageContent {
  frontmatter: PageFrontmatter;
  content: string;
  slug: string;
}

export function getPageBySlug(slug: string): PageContent | null {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as PageFrontmatter,
    content,
    slug,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}
