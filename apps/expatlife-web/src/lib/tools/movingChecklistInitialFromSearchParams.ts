/**
 * Build initial moving checklist values from searchParams (record form).
 * Used by the server to pass identical initial state to the client when URL has tool params.
 */

import type { MovingChecklistInputValues } from "@/src/components/tools/ToolInputsCard";

/** Server-side defaults matching client DEFAULTS for merging with parsed params */
export const MOVING_CHECKLIST_DEFAULT_VALUES: MovingChecklistInputValues = {
  from: "south-africa",
  stage: "before-move",
  household: "solo",
  employment: "job-offer",
  region: "non-eu",
  city: "",
  housingReadiness: "no-place-yet",
  shippingNeeds: false,
  kidsSchoolNeeds: false,
  largeMoneyTransfer: false,
  hasCoreDocsReady: false,
  needsTemporaryHousing: false,
};

const PARAM_KEYS = [
  "from",
  "stage",
  "household",
  "employment",
  "region",
  "city",
  "housingReadiness",
  "shippingNeeds",
  "kidsSchoolNeeds",
  "largeMoneyTransfer",
  "hasCoreDocsReady",
  "needsTemporaryHousing",
] as const;

function parseBool(s: string | undefined): boolean {
  if (s == null) return false;
  return s === "true" || s === "1";
}

function getSingle(searchParams: Record<string, string | string[] | undefined>, key: string): string | undefined {
  const v = searchParams[key];
  if (v == null) return undefined;
  return Array.isArray(v) ? v[0] : v;
}

export function getMovingChecklistInitialFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): Partial<MovingChecklistInputValues> {
  const out: Partial<MovingChecklistInputValues> = {};
  for (const key of PARAM_KEYS) {
    const v = getSingle(searchParams, key);
    if (v == null || v === "") continue;
    if (
      key === "shippingNeeds" ||
      key === "kidsSchoolNeeds" ||
      key === "largeMoneyTransfer" ||
      key === "hasCoreDocsReady" ||
      key === "needsTemporaryHousing"
    ) {
      (out as Record<string, boolean>)[key] = parseBool(v);
    } else {
      (out as Record<string, string>)[key] = v;
    }
  }
  return out;
}

export function hasMovingChecklistParams(
  searchParams: Record<string, string | string[] | undefined>
): boolean {
  return PARAM_KEYS.some((key) => {
    const v = getSingle(searchParams, key);
    return v != null && v !== "";
  });
}

/** Merge parsed params with defaults to get full values (server-only) */
export function getMovingChecklistFullValuesFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): MovingChecklistInputValues {
  const partial = getMovingChecklistInitialFromSearchParams(searchParams);
  return { ...MOVING_CHECKLIST_DEFAULT_VALUES, ...partial } as MovingChecklistInputValues;
}
