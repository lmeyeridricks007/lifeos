import { sanitizeCityComparisonInput } from "./engine";
import { DEFAULT_CITY_COMPARISON_INPUT, type CityComparisonInput } from "./types";

const STORAGE_KEY = "expatcopilot-nl-city-comparison-v1";

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

export function encodeCityComparisonInputToParam(input: CityComparisonInput): string {
  return encodeBase64Url(JSON.stringify(input));
}

export function decodeCityComparisonParam(param: string): Partial<CityComparisonInput> | null {
  const json = decodeBase64Url(param);
  if (!json) return null;
  try {
    const parsed = JSON.parse(json) as Partial<CityComparisonInput>;
    return typeof parsed === "object" && parsed ? parsed : null;
  } catch {
    return null;
  }
}

export function cityComparisonInputToSearchParams(input: CityComparisonInput): URLSearchParams {
  const params = new URLSearchParams();
  params.set("s", encodeCityComparisonInputToParam(input));
  return params;
}

export function parseCityComparisonSearchParams(params: URLSearchParams): Partial<CityComparisonInput> {
  const encoded = params.get("s");
  if (!encoded) return {};
  return decodeCityComparisonParam(encoded) ?? {};
}

export function hasCityComparisonUrlParams(params: URLSearchParams): boolean {
  return params.has("s");
}

export function saveCityComparisonToStorage(input: CityComparisonInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    // ignore
  }
}

export function loadCityComparisonFromStorage(): Partial<CityComparisonInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CityComparisonInput>;
    return typeof parsed === "object" && parsed ? parsed : null;
  } catch {
    return null;
  }
}

/** Hydrate from URL `s` param or localStorage partials. */
export function hydrateCityComparisonInput(partial: Partial<CityComparisonInput> | null | undefined): CityComparisonInput {
  return sanitizeCityComparisonInput({ ...DEFAULT_CITY_COMPARISON_INPUT, ...(partial ?? {}) });
}
