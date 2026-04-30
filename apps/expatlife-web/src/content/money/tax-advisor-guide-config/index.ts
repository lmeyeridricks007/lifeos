/**
 * Config-driven content for the Netherlands tax-advisor orientation guide.
 *
 * - Editorial (`moneyTaxAdvisor.*` from `moneyTaxAdvisor.editorial.ts`): reuse for other “when to hire” service guides.
 * - Official (`moneyTaxAdvisor.official.ts`): Belastingdienst keys → URLs via `buildOfficialSourcesReferences`.
 * - Monetization (`moneyTaxAdvisor.monetization.ts`): placement + provider framing only.
 * - Related tools (`moneyTaxAdvisor.relatedTools.ts`): hrefs from `taxGuideRoutes` for link stability.
 */

export {
  moneyTaxAdvisorTrustCallouts,
  moneyTaxAdvisorNeedBuckets,
  moneyTaxAdvisorUseCases,
  moneyTaxAdvisorPreparationChecklist,
  moneyTaxAdvisorComparisonCriteria,
  moneyTaxAdvisorEngagementTypes,
  moneyTaxAdvisorRedFlags,
  moneyTaxAdvisorQuestions,
  moneyTaxAdvisorFaq,
} from "./moneyTaxAdvisor.editorial";

export { moneyTaxAdvisorOfficialSources } from "./moneyTaxAdvisor.official";
export { moneyTaxAdvisorRecommendedProviders } from "./moneyTaxAdvisor.monetization";
export { moneyTaxAdvisorRelatedTools } from "./moneyTaxAdvisor.relatedTools";
