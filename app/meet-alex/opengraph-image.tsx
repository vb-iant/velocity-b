import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Meet Alex — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Meet Alex",
    title: "Book a time that works for you.",
    accent: "orange",
  });
}
