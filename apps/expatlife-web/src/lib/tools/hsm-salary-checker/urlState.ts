import { DEFAULT_HSM_SALARY_INPUT, type HsmSalaryInput } from "./types";

const STORAGE_KEY = "expatlife-hsm-salary-checker-inputs-v1";

const AGE = new Set(["under_30", "thirty_plus", "unsure"]);
const REDUCED = new Set(["no", "yes_claim", "unsure"]);
const HOLIDAY = new Set(["no", "yes_or_mixed", "unsure"]);
const SPONSOR = new Set(["recognized", "not_recognized", "unsure"]);

function pick<T extends string>(value: string | null | undefined, allowed: Set<string>, fallback: T): T {
  if (value && allowed.has(value)) return value as T;
  return fallback;
}

function sanitizeGross(value: unknown): number {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n) || n < 0) return DEFAULT_HSM_SALARY_INPUT.grossMonthly;
  return Math.min(Math.round(n), 100_000);
}

export function sanitizeHsmSalaryInput(partial: Partial<HsmSalaryInput>): HsmSalaryInput {
  const base = { ...DEFAULT_HSM_SALARY_INPUT, ...partial };
  return {
    grossMonthly: sanitizeGross(base.grossMonthly),
    ageBand: pick(base.ageBand, AGE, DEFAULT_HSM_SALARY_INPUT.ageBand),
    reducedCriterion: pick(base.reducedCriterion, REDUCED, DEFAULT_HSM_SALARY_INPUT.reducedCriterion),
    holidayPayIncluded: pick(base.holidayPayIncluded, HOLIDAY, DEFAULT_HSM_SALARY_INPUT.holidayPayIncluded),
    sponsorStatus: pick(base.sponsorStatus, SPONSOR, DEFAULT_HSM_SALARY_INPUT.sponsorStatus),
  };
}

export function hsmSalaryToSearchParams(input: HsmSalaryInput): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("salary", String(input.grossMonthly));
  sp.set("age", input.ageBand);
  sp.set("reduced", input.reducedCriterion);
  sp.set("holiday", input.holidayPayIncluded);
  sp.set("sponsor", input.sponsorStatus);
  return sp;
}

export function hasHsmSalaryUrlParams(sp: URLSearchParams): boolean {
  return ["salary", "age", "reduced", "holiday", "sponsor"].some((k) => sp.has(k));
}

export function parseHsmSalarySearchParams(sp: URLSearchParams): Partial<HsmSalaryInput> {
  return sanitizeHsmSalaryInput({
    grossMonthly: sanitizeGross(sp.get("salary")),
    ageBand: pick(sp.get("age"), AGE, DEFAULT_HSM_SALARY_INPUT.ageBand),
    reducedCriterion: pick(sp.get("reduced"), REDUCED, DEFAULT_HSM_SALARY_INPUT.reducedCriterion),
    holidayPayIncluded: pick(sp.get("holiday"), HOLIDAY, DEFAULT_HSM_SALARY_INPUT.holidayPayIncluded),
    sponsorStatus: pick(sp.get("sponsor"), SPONSOR, DEFAULT_HSM_SALARY_INPUT.sponsorStatus),
  });
}

export function saveHsmSalaryToStorage(input: HsmSalaryInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadHsmSalaryFromStorage(): Partial<HsmSalaryInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeHsmSalaryInput(JSON.parse(raw) as Partial<HsmSalaryInput>);
  } catch {
    return null;
  }
}
