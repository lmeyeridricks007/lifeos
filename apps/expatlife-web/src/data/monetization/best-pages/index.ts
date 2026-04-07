import { banksForExpatsPage } from "./banks-for-expats";
import { healthInsuranceForExpatsPage } from "./health-insurance-for-expats";
import { relocationForExpatsPage } from "./relocation-for-expats";
import { utilitiesForExpatsPage } from "./utilities-for-expats";
import type { BestProvidersPageContent } from "@/src/lib/monetization/bestProvidersContent";

export { banksForExpatsPage, healthInsuranceForExpatsPage, relocationForExpatsPage, utilitiesForExpatsPage };
export { bestRowsToMiniListItems } from "./utils";

const BY_SLUG = {
  "banks-for-expats": banksForExpatsPage,
  "health-insurance-for-expats": healthInsuranceForExpatsPage,
  "relocation-for-expats": relocationForExpatsPage,
  "utilities-for-expats": utilitiesForExpatsPage,
} as const satisfies Record<string, BestProvidersPageContent>;

export type BestProvidersSlug = keyof typeof BY_SLUG;

export const BEST_PROVIDERS_PAGE_SLUGS = Object.keys(BY_SLUG) as BestProvidersSlug[];

export function isBestProvidersSlug(slug: string): slug is BestProvidersSlug {
  return slug in BY_SLUG;
}

export function loadBestProvidersPage(slug: string): BestProvidersPageContent | null {
  if (!isBestProvidersSlug(slug)) return null;
  return BY_SLUG[slug];
}
