import { DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT, sanitizeEmploymentTypeScenarioInput } from "./defaults";
import type { EmploymentTypeScenarioInput } from "./types";

const STORAGE_KEY = "expatcopilot-employment-type-scenario-v1";
const PARAM_KEY = "ets";

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

export function encodeEmploymentTypeScenarioParam(input: EmploymentTypeScenarioInput): string {
  return encodeBase64Url(JSON.stringify(input));
}

export function decodeEmploymentTypeScenarioParam(param: string): Partial<EmploymentTypeScenarioInput> | null {
  const json = decodeBase64Url(param);
  if (!json) return null;
  try {
    const parsed = JSON.parse(json) as Partial<EmploymentTypeScenarioInput>;
    return typeof parsed === "object" && parsed ? parsed : null;
  } catch {
    return null;
  }
}

export function employmentTypeScenarioToSearchParams(input: EmploymentTypeScenarioInput): URLSearchParams {
  const params = new URLSearchParams();
  params.set(PARAM_KEY, encodeEmploymentTypeScenarioParam(input));
  return params;
}

export function parseEmploymentTypeScenarioSearchParams(params: URLSearchParams): Partial<EmploymentTypeScenarioInput> {
  const encoded = params.get(PARAM_KEY);
  if (!encoded) return {};
  return decodeEmploymentTypeScenarioParam(encoded) ?? {};
}

export function hasEmploymentTypeScenarioUrlParams(params: URLSearchParams): boolean {
  return Boolean(params.get(PARAM_KEY));
}

export function loadEmploymentTypeScenarioFromStorage(): Partial<EmploymentTypeScenarioInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<EmploymentTypeScenarioInput>;
    return typeof parsed === "object" && parsed ? parsed : null;
  } catch {
    return null;
  }
}

export function saveEmploymentTypeScenarioToStorage(input: EmploymentTypeScenarioInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore quota */
  }
}

export function clearEmploymentTypeScenarioStorage(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function mergeEmploymentTypeScenarioFromSources(
  params: URLSearchParams,
  stored: Partial<EmploymentTypeScenarioInput> | null
): EmploymentTypeScenarioInput {
  const base = DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT;
  if (hasEmploymentTypeScenarioUrlParams(params)) {
    return sanitizeEmploymentTypeScenarioInput({ ...base, ...parseEmploymentTypeScenarioSearchParams(params) });
  }
  if (stored) {
    return sanitizeEmploymentTypeScenarioInput({ ...base, ...stored });
  }
  return sanitizeEmploymentTypeScenarioInput(base);
}
