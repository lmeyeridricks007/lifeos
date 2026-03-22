import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "ExpatCopilot — Netherlands relocation guides and tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph image (1200×630 PNG) for LinkedIn, WhatsApp, Slack, and other crawlers
 * that do not handle SVG previews reliably.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #f6f9ff 0%, #e0f2fe 45%, #cffafe 100%)",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          ExpatCopilot
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            fontWeight: 500,
            color: "#334155",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          Practical guides, tools, and services for moving to the Netherlands
        </div>
      </div>
    ),
    { ...size }
  );
}
