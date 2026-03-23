/**
 * Canonical route readiness registry for MVP launch.
 *
 * - LIVE paths are collected into LIVE_PATHS (and pattern helpers in routeStatus).
 * - COMING_SOON_ROUTES lists planned URLs we may surface as non-clickable / “Soon” in UI.
 * - Anything not live and not explicitly coming-soon is treated as hidden for menus and safe linking.
 *
 * When a new page ships: add its normalized path to the live builder below (or the relevant JSON source).
 * When a planned service is ready: remove from COMING_SOON_ROUTES and ensure the path is in LIVE_PATHS.
 *
 * Audit: `listNonLiveHrefs` in `@/src/lib/routes/routeStatus` can be used in dev to spot bad internal URLs in ad-hoc arrays.
 */

import movingRegistry from "@/src/content/guides/netherlands/moving/registry.json";
import toolsRegistry from "@/src/content/tools/registry.json";
import toolCategories from "@/src/content/tools/categories.json";
import { NETHERLANDS_SERVICES_CATEGORIES } from "@/src/data/services/categories";

/**
 * Must stay aligned with `ORIGIN_COUNTRY_CONFIG` in `src/lib/countries/originCountryGuides.ts` (client-safe; no fs).
 */
/** Exported for sitemap / crawl utilities; must match `ORIGIN_COUNTRY_CONFIG` slugs in originCountryGuides. */
export const ROUTING_ORIGIN_COUNTRY_SLUGS = [
  "south-africa",
  "india",
  "united-states",
  "united-kingdom",
  "canada",
  "australia",
  "germany",
  "france",
  "brazil",
  "nigeria",
  "spain",
  "italy",
  "turkey",
  "pakistan",
  "philippines",
  "indonesia",
  "uae",
  "singapore",
  "kenya",
] as const;

export type RouteSection =
  | "main"
  | "services"
  | "cities"
  | "trust"
  | "legal"
  | "guides"
  | "tools"
  | "visa"
  | "moving"
  | "other";

export type RouteRegistryEntry = {
  status: "live" | "coming-soon" | "hidden";
  title: string;
  section: RouteSection;
};

/** Planned or placeholder URLs — show only with explicit “Coming soon” treatment, never as normal internal links. */
export const COMING_SOON_ROUTES: Record<string, { title: string; section: RouteSection }> = {
  "/netherlands/services/temporary-accommodation/": {
    title: "Temporary Accommodation",
    section: "services",
  },
  "/netherlands/services/real-estate-agents/": {
    title: "Real Estate Agents",
    section: "services",
  },
  "/netherlands/services/international-schools/": {
    title: "International Schools",
    section: "services",
  },
  "/netherlands/housing-netherlands/": {
    title: "Housing in the Netherlands (guide)",
    section: "guides",
  },
  "/netherlands/renting-in-netherlands/": {
    title: "Renting in the Netherlands (guide)",
    section: "guides",
  },
};

export function normalizeSitePath(href: string): string {
  let p = href.trim();
  if (!p.startsWith("/")) p = `/${p}`;
  const q = p.split(/[?#]/)[0] ?? p;
  const withSlash = q.endsWith("/") ? q : `${q}/`;
  return withSlash.toLowerCase();
}

const VISA_GUIDE_PATHS = [
  "/netherlands/visa/highly-skilled-migrant/",
  "/netherlands/visa/compare-visas/",
  "/netherlands/visa/eu-blue-card/",
  "/netherlands/visa/dutch-american-friendship-treaty/",
  "/netherlands/visa/self-employed-visa/",
  "/netherlands/visa/student-visa/",
  "/netherlands/visa/partner-family-visa/",
] as const;

/** Static pages and hubs not already covered by moving registry or tool registry. */
const EXTRA_LIVE_PATHS = [
  "/",
  "/about/",
  "/contact/",
  "/how-this-site-works/",
  "/privacy/",
  "/terms/",
  "/cookies/",
  "/disclaimer/",
  "/editorial-policy/",
  "/methodology/",
  "/sources/",
  "/how-we-rank-services/",
  "/affiliate-disclosure/",
  "/sitemap/",
  "/search/",
  "/netherlands/",
  "/netherlands/moving-to-the-netherlands/",
  "/netherlands/moving-to-netherlands-from/",
  "/netherlands/services/",
  "/netherlands/cities/",
  "/netherlands/amsterdam/",
  "/netherlands/rotterdam/",
  "/netherlands/utrecht/",
  "/netherlands/the-hague/",
  "/netherlands/eindhoven/",
  "/netherlands/haarlem/",
  "/netherlands/groningen/",
  "/netherlands/delft/",
  "/netherlands/leiden/",
  "/netherlands/maastricht/",
  "/netherlands/breda/",
  "/netherlands/tilburg/",
  "/netherlands/arnhem/",
  "/netherlands/nijmegen/",
  "/netherlands/amstelveen/",
  "/netherlands/tools/",
  "/netherlands/moving/tools/",
  "/netherlands/visa-checker/",
  "/netherlands/visa-timeline-estimator/",
  "/netherlands/visa-cost-calculator/",
  "/netherlands/visa-application-plan/",
  "/netherlands/document-readiness-checker/",
  "/netherlands/settling-in-netherlands/",
  "/netherlands/bsn-registration/",
  "/netherlands/register-address-netherlands/",
] as const;

function buildLivePathSet(): Set<string> {
  const s = new Set<string>();
  const add = (p: string) => s.add(normalizeSitePath(p));

  for (const p of EXTRA_LIVE_PATHS) add(p);
  for (const g of movingRegistry.guides) add(g.path);
  for (const t of toolsRegistry.tools) {
    if (t.status === "live") add(t.route);
  }
  for (const p of VISA_GUIDE_PATHS) add(p);
  for (const c of NETHERLANDS_SERVICES_CATEGORIES) add(c.href);
  for (const { route } of toolCategories.categories) add(route);
  return s;
}

export const LIVE_PATHS: ReadonlySet<string> = buildLivePathSet();

/** Tool routes that are placeholders — safe to mention in nav as “Soon” but must not behave like normal links. */
export const PLACEHOLDER_TOOL_PATHS: ReadonlySet<string> = new Set(
  toolsRegistry.tools.filter((t) => t.status === "placeholder").map((t) => normalizeSitePath(t.route))
);

const ORIGIN_SLUG_SET = new Set<string>(ROUTING_ORIGIN_COUNTRY_SLUGS);

/** True if this path is a published-style “from [country]” guide under /netherlands/moving/moving-to-netherlands-from/{slug}/ */
export function isOriginCountryGuidePath(path: string): boolean {
  const n = normalizeSitePath(path);
  const m = n.match(/^\/netherlands\/moving\/moving-to-netherlands-from\/([a-z0-9-]+)\/$/);
  if (!m) return false;
  return ORIGIN_SLUG_SET.has(m[1]);
}

/** Slugs for `/moving/tools/{slug}/from/{country}/` — keep in sync with app route segments and sitemap builders. */
export const MOVING_TOOL_FROM_SLUGS = [
  "moving-checklist",
  "first-90-days",
  "arrival-planner",
  "document-readiness",
] as const;

const MOVING_TOOL_FROM_RE = new RegExp(
  `^/netherlands/moving/tools/(${MOVING_TOOL_FROM_SLUGS.join("|")})/from/([a-z0-9-]+)/$`
);

export function isMovingToolFromCountryPath(path: string): boolean {
  const n = normalizeSitePath(path);
  const m = n.match(MOVING_TOOL_FROM_RE);
  if (!m) return false;
  return ORIGIN_SLUG_SET.has(m[2]);
}
