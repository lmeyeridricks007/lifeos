import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";

/** Selectable comparison locations (extends COL cities with planning proxies). */
export type CityComparisonId =
  | ColCity
  | "amstelveen"
  | "rotterdam_commuter_belt"
  | "the_hague_commuter_belt";

export const CORE_COL_CITIES_NO_OTHER: ColCity[] = [
  "amsterdam",
  "rotterdam",
  "the-hague",
  "utrecht",
  "eindhoven",
  "haarlem",
  "delft",
  "leiden",
  "groningen",
];

export const EXTRA_COMPARISON_ONLY_IDS = [
  "amstelveen",
  "rotterdam_commuter_belt",
  "the_hague_commuter_belt",
] as const satisfies readonly CityComparisonId[];

export const ALL_COMPARISON_CITY_IDS: CityComparisonId[] = [
  ...CORE_COL_CITIES_NO_OTHER,
  ...(EXTRA_COMPARISON_ONLY_IDS as unknown as CityComparisonId[]),
];

export type HouseholdType = "single" | "couple" | "family1" | "family2" | "custom";

export type WorkMode = "office" | "hybrid" | "remote";

export type LifestyleTier = "minimal" | "balanced" | "comfortable";

export type TriPreference = "low" | "medium" | "high";

export type MaxCommute = "under20" | "under30" | "under45" | "under60";

export type CommuteModePref = "train_pt" | "bike" | "car" | "mixed";

export type ScenarioRankingMode =
  | "balanced"
  | "cost_first"
  | "lifestyle_first"
  | "family_first"
  | "commute_first";

/** Five-tier commute class from the scoring matrix (deterministic). */
export type CommutePracticality = "excellent" | "good" | "workable" | "long" | "poor";

/** One mode block for the commute insight cards (train, bike, car). */
export type CommuteModeInsightBlock = {
  title: string;
  narrative: string;
  typicalOneWay: string;
  reliability: string;
  costRough: string;
};

/** Rich commute copy for the UI — illustrative ranges, not live NS/Funda data. */
export type CommuteInsightsBundle = {
  practicality: CommutePracticality;
  officeDisplayName: string;
  modes: {
    train_pt: CommuteModeInsightBlock;
    bike: CommuteModeInsightBlock;
    car: CommuteModeInsightBlock;
  };
  corridorDisruption: string;
  preferredMode: CommuteModePref;
  preferredSummary: string;
};

export type AffordabilityBand = "comfortable" | "workable" | "stretch" | "strained";

export type ResultConfidenceLevel = "high" | "medium" | "low";

export type CityComparisonInput = {
  selectedCities: CityComparisonId[];
  householdType: HouseholdType;
  adultsCount: number;
  childrenCount: number;
  monthlyNetSalary: number;
  monthlyGrossSalary: number | null;
  workMode: WorkMode;
  officeCity: ColCity;
  lifestyleTier: LifestyleTier;
  internationalPref: TriPreference;
  familySchoolImportance: TriPreference;
  nightlifePref: TriPreference;
  natureCalmPref: TriPreference;
  careerPriority: TriPreference;
  budgetSensitivity: TriPreference;
  maxCommute: MaxCommute;
  commuteModePref: CommuteModePref;
  targetRentBudget: number | null;
  useColModelForSpend: boolean;
  includeFamilyChildcareEffects: boolean;
  planningWith30PercentRuling: boolean;
  scenarioToggles: Record<ScenarioRankingMode, boolean>;
};

export type CityCostBreakdown = {
  rentEur: number;
  livingLessRentEur: number;
  transportEur: number;
  healthEur: number;
  lifestyleLeisureEur: number;
  familyChildcareEur: number;
  totalMonthlyOutflowEur: number;
};

export type CityDimensionScores = {
  affordability: number;
  commute: number;
  family: number;
  expatEase: number;
  lifestyle: number;
  career: number;
};

export type SalaryFitBand = "comfortable_headroom" | "tight_but_plausible" | "below_model_band" | "unknown";

export type CityScoreRow = {
  cityId: CityComparisonId;
  displayName: string;
  /** Same as {@link overallScore} — explicit alias for exports and UI. */
  finalScore: number;
  overallScore: number;
  affordabilityScore: number;
  lifestyleScore: number;
  commuteScore: number;
  familyScore: number;
  careerScore: number;
  expatScore: number;
  dimensions: CityDimensionScores;
  weightedBreakdown: Record<keyof CityDimensionScores, number>;
  salaryFitBand: SalaryFitBand;
  salaryFitNote: string;
  descriptor: string;
  fitLabel: string;
  explanationBullets: string[];
  warningBullets: string[];
  /** @deprecated Use explanationBullets */
  positives: string[];
  /** @deprecated Use warningBullets */
  negatives: string[];
  cost: CityCostBreakdown;
  netRemainingEur: number;
  affordabilityBand: AffordabilityBand;
  affordabilityLabel: string;
  commutePracticality: CommutePracticality | null;
  commuteNote: string;
  /** Null when remote — structured commute copy for cards. */
  commuteInsights: CommuteInsightsBundle | null;
  tradeoffs: {
    bestFor: string;
    keyCompromise: string;
    whyPeopleChoose: string;
    worseFitWhen: string;
    commuterBeltNote: string;
  };
};

export type ScenarioCompareRow = {
  id: string;
  label: string;
  topCity: string;
  note: string;
};

export type CityComparisonResult = {
  ranking: CityScoreRow[];
  bestMatch: CityScoreRow;
  secondMatch: CityScoreRow | null;
  thirdMatch: CityScoreRow | null;
  scenarioRows: ScenarioCompareRow[];
  whatWouldChange: string[];
  recommendedDecision: string[];
  activeScenarioMode: ScenarioRankingMode;
  resultConfidence: ResultConfidenceLevel;
  /** Plain-language summary tied to {@link resultConfidence}. */
  planningFitConfidence: string;
  /**
   * Notes about the whole comparison (not city-specific). Shown once in the UI — avoids repeating
   * the same “watch-out” on every city card.
   */
  comparisonContextNotes: string[];
  /** One shared tip for the trade-off section (e.g. try commuter hubs), or null when not applicable. */
  tradeoffSectionTip: string | null;
};

export const DEFAULT_CITY_COMPARISON_INPUT: CityComparisonInput = {
  selectedCities: ["amsterdam", "rotterdam", "utrecht", "the-hague"],
  householdType: "single",
  adultsCount: 1,
  childrenCount: 0,
  monthlyNetSalary: 3800,
  monthlyGrossSalary: null,
  workMode: "hybrid",
  officeCity: "amsterdam",
  lifestyleTier: "balanced",
  internationalPref: "medium",
  familySchoolImportance: "low",
  nightlifePref: "medium",
  natureCalmPref: "medium",
  careerPriority: "high",
  budgetSensitivity: "medium",
  maxCommute: "under45",
  commuteModePref: "train_pt",
  targetRentBudget: null,
  useColModelForSpend: true,
  includeFamilyChildcareEffects: false,
  planningWith30PercentRuling: false,
  scenarioToggles: {
    balanced: true,
    cost_first: false,
    lifestyle_first: false,
    family_first: false,
    commute_first: false,
  },
};
