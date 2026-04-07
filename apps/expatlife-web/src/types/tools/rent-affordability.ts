/** Netherlands rent affordability planner — UI wire types + engine/normalized model. */

/** --- UI / persistence (legacy keys preserved for forms & URL state) --- */

export type RaToolMode = "max_rent" | "salary_for_rent";

export type RaIncomeBasis = "net" | "gross";

export type RaIncomeEntryMode = "single_income" | "combined_household_income" | "primary_plus_partial_partner";

export type RaContractProfile = "both_permanent" | "one_permanent_one_temporary" | "self_employed_or_contractor";

export type RaHouseholdPreset = "single" | "couple" | "family1" | "family2" | "custom";

export type RaCity =
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
  | "amstelveen"
  | "other";

/** UI neighborhood tier (maps to `NeighborhoodCostBand` in the engine). */
export type RaNeighborhoodTier = "premium" | "standard" | "outer" | "commuter";

export type RaHousingType =
  | "room_shared"
  | "studio"
  | "apartment_1bed"
  | "apartment_2bed"
  | "apartment_3bed_family";

export type RaRentMode = "target" | "model";

/** UI lifestyle (maps to `LifestyleTier`: minimal → essential). */
export type RaLifestyle = "minimal" | "balanced" | "comfortable";

export type RaLandlordRule = 3 | 3.5 | 4;

export type RaLandlordScreenStatus = "pass" | "borderline" | "fail";

export type RaAffordabilityStatus = "comfortable" | "acceptable" | "stretch" | "risky";

export type RaMoneyLine = {
  id: string;
  label: string;
  group?: MonthlyLivingCostLineGroup;
  amountEur: number;
  note?: string;
};

export type RaLandlordRuleCheck = {
  multiplier: RaLandlordRule;
  status: RaLandlordScreenStatus;
  requiredGrossMonthlyEur: number;
  passes: boolean;
};

/** Rent caps: comfortable = safest; stretch = most aggressive; recommended defaults to balanced. */
export type RaMaxRentBand = {
  comfortableEur: number;
  essentialEur: number;
  balancedEur: number;
  stretchEur: number;
  recommendedEur: number;
};

export type RaSalaryNetTargets = {
  essentialNetMonthlyEur: number;
  balancedNetMonthlyEur: number;
  comfortableNetMonthlyEur: number;
};

export type RaReverseSalary = {
  requiredGrossMonthlyEur: number;
  requiredNetMonthlyPlanningEur: number;
  landlordFloorGrossMonthlyEur: number;
  lifestyleGrossMonthlyEur: number;
  comfortableNetAfterRentEur: number;
};

export type RaScenarioRow = {
  id: string;
  label: string;
  whyItMatters?: string;
  monthlyTotalEur: number;
  setupTotalEur: number;
  recommendedRentEur: number;
  balancedGrossSalaryMonthlyEur: number;
};

/** 30% facility planning only — not eligibility. */
export type RulingPlanningAssumption = "no" | "maybe" | "yes";

export type RaTransportMode = "bike_pt" | "pt_only" | "car" | "hybrid";

export type RaInputs = {
  toolMode: RaToolMode;
  incomeBasis: RaIncomeBasis;
  incomeEntryMode: RaIncomeEntryMode;
  partnerContributionShare: number;
  monthlyNet: number;
  monthlyGross: number;
  grossAnnual: number;
  bonusAnnual: number;
  landlordBonusCounts: boolean;
  landlordForeignIncomeAcceptedShare: number;
  contractProfile: RaContractProfile;
  includeHolidayAllowanceInGross: boolean;
  /** @deprecated Use `rulingAssumption`; kept for URL/storage compat. */
  apply30PercentRulingPlanning: boolean;
  rulingAssumption: RulingPlanningAssumption;
  householdPreset: RaHouseholdPreset;
  adultsCount: number;
  childrenCount: number;
  city: RaCity;
  neighborhoodTier: RaNeighborhoodTier;
  housingType: RaHousingType;
  rentMode: RaRentMode;
  targetRentEur: number;
  includeServiceCosts: boolean;
  includeParking: boolean;
  includeFurnishedPremium: boolean;
  transportMode: RaTransportMode;
  /** Model childcare line when children > 0 and user did not enter fixed childcare. */
  includeChildcarePlaceholder: boolean;
  childcareMode: "off" | "placeholder" | "manual";
  childcareIntensity: "part_time" | "full_time";
  includePet: boolean;
  /** Optional planning lines — not quotes; monthly reserve / placeholder where noted. */
  includeGymSport: boolean;
  includeSupplementaryHealth: boolean;
  includeStreamingExtras: boolean;
  includeTaxFilingReserve: boolean;
  includeTravelHomeReserve: boolean;
  /** School / materials placeholder when children > 0. */
  includeSchoolCostReserve: boolean;
  includeHomeContentsLiabilityInsurance: boolean;
  fixedDebt: number;
  fixedChildcare: number;
  fixedAlimony: number;
  fixedSubscriptions: number;
  fixedCar: number;
  fixedManualExtra: number;
  lifestyle: RaLifestyle;
  landlordRuleMultiplier: RaLandlordRule;
  setupDeposit: boolean;
  setupFirstMonth: boolean;
  setupFurniture: boolean;
  setupAgencyFees: boolean;
  setupMoveTravel: boolean;
  /** Heavier visa / immigration document friction (adds to admin line). */
  setupVisaAdminHeavy: boolean;
  /** Childcare waitlist / school registration style lump. */
  setupChildcareSchoolRegistration: boolean;
  /** Pet relocation / registration planning lump when pet toggle on. */
  setupPetRelocation: boolean;
  /** Short-stay overlap vs long lease (fraction of monthly rent). */
  setupShortStayOverlap: boolean;
  compareScenariosEnabled: boolean;
  userNotes: string;
};

export type RaComputation = {
  inputs: RaInputs;
  income: {
    netMonthly: number;
    grossMonthly: number;
    grossAnnual: number;
    netFromGrossEstimate: boolean;
    grossFromNetEstimate: boolean;
  };
  incomeWithoutRuling?: {
    netMonthly: number;
    grossMonthly: number;
  };
  nonRent: { lines: RaMoneyLine[]; totalEur: number };
  fixedObligationsEur: number;
  modelRentColdEur: number;
  effectiveRentEur: number;
  rentForComparisonEur: number | null;
  landlordScreeningGrossUsedEur: number;
  landlordChecks: RaLandlordRuleCheck[];
  selectedLandlordCheck: RaLandlordRuleCheck;
  maxRent: RaMaxRentBand;
  maxRentWithoutRulingSameGross?: RaMaxRentBand;
  salaryNetTargets: RaSalaryNetTargets;
  salaryGrossMonthlyTargets: {
    essential: number;
    balanced: number;
    comfortable: number;
  };
  reverse?: RaReverseSalary;
  remainingAfterRentEur: number;
  affordabilityStatus: RaAffordabilityStatus | null;
  setup: { lines: RaMoneyLine[]; totalEur: number; firstMonthCashEur: number; savingsBufferEur: number };
  scenarios: RaScenarioRow[];
  narrative: {
    biggestCostDriver: string;
    landlordIssue: string | null;
    reduceCosts: string;
    monthlyVsSetup: string;
    childcareImpact: string | null;
    rulingImpact: string | null;
    commuterBeltOpportunity: string | null;
  };
  meta: {
    warnings: string[];
    disclaimers: string[];
    incomeIndicativeNote: string | null;
    childcareSummary: {
      included: boolean;
      model: "none" | "placeholder" | "manual";
      schoolReserveIncluded: boolean;
    };
    landlordContextNotes: string[];
  };
};

// --- Engine canonical enums (deterministic calculation layer) ---

export type NeighborhoodCostBand = "city_center_premium" | "standard" | "outer_district" | "commuter_belt";

export type HouseholdType = "single" | "couple" | "family_1_child" | "family_2_children" | "custom";

export type LifestyleTier = "essential" | "balanced" | "comfortable";

export type HousingMode = "room_shared" | "studio" | "apartment_1br" | "apartment_2br" | "family_home_3br";

export type TransportMode = "bike_pt" | "pt_only" | "car" | "hybrid";

/** Normalized input passed to the pure engine (no UI-only fields). */
export type RentAffordabilityScenarioInput = {
  toolMode: RaToolMode;
  incomeBasis: RaIncomeBasis;
  incomeEntryMode: RaIncomeEntryMode;
  partnerContributionShare: number;
  monthlyNet: number;
  monthlyGross: number;
  grossAnnual: number;
  bonusAnnual: number;
  landlordBonusCounts: boolean;
  landlordForeignIncomeAcceptedShare: number;
  contractProfile: RaContractProfile;
  includeHolidayAllowanceInGross: boolean;
  rulingAssumption: RulingPlanningAssumption;
  householdType: HouseholdType;
  adultsCount: number;
  childrenCount: number;
  city: RaCity;
  neighborhoodBand: NeighborhoodCostBand;
  housingMode: HousingMode;
  rentMode: RaRentMode;
  targetRentEur: number;
  includeServiceCosts: boolean;
  includeParking: boolean;
  includeFurnishedPremium: boolean;
  transportMode: TransportMode;
  includeChildcarePlaceholder: boolean;
  childcareMode: "off" | "placeholder" | "manual";
  childcareIntensity: "part_time" | "full_time";
  includePet: boolean;
  includeGymSport: boolean;
  includeSupplementaryHealth: boolean;
  includeStreamingExtras: boolean;
  includeTaxFilingReserve: boolean;
  includeTravelHomeReserve: boolean;
  includeSchoolCostReserve: boolean;
  includeHomeContentsLiabilityInsurance: boolean;
  fixedDebt: number;
  fixedChildcare: number;
  fixedAlimony: number;
  fixedSubscriptions: number;
  fixedCar: number;
  fixedManualExtra: number;
  lifestyleTier: LifestyleTier;
  landlordRuleMultiplier: RaLandlordRule;
  setupDeposit: boolean;
  setupFirstMonth: boolean;
  setupFurniture: boolean;
  setupAgencyFees: boolean;
  setupMoveTravel: boolean;
  setupVisaAdminHeavy: boolean;
  setupChildcareSchoolRegistration: boolean;
  setupPetRelocation: boolean;
  setupShortStayOverlap: boolean;
};

export type MonthlyLivingCostLineGroup =
  | "housing"
  | "utilities"
  | "groceries"
  | "health"
  | "transport"
  | "comms"
  | "municipal"
  | "dining"
  | "misc"
  | "childcare"
  | "pet"
  | "debt"
  | "other_fixed"
  | "optional_extra"
  | "reserves";

export type MonthlyLivingCostLine = {
  id: string;
  label: string;
  group: MonthlyLivingCostLineGroup;
  amountEur: number;
  note?: string;
};

export type MonthlyLivingCostsResult = {
  lines: MonthlyLivingCostLine[];
  /** Sum of lines except housing rent (if rent passed as 0, equals full non-housing recurring). */
  subtotalExcludingHousingEur: number;
  /** Full total including housing rent line when `includeRentEur > 0`. */
  totalIncludingHousingEur: number;
};

export type SetupCostLine = {
  id: string;
  label: string;
  amountEur: number;
  /** Transparency: planning estimate / optional line / reserve — not quotes. */
  note?: string;
};

export type SetupCostsResult = {
  lines: SetupCostLine[];
  totalEur: number;
  firstMonthCashEur: number;
  savingsBufferEur: number;
};

export type AffordableRentBands = {
  /** Safest cap (largest buffer). */
  comfortableMaxRentEur: number;
  essentialMaxRentEur: number;
  balancedMaxRentEur: number;
  stretchMaxRentEur: number;
  recommendedMaxRentEur: number;
  safeMaxRentEur: number;
};

export type LandlordScreeningResult = {
  checks: RaLandlordRuleCheck[];
  selectedMultiplier: RaLandlordRule;
};

export type SalaryNeededForRentResult = {
  grossSalaryNeededAt3xEur: number;
  grossSalaryNeededAt35xEur: number;
  grossSalaryNeededAt4xEur: number;
  recommendedGrossMonthlyEur: number;
  essentialNetMonthlyToLiveEur: number;
  balancedNetMonthlyToLiveEur: number;
  comfortableNetMonthlyToLiveEur: number;
};

export type RentAffordabilityComparisonRow = {
  id: string;
  label: string;
  whyItMatters?: string;
  monthlyTotalEur: number;
  setupTotalEur: number;
  recommendedRentEur: number;
  balancedGrossSalaryMonthlyEur: number;
};

export type RentAffordabilityInsights = {
  biggestCostDriver: string;
  landlordIssue: string | null;
  monthlyVsSetup: string;
  reduceCosts: string;
  childcareImpact: string | null;
  rulingImpact: string | null;
  commuterBeltOpportunity: string | null;
};

/** Full engine output before adapter maps to `RaComputation`. */
export type RentAffordabilityEngineResult = {
  normalized: RentAffordabilityScenarioInput;
  income: RaComputation["income"];
  incomeWithoutRuling?: RaComputation["incomeWithoutRuling"];
  monthlyLiving: MonthlyLivingCostsResult;
  fixedObligationsEur: number;
  modelRentColdEur: number;
  effectiveRentEur: number;
  rentForComparisonEur: number | null;
  landlordScreeningGrossUsedEur: number;
  affordabilityBands: AffordableRentBands;
  landlordScreening: LandlordScreeningResult;
  salaryTargetsNet: RaSalaryNetTargets;
  salaryTargetsGrossMonthly: RaComputation["salaryGrossMonthlyTargets"];
  salaryNeededForRent?: SalaryNeededForRentResult;
  /** Present in salary-for-rent mode when target rent is set. */
  reverse?: RaReverseSalary;
  remainingAfterRentEur: number;
  affordabilityStatus: RaAffordabilityStatus | null;
  setup: SetupCostsResult;
  scenarios: RentAffordabilityComparisonRow[];
  insights: RentAffordabilityInsights;
  warnings: string[];
  disclaimers: string[];
  incomeIndicativeNote: string | null;
};
