import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: "Less deck. More done.",
    accent: "blue",
  });
}
