import { DEFAULT_INTEGRATION_REQUIREMENT_INPUT, type IntegrationRequirementInput } from "./types";

const STORAGE_KEY = "expatlife-integration-requirement-inputs-v1";

const BASIS = new Set(["hsm", "family", "asylum_or_other", "student_or_temp", "already_permanent", "other", "unsure"]);
const OBLIGATION = new Set(["yes_obligated", "no_not_obligated", "unsure"]);
const COHORT = new Set(["wi2021", "older_wi2013", "unsure"]);
const GOAL = new Set(["obligation_only", "permanent_residence", "citizenship", "both_pr_citizenship", "unsure"]);
const EXEMPTION = new Set(["dutch_diploma_possible", "exemption_exploring", "none_known", "unsure"]);
const YEARS = new Set(["under_1", "one_to_three", "three_plus", "unsure"]);

function pick<T extends string>(value: string | null | undefined, allowed: Set<string>, fallback: T): T {
  if (value && allowed.has(value)) return value as T;
  return fallback;
}

export function sanitizeIntegrationRequirementInput(
  partial: Partial<IntegrationRequirementInput>
): IntegrationRequirementInput {
  const base = { ...DEFAULT_INTEGRATION_REQUIREMENT_INPUT, ...partial };
  return {
    residenceBasis: pick(base.residenceBasis, BASIS, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.residenceBasis),
    obligationLetter: pick(base.obligationLetter, OBLIGATION, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.obligationLetter),
    cohort: pick(base.cohort, COHORT, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.cohort),
    goal: pick(base.goal, GOAL, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.goal),
    exemptionSignal: pick(base.exemptionSignal, EXEMPTION, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.exemptionSignal),
    yearsInNl: pick(base.yearsInNl, YEARS, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.yearsInNl),
  };
}

export function integrationRequirementToSearchParams(input: IntegrationRequirementInput): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("basis", input.residenceBasis);
  sp.set("obligation", input.obligationLetter);
  sp.set("cohort", input.cohort);
  sp.set("goal", input.goal);
  sp.set("exemption", input.exemptionSignal);
  sp.set("years", input.yearsInNl);
  return sp;
}

export function hasIntegrationRequirementUrlParams(sp: URLSearchParams): boolean {
  return ["basis", "obligation", "cohort", "goal", "exemption", "years"].some((k) => sp.has(k));
}

export function parseIntegrationRequirementSearchParams(sp: URLSearchParams): Partial<IntegrationRequirementInput> {
  return sanitizeIntegrationRequirementInput({
    residenceBasis: pick(sp.get("basis"), BASIS, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.residenceBasis),
    obligationLetter: pick(sp.get("obligation"), OBLIGATION, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.obligationLetter),
    cohort: pick(sp.get("cohort"), COHORT, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.cohort),
    goal: pick(sp.get("goal"), GOAL, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.goal),
    exemptionSignal: pick(sp.get("exemption"), EXEMPTION, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.exemptionSignal),
    yearsInNl: pick(sp.get("years"), YEARS, DEFAULT_INTEGRATION_REQUIREMENT_INPUT.yearsInNl),
  });
}

export function saveIntegrationRequirementToStorage(input: IntegrationRequirementInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadIntegrationRequirementFromStorage(): Partial<IntegrationRequirementInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeIntegrationRequirementInput(JSON.parse(raw) as Partial<IntegrationRequirementInput>);
  } catch {
    return null;
  }
}
