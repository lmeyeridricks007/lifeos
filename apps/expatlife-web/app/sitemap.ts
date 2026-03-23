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
 */
import type { MetadataRoute } from "next";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSeoPublicOrigin } from "@/lib/site-origin";
import { collectLiveSitemapNormalizedPaths } from "@/src/lib/sitemap/liveSitemapPaths";

/** Regenerate sitemap on ISR so new/scheduled URLs appear without a full redeploy (aligned with guide pages). */
export const revalidate = CONTENT_REVALIDATE;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSeoPublicOrigin();
  const paths = collectLiveSitemapNormalizedPaths();
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" || path === "/netherlands/" ? ("weekly" as const) : ("monthly" as const),
    priority:
      path === "/"
        ? 1
        : path === "/netherlands/"
          ? 0.9
          : path === "/netherlands/moving-to-the-netherlands/"
            ? 0.8
            : 0.7,
  }));
}
