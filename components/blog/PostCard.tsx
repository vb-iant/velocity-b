import Link from "next/link";
import type { BlogPost, Author, Tag } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

const BORDER_COLORS = ["border-blue", "border-orange", "border-navy"];

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PostCard({
  post,
  author,
  tag,
  index,
}: {
  post: BlogPost;
  author: Author | null;
  tag: Tag | null;
  index: number;
}) {
  return (
    <div className={`border-t-4 ${BORDER_COLORS[index % 3]} pt-[22px]`}>
      {tag && (
        <span className="mb-4 inline-block rounded-full border-[1.5px] border-blue px-3.5 py-[5px] font-display text-[11px] font-bold uppercase tracking-wider text-blue">
          {tag.name}
        </span>
      )}
      <h3 className="mb-3 font-display text-[21px] font-bold leading-[1.28] tracking-tight">
        <Link href={`/blog/${post.frontmatter.slug}`} className="text-navy hover:text-blue">
          {post.frontmatter.title}
        </Link>
      </h3>
      {post.frontmatter.excerpt && (
        <p className="mb-[18px] text-[15px] leading-[1.65] text-[#42465c]">
          {post.frontmatter.excerpt}
        </p>
      )}
      <div className="flex items-center gap-2.5">
        <div className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-navy font-display text-[10.5px] font-bold text-white">
          {author ? initials(author.name) : "VB"}
        </div>
        <div className="text-[12.5px] leading-tight text-[#9096a8]">
          <span className="font-semibold text-[#42465c]">{author?.name ?? "Velocity-B"}</span>
          {" · "}
          {formatPostDate(post.frontmatter.date)}
          {" · "}
          {post.readingTime} min read
        </div>
      </div>
    </div>
  );
}
