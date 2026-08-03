import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "UK Expansion — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "UK Expansion",
    title: "The UK, without the guesswork or the cold start",
    accent: "blue",
  });
}
