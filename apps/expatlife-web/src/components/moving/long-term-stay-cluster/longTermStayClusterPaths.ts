/** Shared routes for the PR / citizenship / inburgering cluster. */
export const PERMANENT_RESIDENCE_PATH = "/netherlands/citizenship/permanent-residence/" as const;
export const DUTCH_CITIZENSHIP_PATH = "/netherlands/citizenship/dutch-citizenship/" as const;
export const INBURGERING_PATH = "/netherlands/integration/inburgering/" as const;
export const CITIZENSHIP_TOOLS_PATH = "/netherlands/citizenship/tools/" as const;
export const INTEGRATION_TOOLS_PATH = "/netherlands/integration/tools/" as const;
export const INBURGERING_EXAMS_ORIENTATION_PATH = "/netherlands/culture/inburgering-exams/" as const;

export const HSM_VISA_GUIDE_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const EXTENSIONS_CHANGES_PATH = "/netherlands/moving/extensions-changes/" as const;
export const RESIDENCE_PERMITS_PATH = "/netherlands/moving/residence-permits/" as const;
export const LEAVING_NL_TAX_PATH = "/netherlands/taxes/leaving-netherlands-tax/" as const;

/** Editorial go-live for the long-term stay cluster (PR, citizenship, inburgering). */
export const LONG_TERM_STAY_CLUSTER_PUBLISH_DATE = "2026-11-13" as const;

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
    description: "Who must integrate, exam components, and planning before PR or citizenship.",
  },
  {
    href: DUTCH_CITIZENSHIP_PATH,
    label: "Dutch citizenship guide",
    description: "Naturalisation vs option, dual nationality, and ceremony orientation.",
  },
  {
    href: CITIZENSHIP_TOOLS_PATH,
    label: "Citizenship tools",
    description: "PR eligibility and citizenship timeline calculators (orientation).",
  },
] as const;
