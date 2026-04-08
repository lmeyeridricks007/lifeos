import { healthcarePremiumDefaultsByYear } from "./config/healthcarePremiumDefaultsByYear";
import type { HealthcareAllowanceInputs } from "./types";
import { HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS, mergeHealthcareAllowanceInputs } from "./defaultInputs";

const STORAGE_KEY = "expatcopilot-healthcare-allowance-v1";

function pickEnum<T extends string>(v: unknown, allowed: readonly T[], fallback: T): T {
  return typeof v === "string" && (allowed as readonly string[]).includes(v) ? (v as T) : fallback;
}

function clampInt(n: number, min: number, max: number, fallback: number): number {
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, Math.round(n)));
}

export function sanitizeHealthcareAllowanceInput(partial: Partial<HealthcareAllowanceInputs> | null | undefined): HealthcareAllowanceInputs {
  if (!partial || typeof partial !== "object") return { ...HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS };
  const p = partial as Record<string, unknown>;
  const taxYear = p.taxYear === 2026 ? 2026 : HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.taxYear;
  const premMax = healthcarePremiumDefaultsByYear[taxYear]?.manualPremiumMonthlyMax ?? 800;

  const allowanceMonthsRaw = p.allowanceMonthsThisYear;
  const allowanceMonthsThisYear =
    allowanceMonthsRaw === null || allowanceMonthsRaw === undefined
      ? null
      : clampInt(Number(allowanceMonthsRaw), 1, 12, 12);

  return mergeHealthcareAllowanceInputs({
    taxYear,
    age: clampInt(Number(p.age ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.age), 0, 120, HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.age),
    insuranceStatus: pickEnum(p.insuranceStatus, ["yes", "no", "starting_soon"] as const, HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.insuranceStatus),
    insuranceStartMonth: clampInt(
      Number(p.insuranceStartMonth ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.insuranceStartMonth),
      1,
      12,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.insuranceStartMonth
    ),
    insuredFullYear: Boolean(p.insuredFullYear ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.insuredFullYear),
    livingInNl: pickEnum(p.livingInNl, ["yes", "no"] as const, HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.livingInNl),
    entitledToDutchInsurance: pickEnum(
      p.entitledToDutchInsurance,
      ["yes", "no", "unsure"] as const,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.entitledToDutchInsurance
    ),
    premiumMode: pickEnum(p.premiumMode, ["average", "manual"] as const, HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.premiumMode),
    monthlyPremiumManual: clampInt(
      Number(p.monthlyPremiumManual ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.monthlyPremiumManual),
      0,
      premMax,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.monthlyPremiumManual
    ),
    householdType: pickEnum(
      p.householdType,
      ["single", "with_toeslagpartner"] as const,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.householdType
    ),
    partnerIncludedForYear: Boolean(p.partnerIncludedForYear ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.partnerIncludedForYear),
    partnerInsuredToo:
      p.partnerInsuredToo === true || p.partnerInsuredToo === false ? p.partnerInsuredToo : HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.partnerInsuredToo,
    incomeEntryMode: pickEnum(
      p.incomeEntryMode,
      ["annual", "monthly_gross"] as const,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.incomeEntryMode
    ),
    annualIncomeYou: clampInt(
      Number(p.annualIncomeYou ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.annualIncomeYou),
      0,
      2_000_000,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.annualIncomeYou
    ),
    monthlyGrossYou: clampInt(
      Number(p.monthlyGrossYou ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.monthlyGrossYou),
      0,
      200_000,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.monthlyGrossYou
    ),
    annualIncomePartner: clampInt(
      Number(p.annualIncomePartner ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.annualIncomePartner),
      0,
      2_000_000,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.annualIncomePartner
    ),
    monthlyGrossPartner: clampInt(
      Number(p.monthlyGrossPartner ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.monthlyGrossPartner),
      0,
      200_000,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.monthlyGrossPartner
    ),
    incomeNotSure: Boolean(p.incomeNotSure ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.incomeNotSure),
    assetsYouJan1: clampInt(
      Number(p.assetsYouJan1 ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.assetsYouJan1),
      0,
      5_000_000,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.assetsYouJan1
    ),
    assetsPartnerJan1: clampInt(
      Number(p.assetsPartnerJan1 ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.assetsPartnerJan1),
      0,
      5_000_000,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.assetsPartnerJan1
    ),
    allowanceMonthsThisYear,
    movingMidYear: Boolean(p.movingMidYear ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.movingMidYear),
    yearEstimateMode: pickEnum(
      p.yearEstimateMode,
      ["remaining", "full_year", "both"] as const,
      HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.yearEstimateMode
    ),
  });
}

export function encodeHealthcareAllowanceToParam(input: HealthcareAllowanceInputs): string {
  const json = JSON.stringify(input);
  if (typeof btoa === "undefined") return "";
  const b64 = btoa(unescape(encodeURIComponent(json)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeHealthcareAllowanceParam(param: string): Partial<HealthcareAllowanceInputs> | null {
  try {
    let b64 = param.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const json = decodeURIComponent(escape(atob(b64)));
    const o = JSON.parse(json) as HealthcareAllowanceInputs;
    return typeof o === "object" && o ? o : null;
  } catch {
    return null;
  }
}

export function haInputToSearchParams(input: HealthcareAllowanceInputs): URLSearchParams {
  const p = new URLSearchParams();
  const enc = encodeHealthcareAllowanceToParam(input);
  if (enc) p.set("s", enc);
  return p;
}

export function parseHealthcareAllowanceSearchParams(searchParams: URLSearchParams): Partial<HealthcareAllowanceInputs> | null {
  const raw = searchParams.get("s");
  if (!raw) return null;
  return decodeHealthcareAllowanceParam(raw);
}

export function hasHealthcareAllowanceUrlParams(searchParams: URLSearchParams): boolean {
  return Boolean(searchParams.get("s"));
}

export function saveHealthcareAllowanceToStorage(input: HealthcareAllowanceInputs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadHealthcareAllowanceFromStorage(): Partial<HealthcareAllowanceInputs> | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw) as HealthcareAllowanceInputs;
    return typeof o === "object" && o ? o : null;
  } catch {
    return null;
  }
}
