import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";

export type ComparisonMode = "compare_two" | "compare_three" | "current_vs_new";

export type WorkMode = "office" | "hybrid" | "remote";
export type ContractType = "permanent" | "fixed_term" | "contractor" | "remote_foreign";
export type HolidayAllowanceTreatment = "included" | "separate" | "not_sure";
export type BonusType = "none" | "discretionary" | "guaranteed";
export type TriState = "yes" | "no" | "not_sure";
export type ThirtyRulingSupport = "yes" | "no" | "best_efforts" | "not_mentioned";
export type RelocationSupportLevel = "none" | "partial" | "strong";
export type CommuteMode = "public_transport" | "bike" | "car" | "mixed";
export type PriorityLevel = "low" | "medium" | "high";

export type UserPriorities = {
  highestNetPay: PriorityLevel;
  strongestLongTermUpside: PriorityLevel;
  stabilitySecurity: PriorityLevel;
  bestBenefits: PriorityLevel;
  visaExpatFriendliness: PriorityLevel;
  lowestContractRisk: PriorityLevel;
  bestWorkLifeBalance: PriorityLevel;
  lowestCommuteBurden: PriorityLevel;
  bestAffordabilityAfterLivingCosts: PriorityLevel;
  bestTotalPackage: PriorityLevel;
};

export type JobOfferInput = {
  employerName: string;
  roleTitle: string;
  city: string;
  workMode: WorkMode;
  officeCity: string;
  contractType: ContractType;
  expectedStartDate: string;
  salaryInputBasis: "annual" | "monthly";
  grossSalary: number;
  holidayAllowance: HolidayAllowanceTreatment;
  bonusType: BonusType;
  bonusPercent: number;
  bonusAmountAnnual: number;
  signOnBonus: number;
  relocationBonus: number;
  hasThirteenthMonth: boolean;
  equityNotes: string;
  pensionEmployerDescription: string;
  travelAllowanceMonthly: number;
  wfhAllowanceMonthly: number;
  equipmentProvided: TriState;
  trainingBudgetAnnual: number;
  extraLeaveDays: number;
  healthWellnessAnnual: number;
  mobilityAllowanceMonthly: number;
  sickPayBeyondStandard: TriState;
  parentalFamilySupport: TriState;
  visaSponsorship: TriState;
  thirtyPercentSupport: ThirtyRulingSupport;
  relocationSupport: RelocationSupportLevel;
  relocationRepayment: TriState;
  taxFilingSupport: TriState;
  temporaryHousingSupport: TriState;
  movingBudget: TriState;
  probationMonths: number;
  noticeMonthsEmployee: number;
  nonCompetePresent: TriState;
  sideJobRestrictions: TriState;
  overtimeIncludedInSalary: TriState;
  fixedTermRenewalLikely: TriState;
  handbookHeavy: TriState;
  hybridPolicyFixed: TriState;
  homeOrTargetCity: string;
  commuteDaysPerWeek: number;
  commuteMode: CommuteMode;
  useCityRentAssumptions: boolean;
  targetRentBudgetMonthly: number | null;
  /** Extracted from an uploaded PDF/.txt (optional); not used in scoring — for your notes and export. */
  uploadedOfferLetterText: string;
  /** Sanitized original filename after last successful extraction. */
  uploadedOfferLetterFileName: string;
};

export type OfferSlot = {
  id: "A" | "B" | "C";
  label: string;
  expanded: boolean;
  offer: JobOfferInput;
};

export type JobOfferComparisonFormState = {
  mode: ComparisonMode;
  includeOfferC: boolean;
  offers: Record<"A" | "B" | "C", OfferSlot>;
  priorities: UserPriorities;
};

export type CompensationSummary = {
  annualGrossSalary: number;
  monthlyGrossSalary: number;
  annualBonusPlanning: number;
  annualTotalCashRecurring: number;
  firstYearCashExtrasAnnual: number;
  holidayAllowanceNote: string;
  bonusNote: string;
};

export type NetPayEstimate = {
  estimatedNetMonthly: number;
  estimatedNetAnnual: number;
  modelNote: string;
  rulingModeUsed: string;
};

export type BenefitsSummary = {
  score: number;
  highlights: string[];
  approximateAnnualValueHint: number | null;
};

export type ExpatSupportSummary = {
  score: number;
  highlights: string[];
};

export type ContractRiskSummary = {
  /** Higher = more practical risk / friction (not legal advice). */
  riskScore: number;
  highlights: string[];
};

export type CommuteLifestyleSummary = {
  commuteBurdenScore: number;
  workModeFitScore: number;
  estimatedCommuteCostMonthly: number;
  note: string;
};

export type AffordabilitySummary = {
  colCity: ColCity;
  rentPressureMonthly: number;
  cityCostPressureMonthly: number;
  estimatedNetRemainingMonthly: number;
  note: string;
};

/** Structured 0–100 scores shown in UI and used for decision lenses (same semantics as labels). */
export type OfferStructuredScores = {
  /** Recurring cash package strength vs peers (gross + bonus certainty), normalized. */
  compensation: number;
  /** Indicative net monthly vs peers, normalized. */
  estimatedNetPay: number;
  benefits: number;
  securityStability: number;
  expatSupport: number;
  /** Higher = lower practical friction (inverse of contract risk). */
  contractQuality: number;
  /** Higher = better commute / work-mode fit. */
  commuteLifestyle: number;
  affordabilityAfterCosts: number;
  /** Composite cash + benefits + stability + expat for “total package” lens. */
  totalPackageComposite: number;
};

/**
 * Legacy shape for priority weighting — populated from `OfferStructuredScores` (longTermUpside maps to compensation).
 */
export type DimensionScores = {
  netPay: number;
  longTermUpside: number;
  stability: number;
  benefits: number;
  expatSupport: number;
  contractClarity: number;
  workLifeCommute: number;
  affordabilityAfterCosts: number;
  totalPackage: number;
};

export type HiddenCostItem = {
  id: string;
  category: string;
  severity: "low" | "medium" | "high";
  headline: string;
  detail: string;
};

export type HiddenCostSurface = {
  items: HiddenCostItem[];
  summaryLine: string;
};

export type RiskFlag = {
  severity: "info" | "watch" | "strong";
  message: string;
};

export type PerOfferResult = {
  slotId: "A" | "B" | "C";
  label: string;
  /** Original form inputs — used for refinement hints and exports. */
  offer: JobOfferInput;
  compensationSummary: CompensationSummary;
  netPayEstimate: NetPayEstimate;
  benefitsSummary: BenefitsSummary;
  expatSupportSummary: ExpatSupportSummary;
  contractRiskSummary: ContractRiskSummary;
  commuteLifestyleSummary: CommuteLifestyleSummary;
  affordabilitySummary: AffordabilitySummary;
  structuredScores: OfferStructuredScores;
  dimensionScores: DimensionScores;
  overallScore: number;
  hiddenCosts: HiddenCostSurface;
  strengths: string[];
  weaknesses: string[];
  negotiationQuestions: string[];
  riskFlags: RiskFlag[];
};

export type DecisionLensId =
  | "best_take_home"
  | "best_total_package"
  | "best_security"
  | "best_benefits"
  | "best_expat_support"
  | "best_affordability"
  | "best_commute_lifestyle";

export type DecisionLens = {
  id: DecisionLensId;
  title: string;
  winnerLabel: string;
  winnerSlot: "A" | "B" | "C";
  /** Human-readable score context for the winning offer in this lens. */
  winnerScoreSummary: string;
  why: string;
  /** When multiple offers tie within tolerance, listed for transparency. */
  tiedSlots?: Array<"A" | "B" | "C">;
};

export type RecommendationCloseness = {
  isCloseCall: boolean;
  overallScoreGap: number;
  /** Plain suggestions when scores are tight or inputs are uncertain. */
  refinementSuggestions: string[];
};

export type TopRecommendation = {
  winnerLabel: string;
  winnerSlot: "A" | "B" | "C";
  /** Short plain-English lead for the user. */
  plainEnglishLead: string;
  whyItWon: string[];
  mainTradeOff: string;
  runnerUpLabel: string;
  runnerUpSlot: "A" | "B" | "C";
  runnerUpWhyLost: string[];
  /** When the winner leads on cash/net but trails badly on security or expat vs runner-up. */
  moneyVsSecurityTension: string | null;
  confidenceLabel: string;
  confidenceNote: string;
  closeness: RecommendationCloseness;
};

export type JobOfferComparisonResult = {
  activeOffers: PerOfferResult[];
  topRecommendation: TopRecommendation;
  decisionLenses: DecisionLens[];
  whatWouldChange: string[];
  assumptionsEcho: string[];
  priorityWeightingNote: string;
};
