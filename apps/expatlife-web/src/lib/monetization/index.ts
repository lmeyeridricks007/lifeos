export type { RecommendedProvidersOptions } from "@/src/data/monetization/queries";
export {
  getActiveProvidersByCategory,
  getRecommendedProvidersByContext,
} from "@/src/data/monetization/queries";
export type { RecommendationResolverInput } from "./getRecommendationsForContext";
export { getRecommendationsForContext } from "./getRecommendationsForContext";
export {
  resolveGuideSecondaryAffiliateSectionProps,
  type ResolveGuideSecondaryAffiliateInput,
} from "./resolveGuideSecondaryAffiliateSection";
export { monetizationProviderToCardProps } from "./mapProviderToCard";
export type {
  MonetizationContextTag,
  MonetizationProvider,
  MonetizationProviderCategory,
  MonetizationProviderStatus,
  MonetizationStageTag,
} from "./types";
export {
  DEFAULT_MONETIZATION_DISCLOSURE,
  monetizationAffiliatePlaceholder,
} from "./types";
export {
  CITY_RELOCATION_BLOCK_RATIONALE,
  GUIDE_MINI_LIST_EDITORIAL_RATIONALE,
  HOW_WE_CHOOSE_CRITERIA,
  MONETIZATION_TRUST_DISCLOSURE_LINES,
  MONETIZATION_TRUST_URLS,
  PILLAR_MOVING_RELOCATION_RATIONALE,
} from "./trustCopy";
export type { MonetizationPageType, MonetizationPolicy, MonetizationSurfaceKey } from "./pageTypePolicy";
export {
  clampPostFaqRecommendationSections,
  clampProvidersForPageType,
  getMonetizationPolicy,
  isMonetizationSurfaceEnabled,
  maxPrimaryProviderBlocksAboveFaq,
  toolTemplateAllowsPreFaqMonetization,
} from "./pageTypePolicy";
export type {
  ContextualAffiliateCategory,
  ContextualAffiliateConfig,
} from "./contextualAffiliatePlan";
export { dedupeMidEnd } from "./contextualAffiliatePlan";
export type { PageMonetizationMetadata } from "./pageMonetizationMetadata";
export { inferMonetizationCategoriesFromPath } from "./pageMonetizationMetadata";
export { NETHERLANDS_GUIDE_PAGE_MONETIZATION } from "./netherlandsGuideMonetizationRegistry";
export { resolveNetherlandsGuideAffiliatePlan } from "./resolveNetherlandsGuideAffiliatePlan";
