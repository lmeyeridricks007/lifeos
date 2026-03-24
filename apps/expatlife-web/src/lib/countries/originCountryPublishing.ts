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

/**
 * Use for sitemap + `isRouteLive` origin-country gates: enforce `publishDate` only on real production
 * indexing. Local `next dev`, Vercel Preview, and CONTENT_PREVIEW builds stay relaxed so scheduled
 * guides stay discoverable like the live HTML (see `isPubliclyVisible` / middleware).
 */
export function enforceOriginCountryPublishDatesForPublicIndexing(): boolean {
  return (
    process.env.NODE_ENV === "production" &&
    process.env.VERCEL_ENV !== "preview" &&
    process.env.CONTENT_PREVIEW !== "true" &&
    process.env.NEXT_PUBLIC_CONTENT_PREVIEW !== "true"
  );
}
