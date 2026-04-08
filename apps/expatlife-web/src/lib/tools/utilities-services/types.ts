/** Utilities & services comparison tool — planning-only types. */

export type UsCity =
  | "amsterdam"
  | "rotterdam"
  | "the-hague"
  | "utrecht"
  | "eindhoven"
  | "haarlem"
  | "leiden"
  | "delft"
  | "groningen"
  | "breda"
  | "tilburg"
  | "arnhem-nijmegen"
  | "other";

export type UsMoveStage = "researching" | "moving_soon" | "already_moved";

export type UsHouseholdType = "single" | "couple" | "family" | "house_share";

export type UsTriState = "yes" | "no" | "unsure";

export type UsHousingType = "student_room" | "studio" | "apartment" | "terraced" | "larger_house";

export type UsSizeBand = "small" | "medium" | "large";

export type UsEnergyQuality = "low" | "average" | "efficient" | "unknown";

export type UsHeating = "gas" | "electric" | "district" | "mixed_unknown";

export type UsFurnished = "furnished" | "unfurnished";

export type UsUsageLevel = "low" | "average" | "high";

export type UsInternetTier = "basic" | "standard" | "fast";

export type UsMobileUsage = "light" | "standard" | "heavy";

export type UsPriority = "lowest_cost" | "flexibility" | "balanced" | "quality" | "greener";

export type UsPlannerMode = "quick" | "detailed";

export type UsRenterOrOwner = "renter" | "owner";

export type UsServiceCategoryId =
  | "energy"
  | "water"
  | "internet"
  | "mobile"
  | "municipality"
  | "media_bundle"
  | "contents_insurance"
  | "liability_insurance";

/** What users should do in the market vs with the gemeente / landlord. */
export type UsServiceClassification = "actively_compare" | "usually_local_fixed" | "may_already_be_included" | "optional";

/** Derived slice: who lives in the home (for scaling and checklist). */
export type UsHouseholdProfile = {
  householdType: UsHouseholdType;
  adultsCount: number;
  childrenCount: number;
  renterOrOwner: UsRenterOrOwner;
  /** Planning-weighted “person-equivalents” for utility scaling (not headcount). */
  personEquivalents: number;
};

/** Derived slice: physical home and building (for energy/water/internet context). */
export type UsHousingProfile = {
  housingType: UsHousingType;
  sizeBand: UsSizeBand;
  energyQuality: UsEnergyQuality;
  heating: UsHeating;
  furnished: UsFurnished;
  utilitiesIncludedInRent: UsTriState;
  landlordBuildingIncludesServices: UsTriState;
};

/** Derived slice: behaviour and service preferences affecting variable spend. */
export type UsUsageProfile = {
  usageLevel: UsUsageLevel;
  internetTier: UsInternetTier;
  mobileUsage: UsMobileUsage;
  mobileLines: number;
  evHeavy: boolean;
  wfhHeavy: boolean;
  priority: UsPriority;
  includeInternet: boolean;
  includeMobile: boolean;
  includeTvMedia: boolean;
  includeContentsInsurance: boolean;
  includeLiabilityInsurance: boolean;
};

/** Full tool input (form + URL state). */
export type UtilitiesServicesInput = {
  plannerMode: UsPlannerMode;
  city: UsCity;
  moveStage: UsMoveStage;
  householdType: UsHouseholdType;
  adultsCount: number;
  childrenCount: number;
  renterOrOwner: UsRenterOrOwner;
  utilitiesIncludedInRent: UsTriState;
  housingType: UsHousingType;
  sizeBand: UsSizeBand;
  energyQuality: UsEnergyQuality;
  heating: UsHeating;
  furnished: UsFurnished;
  landlordBuildingIncludesServices: UsTriState;
  usageLevel: UsUsageLevel;
  internetTier: UsInternetTier;
  mobileUsage: UsMobileUsage;
  mobileLines: number;
  evHeavy: boolean;
  wfhHeavy: boolean;
  includeInternet: boolean;
  includeMobile: boolean;
  includeTvMedia: boolean;
  includeContentsInsurance: boolean;
  includeLiabilityInsurance: boolean;
  priority: UsPriority;
  movingDateNote: string;
  shortTermOverlap: boolean;
};

/** Registry row for a modeled service line (labels, defaults). */
export type UsServiceCategoryConfig = {
  id: UsServiceCategoryId;
  label: string;
  essentialWhenEnabled: boolean;
  /** Default classification if no inclusion/override applies. */
  defaultClassification: Exclude<UsServiceClassification, "may_already_be_included">;
};

/** Output from classification pass — deterministic given profile + amounts. */
export type UsClassificationResult = {
  classification: UsServiceClassification;
  maybeIncluded: boolean;
  compareNote: string;
  /** Short audit trail for maintainers / power users. */
  rulesApplied: string[];
};

/** Per-category estimate bundle (engine output before UI mapping). */
export type UsServiceEstimate = {
  categoryId: UsServiceCategoryId;
  label: string;
  essential: boolean;
  monthlyEstimate: number;
  annualEstimate: number;
  setupEstimate: number;
  whyItApplies: string;
  whatToCheck: string[];
  assumptionsUsed: string[];
  classification: UsClassificationResult;
};

export type UsChecklistPhase = "before_move_in" | "move_in_day" | "first_month";

export type UsChecklistTask = {
  id: string;
  phase: UsChecklistPhase;
  text: string;
  /** Why this task was included (deterministic tag). */
  sourceRule: string;
};

/** @deprecated prefer UsChecklistTask */
export type UsChecklistItem = UsChecklistTask;

export type UsScenarioComparisonRow = {
  id: string;
  label: string;
  monthlyTotalEur: number;
  firstMonthSetupEur: number;
  /** vs the baseline profile at calculation time */
  monthlyDeltaEur: number;
  setupDeltaEur: number;
  biggestCostDriver: string;
  whatChanged: string;
};

/** Explicit first-month / one-off buckets (sums match setupTotalEur). */
export type UsSetupBuckets = {
  installationActivationEur: number;
  hardwareModemEur: number;
  adminOverlapFrictionEur: number;
  firstInvoiceTimingBufferEur: number;
  movingConnectionFrictionEur: number;
};

/** Flat row for tables, export, and legacy UI — derived from UsServiceEstimate. */
export type UsServiceBreakdownLine = {
  categoryId: UsServiceCategoryId;
  label: string;
  /** Monthly recurring (planning band). */
  monthlyEstimate: number;
  /** Same as monthlyEstimate — kept for callers that still read monthlyEur. */
  monthlyEur: number;
  annualEstimate: number;
  /** Category-attributable setup portion. */
  setupEstimate: number;
  essential: boolean;
  whyItApplies: string;
  whatToCheck: string[];
  /** Single-line summary for compact UI / legacy copy. */
  whatAffectsEstimate: string;
  classification: UsServiceClassification;
  /** Alias of classification for backwards compatibility. */
  compareKind: UsServiceClassification;
  maybeIncluded: boolean;
  assumptionsUsed: string[];
  compareNote: string;
};

export type UtilitiesServicesResult = {
  householdProfile: UsHouseholdProfile;
  housingProfile: UsHousingProfile;
  usageProfile: UsUsageProfile;
  monthlyTotals: {
    allInEur: number;
    essentialEur: number;
    optionalEur: number;
  };
  setupTotalEur: number;
  setupBuckets: UsSetupBuckets;
  comparableServicesCount: number;
  fixedLocalServicesCount: number;
  maybeIncludedCount: number;
  serviceBreakdown: UsServiceBreakdownLine[];
  serviceEstimates: UsServiceEstimate[];
  moveInChecklist: UsChecklistTask[];
  scenarioComparisons: UsScenarioComparisonRow[];
  summaryText: string;
  warnings: string[];
};

export type UsExportPayload = {
  siteName: string;
  generatedAtIso: string;
  disclaimer: string;
  calculatorCanonicalUrl: string;
  input: UtilitiesServicesInput;
  result: UtilitiesServicesResult;
};

/** Structural description of the numeric config object (documentation + typing). */
export type UtilitiesAssumptionsConfig = {
  cityAnchors: Record<
    UsCity,
    { municipalityMonthlyEur: number; optionalBundleNudge: number; label: string }
  >;
  housingMultipliers: Record<UsHousingType, number>;
  sizeMultipliers: Record<UsSizeBand, number>;
  energyQualityMultipliers: Record<UsEnergyQuality, number>;
  heatingMultipliers: Record<UsHeating, number>;
  usageMultipliers: Record<UsUsageLevel, number>;
  energyBaseMonthlyEur: number;
  waterBasePerAdultEur: number;
  waterHouseholdFloorEur: number;
  internetMonthlyByTier: Record<UsInternetTier, number>;
  mobilePerLineByUsage: Record<UsMobileUsage, number>;
  mediaBundleMonthlyEur: number;
  contentsInsuranceMonthlyEur: number;
  liabilityInsuranceMonthlyEur: number;
  setupAssumptions: UsSetupAssumptionsNumeric;
};

export type UsSetupAssumptionsNumeric = {
  energyActivationEur: { min: number; typical: number; max: number };
  internetInstallEur: { min: number; typical: number; max: number };
  modemRouterTypicalWhenProviderSuppliesEur: number;
  modemRouterTypicalWhenYouBuyEur: number;
  mobileSimAdminPerHouseholdEur: number;
  insuranceAdminEur: number;
  overlapFrictionEur: number;
  firstInvoiceBufferEur: number;
  movingSoonConnectionFrictionEur: number;
};
