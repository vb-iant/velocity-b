import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Velocity-B — Revenue-as-a-Service";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Velocity-B",
    title: "Revenue-as-a-Service for growing B2B tech companies",
    accent: "blue",
  });
}
