/** Netherlands expat cost-of-living calculator — planning types only. */

export type ColCity =
  | "amsterdam"
  | "rotterdam"
  | "the-hague"
  | "utrecht"
  | "eindhoven"
  | "haarlem"
  | "delft"
  | "groningen"
  | "leiden"
  | "other";

export type ColNeighborhood = "center" | "outside" | "commuter";

export type ColHouseholdPreset = "single" | "couple" | "family1" | "family2" | "custom";

export type ColHousingMode =
  | "room_shared"
  | "apartment_1bed"
  | "apartment_2bed"
  | "apartment_3bed_family"
  | "short_stay_serviced"
  | "already_arranged";

export type ColLifestyle = "basic" | "balanced" | "comfortable";

export type ColDiningLevel = "low" | "medium" | "high";

export type ColTravelStyle = "local" | "weekends" | "frequent";

export type ColTransportMode = "bike_pt" | "pt_only" | "car" | "hybrid";

export type ColChildcareIntensity = "none" | "part_time" | "full_time";

export type ColSchooling = "public_local" | "international_placeholder";

export type ColMovingFrom = "eu_nearby" | "uk" | "us_canada" | "far";

/** Whether an employer relocation package is expected to cover international move / travel costs (model only). */
export type ColEmployerRelocationSupport = "none" | "partial" | "full";

export type ColRulingAssumption = "no" | "maybe" | "yes";

export type ColRentInputMode = "model" | "manual";

export type ColCurrency = "eur" | "usd";

/** Full calculator input (v2). */
export type ColInput = {
  city: ColCity;
  neighborhood: ColNeighborhood;
  householdPreset: ColHouseholdPreset;
  adultsCount: number;
  childrenCount: number;
  housingMode: ColHousingMode;
  rentInputMode: ColRentInputMode;
  /** Monthly EUR when rentInputMode === "manual". */
  manualRentEur: number | null;
  lifestyle: ColLifestyle;
  diningLevel: ColDiningLevel;
  travelStyle: ColTravelStyle;
  transportMode: ColTransportMode;
  includeParking: boolean;
  includeNsCommuteSupplement: boolean;
  childcareNeeded: boolean;
  childcareIntensity: ColChildcareIntensity;
  schooling: ColSchooling;
  pet: boolean;
  movingFrom: ColMovingFrom;
  /** Scales the “travel / relocation to Netherlands” setup line; does not change deposit or furniture toggles. */
  employerRelocationSupport: ColEmployerRelocationSupport;
  includeFurnitureSetup: boolean;
  includeDepositAndFirstMonth: boolean;
  includeVisaAdminBudget: boolean;
  showSalaryTargets: boolean;
  rulingAssumption: ColRulingAssumption;
  currency: ColCurrency;
  /** Compare entered net to balanced salary target. */
  showSalaryComparison: boolean;
  comparisonNetMonthly: number | null;
  /** Compare mode: show table of scenario variants. */
  compareScenariosEnabled: boolean;
};

export type ColLineGroup = "core" | "living" | "risk";

export type ColLineItem = {
  id: string;
  label: string;
  amountEur: number;
  note?: string;
  /** For interpretation / export. */
  recurring?: boolean;
  /** Short “why this line exists” for tooltips / methodology. */
  whyItMatters?: string;
  group?: ColLineGroup;
  /** Lower sorts earlier within the same group. */
  displayOrder?: number;
};

export type ColInterpretation = {
  biggestDriver: string;
  surprises: string;
  reduceCosts: string;
  oneTimeVsRecurring: string;
  /** Plain-language summary of the three largest monthly lines. */
  topThreeDriversSummary: string;
  /** Extra paragraph when childcare is on and significant. */
  childcareContext: string | null;
};

export type ColSalaryTargets = {
  essentialNetMonthlyEur: number;
  balancedNetMonthlyEur: number;
  comfortableNetMonthlyEur: number;
  /** Plain-language note when 30% ruling may reduce required net for same gross. */
  rulingNote: string | null;
  /**
   * Very rough gross annual implied by balanced net — directional only (single wedge).
   * Not payroll or Belastingdienst math; use the salary calculator for real gross.
   */
  directionalGrossAnnualFromBalancedNetEur: number;
};

export type ColResult = {
  monthly: { items: ColLineItem[]; totalEur: number };
  setup: { items: ColLineItem[]; totalEur: number };
  firstMonthCashEur: number;
  emergencyBufferEur: number;
  /** Months of estimated recurring cost used to derive {@link emergencyBufferEur} (planning heuristic). */
  emergencyBufferPlanningMonths: number;
  salaryTargets: ColSalaryTargets | null;
  /** Back-compat: mirrors balanced net target. */
  recommendedNetSalaryMonthlyEur: number;
  /** Back-compat: setup + emergency-style buffer before move. */
  savingsBufferBeforeMoveEur: number;
  interpretation: ColInterpretation;
  usdRate: number;
  /** Top monthly lines for trust / “drivers” UI (amount > 0, sorted desc). */
  topMonthlyDrivers: { id: string; label: string; amountEur: number }[];
  /** Dynamic “things people forget” callouts. */
  trustUnderestimates: string[];
  /** Same as salaryTargets.directionalGross… or null if targets disabled. */
  roughDirectionalGrossAnnualFromBalancedNetEur: number | null;
  /** When user entered expected net vs bands. */
  netSalaryComparisonInsight: string | null;
};

export type ColComparisonRow = {
  id: string;
  label: string;
  input: ColInput;
  result: ColResult;
};
