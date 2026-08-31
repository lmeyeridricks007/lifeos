import { DEFAULT_CITIZENSHIP_TIMELINE_INPUT, type CitizenshipTimelineInput } from "./types";

const STORAGE_KEY = "expatlife-citizenship-timeline-inputs-v1";

const ROUTE = new Set(["naturalisation", "option_maybe", "unsure"]);
const YEARS = new Set(["under_3", "three_to_four", "about_five", "over_five", "unsure"]);
const CONTINUITY = new Set(["continuous_on_time", "job_search_used", "gaps_or_late", "unsure"]);
const INTEGRATION = new Set([
  "diploma_a2_or_higher",
  "wi2021_certificate",
  "exemption",
  "in_progress",
  "not_started",
  "unsure",
]);
const RENUNCIATION = new Set(["willing", "possible_exception", "not_ready", "unsure"]);
const LONG_TERM = new Set(["none", "dutch_pr", "eu_ltr", "unsure"]);
const YES_NO_UNSURE = new Set(["yes", "no", "unsure"]);

function pick<T extends string>(value: string | null | undefined, allowed: Set<string>, fallback: T): T {
  if (value && allowed.has(value)) return value as T;
  return fallback;
}

function sanitizeMonth(value: string | undefined): string {
  const v = (value ?? "").trim();
  if (!v) return "";
  if (/^\d{4}-\d{2}$/.test(v)) return v;
  return "";
}

export function sanitizeCitizenshipTimelineInput(partial: Partial<CitizenshipTimelineInput>): CitizenshipTimelineInput {
  const base = { ...DEFAULT_CITIZENSHIP_TIMELINE_INPUT, ...partial };
  return {
    routeFocus: pick(base.routeFocus, ROUTE, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.routeFocus),
    residenceYears: pick(base.residenceYears, YEARS, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.residenceYears),
    continuity: pick(base.continuity, CONTINUITY, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.continuity),
    integration: pick(base.integration, INTEGRATION, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.integration),
    renunciation: pick(base.renunciation, RENUNCIATION, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.renunciation),
    longTermStatus: pick(base.longTermStatus, LONG_TERM, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.longTermStatus),
    age18Plus: pick(base.age18Plus, YES_NO_UNSURE, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.age18Plus),
    residenceStartMonth: sanitizeMonth(base.residenceStartMonth),
  };
}

export function citizenshipInputToSearchParams(input: CitizenshipTimelineInput): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("route", input.routeFocus);
  sp.set("years", input.residenceYears);
  sp.set("continuity", input.continuity);
  sp.set("integration", input.integration);
  sp.set("renounce", input.renunciation);
  sp.set("longterm", input.longTermStatus);
  sp.set("age18", input.age18Plus);
  if (input.residenceStartMonth) sp.set("start", input.residenceStartMonth);
  return sp;
}

export function hasCitizenshipTimelineUrlParams(sp: URLSearchParams): boolean {
  return ["route", "years", "continuity", "integration", "renounce", "longterm", "age18", "start"].some((k) => sp.has(k));
}

export function parseCitizenshipTimelineSearchParams(sp: URLSearchParams): Partial<CitizenshipTimelineInput> {
  return sanitizeCitizenshipTimelineInput({
    routeFocus: pick(sp.get("route"), ROUTE, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.routeFocus),
    residenceYears: pick(sp.get("years"), YEARS, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.residenceYears),
    continuity: pick(sp.get("continuity"), CONTINUITY, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.continuity),
    integration: pick(sp.get("integration"), INTEGRATION, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.integration),
    renunciation: pick(sp.get("renounce"), RENUNCIATION, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.renunciation),
    longTermStatus: pick(sp.get("longterm"), LONG_TERM, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.longTermStatus),
    age18Plus: pick(sp.get("age18"), YES_NO_UNSURE, DEFAULT_CITIZENSHIP_TIMELINE_INPUT.age18Plus),
    residenceStartMonth: sanitizeMonth(sp.get("start") ?? ""),
  });
}

export function saveCitizenshipTimelineToStorage(input: CitizenshipTimelineInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadCitizenshipTimelineFromStorage(): Partial<CitizenshipTimelineInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeCitizenshipTimelineInput(JSON.parse(raw) as Partial<CitizenshipTimelineInput>);
  } catch {
    return null;
  }
}
