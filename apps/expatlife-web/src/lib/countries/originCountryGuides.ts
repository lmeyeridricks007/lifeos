/**
 * Central data source for origin-country relocation guides (Moving to the Netherlands from [country]).
 * Single source of truth for the country index page, discovery modules, and internal linking.
 * Scales from 10 to 100+ countries without hardcoding UI.
 */

import { loadCountryIndex, loadCountryBySlug, type CountryRecord } from "./loadCountries";
import { isOriginCountryGuidePubliclyVisible } from "./originCountryPublishing";
import { ORIGIN_COUNTRY_GUIDE_BASE_PATH } from "./originCountryPaths";

const COUNTRY_GUIDE_BASE_PATH = ORIGIN_COUNTRY_GUIDE_BASE_PATH;

/** Display region (continent) for grouping and filters. */
export type OriginCountryRegion =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania"
  | "Middle East";

export type OriginCountryGuideEntry = {
  slug: string;
  countryCode?: string;
  countryName: string;
  shortName: string;
  href: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  shortDescription: string;
  supportingNote?: string;
  region: OriginCountryRegion;
  priority: number;
  featured: boolean;
  isPublished: boolean;
  order: number;
  keywords?: string[];
  relatedVisaRoutes?: string[];
  topConcerns?: string[];
};

/**
 * Order and region for the initial featured set and future expansion. Lower order = higher priority.
 * When adding slugs, also update `ROUTING_ORIGIN_COUNTRY_SLUGS` in `src/data/site/route-registry.ts` (client-safe nav).
 */
const ORIGIN_COUNTRY_CONFIG: Array<{
  slug: string;
  region: OriginCountryRegion;
  order: number;
  featured: boolean;
}> = [
  { slug: "south-africa", region: "Africa", order: 1, featured: true },
  { slug: "india", region: "Asia", order: 2, featured: true },
  { slug: "united-states", region: "North America", order: 3, featured: true },
  { slug: "united-kingdom", region: "Europe", order: 4, featured: true },
  { slug: "canada", region: "North America", order: 5, featured: true },
  { slug: "australia", region: "Oceania", order: 6, featured: true },
  { slug: "new-zealand", region: "Oceania", order: 7, featured: true },
  { slug: "germany", region: "Europe", order: 8, featured: true },
  { slug: "france", region: "Europe", order: 9, featured: true },
  { slug: "spain", region: "Europe", order: 10, featured: true },
  { slug: "italy", region: "Europe", order: 11, featured: true },
  { slug: "sweden", region: "Europe", order: 12, featured: true },
  { slug: "denmark", region: "Europe", order: 13, featured: true },
  { slug: "norway", region: "Europe", order: 14, featured: true },
  { slug: "ireland", region: "Europe", order: 15, featured: true },
  { slug: "switzerland", region: "Europe", order: 16, featured: true },
  { slug: "uae", region: "Middle East", order: 17, featured: true },
  { slug: "brazil", region: "South America", order: 18, featured: true },
  { slug: "argentina", region: "South America", order: 19, featured: true },
  { slug: "chile", region: "South America", order: 20, featured: true },
  { slug: "mexico", region: "North America", order: 21, featured: true },
  { slug: "singapore", region: "Asia", order: 22, featured: true },
  { slug: "japan", region: "Asia", order: 23, featured: true },
  { slug: "south-korea", region: "Asia", order: 24, featured: true },
  { slug: "nigeria", region: "Africa", order: 25, featured: true },
  // Future expansion (add more as needed)
  { slug: "turkey", region: "Middle East", order: 26, featured: true },
  { slug: "pakistan", region: "Asia", order: 27, featured: true },
  { slug: "philippines", region: "Asia", order: 28, featured: true },
  { slug: "indonesia", region: "Asia", order: 29, featured: true },
  { slug: "kenya", region: "Africa", order: 30, featured: true },
];

function formatCountryLabel(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/**
 * Hub / browse cards: when `enforceHubPublishDates` is true, future `publishDate` rows show as Coming soon
 * (production, or any environment with middleware `?preview=true` / simulate-live). In `next dev` without
 * that mode, rows match normal page visibility (scheduled guides are clickable).
 */
export type OriginCountryHubVisibilityOptions = {
  enforceHubPublishDates: boolean;
};

/**
 * Production-style visibility (respect `publishDate` even in dev). Used for SEO lists, search, and “real” published checks.
 */
function isOriginCountryStrictlyPublished(slug: string, now: Date = new Date()): boolean {
  return isOriginCountryGuidePubliclyVisible(slug, now, { enforcePublishDates: true });
}

function computeHubCardPublished(
  slug: string,
  record: CountryRecord | null,
  enforceHubPublishDates: boolean
): boolean {
  if (!record) return false;
  if (enforceHubPublishDates) {
    return isOriginCountryStrictlyPublished(slug, new Date());
  }
  return isOriginCountryGuidePubliclyVisible(slug, new Date());
}

function buildEntry(
  slug: string,
  region: OriginCountryRegion,
  order: number,
  featured: boolean,
  record: CountryRecord | null,
  hubOptions?: OriginCountryHubVisibilityOptions
): OriginCountryGuideEntry {
  const name = record?.name ?? formatCountryLabel(slug);
  const shortName = record?.shortName ?? name;
  const href = `${COUNTRY_GUIDE_BASE_PATH}/${slug}/`;
  const title = `${name} to Netherlands`;

  const shortDescription =
    record?.seo?.description ??
    "Visa context, document planning, shipping distance, and first-step relocation guidance.";
  const supportingNote =
    "Common topics: work routes, apostilles, budgeting, and first-month planning.";

  return {
    slug,
    countryCode: record?.iso2?.toLowerCase(),
    countryName: name,
    shortName,
    href,
    title,
    seoTitle: record?.seo?.title,
    metaDescription: record?.seo?.description,
    shortDescription,
    supportingNote,
    region,
    priority: featured ? 1 : 2,
    featured,
    isPublished: computeHubCardPublished(
      slug,
      record,
      hubOptions?.enforceHubPublishDates ?? true
    ),
    order,
  };
}

/** All configured origin countries with resolved publish state from content. */
function loadAllOriginCountryEntries(hubOptions?: OriginCountryHubVisibilityOptions): OriginCountryGuideEntry[] {
  const index = loadCountryIndex();
  const indexBySlug = new Map(index.map((item) => [item.slug, item]));

  return ORIGIN_COUNTRY_CONFIG.map((config) => {
    const indexItem = indexBySlug.get(config.slug);
    const enabled = indexItem?.enabled !== false;
    const record = enabled ? loadCountryBySlug(config.slug) : null;
    return buildEntry(
      config.slug,
      config.region,
      config.order,
      config.featured,
      record,
      hubOptions
    );
  }).sort((a, b) => a.order - b.order);
}

/**
 * Always rebuild from disk + current publish rules.
 * A module-level cache here caused new `countries/*.json` + index rows to stay missing in the hub
 * until the dev server restarted (first `loadAllOriginCountryEntries` snapshot was frozen).
 */
function getEntries(): OriginCountryGuideEntry[] {
  return loadAllOriginCountryEntries(undefined);
}

/** Published guides only (visible on index and discovery modules). */
export function getPublishedOriginCountryGuides(): OriginCountryGuideEntry[] {
  return getEntries().filter((e) => isOriginCountryStrictlyPublished(e.slug, new Date()));
}

/**
 * All configured origin-country hub rows (published or not). Use for browse UI with “Coming soon”
 * on rows where `isPublished` is false.
 *
 * Pass `enforceHubPublishDates` from the hub page (false in `next dev` unless `?preview=true` sets the
 * simulate-live header; true in production).
 */
export function getAllOriginCountryGuideEntries(
  hubOptions?: OriginCountryHubVisibilityOptions
): OriginCountryGuideEntry[] {
  return hubOptions ? loadAllOriginCountryEntries(hubOptions) : getEntries();
}

/** Featured rows in hub order, including not-yet-published (for “Popular routes” + coming soon). */
export function getFeaturedOriginCountryHubCards(
  limit?: number,
  hubOptions?: OriginCountryHubVisibilityOptions
): OriginCountryGuideEntry[] {
  const list = loadAllOriginCountryEntries(hubOptions).filter((e) => e.featured);
  return limit != null ? list.slice(0, limit) : list;
}

/** Featured and published only (legacy helpers / modules that must not link to scheduled URLs). */
export function getFeaturedOriginCountryGuides(
  limit?: number
): OriginCountryGuideEntry[] {
  const list = getEntries().filter(
    (e) => e.featured && isOriginCountryStrictlyPublished(e.slug, new Date())
  );
  return limit ? list.slice(0, limit) : list;
}

/** Single entry by slug, or null if not configured or not strictly published (ignores dev hub preview). */
export function getOriginCountryGuideBySlug(
  slug: string
): OriginCountryGuideEntry | null {
  const entry = getEntries().find((e) => e.slug === slug);
  return entry && isOriginCountryStrictlyPublished(slug, new Date()) ? entry : null;
}

/** All published guides grouped by region for the index page. */
export function getPublishedGuidesByRegion(): Record<
  OriginCountryRegion,
  OriginCountryGuideEntry[]
> {
  const published = getPublishedOriginCountryGuides();
  const groups = {} as Record<OriginCountryRegion, OriginCountryGuideEntry[]>;
  const regions: OriginCountryRegion[] = [
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Oceania",
    "Middle East",
  ];
  regions.forEach((r) => (groups[r] = []));
  published.forEach((e) => groups[e.region].push(e));
  return groups;
}

export { ORIGIN_COUNTRY_INDEX_PATH, ORIGIN_COUNTRY_GUIDE_BASE_PATH } from "./originCountryPaths";
