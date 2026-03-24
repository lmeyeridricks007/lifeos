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
  "new-zealand",
  "germany",
  "france",
  "spain",
  "italy",
  "switzerland",
  "sweden",
  "denmark",
  "norway",
  "ireland",
  "uae",
  "brazil",
  "mexico",
  "singapore",
  "japan",
  "south-korea",
  "turkey",
  "argentina",
  "chile",
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
  "new-zealand": "New Zealand",
  germany: "Germany",
  france: "France",
  spain: "Spain",
  italy: "Italy",
  switzerland: "Switzerland",
  sweden: "Sweden",
  denmark: "Denmark",
  norway: "Norway",
  ireland: "Ireland",
  uae: "United Arab Emirates",
  brazil: "Brazil",
  mexico: "Mexico",
  singapore: "Singapore",
  japan: "Japan",
  "south-korea": "South Korea",
  turkey: "Türkiye",
  argentina: "Argentina",
  chile: "Chile",
};

export function getOriginCountryLabel(slug: string): string {
  return COUNTRY_LABELS[slug] ?? slug.replace(/-/g, " ");
}
