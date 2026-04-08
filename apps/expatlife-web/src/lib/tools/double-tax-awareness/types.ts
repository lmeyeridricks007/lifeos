export type ToolMode =
  | "moving_to_netherlands"
  | "already_in_netherlands"
  | "working_cross_border"
  | "remote_foreign_employer"
  | "multiple_country_income";

export type YesNo = "yes" | "no";
export type YesNoNotSure = "yes" | "no" | "not_sure";
export type WorkLocation = "mostly_nl" | "mostly_abroad" | "mixed";
export type CommutePattern = "none" | "mostly_from_nl" | "mostly_into_nl";
export type RulingStatus = "no" | "maybe" | "yes";

export type IncomeType =
  | "salary_dutch_employer"
  | "salary_foreign_employer"
  | "salary_remote_work"
  | "freelance_self_employed"
  | "rental_income_nl"
  | "rental_income_abroad"
  | "dividends_investments"
  | "foreign_business_income"
  | "pension_income"
  | "other_mixed";

export type ResidencyConfidence = "low" | "medium" | "medium_high" | "high";

/** User’s stated planning focus from guided flow (optional; improves section defaults). */
export type PlanningFocus =
  | "file_two_countries"
  | "which_country_salary"
  | "foreign_rental_investments"
  | "moved_mid_year"
  | "treaty_relief"
  | "not_sure";

export type PayTaxTwiceVerdict = "unlikely" | "possible" | "needs_review";

export type ProfessionalReviewLevel = "review_recommended" | "strong_review_recommended" | "specialist_review_likely_needed";
export type ResidencyAssessmentKey =
  | "likely_dutch_resident"
  | "likely_non_resident"
  | "possible_dual_residency"
  | "insufficient_or_mixed_signals";
export type RiskLevel = "low" | "medium" | "high";
export type ReliefMethodKey = "exemption_possible" | "tax_credit_possible" | "treaty_review_needed" | "unclear_or_domestic";
export type FilingPriority = "high" | "medium" | "low";

export type DoubleTaxAwarenessInput = {
  taxYear: number;
  toolMode: ToolMode;
  monthsInNetherlands: number;
  monthsInOtherMainCountry: number;
  registeredInNlBrp: YesNo;
  permanentHomeNl: YesNo;
  permanentHomeAbroad: YesNo;
  familyMostlyInNl: YesNo;
  mainWorkPhysicallyInNl: "yes" | "no" | "partly";
  employerInNl: YesNo;
  payrollInNl: YesNo;
  planningToStayLongerThanYear: YesNo;
  mainOtherCountryCode: string;
  employerCountryCode: string;
  rentalIncomeCountryCode: string;
  investmentIncomeCountryCode: string;
  incomeTypes: IncomeType[];
  workLocationPattern: WorkLocation;
  crossBorderCommutePattern: CommutePattern;
  employerInternationalPayrollSupport: YesNoNotSure;
  thirtyPercentRuling: RulingStatus;
  isStudentResearcherPhd: YesNo;
  isDirectorShareholderOwner: YesNo;
  hasMajorForeignAssets: YesNo;
  approxDaysInNl: number | null;
  approxDaysInOtherCountry: number | null;
  expectsForeignReturn: YesNoNotSure;
  taxWithheldAbroad: YesNoNotSure;
  keptForeignTaxDocuments: YesNo;
  userNotes: string;
  /** Optional: set from guided flow for export / context. */
  planningFocus?: PlanningFocus | null;
};

export type ResidencyAssessment = {
  key: ResidencyAssessmentKey;
  headline: string;
  confidence: ResidencyConfidence;
  reasons: string[];
};

export type IncomeTaxMapRow = {
  incomeType: IncomeType;
  likelyTaxedIn: string;
  why: string;
  nlDeclarationLikelyMatters: string;
  doubleTaxRisk: RiskLevel;
  cautionNote: string;
  /** Plain-language practical takeaway for the user. */
  whatThisMeansForYou: string;
};

export type ReliefMethod = {
  key: ReliefMethodKey;
  title: string;
  plainEnglish: string;
  whyLikely: string;
};

export type FilingAction = {
  title: string;
  priority: FilingPriority;
  whyItMatters: string;
};

export type SummaryCard = {
  label: string;
  value: string;
  note: string;
};

export type DoubleTaxAwarenessResult = {
  residencyAssessment: ResidencyAssessment;
  dualResidencyRisk: RiskLevel;
  doubleTaxRiskLevel: RiskLevel;
  filingComplexity: "standard" | "moderate" | "complex";
  likelyNextStep: string;
  taxMapByIncomeType: IncomeTaxMapRow[];
  reliefMethodLikely: ReliefMethod[];
  filingActions: FilingAction[];
  recordKeepingChecklist: string[];
  escalationFlags: string[];
  summaryCards: SummaryCard[];
  /** Short user-facing “how we work” lines (not internal dev logic). */
  reasoning: string[];
  /** Deeper deterministic logic notes (expandable in UI). */
  advancedReasoning: string[];
  topRiskReasons: string[];
  topProtectiveFactors: string[];
  payTaxTwiceVerdict: PayTaxTwiceVerdict;
  payTaxTwiceSummary: string;
  whatThisLikelyMeans: string[];
  whatCouldChangeOutcome: string[];
  whenToolNotEnough: string[];
  professionalReview: {
    level: ProfessionalReviewLevel;
    title: string;
    bullets: string[];
  };
  likelyFilingCountriesSummary: string;
};

export const DEFAULT_DOUBLE_TAX_AWARENESS_INPUT: DoubleTaxAwarenessInput = {
  taxYear: 2026,
  toolMode: "moving_to_netherlands",
  monthsInNetherlands: 8,
  monthsInOtherMainCountry: 4,
  registeredInNlBrp: "yes",
  permanentHomeNl: "yes",
  permanentHomeAbroad: "no",
  familyMostlyInNl: "yes",
  mainWorkPhysicallyInNl: "yes",
  employerInNl: "yes",
  payrollInNl: "yes",
  planningToStayLongerThanYear: "yes",
  mainOtherCountryCode: "ZA",
  employerCountryCode: "NL",
  rentalIncomeCountryCode: "none",
  investmentIncomeCountryCode: "none",
  incomeTypes: ["salary_dutch_employer"],
  workLocationPattern: "mostly_nl",
  crossBorderCommutePattern: "none",
  employerInternationalPayrollSupport: "not_sure",
  thirtyPercentRuling: "no",
  isStudentResearcherPhd: "no",
  isDirectorShareholderOwner: "no",
  hasMajorForeignAssets: "no",
  approxDaysInNl: null,
  approxDaysInOtherCountry: null,
  expectsForeignReturn: "not_sure",
  taxWithheldAbroad: "not_sure",
  keptForeignTaxDocuments: "no",
  userNotes: "",
  planningFocus: null,
};
