import type { RulingMode } from "@/src/lib/tools/dutch-salary-net/types";

// -----------------------------------------------------------------------------
// Compare mode & scenarios
// -----------------------------------------------------------------------------

export type CompareMode = "recommend_all" | "compare_two";

export type ToolMode = "recommend" | "compare_two";

export type EmploymentScenarioId =
  | "permanent_employee"
  | "fixed_term_employee"
  | "contractor"
  | "zzp_self_employed"
  | "foreign_remote_employee";

// -----------------------------------------------------------------------------
// User profile (context sliders — subset of full tool input)
// -----------------------------------------------------------------------------

export type ResidenceContext = "already_nl" | "moving_nl";
export type VisaSponsorshipNeed = "yes" | "maybe" | "no";
export type IndustryContext = "office" | "tech_knowledge" | "freelance_consulting" | "project_contract" | "mixed";
export type WorkStabilityExpectation = "stable_long" | "medium" | "uncertain_project";
export type YesNo = "yes" | "no";
export type YesNoNotSure = "yes" | "no" | "not_sure";
export type RulingPlanningAssumption = "no" | "maybe" | "yes";
export type DowntimeLevel = "low" | "medium" | "high";
export type BillablePreset = "100" | "85" | "70" | "custom";
export type ContractGapRisk = "low" | "medium" | "high";

/** Context that drives scoring adjustments (documented in dimensionScoring.ts). */
export type UserWorkProfile = {
  residence: ResidenceContext;
  visaSponsorship: VisaSponsorshipNeed;
  industryContext: IndustryContext;
  workStabilityExpectation: WorkStabilityExpectation;
  pensionInPackage: YesNoNotSure;
  paidSickLeaveRelevant: YesNo;
  paidHolidayRelevant: YesNo;
  travelAllowance: YesNo;
  trainingBenefits: YesNo;
  contractGapRisk: ContractGapRisk;
  unpaidDowntime: DowntimeLevel;
  visaFriendlinessHeavyWeight: YesNo;
  rulingAssumption: RulingPlanningAssumption;
};

// -----------------------------------------------------------------------------
// Priority weights (sliders → normalized)
// -----------------------------------------------------------------------------

/** Raw 0–100 UI weights; engine normalizes so components sum to 1. */
export type PrioritySliders = {
  higherNetIncome: number;
  stabilitySecurity: number;
  lowerAdminBurden: number;
  benefitsProtections: number;
  flexibilityIndependence: number;
  visaSponsorshipSimplicity: number;
  lowerTaxPayrollComplexity: number;
};

/** Normalized weights W_i = raw_i / sum(raw). Applied in computeOverallFitScore(). */
export type PriorityWeightsNormalized = {
  higherNetIncome: number;
  stabilitySecurity: number;
  lowerAdminBurden: number;
  benefitsProtections: number;
  flexibilityIndependence: number;
  visaSponsorshipSimplicity: number;
  lowerTaxPayrollComplexity: number;
};

/** Maps to user sliders — used in formulas and UI copy. */
export const SCORING_DIMENSION_KEYS = [
  "income",
  "security",
  "flexibility",
  "adminSimplicity",
  "benefits",
  "expatPracticality",
] as const;

export type ScoringDimensionKey = (typeof SCORING_DIMENSION_KEYS)[number];

/**
 * Public scores on ScenarioRow use `stability` for historical/UI parity; it is the
 * same conceptual axis as "security" in documentation.
 */
export type ScenarioDimensionScores = {
  income: number;
  /** Security / stability (0–100). */
  stability: number;
  flexibility: number;
  adminSimplicity: number;
  benefits: number;
  /** Expat / sponsorship practicality (0–100). */
  immigrationFit: number;
  overall: number;
};

// -----------------------------------------------------------------------------
// Money: structured outcome + breakdown lines
// -----------------------------------------------------------------------------

export type MoneyBreakdownLine = {
  label: string;
  amountAnnual: number;
  note?: string;
  /** Optional grouping for exports / advanced UI */
  category?: "gross" | "benefit" | "pension" | "insurance" | "admin" | "tax" | "adjustment" | "net";
};

/**
 * Approximate, explainable money model per scenario.
 * See incomeOutcome.ts for formulas (gross → deductions → planning net).
 */
export type ScenarioMoneyComponents = {
  baseSalaryOrContractGrossAnnual: number;
  bonusAnnual: number;
  holidayAllowanceAnnual: number;
  /** Planning monetization of non-cash perks (travel/training toggles), employee paths only */
  impliedEmployeePerksValueAnnual: number;
  /** Employee pension contribution modeled OR ZZP pension reserve */
  pensionCostAnnual: number;
  /** Liability + disability (+ accountant if modeled as insurance-like) */
  insuranceCostsAnnual: number;
  adminAccountingAnnual: number;
  umbrellaFeesAnnual: number;
  /** Revenue lost to sub-100% utilization (contractor/ZZP) */
  utilizationHaircutAnnual: number;
  /** Revenue lost to bench / unpaid downtime (ZZP) */
  downtimeHaircutAnnual: number;
  /** Income tax + employee social (indicative) as positive number = total deducted */
  taxAndSocialEstimateAnnual: number;
  /** Foreign employer planning discount from reference Dutch net */
  crossBorderPlanningDiscountAnnual: number;
  cashflowReserveAnnual: number;
  zzpHealthFlatAnnual: number;
  commuteCostAnnual: number;
  /** Equipment / setup (ZZP path); 0 for other scenarios */
  employerEquipmentAnnual: number;
};

export type ScenarioMoneyBreakdown = {
  scenarioId: EmploymentScenarioId;
  lines: MoneyBreakdownLine[];
  grossOrRevenueAnnual: number;
  estimatedNetAnnual: number;
  estimatedNetMonthly: number;
  planningNotes: string[];
  /** One-line formula / assumption reminders for explainability */
  formulaNotes: string[];
  components: ScenarioMoneyComponents;
};

// -----------------------------------------------------------------------------
// Scoring explainability
// -----------------------------------------------------------------------------

export type DimensionScoreDetail = {
  /** Final 0–100 score for this dimension */
  score: number;
  /** Named factors that increased the score vs baseline trajectory */
  factorsIncreasing: string[];
  /** Named factors that decreased the score */
  factorsDecreasing: string[];
};

export type ScenarioScoringExplanation = {
  income: DimensionScoreDetail;
  /** Documented as "security (stability)" */
  security: DimensionScoreDetail;
  flexibility: DimensionScoreDetail;
  adminSimplicity: DimensionScoreDetail;
  benefits: DimensionScoreDetail;
  expatPracticality: DimensionScoreDetail;
  overall: {
    score: number;
    /** Human-readable restatement of the weighted sum */
    formulaSummary: string;
  };
  /** Short labels for UI / export */
  bestFitNarrativeHint: string;
  tradeOffNarrativeHint: string;
};

// -----------------------------------------------------------------------------
// Risk highlights & questions
// -----------------------------------------------------------------------------

export type RiskHighlightCategory =
  | "security"
  | "benefits"
  | "admin"
  | "tax_complexity"
  | "sponsorship"
  | "income_volatility"
  | "flexibility_tradeoff";

export type RiskHighlight = {
  id: string;
  category: RiskHighlightCategory;
  message: string;
};

export type GeneratedQuestionCategory =
  | "pension"
  | "holiday_pay"
  | "ruling"
  | "payroll_compliance"
  | "utilization"
  | "insurance"
  | "equipment"
  | "fixed_term"
  | "visa"
  | "bonus"
  | "cross_border"
  | "contract_terms";

export type GeneratedQuestion = {
  id: string;
  category: GeneratedQuestionCategory;
  text: string;
};

// -----------------------------------------------------------------------------
// Full tool input / row / result
// -----------------------------------------------------------------------------

export type EmploymentTypeScenarioInput = UserWorkProfile & {
  toolMode: ToolMode;
  compareScenarioA: EmploymentScenarioId;
  compareScenarioB: EmploymentScenarioId;

  employeeGrossMonthly: number;
  employeeUseAnnual: boolean;
  employeeGrossAnnual: number;

  contractorDayRate: number;
  contractorMonthlyEquivalent: number;

  zzpDayRate: number;
  zzpMonthlyRevenue: number;

  bonusExpected: boolean;
  bonusAnnualAmount: number;
  includeHolidayAllowance: boolean;

  priorities: PrioritySliders;

  insuranceSelfArrangedIndependent: YesNo;

  billablePreset: BillablePreset;
  billableUtilizationCustom: number;
  modelAdminAccountingCosts: YesNo;

  accountantMonthly: number;
  liabilityInsuranceMonthly: number;
  disabilityInsuranceMonthly: number;
  pensionReservePercent: number;
  unpaidLeavePercentOverride: number | null;
  delayedPaymentReserveMonths: number;
  employerEquipmentAnnual: number;
  commuteImpactMonthly: number;
  umbrellaAdminMonthly: number;
  umbrellaAdminPercent: number;

  includeForeignRemoteScenario: boolean;
};

/** @deprecated Use ScenarioDimensionScores — alias for transition */
export type ScenarioScores = ScenarioDimensionScores;

export type ScenarioRow = {
  scenarioId: EmploymentScenarioId;
  label: string;
  shortLabel: string;
  money: ScenarioMoneyBreakdown;
  scores: ScenarioDimensionScores;
  /** Legacy static blurbs; prefer scoringExplanation */
  scoreRationale: string[];
  riskHighlights: RiskHighlight[];
  scoringExplanation: ScenarioScoringExplanation;
};

/** Aggregated “hidden cost” buckets for comparison storytelling (planning € / yr). */
export type ScenarioCostBuckets = {
  grossOrRevenueAnnual: number;
  taxPayrollDragAnnual: number;
  adminUmbrellaComplianceAnnual: number;
  downtimeUtilizationAnnual: number;
  insuranceReserveAnnual: number;
  pensionAnnual: number;
  otherAnnual: number;
  estimatedNetAnnual: number;
};

export type DecisionLensKey =
  | "income"
  | "stability"
  | "adminSimplicity"
  | "flexibility"
  | "benefits"
  | "expatPracticality";

export type DecisionLens = {
  key: DecisionLensKey;
  title: string;
  winnerId: EmploymentScenarioId;
  winnerShortLabel: string;
  line: string;
};

export type ScenarioClosenessInsight = {
  /** True when top two are tight on score and/or indicative net — worth refining advanced inputs. */
  isClose: boolean;
  overallScoreGap: number;
  netAnnualGap: number;
  /** Heuristic: contractor/ZZP paths with default-ish utilization or umbrella assumptions. */
  flagDefaultUtilizationOrUmbrella: boolean;
};

export type RecommendationNarrativeInsight = {
  /** Plain-English lead tying winner to weighted priorities (planning only). */
  personalizedLead: string;
  /** Short bullets — human “why first”, complements summary.whyItWon */
  whyFirstBullets: string[];
  mainTradeOff: string;
  whenRecommendationChanges: string;
  secondBestHint: string | null;
  whatThisMeansForYou: string;
};

export type EmploymentToolInsights = {
  decisionLenses: DecisionLens[];
  /** Only active scenarios in the current run. */
  costBucketsByScenario: Partial<Record<EmploymentScenarioId, ScenarioCostBuckets>>;
  negativeFitByScenario: Partial<Record<EmploymentScenarioId, string[]>>;
  closeness: ScenarioClosenessInsight;
  narrative: RecommendationNarrativeInsight;
};

export type EmploymentTypeScenarioResult = {
  scenarios: ScenarioRow[];
  rankedIds: EmploymentScenarioId[];
  bestFitId: EmploymentScenarioId;
  runnerUpId: EmploymentScenarioId | null;
  summary: {
    headline: string;
    bestFitLabel: string;
    tradeOffLabel: string;
    whyItWon: string[];
    biggestTradeOff: string;
    plainEnglish: string;
    biggestFinancialGapAnnual: number;
    biggestSecurityAdminDelta: string;
    biggestImmigrationDelta: string;
  };
  normalizedWeights: PriorityWeightsNormalized;
  assumptionsEcho: string[];
  /** How priority sliders map to the overall score (for FAQ / tool copy) */
  priorityWeightingDocumentation: string;
  insights: EmploymentToolInsights;
};

export function rulingAssumptionToSalaryRulingMode(a: RulingPlanningAssumption): RulingMode {
  if (a === "no") return "none";
  if (a === "yes") return "max";
  return "custom";
}

export function rulingAssumptionToCustomPercent(a: RulingPlanningAssumption): number {
  if (a === "maybe") return 15;
  return 30;
}
