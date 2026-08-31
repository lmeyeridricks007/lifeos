/** Shared routes for the PR / citizenship / inburgering cluster. */
export const PERMANENT_RESIDENCE_PATH = "/netherlands/citizenship/permanent-residence/" as const;
export const DUTCH_CITIZENSHIP_PATH = "/netherlands/citizenship/dutch-citizenship/" as const;
export const INBURGERING_PATH = "/netherlands/integration/inburgering/" as const;
export const CITIZENSHIP_TOOLS_PATH = "/netherlands/citizenship/tools/" as const;
export const INTEGRATION_TOOLS_PATH = "/netherlands/integration/tools/" as const;
/** @deprecated Culture orientation URL; permanently redirects to {@link INBURGERING_PATH}. */
export const INBURGERING_EXAMS_ORIENTATION_PATH = "/netherlands/culture/inburgering-exams/" as const;

export const HSM_VISA_GUIDE_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const EXTENSIONS_CHANGES_PATH = "/netherlands/moving/extensions-changes/" as const;
export const RESIDENCE_PERMITS_PATH = "/netherlands/moving/residence-permits/" as const;
export const LEAVING_NL_TAX_PATH = "/netherlands/taxes/leaving-netherlands-tax/" as const;
export const LEAVING_TOOLS_PATH = "/netherlands/leaving/tools/" as const;
/** End-to-end exit journey guide (not tax-only). */
export const LEAVING_NL_JOURNEY_PATH = "/netherlands/leaving/" as const;

/** Editorial go-live for the long-term stay cluster (PR, citizenship, inburgering). */
export const LONG_TERM_STAY_CLUSTER_PUBLISH_DATE = "2026-08-30" as const;

export const longTermStayClusterPages = [
  { path: PERMANENT_RESIDENCE_PATH, title: "Permanent residence in the Netherlands" },
  { path: DUTCH_CITIZENSHIP_PATH, title: "Dutch citizenship for expats" },
  { path: INBURGERING_PATH, title: "Inburgering in the Netherlands" },
] as const;

export const longTermStayNextSteps = [
  {
    href: PERMANENT_RESIDENCE_PATH,
    label: "Permanent residence guide",
    description: "Five-year routes, absences, EU long-term resident vs Dutch permanent status.",
  },
  {
    href: INBURGERING_PATH,
    label: "Inburgering guide",
    description: "HSM vs obligation, Wi 2021 / B1, KNM from July 2025, and DUO vs IND.",
  },
  {
    href: DUTCH_CITIZENSHIP_PATH,
    label: "Dutch citizenship guide",
    description: "Naturalisation vs option, dual nationality caveats, and what inburgering unlocks.",
  },
  {
    href: CITIZENSHIP_TOOLS_PATH,
    label: "Citizenship tools",
    description: "PR eligibility, citizenship timeline, and dual-citizenship awareness tools.",
  },
  {
    href: INTEGRATION_TOOLS_PATH,
    label: "Integration tools",
    description: "Requirement and exam-readiness checkers live; timeline planner and KNM quiz may still be preview.",
  },
  {
    href: LEAVING_NL_JOURNEY_PATH,
    label: "Leaving the Netherlands",
    description: "End-to-end exit journey before tax depth and long-term status checks.",
  },
  {
    href: LEAVING_TOOLS_PATH,
    label: "Leaving tools",
    description: "Exit readiness checker and repatriation cost calculator.",
  },
] as const;
