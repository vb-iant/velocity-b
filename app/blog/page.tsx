import { BlogIndexContent } from "@/components/blog/BlogIndexContent";

export const metadata = {
  title: "Blog — Velocity-B",
  description:
    "Ideas on sales, marketing, and revenue growth for B2B tech companies — written by operators who build the pipeline themselves, not analysts watching from the sidelines.",
};

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  return <BlogIndexContent currentPage={1} tagSlug={searchParams.tag} />;
}
