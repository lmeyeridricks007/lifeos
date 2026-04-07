import type {
  HouseholdType,
  HousingMode,
  LifestyleTier,
  NeighborhoodCostBand,
  RaHouseholdPreset,
  RaHousingType,
  RaInputs,
  RaLifestyle,
  RaNeighborhoodTier,
  RentAffordabilityScenarioInput,
  RulingPlanningAssumption,
} from "@/src/types/tools/rent-affordability";

export function mapNeighborhoodTierToBand(t: RaNeighborhoodTier): NeighborhoodCostBand {
  switch (t) {
    case "premium":
      return "city_center_premium";
    case "outer":
      return "outer_district";
    case "commuter":
      return "commuter_belt";
    default:
      return "standard";
  }
}

export function mapHouseholdPresetToType(p: RaHouseholdPreset): HouseholdType {
  switch (p) {
    case "family1":
      return "family_1_child";
    case "family2":
      return "family_2_children";
    case "single":
      return "single";
    case "couple":
      return "couple";
    default:
      return "custom";
  }
}

export function mapHousingTypeToMode(ht: RaHousingType): HousingMode {
  switch (ht) {
    case "apartment_1bed":
      return "apartment_1br";
    case "apartment_2bed":
      return "apartment_2br";
    case "apartment_3bed_family":
      return "family_home_3br";
    case "studio":
      return "studio";
    default:
      return "room_shared";
  }
}

export function mapLifestyleToTier(l: RaLifestyle): LifestyleTier {
  if (l === "minimal") return "essential";
  if (l === "comfortable") return "comfortable";
  return "balanced";
}

const RULING_SET = new Set<RulingPlanningAssumption>(["no", "maybe", "yes"]);

/** Prefer explicit `rulingAssumption`; fall back to legacy `apply30PercentRulingPlanning` when missing/invalid. */
export function effectiveRulingAssumption(ra: RaInputs): RulingPlanningAssumption {
  if (ra.rulingAssumption && RULING_SET.has(ra.rulingAssumption)) return ra.rulingAssumption;
  return ra.apply30PercentRulingPlanning ? "yes" : "no";
}

export function normalizeRentAffordabilityInput(ra: RaInputs): RentAffordabilityScenarioInput {
  return {
    toolMode: ra.toolMode,
    incomeBasis: ra.incomeBasis,
    incomeEntryMode: ra.incomeEntryMode,
    partnerContributionShare: ra.partnerContributionShare,
    monthlyNet: ra.monthlyNet,
    monthlyGross: ra.incomeBasis === "gross" ? Math.max(0, ra.monthlyGross || ra.grossAnnual / 12) : ra.monthlyGross,
    grossAnnual: ra.grossAnnual,
    bonusAnnual: ra.bonusAnnual,
    landlordBonusCounts: ra.landlordBonusCounts,
    landlordForeignIncomeAcceptedShare: ra.landlordForeignIncomeAcceptedShare,
    contractProfile: ra.contractProfile,
    includeHolidayAllowanceInGross: ra.includeHolidayAllowanceInGross,
    rulingAssumption: effectiveRulingAssumption(ra),
    householdType: mapHouseholdPresetToType(ra.householdPreset),
    adultsCount: ra.adultsCount,
    childrenCount: ra.childrenCount,
    city: ra.city,
    neighborhoodBand: mapNeighborhoodTierToBand(ra.neighborhoodTier),
    housingMode: mapHousingTypeToMode(ra.housingType),
    rentMode: ra.rentMode,
    targetRentEur: ra.targetRentEur,
    includeServiceCosts: ra.includeServiceCosts,
    includeParking: ra.includeParking,
    includeFurnishedPremium: ra.includeFurnishedPremium,
    transportMode: ra.transportMode,
    includeChildcarePlaceholder: ra.includeChildcarePlaceholder,
    childcareMode: ra.childcareMode,
    childcareIntensity: ra.childcareIntensity,
    includePet: ra.includePet,
    includeGymSport: ra.includeGymSport,
    includeSupplementaryHealth: ra.includeSupplementaryHealth,
    includeStreamingExtras: ra.includeStreamingExtras,
    includeTaxFilingReserve: ra.includeTaxFilingReserve,
    includeTravelHomeReserve: ra.includeTravelHomeReserve,
    includeSchoolCostReserve: ra.includeSchoolCostReserve,
    includeHomeContentsLiabilityInsurance: ra.includeHomeContentsLiabilityInsurance,
    fixedDebt: ra.fixedDebt,
    fixedChildcare: ra.fixedChildcare,
    fixedAlimony: ra.fixedAlimony,
    fixedSubscriptions: ra.fixedSubscriptions,
    fixedCar: ra.fixedCar,
    fixedManualExtra: ra.fixedManualExtra,
    lifestyleTier: mapLifestyleToTier(ra.lifestyle),
    landlordRuleMultiplier: ra.landlordRuleMultiplier,
    setupDeposit: ra.setupDeposit,
    setupFirstMonth: ra.setupFirstMonth,
    setupFurniture: ra.setupFurniture,
    setupAgencyFees: ra.setupAgencyFees,
    setupMoveTravel: ra.setupMoveTravel,
    setupVisaAdminHeavy: ra.setupVisaAdminHeavy,
    setupChildcareSchoolRegistration: ra.setupChildcareSchoolRegistration,
    setupPetRelocation: ra.setupPetRelocation,
    setupShortStayOverlap: ra.setupShortStayOverlap,
  };
}
