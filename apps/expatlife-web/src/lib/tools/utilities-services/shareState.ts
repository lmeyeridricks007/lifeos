import { UTILITIES_SERVICES_DEFAULT_INPUT } from "./defaultInput";
import type { UsCity, UtilitiesServicesInput } from "./types";

const STORAGE_KEY = "expatcopilot-nl-utilities-services-v1";
export const UTILITIES_SERVICES_URL_PARAM = "s";

/** Base64url segment compatible with `decodeUtilitiesServicesParam` (client and server). */
function jsonToUtilitiesParamSegment(json: string): string {
  let b64: string;
  if (typeof Buffer !== "undefined") {
    b64 = Buffer.from(json, "utf-8").toString("base64");
  } else if (typeof btoa !== "undefined") {
    b64 = btoa(unescape(encodeURIComponent(json)));
  } else {
    return "";
  }
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

const CITIES: UsCity[] = [
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
  "tilburg",
  "arnhem-nijmegen",
  "other",
];

function pickEnum<T extends string>(v: unknown, allowed: readonly T[], fallback: T): T {
  return typeof v === "string" && (allowed as readonly string[]).includes(v) ? (v as T) : fallback;
}

function clampInt(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, Math.round(n)));
}

function asBool(v: unknown, fallback: boolean): boolean {
  if (typeof v === "boolean") return v;
  if (v === "1" || v === "true") return true;
  if (v === "0" || v === "false") return false;
  return fallback;
}

export function sanitizeUtilitiesServicesInput(partial: Partial<UtilitiesServicesInput> | null | undefined): UtilitiesServicesInput {
  if (!partial || typeof partial !== "object") return { ...UTILITIES_SERVICES_DEFAULT_INPUT };
  const p = partial as Record<string, unknown>;

  return {
    plannerMode: pickEnum(p.plannerMode, ["quick", "detailed"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.plannerMode),
    city: pickEnum(p.city, CITIES, UTILITIES_SERVICES_DEFAULT_INPUT.city),
    moveStage: pickEnum(p.moveStage, ["researching", "moving_soon", "already_moved"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.moveStage),
    householdType: pickEnum(
      p.householdType,
      ["single", "couple", "family", "house_share"] as const,
      UTILITIES_SERVICES_DEFAULT_INPUT.householdType
    ),
    adultsCount: clampInt(Number(p.adultsCount ?? UTILITIES_SERVICES_DEFAULT_INPUT.adultsCount), 1, 6),
    childrenCount: clampInt(Number(p.childrenCount ?? UTILITIES_SERVICES_DEFAULT_INPUT.childrenCount), 0, 8),
    renterOrOwner: pickEnum(p.renterOrOwner, ["renter", "owner"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.renterOrOwner),
    utilitiesIncludedInRent: pickEnum(p.utilitiesIncludedInRent, ["yes", "no", "unsure"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.utilitiesIncludedInRent),
    housingType: pickEnum(
      p.housingType,
      ["student_room", "studio", "apartment", "terraced", "larger_house"] as const,
      UTILITIES_SERVICES_DEFAULT_INPUT.housingType
    ),
    sizeBand: pickEnum(p.sizeBand, ["small", "medium", "large"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.sizeBand),
    energyQuality: pickEnum(
      p.energyQuality,
      ["low", "average", "efficient", "unknown"] as const,
      UTILITIES_SERVICES_DEFAULT_INPUT.energyQuality
    ),
    heating: pickEnum(p.heating, ["gas", "electric", "district", "mixed_unknown"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.heating),
    furnished: pickEnum(p.furnished, ["furnished", "unfurnished"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.furnished),
    landlordBuildingIncludesServices: pickEnum(
      p.landlordBuildingIncludesServices,
      ["yes", "no", "unsure"] as const,
      UTILITIES_SERVICES_DEFAULT_INPUT.landlordBuildingIncludesServices
    ),
    usageLevel: pickEnum(p.usageLevel, ["low", "average", "high"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.usageLevel),
    internetTier: pickEnum(p.internetTier, ["basic", "standard", "fast"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.internetTier),
    mobileUsage: pickEnum(p.mobileUsage, ["light", "standard", "heavy"] as const, UTILITIES_SERVICES_DEFAULT_INPUT.mobileUsage),
    mobileLines: clampInt(Number(p.mobileLines ?? UTILITIES_SERVICES_DEFAULT_INPUT.mobileLines), 0, 6),
    evHeavy: asBool(p.evHeavy, UTILITIES_SERVICES_DEFAULT_INPUT.evHeavy),
    wfhHeavy: asBool(p.wfhHeavy, UTILITIES_SERVICES_DEFAULT_INPUT.wfhHeavy),
    includeInternet: asBool(p.includeInternet, UTILITIES_SERVICES_DEFAULT_INPUT.includeInternet),
    includeMobile: asBool(p.includeMobile, UTILITIES_SERVICES_DEFAULT_INPUT.includeMobile),
    includeTvMedia: asBool(p.includeTvMedia, UTILITIES_SERVICES_DEFAULT_INPUT.includeTvMedia),
    includeContentsInsurance: asBool(p.includeContentsInsurance, UTILITIES_SERVICES_DEFAULT_INPUT.includeContentsInsurance),
    includeLiabilityInsurance: asBool(p.includeLiabilityInsurance, UTILITIES_SERVICES_DEFAULT_INPUT.includeLiabilityInsurance),
    priority: pickEnum(
      p.priority,
      ["lowest_cost", "flexibility", "balanced", "quality", "greener"] as const,
      UTILITIES_SERVICES_DEFAULT_INPUT.priority
    ),
    movingDateNote: typeof p.movingDateNote === "string" ? p.movingDateNote.slice(0, 120) : UTILITIES_SERVICES_DEFAULT_INPUT.movingDateNote,
    shortTermOverlap: asBool(p.shortTermOverlap, UTILITIES_SERVICES_DEFAULT_INPUT.shortTermOverlap),
  };
}

export function encodeUtilitiesServicesInputToParam(input: UtilitiesServicesInput): string {
  const json = JSON.stringify(sanitizeUtilitiesServicesInput(input));
  return jsonToUtilitiesParamSegment(json);
}

/** Deep link to this tool with a preset merged on top of defaults (SSR-safe). */
export function buildUtilitiesServicesPresetHref(canonicalPath: string, patch: Partial<UtilitiesServicesInput>): string {
  const merged = sanitizeUtilitiesServicesInput({ ...UTILITIES_SERVICES_DEFAULT_INPUT, ...patch });
  const enc = encodeUtilitiesServicesInputToParam(merged);
  if (!enc) return canonicalPath;
  const join = canonicalPath.includes("?") ? "&" : "?";
  return `${canonicalPath}${join}${UTILITIES_SERVICES_URL_PARAM}=${encodeURIComponent(enc)}`;
}

export function decodeUtilitiesServicesParam(param: string): Partial<UtilitiesServicesInput> | null {
  try {
    let b64 = param.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const json = decodeURIComponent(escape(atob(b64)));
    const o = JSON.parse(json) as UtilitiesServicesInput;
    return typeof o === "object" && o ? o : null;
  } catch {
    return null;
  }
}

export function utilitiesInputToSearchParams(input: UtilitiesServicesInput): URLSearchParams {
  const params = new URLSearchParams();
  const enc = encodeUtilitiesServicesInputToParam(input);
  if (enc) params.set(UTILITIES_SERVICES_URL_PARAM, enc);
  return params;
}

export function parseUtilitiesServicesSearchParams(search: string): UtilitiesServicesInput | null {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const enc = params.get(UTILITIES_SERVICES_URL_PARAM);
  if (!enc) return null;
  const partial = decodeUtilitiesServicesParam(enc);
  if (!partial) return null;
  return sanitizeUtilitiesServicesInput(partial);
}

export function hasUtilitiesServicesUrlParams(search: string): boolean {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  return params.has(UTILITIES_SERVICES_URL_PARAM);
}

export function loadUtilitiesServicesFromStorage(): UtilitiesServicesInput | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeUtilitiesServicesInput(JSON.parse(raw) as Partial<UtilitiesServicesInput>);
  } catch {
    return null;
  }
}

export function saveUtilitiesServicesToStorage(input: UtilitiesServicesInput): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* quota */
  }
}
