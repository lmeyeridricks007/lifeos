/** Netherlands childcare cost estimator — planning types only (not an official toeslag engine). */

export type ChildcareTaxYear = 2026 | 2027;

export type ChildcareCityId =
  | "amsterdam"
  | "rotterdam"
  | "the-hague"
  | "utrecht"
  | "eindhoven"
  | "haarlem"
  | "leiden"
  | "delft"
  | "groningen"
  | "tilburg"
  | "breda"
  | "arnhem-nijmegen"
  | "other";

export type HouseholdType = "single" | "couple";

export type RelocationStage = "researching" | "moving_soon" | "in_nl";

export type ChildAgeBand = "0-1" | "1-3" | "4-7" | "8-12";

export type CareType = "daycare" | "bso" | "gastouder";

export type RateInputMode = "model" | "manual";

export type CareScheduleMode = "full_month" | "school_weeks_only";

export type HoursInputMode = "days_per_week" | "hours_per_month";

export type WorkingParentsStatus = "both" | "one" | "mixed";

export type ComfortLevel = "essential" | "balanced" | "comfortable";

export type ProviderCostTier = "low" | "standard" | "premium";

export type ChildcareChildInput = {
  id: string;
  label: string;
  ageBand: ChildAgeBand;
  schoolAge: boolean;
  careType: CareType;
  rateMode: RateInputMode;
  /** When rateMode === "manual" */
  manualHourlyRateEur: number | null;
  hoursInputMode: HoursInputMode;
  daysPerWeek: number;
  hoursPerMonth: number | null;
  scheduleMode: CareScheduleMode;
  registrationFeeEur: number;
  mealsSuppliesMonthlyEur: number;
  holidayCareReserveMonthlyEur: number;
  backupCareReserveMonthlyEur: number;
};

export type ChildcareBenefitInput = {
  annualHouseholdIncomeEur: number;
  /** 1 or 2 — affects planning multiplier when not both employed */
  workingParentsCount: 1 | 2;
  workingParentsStatus: WorkingParentsStatus;
  useOfficialCapAwareEstimate: boolean;
};

export type ChildcareSetupFirstMonthInput = {
  includeRegistrationFees: boolean;
  includeFirstInvoiceTimingRisk: boolean;
  includeAdvanceDeposit: boolean;
  includeSchoolHolidayReserve: boolean;
  includeEmergencyBackupReserve: boolean;
  includePickupTransportReserve: boolean;
};

export type ChildcareWorkDecisionInput = {
  householdNetMonthlyEur: number | null;
  secondParentReturningToWork: boolean;
  comfortLevel: ComfortLevel;
};

export type ChildcareEstimatorInput = {
  taxYear: ChildcareTaxYear;
  city: ChildcareCityId;
  householdType: HouseholdType;
  relocationStage: RelocationStage;
  providerCostTier: ProviderCostTier;
  children: ChildcareChildInput[];
  benefit: ChildcareBenefitInput;
  setupFirstMonth: ChildcareSetupFirstMonthInput;
  workDecision: ChildcareWorkDecisionInput;
};

/** Per-child lines from the engine (explicit naming for transparency). */
export type ChildcarePerChildBreakdown = {
  childId: string;
  label: string;
  ageBand: ChildAgeBand;
  careType: CareType;
  childIndex: number;
  monthlyHours: number;
  providerHourlyRateEur: number;
  officialHourlyCapEur: number;
  /** Variable care + monthly extras (meals, reserves) in input — full monthly provider bill. */
  providerBillMonthly: number;
  /** Hourly rate used in reimbursable base (≤ official cap when cap-aware). */
  reimbursableRate: number;
  reimbursableHours: number;
  reimbursableBase: number;
  estimatedBenefit: number;
  outOfPocket: number;
  /**
   * Planning “loss” vs reimbursing at full provider rate for all booked hours:
   * excess hourly rate vs cap + hours beyond reimbursable cap charged at provider rate.
   */
  overCapLoss: number;
  hourlyOverCapComponent: number;
  hoursOverCapComponent: number;
  notes: string[];
};

export type ChildcareFirstMonthLineKind = "recurring_net" | "one_off" | "timing_buffer" | "global_reserve";

export type ChildcareFirstMonthLine = {
  id: string;
  label: string;
  detail?: string;
  amountEur: number;
  kind: ChildcareFirstMonthLineKind;
};

export type ChildcareFirstMonthBreakdown = {
  lines: ChildcareFirstMonthLine[];
  totalEur: number;
  suggestedExtraReserveEur: number | null;
};

export type ChildcareEstimateInsightFlags = {
  hasOverCapRate: boolean;
  hasMultipleChildren: boolean;
  highMonthlyChildcareBurden: boolean;
  highFirstMonthCash: boolean;
  uncertainIncomeInput: boolean;
  schoolAgeMix: boolean;
  likelyWorkDecisionSensitive: boolean;
};

export type ChildcareEstimateResult = {
  grossMonthlyProviderCostEur: number;
  estimatedMonthlyBenefitEur: number;
  estimatedMonthlyNetChildcareCostEur: number;
  annualNetChildcareCostEur: number;
  firstMonthChildcareCashEur: number;
  /** Line items that sum to `firstMonthChildcareCashEur`. */
  firstMonthBreakdown: ChildcareFirstMonthBreakdown;
  totalSetupCashEur: number;
  /** First child’s planning reimbursement % (before eligibility multiplier) — for display. */
  reimbursementPercentApplied: number;
  benefitEligibilityMultiplier: number;
  /** Income actually used after fallbacks (see `insightFlags.uncertainIncomeInput`). */
  annualHouseholdIncomeUsedEur: number;
  insightFlags: ChildcareEstimateInsightFlags;
  /** Non-duplicative warnings (e.g. income fallback). */
  engineWarnings: string[];
  perChild: ChildcarePerChildBreakdown[];
  childcareShareOfNetPercent: number | null;
  budgetImpactLabel: "light" | "meaningful" | "heavy" | null;
  additionalNetForComfortEur: number | null;
  salaryTargetNarrative: string | null;
  /** Human-readable insights (may overlap with flags). */
  insights: string[];
};

export type ChildcareScenarioRow = {
  id: string;
  label: string;
  notes: string;
  grossMonthlyProviderCostEur: number;
  estimatedMonthlyBenefitEur: number;
  estimatedMonthlyNetChildcareCostEur: number;
  annualNetChildcareCostEur: number;
  firstMonthChildcareCashEur: number;
};
