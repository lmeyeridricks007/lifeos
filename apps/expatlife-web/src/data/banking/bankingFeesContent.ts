/**
 * Editorial content for Banking Fees & Costs guide (`/netherlands/money/banking/fees/`).
 * No live fee amounts — framework copy only.
 */

import type { TraditionalDigitalComparisonRow } from "./traditionalDigitalComparison";

export { bankingFeeCategories, type BankingFeeCategory } from "./bankingFeeCategories";

export const BANKING_FEES_PAGE_PATH = "/netherlands/money/banking/fees/" as const;
export const BANKING_FEES_BEST_BANKS_PATH = "/netherlands/money/banking/best-banks-expats/" as const;
export const BANKING_FEES_TRADITIONAL_DIGITAL_PATH = "/netherlands/money/banking/traditional-vs-digital/" as const;

export const bankingFeesComparisonRows: readonly TraditionalDigitalComparisonRow[] = [
  {
    id: "monthly-model",
    label: "Monthly charge",
    traditional:
      "Often a simple package (basic / premium) with a fixed monthly line on the bank’s price list.",
    digital:
      "Often paid tiers; “free” can mean fewer features — moving up a tier adds cost.",
    hybrid:
      "Two banks can mean two monthly charges — only keep what you really use.",
    explanation: "Add up all monthly charges, not one headline number.",
  },
  {
    id: "card-cost",
    label: "Debit / extra card cost",
    traditional:
      "The main debit card is often in the package; extra or credit cards may cost extra.",
    digital:
      "Physical or extra cards are often add-ons; check what each plan includes.",
    hybrid:
      "You might pay for cards at both banks — decide which card is main at home vs abroad.",
    explanation: "Include delivery and replacement fees in your checklist.",
  },
  {
    id: "intl-use",
    label: "Use outside the Netherlands",
    traditional:
      "Strong for Dutch salary and everyday bills; sending money abroad may follow the bank’s standard tables.",
    digital:
      "Often handy for travel and several currencies — still check limits and which plan you need.",
    hybrid:
      "Many people use a Dutch account for life here and an app or specialist to send money across borders.",
    explanation: "Match the product to sending vs receiving and how often you do it.",
  },
  {
    id: "fx-markup",
    label: "Currency conversion & weekends",
    traditional:
      "Each bank sets its own exchange rates and weekend rules — read the official price list (PDF), not ads.",
    digital:
      "Apps sometimes show clearer rates per plan — weekend or after-hours extras can still apply.",
    hybrid:
      "Choose where you change money: bank, app, or specialist — then compare how much arrives, not only the listed fee.",
    explanation: "A worse rate is still a cost even when the transfer fee says “free”.",
  },
  {
    id: "atm",
    label: "Cash machine limits",
    traditional:
      "May include euro withdrawals at the bank’s own machines; abroad is often priced per withdrawal or capped.",
    digital:
      "Higher plans sometimes include a number of free cash withdrawals — fair use and other banks’ machine fees still apply.",
    hybrid:
      "Use your Dutch bank’s rules for euro cash and your travel app’s rules if you split accounts.",
    explanation: "A machine abroad can charge its own fee on top of what your bank lists.",
  },
  {
    id: "premium",
    label: "Paid upgrade plans",
    traditional:
      "Insurance-style extras may sit in premium packages — only pay if you would buy them anyway.",
    digital:
      "Top-tier plans cost more each month — worth it only if you use what they include.",
    hybrid:
      "Avoid paying twice for the same thing (for example two similar travel perks).",
    explanation: "A premium plan is only good value when the included services match how you live.",
  },
  {
    id: "local-integration",
    label: "Everyday Dutch payments",
    traditional:
      "Usually strong for iDEAL (Dutch online checkout), direct debits, and what employers and landlords expect.",
    digital:
      "Can be great for daily card spend — some landlords or forms still expect a classic Dutch current account.",
    hybrid:
      "Keeps Dutch payments simple while you handle currency abroad another way if you prefer.",
    explanation: "Check with payroll and housing, not only online forums.",
  },
  {
    id: "best-fit",
    label: "Who each type suits (fees)",
    traditional:
      "When day-to-day admin in the Netherlands is most of your banking and sends abroad are rare.",
    digital:
      "When you live mostly in the app, travel a lot, or change currency often — and you still meet local needs.",
    hybrid:
      "When you want stability in the Netherlands and clear tools abroad — and you accept two sets of fees.",
    explanation: "The cheapest headline is rarely the cheapest year for your real habits.",
  },
];

export type BankingFeesHiddenTrap = {
  readonly id: string;
  readonly title: string;
  readonly why: string;
  readonly avoid: string;
};

export const bankingFeesHiddenTraps: readonly BankingFeesHiddenTrap[] = [
  {
    id: "headline-only",
    title: "Choosing a bank only by the monthly fee",
    why: "A low monthly fee can hide costly currency change, cash abroad, or sends abroad that you use every month.",
    avoid: "Build a simple yearly sketch: monthly + cards + your typical international habits.",
  },
  {
    id: "ignore-transfer",
    title: "Ignoring international transfer cost",
    why: "Two transfers a month at a high all-in cost can exceed a year of “expensive” monthly account fees.",
    avoid: "Compare received amount for your real corridors — bank vs specialist vs app.",
  },
  {
    id: "premium-creep",
    title: "Premium plan creep",
    why: "Trials and upsells stack; features you liked in month one may be unused by month six.",
    avoid: "Set a calendar reminder to review tiers against actual usage.",
  },
  {
    id: "atm-abroad",
    title: "Cash machine costs abroad",
    why: "Your bank plus foreign ATM operator can both charge — easy to miss until a trip.",
    avoid: "Read foreign ATM rows before travel; carry two payment paths if cash is essential.",
  },
  {
    id: "dcc",
    title: "Paying in your home currency at a foreign till",
    why: "The machine offers pounds, dollars, etc. instead of local money — the rate is often worse for you.",
    avoid: "Choose pay in local currency when the terminal asks; compare the totals if you are unsure.",
  },
  {
    id: "duplicate",
    title: "Paying for duplicate accounts or cards",
    why: "Two banks can mean two monthly fees and idle cards you never activate.",
    avoid: "Open second accounts deliberately; close or downgrade what you do not monitor.",
  },
  {
    id: "business-pricing",
    title: "Not checking business-account pricing",
    why: "The personal marketing page does not show business prices (for example after Chamber of Commerce (KvK) registration).",
    avoid: "Open each bank’s business price list before you run freelance or company money through the wrong account.",
  },
  {
    id: "support-onboarding",
    title: "Not checking support before you pay",
    why: "Cheap tiers sometimes trim human help — painful when verification or a block happens.",
    avoid: "Decide what calm is worth: chat-only vs phone vs branch for your situation.",
  },
  {
    id: "foreign-too-long",
    title: "Using only a foreign account for Dutch life too long",
    why: "Some employers, landlords, and subscriptions expect a Dutch IBAN pattern for smooth setup.",
    avoid: "Align your account choice with payroll and housing templates early.",
  },
];

/** Practical checklist — same topics as traps in places; framed as neutral “what / why / how”. */
export type BankingFeesAvoidableCostCard = {
  readonly id: string;
  readonly title: string;
  readonly whatHappens: string;
  readonly whyItCosts: string;
  readonly howToAvoid: string;
};

export const bankingFeesAvoidableCosts: readonly BankingFeesAvoidableCostCard[] = [
  {
    id: "dcc-abroad",
    title: "Paying in your home currency abroad",
    whatHappens:
      "At a foreign card machine you are offered euros/dollars/etc. from “home” instead of local money.",
    whyItCosts:
      "That option often uses the shop or machine’s own rate, which is often worse than paying in local currency with your bank or card as usual.",
    howToAvoid:
      "When asked, pick local currency; if you see two totals, compare them before you confirm.",
  },
  {
    id: "transfer-spread",
    title: "Send abroad: small fee, worse exchange rate",
    whatHappens:
      "The listed fee looks small or “free”, but the exchange rate is less favourable than elsewhere.",
    whyItCosts:
      "The rate is part of the real cost — what matters is how much money the other person receives.",
    howToAvoid:
      "For the routes you use often, compare money received on the same day; read the international part of each bank’s price list, not only the domestic part.",
  },
  {
    id: "premium-unused",
    title: "Paying for premium plans you do not use",
    whatHappens:
      "You stay on a higher tier after travel perks, insurance bundles, or limits no longer match day-to-day life.",
    whyItCosts:
      "Subscription-style plans add a fixed monthly line on top of any base account charge.",
    howToAvoid:
      "Put a quarterly calendar note to match tier to usage; downgrade when included perks are not things you would buy anyway.",
  },
  {
    id: "duplicate-cards-accounts",
    title: "Duplicate cards / accounts",
    whatHappens:
      "A second bank, extra card, or unused account stays open “just in case” without a clear role.",
    whyItCosts:
      "Each stack can carry its own monthly, card, or inactivity lines — small amounts that repeat every month.",
    howToAvoid:
      "Name a primary account for NL salary and rent; add a second stack on purpose; close or downgrade what you do not open monthly.",
  },
  {
    id: "business-freelancer",
    title: "Business account costs as a freelancer",
    whatHappens:
      "ZZP income and invoices run through a personal package, or a business tier that does not match your volume.",
    whyItCosts:
      "Business products use different price lists; the wrong tier can mean per-transaction bands or missing included items you need.",
    howToAvoid:
      "Early on, open the business price list for your real volume; match Chamber of Commerce (KvK) and VAT flows to the product the bank sells for self-employed use.",
  },
  {
    id: "atm-outside-limits",
    title: "Cash withdrawals outside your plan’s free allowance",
    whatHappens:
      "You withdraw cash abroad or at third-party ATMs more often than your plan assumes.",
    whyItCosts:
      "Many packages price euro at home differently from foreign withdrawals; operators can add their own line.",
    howToAvoid:
      "Before trips, read ATM abroad and fair usage rows; shift routine spend to card where you can and carry a backup payment path.",
  },
  {
    id: "foreign-account-long",
    title: "Using a foreign account too long",
    whatHappens:
      "Salary, rent, or subscriptions stay on a non-Dutch IBAN after you are otherwise settled in the Netherlands.",
    whyItCosts:
      "The cost is not always a visible fee — it is time, exceptions, and mismatch with common Dutch templates; some flows work more smoothly with a local current account.",
    howToAvoid:
      "Plan a Dutch current account when your documents allow; keep a foreign account as a clear second role (e.g. home-country bills), not as an accidental default.",
  },
  {
    id: "family-joint-needs",
    title: "Not checking family / joint account needs",
    whatHappens:
      "You order a partner card, second card, or joint setup without reading how it is priced.",
    whyItCosts:
      "Extra plastic, linked profiles, or packaged family features may have their own annual or monthly lines.",
    howToAvoid:
      "Before you add anyone to the account, ask for the joint / extra-card lines on the current PDF and decide what you actually need this year.",
  },
];

export type BankingFeesScenarioCard = {
  readonly id: string;
  readonly title: string;
  readonly costDrivers: string;
  readonly comparisonPath: string;
  readonly relatedLinks: readonly { readonly href: string; readonly label: string }[];
};

export const bankingFeesScenarioProfiles: readonly BankingFeesScenarioCard[] = [
  {
    id: "new-arrival-employee",
    title: "New arrival employee",
    costDrivers: "Package fee, card timing, and getting an account usable while BSN and address settle.",
    comparisonPath: "Open a bank account first, then match PDF lines to payroll and rent templates.",
    relatedLinks: [
      { href: "/netherlands/open-bank-account-netherlands/", label: "Open a bank account" },
      { href: BANKING_FEES_BEST_BANKS_PATH, label: "Best banks for expats" },
    ],
  },
  {
    id: "intl-professional",
    title: "International professional",
    costDrivers: "Currency abroad, sends across borders, travel spend, and paid upgrade limits if you need them.",
    comparisonPath: "Put how much money arrives first on sends and travel; many people use Dutch bank + app or specialist.",
    relatedLinks: [
      { href: BANKING_FEES_TRADITIONAL_DIGITAL_PATH, label: "Traditional vs digital banks" },
      { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work (Money · Banking)" },
    ],
  },
  {
    id: "family-long",
    title: "Family settling long-term",
    costDrivers: "Extra / joint cards, packaged perks, and replacement rules over the long run.",
    comparisonPath: "Compare family pricing bands and second-card lines, not only intro promos.",
    relatedLinks: [{ href: BANKING_FEES_BEST_BANKS_PATH, label: "Best banks for expats" }],
  },
  {
    id: "student-short",
    title: "Student / short stay",
    costDrivers: "Low monthly charge, basic Dutch online pay (iDEAL), few sends abroad.",
    comparisonPath: "Seek predictable totals; confirm housing or university IBAN expectations.",
    relatedLinks: [
      { href: BANKING_FEES_BEST_BANKS_PATH, label: "Best banks for expats" },
      { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work" },
    ],
  },
  {
    id: "freelancer-zzp",
    title: "Freelancer / ZZP",
    costDrivers: "Business monthly line, included transactions, and bookkeeping integrations.",
    comparisonPath: "Use business price lists and the employment type tool — do not use personal tabs for freelance money.",
    relatedLinks: [
      { href: "/netherlands/work/tools/employment-type-scenario-tool/", label: "Employment type scenario tool" },
      { href: BANKING_FEES_BEST_BANKS_PATH, label: "Best banks for expats" },
    ],
  },
];
