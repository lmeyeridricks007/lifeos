/**
 * Explicit `/sitemap.xml` route handler — E3 (EC-20260826-010).
 *
 * Why not `app/sitemap.ts` (MetadataRoute.Sitemap):
 * - Production MetadataRoute responses set `Vary: RSC, Next-Router-*`, which fragments the CDN
 *   cache by client headers. curl/Googlebot often hit a good key; some HTTP clients (RSC-aware
 *   fetchers, WebFetch-style tools) hit a bad key and see intermittent HTTP 500s.
 * - A plain `Response` with `application/xml` is clone-safe and client-agnostic.
 *
 * WAF / bot rules: host is Vercel (no separate WAF challenge on this path). Middleware already
 * excludes `sitemap.xml`. The client 500s were framework/CDN Vary fragmentation, not bot blocking.
 *
 * Loc rules (with E1): permanent-redirect aliases stay out of `<loc>` via
 * `SITEMAP_PERMANENT_REDIRECT_ALIASES`. Identical bulk `lastmod` values are the generation
 * timestamp, not hundreds of content rewrites.
 */
import { CONTENT_REVALIDATE, CONTENT_REVALIDATE_SECONDS } from "@/lib/content-revalidate";
import { getSeoPublicOrigin } from "@/lib/site-origin";
import {
  buildSitemapUrlEntries,
  collectLiveSitemapNormalizedPaths,
  renderSitemapXml,
} from "@/src/lib/sitemap/liveSitemapPaths";

export const revalidate = CONTENT_REVALIDATE;
/** Avoid request-time RSC negotiation; serve one static XML body to all clients. */
export const dynamic = "force-static";

const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  // Do not Vary on RSC / Next-Router-* — that was the MetadataRoute failure mode.
  Vary: "Accept-Encoding",
} as const;

function sitemapResponse(status: 200, xml: string, cacheControl: string): Response {
  return new Response(xml, {
    status,
    headers: {
      ...XML_HEADERS,
      "Cache-Control": cacheControl,
    },
  });
}

function buildXml(): string {
  const baseUrl = getSeoPublicOrigin();
  const paths = collectLiveSitemapNormalizedPaths();
  return renderSitemapXml(buildSitemapUrlEntries(baseUrl, paths));
}

export function GET(): Response {
  try {
    return sitemapResponse(
      200,
      buildXml(),
      `public, s-maxage=${CONTENT_REVALIDATE_SECONDS}, stale-while-revalidate=${CONTENT_REVALIDATE_SECONDS * 24}`
    );
  } catch (error) {
    console.error("[sitemap.xml] generation failed — serving homepage-only fallback", error);
    const baseUrl = getSeoPublicOrigin();
    const xml = renderSitemapXml(buildSitemapUrlEntries(baseUrl, ["/"]));
    return sitemapResponse(200, xml, "public, max-age=60");
  }
}

/** Same headers as GET; body omitted. Content-Length reflects the XML byte size. */
export function HEAD(): Response {
  try {
    const xml = buildXml();
    return new Response(null, {
      status: 200,
      headers: {
        ...XML_HEADERS,
        "Cache-Control": `public, s-maxage=${CONTENT_REVALIDATE_SECONDS}, stale-while-revalidate=${CONTENT_REVALIDATE_SECONDS * 24}`,
        "Content-Length": String(new TextEncoder().encode(xml).length),
      },
    });
  } catch (error) {
    console.error("[sitemap.xml] HEAD generation failed", error);
    return new Response(null, {
      status: 200,
      headers: {
        ...XML_HEADERS,
        "Cache-Control": "public, max-age=60",
        "Content-Length": "0",
      },
    });
  }
}
