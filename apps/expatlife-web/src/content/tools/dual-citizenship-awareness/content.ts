export const DUAL_CITIZENSHIP_CANONICAL = "/netherlands/citizenship/tools/dual-citizenship-awareness-tool/";

export const DUAL_CITIZENSHIP_FAQ_ITEMS = [
  {
    id: "does-this-decide",
    question: "Does this tool tell me I can keep dual citizenship?",
    answer:
      "No. It surfaces decision topics from Dutch dual nationality and renunciation guidance plus home-country friction points. Only IND / government.nl and your home authorities decide what applies to you.",
  },
  {
    id: "must-i-renounce",
    question: "Do I always have to renounce my other nationality?",
    answer:
      "For naturalisation, the Netherlands generally requires renunciation if possible. Exceptions exist and are case-specific. Option usually does not require renunciation when you qualify. Confirm on government.nl and IND.",
  },
  {
    id: "option",
    question: "How does option change dual nationality?",
    answer:
      "IND notes that option usually does not require renouncing your other nationality and does not require demonstrating integration. Option is only for specific legal categories — years of residence alone are not enough.",
  },
  {
    id: "abroad",
    question: "Can I lose Dutch nationality later if I live abroad?",
    answer:
      "In some cases, adult dual nationals who live outside the Kingdom of the Netherlands and the EU for a long period without renewing a Dutch passport or declaration can lose Dutch nationality automatically. Read government.nl loss-of-citizenship guidance.",
  },
  {
    id: "pr-instead",
    question: "What if I refuse to renounce?",
    answer:
      "Naturalisation may not fit unless a recognised exception applies or option is available. Permanent residence can stabilise stay rights without changing nationality.",
  },
];

export const DUAL_CITIZENSHIP_OFFICIAL_SOURCES = [
  {
    label: "Government.nl — Dual citizenship",
    href: "https://www.government.nl/themes/migration-and-travel/dutch-citizenship/dual-citizenship",
  },
  {
    label: "IND — Renouncing your nationality",
    href: "https://ind.nl/en/renouncing-your-nationality",
  },
  {
    label: "IND — Becoming Dutch through naturalisation",
    href: "https://ind.nl/en/dutch-citizenship/becoming-a-dutch-national-through-naturalisation",
  },
  {
    label: "IND — Becoming Dutch through option",
    href: "https://ind.nl/en/dutch-citizenship/becoming-a-dutch-national-through-option",
  },
  {
    label: "Government.nl — Automatic loss of Dutch citizenship",
    href: "https://www.government.nl/themes/migration-and-travel/dutch-citizenship/loss-of-dutch-citizenship/automatic-loss-of-dutch-citizenship",
  },
];

export const DUAL_CITIZENSHIP_RELATED_GUIDES = [
  {
    href: "/netherlands/citizenship/dutch-citizenship/",
    title: "Dutch citizenship for expats",
    description: "Naturalisation vs option and dual nationality caveats.",
  },
  {
    href: "/netherlands/citizenship/permanent-residence/",
    title: "Permanent residence in the Netherlands",
    description: "Stay rights without changing nationality.",
  },
  {
    href: "/netherlands/integration/inburgering/",
    title: "Inburgering guide",
    description: "Integration proof for naturalisation is separate from renunciation.",
  },
];

export const ROUTE_OPTIONS = [
  { value: "naturalisation", label: "Naturalisation" },
  { value: "option_maybe", label: "Option might apply" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const HOME_RENOUNCE_OPTIONS = [
  { value: "allows_renounce", label: "Home country allows renunciation" },
  { value: "forbids_renounce", label: "Home country forbids renunciation" },
  { value: "auto_loss_on_dutch", label: "Home nationality may drop automatically if I become Dutch" },
  { value: "unsure", label: "Not sure — need to check embassy" },
] as const;

export const EXCEPTION_OPTIONS = [
  { value: "none_known", label: "No Dutch exception I know of" },
  { value: "married_or_partner_dutch", label: "Married / partner of a Dutch citizen (possible theme)" },
  { value: "recognised_refugee", label: "Recognised refugee (possible theme)" },
  { value: "cannot_renounce_home", label: "Cannot renounce under home law (possible theme)" },
  { value: "auto_loss_home", label: "Automatic loss under home law (possible theme)" },
  { value: "other_listed", label: "Another ground listed on official pages" },
  { value: "unsure", label: "Not sure" },
] as const;

export const YES_NO_UNSURE_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
] as const;
