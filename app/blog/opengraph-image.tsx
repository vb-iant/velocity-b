import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Blog — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Blog",
    title: "Ideas on revenue growth, from people who do the job",
    accent: "orange",
  });
}
