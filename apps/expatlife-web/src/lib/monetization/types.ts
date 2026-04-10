/**
 * Data model for Phase 6 monetization: curated providers, contexts, and stages.
 */

export type MonetizationProviderStatus = "active" | "comingSoon";

/** Editorial / routing tags for resolver filtering (extend as needed). */
export type MonetizationContextTag = string;

/** Lifecycle stage for optional filtering (e.g. pre-arrival vs settling). */
export type MonetizationStageTag = "planning" | "pre-arrival" | "arrival" | "settling" | "ongoing";

/** Canonical monetization categories (seed data + queries). */
export type MonetizationProviderCategory =
  | "banks"
  | "health-insurance"
  | "relocation"
  | "utilities"
  | "housing"
  | "mobility";

export type MonetizationProvider = {
  id: string;
  name: string;
  category: MonetizationProviderCategory;
  logo: { src: string; alt: string };
  shortDescription: string;
  tags: string[];
  bestFor: string;
  priceHint: string;
  /** Tracked partner URL when applicable; may be empty when not in use. */
  affiliateUrl: string;
  /** Canonical provider site or internal guide URL. */
  directUrl: string;
  isAffiliate: boolean;
  disclosureText: string;
  recommendedForContexts: MonetizationContextTag[];
  recommendedForStages: MonetizationStageTag[];
  status: MonetizationProviderStatus;
};

/** Default short line for module footers; complements stacked lines in `MonetizationTrustDisclosure`. */
export { DEFAULT_MONETIZATION_DISCLOSURE } from "./trustCopy";

const AFFILIATE_PENDING_BASE = "https://www.expatcopilot.com/go/affiliate-pending";

/**
 * Placeholder tracked-link URL for seed data. Replace with real partner destinations before
 * setting `isAffiliate: true`. While `isAffiliate` is false, UI should keep using `directUrl`.
 */
export function monetizationAffiliatePlaceholder(partnerKey: string): string {
  const slug = partnerKey
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${AFFILIATE_PENDING_BASE}/${slug || "unknown"}`;
}
