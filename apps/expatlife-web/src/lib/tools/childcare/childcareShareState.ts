"use client";

import {
  decodeChildcareParam,
  DEFAULT_CHILDCARE_INPUT,
  encodeChildcareInputToParam,
  sanitizeChildcareInput,
} from "@/src/lib/tools/childcare/childcareValidation";
import type { ChildcareEstimatorInput } from "@/src/types/tools/childcare";

const STORAGE_KEY = "expatcopilot-nl-childcare-estimator-v1";
const URL_PARAM = "s";

export function loadChildcareFromStorage(): ChildcareEstimatorInput | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    return sanitizeChildcareInput(parsed);
  } catch {
    return null;
  }
}

export function saveChildcareToStorage(input: ChildcareEstimatorInput): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* quota */
  }
}

export function childcareInputToSearchParams(input: ChildcareEstimatorInput): URLSearchParams {
  const params = new URLSearchParams();
  const enc = encodeChildcareInputToParam(input);
  if (enc) params.set(URL_PARAM, enc);
  return params;
}

export function parseChildcareSearchParams(search: string): ChildcareEstimatorInput | null {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const enc = params.get(URL_PARAM);
  if (!enc) return null;
  const partial = decodeChildcareParam(enc);
  if (!partial) return null;
  return sanitizeChildcareInput(partial);
}

export function hasChildcareUrlParams(search: string): boolean {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  return params.has(URL_PARAM);
}

export function getDefaultChildcareInput(): ChildcareEstimatorInput {
  return sanitizeChildcareInput(DEFAULT_CHILDCARE_INPUT);
}

export { URL_PARAM as CHILDCARE_SHARE_URL_PARAM };
