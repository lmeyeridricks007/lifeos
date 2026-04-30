/**
 * Shared banking account-type and scenario config for the Types of Bank Accounts guide
 * and future money/banking tools. Resolve `relatedGuideKeys` via {@link bankingAccountRelatedGuides}.
 *
 * Education only — not financial advice; confirm products on each bank’s site.
 */

/** Curated internal (and a few external) guides — stable keys for reuse across tools. */
export const bankingAccountRelatedGuides = {
  "open-bank-account": {
    href: "/netherlands/open-bank-account-netherlands/",
    label: "Open a bank account (Move guide)",
  },
  "best-banks-expats": {
    href: "/netherlands/money/banking/best-banks-expats/",
    label: "Best banks for expats",
  },
  "banking-fees": {
    href: "/netherlands/money/banking/fees/",
    label: "Banking fees & costs",
  },
  "traditional-vs-digital": {
    href: "/netherlands/money/banking/traditional-vs-digital/",
    label: "Traditional vs digital banks",
  },
  "living-payments": {
    href: "/netherlands/money/banking/how-payments-work/",
    label: "How payments work (IBAN, iDEAL, SEPA)",
  },
  "student-visa": {
    href: "/netherlands/visa/student-visa/",
    label: "Student visa overview",
  },
  "first-30-days": {
    href: "/netherlands/first-30-days-netherlands/",
    label: "First 30 days in the Netherlands",
  },
  "employment-type-tool": {
    href: "/netherlands/work/tools/employment-type-scenario-tool/",
    label: "Employment type scenario tool",
  },
  "tax-advisors": {
    href: "/netherlands/money/tax-guide-for-expats/",
    label: "Tax guide for expats (orientation)",
  },
  "tax-return-orientation": {
    href: "/netherlands/money/tax-return-netherlands/",
    label: "Tax return Netherlands (orientation)",
  },
  "cost-of-living": {
    href: "/netherlands/money/tools/cost-of-living-calculator/",
    label: "Cost of living calculator",
  },
  "types-of-accounts": {
    href: "/netherlands/money/banking/types-of-accounts/",
    label: "Types of bank accounts",
  },
  "how-payments-work": {
    href: "/netherlands/money/banking/how-payments-work/",
    label: "How payments work",
  },
  "living-apps": {
    href: "/netherlands/living/apps/",
    label: "Essential apps",
  },
  "living-daily-life": {
    href: "/netherlands/living/daily-life/",
    label: "Daily life basics",
  },
  "living-shopping-groceries": {
    href: "/netherlands/living/shopping-groceries/",
    label: "Shopping & groceries",
  },
  "utilities-services-comparison": {
    href: "/netherlands/living/tools/utilities-services-comparison/",
    label: "Utilities & services comparison",
  },
  "living-payments-hub": {
    href: "/netherlands/living/payments/",
    label: "Living: payments & rails (orientation)",
  },
} as const;

export type BankingAccountRelatedGuideKey = keyof typeof bankingAccountRelatedGuides;

export type BankingAccountProviderFit = "traditional" | "digital" | "multi-currency" | "business";

export type BankingAccountTypeDefinition = {
  readonly id: string;
  readonly name: string;
  readonly dutchName: string;
  /** One-line editorial summary (plain text). */
  readonly plainEnglish: string;
  readonly usedFor: readonly string[];
  readonly bestFor: readonly string[];
  readonly watchOuts: readonly string[];
  readonly relatedGuideKeys: readonly BankingAccountRelatedGuideKey[];
  /** Which provider archetypes commonly sell this product — planning hint only. */
  readonly providerFit: readonly BankingAccountProviderFit[];
};

/** Join lines for list display (plain text). */
export function joinBankingAccountBullets(lines: readonly string[]): string {
  return lines.map((s) => s.trim()).filter(Boolean).join(" · ");
}

export function resolveBankingGuideLinks(keys: readonly BankingAccountRelatedGuideKey[]) {
  return keys.map((k) => bankingAccountRelatedGuides[k]);
}

export const bankingAccountTypes: readonly BankingAccountTypeDefinition[] = [
  {
    id: "current-account",
    name: "Current account",
    dutchName: "Betaalrekening",
    plainEnglish: "Your main everyday account for incoming money and paying bills in the Netherlands.",
    usedFor: ["Salary and pay from work", "Rent and utilities on automatic payment", "Dutch online checkout at many web shops", "Bank card in shops"],
    bestFor: ["Almost everyone living or working here long enough to receive pay or pay Dutch bills"],
    watchOuts: [
      "Monthly packages and card rules differ by bank — read the current product page, not a forum post",
    ],
    relatedGuideKeys: ["open-bank-account", "best-banks-expats", "banking-fees"],
    providerFit: ["traditional", "digital"],
  },
  {
    id: "savings-account",
    name: "Savings account",
    dutchName: "Spaarrekening",
    plainEnglish: "A separate pot for savings or an emergency buffer, often linked to your current account at the same bank.",
    usedFor: ["Cash buffer and short-term goals", "Keeping everyday spend separate from reserves"],
    bestFor: ["People who want a clear split between spending money and savings at the same brand"],
    watchOuts: [
      "Interest and withdrawal rules change; this is not the same as long-term investing advice",
    ],
    relatedGuideKeys: ["banking-fees", "cost-of-living"],
    providerFit: ["traditional", "digital"],
  },
  {
    id: "joint-account",
    name: "Joint account",
    dutchName: "Gezamenlijke rekening",
    plainEnglish: "One account shared by two or more people — everyone named can usually use it according to the bank’s rules.",
    usedFor: ["Shared rent and household bills", "Groceries and childcare", "Joint savings goals"],
    bestFor: ["Couples, families, or housemates who want one pool for agreed shared costs"],
    watchOuts: [
      "Shared responsibility and what happens if the relationship changes need a clear agreement — not a bank marketing topic",
    ],
    relatedGuideKeys: ["living-payments", "best-banks-expats"],
    providerFit: ["traditional", "digital"],
  },
  {
    id: "student-account",
    name: "Student account",
    dutchName: "Studentrekening (varies by bank)",
    plainEnglish: "A packaged current account aimed at students — sometimes cheaper or with student perks.",
    usedFor: ["Study income and part-time work", "Everyday Dutch payments while enrolled"],
    bestFor: ["Students with proof of enrolment who meet the bank’s age or status rules"],
    watchOuts: [
      "Eligibility and English onboarding vary; international students should confirm ID, citizen service number, and address rules up front",
    ],
    relatedGuideKeys: ["student-visa", "first-30-days", "best-banks-expats"],
    providerFit: ["traditional", "digital"],
  },
  {
    id: "business-account",
    name: "Business account",
    dutchName: "Zakelijke rekening",
    plainEnglish: "An account for company money — separate price lists and features from personal tabs.",
    usedFor: ["Invoices and sales tax (VAT) flows", "Business expenses", "Cleaner separation for admin"],
    bestFor: ["Anyone with Chamber of Commerce (KvK) registered activity where the bank expects a business product"],
    watchOuts: [
      "Do not assume a personal app tier is enough — read business tariffs and your own tax obligations with a professional when needed",
    ],
    relatedGuideKeys: ["employment-type-tool", "tax-advisors", "best-banks-expats"],
    providerFit: ["traditional", "digital", "business"],
  },
  {
    id: "zzp-freelancer",
    name: "ZZP / freelancer banking",
    dutchName: "Zelfstandige (within business banking)",
    plainEnglish: "Often the same business banking lane, sometimes marketed for self-employed use cases.",
    usedFor: ["Freelance invoices", "Quarterly sales tax (VAT)", "Keeping private spend out of turnover"],
    bestFor: ["Self-employed people who need bookkeeping-friendly exports and clear business account use"],
    watchOuts: [
      "Mixing private and business on one personal account makes tax and VAT paperwork harder — keep separation early",
    ],
    relatedGuideKeys: ["employment-type-tool", "tax-return-orientation", "banking-fees"],
    providerFit: ["business", "traditional", "digital"],
  },
  {
    id: "digital-account",
    name: "Digital account",
    dutchName: "App-first betaalrekening",
    plainEnglish: "A current account you run mostly from a phone app — can be a Dutch-licensed bank or another model.",
    usedFor: ["Fast onboarding", "Travel spend and notifications", "Sometimes multi-currency features"],
    bestFor: ["People comfortable with chat support who check how their money is protected on the exact product"],
    watchOuts: [
      "Some employers or landlords still prefer a familiar Dutch account number — confirm acceptance in writing when it matters",
    ],
    relatedGuideKeys: ["traditional-vs-digital", "banking-fees", "open-bank-account"],
    providerFit: ["digital"],
  },
  {
    id: "multi-currency-account",
    name: "Multi-currency account",
    dutchName: "Meerdere valuta / borderless-style",
    plainEnglish: "Products that help you hold or convert several currencies — sometimes beside a Dutch current account.",
    usedFor: ["Freelance clients abroad", "Travel and sending money home", "Income in currencies other than euro"],
    bestFor: ["International earners who want clear currency fees next to local Dutch payments"],
    watchOuts: [
      "May not replace every local Dutch payment need — compare Dutch online checkout, automatic bill pay, and guarantee rules",
    ],
    relatedGuideKeys: ["banking-fees", "traditional-vs-digital", "living-payments"],
    providerFit: ["multi-currency", "digital"],
  },
  {
    id: "credit-card",
    name: "Credit card",
    dutchName: "Creditcard",
    plainEnglish: "A credit line product — useful for some travel and deposits, not required for basic Dutch life.",
    usedFor: ["Car hire holds", "International websites", "Purchase protections where offered"],
    bestFor: ["People who will pay the balance and treat it as a payment tool, not extra income"],
    watchOuts: ["Fees, interest, and acceptance differ; read repayment dates like any other contract"],
    relatedGuideKeys: ["banking-fees", "best-banks-expats"],
    providerFit: ["traditional", "digital"],
  },
  {
    id: "youth-account",
    name: "Youth / child account",
    dutchName: "Jeugdrekening (varies by bank)",
    plainEnglish: "Packaged accounts for minors with parental controls — naming varies by bank.",
    usedFor: ["Pocket money", "First bank card", "Learning PIN and online pay safely"],
    bestFor: ["Families settling long-term who want a simple supervised setup"],
    watchOuts: ["Age bands and parent consent rules are product-specific"],
    relatedGuideKeys: ["best-banks-expats", "open-bank-account"],
    providerFit: ["traditional", "digital"],
  },
];

// --- Quick answer personas (hero section) — reuse in tools / wizards later ---

export type BankingAccountQuickAnswerProfile = {
  readonly id: string;
  readonly title: string;
  readonly recommendedSetup: readonly string[];
  readonly why: string;
  readonly watchOuts: readonly string[];
  readonly relatedGuideKeys: readonly BankingAccountRelatedGuideKey[];
};

export const bankingAccountQuickAnswerProfiles: readonly BankingAccountQuickAnswerProfile[] = [
  {
    id: "employees",
    title: "Most employees",
    recommendedSetup: ["Dutch everyday account (betaalrekening)", "optional savings", "optional second app account"],
    why: "Pay from work and typical Dutch bills usually go through a local everyday account with the usual Dutch online checkout and automatic bill pay. Your package still has to match how you use cards, cash, and travel.",
    watchOuts: ["Pick the package for your real mix of cards, cash, and abroad use — not only the headline monthly fee"],
    relatedGuideKeys: ["best-banks-expats", "banking-fees"],
  },
  {
    id: "new-arrivals",
    title: "New arrivals",
    recommendedSetup: ["Digital or easier path first if it fits your bills", "add Dutch everyday account when paperwork is ready"],
    why: "You may need something you can spend from while your citizen service number or address catches up. Rules change — read each bank’s current FAQ and ask payroll and housing what they accept.",
    watchOuts: ["Ask payroll and housing which account numbers they accept before you rely on one provider for everything"],
    relatedGuideKeys: ["open-bank-account", "traditional-vs-digital"],
  },
  {
    id: "couples",
    title: "Couples / families",
    recommendedSetup: ["Individual everyday accounts", "optional shared account for household costs", "optional savings pot"],
    why: "Many households keep personal money separate and use a shared pool for rent, utilities, childcare, or travel savings.",
    watchOuts: ["Shared accounts mean shared control and responsibility — agree who pays what before opening"],
    relatedGuideKeys: ["living-payments"],
  },
  {
    id: "students",
    title: "Students",
    recommendedSetup: ["Student or low-cost everyday account", "confirm local payment needs with housing and university"],
    why: "Banks sometimes offer student-priced tiers; you still need to meet ID and address rules like anyone else.",
    watchOuts: [
      "Short stays sometimes fit a minimal setup — long stays usually benefit from a proper Dutch everyday account for recurring bills",
    ],
    relatedGuideKeys: ["student-visa", "first-30-days"],
  },
  {
    id: "zzp",
    title: "Freelancers / self-employed",
    recommendedSetup: ["Business-style banking that matches your Chamber of Commerce registration and sales tax rhythm"],
    why: "Keeping private money separate from turnover makes invoicing, VAT quarters, and year-end easier. Many banks sell a dedicated business lane.",
    watchOuts: ["Terms can require a business product for certain activities — read business price lists, not only the personal marketing page"],
    relatedGuideKeys: ["employment-type-tool", "tax-advisors"],
  },
  {
    id: "international",
    title: "Heavy international use",
    recommendedSetup: ["Dutch everyday account for local life", "app or multi-currency stack for travel and cross-border sends"],
    why: "Many people combine a Dutch account for pay and rent with an app or specialist for currency and travel.",
    watchOuts: ["Two stacks means two sets of fees — review both monthly and per-use lines"],
    relatedGuideKeys: ["traditional-vs-digital", "banking-fees"],
  },
];

// --- Long-form “by expat scenario” cards (mid-page) ---

export type BankingAccountScenarioRecommendation = {
  readonly id: string;
  readonly title: string;
  readonly recommendedSetup: readonly string[];
  readonly why: string;
  readonly watchOuts: readonly string[];
  /** Action-oriented close — shown as “Next step” in the guide UI. */
  readonly nextStep: string;
  readonly relatedGuideKeys: readonly BankingAccountRelatedGuideKey[];
};

export const bankingAccountScenarioRecommendations: readonly BankingAccountScenarioRecommendation[] = [
  {
    id: "employee-work",
    title: "Employee moving for work",
    recommendedSetup: ["Dutch betaalrekening for salary and rent", "optional savings", "optional travel-friendly second card"],
    why: "Employers and landlords usually expect predictable Dutch payment rails once you are on payroll.",
    watchOuts: [],
    nextStep: "Confirm payroll IBAN expectations, then compare packages on Best banks — finish on each bank’s official site.",
    relatedGuideKeys: ["best-banks-expats", "open-bank-account"],
  },
  {
    id: "partner-family",
    title: "Partner / family moving",
    recommendedSetup: ["Individual accounts for each adult", "optional joint for shared household costs"],
    why: "Families often split personal spending from household pools to keep budgeting clear.",
    watchOuts: [],
    nextStep: "List shared costs (rent, childcare, utilities) and decide whether a joint account is worth the extra admin.",
    relatedGuideKeys: ["living-payments"],
  },
  {
    id: "student",
    title: "Student",
    recommendedSetup: ["Student or basic current account", "check university and housing payment instructions"],
    why: "You need reliable euro in and out for tuition-related flows, rent, and daily spend.",
    watchOuts: [],
    nextStep: "Gather enrolment and ID docs; ask the bank’s international student checklist if available.",
    relatedGuideKeys: ["student-visa", "best-banks-expats"],
  },
  {
    id: "freelancer",
    title: "Freelancer / ZZP",
    recommendedSetup: ["Business account (or clearly separated business product)", "personal account for private life"],
    why: "VAT and income-tax admin are much simpler when turnover does not mix with groceries on one card.",
    watchOuts: [],
    nextStep: "Open the business tariff PDF for your volume; pair with the employment type tool for orientation.",
    relatedGuideKeys: ["employment-type-tool", "tax-return-orientation"],
  },
  {
    id: "traveller",
    title: "Frequent traveller",
    recommendedSetup: ["Dutch current for home base", "multi-currency / app for trips and FX-heavy weeks"],
    why: "You still need local rails for Dutch life; travel layers add spare cards and sometimes clearer FX disclosures.",
    watchOuts: [],
    nextStep: "Compare ATM abroad, weekend FX, and card acceptance on both stacks.",
    relatedGuideKeys: ["banking-fees"],
  },
  {
    id: "short-stay",
    title: "Short-term stay",
    recommendedSetup: ["Minimal Dutch current if bills require it", "otherwise confirm what landlord accepts"],
    why: "Some short stays can run on foreign cards for a while; others hit iDEAL-only merchants quickly.",
    watchOuts: [],
    nextStep: "Ask for written payment expectations before you skip a local account entirely.",
    relatedGuideKeys: ["open-bank-account"],
  },
  {
    id: "long-term",
    title: "Long-term settler",
    recommendedSetup: ["Full-service Dutch current", "savings for buffer", "optional second brand for resilience"],
    why: "Long horizons favour stable local products for mortgages, joint setups, and predictable support.",
    watchOuts: [],
    nextStep: "Re-read fees yearly; downgrade unused premium features.",
    relatedGuideKeys: ["best-banks-expats", "cost-of-living"],
  },
  {
    id: "admin-pending",
    title: "New arrival — admin still pending",
    recommendedSetup: ["Whatever employer and landlord accept today", "plan the Dutch current milestone"],
    why: "BSN and address timing drives which products you can open this week vs next month.",
    watchOuts: [],
    nextStep: "Use the Move open-account guide for document order; keep bank messages for HR and housing.",
    relatedGuideKeys: ["open-bank-account"],
  },
];

/** View-model row for overview tables / tools (plain strings). */
export type BankingAccountOverviewGridRow = {
  readonly id: string;
  readonly title: string;
  readonly what: string;
  readonly usedFor: string;
  readonly bestFor: string;
  readonly watchOut: string;
  readonly providerFit?: readonly BankingAccountProviderFit[];
};

export function bankingAccountTypesToOverviewRows(
  types: readonly BankingAccountTypeDefinition[] = bankingAccountTypes
): readonly BankingAccountOverviewGridRow[] {
  return types.map((t) => ({
    id: t.id,
    title: `${t.name} / ${t.dutchName}`,
    what: t.plainEnglish,
    usedFor: joinBankingAccountBullets(t.usedFor),
    bestFor: joinBankingAccountBullets(t.bestFor),
    watchOut: joinBankingAccountBullets(t.watchOuts),
    providerFit: t.providerFit,
  }));
}

/** Lookup by stable id — for future banking tools and wizards. */
export function getBankingAccountTypeById(id: string): BankingAccountTypeDefinition | undefined {
  return bankingAccountTypes.find((t) => t.id === id);
}

export function getBankingAccountScenarioById(id: string): BankingAccountScenarioRecommendation | undefined {
  return bankingAccountScenarioRecommendations.find((s) => s.id === id);
}
