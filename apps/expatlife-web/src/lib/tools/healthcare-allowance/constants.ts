/**
 * @file Combined year view for UI and legacy imports (rules + default premium).
 * Authoritative numbers live in `config/healthcareAllowanceRulesByYear` and `config/healthcarePremiumDefaultsByYear`.
 */
import { healthcareAllowanceRulesByYear, type HealthcareAllowanceTaxYear } from "./config/healthcareAllowanceRulesByYear";
import { healthcarePremiumDefaultsByYear } from "./config/healthcarePremiumDefaultsByYear";

export {
  healthcareAllowanceRulesByYear,
  healthcarePremiumDefaultsByYear,
  healthcareAllowanceWarningsConfig,
  healthcareAllowanceWorkedExamples,
  DEFAULT_HEALTHCARE_ALLOWANCE_YEAR,
  SUPPORTED_HEALTHCARE_ALLOWANCE_YEARS,
  isSupportedHealthcareAllowanceYear,
  type HealthcareAllowanceTaxYear,
  type HealthcareAllowanceRulesYear,
} from "./config";

function mergeConfigYear(y: HealthcareAllowanceTaxYear) {
  const r = healthcareAllowanceRulesByYear[y];
  const p = healthcarePremiumDefaultsByYear[y];
  return {
    ...r,
    averageMonthlyBasicPremium: p.averageBasicPremiumMonthly,
  };
}

/** Flattened per-year object for components that expect a single record (e.g. hero premium label). */
export const HEALTHCARE_ALLOWANCE_CONFIG = {
  2026: mergeConfigYear(2026),
} as const;
