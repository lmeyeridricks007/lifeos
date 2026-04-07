/**
 * Context-aware monetization: which surfaces are allowed per page archetype and hard caps
 * so pages do not stack too many provider blocks (especially above the FAQ).
 *
 * **Matrix** (see `BY_TYPE` for booleans and numbers):
 *
 * | Page type   | Typical surfaces |
 * |-------------|------------------|
 * | `pillar`    | Pre-FAQ soft CTA, selective `RecommendationBlock` after FAQ, optional sidebar affiliate |
 * | `guide`     | Pre-FAQ soft CTA, 1–2 post-FAQ curated regions, legacy “useful services” strip |
 * | `city`      | Pre-FAQ soft CTA, `RecommendationBlock` + `BestProvidersMiniList` after FAQ (capped) |
 * | `tool`      | No pre-FAQ monetization by default; inline recommendations after main tool value |
 * | `comparison`| Full comparison table + provider cards; pre-FAQ soft CTA allowed on hybrid tool UIs |
 */

export type MonetizationPageType = "pillar" | "guide" | "city" | "tool" | "comparison";

/** Named surfaces templates can check before rendering monetization UI. */
export type MonetizationSurfaceKey =
  | "preFaqSoftCta"
  | "recommendationBlock"
  | "affiliateSection"
  | "bestProvidersMiniList"
  | "inlineToolRecommendations"
  | "sidebarAffiliate"
  | "fullProviderComparison"
  | "postFaqLegacyUsefulServices";

export type MonetizationPolicy = {
  surfaces: Record<MonetizationSurfaceKey, boolean>;
  /** Post-FAQ curated blocks (e.g. mini-list + SoftCTA counts as one; RecommendationBlock + mini-list = two). */
  maxPostFaqRecommendationSections: number;
  /**
   * Large provider grids (RecommendationBlock, AffiliateSection) allowed above the FAQ region.
   * Keep to 1 unless a page explicitly needs more (e.g. rare editorial layouts).
   */
  maxPrimaryProviderBlocksAboveFaq: number;
  /** Max cards per RecommendationBlock / AffiliateSection on this page type. */
  maxProvidersPerRecommendationBlock: number;
  /** Tool pages: hide early `beforeFaq` monetization unless explicitly overridden. */
  deferMonetizationUntilAfterMainTool: boolean;
};

const PILLAR_POLICY: MonetizationPolicy = {
  surfaces: {
    preFaqSoftCta: true,
    recommendationBlock: true,
    affiliateSection: false,
    bestProvidersMiniList: false,
    inlineToolRecommendations: false,
    sidebarAffiliate: true,
    fullProviderComparison: false,
    postFaqLegacyUsefulServices: false,
  },
  maxPostFaqRecommendationSections: 1,
  maxPrimaryProviderBlocksAboveFaq: 1,
  maxProvidersPerRecommendationBlock: 4,
  deferMonetizationUntilAfterMainTool: false,
};

const GUIDE_POLICY: MonetizationPolicy = {
  surfaces: {
    preFaqSoftCta: true,
    recommendationBlock: true,
    affiliateSection: true,
    bestProvidersMiniList: true,
    inlineToolRecommendations: false,
    sidebarAffiliate: false,
    fullProviderComparison: false,
    postFaqLegacyUsefulServices: true,
  },
  maxPostFaqRecommendationSections: 2,
  maxPrimaryProviderBlocksAboveFaq: 1,
  maxProvidersPerRecommendationBlock: 4,
  deferMonetizationUntilAfterMainTool: false,
};

const CITY_POLICY: MonetizationPolicy = {
  surfaces: {
    preFaqSoftCta: true,
    recommendationBlock: true,
    affiliateSection: false,
    bestProvidersMiniList: true,
    inlineToolRecommendations: false,
    sidebarAffiliate: false,
    fullProviderComparison: false,
    postFaqLegacyUsefulServices: false,
  },
  maxPostFaqRecommendationSections: 2,
  maxPrimaryProviderBlocksAboveFaq: 1,
  maxProvidersPerRecommendationBlock: 4,
  deferMonetizationUntilAfterMainTool: false,
};

const TOOL_POLICY: MonetizationPolicy = {
  surfaces: {
    preFaqSoftCta: false,
    recommendationBlock: false,
    affiliateSection: false,
    bestProvidersMiniList: false,
    inlineToolRecommendations: true,
    sidebarAffiliate: false,
    fullProviderComparison: false,
    postFaqLegacyUsefulServices: false,
  },
  maxPostFaqRecommendationSections: 0,
  maxPrimaryProviderBlocksAboveFaq: 0,
  maxProvidersPerRecommendationBlock: 4,
  deferMonetizationUntilAfterMainTool: true,
};

const COMPARISON_POLICY: MonetizationPolicy = {
  surfaces: {
    preFaqSoftCta: true,
    recommendationBlock: false,
    affiliateSection: false,
    bestProvidersMiniList: false,
    inlineToolRecommendations: true,
    sidebarAffiliate: false,
    fullProviderComparison: true,
    postFaqLegacyUsefulServices: false,
  },
  maxPostFaqRecommendationSections: 0,
  maxPrimaryProviderBlocksAboveFaq: 0,
  maxProvidersPerRecommendationBlock: 4,
  deferMonetizationUntilAfterMainTool: false,
};

const BY_TYPE: Record<MonetizationPageType, MonetizationPolicy> = {
  pillar: PILLAR_POLICY,
  guide: GUIDE_POLICY,
  city: CITY_POLICY,
  tool: TOOL_POLICY,
  comparison: COMPARISON_POLICY,
};

export function getMonetizationPolicy(pageType: MonetizationPageType): MonetizationPolicy {
  return BY_TYPE[pageType];
}

export function isMonetizationSurfaceEnabled(
  pageType: MonetizationPageType,
  surface: MonetizationSurfaceKey
): boolean {
  return getMonetizationPolicy(pageType).surfaces[surface];
}

/** Slice provider lists to the policy cap for this page type. */
export function clampProvidersForPageType<T>(pageType: MonetizationPageType, items: T[]): T[] {
  const n = getMonetizationPolicy(pageType).maxProvidersPerRecommendationBlock;
  return items.slice(0, n);
}

/**
 * Cap how many distinct post-FAQ recommendation regions to compose (mini-list, RecommendationBlock, etc.).
 */
export function clampPostFaqRecommendationSections(
  pageType: MonetizationPageType,
  requested: number
): number {
  const max = getMonetizationPolicy(pageType).maxPostFaqRecommendationSections;
  return Math.max(0, Math.min(requested, max));
}

/**
 * Whether a `ToolPageTemplate` may render `beforeFaq` monetization.
 * Use `monetizationPageType="comparison"` (or `allowPreFaqMonetization`) for compare-visas-style tools.
 */
export function toolTemplateAllowsPreFaqMonetization(
  pageType: MonetizationPageType = "tool",
  allowPreFaqMonetization?: boolean
): boolean {
  if (allowPreFaqMonetization === true) return true;
  if (allowPreFaqMonetization === false) return false;
  const p = getMonetizationPolicy(pageType);
  return p.surfaces.preFaqSoftCta && !p.deferMonetizationUntilAfterMainTool;
}

export function maxPrimaryProviderBlocksAboveFaq(pageType: MonetizationPageType): number {
  return getMonetizationPolicy(pageType).maxPrimaryProviderBlocksAboveFaq;
}
