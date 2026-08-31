export const PR_ELIGIBILITY_CANONICAL =
  "/netherlands/citizenship/tools/permanent-residence-eligibility-calculator/";

export const PR_ELIGIBILITY_FAQ_ITEMS = [
  {
    id: "is-this-a-decision",
    question: "Does this calculator mean IND will grant permanent residence?",
    answer:
      "No. It is an orientation checklist based on common IND themes (consecutive residence, continuity, BRP, integration evidence, valid permit). Only IND assesses your application. Confirm the current requirements on the IND permanent residence page.",
  },
  {
    id: "hsm-five-years",
    question: "I have been on HSM for five years — am I automatically permanent?",
    answer:
      "No. HSM remains temporary and sponsor-tied until you successfully apply for permanent residence (or another status). Lawful HSM years may count toward continuous residence when IND requirements align, but five years on HSM is not the same as being granted PR.",
  },
  {
    id: "integration",
    question: "Do I need inburgering for permanent residence?",
    answer:
      "Usually you need civic integration proof at least at A2, a Wi 2021 certificate, or an IND-recognised exemption / dispensation for a more secure residence permit. That is separate from whether you had inburgeringsplicht on arrival. See IND’s civic integration page and our inburgering guide.",
  },
  {
    id: "job-loss",
    question: "Can permanent residence replace the HSM job-search clock?",
    answer:
      "No. Losing a sponsor triggers HSM unemployment / job-search rules first. Applying for PR does not pause those rules. Stabilise lawful stay, then pursue PR when requirements align.",
  },
  {
    id: "citizenship",
    question: "Is permanent residence the same as Dutch citizenship?",
    answer:
      "No. Permanent residence is a long-term stay status. Citizenship changes nationality and follows separate naturalisation or option rules, often with renunciation caveats.",
  },
];

export const PR_ELIGIBILITY_OFFICIAL_SOURCES = [
  {
    label: "IND — Permanent residence permit",
    href: "https://ind.nl/en/replace-extend-renew-and-change/permanent-residency/permanent-residence-permit",
  },
  {
    label: "IND — Civic integration for a more secure residence permit",
    href: "https://ind.nl/en/living-in-the-netherlands-with-a-residence-permit/civic-integration-for-more-secure-residence-permit",
  },
  {
    label: "IND — Exceptions to the 5-year term",
    href: "https://ind.nl/en/exceptions-to-5-year-term-for-permanent-residency",
  },
  {
    label: "IND — Long-term EU residents application",
    href: "https://ind.nl/en/residence-permits/long-term-eu-residency/apply-for-a-residence-permit-for-long-term-eu-residents",
  },
  {
    label: "IND — Highly skilled migrant",
    href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant",
  },
  {
    label: "DUO — inburgeren.nl",
    href: "https://www.inburgeren.nl/en",
  },
];

export const PR_ELIGIBILITY_RELATED_GUIDES = [
  {
    href: "/netherlands/citizenship/permanent-residence/",
    title: "Permanent residence in the Netherlands",
    description: "HSM → PR path, inburgering vs exemption, job changes late in year five.",
  },
  {
    href: "/netherlands/integration/inburgering/",
    title: "Inburgering guide",
    description: "Wi 2021 / B1, HSM vs obligation, KNM from July 2025, DUO roles.",
  },
  {
    href: "/netherlands/citizenship/dutch-citizenship/",
    title: "Dutch citizenship for expats",
    description: "Naturalisation vs option and dual nationality — separate from PR.",
  },
  {
    href: "/netherlands/visa/highly-skilled-migrant/",
    title: "Highly Skilled Migrant visa",
    description: "Sponsor rules, job-search window, and long-term stay orientation.",
  },
];

export const RESIDENCE_YEARS_OPTIONS = [
  { value: "under_3", label: "Under 3 years" },
  { value: "three_to_four", label: "3–4 years" },
  { value: "about_five", label: "About 5 years" },
  { value: "over_five", label: "More than 5 years" },
  { value: "unsure", label: "Not sure" },
] as const;

export const PERMIT_TYPE_OPTIONS = [
  { value: "hsm", label: "Highly Skilled Migrant (HSM)" },
  { value: "other_temporary_work", label: "Other temporary work permit" },
  { value: "family", label: "Family / partner route" },
  { value: "already_permanent", label: "Already have Dutch permanent residence" },
  { value: "eu_long_term", label: "Already have EU long-term resident status" },
  { value: "other", label: "Other / mixed permit history" },
  { value: "unsure", label: "Not sure" },
] as const;

export const CONTINUITY_OPTIONS = [
  { value: "continuous_on_time", label: "Continuous — renewed on time" },
  { value: "job_search_used", label: "Used an HSM job-search / unemployment window" },
  { value: "gaps_or_late", label: "Gaps or late renewals" },
  { value: "unsure", label: "Not sure" },
] as const;

export const ABSENCES_OPTIONS = [
  { value: "none_or_short", label: "None or short holidays only" },
  { value: "significant_months", label: "Significant months abroad" },
  { value: "unsure", label: "Not sure" },
] as const;

export const BRP_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
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

export const PERMIT_VALID_OPTIONS = [
  { value: "yes", label: "Yes — valid" },
  { value: "expiring_soon", label: "Expiring within ~3 months" },
  { value: "no", label: "No — not valid" },
  { value: "unsure", label: "Not sure" },
] as const;

export const AGE_OPTIONS = [
  { value: "yes", label: "Yes (18+)" },
  { value: "no", label: "No (under 18)" },
  { value: "unsure", label: "Not sure" },
] as const;
