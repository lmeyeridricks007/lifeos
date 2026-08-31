export const INTEGRATION_REQUIREMENT_CANONICAL = "/netherlands/integration/tools/integration-requirement-checker/";

export const INTEGRATION_REQUIREMENT_FAQ_ITEMS = [
  {
    id: "does-this-decide",
    question: "Does this tool decide if I must inburgeren?",
    answer:
      "No. It surfaces orientation bands from common IND / DUO themes (obligation letter, cohort, goals). Only your IND decision letter and official portals decide whether you have inburgeringsplicht.",
  },
  {
    id: "hsm",
    question: "I am on HSM — do I still need exams?",
    answer:
      "Many Highly Skilled Migrants are not under inburgeringsplicht on the temporary work permit, but permanent residence and citizenship usually still need civic integration proof. Confirm your letter, then plan evidence early.",
  },
  {
    id: "wi2021",
    question: "What is Wi 2021 vs older rules?",
    answer:
      "If your civic integration obligation started on or after 1 January 2022, Wet inburgering 2021 usually applies (gemeente PIP, often a B1-route). Older cohorts may follow different packaging — check your DUO correspondence.",
  },
  {
    id: "pr",
    question: "Is obligation the same as the PR integration requirement?",
    answer:
      "No. Obligation is a legal duty for some newcomers. IND’s civic integration requirement for a more secure residence permit is a separate evidence check when you apply for permanent residence (or similar).",
  },
];

export const INTEGRATION_REQUIREMENT_OFFICIAL_SOURCES = [
  { label: "DUO — inburgeren.nl", href: "https://www.inburgeren.nl/en" },
  {
    label: "IND — Civic integration for a more secure residence permit",
    href: "https://ind.nl/en/living-in-the-netherlands-with-a-residence-permit/civic-integration-for-more-secure-residence-permit",
  },
  {
    label: "Government.nl — Civic integration",
    href: "https://www.government.nl/themes/migration-and-travel/integration-in-the-netherlands/civic-integration-in-the-netherlands",
  },
];

export const INTEGRATION_REQUIREMENT_RELATED_GUIDES = [
  {
    href: "/netherlands/integration/inburgering/",
    title: "Inburgering in the Netherlands",
    description: "Wi 2021 / B1, HSM vs obligation, KNM from July 2025, DUO vs IND.",
  },
  {
    href: "/netherlands/citizenship/permanent-residence/",
    title: "Permanent residence in the Netherlands",
    description: "Five-year path and civic integration evidence for secure residence.",
  },
  {
    href: "/netherlands/visa/highly-skilled-migrant/",
    title: "Highly Skilled Migrant visa",
    description: "HSM permit context for obligation vs later PR planning.",
  },
];

export const RESIDENCE_BASIS_OPTIONS = [
  { value: "hsm", label: "Highly Skilled Migrant / similar work permit" },
  { value: "family", label: "Family / partner residence" },
  { value: "asylum_or_other", label: "Asylum or other often-obligated route" },
  { value: "student_or_temp", label: "Student / other temporary stay" },
  { value: "already_permanent", label: "Already permanent / EU long-term resident" },
  { value: "other", label: "Other" },
  { value: "unsure", label: "Not sure" },
] as const;

export const OBLIGATION_LETTER_OPTIONS = [
  { value: "yes_obligated", label: "Yes — letter says I must inburgeren" },
  { value: "no_not_obligated", label: "No — not under inburgeringsplicht (as I understand it)" },
  { value: "unsure", label: "Not sure — need to check my IND letter" },
] as const;

export const COHORT_OPTIONS = [
  { value: "wi2021", label: "Wi 2021 (obligation from 1 Jan 2022 onward)" },
  { value: "older_wi2013", label: "Older / Wi 2013-style cohort" },
  { value: "unsure", label: "Not sure" },
] as const;

export const GOAL_OPTIONS = [
  { value: "obligation_only", label: "Meet an obligation only" },
  { value: "permanent_residence", label: "Permanent residence" },
  { value: "citizenship", label: "Dutch citizenship" },
  { value: "both_pr_citizenship", label: "Both PR and citizenship" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const EXEMPTION_OPTIONS = [
  { value: "dutch_diploma_possible", label: "Possible Dutch diploma pathway" },
  { value: "exemption_exploring", label: "Exploring an exemption / dispensation" },
  { value: "none_known", label: "No exemption I know of" },
  { value: "unsure", label: "Not sure" },
] as const;

export const YEARS_IN_NL_OPTIONS = [
  { value: "under_1", label: "Under 1 year" },
  { value: "one_to_three", label: "1–3 years" },
  { value: "three_plus", label: "3+ years" },
  { value: "unsure", label: "Not sure" },
] as const;
