import { DEFAULT_COL_INPUT, type ColInput } from "@/src/lib/calculators/cost-of-living";

const STORAGE_KEY_V2 = "expatcopilot-nl-col-v2";
const STORAGE_KEY_V1 = "expatcopilot-nl-col-v1";

const CITIES = new Set<ColInput["city"]>([
  "amsterdam",
  "rotterdam",
  "the-hague",
  "utrecht",
  "eindhoven",
  "haarlem",
  "delft",
  "groningen",
  "leiden",
  "other",
]);

function clampInt(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, Math.round(n)));
}

/** Base64url encode full input for shareable URLs. */
export function encodeColInputToParam(input: ColInput): string {
  const json = JSON.stringify(input);
  if (typeof btoa === "undefined") return "";
  const b64 = btoa(unescape(encodeURIComponent(json)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeColParam(param: string): Partial<ColInput> | null {
  try {
    let b64 = param.replace(/-/g, "+").replace(/_/g, "/");
    while (b64.length % 4) b64 += "=";
    const json = decodeURIComponent(escape(atob(b64)));
    const o = JSON.parse(json) as ColInput;
    return typeof o === "object" && o ? o : null;
  } catch {
    return null;
  }
}

function pickEnum<T extends string>(v: unknown, allowed: readonly T[], fallback: T): T {
  return typeof v === "string" && (allowed as readonly string[]).includes(v) ? (v as T) : fallback;
}

/** Coerce partial / stored JSON into a valid ColInput. */
export function sanitizeCostOfLivingInput(partial: Partial<ColInput> | null | undefined): ColInput {
  const base = DEFAULT_COL_INPUT;
  if (!partial || typeof partial !== "object") return { ...base };
  const p = partial as Record<string, unknown>;

  const childcareNeeded = Boolean(p.childcareNeeded ?? base.childcareNeeded);
  let childcareIntensity = pickEnum(p.childcareIntensity, ["none", "part_time", "full_time"] as const, base.childcareIntensity);
  if (!childcareNeeded) childcareIntensity = "none";
  else if (childcareIntensity === "none") childcareIntensity = "part_time";

  const MAX_MANUAL_RENT_EUR = 50_000;
  const MAX_COMPARISON_NET_EUR = 150_000;

  const mr = p.manualRentEur;
  const manualRentEur =
    mr === null || mr === undefined || mr === ""
      ? null
      : Number.isFinite(Number(mr)) && Number(mr) > 0
        ? clampInt(Math.round(Number(mr)), 1, MAX_MANUAL_RENT_EUR)
        : null;

  const cn = p.comparisonNetMonthly;
  const comparisonNetMonthly =
    cn === null || cn === undefined || cn === ""
      ? null
      : Number.isFinite(Number(cn)) && Number(cn) > 0
        ? clampInt(Math.round(Number(cn)), 1, MAX_COMPARISON_NET_EUR)
        : null;

  return {
    city: pickEnum(p.city, [...CITIES] as ColInput["city"][], base.city),
    neighborhood: pickEnum(p.neighborhood, ["center", "outside", "commuter"] as const, base.neighborhood),
    householdPreset: pickEnum(p.householdPreset, ["single", "couple", "family1", "family2", "custom"] as const, base.householdPreset),
    adultsCount: clampInt(Number(p.adultsCount ?? base.adultsCount), 1, 5),
    childrenCount: clampInt(Number(p.childrenCount ?? base.childrenCount), 0, 6),
    housingMode: pickEnum(
      p.housingMode,
      [
        "room_shared",
        "apartment_1bed",
        "apartment_2bed",
        "apartment_3bed_family",
        "short_stay_serviced",
        "already_arranged",
      ] as const,
      base.housingMode
    ),
    rentInputMode: pickEnum(p.rentInputMode, ["model", "manual"] as const, base.rentInputMode),
    manualRentEur,
    lifestyle: pickEnum(p.lifestyle, ["basic", "balanced", "comfortable"] as const, base.lifestyle),
    diningLevel: pickEnum(p.diningLevel, ["low", "medium", "high"] as const, base.diningLevel),
    travelStyle: pickEnum(p.travelStyle, ["local", "weekends", "frequent"] as const, base.travelStyle),
    transportMode: pickEnum(p.transportMode, ["bike_pt", "pt_only", "car", "hybrid"] as const, base.transportMode),
    includeParking: Boolean(p.includeParking ?? base.includeParking),
    includeNsCommuteSupplement: Boolean(p.includeNsCommuteSupplement ?? base.includeNsCommuteSupplement),
    childcareNeeded,
    childcareIntensity,
    schooling: pickEnum(p.schooling, ["public_local", "international_placeholder"] as const, base.schooling),
    pet: Boolean(p.pet ?? base.pet),
    movingFrom: pickEnum(p.movingFrom, ["eu_nearby", "uk", "us_canada", "far"] as const, base.movingFrom),
    employerRelocationSupport: pickEnum(
      p.employerRelocationSupport,
      ["none", "partial", "full"] as const,
      base.employerRelocationSupport
    ),
    includeFurnitureSetup: Boolean(p.includeFurnitureSetup ?? base.includeFurnitureSetup),
    includeDepositAndFirstMonth: Boolean(p.includeDepositAndFirstMonth ?? base.includeDepositAndFirstMonth),
    includeVisaAdminBudget: Boolean(p.includeVisaAdminBudget ?? base.includeVisaAdminBudget),
    showSalaryTargets: Boolean(p.showSalaryTargets ?? base.showSalaryTargets),
    rulingAssumption: pickEnum(p.rulingAssumption, ["no", "maybe", "yes"] as const, base.rulingAssumption),
    currency: pickEnum(p.currency, ["eur", "usd"] as const, base.currency),
    showSalaryComparison: Boolean(p.showSalaryComparison ?? base.showSalaryComparison),
    comparisonNetMonthly,
    compareScenariosEnabled: Boolean(p.compareScenariosEnabled ?? base.compareScenariosEnabled),
  };
}

export function parseCostOfLivingSearchParams(searchParams: URLSearchParams): Partial<ColInput> {
  const col = searchParams.get("col");
  if (col) {
    const decoded = decodeColParam(col);
    if (decoded) return decoded;
  }
  return migrateLegacySearchParams(searchParams);
}

/** v1 query keys → partial v2. */
function migrateLegacySearchParams(sp: URLSearchParams): Partial<ColInput> {
  const partial: Partial<ColInput> = {};
  const city = sp.get("city");
  if (city && CITIES.has(city as ColInput["city"])) partial.city = city as ColInput["city"];
  const household = sp.get("household");
  if (household === "single") partial.householdPreset = "single";
  if (household === "couple") partial.householdPreset = "couple";
  if (household === "family") {
    partial.householdPreset = "family1";
    const kids = sp.get("kids");
    if (kids != null) {
      const k = clampInt(parseInt(kids, 10), 1, 4);
      partial.householdPreset = k >= 2 ? "family2" : "family1";
    }
  }
  const lifestyle = sp.get("lifestyle");
  if (lifestyle === "basic" || lifestyle === "balanced" || lifestyle === "comfortable") partial.lifestyle = lifestyle;
  const rent = sp.get("rent");
  if (rent === "short_stay") partial.housingMode = "short_stay_serviced";
  if (rent === "long_term") partial.housingMode = "apartment_1bed";
  const area = sp.get("area");
  if (area === "center" || area === "outside") partial.neighborhood = area;
  if (sp.get("car") === "1" || sp.get("car") === "true") {
    partial.transportMode = "car";
    partial.includeParking = false;
  }
  if (sp.get("childcare") === "1" || sp.get("childcare") === "true") {
    partial.childcareNeeded = true;
    partial.childcareIntensity = "full_time";
  }
  if (sp.get("compare") === "1") partial.showSalaryComparison = true;
  const net = sp.get("net");
  if (net) {
    const v = Number(net);
    if (Number.isFinite(v) && v > 0) partial.comparisonNetMonthly = Math.round(v);
  }
  return partial;
}

export function costOfLivingInputToSearchParams(input: ColInput): URLSearchParams {
  const p = new URLSearchParams();
  const enc = encodeColInputToParam(input);
  if (enc) p.set("col", enc);
  return p;
}

export function loadCostOfLivingFromStorage(): Partial<ColInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw2 = localStorage.getItem(STORAGE_KEY_V2);
    if (raw2) {
      const o = JSON.parse(raw2) as ColInput;
      return o;
    }
    const raw1 = localStorage.getItem(STORAGE_KEY_V1);
    if (raw1) {
      const o = JSON.parse(raw1) as Record<string, unknown>;
      return migrateV1Object(o);
    }
  } catch {
    /* ignore */
  }
  return null;
}

function migrateV1Object(o: Record<string, unknown>): Partial<ColInput> {
  const p: Partial<ColInput> = {};
  if (typeof o.city === "string" && CITIES.has(o.city as ColInput["city"])) p.city = o.city as ColInput["city"];
  if (o.householdType === "single") p.householdPreset = "single";
  if (o.householdType === "couple") p.householdPreset = "couple";
  if (o.householdType === "family") {
    const n = typeof o.numChildren === "number" ? o.numChildren : 1;
    p.householdPreset = n >= 2 ? "family2" : "family1";
  }
  if (o.lifestyle === "basic" || o.lifestyle === "balanced" || o.lifestyle === "comfortable") p.lifestyle = o.lifestyle as ColInput["lifestyle"];
  if (o.rentMode === "short_stay") p.housingMode = "short_stay_serviced";
  if (o.location === "center" || o.location === "outside") p.neighborhood = o.location as ColInput["neighborhood"];
  if (o.includeCar === true) p.transportMode = "car";
  if (o.includeChildcare === true) {
    p.childcareNeeded = true;
    p.childcareIntensity = "full_time";
  }
  if (o.showSalaryComparison === true) p.showSalaryComparison = true;
  if (typeof o.comparisonNetMonthly === "number") p.comparisonNetMonthly = o.comparisonNetMonthly;
  return p;
}

export function saveCostOfLivingToStorage(input: ColInput): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(input));
  } catch {
    /* quota */
  }
}

export { STORAGE_KEY_V2 as COL_STORAGE_KEY };

export function hasCostOfLivingUrlParams(searchParams: URLSearchParams): boolean {
  return searchParams.has("col") || ["city", "household", "lifestyle", "rent", "area"].some((k) => searchParams.has(k));
}

export function mergeCostOfLivingInput(base: ColInput, patch: Partial<ColInput>): ColInput {
  return sanitizeCostOfLivingInput({ ...base, ...patch });
}
