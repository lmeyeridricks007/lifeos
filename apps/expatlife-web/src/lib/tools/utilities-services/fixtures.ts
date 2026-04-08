import { UTILITIES_SERVICES_DEFAULT_INPUT } from "./defaultInput";
import type { UtilitiesServicesInput } from "./types";

/** Fixtures use detailed planner so explicit shell/heating fields are honored by the engine (quick mode uses broader defaults). */
const D = { ...UTILITIES_SERVICES_DEFAULT_INPUT, plannerMode: "detailed" as const };

/** Deterministic inputs for tests and QA — do not mutate. */
export const utilitiesFixtures = {
  studioAmsterdam: {
    ...D,
    city: "amsterdam",
    housingType: "studio",
    sizeBand: "small",
    householdType: "single",
    adultsCount: 1,
    childrenCount: 0,
    utilitiesIncludedInRent: "no",
    landlordBuildingIncludesServices: "no",
  } satisfies UtilitiesServicesInput,

  familyHouseUtrecht: {
    ...D,
    city: "utrecht",
    housingType: "larger_house",
    sizeBand: "large",
    householdType: "family",
    adultsCount: 2,
    childrenCount: 2,
    heating: "gas",
    energyQuality: "average",
    mobileLines: 3,
    includeTvMedia: true,
    /** Explicit “self-contract” lease — default `unsure` would hedge energy as lease-dependent. */
    utilitiesIncludedInRent: "no",
    landlordBuildingIncludesServices: "no",
  } satisfies UtilitiesServicesInput,

  sharedUtilitiesIncluded: {
    ...D,
    city: "groningen",
    housingType: "apartment",
    sizeBand: "medium",
    householdType: "house_share",
    adultsCount: 3,
    childrenCount: 0,
    utilitiesIncludedInRent: "yes",
    landlordBuildingIncludesServices: "yes",
    includeInternet: true,
    includeMobile: true,
  } satisfies UtilitiesServicesInput,

  olderGasHeatedHome: {
    ...D,
    city: "rotterdam",
    housingType: "terraced",
    sizeBand: "medium",
    energyQuality: "low",
    heating: "gas",
    usageLevel: "high",
    householdType: "couple",
    adultsCount: 2,
    childrenCount: 0,
    utilitiesIncludedInRent: "no",
    landlordBuildingIncludesServices: "no",
  } satisfies UtilitiesServicesInput,

  remoteWorkerFastInternet: {
    ...D,
    city: "the-hague",
    housingType: "apartment",
    wfhHeavy: true,
    internetTier: "fast",
    usageLevel: "high",
    includeInternet: true,
    mobileLines: 2,
    utilitiesIncludedInRent: "no",
    landlordBuildingIncludesServices: "no",
  } satisfies UtilitiesServicesInput,

  ownerVsRenterBaseline: {
    ...D,
    city: "eindhoven",
    renterOrOwner: "owner",
    moveStage: "moving_soon",
    householdType: "couple",
    adultsCount: 2,
    childrenCount: 0,
  } satisfies UtilitiesServicesInput,
} as const;
