import type {
  UsHouseholdProfile,
  UsHousingProfile,
  UsUsageProfile,
  UtilitiesServicesInput,
} from "./types";

/**
 * Person-equivalents for energy/water/municipality scaling: adults count fully,
 * children add a smaller tail (laundry, hot water, devices) — capped for stability.
 */
export function computePersonEquivalents(adultsCount: number, childrenCount: number): number {
  const adults = Math.max(1, Math.min(6, adultsCount));
  const children = Math.max(0, Math.min(8, childrenCount));
  return Math.min(3.2, adults + children * 0.38);
}

export function deriveHouseholdProfile(input: UtilitiesServicesInput): UsHouseholdProfile {
  return {
    householdType: input.householdType,
    adultsCount: input.adultsCount,
    childrenCount: input.childrenCount,
    renterOrOwner: input.renterOrOwner,
    personEquivalents: computePersonEquivalents(input.adultsCount, input.childrenCount),
  };
}

export function deriveHousingProfile(input: UtilitiesServicesInput): UsHousingProfile {
  return {
    housingType: input.housingType,
    sizeBand: input.sizeBand,
    energyQuality: input.energyQuality,
    heating: input.heating,
    furnished: input.furnished,
    utilitiesIncludedInRent: input.utilitiesIncludedInRent,
    landlordBuildingIncludesServices: input.landlordBuildingIncludesServices,
  };
}

export function deriveUsageProfile(input: UtilitiesServicesInput): UsUsageProfile {
  return {
    usageLevel: input.usageLevel,
    internetTier: input.internetTier,
    mobileUsage: input.mobileUsage,
    mobileLines: input.mobileLines,
    evHeavy: input.evHeavy,
    wfhHeavy: input.wfhHeavy,
    priority: input.priority,
    includeInternet: input.includeInternet,
    includeMobile: input.includeMobile,
    includeTvMedia: input.includeTvMedia,
    includeContentsInsurance: input.includeContentsInsurance,
    includeLiabilityInsurance: input.includeLiabilityInsurance,
  };
}
