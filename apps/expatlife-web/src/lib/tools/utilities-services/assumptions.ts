import type { UsHouseholdType, UsPriority, UtilitiesAssumptionsConfig } from "./types";

/** City anchors: municipality-style monthly band + small nudge on optional connectivity expectations. */
export const utilitiesCityAnchors: UtilitiesAssumptionsConfig["cityAnchors"] = {
  amsterdam: { municipalityMonthlyEur: 92, optionalBundleNudge: 1.06, label: "Amsterdam" },
  rotterdam: { municipalityMonthlyEur: 78, optionalBundleNudge: 1.02, label: "Rotterdam" },
  "the-hague": { municipalityMonthlyEur: 85, optionalBundleNudge: 1.03, label: "The Hague" },
  utrecht: { municipalityMonthlyEur: 88, optionalBundleNudge: 1.05, label: "Utrecht" },
  eindhoven: { municipalityMonthlyEur: 72, optionalBundleNudge: 1.0, label: "Eindhoven" },
  haarlem: { municipalityMonthlyEur: 86, optionalBundleNudge: 1.05, label: "Haarlem" },
  leiden: { municipalityMonthlyEur: 76, optionalBundleNudge: 1.01, label: "Leiden" },
  delft: { municipalityMonthlyEur: 74, optionalBundleNudge: 1.0, label: "Delft" },
  groningen: { municipalityMonthlyEur: 68, optionalBundleNudge: 0.98, label: "Groningen" },
  breda: { municipalityMonthlyEur: 70, optionalBundleNudge: 0.98, label: "Breda" },
  tilburg: { municipalityMonthlyEur: 69, optionalBundleNudge: 0.97, label: "Tilburg" },
  "arnhem-nijmegen": { municipalityMonthlyEur: 73, optionalBundleNudge: 1.0, label: "Arnhem / Nijmegen" },
  other: { municipalityMonthlyEur: 75, optionalBundleNudge: 1.0, label: "Other Netherlands" },
};

export const utilitiesHousingMultipliers: UtilitiesAssumptionsConfig["housingMultipliers"] = {
  student_room: 0.55,
  studio: 0.72,
  apartment: 1,
  terraced: 1.12,
  larger_house: 1.35,
};

export const utilitiesSizeMultipliers: UtilitiesAssumptionsConfig["sizeMultipliers"] = {
  small: 0.85,
  medium: 1,
  large: 1.28,
};

export const utilitiesEnergyQualityMultipliers: UtilitiesAssumptionsConfig["energyQualityMultipliers"] = {
  low: 1.35,
  average: 1,
  efficient: 0.82,
  unknown: 1.08,
};

export const utilitiesHeatingMultipliers: UtilitiesAssumptionsConfig["heatingMultipliers"] = {
  gas: 1,
  electric: 1.24,
  district: 0.88,
  mixed_unknown: 1.06,
};

export const utilitiesUsageMultipliers: UtilitiesAssumptionsConfig["usageMultipliers"] = {
  low: 0.78,
  average: 1,
  high: 1.22,
};

/** Base €/month: 2-adult equivalent, gas heating, average shell, medium apartment — planning anchor only. */
export const utilitiesEnergyBaseMonthlyEur = 118;

export const utilitiesWaterBasePerAdultEur = 11;
export const utilitiesWaterHouseholdFloorEur = 18;

export const utilitiesInternetMonthlyByTier: UtilitiesAssumptionsConfig["internetMonthlyByTier"] = {
  basic: 38,
  standard: 48,
  fast: 64,
};

/** Extra household load on connectivity (streaming, devices, concurrent calls). */
export function utilitiesInternetHouseholdMultiplier(personEquivalents: number, householdType: UsHouseholdType): number {
  const pe = Math.max(1, personEquivalents);
  let m = 1 + 0.045 * (pe - 1);
  if (householdType === "family") m += 0.04;
  if (householdType === "house_share") m += 0.03;
  return Math.min(1.22, m);
}

export const utilitiesMobilePerLineByUsage: UtilitiesAssumptionsConfig["mobilePerLineByUsage"] = {
  light: 18,
  standard: 26,
  heavy: 38,
};

/** Family / share context on top of explicit line count. */
export function utilitiesMobileHouseholdFactor(householdType: UsHouseholdType, childrenCount: number): number {
  if (householdType === "family" && childrenCount > 0) return 1.06;
  if (householdType === "house_share") return 1.02;
  return 1;
}

export const utilitiesMediaBundleMonthlyEur = 16;

export const utilitiesContentsInsuranceMonthlyEur = 16;
export const utilitiesLiabilityInsuranceMonthlyEur = 7;

export const utilitiesSetupAssumptions: UtilitiesAssumptionsConfig["setupAssumptions"] = {
  energyActivationEur: { min: 0, typical: 65, max: 140 },
  internetInstallEur: { min: 0, typical: 45, max: 95 },
  modemRouterTypicalWhenProviderSuppliesEur: 0,
  modemRouterTypicalWhenYouBuyEur: 55,
  mobileSimAdminPerHouseholdEur: 15,
  insuranceAdminEur: 10,
  overlapFrictionEur: 120,
  firstInvoiceBufferEur: 35,
  movingSoonConnectionFrictionEur: 45,
};

/** Single object for tests/docs — mirrors `UtilitiesAssumptionsConfig`. */
export const UTILITIES_ASSUMPTIONS_CONFIG: UtilitiesAssumptionsConfig = {
  cityAnchors: utilitiesCityAnchors,
  housingMultipliers: utilitiesHousingMultipliers,
  sizeMultipliers: utilitiesSizeMultipliers,
  energyQualityMultipliers: utilitiesEnergyQualityMultipliers,
  heatingMultipliers: utilitiesHeatingMultipliers,
  usageMultipliers: utilitiesUsageMultipliers,
  energyBaseMonthlyEur: utilitiesEnergyBaseMonthlyEur,
  waterBasePerAdultEur: utilitiesWaterBasePerAdultEur,
  waterHouseholdFloorEur: utilitiesWaterHouseholdFloorEur,
  internetMonthlyByTier: utilitiesInternetMonthlyByTier,
  mobilePerLineByUsage: utilitiesMobilePerLineByUsage,
  mediaBundleMonthlyEur: utilitiesMediaBundleMonthlyEur,
  contentsInsuranceMonthlyEur: utilitiesContentsInsuranceMonthlyEur,
  liabilityInsuranceMonthlyEur: utilitiesLiabilityInsuranceMonthlyEur,
  setupAssumptions: utilitiesSetupAssumptions,
};

/** Priority nudge on variable retail spend (broad planning). */
export function utilitiesPrioritySpendFactor(priority: UsPriority): number {
  switch (priority) {
    case "lowest_cost":
      return 0.94;
    case "flexibility":
      return 1.04;
    case "balanced":
      return 1;
    case "quality":
      return 1.08;
    case "greener":
      return 1.05;
    default:
      return 1;
  }
}

export const utilitiesOptionalServicePlaceholders = [
  "district_heating_nuance",
  "ev_charging_tariff",
  "home_security",
  "cleaning_services",
  "parking_permit",
  "pet_insurance",
  "legal_insurance",
] as const;
