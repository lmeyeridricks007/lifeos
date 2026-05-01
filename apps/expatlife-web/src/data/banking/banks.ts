/**
 * Canonical NL expat banking shortlist — reusable across guides and future comparison tools.
 * Enum-like fields stay lowercase for stable tool keys; UI layers title-case where needed.
 *
 * Affiliate-ready catalog metadata for the **bank comparison tool** (keys, review dates, disclosures)
 * lives in `bankingProviderAffiliateSafety.ts` + `lib/tools/bank-comparison/catalog.ts` — not on every `Bank` row.
 */

export type BankKind = "traditional" | "digital";

/** Product positioning beyond legacy `type` (e.g. companion apps used in hybrid setups). */
export type BankProductBankType = "traditional" | "digital" | "hybrid-support";

export type BankEnglishSupport = "yes" | "partial";

export type BankOnboarding = "easy" | "medium" | "hard";

/** Whether a BSN is typically required upfront; use string variants when policies are mixed. */
export type BankBsnRequired = boolean | "partial" | "varies";

/** Editorial 1–5 bands for page-level comparison (not live scoring). */
export type BankOrientationScores = {
  /** Payroll, iDEAL, local debits, landlord familiarity */
  localIntegrationScore: number;
  /** FX, travel, multi-currency, cross-border */
  internationalUseScore: number;
};

/** How the account’s recurring charge is usually framed — editorial, not a live quote. */
export type BankAccountFeeType = "monthly" | "free-tier" | "subscription-tier" | "varies";

/** Editorial cost band for low-cost / comparison guides — not a live price rank. */
export type BankCostPositioning = "low" | "medium" | "premium" | "varies";

/**
 * Editorial fee patterns for guides and tools — not date-verified live pricing.
 * Use `lastChecked` only when you intentionally snapshot editorial copy (optional).
 */
export type BankFeeModel = {
  /** Short band or “check provider” copy for comparison tables — never a guaranteed live price. */
  monthlyFeeDisplay: string;
  accountFeeType: BankAccountFeeType;
  cardFeeDisplay?: string;
  internationalTransferCostPattern?: string;
  fxCostPattern?: string;
  atmCostPattern?: string;
  premiumPlanPattern?: string;
  businessAccountPattern?: string;
  lastChecked?: string;
  sourceKey?: "editorial-bank-shortlist" | "editorial-low-cost-guide";
};

/**
 * Optional low-cost guide lens on {@link Bank} — reused by Cheapest accounts and future tools.
 * Does not replace `feeModel`; adds positioning and shortlist copy without duplicating live tariffs.
 */
/** Freelancer / ZZP editorial fit — not a live product matrix; confirm on each bank’s site. */
export type BankFreelancerFit = "low" | "medium" | "high";

export type BankInvoicingSupport = "none" | "basic" | "advanced";

/** International / cross-border transfer lens — editorial only; confirm on each provider’s site. */
export type BankTransferType = "bank" | "digital" | "transfer-specialist";

/** Retail FX / transfer-rate quality band for comparisons — not a live score. */
export type BankTransferFxQuality = "low" | "medium" | "high";

/** Typical send speed band — route and amount still dominate real ETA. */
export type BankTransferSpeed = "slow" | "medium" | "fast";

/**
 * Optional transfer stack metadata on {@link Bank} — reusable by guides and tools.
 * When omitted, use {@link resolveBankTransferProfile} for stable defaults derived from existing fields.
 */
export type BankTransferEditorial = {
  transferSupport: boolean;
  transferType: BankTransferType;
  fxQuality: BankTransferFxQuality;
  speed: BankTransferSpeed;
  bestTransferUseCases: readonly string[];
  transferWatchOuts: readonly string[];
};

export type BankLowCostEditorial = {
  costPositioning: BankCostPositioning;
  /** Overrides the default “account fee type + check pricing” line when you need tighter copy. */
  feeModelLabel?: string;
  hasFreeTier?: boolean;
  /** Extra line under the cost model (editorial caveat). */
  pricingCaveat?: string;
  /** When set, replaces `watchOuts` on low-cost shortlist cards only. */
  costWatchOuts?: readonly string[];
  /** When set, drives the “Best for” bullets on low-cost shortlist cards instead of `bestFor` paragraph. */
  bestLowCostUseCases?: readonly string[];
  /** Low-cost lens; defaults to `notIdealFor` on the bank when omitted. */
  notIdealForLowCost?: string;
  pricingSourceKey?: string;
  lastPricingChecked?: string;
};

export type Bank = {
  id: string;
  name: string;
  type: BankKind;
  /** Editorial segment for traditional vs digital lens (Revolut often hybrid companion). */
  bankType: BankProductBankType;
  scores: BankOrientationScores;
  /** Short human label for aggregate “onboarding speed” rows. */
  onboardingSpeed: string;
  supportModel: string;
  idealSupport: string;
  salaryRentFit: string;
  transferFit: string;
  longTermProductFit: string;
  bestUseCases: readonly string[];
  watchOuts: readonly string[];
  /** Editorial fee lens — drives comparison “monthly fee” column via {@link bankMonthlyFeeDisplay}. */
  feeModel: BankFeeModel;
  englishSupport: BankEnglishSupport;
  onboarding: BankOnboarding;
  bsnRequired: BankBsnRequired;
  bestFor: string;
  pros: readonly string[];
  cons: readonly string[];
  /** Long-form overview (plain text; avoid markdown bold in copy). */
  description: string;
  notIdealFor: string;
  keyDrawback: string;
  logoSrc: string | null;
  /** When true, editorial treats the brand as a reasonable ZZP/freelancer shortlist candidate (still verify products). */
  zzpSupport: boolean;
  /** Whether a separate business / zakelijke-style product line is typically offered — confirm naming on the bank site. */
  businessAccountAvailable: boolean;
  /** Editorial strength for typical freelancer workflows (not a ranking). */
  freelancerFit: BankFreelancerFit;
  /** Invoicing / payment-request depth on typical business or sole-trader paths — varies by plan. */
  invoicingSupport: BankInvoicingSupport;
  /** Integration or export patterns often discussed for bookkeeping — illustrative labels only. */
  integrationSupport: readonly string[];
  /** Short bullets: when freelancers often consider this bank. */
  freelancerUseCases: readonly string[];
  /** Short bullets: what to double-check before relying on this brand for ZZP. */
  freelancerWatchOuts: readonly string[];
  /** Optional editorial fields for low-cost / “cheapest” style guides — see {@link BankLowCostEditorial}. */
  lowCost?: BankLowCostEditorial;
  /** Optional international-transfer lens — see {@link BankTransferEditorial} and {@link resolveBankTransferProfile}. */
  transfer?: BankTransferEditorial;
};

/** Human label for `feeModel.accountFeeType` — shared by fee-pattern cards and low-cost shortlist. */
export function bankAccountFeeTypeLabel(t: BankAccountFeeType): string {
  const labels: Record<BankAccountFeeType, string> = {
    monthly: "Monthly-style",
    "free-tier": "Free tier + upsells",
    "subscription-tier": "Subscription",
    varies: "Varies / package",
  };
  return labels[t];
}

/** Single-line cost model summary for low-cost shortlist cards (not a live quote). */
export function bankLowCostFeeModelSummary(bank: Bank): string {
  const lc = bank.lowCost;
  if (lc?.feeModelLabel?.trim()) return lc.feeModelLabel.trim();
  return `${bankAccountFeeTypeLabel(bank.feeModel.accountFeeType)} — check current provider pricing`;
}

export function bankLowCostWatchOutsList(bank: Bank): readonly string[] {
  return bank.lowCost?.costWatchOuts ?? bank.watchOuts;
}

export function bankLowCostNotIdealLine(bank: Bank): string {
  return bank.lowCost?.notIdealForLowCost ?? bank.notIdealFor;
}

/** Short band label for cost positioning — not a ranking. */
export function bankCostPositioningLabel(p: BankCostPositioning): string {
  const m: Record<BankCostPositioning, string> = {
    low: "Lower fee signal",
    medium: "Mid-pack",
    premium: "Premium-heavy",
    varies: "Varies",
  };
  return m[p];
}

/** Stable defaults when `bank.transfer` is absent — keeps tools backward-compatible. */
function inferBankTransferEditorial(bank: Bank): BankTransferEditorial {
  const isTraditional = bank.type === "traditional";
  const intl = bank.scores.internationalUseScore;
  const fxQuality: BankTransferFxQuality = intl >= 4 ? "high" : intl <= 2 ? "low" : "medium";
  const speed: BankTransferSpeed = isTraditional ? "medium" : bank.onboarding === "easy" ? "fast" : "medium";
  return {
    transferSupport: true,
    transferType: isTraditional ? "bank" : "digital",
    fxQuality,
    speed,
    bestTransferUseCases: [...bank.bestUseCases].slice(0, 4),
    transferWatchOuts: [...bank.watchOuts].slice(0, 4),
  };
}

/**
 * Resolved international-transfer profile for tools — prefers explicit `bank.transfer`, else infers from scores/type.
 */
export function resolveBankTransferProfile(bank: Bank): BankTransferEditorial {
  return bank.transfer ?? inferBankTransferEditorial(bank);
}

/** Flat accessors for tools — same data as {@link resolveBankTransferProfile}. */
export function bankTransferSupport(bank: Bank): boolean {
  return resolveBankTransferProfile(bank).transferSupport;
}

export function bankTransferType(bank: Bank): BankTransferType {
  return resolveBankTransferProfile(bank).transferType;
}

export function bankTransferFxQuality(bank: Bank): BankTransferFxQuality {
  return resolveBankTransferProfile(bank).fxQuality;
}

export function bankTransferSpeed(bank: Bank): BankTransferSpeed {
  return resolveBankTransferProfile(bank).speed;
}

export function bankTransferBestUseCases(bank: Bank): readonly string[] {
  return resolveBankTransferProfile(bank).bestTransferUseCases;
}

export function bankTransferWatchOuts(bank: Bank): readonly string[] {
  return resolveBankTransferProfile(bank).transferWatchOuts;
}

/** Table / card view — derived from {@link Bank}. */
export type BankComparisonRowVm = {
  id: string;
  name: string;
  logoSrc: string | null;
  logoAlt: string;
  type: "Traditional" | "Digital";
  monthlyFee: string;
  englishSupport: "Yes" | "Partial";
  onboarding: "Easy" | "Medium" | "Hard";
  bsnRequired: "Usually yes" | "Often partial" | "Varies";
  bestFor: string;
  keyDrawback: string;
};

export type BankDetailVm = {
  id: string;
  name: string;
  overview: string;
  pros: readonly string[];
  cons: readonly string[];
  bestFor: string;
  notIdealFor: string;
};

function formatType(t: BankKind): "Traditional" | "Digital" {
  return t === "traditional" ? "Traditional" : "Digital";
}

function formatEnglish(s: BankEnglishSupport): "Yes" | "Partial" {
  return s === "yes" ? "Yes" : "Partial";
}

function formatOnboarding(o: BankOnboarding): "Easy" | "Medium" | "Hard" {
  const m: Record<BankOnboarding, "Easy" | "Medium" | "Hard"> = {
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
  };
  return m[o];
}

function formatBsn(bsn: BankBsnRequired): "Usually yes" | "Often partial" | "Varies" {
  if (bsn === true) return "Usually yes";
  if (bsn === "partial") return "Often partial";
  return "Varies";
}

/** Comparison tables and aggregate fee rows — editorial display string only. */
export function bankMonthlyFeeDisplay(bank: Bank): string {
  return bank.feeModel.monthlyFeeDisplay;
}

export function bankToComparisonRow(bank: Bank): BankComparisonRowVm {
  return {
    id: bank.id,
    name: bank.name,
    logoSrc: bank.logoSrc,
    logoAlt: bank.name,
    type: formatType(bank.type),
    monthlyFee: bankMonthlyFeeDisplay(bank),
    englishSupport: formatEnglish(bank.englishSupport),
    onboarding: formatOnboarding(bank.onboarding),
    bsnRequired: formatBsn(bank.bsnRequired),
    bestFor: bank.bestFor,
    keyDrawback: bank.keyDrawback,
  };
}

export function bankToDetailVm(bank: Bank): BankDetailVm {
  return {
    id: bank.id,
    name: bank.name,
    overview: bank.description,
    pros: bank.pros,
    cons: bank.cons,
    bestFor: bank.bestFor,
    notIdealFor: bank.notIdealFor,
  };
}

export const banks = [
  {
    id: "ing",
    name: "ING",
    type: "traditional",
    bankType: "traditional",
    scores: { localIntegrationScore: 5, internationalUseScore: 3 },
    onboardingSpeed: "Medium — retail checks common",
    supportModel: "Branch + phone + strong app",
    idealSupport: "Straightforward iDEAL on typical retail packages",
    salaryRentFit: "Common employer / landlord default",
    transferFit: "SEPA strong; FX can be pricier vs dedicated apps",
    longTermProductFit: "Broad retail + mortgage pathways when you qualify",
    bestUseCases: ["Dutch payroll + rent on one IBAN", "Long-horizon everyday banking", "Households wanting mainstream rails"],
    watchOuts: ["Busy product catalogue", "Fee tiers need a careful read"],
    feeModel: {
      monthlyFeeDisplay: "Often €0 basic; packages vary — confirm on ING price list",
      accountFeeType: "free-tier",
      cardFeeDisplay: "Debit often in package; extra/credit cards priced separately on PDF",
      internationalTransferCostPattern: "SEPA euro strong; non-euro/SWIFT-style paths per tariff table",
      fxCostPattern: "Bank FX spread — compare tariff PDF with specialist calculators",
      atmCostPattern: "Domestic vs abroad rows differ; foreign ATM operator surcharges possible",
      premiumPlanPattern: "Higher tiers bundle extras — audit what you actually use",
      businessAccountPattern: "Business accounts priced on separate business tariff pages",
      sourceKey: "editorial-bank-shortlist",
    },
    englishSupport: "yes",
    onboarding: "medium",
    bsnRequired: true,
    bestFor: "Salary + everyday Dutch payments via a major retail bank",
    pros: ["Broad salary / local payment acceptance", "Strong English newcomer materials"],
    cons: ["Busy product catalogue", "Fee tiers need a careful read"],
    description:
      "Large retail bank — a common default when people want a mainstream Dutch IBAN and broad self-service.",
    notIdealFor: "People who want the fastest purely app-native experience with minimal package choices.",
    keyDrawback: "Less “instant” than some app-only competitors; fee tiers need attention",
    zzpSupport: true,
    businessAccountAvailable: true,
    freelancerFit: "high",
    invoicingSupport: "advanced",
    integrationSupport: [
      "CSV / MT940-style exports (package-dependent)",
      "Dutch bookkeeping tool links (varies by plan)",
      "Business tariff separate from retail — confirm export path",
    ],
    freelancerUseCases: [
      "KvK-registered ZZP with Dutch euro clients",
      "Invoices where a household-name IBAN reduces friction",
      "Early separation of private spend and turnover",
    ],
    freelancerWatchOuts: [
      "Retail vs business price lists differ — read both PDFs",
      "Card and user add-ons move the real yearly cost away from the headline",
    ],
    logoSrc: "/images/affiliates/logos/ing.svg",
    lowCost: {
      costPositioning: "low",
      hasFreeTier: true,
      pricingCaveat: "Confirm package conditions on ING’s official price list.",
      bestLowCostUseCases: [
        "Predictable Dutch payroll + iDEAL on a mainstream retail package",
        "Households that want one familiar IBAN for local rails",
      ],
      notIdealForLowCost: "Heavy non-euro or SWIFT-style transfers without comparing specialists",
      pricingSourceKey: "editorial-bank-shortlist",
    },
    transfer: {
      transferSupport: true,
      transferType: "bank",
      fxQuality: "medium",
      speed: "medium",
      bestTransferUseCases: [
        "SEPA euro salary and rent with familiar Dutch rails",
        "Occasional international wires when you want one bank relationship",
        "Employers who expect a mainstream Dutch IBAN on paperwork",
      ],
      transferWatchOuts: [
        "Compare tariff FX vs specialist calculators on large non-euro sends",
        "Weekend and express lines can change pricing — read cut-off notes",
        "Retail vs business price lists differ for invoicing-heavy ZZP flows",
      ],
    },
  },
  {
    id: "abn-amro",
    name: "ABN AMRO",
    type: "traditional",
    bankType: "traditional",
    scores: { localIntegrationScore: 5, internationalUseScore: 3 },
    onboardingSpeed: "Medium — appointment-led flows possible",
    supportModel: "Branch + phone + digital hybrid",
    idealSupport: "Strong iDEAL on retail current accounts",
    salaryRentFit: "Typical salary + rent acceptance",
    transferFit: "International transfers available; compare tariff PDFs",
    longTermProductFit: "Full-service retail + mortgage depth",
    bestUseCases: ["Branch reassurance + digital servicing", "Mortgage-bound households", "Employer-familiar IBAN"],
    watchOuts: ["Premium extras add cost", "Some flows need scheduling"],
    feeModel: {
      monthlyFeeDisplay: "Varies by package — check ABN AMRO current price list",
      accountFeeType: "varies",
      cardFeeDisplay: "Plastic tiers and credit products add lines beyond basic account",
      internationalTransferCostPattern: "International table pricing; compare with transfer specialists",
      fxCostPattern: "Bank FX vs card spend abroad — read weekend/out-of-hours notes if any",
      atmCostPattern: "Own-network vs abroad; third-party ATM fees stack",
      premiumPlanPattern: "Premium bundles insurance-style add-ons — confirm value vs standalone purchase",
      businessAccountPattern: "ZZP/BV products on business pricing pages",
      sourceKey: "editorial-bank-shortlist",
    },
    englishSupport: "yes",
    onboarding: "medium",
    bsnRequired: true,
    bestFor: "Branch + digital hybrid; broad product range",
    pros: ["Digital + branch hybrid", "English materials for many retail flows"],
    cons: ["Premium extras add cost", "Some flows are appointment-led"],
    description:
      "Full-service bank with branches — useful if you may want mortgage or in-person help beyond a basic account.",
    notIdealFor: "Those who want minimal interaction with banking packages and upsell paths.",
    keyDrawback: "Full-service complexity — easy to over-buy features",
    zzpSupport: true,
    businessAccountAvailable: true,
    freelancerFit: "high",
    invoicingSupport: "advanced",
    integrationSupport: [
      "Business banking exports (confirm format with your accountant)",
      "Branch-supported onboarding for some ZZP questions",
      "Package-dependent links to accounting ecosystems",
    ],
    freelancerUseCases: [
      "Consultants and contractors wanting depth beyond a thin app",
      "ZZP planning to use mortgage or complex retail products later",
      "Clients who expect a big-bank name on the invoice",
    ],
    freelancerWatchOuts: [
      "Premium bundles can duplicate insurance you already pay",
      "Appointment-led flows can slow first invoices — plan buffer time",
    ],
    logoSrc: "/images/affiliates/logos/abn-amro.svg",
    lowCost: {
      costPositioning: "varies",
      feeModelLabel: "Package lines vary — check current ABN AMRO price list before you compare totals.",
      bestLowCostUseCases: [
        "Branch + app hybrid when you want mortgage or in-person depth later",
        "Employer-familiar IBAN with broad retail catalogue",
      ],
      notIdealForLowCost: "Minimal-interaction users who dislike package upsells",
      pricingSourceKey: "editorial-bank-shortlist",
    },
    transfer: {
      transferSupport: true,
      transferType: "bank",
      fxQuality: "medium",
      speed: "medium",
      bestTransferUseCases: [
        "Branch-supported questions on larger or unusual international sends",
        "Households already using ABN packages for mortgage or retail depth",
        "Euro SEPA flows with occasional cross-border needs",
      ],
      transferWatchOuts: [
        "International tables are dense — confirm product code before you send",
        "Premium bundles may duplicate standalone FX tools you already pay for",
        "Appointment-led flows can add latency on first-time corridors",
      ],
    },
  },
  {
    id: "rabobank",
    name: "Rabobank",
    type: "traditional",
    bankType: "traditional",
    scores: { localIntegrationScore: 5, internationalUseScore: 2 },
    onboardingSpeed: "Often slower — cooperative checks + regional variance",
    supportModel: "Relationship-style + phone; branch footprint varies",
    idealSupport: "Solid on Dutch retail rails when account matches billers",
    salaryRentFit: "Strong for domestic payroll + rent patterns",
    transferFit: "International features vary — compare FX tables",
    longTermProductFit: "Domestic cooperative depth in many regions",
    bestUseCases: ["Regional / cooperative preference", "Domestic-first households", "Long-term NL integration"],
    watchOuts: ["English can be patchier outside core flows", "Digital polish varies vs global apps"],
    feeModel: {
      monthlyFeeDisplay: "Varies by profile — confirm on Rabobank tariff PDF",
      accountFeeType: "varies",
      cardFeeDisplay: "Regional packaging differences — read local brochure",
      internationalTransferCostPattern: "International features vary — compare FX tables",
      fxCostPattern: "Domestic-first FX; travel-heavy users should cross-check other tools",
      atmCostPattern: "Cooperative ATM footprint varies by region",
      premiumPlanPattern: "Relationship-style bundles may include paid extras",
      businessAccountPattern: "Agricultural/SME heritage products — business line separate from retail tab",
      sourceKey: "editorial-bank-shortlist",
    },
    englishSupport: "partial",
    onboarding: "hard",
    bsnRequired: true,
    bestFor: "Regional/cooperative positioning; relationship-style banking",
    pros: ["Strong domestic / regional footprint", "Relationship-style banking in some areas"],
    cons: ["English can be patchier outside core flows", "Onboarding often slower than app-only peers"],
    description:
      "Domestic cooperative bank — fits some regional or relationship preferences; English and app polish vary vs global retail apps.",
    notIdealFor: "English-only households who prioritise uniform app UX over cooperative heritage.",
    keyDrawback: "English coverage and digital UX may feel weaker vs global retail apps",
    zzpSupport: true,
    businessAccountAvailable: true,
    freelancerFit: "medium",
    invoicingSupport: "basic",
    integrationSupport: [
      "Regional variance in digital exports — confirm with your branch or PDF",
      "Cooperative business products alongside retail",
    ],
    freelancerUseCases: [
      "Domestic-first freelancers in cooperative regions",
      "Agricultural-adjacent or SME-style business lines where Rabo is already familiar",
    ],
    freelancerWatchOuts: [
      "English support patchier outside core flows — test before client-facing crunch",
      "Onboarding slower than app-only peers — start early if you have deadlines",
    ],
    logoSrc: "/images/affiliates/logos/rabobank.svg",
    lowCost: {
      costPositioning: "varies",
      feeModelLabel: "Regional packaging — confirm Rabobank tariff PDF for your profile.",
      bestLowCostUseCases: ["Domestic-first households in cooperative regions", "Long-horizon NL integration when regional fit matters"],
      notIdealForLowCost: "English-only users who need uniform app polish over cooperative heritage",
      pricingSourceKey: "editorial-bank-shortlist",
    },
    transfer: {
      transferSupport: true,
      transferType: "bank",
      fxQuality: "low",
      speed: "slow",
      bestTransferUseCases: [
        "Domestic-first households who occasionally send abroad from the same IBAN",
        "Regional cooperative preference with relationship-style servicing",
      ],
      transferWatchOuts: [
        "International features vary — read regional tariff PDFs carefully",
        "English support patchier — test flows before client-facing deadlines",
        "Compare FX tables against specialists on non-euro corridors",
      ],
    },
  },
  {
    id: "bunq",
    name: "bunq",
    type: "digital",
    bankType: "digital",
    scores: { localIntegrationScore: 4, internationalUseScore: 4 },
    onboardingSpeed: "Often fast when ID + address checks pass",
    supportModel: "App-first + chat support",
    idealSupport: "Dutch-licensed paths — confirm package vs iDEAL needs",
    salaryRentFit: "Often works for salary/rent — still validate billers",
    transferFit: "International-friendly; pair with Wise if you move large FX",
    longTermProductFit: "Thinner vs majors for some mortgage / complex retail",
    bestUseCases: ["English-first Dutch account", "Fast remote onboarding", "App-native money management"],
    watchOuts: ["Subscription pricing", "Thin branch fallback"],
    feeModel: {
      monthlyFeeDisplay: "Subscription-style paid plans — confirm current tiers on bunq site",
      accountFeeType: "subscription-tier",
      cardFeeDisplay: "Plan-dependent card allowances and delivery lines",
      internationalTransferCostPattern: "In-app international sends — limits depend on plan",
      fxCostPattern: "Multi-currency features plan-gated; read FX and fair-use notes",
      atmCostPattern: "ATM allowances often tiered; abroad may still incur operator fees",
      premiumPlanPattern: "Higher tiers unlock more cards/accounts — review quarterly",
      businessAccountPattern: "Business bunq products priced separately from personal plans",
      sourceKey: "editorial-bank-shortlist",
    },
    englishSupport: "yes",
    onboarding: "easy",
    bsnRequired: "partial",
    bestFor: "Fast English-first path to a Dutch payment account",
    pros: ["App-native Dutch account", "Clear English-first positioning"],
    cons: ["Subscription-style pricing", "Thin branch fallback for edge cases"],
    description:
      "Dutch-licensed digital bank — often compared for English flows and faster remote onboarding when ID/address steps are ready.",
    notIdealFor: "Anyone who strongly prefers in-branch account opening and paper-first servicing.",
    keyDrawback: "Recurring fees; check plan fit vs balance/cards needed",
    zzpSupport: true,
    businessAccountAvailable: true,
    freelancerFit: "high",
    invoicingSupport: "advanced",
    integrationSupport: [
      "App-native payment links and business tabs (plan limits apply)",
      "API access on some tiers — read developer and fair-use notes",
    ],
    freelancerUseCases: [
      "English-first app freelancers who live on their phone",
      "Fast iteration on sub-accounts for tax set-aside and turnover",
    ],
    freelancerWatchOuts: [
      "Subscription tiers move costs — re-check when you add cards or features",
      "Validate iDEAL and employer acceptance on the exact product you open",
    ],
    logoSrc: "/images/affiliates/logos/bunq.svg",
    lowCost: {
      costPositioning: "medium",
      hasFreeTier: false,
      feeModelLabel: "Subscription-style plans — compare tier limits vs your cards and ATM pattern on bunq’s site.",
      bestLowCostUseCases: ["English-first Dutch account with fast remote onboarding", "App-native budgeting when subscription cost beats surprise fees"],
      notIdealForLowCost: "Anyone who needs branch fallback for most problems",
      pricingSourceKey: "editorial-bank-shortlist",
    },
    transfer: {
      transferSupport: true,
      transferType: "digital",
      fxQuality: "high",
      speed: "fast",
      bestTransferUseCases: [
        "In-app international sends and multi-currency tabs for freelancers",
        "English-first users who want fast setup alongside a Dutch IBAN",
        "Recurring smaller sends when plan limits still fit your volumes",
      ],
      transferWatchOuts: [
        "Plan tiers and fair-use caps move real pricing — read footnotes",
        "Pair with a transfer specialist quote on very large FX amounts",
        "Validate iDEAL and employer acceptance on the exact product you open",
      ],
    },
  },
  {
    id: "revolut",
    name: "Revolut",
    type: "digital",
    bankType: "hybrid-support",
    scores: { localIntegrationScore: 3, internationalUseScore: 5 },
    onboardingSpeed: "Fast for spending app; payroll fit is case-by-case",
    supportModel: "App + chat; tiered phone on some plans",
    idealSupport: "Depends on product — confirm iDEAL / Dutch debit scope",
    salaryRentFit: "Validate with employer templates — often a companion account",
    transferFit: "Strong FX / multi-currency controls for many users",
    longTermProductFit: "Rarely a full substitute for every Dutch retail pathway",
    bestUseCases: ["Travel + FX companion", "Multi-currency budgeting", "Backup card during relocation"],
    watchOuts: ["Payroll / landlord acceptance varies", "Chat-centric support"],
    feeModel: {
      monthlyFeeDisplay: "Free tier + paid plans — check Revolut plan page for NL product",
      accountFeeType: "free-tier",
      cardFeeDisplay: "Metal/plan delivery and replacement fees on paid tiers",
      internationalTransferCostPattern: "Strong for frequent FX; weekend/out-of-hours surcharges on some flows",
      fxCostPattern: "Transparent plan FX on many sends — still compare amount received vs bank",
      atmCostPattern: "ATM limits and fair-use policies vary by plan",
      premiumPlanPattern: "Paid tiers stack travel perks — avoid paying twice for same benefit elsewhere",
      businessAccountPattern: "Business Revolut where offered — separate fee schedule",
      sourceKey: "editorial-bank-shortlist",
    },
    englishSupport: "yes",
    onboarding: "easy",
    bsnRequired: "varies",
    bestFor: "Spending, travel, FX — common companion to a Dutch account",
    pros: ["Fast spending-app onboarding", "Multi-currency controls"],
    cons: ["May not cover every Dutch direct-debit case", "Chat-centric support"],
    description:
      "Global fintech for cards and FX — often a companion to a Dutch account; payroll and landlord fit varies.",
    notIdealFor: "Situations where contracts explicitly require a specific Dutch legacy bank (rare, but read your paperwork).",
    keyDrawback: "May not replace all Dutch direct-debit / payroll expectations",
    zzpSupport: true,
    businessAccountAvailable: true,
    freelancerFit: "medium",
    invoicingSupport: "basic",
    integrationSupport: [
      "Multi-currency wallets and spend controls (plan-dependent)",
      "Business Revolut where offered — separate fee schedule from personal",
    ],
    freelancerUseCases: [
      "International clients and FX-heavy invoices beside a Dutch IBAN",
      "Travel and cross-border spend layered on local rails",
    ],
    freelancerWatchOuts: [
      "Payroll and landlord acceptance is case-by-case — confirm in writing",
      "Weekend and plan surcharges can change who is cheapest per corridor",
    ],
    logoSrc: "/images/affiliates/logos/revolut.svg",
    lowCost: {
      costPositioning: "low",
      hasFreeTier: true,
      feeModelLabel: "Free tier + paid plans — weekend and plan surcharges can change who is “cheapest” in practice.",
      bestLowCostUseCases: ["Travel and FX companion next to a Dutch IBAN", "Backup card while relocation paperwork moves"],
      notIdealForLowCost: "Cases where payroll or landlord paperwork insists on a classic Dutch retail account",
      pricingSourceKey: "editorial-bank-shortlist",
    },
    transfer: {
      transferSupport: true,
      transferType: "digital",
      fxQuality: "high",
      speed: "fast",
      bestTransferUseCases: [
        "FX-heavy travel and multi-currency budgeting beside a Dutch core account",
        "Cross-border earners comparing in-app rates to bank retail tables",
        "Backup card and wallet top-ups during relocation",
      ],
      transferWatchOuts: [
        "Weekend and plan surcharges can flip who is cheapest per corridor",
        "Payroll and landlord acceptance is case-by-case — confirm in writing",
        "Fair-use and tier limits — export quotes before large sends",
      ],
    },
  },
  {
    id: "n26",
    name: "N26",
    type: "digital",
    bankType: "digital",
    scores: { localIntegrationScore: 3, internationalUseScore: 4 },
    onboardingSpeed: "Fast app flow; verify NL product scope first",
    supportModel: "App-first + chat",
    idealSupport: "Confirm iDEAL / local debit coverage for your NL product",
    salaryRentFit: "Case-by-case — read contract + bank docs together",
    transferFit: "Euro spending + transfers competitive on some tiers",
    longTermProductFit: "Thinner for complex NL-only retail products",
    bestUseCases: ["EU movers who already know N26", "Simple euro everyday use", "Second card while settling"],
    watchOuts: ["NL servicing depth varies", "Tier limits + protections differ by product"],
    feeModel: {
      monthlyFeeDisplay: "Free tier + paid plans — verify current NL product and fees on N26 site",
      accountFeeType: "free-tier",
      cardFeeDisplay: "Extra cards and express delivery may carry fees",
      internationalTransferCostPattern: "Euro SEPA competitive on many tiers; non-euro paths per table",
      fxCostPattern: "Weekend markup awareness on some card spend — read plan notes",
      atmCostPattern: "Free withdrawal allowances often capped monthly",
      premiumPlanPattern: "You/Membership-style tiers add subscription cost",
      businessAccountPattern: "Sole trader accounts where available — compare business PDF",
      sourceKey: "editorial-bank-shortlist",
    },
    englishSupport: "yes",
    onboarding: "easy",
    bsnRequired: "varies",
    bestFor: "EU app banking familiarity; simple everyday euro account (where offered)",
    pros: ["Simple euro UI", "Familiar for EU movers"],
    cons: ["NL-specific servicing can be thinner", "Tier limits need a read"],
    description:
      "Mobile euro account some expats already know — check current NL product, protections, and fees before relying on it.",
    notIdealFor: "Complex NL-only product needs (some mortgages, structured business banking) without a second provider.",
    keyDrawback: "Feature availability and deposit protection messaging differ by product — verify NL fit",
    zzpSupport: true,
    businessAccountAvailable: true,
    freelancerFit: "medium",
    invoicingSupport: "basic",
    integrationSupport: [
      "Spaces-style pots for VAT set-aside (product-dependent)",
      "Sole-trader business accounts where offered — read NL business PDF",
    ],
    freelancerUseCases: [
      "EU movers who already know N26 and want a simple euro layer",
      "Light freelance volume with clear plan to add a Dutch core account",
    ],
    freelancerWatchOuts: [
      "NL product scope thinner than global marketing — read local terms",
      "ATM caps and weekend FX notes can bite during busy months",
    ],
    logoSrc: null,
    lowCost: {
      costPositioning: "low",
      hasFreeTier: true,
      feeModelLabel: "Free tier + paid plans — verify NL product scope, ATM caps, and weekend FX notes on N26’s site.",
      bestLowCostUseCases: ["Second euro account while settling", "EU movers who already know N26’s UI"],
      notIdealForLowCost: "Complex NL-only retail needs without a second Dutch-friendly account",
      pricingSourceKey: "editorial-bank-shortlist",
    },
    transfer: {
      transferSupport: true,
      transferType: "digital",
      fxQuality: "medium",
      speed: "medium",
      bestTransferUseCases: [
        "Euro everyday account with predictable SEPA-style sends",
        "EU movers who already know N26 and want a simple second IBAN layer",
        "Light international card spend within plan ATM and FX notes",
      ],
      transferWatchOuts: [
        "NL product scope thinner than global marketing — read local terms",
        "ATM caps and weekend FX notes can bite during busy travel months",
        "Compare amount received vs specialists on non-euro rent-sized sends",
      ],
    },
  },
] as const satisfies readonly Bank[];

export type BankId = (typeof banks)[number]["id"];

/** Stable order for pages and tools — same as `banks` array order. */
export const banksComparisonRows: BankComparisonRowVm[] = banks.map(bankToComparisonRow);

export const banksDetailSections: BankDetailVm[] = banks.map(bankToDetailVm);

export function getBankById(id: BankId): Bank | undefined {
  return banks.find((b) => b.id === id);
}
