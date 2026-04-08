/**
 * High-level map of where deterministic rules live (maintenance aid).
 * Numeric thresholds and scoring live in `engine.ts` and `rules.ts`; derived UX copy in `resultDerivations.ts`.
 *
 * - Residency: BRP, months, homes, family, work location → `scoreResidencySignals` / assessment in engine
 * - Dual-residency risk: overlap of strong NL vs foreign ties
 * - Double-tax risk score: income mix, payroll mismatch, foreign withholding uncertainty, etc.
 * - Income map rows: per-type jurisdiction + `whatThisMeansForYou` in `mapIncomeType`
 * - Relief categories: `buildReliefMethods`
 * - Pay-twice framing: `derivePayTaxTwice` (filing vs actual double payment)
 * - Services: `serviceRecommendation.ts` from input + result
 * - Scenario compare: `scenarioCompare.ts` (variant patches + re-run engine)
 */

export const DOUBLE_TAX_RULE_MODULES = [
  "engine.ts — core scoring and outputs",
  "rules.ts — shared income / complexity sets",
  "resultDerivations.ts — pay-twice, summaries, escalation, professional review tier",
  "scenarioCompare.ts — what-if rows",
  "serviceRecommendation.ts — editorial service grouping",
] as const;
