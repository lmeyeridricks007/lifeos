import { DEFAULT_DUAL_CITIZENSHIP_INPUT, type DualCitizenshipAwarenessInput } from "./types";

const STORAGE_KEY = "expatlife-dual-citizenship-awareness-inputs-v1";

const ROUTE = new Set(["naturalisation", "option_maybe", "unsure"]);
const HOME = new Set(["allows_renounce", "forbids_renounce", "auto_loss_on_dutch", "unsure"]);
const EXCEPTION = new Set([
  "none_known",
  "married_or_partner_dutch",
  "recognised_refugee",
  "cannot_renounce_home",
  "auto_loss_home",
  "other_listed",
  "unsure",
]);
const YES_NO_UNSURE = new Set(["yes", "no", "unsure"]);

function pick<T extends string>(value: string | null | undefined, allowed: Set<string>, fallback: T): T {
  if (value && allowed.has(value)) return value as T;
  return fallback;
}

export function sanitizeDualCitizenshipInput(partial: Partial<DualCitizenshipAwarenessInput>): DualCitizenshipAwarenessInput {
  const base = { ...DEFAULT_DUAL_CITIZENSHIP_INPUT, ...partial };
  return {
    routeFocus: pick(base.routeFocus, ROUTE, DEFAULT_DUAL_CITIZENSHIP_INPUT.routeFocus),
    homeCountryRenounce: pick(base.homeCountryRenounce, HOME, DEFAULT_DUAL_CITIZENSHIP_INPUT.homeCountryRenounce),
    possibleException: pick(base.possibleException, EXCEPTION, DEFAULT_DUAL_CITIZENSHIP_INPUT.possibleException),
    willingToRenounce: pick(base.willingToRenounce, YES_NO_UNSURE, DEFAULT_DUAL_CITIZENSHIP_INPUT.willingToRenounce),
    planLiveOutsideNlEuLong: pick(
      base.planLiveOutsideNlEuLong,
      YES_NO_UNSURE,
      DEFAULT_DUAL_CITIZENSHIP_INPUT.planLiveOutsideNlEuLong
    ),
    homeMilitaryOrInheritanceConcern: pick(
      base.homeMilitaryOrInheritanceConcern,
      YES_NO_UNSURE,
      DEFAULT_DUAL_CITIZENSHIP_INPUT.homeMilitaryOrInheritanceConcern
    ),
    alreadyDutchDual: pick(base.alreadyDutchDual, YES_NO_UNSURE, DEFAULT_DUAL_CITIZENSHIP_INPUT.alreadyDutchDual),
  };
}

export function dualInputToSearchParams(input: DualCitizenshipAwarenessInput): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("route", input.routeFocus);
  sp.set("home", input.homeCountryRenounce);
  sp.set("exception", input.possibleException);
  sp.set("willing", input.willingToRenounce);
  sp.set("abroad", input.planLiveOutsideNlEuLong);
  sp.set("homeDuties", input.homeMilitaryOrInheritanceConcern);
  sp.set("alreadyDual", input.alreadyDutchDual);
  return sp;
}

export function hasDualCitizenshipUrlParams(sp: URLSearchParams): boolean {
  return ["route", "home", "exception", "willing", "abroad", "homeDuties", "alreadyDual"].some((k) => sp.has(k));
}

export function parseDualCitizenshipSearchParams(sp: URLSearchParams): Partial<DualCitizenshipAwarenessInput> {
  return sanitizeDualCitizenshipInput({
    routeFocus: pick(sp.get("route"), ROUTE, DEFAULT_DUAL_CITIZENSHIP_INPUT.routeFocus),
    homeCountryRenounce: pick(sp.get("home"), HOME, DEFAULT_DUAL_CITIZENSHIP_INPUT.homeCountryRenounce),
    possibleException: pick(sp.get("exception"), EXCEPTION, DEFAULT_DUAL_CITIZENSHIP_INPUT.possibleException),
    willingToRenounce: pick(sp.get("willing"), YES_NO_UNSURE, DEFAULT_DUAL_CITIZENSHIP_INPUT.willingToRenounce),
    planLiveOutsideNlEuLong: pick(sp.get("abroad"), YES_NO_UNSURE, DEFAULT_DUAL_CITIZENSHIP_INPUT.planLiveOutsideNlEuLong),
    homeMilitaryOrInheritanceConcern: pick(
      sp.get("homeDuties"),
      YES_NO_UNSURE,
      DEFAULT_DUAL_CITIZENSHIP_INPUT.homeMilitaryOrInheritanceConcern
    ),
    alreadyDutchDual: pick(sp.get("alreadyDual"), YES_NO_UNSURE, DEFAULT_DUAL_CITIZENSHIP_INPUT.alreadyDutchDual),
  });
}

export function saveDualCitizenshipToStorage(input: DualCitizenshipAwarenessInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadDualCitizenshipFromStorage(): Partial<DualCitizenshipAwarenessInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeDualCitizenshipInput(JSON.parse(raw) as Partial<DualCitizenshipAwarenessInput>);
  } catch {
    return null;
  }
}
