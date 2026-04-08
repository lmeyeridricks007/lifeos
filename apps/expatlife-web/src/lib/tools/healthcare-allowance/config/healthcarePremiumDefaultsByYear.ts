/**
 * Premium figures for **net-cost illustration** in the healthcare allowance estimator.
 * These are not live insurer quotes and not from Dienst Toeslagen.
 */

/** Industry / market context copy only — not a regulatory label. */
export type HealthcarePremiumOfficialContext = {
  taxYear: number;
  /** How editors explain the average (e.g. “nationwide average basic premium, planning round figure”). */
  basisNote: string;
};

/** Values and clamps applied inside the tool UI and sanitizer. */
export type HealthcarePremiumPlannerDefaults = {
  /**
   * Default gross basic premium (€/month) when the user chooses “average” mode.
   * Update when you refresh planning assumptions from public average-premium references.
   */
  averageBasicPremiumMonthly: number;
  /** Upper clamp for manual premium entry (sanity / abuse prevention). */
  manualPremiumMonthlyMax: number;
};

export type HealthcarePremiumYearBundle = {
  context: HealthcarePremiumOfficialContext;
  planner: HealthcarePremiumPlannerDefaults;
};

export type HealthcarePremiumDefaultsYear = HealthcarePremiumPlannerDefaults;

function bundleToPlannerDefaults(bundle: HealthcarePremiumYearBundle): HealthcarePremiumDefaultsYear {
  return {
    averageBasicPremiumMonthly: bundle.planner.averageBasicPremiumMonthly,
    manualPremiumMonthlyMax: bundle.planner.manualPremiumMonthlyMax,
  };
}

/** Editable full-year records (context vs planner split). */
export const healthcarePremiumYearConfig2026 = {
  context: {
    taxYear: 2026,
    basisNote:
      "Average basic premium is a planning input for comparing gross invoice to net after estimated allowance — confirm against your insurer or NZa-style public averages for the same year.",
  },
  planner: {
    averageBasicPremiumMonthly: 157,
    manualPremiumMonthlyMax: 800,
  },
} as const satisfies HealthcarePremiumYearBundle;

/**
 * **Draft** — copy `planner` / `context.basisNote` when 2027 averages are known.
 * Not loaded by the engine until added to `healthcarePremiumDefaultsByYear`.
 */
export const healthcarePremiumYearConfig2027Draft = {
  context: {
    taxYear: 2027,
    basisNote: "DRAFT: replace with 2027 planning basis when average basic premium reference is updated.",
  },
  planner: {
    averageBasicPremiumMonthly: 157,
    manualPremiumMonthlyMax: 800,
  },
} as const satisfies HealthcarePremiumYearBundle;

/** Maps passed to `computeHealthcareAllowance` — only **live** years. */
export const healthcarePremiumDefaultsByYear = {
  2026: bundleToPlannerDefaults(healthcarePremiumYearConfig2026),
} as const satisfies Record<number, HealthcarePremiumDefaultsYear>;
