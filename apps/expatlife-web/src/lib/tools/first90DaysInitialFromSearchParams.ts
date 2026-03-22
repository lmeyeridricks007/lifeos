/**
 * Build initial First 90 Days values from searchParams (record form).
 * Used by the server to pass identical initial state to the client when URL has tool params.
 */

const PARAM_KEYS = [
  "arrivalStage",
  "household",
  "startingJobSoon",
  "needsIntegrationAwareness",
  "from",
  "arrivalDate",
  "needsDrivingSoon",
  "housingSituation",
  "hasBankAccountAlready",
  "hasBSNAlready",
  "wantsLanguageSupport",
  "hasKidsAdminNeeds",
  "needsUtilitiesSetup",
] as const;

function getSingle(searchParams: Record<string, string | string[] | undefined>, key: string): string | undefined {
  const v = searchParams[key];
  if (v == null) return undefined;
  return Array.isArray(v) ? v[0] : v;
}

export type First90DaysInitialValues = Partial<{
  arrivalStage: "arriving-soon" | "already-arrived" | "arrived-a-while-ago";
  household: "solo" | "partner" | "kids";
  startingJobSoon: "yes" | "no";
  needsIntegrationAwareness: "yes" | "no";
  from: string;
  arrivalDate: string;
  needsDrivingSoon: boolean;
  housingSituation: "temporary" | "stable-rental" | "still-looking" | "with-family-or-friends";
  hasBankAccountAlready: boolean;
  hasBSNAlready: boolean;
  wantsLanguageSupport: boolean;
  hasKidsAdminNeeds: boolean;
  needsUtilitiesSetup: boolean;
}>;

export function getFirst90DaysInitialFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): First90DaysInitialValues {
  const out: First90DaysInitialValues = {};
  const arrivalStage = getSingle(searchParams, "arrivalStage");
  const household = getSingle(searchParams, "household");
  const startingJobSoon = getSingle(searchParams, "startingJobSoon");
  const needsIntegrationAwareness = getSingle(searchParams, "needsIntegrationAwareness");
  const from = getSingle(searchParams, "from");
  const arrivalDate = getSingle(searchParams, "arrivalDate");
  const needsDrivingSoon = getSingle(searchParams, "needsDrivingSoon");
  const housingSituation = getSingle(searchParams, "housingSituation");
  const hasBankAccountAlready = getSingle(searchParams, "hasBankAccountAlready");
  const hasBSNAlready = getSingle(searchParams, "hasBSNAlready");
  const wantsLanguageSupport = getSingle(searchParams, "wantsLanguageSupport");
  const hasKidsAdminNeeds = getSingle(searchParams, "hasKidsAdminNeeds");
  const needsUtilitiesSetup = getSingle(searchParams, "needsUtilitiesSetup");

  if (
    arrivalStage === "arriving-soon" ||
    arrivalStage === "already-arrived" ||
    arrivalStage === "arrived-a-while-ago"
  )
    out.arrivalStage = arrivalStage;
  if (household === "solo" || household === "partner" || household === "kids") out.household = household;
  if (startingJobSoon === "yes" || startingJobSoon === "no") out.startingJobSoon = startingJobSoon;
  if (needsIntegrationAwareness === "yes" || needsIntegrationAwareness === "no")
    out.needsIntegrationAwareness = needsIntegrationAwareness;
  if (from) out.from = from;
  if (arrivalDate) out.arrivalDate = arrivalDate;
  if (needsDrivingSoon === "true") out.needsDrivingSoon = true;
  if (needsDrivingSoon === "false") out.needsDrivingSoon = false;
  if (
    housingSituation === "temporary" ||
    housingSituation === "stable-rental" ||
    housingSituation === "still-looking" ||
    housingSituation === "with-family-or-friends"
  )
    out.housingSituation = housingSituation;
  if (hasBankAccountAlready === "true") out.hasBankAccountAlready = true;
  if (hasBankAccountAlready === "false") out.hasBankAccountAlready = false;
  if (hasBSNAlready === "true") out.hasBSNAlready = true;
  if (hasBSNAlready === "false") out.hasBSNAlready = false;
  if (wantsLanguageSupport === "true") out.wantsLanguageSupport = true;
  if (wantsLanguageSupport === "false") out.wantsLanguageSupport = false;
  if (hasKidsAdminNeeds === "true") out.hasKidsAdminNeeds = true;
  if (hasKidsAdminNeeds === "false") out.hasKidsAdminNeeds = false;
  if (needsUtilitiesSetup === "true") out.needsUtilitiesSetup = true;
  if (needsUtilitiesSetup === "false") out.needsUtilitiesSetup = false;

  return out;
}

export function hasFirst90DaysParams(
  searchParams: Record<string, string | string[] | undefined>
): boolean {
  return PARAM_KEYS.some((key) => {
    const v = getSingle(searchParams, key);
    return v != null && v !== "";
  });
}

/** Full default values for First 90 Days (server-side merge base) */
export const FIRST_90_DAYS_DEFAULT_VALUES: First90DaysInitialValues & {
  arrivalStage: "arriving-soon" | "already-arrived" | "arrived-a-while-ago";
  household: "solo" | "partner" | "kids";
  startingJobSoon: "yes" | "no";
  needsIntegrationAwareness: "yes" | "no";
  from: string;
  arrivalDate: string;
  housingSituation: "temporary" | "stable-rental" | "still-looking" | "with-family-or-friends";
} = {
  arrivalStage: "arriving-soon",
  household: "solo",
  startingJobSoon: "yes",
  needsIntegrationAwareness: "yes",
  from: "south-africa",
  arrivalDate: "",
  needsDrivingSoon: false,
  housingSituation: "temporary",
  hasBankAccountAlready: false,
  hasBSNAlready: false,
  wantsLanguageSupport: false,
  hasKidsAdminNeeds: false,
  needsUtilitiesSetup: true,
};

/** Merge parsed params with defaults to get full values (server-only) */
export function getFirst90DaysFullValuesFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): First90DaysInitialValues & Record<string, unknown> {
  const partial = getFirst90DaysInitialFromSearchParams(searchParams);
  return { ...FIRST_90_DAYS_DEFAULT_VALUES, ...partial };
}
