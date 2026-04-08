import { BALANCED_PRIORITIES, defaultFormState, emptyOffer } from "./defaults";
import type { JobOfferComparisonFormState, JobOfferInput, OfferSlot, PriorityLevel } from "./types";

function stripOfferLetterForShare(offer: JobOfferInput): JobOfferInput {
  return { ...offer, uploadedOfferLetterText: "", uploadedOfferLetterFileName: "" };
}

function stateForShareEncoding(state: JobOfferComparisonFormState): JobOfferComparisonFormState {
  return {
    ...state,
    offers: {
      A: { ...state.offers.A, offer: stripOfferLetterForShare(state.offers.A.offer) },
      B: { ...state.offers.B, offer: stripOfferLetterForShare(state.offers.B.offer) },
      C: { ...state.offers.C, offer: stripOfferLetterForShare(state.offers.C.offer) },
    },
  };
}

const STORAGE_KEY = "expatcopilot-job-offer-comparison-v1";

const PRIORITY_LEVELS: PriorityLevel[] = ["low", "medium", "high"];

function isPriorityLevel(v: unknown): v is PriorityLevel {
  return typeof v === "string" && (PRIORITY_LEVELS as string[]).includes(v);
}

function sanitizeSlot(raw: unknown, id: "A" | "B" | "C", fallbackLabel: string): OfferSlot {
  const defaults = defaultFormState().offers[id];
  if (!raw || typeof raw !== "object") return { ...defaults, id, label: fallbackLabel };
  const r = raw as Record<string, unknown>;
  const offerIn = r.offer;
  const mergedOffer = { ...emptyOffer() };
  if (offerIn && typeof offerIn === "object") {
    const o = offerIn as Record<string, unknown>;
    for (const key of Object.keys(mergedOffer) as (keyof typeof mergedOffer)[]) {
      if (key in o && o[key] !== undefined) {
        (mergedOffer as Record<string, unknown>)[key] = o[key];
      }
    }
  }
  return {
    id,
    label: typeof r.label === "string" ? r.label : fallbackLabel,
    expanded: r.expanded !== false,
    offer: mergedOffer,
  };
}

function sanitizePriorities(raw: unknown): JobOfferComparisonFormState["priorities"] {
  const b = { ...BALANCED_PRIORITIES };
  if (!raw || typeof raw !== "object") return b;
  const r = raw as Record<string, unknown>;
  (Object.keys(b) as (keyof typeof b)[]).forEach((k) => {
    const v = r[k as string];
    if (isPriorityLevel(v)) b[k] = v;
  });
  return b;
}

export function sanitizeJobOfferComparisonState(raw: unknown): JobOfferComparisonFormState {
  const d = defaultFormState();
  if (!raw || typeof raw !== "object") return d;
  const r = raw as Record<string, unknown>;
  const mode = r.mode;
  const includeOfferC = r.includeOfferC === true;
  const priorities = sanitizePriorities(r.priorities);
  const offersRaw = r.offers;
  let offers = d.offers;
  if (offersRaw && typeof offersRaw === "object") {
    const or = offersRaw as Record<string, unknown>;
    offers = {
      A: sanitizeSlot(or.A, "A", "Offer A"),
      B: sanitizeSlot(or.B, "B", "Offer B"),
      C: sanitizeSlot(or.C, "C", "Offer C"),
    };
  }
  return {
    mode:
      mode === "compare_three" || mode === "current_vs_new" || mode === "compare_two"
        ? mode
        : "compare_two",
    includeOfferC,
    offers,
    priorities,
  };
}

export function encodeJobOfferComparisonParam(state: JobOfferComparisonFormState): string | null {
  try {
    const json = JSON.stringify(stateForShareEncoding(state));
    if (typeof window === "undefined") return null;
    return window.btoa(unescape(encodeURIComponent(json)));
  } catch {
    return null;
  }
}

export function decodeJobOfferComparisonParam(param: string | null): JobOfferComparisonFormState | null {
  if (!param?.trim()) return null;
  try {
    const json = decodeURIComponent(escape(window.atob(param)));
    return sanitizeJobOfferComparisonState(JSON.parse(json));
  } catch {
    return null;
  }
}

export function saveJobOfferComparisonToStorage(state: JobOfferComparisonFormState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function loadJobOfferComparisonFromStorage(): JobOfferComparisonFormState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeJobOfferComparisonState(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function clearJobOfferComparisonStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
