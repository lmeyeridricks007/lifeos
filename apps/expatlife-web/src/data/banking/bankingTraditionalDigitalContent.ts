/**
 * Shared editorial banking content for Traditional vs Digital lens and future tools
 * (e.g. bank comparison). Import from pages; keep paths as string literals to avoid cycles.
 */

import type { BankId } from "./banks";
import type { TraditionalDigitalComparisonRow } from "./traditionalDigitalComparison";
import { banks } from "./banks";
import { buildTraditionalDigitalComparisonRowsFromBanks } from "./traditionalDigitalComparison";

// --- Paths (reuse across money guides) ---
export const BANKING_CONTENT_BEST_BANKS_EXPATS_PATH = "/netherlands/money/banking/best-banks-expats/" as const;
export const BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH = "/netherlands/money/banking/traditional-vs-digital/" as const;
export const BANKING_CONTENT_TYPES_OF_ACCOUNTS_PATH = "/netherlands/money/banking/types-of-accounts/" as const;

// --- Type vs digital comparison (editorial overlay + values synced from `banks`) ---
export type BankingTypeComparisonRow = {
  id: string;
  label: string;
  traditionalValue: string;
  digitalValue: string;
  hybridValue: string;
  /** How to read the row; not a live claim. */
  explanation: string;
};

const COMPARISON_ROW_EXPLANATIONS: Record<string, string> = {
  onboarding:
    "How fast you get a working card: big banks often ask for more paperwork up front; app banks can be quicker if your ID check goes smoothly.",
  bsn:
    "You usually need a BSN and a Dutch address on file. Which bank says “yes” today depends on the product, not just the brand name.",
  english:
    "Check whether English is offered where you need it: in the app, on the phone, in chat, or in a branch.",
  ideal:
    "iDEAL (paying online from your Dutch account) depends on the account type. Not every app-bank package works the same for every bill.",
  salary:
    "Some employers and landlords prefer a familiar Dutch bank account number (IBAN). Ask them in writing what they accept.",
  intl:
    "Sending money abroad and exchange rates change often. Use each bank’s official fee page for your country — this row is a rough picture only.",
  fees:
    "The monthly price on the homepage is not the whole story. Check extra costs for cards, cash machines, and foreign money on the bank’s price list (PDF).",
  support:
    "Decide if you want phone or branch help when something goes wrong, or if chat in the app is enough for you.",
  scores:
    "Our 1–5 scores are a quick editorial view from one shared model — not a score for whether you qualify.",
  products:
    "For a mortgage or other big Dutch products, people often still use a big Dutch bank; app-only banks may offer fewer of these products.",
  profile:
    "Short who it’s for lines come from our bank cards — your contract and the bank’s terms still decide what applies to you.",
};

function buildBankingTypeComparisonRows(): readonly BankingTypeComparisonRow[] {
  return buildTraditionalDigitalComparisonRowsFromBanks(banks).map((r) => ({
    id: r.id,
    label: r.label,
    traditionalValue: r.traditional,
    digitalValue: r.digital,
    hybridValue: r.hybrid,
    explanation: COMPARISON_ROW_EXPLANATIONS[r.id] ?? "",
  }));
}

/** Canonical traditional vs digital vs hybrid comparison rows (+ explanations). Values follow `banks.ts`. */
export const bankingTypeComparisonRows: readonly BankingTypeComparisonRow[] = buildBankingTypeComparisonRows();

// --- Scenario cards (“by expat scenario”) ---
export type BankingScenarioRelatedLink = { readonly href: string; readonly label: string };

export type BankingScenarioRecommendation = {
  readonly id: string;
  readonly title: string;
  /** Short headline, e.g. “Traditional or hybrid”. */
  readonly recommendedSetup: string;
  readonly why: string;
  readonly watchOut: string;
  readonly relatedLinks: readonly BankingScenarioRelatedLink[];
  readonly relatedBankIds?: readonly BankId[];
};

export const bankingScenarioRecommendations: readonly BankingScenarioRecommendation[] = [
  {
    id: "new-arrival-partial-setup",
    title: "Just arrived — paperwork not finished yet",
    recommendedSetup: "App bank first, big Dutch bank later if you need one",
    why: "You may get a card faster on your phone while you wait for your BSN or address to be final.",
    watchOut: "Ask your landlord and employer which bank account number (IBAN) they accept before you rely on one account for everything.",
    relatedLinks: [{ href: "/netherlands/open-bank-account-netherlands/", label: "Open account guide" }],
    relatedBankIds: ["bunq", "revolut"],
  },
  {
    id: "employee-dutch-salary",
    title: "Paid by a Dutch employer — staying a while",
    recommendedSetup: "Big Dutch bank, or big bank + app bank",
    why: "Salary and automatic Dutch bills (like rent taken from your account) are often easiest with a normal Dutch current account.",
    watchOut: "Prices and how much English help you get are not the same at every bank — read the account package before you commit.",
    relatedLinks: [{ href: BANKING_CONTENT_BEST_BANKS_EXPATS_PATH, label: "Bank shortlist" }],
    relatedBankIds: ["ing", "abn-amro", "rabobank"],
  },
  {
    id: "frequent-traveller",
    title: "Often abroad or sending money overseas",
    recommendedSetup: "App bank, or big Dutch bank + app bank",
    why: "Spending in other currencies and sending money is often easier in an app-first product.",
    watchOut: "If Dutch companies take money straight from your account each month, you may still want a Dutch current account that supports that.",
    relatedLinks: [{ href: "/netherlands/services/banks/", label: "Banks directory" }],
    relatedBankIds: ["revolut", "bunq"],
  },
  {
    id: "family-long-term",
    title: "Family planning to stay long-term",
    recommendedSetup: "Big Dutch bank, plus optional second card (app bank)",
    why: "Day-to-day household money in the Netherlands, plus a spare card from another provider if one card is blocked or late.",
    watchOut: "If you plan a mortgage soon, a full-service Dutch bank is often where people start those talks.",
    relatedLinks: [{ href: BANKING_CONTENT_BEST_BANKS_EXPATS_PATH, label: "Bank shortlist" }],
    relatedBankIds: ["ing", "rabobank"],
  },
  {
    id: "freelancer-zzp",
    title: "Freelancer (ZZP)",
    recommendedSetup: "Pick a real business account if you need one — compare carefully",
    why: "Chamber of commerce (KvK) and VAT need the right business product. A normal personal app may not be enough.",
    watchOut: "Read the business price list, not only the personal app — rules differ.",
    relatedLinks: [{ href: "/netherlands/services/banks/", label: "Banking services" }],
    relatedBankIds: ["ing", "abn-amro"],
  },
  {
    id: "student-short-term",
    title: "Student or short stay",
    recommendedSetup: "App bank can work — check what your school and housing need",
    why: "Less paperwork can suit a short stay.",
    watchOut: "Some housing or university steps still ask for a Dutch IBAN from a bank they recognise.",
    relatedLinks: [{ href: "/netherlands/money/banking/how-payments-work/", label: "How payments work" }],
    relatedBankIds: ["bunq", "n26"],
  },
];

// --- Hybrid setup visual + copy ---
export const bankingHybridSetupUseCases = {
  introBullets: [
    "Big Dutch (traditional) bank for salary, rent, and most everyday Dutch bills.",
    "App (digital) bank for travel, spending in other currencies, sending money abroad, and a second card.",
    "A second way to pay if your first bank is slow to open or blocks your card.",
    "Very common in the first months in the Netherlands, before everything runs through one account.",
  ] as const,
  traditionalAccountLabel: "Dutch / traditional account",
  digitalAccountLabel: "Digital bank account",
  traditionalAccountHint: "A normal Dutch account number for salary, rent, and paying Dutch shops and bills.",
  digitalAccountHint: "Phone-first spending, other currencies, and a spare card if the other bank is slow.",
  traditionalUsesHeading: "Often on the Dutch account",
  digitalUsesHeading: "Often on the digital account",
  traditionalItems: [
    "Salary credits and payroll",
    "Rent and recurring local debits",
    "iDEAL and everyday local payments",
    "Mortgage, family, and long-term retail depth",
  ] as const,
  digitalItems: [
    "Travel and trips abroad",
    "Holding and spending other currencies",
    "Sending money to other countries (compare total cost)",
    "Backup card if the other account is delayed",
  ] as const,
  cta: { label: "See our bank shortlist", href: BANKING_CONTENT_BEST_BANKS_EXPATS_PATH },
} as const;

// --- Common mistakes ---
export type BankingCommonMistake = { readonly id: string; readonly title: string; readonly body: string };

export const bankingCommonMistakes: readonly BankingCommonMistake[] = [
  {
    id: "digital-replaces-all",
    title: "Thinking one app bank can do everything",
    body: "Some contracts still need a Dutch current account that takes automatic payments the way they expect. Read what you sign.",
  },
  {
    id: "traditional-always-better",
    title: "Thinking a big bank is always the right choice",
    body: "If you never go to a branch, you might pay for extras you do not use.",
  },
  {
    id: "ignore-ideal",
    title: "Forgetting about iDEAL and everyday Dutch payments",
    body: "iDEAL is how many Dutch websites take payment from your current account. If that setup is weak, daily life gets annoying.",
  },
  {
    id: "skip-salary-rent-check",
    title: "Not asking your employer or landlord which account they want",
    body: "Get it in writing or from an official template — random forum posts are often wrong.",
  },
  {
    id: "skip-plan-fees",
    title: "Not reading the full price list",
    body: "Free often has conditions. Check monthly fees, cards, cash machines, and foreign money.",
  },
  {
    id: "one-account-relocation",
    title: "Relying on only one bank during your move",
    body: "A second card or account lowers stress if checks fail or your card arrives late.",
  },
  {
    id: "ignore-intl-costs",
    title: "Ignoring what international transfers really cost",
    body: "Compare per payment vs monthly plans using the number of transfers you actually make.",
  },
  {
    id: "skip-disclosures",
    title: "Trusting ads instead of the official documents",
    body: "Deposit protection and what the account covers differ. Read the bank’s official PDFs, not only the homepage.",
  },
];

// --- FAQ ---
export type BankingTraditionalDigitalFaqItem = { readonly id: string; readonly q: string; readonly a: string };

export const bankingTraditionalDigitalFaq: readonly BankingTraditionalDigitalFaqItem[] = [
  {
    id: "digital-accepted-nl",
    q: "Are app-only (“digital”) banks normal in the Netherlands?",
    a: "Yes — many people use them every day. Whether your salary, rent, or a specific company accepts that exact account is a separate question. Check your contract and the bank’s own FAQ.",
  },
  {
    id: "need-traditional",
    q: "Do I need a big Dutch bank account?",
    a: "Not everyone — but most people who stay want a Dutch current account for salary, rent, taxes, and automatic Dutch payments. Match the account to who you pay and who pays you.",
  },
  {
    id: "revolut-n26",
    q: "Can I use Revolut or N26 in the Netherlands?",
    a: "Yes for day-to-day spending and travel is common. Whether that fully replaces what your employer or landlord wants is up to them — ask directly.",
  },
  {
    id: "bunq-dutch",
    q: "Is bunq a Dutch bank?",
    a: "bunq is a Dutch bank for many everyday products. Still read the official terms for deposit protection on the exact account you open.",
  },
  {
    id: "salary-better",
    q: "Which type of account is best for salary?",
    a: "Many employers are used to large Dutch banks, but some app products also work. Ask HR and read the bank’s current rules for payroll.",
  },
  {
    id: "intl-better",
    q: "Which is better for sending money abroad?",
    a: "Specialist transfer apps and some app banks are often clearer on total cost. Compare the full price with your Dutch bank’s official fee list.",
  },
  {
    id: "two-accounts",
    q: "Should I have two bank accounts?",
    a: "Many expats do while moving, or when they want travel money plus a normal Dutch account for bills. Two accounts means more to keep track of — only keep what you use.",
  },
  {
    id: "digital-safe",
    q: "Are digital banks safe?",
    a: "Banks that regulators oversee must follow rules, but how much of your money is protected depends on the exact product and country of the licence. Read that product’s official information, not a blog summary.",
  },
];

// --- Related guides (internal + labelled external) ---
export type BankingRelatedGuide = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly ctaLabel: string;
};

export const bankingRelatedGuides: readonly BankingRelatedGuide[] = [
  {
    id: "types-of-accounts",
    title: "Types of bank accounts",
    description: "Betaalrekening, spaarrekening, joint, student, business, digital, debit and credit — map account types to your situation.",
    href: BANKING_CONTENT_TYPES_OF_ACCOUNTS_PATH,
    ctaLabel: "Open account types guide",
  },
  {
    id: "banking-fees",
    title: "Banking fees & costs",
    description: "Account fees, cards, ATM, transfers, FX, and common expat traps — practical checklist before you compare banks.",
    href: "/netherlands/money/banking/fees/",
    ctaLabel: "Open fee guide",
  },
  {
    id: "best-banks",
    title: "Best banks for expats",
    description: "Our short list with a comparison table — a good next step after this page.",
    href: BANKING_CONTENT_BEST_BANKS_EXPATS_PATH,
    ctaLabel: "Open guide",
  },
  {
    id: "open-account",
    title: "Open a bank account in the Netherlands",
    description: "What documents you need, BSN timing, and what banks often ask for.",
    href: "/netherlands/open-bank-account-netherlands/",
    ctaLabel: "Read Move guide",
  },
  {
    id: "banks-directory",
    title: "Banks directory",
    description: "More providers and fee context — not live quotes.",
    href: "/netherlands/services/banks/",
    ctaLabel: "Browse banks hub",
  },
  {
    id: "payments",
    title: "How payments work (IBAN, iDEAL, SEPA)",
    description: "How rent, shops, and subscriptions connect to your Dutch account.",
    href: "/netherlands/money/banking/how-payments-work/",
    ctaLabel: "Open payments guide",
  },
  {
    id: "wise-external",
    title: "International transfers (Wise)",
    description: "Many people use Wise next to a Dutch account for sending money abroad.",
    href: "https://wise.com/",
    ctaLabel: "Wise (external)",
  },
  {
    id: "comparison-roadmap",
    title: "Bank comparison tool",
    description: "A dedicated compare tool is planned — for now, use Best banks for expats.",
    href: BANKING_CONTENT_BEST_BANKS_EXPATS_PATH,
    ctaLabel: "Use comparison guide",
  },
  {
    id: "col",
    title: "Cost of living calculator",
    description: "Rough monthly costs next to what you might pay in bank fees.",
    href: "/netherlands/money/tools/cost-of-living-calculator/",
    ctaLabel: "Open calculator",
  },
  {
    id: "salary-net",
    title: "Dutch salary (net) calculator",
    description: "See take-home pay before you worry about minimum balances.",
    href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
    ctaLabel: "Estimate net pay",
  },
  {
    id: "job-offer",
    title: "Job offer comparison",
    description: "If a new job drives your banking choices, compare offers on similar money assumptions.",
    href: "/netherlands/work/tools/job-offer-comparison/",
    ctaLabel: "Compare offers",
  },
  {
    id: "utilities",
    title: "Utilities & services comparison",
    description: "Many bills are paid from your Dutch account — line this up with how you bank.",
    href: "/netherlands/living/tools/utilities-services-comparison/",
    ctaLabel: "Compare utilities",
  },
];

// --- Recommended providers (monetization shell + placement ids) ---
export const bankingRecommendedProviders = {
  sectionId: "recommended-providers",
  eyebrow: "After the guide",
  title: "Optional: partners & directory",
  subtitle:
    "This block is not our editorial “best bank” list. It groups links we host for big Dutch-style banks and app-style products. Always check fees and who can open an account on the bank’s own website.",
  boundaryNoteTraditional:
    "Big Dutch / branch-style links below are for topic fit, not “the best bank for you”. Order is not pay-to-rank unless a link says sponsored.",
  boundaryNoteDigital:
    "App-style products differ in rules and what they cover. Read the latest Dutch information from that bank before you use one account for salary or rent.",
  groupHeadingTraditional: "Traditional-style banks",
  groupHeadingDigital: "Digital-style banks & apps",
  placementTraditionalId: "nl-money-traditional-vs-digital-traditional",
  placementDigitalId: "nl-money-traditional-vs-digital-digital",
  analyticsPageContext: "traditional-vs-digital-banking-providers",
  categoryLinks: [
    { href: BANKING_CONTENT_BEST_BANKS_EXPATS_PATH, label: "Best banks for expats" },
    { href: "/netherlands/open-bank-account-netherlands/", label: "Open a bank account" },
    { href: "/netherlands/services/banks/", label: "Banks directory" },
  ],
  browseLabel: "More editorial banking context: ",
} as const;

// --- Maps for UI / tools ---

/** Rows for `TraditionalDigitalComparisonTable` (includes optional `explanation`). */
export function bankingTypeComparisonRowsToTableRows(
  rows: readonly BankingTypeComparisonRow[] = bankingTypeComparisonRows
): TraditionalDigitalComparisonRow[] {
  return rows.map((r) => ({
    id: r.id,
    label: r.label,
    traditional: r.traditionalValue,
    digital: r.digitalValue,
    hybrid: r.hybridValue,
    explanation: r.explanation,
  }));
}

/** Map scenario config to `BankScenarioCards` props (no UI import). */
export function bankingScenarioRecommendationsToScenarioCards(
  rows: readonly BankingScenarioRecommendation[] = bankingScenarioRecommendations
) {
  return rows.map((s) => ({
    title: s.title,
    recommendation: s.recommendedSetup,
    why: s.why,
    watchOuts: s.watchOut,
    relatedLinks: s.relatedLinks,
    relatedBankIds: s.relatedBankIds,
  }));
}
