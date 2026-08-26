/**
 * IND highly skilled migrant job-search period after employment ends.
 * @see https://ind.nl/en/residence-permits/work/highly-skilled-migrant (last update 18 August 2026)
 */

export const HSM_IND_RESIDENCE_PERMIT_URL =
  "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" as const;

export const HSM_JOB_SEARCH_RULE_EFFECTIVE_DATE = "22 May 2026" as const;
export const HSM_IND_PAGE_LAST_UPDATE = "18 August 2026" as const;

export const HSM_IND_APPLICATION_FEE = "€423" as const;
/** General IND legal decision period — cite only when discussing a new employer application, not as a job-search guarantee. */
export const HSM_IND_LEGAL_DECISION_PERIOD = "90 days" as const;

export const HSM_JOB_SEARCH_STANDARD_MONTHS = 3 as const;
export const HSM_JOB_SEARCH_EXTENDED_MONTHS = 6 as const;
export const HSM_JOB_SEARCH_EXTENDED_MIN_PERMIT_YEARS = 2 as const;

export const hsmJobSearchWindowKeyFact =
  "Up to 3 months in most cases; up to 6 months if employment ended on/after 22 May 2026 and you held the permit 2+ years (or are a victim of labour exploitation) — never longer than remaining permit validity." as const;

export const hsmJobSearchWindowSummary =
  "If you lose your HSM job while your permit is still valid, the IND gives you time to find a new recognized sponsor. The clock starts on the day your contract ends. The search period cannot exceed your permit’s remaining validity — if the permit expires sooner, your window is shorter." as const;

export type HsmJobSearchScenario = {
  id: string;
  situation: string;
  maxSearchPeriod: string;
  notes: string;
};

export const hsmJobSearchScenarios: HsmJobSearchScenario[] = [
  {
    id: "standard",
    situation: "Most cases (default rule)",
    maxSearchPeriod: "Up to 3 months",
    notes: "Applies when the extended 6-month rule below does not fit your case — including job loss before 22 May 2026 even if you held the permit 2+ years.",
  },
  {
    id: "extended-from-may-2026",
    situation: `Job ended on or after ${HSM_JOB_SEARCH_RULE_EFFECTIVE_DATE} and permit held 2+ years`,
    maxSearchPeriod: "Up to 6 months",
    notes: `IND rule effective ${HSM_JOB_SEARCH_RULE_EFFECTIVE_DATE}. Still capped by remaining permit validity.`,
  },
  {
    id: "labour-exploitation",
    situation: `Job ended on or after ${HSM_JOB_SEARCH_RULE_EFFECTIVE_DATE} and victim of labour exploitation`,
    maxSearchPeriod: "Up to 6 months",
    notes: "Same extended window as the 2+ year rule — confirm how IND defines and evidences exploitation in your case.",
  },
  {
    id: "permit-cap",
    situation: "Permit expires before search period ends",
    maxSearchPeriod: "Shorter than 3 or 6 months",
    notes: "The job-search period cannot run past your permit’s validity date.",
  },
];

export const hsmJobSearchAfterPeriodEnds =
  "When the job-search period ends and no new recognized sponsor has registered you, the IND may revoke your residence permit." as const;

export const hsmJobSearchNewEmployerNote =
  `A new role must be with a recognized IND sponsor who applies for your permit linkage. The IND application fee is ${HSM_IND_APPLICATION_FEE}; the legal decision period is ${HSM_IND_LEGAL_DECISION_PERIOD} — plan timing with your employer, not from forum estimates.` as const;

export const hsmJobSearchDisclaimer =
  "Orientation only — not immigration advice. Rules and IND wording can change; confirm your dates, permit validity, and next steps on the IND highly skilled migrant page and with your employer or a qualified adviser." as const;

/** Short 2×2 decision matrix (tenure × contract end date) — cite IND page updated 18 Aug 2026. */
export const hsmJobSearchDecisionMatrix = {
  headers: [
    "Permit tenure (HSM)",
    `Job ended before ${HSM_JOB_SEARCH_RULE_EFFECTIVE_DATE}`,
    `Job ended on or after ${HSM_JOB_SEARCH_RULE_EFFECTIVE_DATE}`,
  ],
  rows: [
    ["Less than 2 years on permit", "Up to 3 months", "Up to 3 months"],
    ["2+ years on permit", "Up to 3 months", "Up to 6 months"],
  ],
  footnote:
    "Victim of labour exploitation (job ended on/after 22 May 2026): up to 6 months regardless of tenure. Every period is capped by remaining permit validity; the clock starts when your employment contract ends.",
} as const;

export const HSM_CONTENT_LAST_REVIEWED = "Last reviewed: 26 August 2026" as const;

export const hsmJobLossSectionHeading = "After you have the permit" as const;

export const HSM_IND_PERMANENT_RESIDENCE_URL =
  "https://ind.nl/en/permanent-residence-permit" as const;

/** Orientation only — exact validity is on the IND decision letter. */
export const HSM_PERMIT_MAX_DURATION_ORIENTATION =
  "IND may issue an HSM permit for the duration of employment up to a maximum period on your decision letter — expat planning often references five years, but your validity and any extension depend on IND case details." as const;

export const hsmLongTermStayPathHeading = "From HSM permit to permanent residence" as const;

export const hsmLongTermStayPathSummary =
  "An HSM permit is temporary and tied to recognized-sponsor employment. Lawful years on compliant HSM status can count toward a separate permanent residence application when continuity, absences, income, and integration requirements align — but holding HSM is not the same as permanent residence." as const;

export const hsmLongTermStayPathTable = {
  headers: ["Stage", "What IND typically expects", "ExpatLife guide"],
  rows: [
    [
      "HSM employment permit",
      "Temporary; tied to recognized sponsor; validity up to the maximum on your decision letter (often discussed as ~5 years)",
      "This page",
    ],
    [
      "Renewals and compliance",
      "Registered address, sponsor reporting, lawful employment or valid job-search window",
      "Changing jobs · Layoffs",
    ],
    [
      "Integration (when required)",
      "Inburgering exams or civic integration obligations where applicable",
      "Inburgering guide",
    ],
    [
      "Permanent residence (verblijfsvergunning onbepaalde tijd)",
      "Separate IND application after qualifying lawful stay — not automatic after five years on HSM",
      "Permanent residence guide",
    ],
    [
      "Dutch citizenship (optional)",
      "Usually five or more years lawful stay plus integration; renunciation rules may apply",
      "Dutch citizenship guide",
    ],
  ],
} as const;

export const hsmLongTermStayPathDisclaimer =
  "Orientation only — not immigration advice. Permanent residence and citizenship have separate IND criteria (lawful stay length, absences, income, integration, and route-specific rules). Confirm your decision letter validity and next steps on the IND permanent residence page." as const;
