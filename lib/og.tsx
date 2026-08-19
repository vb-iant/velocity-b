// Shared social-share (OG) image renderer.
//
// The site dropped featured/hero photography in favour of a typographic,
// "Clean & Bold" look, so rather than design a static image per page, every
// route gets a code-generated card built from the same brand tokens as the
// rest of the site (navy background, Space Grotesk, the chevron ">" motif,
// and the blue/orange/ink accent cycle already used on PostCard borders).
//
// Each route's `opengraph-image.tsx` just calls `renderOgImage({...})` with
// page-specific copy — this file is the only place that touches ImageResponse.
import { ImageResponse } from "next/og";

// Note: the card background is navy, so the "ink" brand colour (also navy)
// would be invisible as accent text on it. On this specific dark template,
// the ink "slot" in the 3-colour rotation renders as white instead — it's
// still the third distinct option alongside blue/orange, just adapted for
// contrast against a navy card rather than the site's white page background.
const ACCENTS = {
  blue: "#5CA6FF",
  orange: "#FF8A3D",
  ink: "#ffffff",
} as const;

export type OgAccent = keyof typeof ACCENTS;

function withAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Deterministic accent per tag, in tags.json order — cycles the same 3 brand
// colours used elsewhere (e.g. PostCard's BORDER_COLORS), since tags don't
// otherwise carry a colour of their own.
export function accentForTagIndex(index: number): OgAccent {
  const order: OgAccent[] = ["blue", "orange", "ink"];
  return order[index % order.length];
}

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const BOLD_FONT_URL =
  "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf";
const MEDIUM_FONT_URL =
  "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUUsj.ttf";

let boldFontPromise: Promise<ArrayBuffer> | null = null;
let mediumFontPromise: Promise<ArrayBuffer> | null = null;

async function getFonts() {
  // force-cache is required here: an uncached fetch inside an image
  // metadata route makes the whole route dynamic, which defeats
  // generateStaticParams on the per-slug/per-author variants of this
  // renderer and (on Vercel) leaves those routes unable to read
  // content/blog/*.md at request time.
  boldFontPromise ??= fetch(BOLD_FONT_URL, { cache: "force-cache" }).then((res) =>
    res.arrayBuffer()
  );
  mediumFontPromise ??= fetch(MEDIUM_FONT_URL, { cache: "force-cache" }).then((res) =>
    res.arrayBuffer()
  );
  const [bold, medium] = await Promise.all([boldFontPromise, mediumFontPromise]);
  return { bold, medium };
}

export async function renderOgImage({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: OgAccent;
}) {
  const { bold, medium } = await getFonts();
  const accentColor = ACCENTS[accent];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#0A1543",
          padding: "76px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Space Grotesk Medium",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: accentColor,
          }}
        >
          {eyebrow}
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk Bold",
              fontSize: 84,
              lineHeight: 1,
              color: accentColor,
            }}
          >
            {">"}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk Bold",
              fontSize: 58,
              lineHeight: 1.14,
              color: "#ffffff",
              maxWidth: 900,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#ffffff",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Space Grotesk Bold",
              fontSize: 20,
              color: "#0A1543",
            }}
          >
            B
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk Bold",
              fontSize: 22,
              color: "#ffffff",
            }}
          >
            Velocity-B
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Space Grotesk Bold", data: bold, weight: 700, style: "normal" },
        { name: "Space Grotesk Medium", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}

// Richer template used specifically for individual blog posts: adds the
// author byline and a large background chevron for more visual presence
// than the plain page template above. The chevron is drawn as a single SVG
// <path> stroke (not the ">" text glyph) — at this scale Space Grotesk's
// ">" character shows a visible gap at the vertex, whereas a stroked path
// with a round line-join always closes cleanly regardless of size.
export async function renderBlogOgImage({
  tag,
  title,
  author,
  accent,
}: {
  tag: string;
  title: string;
  author: string;
  accent: OgAccent;
}) {
  const { bold, medium } = await getFonts();
  const accentColor = ACCENTS[accent];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#0A1543",
          padding: "76px",
          overflow: "hidden",
        }}
      >
        <svg
          style={{ position: "absolute", top: -320, right: -300 }}
          width="1150"
          height="1150"
          viewBox="0 0 100 100"
        >
          <path
            d="M26 4 L80 50 L26 96"
            fill="none"
            stroke={withAlpha(accentColor, 0.12)}
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div
          style={{
            display: "flex",
            fontFamily: "Space Grotesk Medium",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: accentColor,
          }}
        >
          {tag}
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk Bold",
              fontSize: 96,
              lineHeight: 1,
              color: accentColor,
            }}
          >
            {">"}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk Bold",
              fontSize: 72,
              lineHeight: 1.12,
              color: "#ffffff",
              maxWidth: 700,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk Medium",
              fontSize: 22,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            {`By ${author}`}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Space Grotesk Bold",
                fontSize: 20,
                color: "#0A1543",
              }}
            >
              B
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Space Grotesk Bold",
                fontSize: 22,
                color: "#ffffff",
              }}
            >
              Velocity-B
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Space Grotesk Bold", data: bold, weight: 700, style: "normal" },
        { name: "Space Grotesk Medium", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}
