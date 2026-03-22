/**
 * Load country-specific landing page content for tools (e.g. /from/south-africa).
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { SUPPORTED_ORIGIN_COUNTRIES, isSupportedOriginCountry } from "./toolCountryContext";

const CONTENT_PATH = path.join(
  process.cwd(),
  "src",
  "content",
  "tools",
  "country-landing-pages.json"
);

export type ToolSlug = "moving-checklist" | "arrival-planner" | "first-90-days" | "document-readiness";

export type CountryToolLandingContent = {
  intro?: string;
  whatOftenMatters?: string[];
  documentConsiderations?: string[];
  transferTravelNotes?: string[];
  countryGuideHref?: string;
};

export type CountryLandingPagesMap = Record<
  string,
  Record<ToolSlug, CountryToolLandingContent>
>;

let cached: CountryLandingPagesMap | null = null;

export function loadCountryLandingPages(): CountryLandingPagesMap {
  if (cached) return cached;
  if (!existsSync(CONTENT_PATH)) {
    cached = {};
    return cached;
  }
  try {
    const raw = readFileSync(CONTENT_PATH, "utf8");
    cached = JSON.parse(raw) as CountryLandingPagesMap;
    return cached ?? {};
  } catch {
    cached = {};
    return cached;
  }
}

export function getCountryLandingContent(
  countrySlug: string,
  toolSlug: ToolSlug
): CountryToolLandingContent | null {
  const map = loadCountryLandingPages();
  const country = map[countrySlug];
  if (!country) return null;
  return country[toolSlug] ?? null;
}

export function getSupportedOriginCountrySlugs(): string[] {
  return [...SUPPORTED_ORIGIN_COUNTRIES];
}

export function isValidToolCountryLanding(countrySlug: string, _toolSlug: ToolSlug): boolean {
  return isSupportedOriginCountry(countrySlug);
}
