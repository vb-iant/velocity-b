import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Our Work — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Our Work",
    title: "Not our first rodeo. Ask any of these guys.",
    accent: "orange",
  });
}
