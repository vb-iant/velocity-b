import { notFound } from "next/navigation";
import { getAllAuthors, getAuthorBySlug } from "@/lib/blog";
import { AuthorArchiveContent } from "@/components/blog/AuthorArchiveContent";

export function generateStaticParams() {
  return Object.values(getAllAuthors()).map((author) => ({ slug: author.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const author = getAuthorBySlug(params.slug);
  if (!author) return {};
  return {
    title: `${author.name} — Velocity-B Blog`,
    description: author.bio,
  };
}

export default function AuthorArchivePage({ params }: { params: { slug: string } }) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();
  return <AuthorArchiveContent author={author} currentPage={1} />;
}
