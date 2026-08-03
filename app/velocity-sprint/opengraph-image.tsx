import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "The Velocity Sprint — Velocity-B";

export default async function Image() {
  return renderOgImage({
    eyebrow: "The Velocity Sprint",
    title: "Transform your revenue operations in 8 weeks",
    accent: "blue",
  });
}
