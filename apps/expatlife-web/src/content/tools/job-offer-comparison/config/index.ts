/**
 * Job Offer Comparison — typed editorial & assumptions config.
 * Engine logic stays in `src/lib/tools/job-offer-comparison/`; this folder is content-only.
 */

export { OFFER_COMPARISON_ASSUMPTIONS } from "./offerComparisonAssumptions";
export type {
  AssumptionKnowledgeKind,
  OfferComparisonAssumptionBlock,
  OfferComparisonAssumptionsConfig,
} from "./offerComparisonAssumptions";

export { OFFER_COMPARISON_WORKED_EXAMPLES } from "./offerComparisonWorkedExamples";
export type { OfferComparisonWorkedExample } from "./offerComparisonWorkedExamples";

export { OFFER_COMPARISON_FAQ } from "./offerComparisonFaq";
export type { OfferComparisonFaqItem } from "./offerComparisonFaq";

export { OFFER_COMPARISON_OFFICIAL_SOURCES } from "./offerComparisonOfficialSources";
export type {
  OfferComparisonOfficialSource,
  OfferComparisonOfficialSourceNature,
} from "./offerComparisonOfficialSources";

export {
  OFFER_COMPARISON_NL_BASE,
  OFFER_COMPARISON_RECOMMENDED_SERVICES,
} from "./offerComparisonRecommendedServices";
export type {
  OfferComparisonRecommendedServiceGroupMeta,
  OfferComparisonRecommendedServicesConfig,
  RecommendedServicesGroupId,
} from "./offerComparisonRecommendedServices";

export { OFFER_COMPARISON_SCORING_HELP_TEXT } from "./offerComparisonScoringHelpText";
export type {
  OfferComparisonDecisionLensHelp,
  OfferComparisonScoringHelpTextConfig,
  OfferComparisonStructuredScoreHelp,
  StructuredScoreDimensionKey,
} from "./offerComparisonScoringHelpText";

export { OFFER_COMPARISON_RISK_FLAGS_CONFIG } from "./offerComparisonRiskFlagsConfig";
export type {
  OfferComparisonRiskFlagDefinition,
  OfferComparisonRiskFlagSeverity,
  OfferComparisonRiskFlagsConfig,
} from "./offerComparisonRiskFlagsConfig";
