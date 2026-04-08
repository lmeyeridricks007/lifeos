/**
 * Zorgtoeslag / healthcare allowance — year-scoped configuration.
 *
 * **Official public thresholds** — figures intended to track Belastingdienst / Rijksoverheid published
 * ceilings and the reference maximum benefit. Editors update these when new year amounts ship.
 * This file does not reproduce the full legal income definition or asset categories.
 *
 * **ExpatCopilot planning assumptions** — how our estimator simplifies screening and tapering.
 * These are not claimed to match exact official formulas step-by-step.
 */

// ─── Shared taper / borderline types (planning model only) ───────────────────

export type HealthcareAllowanceTaperConfig = {
  modelId: "plateau_then_linear";
  /**
   * From 0 up to this fraction of the income threshold, the model holds the monthly estimate at
   * `maxMonthlyAllowance` (from official reference), then linearly to zero at the threshold.
   * This is an ExpatCopilot simplification — not a published “plateau formula” from government.
   */
  plateauIncomeFractionOfThreshold: number;
};

export type HealthcareAllowanceBorderlineConfig = {
  /** From this share of income threshold → status may be "borderline" if not hard-failed. */
  incomeFractionOfThreshold: number;
  /** From this share of asset threshold → borderline messaging. */
  assetFractionOfThreshold: number;
};

/** Flat shape consumed by the engine (`engine.ts`, `computeHealthcareAllowance.ts`). */
export type HealthcareAllowanceRulesYear = {
  minAgeForEstimate: number;
  singleMaxIncome: number;
  partnerMaxCombinedIncome: number;
  singleMaxAssets: number;
  partnerMaxCombinedAssets: number;
  maxMonthlyAllowance: number;
  taper: HealthcareAllowanceTaperConfig;
  borderline: HealthcareAllowanceBorderlineConfig;
  incomeUncertaintyUplift: number;
  missingIncomeTestIncomeFractionOfThreshold: number;
};

// ─── 1) Official-style public reference figures (per calendar year) ─────────

export type HealthcareOfficialPublicThresholds = {
  taxYear: number;
  /**
   * Where editors sourced or validated figures (e.g. “Belastingdienst toeslagen 2026”).
   * Not a legal citation — helps the team refresh numbers annually.
   */
  sourceNote: string;
  /** Single person — maximum annual income for allowance in official rules (planning copy of published cap). */
  singleMaxIncome: number;
  /** With toeslagpartner — maximum combined annual income (published combined ceiling). */
  partnerMaxCombinedIncome: number;
  /** Single — asset ceiling on 1 January (reference amount from public rules). */
  singleMaxAssetsOnJan1: number;
  /** Partner household — combined asset ceiling on 1 January. */
  partnerMaxCombinedAssetsOnJan1: number;
  /**
   * Published maximum zorgtoeslag per month used as the cap in our taper model (reference figure).
   */
  referenceMaxMonthlyAllowance: number;
};

// ─── 2) ExpatCopilot-only modelling choices ────────────────────────────────

export type HealthcarePlannerAssumptions = {
  /** One sentence for tooltips / methodology — what the code actually does. */
  modelSummary: string;
  /** Below this age the estimator does not produce a normal allowance path (planning convention). */
  minAgeForEstimate: number;
  taper: HealthcareAllowanceTaperConfig;
  borderline: HealthcareAllowanceBorderlineConfig;
  /** Multiplier on reported income when user marks income uncertain (planner stress test). */
  incomeUncertaintyUplift: number;
  /**
   * When combined entered income is zero, test income = this fraction × applicable income threshold.
   * Conservative planning behaviour — not an official rule text.
   */
  missingIncomeTestIncomeFractionOfThreshold: number;
};

/** One year: public reference + planner assumptions (editable side-by-side). */
export type HealthcareAllowanceYearEditorConfig = {
  official: HealthcareOfficialPublicThresholds;
  planning: HealthcarePlannerAssumptions;
};

export function mergeOfficialAndPlanningToEngineRules(bundle: HealthcareAllowanceYearEditorConfig): HealthcareAllowanceRulesYear {
  const { official, planning } = bundle;
  return {
    minAgeForEstimate: planning.minAgeForEstimate,
    singleMaxIncome: official.singleMaxIncome,
    partnerMaxCombinedIncome: official.partnerMaxCombinedIncome,
    singleMaxAssets: official.singleMaxAssetsOnJan1,
    partnerMaxCombinedAssets: official.partnerMaxCombinedAssetsOnJan1,
    maxMonthlyAllowance: official.referenceMaxMonthlyAllowance,
    taper: planning.taper,
    borderline: planning.borderline,
    incomeUncertaintyUplift: planning.incomeUncertaintyUplift,
    missingIncomeTestIncomeFractionOfThreshold: planning.missingIncomeTestIncomeFractionOfThreshold,
  };
}

// ─── Live year: 2026 (main) ────────────────────────────────────────────────

export const healthcareAllowanceYearConfig2026 = {
  official: {
    taxYear: 2026,
    sourceNote:
      "Figures aligned to public Belastingdienst / Rijksoverheid zorgtoeslag parameters for 2026 as used for ExpatCopilot planning — re-verify before each tax year.",
    singleMaxIncome: 40_857,
    partnerMaxCombinedIncome: 51_142,
    singleMaxAssetsOnJan1: 146_011,
    partnerMaxCombinedAssetsOnJan1: 184_633,
    referenceMaxMonthlyAllowance: 131,
  },
  planning: {
    modelSummary:
      "Hard screen on age, insurance, residence, income and 1 Jan assets vs thresholds; then plateau-then-linear taper of monthly allowance to zero at income ceiling. Does not implement full toeslagen income/asset definitions.",
    minAgeForEstimate: 18,
    taper: {
      modelId: "plateau_then_linear",
      plateauIncomeFractionOfThreshold: 0.25,
    },
    borderline: {
      incomeFractionOfThreshold: 0.97,
      assetFractionOfThreshold: 0.97,
    },
    incomeUncertaintyUplift: 1.12,
    missingIncomeTestIncomeFractionOfThreshold: 0.98,
  },
} as const satisfies HealthcareAllowanceYearEditorConfig;

// ─── Draft year: 2027 (structure only — not merged into live engine yet) ─────

/**
 * **Draft** — when 2027 public amounts are published, replace `official` (and `planning` if needed),
 * then merge into `healthcareAllowanceRulesByYear` and extend `SUPPORTED_HEALTHCARE_ALLOWANCE_YEARS`.
 * Until then, do not enable 2027 in the UI selector.
 */
export const healthcareAllowanceYearConfig2027Draft = {
  official: {
    taxYear: 2027,
    sourceNote:
      "DRAFT: 2027 official zorgtoeslag ceilings not yet published on this config — placeholders duplicate 2026 until editors paste verified figures.",
    singleMaxIncome: 40_857,
    partnerMaxCombinedIncome: 51_142,
    singleMaxAssetsOnJan1: 146_011,
    partnerMaxCombinedAssetsOnJan1: 184_633,
    referenceMaxMonthlyAllowance: 131,
  },
  planning: {
    modelSummary: healthcareAllowanceYearConfig2026.planning.modelSummary,
    minAgeForEstimate: 18,
    taper: { ...healthcareAllowanceYearConfig2026.planning.taper },
    borderline: { ...healthcareAllowanceYearConfig2026.planning.borderline },
    incomeUncertaintyUplift: healthcareAllowanceYearConfig2026.planning.incomeUncertaintyUplift,
    missingIncomeTestIncomeFractionOfThreshold:
      healthcareAllowanceYearConfig2026.planning.missingIncomeTestIncomeFractionOfThreshold,
  },
} as const satisfies HealthcareAllowanceYearEditorConfig;

/** Live rules passed to the calculator engine (only years that are safe to run). */
export const healthcareAllowanceRulesByYear = {
  2026: mergeOfficialAndPlanningToEngineRules(healthcareAllowanceYearConfig2026),
} as const satisfies Record<number, HealthcareAllowanceRulesYear>;

export type HealthcareAllowanceTaxYear = keyof typeof healthcareAllowanceRulesByYear;

export const SUPPORTED_HEALTHCARE_ALLOWANCE_YEARS = Object.keys(healthcareAllowanceRulesByYear).map(
  Number
) as HealthcareAllowanceTaxYear[];

export const DEFAULT_HEALTHCARE_ALLOWANCE_YEAR: HealthcareAllowanceTaxYear = 2026;

export function isSupportedHealthcareAllowanceYear(y: number): y is HealthcareAllowanceTaxYear {
  return y in healthcareAllowanceRulesByYear;
}
