import { clampInt } from "./helpers";
import { DEFAULT_DOUBLE_TAX_AWARENESS_INPUT } from "./types";
import type { DoubleTaxAwarenessInput, IncomeType, PlanningFocus } from "./types";

const PLANNING_FOCUS_VALUES = new Set<PlanningFocus>([
  "file_two_countries",
  "which_country_salary",
  "foreign_rental_investments",
  "moved_mid_year",
  "treaty_relief",
  "not_sure",
]);

const STORAGE_KEY = "expatcopilot-double-tax-awareness-v1";

function decodeBase64Url(value: string): string | null {
  try {
    let b64 = value.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    return decodeURIComponent(escape(atob(b64)));
  } catch {
    return null;
  }
}

function encodeBase64Url(value: string): string {
  return btoa(unescape(encodeURIComponent(value))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

const INCOME_TYPES: IncomeType[] = [
  "salary_dutch_employer",
  "salary_foreign_employer",
  "salary_remote_work",
  "freelance_self_employed",
  "rental_income_nl",
  "rental_income_abroad",
  "dividends_investments",
  "foreign_business_income",
  "pension_income",
  "other_mixed",
];

export function sanitizeDoubleTaxInput(partial: Partial<DoubleTaxAwarenessInput> | null | undefined): DoubleTaxAwarenessInput {
  const base = DEFAULT_DOUBLE_TAX_AWARENESS_INPUT;
  const p = partial ?? {};
  const incomeTypes = Array.isArray(p.incomeTypes) ? p.incomeTypes.filter((type): type is IncomeType => INCOME_TYPES.includes(type)) : base.incomeTypes;
  return {
    ...base,
    ...p,
    taxYear: clampInt(Number(p.taxYear ?? base.taxYear), 2026, 2100),
    monthsInNetherlands: clampInt(Number(p.monthsInNetherlands ?? base.monthsInNetherlands), 0, 12),
    monthsInOtherMainCountry: clampInt(Number(p.monthsInOtherMainCountry ?? base.monthsInOtherMainCountry), 0, 12),
    approxDaysInNl:
      p.approxDaysInNl == null || (typeof p.approxDaysInNl === "string" && p.approxDaysInNl === "")
        ? null
        : clampInt(Number(p.approxDaysInNl), 0, 366),
    approxDaysInOtherCountry:
      p.approxDaysInOtherCountry == null || (typeof p.approxDaysInOtherCountry === "string" && p.approxDaysInOtherCountry === "")
        ? null
        : clampInt(Number(p.approxDaysInOtherCountry), 0, 366),
    incomeTypes: incomeTypes.length ? incomeTypes : base.incomeTypes,
    mainOtherCountryCode: String((p.mainOtherCountryCode ?? base.mainOtherCountryCode) || "none"),
    employerCountryCode: String((p.employerCountryCode ?? base.employerCountryCode) || "none"),
    rentalIncomeCountryCode: String((p.rentalIncomeCountryCode ?? base.rentalIncomeCountryCode) || "none"),
    investmentIncomeCountryCode: String((p.investmentIncomeCountryCode ?? base.investmentIncomeCountryCode) || "none"),
    userNotes: typeof p.userNotes === "string" ? p.userNotes.slice(0, 4000) : base.userNotes,
    planningFocus:
      p.planningFocus != null && PLANNING_FOCUS_VALUES.has(p.planningFocus as PlanningFocus)
        ? (p.planningFocus as PlanningFocus)
        : base.planningFocus ?? null,
  };
}

export function encodeDoubleTaxInputToParam(input: DoubleTaxAwarenessInput): string {
  return encodeBase64Url(JSON.stringify(input));
}

export function decodeDoubleTaxParam(param: string): Partial<DoubleTaxAwarenessInput> | null {
  const json = decodeBase64Url(param);
  if (!json) return null;
  try {
    const parsed = JSON.parse(json) as Partial<DoubleTaxAwarenessInput>;
    return typeof parsed === "object" && parsed ? parsed : null;
  } catch {
    return null;
  }
}

export function doubleTaxInputToSearchParams(input: DoubleTaxAwarenessInput): URLSearchParams {
  const params = new URLSearchParams();
  params.set("s", encodeDoubleTaxInputToParam(input));
  return params;
}

export function parseDoubleTaxSearchParams(params: URLSearchParams): Partial<DoubleTaxAwarenessInput> {
  const encoded = params.get("s");
  if (!encoded) return {};
  return decodeDoubleTaxParam(encoded) ?? {};
}

export function hasDoubleTaxUrlParams(params: URLSearchParams): boolean {
  return params.has("s");
}

export function saveDoubleTaxToStorage(input: DoubleTaxAwarenessInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    // Ignore storage failures.
  }
}

export function loadDoubleTaxFromStorage(): Partial<DoubleTaxAwarenessInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<DoubleTaxAwarenessInput>;
    return typeof parsed === "object" && parsed ? parsed : null;
  } catch {
    return null;
  }
}

export { STORAGE_KEY as DOUBLE_TAX_STORAGE_KEY };
