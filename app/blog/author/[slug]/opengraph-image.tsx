import { getAllAuthors, getAuthorBySlug } from "@/lib/blog";
import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Velocity-B Blog — Author";

export function generateStaticParams() {
  return Object.values(getAllAuthors()).map((author) => ({ slug: author.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const author = getAuthorBySlug(params.slug);

  return renderOgImage({
    eyebrow: "Author",
    title: author?.name ?? "Velocity-B Blog",
    accent: "ink",
  });
}
