/**
 * Country context for tool landing pages (e.g. /from/south-africa).
 * Used by ToolCountryContextBlock and country landing page content.
 */

export type CountryLandingContext = {
  countrySlug: string;
  countryLabel: string;
  /** Short intro specific to moving from this country. */
  intro?: string;
  /** What often matters or changes for people from this country. */
  whatOftenMatters?: string[];
  /** Document or logistics considerations. */
  documentConsiderations?: string[];
  /** Transfer, travel, language, or distance notes. */
  transferTravelNotes?: string[];
  /** Optional link to country guide. */
  countryGuideHref?: string;
};

export const SUPPORTED_ORIGIN_COUNTRIES = [
  "south-africa",
  "united-states",
  "india",
  "united-kingdom",
  "canada",
  "australia",
  "germany",
  "france",
  "spain",
  "brazil",
] as const;

export type OriginCountrySlug = (typeof SUPPORTED_ORIGIN_COUNTRIES)[number];

export function isSupportedOriginCountry(slug: string): slug is OriginCountrySlug {
  return (SUPPORTED_ORIGIN_COUNTRIES as readonly string[]).includes(slug);
}

const COUNTRY_LABELS: Record<string, string> = {
  "south-africa": "South Africa",
  "united-states": "United States",
  india: "India",
  "united-kingdom": "United Kingdom",
  canada: "Canada",
  australia: "Australia",
  germany: "Germany",
  france: "France",
  spain: "Spain",
  brazil: "Brazil",
};

export function getOriginCountryLabel(slug: string): string {
  return COUNTRY_LABELS[slug] ?? slug.replace(/-/g, " ");
}
