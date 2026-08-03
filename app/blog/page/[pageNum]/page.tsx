// Path-based pagination matching HubSpot's /blog/page/N structure.
// This route reads searchParams (for the ?tag= filter), which means Next.js renders
// it dynamically on demand rather than pre-building static HTML — same as /blog
// itself already does. That's an accepted trade-off to keep tag filtering working
// across paginated pages; see CTRL notes for the reasoning.
import { BlogIndexContent, getUnfilteredBlogPageCount } from "@/components/blog/BlogIndexContent";

export function generateMetadata({ params }: { params: { pageNum: string } }) {
  return {
    title: "Blog — Velocity-B",
    alternates: { canonical: `/blog/page/${params.pageNum}` },
  };
}

export default function BlogIndexPagedPage({
  params,
  searchParams,
}: {
  params: { pageNum: string };
  searchParams: { tag?: string };
}) {
  const pageNum = parseInt(params.pageNum, 10) || 1;
  return <BlogIndexContent currentPage={pageNum} tagSlug={searchParams.tag} />;
}
