/**
 * XML sitemap (`/sitemap.xml`) for search engines.
 *
 * Inclusion rules:
 * - Paths come from `collectLiveSitemapNormalizedPaths()` in `@/src/lib/sitemap/liveSitemapPaths`.
 * - That helper starts from `LIVE_PATHS` in `src/data/site/route-registry.ts` (single source of truth
 *   for static + registry-driven live URLs), adds dynamic origin-country and moving-tool `/from/{country}/`
 *   URLs for enabled countries, excludes explicit non-sitemap paths (e.g. `/search/`), then filters with
 *   `isRouteLive` from `src/lib/routes/routeStatus.ts`.
 *
 * Absolute URLs use `getSeoPublicOrigin()` (www.expatcopilot.com on Vercel production if env is unset).
 *
 * When adding a new indexable page:
 * 1. Ensure its normalized path is part of `LIVE_PATHS` (see comments in `route-registry.ts`), or
 *    covered by a pattern helper used by `isRouteLive`, or extend `liveSitemapPaths` if it is a new
 *    programmatic family of URLs.
 * 2. If it appears in the footer or HTML sitemap lists, update `src/data/site/footer-links.ts`.
 * 3. `/netherlands/cities/` uses `publish` + `publishDate` via `isPubliclyVisible` (same as guides/tools; dev bypasses date);
 *    it is omitted from this XML list until publicly visible; `lastModified` uses the hub publish date.
 * 4. Each `/netherlands/{city}/` hub uses that city dataset’s `publish` + `publishDate`; URLs stay out of the XML list
 *    until `isRouteLive` (see `routeStatus` + `netherlandsCityHubPages`).
 * 5. Origin-country guides under `/netherlands/moving/moving-to-netherlands-from/{slug}/` follow `isRouteLive`, which
 *    enforces `publishDate` only on real production indexing (not `next dev`, Vercel Preview, or CONTENT_PREVIEW).
 */
import type { MetadataRoute } from "next";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSeoPublicOrigin } from "@/lib/site-origin";
import { netherlandsCitiesOverview } from "@/src/data/cities-overview/netherlands-cities";
import { NETHERLANDS_CITY_HUB_PAGES } from "@/src/lib/city-hub/netherlandsCityHubPages";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import { parsePublishInstant } from "@/src/lib/publishing/isPubliclyVisible";
import { collectLiveSitemapNormalizedPaths } from "@/src/lib/sitemap/liveSitemapPaths";

function sitemapLastModifiedForPath(path: string): Date {
  const n = normalizeSitePath(path);
  if (n === normalizeSitePath(netherlandsCitiesOverview.path)) {
    const t = parsePublishInstant(netherlandsCitiesOverview.publishDate);
    if (t != null) return new Date(t);
  }
  for (const city of NETHERLANDS_CITY_HUB_PAGES) {
    if (n === normalizeSitePath(city.path) && city.publishDate) {
      const t = parsePublishInstant(city.publishDate);
      if (t != null) return new Date(t);
    }
  }
  return new Date();
}

/** Regenerate sitemap on ISR so new/scheduled URLs appear without a full redeploy (aligned with guide pages). */
export const revalidate = CONTENT_REVALIDATE;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSeoPublicOrigin();
  const paths = collectLiveSitemapNormalizedPaths();
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: sitemapLastModifiedForPath(path),
    changeFrequency: path === "/" || path === "/netherlands/" ? ("weekly" as const) : ("monthly" as const),
    priority:
      path === "/"
        ? 1
        : path === "/netherlands/"
          ? 0.9
          : path === "/netherlands/moving-to-the-netherlands/"
            ? 0.8
            : path === "/netherlands/cities/"
              ? 0.75
              : 0.7,
  }));
}
