/**
 * Employment Type Scenario Tool — deterministic planning engine (Netherlands work models).
 *
 * - **Money:** `computeIncomeOutcome` (`incomeOutcome.ts`) — formulas documented in file header.
 * - **Scores:** `dimensionScoring.ts` — per-dimension functions + `computeOverallFitScore`.
 * - **Weights:** `priorityWeights.ts` — normalization + documented mapping to overall.
 * - **Orchestration:** `calculateEmploymentTypeScenario` (`engine.ts`).
 */

export { calculateEmploymentTypeScenario, activeScenarioIds } from "./engine";
export { computeIncomeOutcome, billableFraction } from "./incomeOutcome";
export {
  computeRelativeIncomeScore,
  computeSecurityScore,
  computeFlexibilityScore,
  computeAdminSimplicityScore,
  computeBenefitsScore,
  computeExpatPracticalityScore,
  computeOverallFitScore,
  scenarioLabel,
} from "./dimensionScoring";
export { normalizePriorityWeights, normalizePrioritySliders, PRIORITY_WEIGHTING_DOCUMENTATION } from "./priorityWeights";
export { generateRiskHighlights, hasIncomeVolatilityFlag } from "./riskHighlights";
export { generateEmploymentQuestions, questionTexts, buildDynamicQuestions } from "./questions";
export { estimateScenarioMoney } from "./moneyEstimate";
export {
  buildPreviewNarrative,
  buildToolInsights,
  computeDecisionLenses,
  computeScenarioCostBuckets,
  shouldShowAdvancedRefinementPrompt,
} from "./insights";
export type * from "./types";
