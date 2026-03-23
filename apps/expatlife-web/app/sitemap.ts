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
 */
import type { MetadataRoute } from "next";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSeoPublicOrigin } from "@/lib/site-origin";
import { netherlandsCitiesOverview } from "@/src/data/cities-overview/netherlands-cities";
import { haarlemCityPage } from "@/src/data/cities/haarlem";
import { groningenCityPage } from "@/src/data/cities/groningen";
import { delftCityPage } from "@/src/data/cities/delft";
import { leidenCityPage } from "@/src/data/cities/leiden";
import { maastrichtCityPage } from "@/src/data/cities/maastricht";
import { bredaCityPage } from "@/src/data/cities/breda";
import { tilburgCityPage } from "@/src/data/cities/tilburg";
import { arnhemCityPage } from "@/src/data/cities/arnhem";
import { nijmegenCityPage } from "@/src/data/cities/nijmegen";
import { amstelveenCityPage } from "@/src/data/cities/amstelveen";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import { parsePublishInstant } from "@/src/lib/publishing/isPubliclyVisible";
import { collectLiveSitemapNormalizedPaths } from "@/src/lib/sitemap/liveSitemapPaths";

function sitemapLastModifiedForPath(path: string): Date {
  const n = normalizeSitePath(path);
  if (n === normalizeSitePath(netherlandsCitiesOverview.path)) {
    const t = parsePublishInstant(netherlandsCitiesOverview.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(haarlemCityPage.path) && haarlemCityPage.publishDate) {
    const t = parsePublishInstant(haarlemCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(groningenCityPage.path) && groningenCityPage.publishDate) {
    const t = parsePublishInstant(groningenCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(delftCityPage.path) && delftCityPage.publishDate) {
    const t = parsePublishInstant(delftCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(leidenCityPage.path) && leidenCityPage.publishDate) {
    const t = parsePublishInstant(leidenCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(maastrichtCityPage.path) && maastrichtCityPage.publishDate) {
    const t = parsePublishInstant(maastrichtCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(bredaCityPage.path) && bredaCityPage.publishDate) {
    const t = parsePublishInstant(bredaCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(tilburgCityPage.path) && tilburgCityPage.publishDate) {
    const t = parsePublishInstant(tilburgCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(arnhemCityPage.path) && arnhemCityPage.publishDate) {
    const t = parsePublishInstant(arnhemCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(nijmegenCityPage.path) && nijmegenCityPage.publishDate) {
    const t = parsePublishInstant(nijmegenCityPage.publishDate);
    if (t != null) return new Date(t);
  }
  if (n === normalizeSitePath(amstelveenCityPage.path) && amstelveenCityPage.publishDate) {
    const t = parsePublishInstant(amstelveenCityPage.publishDate);
    if (t != null) return new Date(t);
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
