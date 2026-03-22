import { loadAllEnabledCountries } from "@/src/lib/countries/loadCountries";
import {
  LIVE_PATHS,
  MOVING_TOOL_FROM_SLUGS,
  normalizeSitePath,
  ROUTING_ORIGIN_COUNTRY_SLUGS,
} from "@/src/data/site/route-registry";
import { isRouteLive } from "@/src/lib/routes/routeStatus";

/**
 * Paths omitted from the XML sitemap even when “live” for nav (e.g. utility pages that are noindex).
 * Keep aligned with page-level `metadata.robots`.
 */
const XML_SITEMAP_EXCLUDE = new Set(["/search/"].map((p) => normalizeSitePath(p)));

const routingSlugSet = new Set<string>(ROUTING_ORIGIN_COUNTRY_SLUGS);

/**
 * Normalized paths (trailing slash, lowercase) for URLs that belong in `/sitemap.xml`.
 *
 * Source of truth for “is this indexable?” remains `route-registry` + `isRouteLive` in `routeStatus`.
 * - Every path from `LIVE_PATHS` is a candidate except `XML_SITEMAP_EXCLUDE`.
 * - Origin-country guides and moving-tool `/from/{country}/` URLs are not fully enumerated in `LIVE_PATHS`;
 *   they are added here for enabled countries whose slug appears in `ROUTING_ORIGIN_COUNTRY_SLUGS`,
 *   then filtered again with `isRouteLive` (same rules as origin / from-country pattern helpers).
 */
export function collectLiveSitemapNormalizedPaths(): string[] {
  const set = new Set<string>();

  for (const p of Array.from(LIVE_PATHS)) {
    const n = normalizeSitePath(p);
    if (!XML_SITEMAP_EXCLUDE.has(n)) set.add(n);
  }

  for (const c of loadAllEnabledCountries()) {
    if (!routingSlugSet.has(c.slug)) continue;
    set.add(normalizeSitePath(`/netherlands/moving/moving-to-netherlands-from/${c.slug}/`));
    for (const tool of MOVING_TOOL_FROM_SLUGS) {
      set.add(normalizeSitePath(`/netherlands/moving/tools/${tool}/from/${c.slug}/`));
    }
  }

  const out = Array.from(set).filter((path) => isRouteLive(path));
  out.sort((a, b) => a.localeCompare(b));
  return out;
}
