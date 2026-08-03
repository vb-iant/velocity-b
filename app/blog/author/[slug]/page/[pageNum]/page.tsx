import { notFound } from "next/navigation";
import { getAllAuthors, getAuthorBySlug } from "@/lib/blog";
import { AuthorArchiveContent, getAuthorPageCount } from "@/components/blog/AuthorArchiveContent";

// A nested dynamic route's generateStaticParams does NOT automatically receive the
// resolved parent segment in this Next.js version, so this computes every valid
// {slug, pageNum} combination directly rather than relying on parent context.
export function generateStaticParams() {
  const authors = Object.values(getAllAuthors());
  const params: { slug: string; pageNum: string }[] = [];
  for (const author of authors) {
    const totalPages = getAuthorPageCount(author.slug);
    for (let p = 2; p <= totalPages; p++) {
      params.push({ slug: author.slug, pageNum: String(p) });
    }
  }
  return params;
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const author = getAuthorBySlug(params.slug);
  if (!author) return {};
  return { title: `${author.name} — Velocity-B Blog` };
}

export default function AuthorArchivePagedPage({
  params,
}: {
  params: { slug: string; pageNum: string };
}) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();
  const pageNum = parseInt(params.pageNum, 10) || 1;
  return <AuthorArchiveContent author={author} currentPage={pageNum} />;
}
