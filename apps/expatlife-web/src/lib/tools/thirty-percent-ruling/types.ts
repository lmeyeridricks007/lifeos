/**
 * Shared types for the 30% ruling calculator platform (V1/V2 compatible).
 */

export type ThirtyPercentEligibilityBand = "threshold_not_met" | "unlikely_eligible" | "possibly_eligible" | "likely_eligible";

export type TriStateAnswer = "yes" | "no" | "unsure";

export type YesNo = "yes" | "no";

/** Employee route for salary-norm handling in planning signals. */
export type EmployeeCategory = "regular" | "researcher" | "doctor_training" | "unsure";

export type EligibilityChecklistState = "pass" | "fail" | "uncertain" | "info" | "na";

export type EligibilityChecklistRow = {
  id: string;
  label: string;
  state: EligibilityChecklistState;
  detail: string;
};

export type PrimaryEligibilityStatus =
  | "likely_eligible"
  | "possibly_eligible"
  | "unlikely_eligible"
  | "insufficient_information";

export type PrimaryEligibilityOutcome = {
  status: PrimaryEligibilityStatus;
  headline: string;
  explanation: string;
  caveatLine: string;
  checklist: EligibilityChecklistRow[];
  nextStepBullets: string[];
};

/** V1-compatible input shape — extended fields optional for future tools. */
export type ThirtyPercentCalculatorInputs = {
  salaryInputType: "annual" | "monthly";
  grossSalary: number;
  calculationYear: number;
  age: number;
  qualifyingMasters: boolean;
  monthsApplicable: number;
  /**
   * @deprecated Prefer `employerApplyIntent`. Kept for persistence backward compatibility;
   * should stay in sync: `true` when intent is `"yes"`.
   */
  employerWillApply: boolean;
  employerApplyIntent: TriStateAnswer;
  recruitedFromAbroad: TriStateAnswer;
  distanceRule150km: TriStateAnswer;
  priorThirtyPercentRuling: TriStateAnswer;
  changingEmployerInNL: YesNo;
  employeeCategory: EmployeeCategory;
  /** Optional: month employment started this year (1–12) — informational; proration still uses `monthsApplicable`. */
  startMonth: number | null;
  /** Employer-specific allowance % of capped salary; blank = use statutory max for year. */
  customAllowancePercent?: number | null;
  /** Alias in docs/UI — same as customAllowancePercent */
  employerAllowancePercent?: number | null;
  includeFutureYearPreview: boolean;
  bonusAnnual?: number | null;
  salaryIncludesHolidayAllowance: boolean;
};

export type ThirtyPercentYearEstimate = {
  label: string;
  facilityPercent: number;
  applicableThresholdAnnual: number;
  meetsSalaryThreshold: boolean;
  grossAnnual: number;
  cappedBaseAnnual: number;
  isSalaryCapped: boolean;
  monthsApplicable: number;
  monthsFactor: number;
  allowancePercentApplied: number;
  maxUntaxedAllowanceAnnual: number;
  taxableSalaryEstimateAnnual: number;
  monthlyUntaxedAllowance: number;
  monthlyTaxableSalaryEstimate: number;
};

/** Indicative payroll-tax-style comparison — not official wage tax tables. */
export type IndicativeNetComparison = {
  modelId: string;
  modelLabel: string;
  grossAnnual: number;
  taxableIfNoRulingAnnual: number;
  taxableWithRulingAnnual: number;
  estimatedTaxIfNoRulingAnnual: number;
  estimatedTaxWithRulingAnnual: number;
  estimatedNetIfNoRulingAnnual: number;
  estimatedNetWithRulingAnnual: number;
  estimatedAnnualNetDelta: number;
  estimatedMonthlyNetDelta: number;
  assumptionBullets: string[];
};

export type ThirtyPercentCalculatorResult = {
  eligibilityBand: ThirtyPercentEligibilityBand;
  /** Eligibility-first planning outcome (user-facing). */
  primaryEligibility: PrimaryEligibilityOutcome;
  warnings: string[];
  primary: ThirtyPercentYearEstimate;
  preview2027?: ThirtyPercentYearEstimate;
  /** Present when net comparison is enabled and inputs are valid. */
  netComparison?: IndicativeNetComparison;
};

/** One row in multi-scenario compare mode. */
export type ThirtyRulingScenario = {
  id: string;
  label: string;
  inputs: ThirtyPercentCalculatorInputs;
};

export type DownloadSummaryPayload = {
  generatedAtIso: string;
  siteName: string;
  primaryInputs: ThirtyPercentCalculatorInputs;
  primaryResult: ThirtyPercentCalculatorResult;
  scenarios?: ThirtyRulingScenario[];
  scenarioResults?: Array<{ label: string; result: ThirtyPercentCalculatorResult | null }>;
  /** Eligibility narrative lines for export (mirrors UI checklist + next steps). */
  eligibilityExportLines?: { checklist: EligibilityChecklistRow[]; nextSteps: string[] };
};
