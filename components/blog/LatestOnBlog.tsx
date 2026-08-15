import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import { AnimatedChevron } from "@/components/AnimatedChevron";

// "Read more" module — surfaces a single, page-relevant blog post above the
// footer. Reuses each post's auto-generated OG image (lib/og.tsx) as the
// thumbnail rather than requiring a separate hero image per post.
export function LatestOnBlog({ post }: { post: BlogPost }) {
  const href = `/blog/${post.frontmatter.slug}`;

  return (
    <section className="mx-auto max-w-[1180px] border-t border-hair px-12 pb-24 pt-[70px]">
      <h2 className="mb-9 font-display text-[28px] font-bold">
        <AnimatedChevron className="text-blue" />
        Read more
      </h2>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Link href={href} className="block overflow-hidden rounded-sm border border-hair">
          <Image
            src={`${href}/opengraph-image`}
            alt={post.frontmatter.title}
            width={1200}
            height={630}
            className="h-auto w-full"
          />
        </Link>
        <div>
          <h3 className="mb-3 font-display text-[24px] font-bold leading-[1.28] tracking-tight">
            <Link href={href} className="text-navy hover:text-blue">
              {post.frontmatter.title}
            </Link>
          </h3>
          {post.frontmatter.excerpt && (
            <p className="mb-6 text-[15px] leading-[1.65] text-[#42465c]">
              {post.frontmatter.excerpt}
            </p>
          )}
          <Link
            href={href}
            className="font-display text-[14px] font-bold text-blue hover:text-navy"
          >
            Continue reading →
          </Link>
        </div>
      </div>
    </section>
  );
}
