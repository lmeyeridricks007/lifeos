import type { RaCity, RaInputs, RaLandlordRule, RulingPlanningAssumption } from "@/src/types/tools/rent-affordability";
import { RA_DEFAULT_INPUTS, mergeRaInputs } from "./defaultInputs";

const STORAGE_KEY = "expatcopilot-rent-affordability-v1";

const CITIES = [
  "amsterdam",
  "rotterdam",
  "the-hague",
  "utrecht",
  "eindhoven",
  "haarlem",
  "leiden",
  "delft",
  "groningen",
  "breda",
  "amstelveen",
  "other",
] as const satisfies readonly RaCity[];

function pickEnum<T extends string>(v: unknown, allowed: readonly T[], fallback: T): T {
  return typeof v === "string" && (allowed as readonly string[]).includes(v) ? (v as T) : fallback;
}

function clampInt(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, Math.round(n)));
}

function parseLandlordRule(v: unknown): RaLandlordRule {
  const n = Number(v);
  if (n === 3) return 3;
  if (n === 4) return 4;
  return 3.5;
}

function parseRulingAssumption(v: unknown, legacyApply30: boolean): RulingPlanningAssumption {
  if (v === "no" || v === "maybe" || v === "yes") return v;
  return legacyApply30 ? "yes" : RA_DEFAULT_INPUTS.rulingAssumption;
}

export function encodeRaInputToParam(input: RaInputs): string {
  const json = JSON.stringify(input);
  if (typeof btoa === "undefined") return "";
  const b64 = btoa(unescape(encodeURIComponent(json)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeRaParam(param: string): Partial<RaInputs> | null {
  try {
    let b64 = param.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const json = decodeURIComponent(escape(atob(b64)));
    const o = JSON.parse(json) as RaInputs;
    return typeof o === "object" && o ? o : null;
  } catch {
    return null;
  }
}

export function sanitizeRaInput(partial: Partial<RaInputs> | null | undefined): RaInputs {
  if (!partial || typeof partial !== "object") return { ...RA_DEFAULT_INPUTS };
  const p = partial as Record<string, unknown>;

  return mergeRaInputs({
    toolMode: pickEnum(p.toolMode, ["max_rent", "salary_for_rent"] as const, RA_DEFAULT_INPUTS.toolMode),
    incomeBasis: pickEnum(p.incomeBasis, ["net", "gross"] as const, RA_DEFAULT_INPUTS.incomeBasis),
    incomeEntryMode: pickEnum(
      p.incomeEntryMode,
      ["single_income", "combined_household_income", "primary_plus_partial_partner"] as const,
      RA_DEFAULT_INPUTS.incomeEntryMode
    ),
    partnerContributionShare: Math.min(
      1,
      Math.max(0, Number(p.partnerContributionShare ?? RA_DEFAULT_INPUTS.partnerContributionShare))
    ),
    monthlyNet: clampInt(Number(p.monthlyNet ?? RA_DEFAULT_INPUTS.monthlyNet), 0, 120_000),
    monthlyGross: clampInt(Number(p.monthlyGross ?? RA_DEFAULT_INPUTS.monthlyGross), 0, 150_000),
    grossAnnual: clampInt(Number(p.grossAnnual ?? RA_DEFAULT_INPUTS.grossAnnual), 0, 2_000_000),
    bonusAnnual: clampInt(Number(p.bonusAnnual ?? RA_DEFAULT_INPUTS.bonusAnnual), 0, 500_000),
    landlordBonusCounts: Boolean(p.landlordBonusCounts ?? RA_DEFAULT_INPUTS.landlordBonusCounts),
    landlordForeignIncomeAcceptedShare: Math.min(
      1,
      Math.max(
        0,
        Number(p.landlordForeignIncomeAcceptedShare ?? RA_DEFAULT_INPUTS.landlordForeignIncomeAcceptedShare)
      )
    ),
    contractProfile: pickEnum(
      p.contractProfile,
      ["both_permanent", "one_permanent_one_temporary", "self_employed_or_contractor"] as const,
      RA_DEFAULT_INPUTS.contractProfile
    ),
    includeHolidayAllowanceInGross: Boolean(p.includeHolidayAllowanceInGross ?? RA_DEFAULT_INPUTS.includeHolidayAllowanceInGross),
    apply30PercentRulingPlanning: Boolean(p.apply30PercentRulingPlanning ?? RA_DEFAULT_INPUTS.apply30PercentRulingPlanning),
    rulingAssumption: parseRulingAssumption(
      p.rulingAssumption,
      Boolean(p.apply30PercentRulingPlanning ?? RA_DEFAULT_INPUTS.apply30PercentRulingPlanning)
    ),
    householdPreset: pickEnum(
      p.householdPreset,
      ["single", "couple", "family1", "family2", "custom"] as const,
      RA_DEFAULT_INPUTS.householdPreset
    ),
    adultsCount: clampInt(Number(p.adultsCount ?? RA_DEFAULT_INPUTS.adultsCount), 1, 5),
    childrenCount: clampInt(Number(p.childrenCount ?? RA_DEFAULT_INPUTS.childrenCount), 0, 6),
    city: pickEnum(p.city, CITIES, RA_DEFAULT_INPUTS.city),
    neighborhoodTier: pickEnum(
      p.neighborhoodTier,
      ["premium", "standard", "outer", "commuter"] as const,
      RA_DEFAULT_INPUTS.neighborhoodTier
    ),
    housingType: pickEnum(
      p.housingType,
      [
        "room_shared",
        "studio",
        "apartment_1bed",
        "apartment_2bed",
        "apartment_3bed_family",
      ] as const,
      RA_DEFAULT_INPUTS.housingType
    ),
    rentMode: pickEnum(p.rentMode, ["target", "model"] as const, RA_DEFAULT_INPUTS.rentMode),
    targetRentEur: clampInt(Number(p.targetRentEur ?? RA_DEFAULT_INPUTS.targetRentEur), 0, 50_000),
    includeServiceCosts: Boolean(p.includeServiceCosts ?? RA_DEFAULT_INPUTS.includeServiceCosts),
    includeParking: Boolean(p.includeParking ?? RA_DEFAULT_INPUTS.includeParking),
    includeFurnishedPremium: Boolean(p.includeFurnishedPremium ?? RA_DEFAULT_INPUTS.includeFurnishedPremium),
    transportMode: pickEnum(
      p.transportMode,
      ["bike_pt", "pt_only", "car", "hybrid"] as const,
      RA_DEFAULT_INPUTS.transportMode
    ),
    includeChildcarePlaceholder: Boolean(
      p.includeChildcarePlaceholder ?? RA_DEFAULT_INPUTS.includeChildcarePlaceholder
    ),
    childcareMode: pickEnum(
      p.childcareMode,
      ["off", "placeholder", "manual"] as const,
      RA_DEFAULT_INPUTS.childcareMode
    ),
    childcareIntensity: pickEnum(
      p.childcareIntensity,
      ["part_time", "full_time"] as const,
      RA_DEFAULT_INPUTS.childcareIntensity
    ),
    includePet: Boolean(p.includePet ?? RA_DEFAULT_INPUTS.includePet),
    includeGymSport: Boolean(p.includeGymSport ?? RA_DEFAULT_INPUTS.includeGymSport),
    includeSupplementaryHealth: Boolean(p.includeSupplementaryHealth ?? RA_DEFAULT_INPUTS.includeSupplementaryHealth),
    includeStreamingExtras: Boolean(p.includeStreamingExtras ?? RA_DEFAULT_INPUTS.includeStreamingExtras),
    includeTaxFilingReserve: Boolean(p.includeTaxFilingReserve ?? RA_DEFAULT_INPUTS.includeTaxFilingReserve),
    includeTravelHomeReserve: Boolean(p.includeTravelHomeReserve ?? RA_DEFAULT_INPUTS.includeTravelHomeReserve),
    includeSchoolCostReserve: Boolean(p.includeSchoolCostReserve ?? RA_DEFAULT_INPUTS.includeSchoolCostReserve),
    includeHomeContentsLiabilityInsurance: Boolean(
      p.includeHomeContentsLiabilityInsurance ?? RA_DEFAULT_INPUTS.includeHomeContentsLiabilityInsurance
    ),
    fixedDebt: clampInt(Number(p.fixedDebt ?? RA_DEFAULT_INPUTS.fixedDebt), 0, 25_000),
    fixedChildcare: clampInt(Number(p.fixedChildcare ?? RA_DEFAULT_INPUTS.fixedChildcare), 0, 25_000),
    fixedAlimony: clampInt(Number(p.fixedAlimony ?? RA_DEFAULT_INPUTS.fixedAlimony), 0, 25_000),
    fixedSubscriptions: clampInt(Number(p.fixedSubscriptions ?? RA_DEFAULT_INPUTS.fixedSubscriptions), 0, 10_000),
    fixedCar: clampInt(Number(p.fixedCar ?? RA_DEFAULT_INPUTS.fixedCar), 0, 10_000),
    fixedManualExtra: clampInt(Number(p.fixedManualExtra ?? RA_DEFAULT_INPUTS.fixedManualExtra), 0, 25_000),
    lifestyle: pickEnum(p.lifestyle, ["minimal", "balanced", "comfortable"] as const, RA_DEFAULT_INPUTS.lifestyle),
    landlordRuleMultiplier: parseLandlordRule(p.landlordRuleMultiplier),
    setupDeposit: Boolean(p.setupDeposit ?? RA_DEFAULT_INPUTS.setupDeposit),
    setupFirstMonth: Boolean(p.setupFirstMonth ?? RA_DEFAULT_INPUTS.setupFirstMonth),
    setupFurniture: Boolean(p.setupFurniture ?? RA_DEFAULT_INPUTS.setupFurniture),
    setupAgencyFees: Boolean(p.setupAgencyFees ?? RA_DEFAULT_INPUTS.setupAgencyFees),
    setupMoveTravel: Boolean(p.setupMoveTravel ?? RA_DEFAULT_INPUTS.setupMoveTravel),
    setupVisaAdminHeavy: Boolean(p.setupVisaAdminHeavy ?? RA_DEFAULT_INPUTS.setupVisaAdminHeavy),
    setupChildcareSchoolRegistration: Boolean(
      p.setupChildcareSchoolRegistration ?? RA_DEFAULT_INPUTS.setupChildcareSchoolRegistration
    ),
    setupPetRelocation: Boolean(p.setupPetRelocation ?? RA_DEFAULT_INPUTS.setupPetRelocation),
    setupShortStayOverlap: Boolean(p.setupShortStayOverlap ?? RA_DEFAULT_INPUTS.setupShortStayOverlap),
    compareScenariosEnabled: Boolean(p.compareScenariosEnabled ?? RA_DEFAULT_INPUTS.compareScenariosEnabled),
    userNotes: typeof p.userNotes === "string" ? p.userNotes.slice(0, 4000) : RA_DEFAULT_INPUTS.userNotes,
  });
}

export function raInputToSearchParams(input: RaInputs): URLSearchParams {
  const q = new URLSearchParams();
  const enc = encodeRaInputToParam(input);
  if (enc) q.set("s", enc);
  return q;
}

export function parseRaSearchParams(searchParams: URLSearchParams): Partial<RaInputs> | null {
  const s = searchParams.get("s");
  if (!s) return null;
  return decodeRaParam(s);
}

export function hasRaUrlParams(searchParams: URLSearchParams): boolean {
  return Boolean(searchParams.get("s"));
}

export function saveRaToStorage(input: RaInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadRaFromStorage(): Partial<RaInputs> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Partial<RaInputs>;
  } catch {
    return null;
  }
}
