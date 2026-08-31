export const CITIZENSHIP_TIMELINE_CANONICAL =
  "/netherlands/citizenship/tools/dutch-citizenship-timeline-calculator/";

export const CITIZENSHIP_TIMELINE_FAQ_ITEMS = [
  {
    id: "is-this-a-decision",
    question: "Does this calculator tell me when IND will approve citizenship?",
    answer:
      "No. It builds an orientation timeline from common naturalisation themes (residence horizon, integration, renunciation, gemeente application, decision period, ceremony). Only IND and your municipality assess your case. Confirm current rules on official pages.",
  },
  {
    id: "naturalisation-vs-option",
    question: "Should I use naturalisation or option timing?",
    answer:
      "Most adult expats use naturalisation after qualifying lawful residence and integration proof. Option is a shorter path for specific legal categories and usually skips integration demonstration and renunciation. Check the IND option page before assuming the five-year clock is your only path.",
  },
  {
    id: "five-years",
    question: "Is five years always required?",
    answer:
      "Many naturalisation routes look at five consecutive years of lawful residence, but IND publishes exceptions for shorter periods. Permit gaps and absences matter. Verify on IND — do not treat this tool’s horizon as a hard legal deadline.",
  },
  {
    id: "inburgering",
    question: "Does finishing inburgering make me Dutch?",
    answer:
      "No. Civic integration proof usually unlocks one naturalisation condition (often at least A2 or an exemption). You still need residence, public-order, and other IND conditions — and you become Dutch only after the ceremony.",
  },
  {
    id: "decision-period",
    question: "How long does IND take after I apply?",
    answer:
      "IND commonly describes a naturalisation decision period of up to 12 months (confirm current figures on IND). A positive decision still requires the ceremony before you are Dutch.",
  },
];

export const CITIZENSHIP_TIMELINE_OFFICIAL_SOURCES = [
  {
    label: "IND — Becoming Dutch through naturalisation",
    href: "https://ind.nl/en/dutch-citizenship/becoming-a-dutch-national-through-naturalisation",
  },
  {
    label: "IND — Becoming Dutch through option",
    href: "https://ind.nl/en/dutch-citizenship/becoming-a-dutch-national-through-option",
  },
  {
    label: "IND — Civic integration for naturalisation",
    href: "https://ind.nl/en/civic-integration-for-naturalisation",
  },
  {
    label: "IND — Exceptions to the 5-year term (naturalisation)",
    href: "https://ind.nl/en/exceptions-to-the-5-year-term-for-naturalisation-in-the-netherlands",
  },
  {
    label: "IND — Renouncing your nationality",
    href: "https://ind.nl/en/renouncing-your-nationality",
  },
  {
    label: "Government.nl — Dual citizenship",
    href: "https://www.government.nl/themes/migration-and-travel/dutch-citizenship/dual-citizenship",
  },
  {
    label: "DUO — inburgeren.nl",
    href: "https://www.inburgeren.nl/en",
  },
];

export const CITIZENSHIP_TIMELINE_RELATED_GUIDES = [
  {
    href: "/netherlands/citizenship/dutch-citizenship/",
    title: "Dutch citizenship for expats",
    description: "Naturalisation vs option, dual nationality, and what inburgering unlocks.",
  },
  {
    href: "/netherlands/citizenship/permanent-residence/",
    title: "Permanent residence in the Netherlands",
    description: "PR is a separate stay status many people secure before citizenship.",
  },
  {
    href: "/netherlands/integration/inburgering/",
    title: "Inburgering guide",
    description: "Wi 2021 / B1, HSM vs obligation, KNM from July 2025.",
  },
  {
    href: "/netherlands/visa/highly-skilled-migrant/",
    title: "Highly Skilled Migrant visa",
    description: "Sponsor-tied stay context before long-term nationality planning.",
  },
];

export const ROUTE_OPTIONS = [
  { value: "naturalisation", label: "Naturalisation (most adult expats)" },
  { value: "option_maybe", label: "Option might apply — check first" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const RESIDENCE_YEARS_OPTIONS = [
  { value: "under_3", label: "Under 3 years" },
  { value: "three_to_four", label: "3–4 years" },
  { value: "about_five", label: "About 5 years" },
  { value: "over_five", label: "More than 5 years" },
  { value: "unsure", label: "Not sure" },
] as const;

export const CONTINUITY_OPTIONS = [
  { value: "continuous_on_time", label: "Continuous — renewed on time" },
  { value: "job_search_used", label: "Used an HSM job-search / unemployment window" },
  { value: "gaps_or_late", label: "Gaps or late renewals" },
  { value: "unsure", label: "Not sure" },
] as const;

export const INTEGRATION_OPTIONS = [
  { value: "diploma_a2_or_higher", label: "Civic integration diploma (A2 or higher)" },
  { value: "wi2021_certificate", label: "Wi 2021 civic integration certificate" },
  { value: "exemption", label: "IND-recognised exemption / dispensation" },
  { value: "in_progress", label: "Exams / course still in progress" },
  { value: "not_started", label: "Not started" },
  { value: "unsure", label: "Not sure" },
] as const;

export const RENUNCIATION_OPTIONS = [
  { value: "willing", label: "Willing to renounce if required" },
  { value: "possible_exception", label: "I may qualify for an exception" },
  { value: "not_ready", label: "Not ready / want to keep other nationality" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const LONG_TERM_OPTIONS = [
  { value: "none", label: "No long-term status yet" },
  { value: "dutch_pr", label: "Dutch permanent residence" },
  { value: "eu_ltr", label: "EU long-term resident status" },
  { value: "unsure", label: "Not sure" },
] as const;

export const AGE_OPTIONS = [
  { value: "yes", label: "Yes (18+)" },
  { value: "no", label: "No (under 18)" },
  { value: "unsure", label: "Not sure" },
] as const;
