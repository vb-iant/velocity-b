import { BlogIndexContent } from "@/components/blog/BlogIndexContent";

export const metadata = {
  title: "Blog — Velocity-B",
};

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  return <BlogIndexContent currentPage={1} tagSlug={searchParams.tag} />;
}
