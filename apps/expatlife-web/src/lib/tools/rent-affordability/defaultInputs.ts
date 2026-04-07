import type { RaInputs } from "@/src/types/tools/rent-affordability";

export const RA_DEFAULT_INPUTS: RaInputs = {
  toolMode: "max_rent",
  incomeBasis: "gross",
  incomeEntryMode: "single_income",
  partnerContributionShare: 0.5,
  monthlyNet: 3600,
  monthlyGross: 5200,
  grossAnnual: 62_400,
  bonusAnnual: 0,
  landlordBonusCounts: true,
  landlordForeignIncomeAcceptedShare: 1,
  contractProfile: "both_permanent",
  includeHolidayAllowanceInGross: true,
  apply30PercentRulingPlanning: false,
  rulingAssumption: "no",
  householdPreset: "single",
  adultsCount: 1,
  childrenCount: 0,
  city: "amsterdam",
  neighborhoodTier: "standard",
  housingType: "apartment_1bed",
  rentMode: "model",
  targetRentEur: 1650,
  includeServiceCosts: false,
  includeParking: false,
  includeFurnishedPremium: false,
  transportMode: "bike_pt",
  includeChildcarePlaceholder: false,
  childcareMode: "off",
  childcareIntensity: "part_time",
  includePet: false,
  includeGymSport: false,
  includeSupplementaryHealth: false,
  includeStreamingExtras: false,
  includeTaxFilingReserve: false,
  includeTravelHomeReserve: false,
  includeSchoolCostReserve: false,
  includeHomeContentsLiabilityInsurance: false,
  fixedDebt: 0,
  fixedChildcare: 0,
  fixedAlimony: 0,
  fixedSubscriptions: 120,
  fixedCar: 0,
  fixedManualExtra: 0,
  lifestyle: "balanced",
  landlordRuleMultiplier: 3.5,
  setupDeposit: true,
  setupFirstMonth: true,
  setupFurniture: false,
  setupAgencyFees: true,
  setupMoveTravel: true,
  setupVisaAdminHeavy: false,
  setupChildcareSchoolRegistration: false,
  setupPetRelocation: false,
  setupShortStayOverlap: false,
  compareScenariosEnabled: true,
  userNotes: "",
};

export function mergeRaInputs(patch: Partial<RaInputs>): RaInputs {
  const m = { ...RA_DEFAULT_INPUTS, ...patch };
  if (patch.rulingAssumption !== undefined) {
    m.apply30PercentRulingPlanning = patch.rulingAssumption === "yes";
  } else if (patch.apply30PercentRulingPlanning !== undefined) {
    m.rulingAssumption = patch.apply30PercentRulingPlanning ? "yes" : "no";
  }
  if (m.rulingAssumption === "maybe") {
    m.apply30PercentRulingPlanning = false;
  }
  if (patch.childcareMode !== undefined) {
    if (patch.childcareMode === "off") {
      m.includeChildcarePlaceholder = false;
      m.fixedChildcare = 0;
    } else if (patch.childcareMode === "placeholder") {
      m.includeChildcarePlaceholder = true;
      if (patch.fixedChildcare === undefined) m.fixedChildcare = 0;
    } else if (patch.childcareMode === "manual") {
      m.includeChildcarePlaceholder = false;
      if ((patch.fixedChildcare ?? m.fixedChildcare) <= 0) m.fixedChildcare = 650;
    }
  }
  if (patch.includeChildcarePlaceholder !== undefined || patch.fixedChildcare !== undefined) {
    if (m.fixedChildcare > 0 && !m.includeChildcarePlaceholder) m.childcareMode = "manual";
    else if (m.includeChildcarePlaceholder) m.childcareMode = "placeholder";
    else m.childcareMode = "off";
  }
  if (patch.monthlyGross !== undefined && patch.grossAnnual === undefined) {
    m.grossAnnual = Math.max(0, patch.monthlyGross * 12);
  } else if (patch.grossAnnual !== undefined && patch.monthlyGross === undefined) {
    m.monthlyGross = Math.max(0, patch.grossAnnual / 12);
  }
  return m;
}
