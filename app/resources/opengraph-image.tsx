import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Resources — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Resources",
    title: "Our ideas. Here for free.",
    accent: "orange",
  });
}
