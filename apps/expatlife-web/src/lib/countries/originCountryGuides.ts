/**
 * Central data source for origin-country relocation guides (Moving to the Netherlands from [country]).
 * Single source of truth for the country index page, discovery modules, and internal linking.
 * Scales from 10 to 100+ countries without hardcoding UI.
 */

import { loadCountryIndex, loadCountryBySlug, type CountryRecord } from "./loadCountries";

const COUNTRY_GUIDE_BASE_PATH = "/netherlands/moving/moving-to-netherlands-from";

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
  { slug: "germany", region: "Europe", order: 7, featured: true },
  { slug: "france", region: "Europe", order: 8, featured: true },
  { slug: "brazil", region: "South America", order: 9, featured: true },
  { slug: "nigeria", region: "Africa", order: 10, featured: true },
  // Future expansion (add more as needed)
  { slug: "spain", region: "Europe", order: 11, featured: false },
  { slug: "italy", region: "Europe", order: 12, featured: false },
  { slug: "turkey", region: "Middle East", order: 13, featured: false },
  { slug: "pakistan", region: "Asia", order: 14, featured: false },
  { slug: "philippines", region: "Asia", order: 15, featured: false },
  { slug: "indonesia", region: "Asia", order: 16, featured: false },
  { slug: "uae", region: "Middle East", order: 17, featured: false },
  { slug: "singapore", region: "Asia", order: 18, featured: false },
  { slug: "kenya", region: "Africa", order: 19, featured: false },
];

function formatCountryLabel(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildEntry(
  slug: string,
  region: OriginCountryRegion,
  order: number,
  featured: boolean,
  record: CountryRecord | null
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
    isPublished: Boolean(record),
    order,
  };
}

/** All configured origin countries with resolved publish state from content. */
function loadAllOriginCountryEntries(): OriginCountryGuideEntry[] {
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
      record
    );
  }).sort((a, b) => a.order - b.order);
}

let cachedEntries: OriginCountryGuideEntry[] | null = null;

function getEntries(): OriginCountryGuideEntry[] {
  if (!cachedEntries) cachedEntries = loadAllOriginCountryEntries();
  return cachedEntries;
}

/** Published guides only (visible on index and discovery modules). */
export function getPublishedOriginCountryGuides(): OriginCountryGuideEntry[] {
  return getEntries().filter((e) => e.isPublished);
}

/** Featured and published (for move hub and compact modules). */
export function getFeaturedOriginCountryGuides(
  limit?: number
): OriginCountryGuideEntry[] {
  const list = getEntries().filter((e) => e.featured && e.isPublished);
  return limit ? list.slice(0, limit) : list;
}

/** Single entry by slug, or null if not configured or not published. */
export function getOriginCountryGuideBySlug(
  slug: string
): OriginCountryGuideEntry | null {
  const entry = getEntries().find((e) => e.slug === slug);
  return entry?.isPublished ? entry : null;
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

/** Path for the country index page (hub). */
export const ORIGIN_COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from";
