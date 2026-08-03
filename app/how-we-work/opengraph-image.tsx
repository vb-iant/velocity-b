import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "How We Work — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "How We Work",
    title: "Forget the TLAs. Just GSD.",
    accent: "ink",
  });
}
