import { DEFAULT_EXIT_READINESS_INPUT, type ExitReadinessInput } from "./types";

const STORAGE_KEY = "expatlife-exit-readiness-inputs-v1";

const TIMING = new Set(["within_1_month", "one_to_three_months", "later", "unsure"]);
const ITEM = new Set(["done_or_planned", "not_started", "not_applicable", "unsure"]);

function pick<T extends string>(value: string | null | undefined, allowed: Set<string>, fallback: T): T {
  if (value && allowed.has(value)) return value as T;
  return fallback;
}

export function sanitizeExitReadinessInput(partial: Partial<ExitReadinessInput>): ExitReadinessInput {
  const base = { ...DEFAULT_EXIT_READINESS_INPUT, ...partial };
  return {
    departureTiming: pick(base.departureTiming, TIMING, DEFAULT_EXIT_READINESS_INPUT.departureTiming),
    municipalityDeregistration: pick(
      base.municipalityDeregistration,
      ITEM,
      DEFAULT_EXIT_READINESS_INPUT.municipalityDeregistration
    ),
    housingLease: pick(base.housingLease, ITEM, DEFAULT_EXIT_READINESS_INPUT.housingLease),
    healthInsurance: pick(base.healthInsurance, ITEM, DEFAULT_EXIT_READINESS_INPUT.healthInsurance),
    toeslagen: pick(base.toeslagen, ITEM, DEFAULT_EXIT_READINESS_INPUT.toeslagen),
    employerPayroll: pick(base.employerPayroll, ITEM, DEFAULT_EXIT_READINESS_INPUT.employerPayroll),
    taxRecords: pick(base.taxRecords, ITEM, DEFAULT_EXIT_READINESS_INPUT.taxRecords),
    bankContracts: pick(base.bankContracts, ITEM, DEFAULT_EXIT_READINESS_INPUT.bankContracts),
    destinationRegistration: pick(
      base.destinationRegistration,
      ITEM,
      DEFAULT_EXIT_READINESS_INPUT.destinationRegistration
    ),
  };
}

export function exitReadinessToSearchParams(input: ExitReadinessInput): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("timing", input.departureTiming);
  sp.set("dereg", input.municipalityDeregistration);
  sp.set("housing", input.housingLease);
  sp.set("health", input.healthInsurance);
  sp.set("toeslagen", input.toeslagen);
  sp.set("payroll", input.employerPayroll);
  sp.set("tax", input.taxRecords);
  sp.set("bank", input.bankContracts);
  sp.set("dest", input.destinationRegistration);
  return sp;
}

export function hasExitReadinessUrlParams(sp: URLSearchParams): boolean {
  return ["timing", "dereg", "housing", "health", "toeslagen", "payroll", "tax", "bank", "dest"].some((k) => sp.has(k));
}

export function parseExitReadinessSearchParams(sp: URLSearchParams): Partial<ExitReadinessInput> {
  return sanitizeExitReadinessInput({
    departureTiming: pick(sp.get("timing"), TIMING, DEFAULT_EXIT_READINESS_INPUT.departureTiming),
    municipalityDeregistration: pick(sp.get("dereg"), ITEM, DEFAULT_EXIT_READINESS_INPUT.municipalityDeregistration),
    housingLease: pick(sp.get("housing"), ITEM, DEFAULT_EXIT_READINESS_INPUT.housingLease),
    healthInsurance: pick(sp.get("health"), ITEM, DEFAULT_EXIT_READINESS_INPUT.healthInsurance),
    toeslagen: pick(sp.get("toeslagen"), ITEM, DEFAULT_EXIT_READINESS_INPUT.toeslagen),
    employerPayroll: pick(sp.get("payroll"), ITEM, DEFAULT_EXIT_READINESS_INPUT.employerPayroll),
    taxRecords: pick(sp.get("tax"), ITEM, DEFAULT_EXIT_READINESS_INPUT.taxRecords),
    bankContracts: pick(sp.get("bank"), ITEM, DEFAULT_EXIT_READINESS_INPUT.bankContracts),
    destinationRegistration: pick(sp.get("dest"), ITEM, DEFAULT_EXIT_READINESS_INPUT.destinationRegistration),
  });
}

export function saveExitReadinessToStorage(input: ExitReadinessInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadExitReadinessFromStorage(): Partial<ExitReadinessInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeExitReadinessInput(JSON.parse(raw) as Partial<ExitReadinessInput>);
  } catch {
    return null;
  }
}
