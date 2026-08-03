import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contact — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "A quick conversation. No pitch deck required.",
    accent: "ink",
  });
}
