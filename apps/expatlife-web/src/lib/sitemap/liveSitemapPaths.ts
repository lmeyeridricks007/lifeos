import { netherlandsCitiesOverview } from "@/src/data/cities-overview/netherlands-cities";
import { SITEMAP_PERMANENT_REDIRECT_ALIASES } from "@/src/data/site/sitemap-redirect-aliases";
import {
  LIVE_PATHS,
  MOVING_TOOL_FROM_SLUGS,
  normalizeSitePath,
  ROUTING_ORIGIN_COUNTRY_SLUGS,
} from "@/src/data/site/route-registry";
import { NETHERLANDS_CITY_HUB_PAGES } from "@/src/lib/city-hub/netherlandsCityHubPages";
import { loadAllEnabledCountries } from "@/src/lib/countries/loadCountries";
import { parsePublishInstant } from "@/src/lib/publishing/isPubliclyVisible";
import { isRouteLive } from "@/src/lib/routes/routeStatus";

/**
 * Paths omitted from the XML sitemap even when “live” for nav (e.g. utility pages that are noindex).
 * Keep aligned with page-level `metadata.robots`.
 */
const XML_SITEMAP_EXCLUDE = new Set(["/search/"].map((p) => normalizeSitePath(p)));

/**
 * Legacy 301/308 aliases — live for nav / active-state helpers but excluded from XML sitemap
 * (canonical guides only). Includes every static permanent redirect source from next.config.js.
 */
const XML_SITEMAP_LEGACY_REDIRECT_ALIASES = new Set(
  SITEMAP_PERMANENT_REDIRECT_ALIASES.map((p) => normalizeSitePath(p))
);

const routingSlugSet = new Set<string>(ROUTING_ORIGIN_COUNTRY_SLUGS);

/**
 * Normalized paths (trailing slash, lowercase) for URLs that belong in `/sitemap.xml`.
 *
 * Source of truth for “is this indexable?” remains `route-registry` + `isRouteLive` in `routeStatus`.
 * - Every path from `LIVE_PATHS` is a candidate except `XML_SITEMAP_EXCLUDE` and permanent-redirect aliases.
 *   `LIVE_PATHS` includes each `src/content/tools/registry.json` tool with `status: "live"` (canonical `route`)
 *   plus tool category hub routes from `categories.json` — no separate sitemap manifest for new calculators.
 * - Origin-country guides and moving-tool `/from/{country}/` URLs are not fully enumerated in `LIVE_PATHS`;
 *   they are added here for enabled countries whose slug appears in `ROUTING_ORIGIN_COUNTRY_SLUGS`,
 *   then filtered again with `isRouteLive` (origin slugs use `enforceOriginCountryPublishDatesForPublicIndexing`
 *   so scheduled guides stay in the XML on dev/preview builds only).
 */
export function collectLiveSitemapNormalizedPaths(): string[] {
  const set = new Set<string>();

  for (const p of Array.from(LIVE_PATHS)) {
    const n = normalizeSitePath(p);
    if (!XML_SITEMAP_EXCLUDE.has(n) && !XML_SITEMAP_LEGACY_REDIRECT_ALIASES.has(n)) set.add(n);
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

/** Escape XML text content / attribute-safe URL text. */
export function escapeXmlText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export type SitemapUrlEntry = {
  loc: string;
  lastmod: string;
  changefreq: "weekly" | "monthly";
  priority: string;
};

/**
 * ISO lastmod for a sitemap path.
 *
 * City hubs / cities overview use editorial `publishDate` when present. Everything else uses the
 * generation instant — so hundreds of identical timestamps after a deploy are expected (E3 /
 * EC-20260826-010), not evidence of mass content rewrites.
 */
export function sitemapLastModifiedIsoForPath(path: string, now: Date = new Date()): string {
  const n = normalizeSitePath(path);
  if (n === normalizeSitePath(netherlandsCitiesOverview.path)) {
    const t = parsePublishInstant(netherlandsCitiesOverview.publishDate);
    if (t != null) return new Date(t).toISOString();
  }
  for (const city of NETHERLANDS_CITY_HUB_PAGES) {
    if (n === normalizeSitePath(city.path) && city.publishDate) {
      const t = parsePublishInstant(city.publishDate);
      if (t != null) return new Date(t).toISOString();
    }
  }
  return now.toISOString();
}

export function buildSitemapUrlEntries(
  baseUrl: string,
  paths: string[],
  now: Date = new Date()
): SitemapUrlEntry[] {
  const origin = baseUrl.replace(/\/$/, "");
  return paths.map((path) => {
    const changefreq: "weekly" | "monthly" =
      path === "/" || path === "/netherlands/" ? "weekly" : "monthly";
    const priority =
      path === "/"
        ? "1.0"
        : path === "/netherlands/"
          ? "0.9"
          : path === "/netherlands/moving-to-the-netherlands/"
            ? "0.8"
            : path === "/netherlands/cities/"
              ? "0.75"
              : "0.7";
    return {
      loc: `${origin}${path}`,
      lastmod: sitemapLastModifiedIsoForPath(path, now),
      changefreq,
      priority,
    };
  });
}

/** Full urlset document for `/sitemap.xml`. */
export function renderSitemapXml(entries: SitemapUrlEntry[]): string {
  const body = entries
    .map(
      (e) => `  <url>
    <loc>${escapeXmlText(e.loc)}</loc>
    <lastmod>${escapeXmlText(e.lastmod)}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
