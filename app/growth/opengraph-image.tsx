import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Growth — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Growth",
    title: "What got you here might not get you to what's next",
    accent: "orange",
  });
}
