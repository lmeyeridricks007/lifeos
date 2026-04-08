/**
 * Static copy tied to estimator behaviour (risk flags, repayment notes, eligibility hints).
 * Planning / educational only — not legal advice. Keep aligned with `engine.ts` when logic changes.
 */

export type HealthcareRepaymentStandardNotes = readonly string[];

export type HealthcareWarningsConfig = {
  incomeUncertainty: string;
  borderlineStatus: string;
  midYearMove: string;
  missingIncomeConservative: string;
  validationAdjusted: string;
  repaymentStandard: HealthcareRepaymentStandardNotes;
  unsureInsuranceEntitlement: string;
  insuranceStartingSoon: string;
};

export const healthcareWarningsConfig: HealthcareWarningsConfig = {
  incomeUncertainty:
    "Income marked uncertain — the model inflates income using the configured uplift before screening and taper, so the allowance estimate errs on the conservative side.",
  borderlineStatus:
    "Borderline in this screening — small changes in income, partner status, or assets can flip the outcome. Confirm with Dienst Toeslagen.",
  midYearMove:
    "Mid-year move: align insured months and income timing with what you will report to Dienst Toeslagen.",
  missingIncomeConservative:
    "Combined income entered as zero — treated as missing. The engine applies a high test income (a fraction of the ceiling) so the allowance estimate is conservative until you enter real figures.",
  validationAdjusted:
    "Some numeric inputs were invalid or out of range and were clamped for the calculation — re-check your entries.",
  repaymentStandard: [
    "If your income rises later in the year, your allowance can drop and you may need to repay if you received too much.",
    "If you underestimate income when applying, Dienst Toeslagen can reclaim the difference.",
    "Partner status, household composition, and assets on 1 January must stay accurate — report changes promptly.",
    "This tool is not the official toeslagen calculator; only Dienst Toeslagen decides your entitlement.",
  ],
  unsureInsuranceEntitlement:
    "You marked entitlement to Dutch insurance as unsure — confirm with Dienst Toeslagen or your insurer before relying on an estimate.",
  insuranceStartingSoon:
    "Insurance is not active yet in your answers — allowance timing follows your real policy start; estimates use the months you configure.",
};

/** @deprecated Use `healthcareWarningsConfig`. */
export const healthcareAllowanceWarningsConfig = healthcareWarningsConfig;
