/**
 * Shared types for the Visa Cost Calculator.
 * Route and answer types used by data files and cost engine.
 */

export type VisaCostRouteId =
  | "highly-skilled-migrant"
  | "eu-blue-card"
  | "self-employed"
  | "daft"
  | "student"
  | "partner-family"
  | "not-sure";

export type TravelDistanceBand = "nearby-europe" | "medium-haul" | "long-haul" | "";

export type HouseholdType =
  | "solo"
  | "partner"
  | "partner-and-children"
  | "children-only"
  | "pet"
  | "not-sure";

export type WorkAgeBand = "under-30" | "30-or-over" | "not-sure";

export type StudyType = "university-hbo" | "secondary-mbo" | "not-sure";

export type EntrepreneurMode = "daft" | "self-employed" | "not-sure";

export type BusinessStage = "planning" | "existing-business" | "existing-clients" | "not-sure";

export type SponsorIncomeStatus = "yes" | "no" | "not-sure";

export type DocumentReadinessLevel = "mostly-ready" | "partly-ready" | "hardly-started" | "";

export type TempHousingDuration =
  | "none"
  | "1-week"
  | "2-weeks"
  | "1-month"
  | "more-than-1-month"
  | "";

export type VisaCostCalculatorAnswers = {
  primaryRoute: VisaCostRouteId;
  countryCode: string;
  travelDistanceBand: TravelDistanceBand;
  householdType: HouseholdType;
  includesPets: boolean;
  workAgeBand: WorkAgeBand;
  sponsorStatus: "yes" | "no" | "not-sure";
  studyType: StudyType;
  entrepreneurMode: EntrepreneurMode;
  businessStage: BusinessStage;
  partnerJoiningSponsor: "yes" | "no" | "not-sure";
  sponsorIncomeStatus: SponsorIncomeStatus;
  documentComplexityFlags: string[];
  documentReadinessLevel: DocumentReadinessLevel;
  includedCostCategories: string[];
  tempHousingDuration: TempHousingDuration;
};

export type CostBreakdownRow = {
  id: string;
  label: string;
  lowEur: number;
  highEur: number;
  note?: string;
  sourceHref?: string;
};

export type CostEngineResult = {
  lowEstimate: number;
  highEstimate: number;
  officialFeeSubtotal: number;
  documentPrepSubtotal: number;
  travelSubtotal: number;
  setupSubtotal: number;
  householdAdjustment: number;
  routeSpecificNotes: string[];
  hiddenCostWarnings: string[];
  costBreakdown: CostBreakdownRow[];
  recommendedNextSteps: Array<{ label: string; href: string }>;
  recommendedGuides: Array<{ label: string; href: string }>;
  recommendedTools: Array<{ label: string; href: string }>;
};
