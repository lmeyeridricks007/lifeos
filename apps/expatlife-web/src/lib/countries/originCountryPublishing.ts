import countryIndex from "@/src/content/countries/index.json";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";
import type { CountryIndexItem } from "./loadCountries";

export function getOriginCountryIndexEntry(slug: string): CountryIndexItem | undefined {
  return countryIndex.find((item) => item.slug === slug);
}

/**
 * Whether an origin-country guide URL may be shown (menus, sitemap, internal links) and served.
 * Uses optional `publish` / `publishDate` on `countries/index.json` rows; omitted fields mean no extra gate.
 */
export function isOriginCountryGuidePubliclyVisible(
  slug: string,
  now: Date = new Date(),
  options?: { enforcePublishDates?: boolean }
): boolean {
  const row = getOriginCountryIndexEntry(slug);
  if (!row || row.enabled === false) return false;
  return isPubliclyVisible(row.publish, row.publishDate, now, options);
}
