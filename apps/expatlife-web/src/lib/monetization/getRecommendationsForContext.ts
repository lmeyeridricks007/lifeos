import {
  banksMonetizationProviders,
  housingMonetizationProviders,
  insuranceMonetizationProviders,
  relocationMonetizationProviders,
  utilitiesMonetizationProviders,
} from "@/src/data/monetization/providers";
import type { MonetizationProvider } from "@/src/lib/monetization/types";

export type RecommendationResolverInput = {
  pageSlug?: string;
  topic?: string;
  pageType?: string;
  country?: string;
  city?: string;
  stage?: string;
  /** Max items to return after filtering (default 4). */
  limit?: number;
};

function normalizePathSlug(slug: string): string {
  return slug
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();
}

function pickPool(slug: string, topic: string): MonetizationProvider[] {
  const t = topic.trim().toLowerCase();
  if (t === "banks" || t === "banking" || t === "bank") return [...banksMonetizationProviders];
  if (t === "health-insurance" || t === "insurance" || t === "health") return [...insuranceMonetizationProviders];
  if (t === "relocation" || t === "moving" || t === "shipping") return [...relocationMonetizationProviders];
  if (t === "utilities" || t === "mobile" || t === "mobile-connectivity") return [...utilitiesMonetizationProviders];
  if (t === "housing" || t === "housing-platforms" || t === "rental") return [...housingMonetizationProviders];

  const s = slug;
  if (s.includes("health-insurance") || s.includes("/insurance/") || s.includes("health-insurance")) {
    return [...insuranceMonetizationProviders];
  }
  if (
    s.includes("/banks") ||
    s.includes("bank-account") ||
    s.includes("banking") ||
    s.includes("/bank")
  ) {
    return [...banksMonetizationProviders];
  }
  if (
    s.includes("relocation-cost") ||
    s.includes("relocation") ||
    s.includes("/moving") ||
    s.includes("shipping") ||
    s.includes("move-") ||
    s.includes("moving-")
  ) {
    return [...relocationMonetizationProviders];
  }
  if (s.includes("mobile-connectivity") || s.includes("/utilities") || s.includes("utilities")) {
    return [...utilitiesMonetizationProviders];
  }
  if (
    s.includes("housing") ||
    s.includes("rental-agenc") ||
    s.includes("housing-platform") ||
    s.includes("pararius") ||
    s.includes("funda")
  ) {
    return [...housingMonetizationProviders];
  }

  return [];
}

/**
 * Returns a filtered, ordered shortlist of monetization providers for a page context.
 * Uses topic first when set, then path/slug heuristics. Empty array if no match.
 */
export function getRecommendationsForContext(params: RecommendationResolverInput): MonetizationProvider[] {
  const slug = normalizePathSlug(params.pageSlug ?? "");
  const topic = params.topic ?? "";
  let pool = pickPool(slug, topic);

  pool = pool.filter((p) => p.status === "active");

  if (params.stage) {
    const st = params.stage.trim().toLowerCase();
    const stageFiltered = pool.filter(
      (p) =>
        p.recommendedForStages.length === 0 ||
        p.recommendedForStages.some((x) => x.toLowerCase() === st)
    );
    if (stageFiltered.length > 0) pool = stageFiltered;
  }

  const city = params.city?.trim().toLowerCase().replace(/\s+/g, "-") ?? "";
  if (city) {
    const cityNeedle = `netherlands/${city}`;
    const cityFiltered = pool.filter(
      (p) =>
        p.recommendedForContexts.length === 0 ||
        p.recommendedForContexts.some((c) => c.toLowerCase().includes(cityNeedle))
    );
    if (cityFiltered.length > 0) pool = cityFiltered;
  }

  const limit = params.limit ?? 4;
  return pool.slice(0, limit);
}
