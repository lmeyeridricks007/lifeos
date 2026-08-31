import { DEFAULT_PR_ELIGIBILITY_INPUT, type PrEligibilityInput } from "./types";

const STORAGE_KEY = "expatlife-pr-eligibility-inputs-v1";

const RESIDENCE_YEARS = new Set(["under_3", "three_to_four", "about_five", "over_five", "unsure"]);
const PERMIT_TYPES = new Set([
  "hsm",
  "other_temporary_work",
  "family",
  "already_permanent",
  "eu_long_term",
  "other",
  "unsure",
]);
const CONTINUITY = new Set(["continuous_on_time", "job_search_used", "gaps_or_late", "unsure"]);
const ABSENCES = new Set(["none_or_short", "significant_months", "unsure"]);
const YES_NO_UNSURE = new Set(["yes", "no", "unsure"]);
const INTEGRATION = new Set([
  "diploma_a2_or_higher",
  "wi2021_certificate",
  "exemption",
  "in_progress",
  "not_started",
  "unsure",
]);
const PERMIT_VALID = new Set(["yes", "expiring_soon", "no", "unsure"]);

function pick<T extends string>(value: string | null, allowed: Set<string>, fallback: T): T {
  if (value && allowed.has(value)) return value as T;
  return fallback;
}

export function sanitizePrEligibilityInput(partial: Partial<PrEligibilityInput>): PrEligibilityInput {
  const base = { ...DEFAULT_PR_ELIGIBILITY_INPUT, ...partial };
  return {
    residenceYears: pick(base.residenceYears, RESIDENCE_YEARS, DEFAULT_PR_ELIGIBILITY_INPUT.residenceYears),
    permitType: pick(base.permitType, PERMIT_TYPES, DEFAULT_PR_ELIGIBILITY_INPUT.permitType),
    continuity: pick(base.continuity, CONTINUITY, DEFAULT_PR_ELIGIBILITY_INPUT.continuity),
    absences: pick(base.absences, ABSENCES, DEFAULT_PR_ELIGIBILITY_INPUT.absences),
    brpRegistered: pick(base.brpRegistered, YES_NO_UNSURE, DEFAULT_PR_ELIGIBILITY_INPUT.brpRegistered),
    integration: pick(base.integration, INTEGRATION, DEFAULT_PR_ELIGIBILITY_INPUT.integration),
    permitValid: pick(base.permitValid, PERMIT_VALID, DEFAULT_PR_ELIGIBILITY_INPUT.permitValid),
    age18Plus: pick(base.age18Plus, YES_NO_UNSURE, DEFAULT_PR_ELIGIBILITY_INPUT.age18Plus),
  };
}

export function prInputToSearchParams(input: PrEligibilityInput): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("years", input.residenceYears);
  sp.set("permit", input.permitType);
  sp.set("continuity", input.continuity);
  sp.set("absences", input.absences);
  sp.set("brp", input.brpRegistered);
  sp.set("integration", input.integration);
  sp.set("valid", input.permitValid);
  sp.set("age18", input.age18Plus);
  return sp;
}

export function hasPrEligibilityUrlParams(sp: URLSearchParams): boolean {
  return ["years", "permit", "continuity", "absences", "brp", "integration", "valid", "age18"].some((k) => sp.has(k));
}

export function parsePrEligibilitySearchParams(sp: URLSearchParams): Partial<PrEligibilityInput> {
  return sanitizePrEligibilityInput({
    residenceYears: pick(sp.get("years"), RESIDENCE_YEARS, DEFAULT_PR_ELIGIBILITY_INPUT.residenceYears),
    permitType: pick(sp.get("permit"), PERMIT_TYPES, DEFAULT_PR_ELIGIBILITY_INPUT.permitType),
    continuity: pick(sp.get("continuity"), CONTINUITY, DEFAULT_PR_ELIGIBILITY_INPUT.continuity),
    absences: pick(sp.get("absences"), ABSENCES, DEFAULT_PR_ELIGIBILITY_INPUT.absences),
    brpRegistered: pick(sp.get("brp"), YES_NO_UNSURE, DEFAULT_PR_ELIGIBILITY_INPUT.brpRegistered),
    integration: pick(sp.get("integration"), INTEGRATION, DEFAULT_PR_ELIGIBILITY_INPUT.integration),
    permitValid: pick(sp.get("valid"), PERMIT_VALID, DEFAULT_PR_ELIGIBILITY_INPUT.permitValid),
    age18Plus: pick(sp.get("age18"), YES_NO_UNSURE, DEFAULT_PR_ELIGIBILITY_INPUT.age18Plus),
  });
}

export function savePrEligibilityToStorage(input: PrEligibilityInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadPrEligibilityFromStorage(): Partial<PrEligibilityInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizePrEligibilityInput(JSON.parse(raw) as Partial<PrEligibilityInput>);
  } catch {
    return null;
  }
}
