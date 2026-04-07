/**
 * Rent affordability — planning coefficients and modifiers (editorial, not official statistics).
 * Absolute euro baselines for groceries/utilities/health align with the cost-of-living city seed;
 * this layer adds explicit multipliers and neighborhood/household/lifestyle shaping for the engine.
 */

import type { ColHousingMode } from "@/src/lib/calculators/cost-of-living/types";
import type {
  HouseholdType,
  HousingMode,
  LifestyleTier,
  NeighborhoodCostBand,
  RaCity,
  TransportMode,
} from "@/src/types/tools/rent-affordability";

/** Neighborhood: rent nudge + competitiveness delta (commuter belt savings intentionally visible). */
export const NEIGHBORHOOD_MODIFIERS: Record<
  NeighborhoodCostBand,
  { rentMult: number; competitivenessDelta: number }
> = {
  city_center_premium: { rentMult: 1.14, competitivenessDelta: 0.07 },
  standard: { rentMult: 1, competitivenessDelta: 0 },
  outer_district: { rentMult: 0.9, competitivenessDelta: -0.03 },
  commuter_belt: { rentMult: 0.81, competitivenessDelta: -0.055 },
};

/**
 * Per-city planning layer (multipliers on COL seed mids, plus competitiveness / setup tendencies).
 * competitivenessBase: 0 = neutral, higher = tighter recommended rent moderation.
 */
export const CITY_PLANNING: Record<
  RaCity,
  {
    rentAnchorMult: number;
    groceriesMult: number;
    utilitiesMult: number;
    transportBaselineAddEur: number;
    municipalPerAdultEur: number;
    competitivenessBase: number;
    setupTravelMult: number;
    depositMonthsTendency: number;
    agencyFeeTendencyMult: number;
    /** When “service costs” toggle is on — planning bundle, not a statement from a landlord. */
    serviceCostsBundleEur: number;
    /** Scales optional extras (gym, supplements, tax reserve, etc.). */
    optionalExtrasMult: number;
    /** Internet + utilities activation / first bills (setup). */
    setupUtilityInternetBaseEur: number;
    /** Added to admin line for visa-heavy moves. */
    setupAdminHeavyAddonEur: number;
    /** Per-child add for school placeholder reserve (monthly). */
    schoolReservePerChildEur: number;
    /** Fraction of monthly rent when short-stay overlap toggle is on. */
    shortStayOverlapRentFraction: number;
  }
> = {
  amsterdam: {
    rentAnchorMult: 1.09,
    groceriesMult: 1.08,
    utilitiesMult: 1.08,
    transportBaselineAddEur: 8,
    municipalPerAdultEur: 36,
    competitivenessBase: 0.28,
    setupTravelMult: 1.14,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1.08,
    serviceCostsBundleEur: 118,
    optionalExtrasMult: 1.1,
    setupUtilityInternetBaseEur: 385,
    setupAdminHeavyAddonEur: 420,
    schoolReservePerChildEur: 95,
    shortStayOverlapRentFraction: 0.38,
  },
  utrecht: {
    rentAnchorMult: 1.06,
    groceriesMult: 1.06,
    utilitiesMult: 1.05,
    transportBaselineAddEur: 6,
    municipalPerAdultEur: 35,
    competitivenessBase: 0.24,
    setupTravelMult: 1.1,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1.06,
    serviceCostsBundleEur: 108,
    optionalExtrasMult: 1.07,
    setupUtilityInternetBaseEur: 360,
    setupAdminHeavyAddonEur: 380,
    schoolReservePerChildEur: 88,
    shortStayOverlapRentFraction: 0.34,
  },
  haarlem: {
    rentAnchorMult: 1.05,
    groceriesMult: 1.05,
    utilitiesMult: 1.05,
    transportBaselineAddEur: 5,
    municipalPerAdultEur: 35,
    competitivenessBase: 0.22,
    setupTravelMult: 1.08,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1.05,
    serviceCostsBundleEur: 104,
    optionalExtrasMult: 1.06,
    setupUtilityInternetBaseEur: 352,
    setupAdminHeavyAddonEur: 360,
    schoolReservePerChildEur: 86,
    shortStayOverlapRentFraction: 0.33,
  },
  amstelveen: {
    rentAnchorMult: 1.07,
    groceriesMult: 1.07,
    utilitiesMult: 1.06,
    transportBaselineAddEur: 7,
    municipalPerAdultEur: 36,
    competitivenessBase: 0.23,
    setupTravelMult: 1.1,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1.06,
    serviceCostsBundleEur: 110,
    optionalExtrasMult: 1.08,
    setupUtilityInternetBaseEur: 368,
    setupAdminHeavyAddonEur: 390,
    schoolReservePerChildEur: 90,
    shortStayOverlapRentFraction: 0.35,
  },
  "the-hague": {
    rentAnchorMult: 1.02,
    groceriesMult: 1.04,
    utilitiesMult: 1.04,
    transportBaselineAddEur: 4,
    municipalPerAdultEur: 34,
    competitivenessBase: 0.18,
    setupTravelMult: 1.05,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1.03,
    serviceCostsBundleEur: 98,
    optionalExtrasMult: 1.04,
    setupUtilityInternetBaseEur: 335,
    setupAdminHeavyAddonEur: 340,
    schoolReservePerChildEur: 82,
    shortStayOverlapRentFraction: 0.3,
  },
  leiden: {
    rentAnchorMult: 1.01,
    groceriesMult: 1.03,
    utilitiesMult: 1.03,
    transportBaselineAddEur: 3,
    municipalPerAdultEur: 33,
    competitivenessBase: 0.17,
    setupTravelMult: 1.04,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1.02,
    serviceCostsBundleEur: 94,
    optionalExtrasMult: 1.03,
    setupUtilityInternetBaseEur: 328,
    setupAdminHeavyAddonEur: 330,
    schoolReservePerChildEur: 80,
    shortStayOverlapRentFraction: 0.29,
  },
  delft: {
    rentAnchorMult: 1.01,
    groceriesMult: 1.03,
    utilitiesMult: 1.03,
    transportBaselineAddEur: 3,
    municipalPerAdultEur: 33,
    competitivenessBase: 0.17,
    setupTravelMult: 1.04,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1.02,
    serviceCostsBundleEur: 94,
    optionalExtrasMult: 1.03,
    setupUtilityInternetBaseEur: 328,
    setupAdminHeavyAddonEur: 330,
    schoolReservePerChildEur: 80,
    shortStayOverlapRentFraction: 0.29,
  },
  rotterdam: {
    rentAnchorMult: 0.98,
    groceriesMult: 1.01,
    utilitiesMult: 1.01,
    transportBaselineAddEur: 2,
    municipalPerAdultEur: 32,
    competitivenessBase: 0.14,
    setupTravelMult: 1.02,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1,
    serviceCostsBundleEur: 86,
    optionalExtrasMult: 1,
    setupUtilityInternetBaseEur: 305,
    setupAdminHeavyAddonEur: 300,
    schoolReservePerChildEur: 74,
    shortStayOverlapRentFraction: 0.26,
  },
  eindhoven: {
    rentAnchorMult: 0.97,
    groceriesMult: 0.99,
    utilitiesMult: 0.99,
    transportBaselineAddEur: 1,
    municipalPerAdultEur: 31,
    competitivenessBase: 0.12,
    setupTravelMult: 1,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 0.99,
    serviceCostsBundleEur: 80,
    optionalExtrasMult: 0.98,
    setupUtilityInternetBaseEur: 292,
    setupAdminHeavyAddonEur: 280,
    schoolReservePerChildEur: 70,
    shortStayOverlapRentFraction: 0.24,
  },
  groningen: {
    rentAnchorMult: 0.93,
    groceriesMult: 0.97,
    utilitiesMult: 0.98,
    transportBaselineAddEur: 0,
    municipalPerAdultEur: 30,
    competitivenessBase: 0.1,
    setupTravelMult: 0.97,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 0.97,
    serviceCostsBundleEur: 72,
    optionalExtrasMult: 0.95,
    setupUtilityInternetBaseEur: 278,
    setupAdminHeavyAddonEur: 260,
    schoolReservePerChildEur: 66,
    shortStayOverlapRentFraction: 0.22,
  },
  breda: {
    rentAnchorMult: 0.92,
    groceriesMult: 0.97,
    utilitiesMult: 0.97,
    transportBaselineAddEur: 0,
    municipalPerAdultEur: 30,
    competitivenessBase: 0.1,
    setupTravelMult: 0.96,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 0.96,
    serviceCostsBundleEur: 70,
    optionalExtrasMult: 0.94,
    setupUtilityInternetBaseEur: 275,
    setupAdminHeavyAddonEur: 255,
    schoolReservePerChildEur: 65,
    shortStayOverlapRentFraction: 0.21,
  },
  other: {
    rentAnchorMult: 1,
    groceriesMult: 0.99,
    utilitiesMult: 0.99,
    transportBaselineAddEur: 1,
    municipalPerAdultEur: 31,
    competitivenessBase: 0.11,
    setupTravelMult: 1,
    depositMonthsTendency: 2,
    agencyFeeTendencyMult: 1,
    serviceCostsBundleEur: 82,
    optionalExtrasMult: 0.99,
    setupUtilityInternetBaseEur: 300,
    setupAdminHeavyAddonEur: 290,
    schoolReservePerChildEur: 72,
    shortStayOverlapRentFraction: 0.26,
  },
};

/** Lifestyle tier: scales discretionary lines and rent-ratio guardrails (not eligibility). */
export const LIFESTYLE_TIER_CONFIG: Record<
  LifestyleTier,
  {
    diningLeisureMult: number;
    subsMiscMult: number;
    travelDiscMult: number;
    /** Extra flat buffer before rent (€), on top of share-based buffer. */
    emergencyFlatEur: number;
    emergencyShareOfNet: number;
  }
> = {
  essential: {
    diningLeisureMult: 0.82,
    subsMiscMult: 0.78,
    travelDiscMult: 0.85,
    emergencyFlatEur: 140,
    emergencyShareOfNet: 0.04,
  },
  balanced: {
    diningLeisureMult: 1,
    subsMiscMult: 1,
    travelDiscMult: 1,
    emergencyFlatEur: 260,
    emergencyShareOfNet: 0.065,
  },
  comfortable: {
    diningLeisureMult: 1.28,
    subsMiscMult: 1.22,
    travelDiscMult: 1.18,
    emergencyFlatEur: 380,
    emergencyShareOfNet: 0.09,
  },
};

/**
 * Rent affordability bands: buffer + max share of net for rent (before landlord cap & competitiveness).
 * comfortable = most conservative; stretch = most aggressive.
 */
export const AFFORDABILITY_BAND_PARAMS = {
  comfortable: { bufferFlatEur: 480, bufferShareNet: 0.11, netRentShareCap: 0.22 },
  essential: { bufferFlatEur: 400, bufferShareNet: 0.095, netRentShareCap: 0.24 },
  balanced: { bufferFlatEur: 280, bufferShareNet: 0.062, netRentShareCap: 0.32 },
  stretch: { bufferFlatEur: 110, bufferShareNet: 0.028, netRentShareCap: 0.39 },
} as const;

/**
 * Childcare placeholder: fraction of city full-time mid per child when user enables placeholder (no fixed fee entered).
 * Higher than a light part-time slice so toggling childcare visibly moves monthly totals for expat planning.
 */
export const CHILDCARE_PLACEHOLDER_FACTOR = 0.72;

/** Extra shape on top of COL rent mids so housing mode spreads are obvious in the UI. */
export const HOUSING_RENT_SHAPE_MULT: Record<HousingMode, number> = {
  room_shared: 0.92,
  studio: 1,
  apartment_1br: 1,
  apartment_2br: 1.1,
  family_home_3br: 1.26,
};

/** Studio maps to 1-bed COL anchor; this factor approximates studio vs 1-bed listing gap. */
export const STUDIO_VS_ONE_BED_RENT_FACTOR = 0.79;

export const PET_MONTHLY_PLANNING_EUR = 72;

/** OV + bike style defaults layered on city transport baseline. */
export const TRANSPORT_MODE_OVERLAY_EUR: Record<TransportMode, { ov: number; bike: number; car: number; nsFactor: number }> = {
  bike_pt: { ov: 72, bike: 18, car: 0, nsFactor: 0.35 },
  pt_only: { ov: 92, bike: 0, car: 0, nsFactor: 1 },
  car: { ov: 0, bike: 0, car: 268, nsFactor: 0 },
  hybrid: { ov: 52, bike: 10, car: 118, nsFactor: 0.55 },
};

export function housingModeToColHousingMode(h: HousingMode): ColHousingMode {
  switch (h) {
    case "room_shared":
      return "room_shared";
    case "studio":
      return "apartment_1bed";
    case "apartment_1br":
      return "apartment_1bed";
    case "apartment_2br":
      return "apartment_2bed";
    case "family_home_3br":
      return "apartment_3bed_family";
    default:
      return "apartment_1bed";
  }
}

export function resolveHouseholdCounts(
  householdType: HouseholdType,
  adultsCustom: number,
  childrenCustom: number
): { adults: number; children: number } {
  switch (householdType) {
    case "single":
      return { adults: 1, children: 0 };
    case "couple":
      return { adults: 2, children: 0 };
    case "family_1_child":
      return { adults: 2, children: 1 };
    case "family_2_children":
      return { adults: 2, children: 2 };
    default:
      return {
        adults: Math.min(5, Math.max(1, Math.round(adultsCustom))),
        children: Math.min(6, Math.max(0, Math.round(childrenCustom))),
      };
  }
}

/** Scales two-adult utilities baseline to household size (planning curve, not meter data). */
export function householdUtilityScale(adults: number, children: number): number {
  return 0.52 + 0.24 * Math.min(adults, 2) + 0.12 * Math.max(0, adults - 2) + 0.08 * children;
}

/**
 * Competitiveness moderation factor applied to affordable rent bands (tighter markets → slightly lower caps).
 */
export function competitivenessModerationFactor(city: RaCity, neighborhood: NeighborhoodCostBand): number {
  const c = CITY_PLANNING[city];
  const n = NEIGHBORHOOD_MODIFIERS[neighborhood];
  const score = Math.min(0.45, Math.max(0, c.competitivenessBase + n.competitivenessDelta));
  return 1 - score * 0.35;
}

export function getCityPlanning(city: RaCity) {
  return CITY_PLANNING[city];
}
