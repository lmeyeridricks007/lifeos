/**
 * Editorial “fit” catalog for the bank comparison tool.
 *
 * - Scores are 1–5 editorial bands for expat-relevant dimensions (not live pricing, not pay-to-rank).
 * - Review when Dutch banking products or positioning materially change.
 * - Monetisation / affiliate metadata lives on {@link BankingProviderMonetizationMeta} — never read for ranking math.
 */

import type { BankId } from "@/src/data/banking/banks";
import type { BankingProviderMonetizationMeta } from "@/src/data/banking/bankingProviderAffiliateSafety";
import type { ScoreDimension } from "./types";

export type ProviderTypeCatalog = "traditional" | "digital" | "transfer_specialist";

export type TriState = boolean | "depends";

export type BankComparisonCatalogEntry = BankingProviderMonetizationMeta & {
  id: string;
  name: string;
  providerType: ProviderTypeCatalog;
  bankId?: BankId;
  /** 1–5 editorial fit bands used by the scoring engine (weights × your answers only). */
  scores: Record<ScoreDimension, number>;
  supportsIdeal: TriState;
  supportsBusinessAccount: TriState;
  supportsJointAccount: TriState;
  supportsSavings: TriState;
  supportsCreditCard: TriState;
  bsnRequirement: "required" | "not_required_initially" | "depends";
  costModelLabel: string;
  pricingCaveat: string;
  /** Short bullets with illustrative € amounts — planning examples only; not live tariffs. */
  costExamples: readonly string[];
  /** What most people use this bank for (accounts, iDEAL, joint/business) — not live product advice. */
  featuresSummary?: string;
  bestFor: readonly string[];
  watchOuts: readonly string[];
  externalUrl: string;
  logoSrc: string | null;
};

export const BANK_COMPARISON_CATALOG: readonly BankComparisonCatalogEntry[] = [
  {
    id: "ing",
    name: "ING",
    providerType: "traditional",
    bankId: "ing",
    scores: {
      localIntegrationScore: 5,
      onboardingScore: 3,
      costScore: 4,
      internationalTransferScore: 3,
      freelancerScore: 4,
      familyScore: 4,
      supportScore: 4,
      digitalExperienceScore: 4,
      longTermFitScore: 5,
    },
    supportsIdeal: true,
    supportsBusinessAccount: true,
    supportsJointAccount: true,
    supportsSavings: true,
    supportsCreditCard: "depends",
    bsnRequirement: "required",
    featuresSummary:
      "ING’s standard personal account is what most employees use for a Dutch IBAN, salary deposits, rent by direct debit, and iDEAL — the usual “pay from your bank balance” button on Dutch websites. Joint accounts, savings pots, credit cards, and ZZP or business packages are usually priced separately, so open the fee PDF that matches the account name you actually need.",
    costModelLabel: "Start with a simple personal account; add paid bundles or a separate ZZP product only if you need them.",
    pricingCaveat: "Use ING's live PDF for the week you apply — euro bullets below are rough planning examples, not a quote.",
    costExamples: [
      "Payment account: often advertised around €0–3.50/month before extras",
      "Premium-style bundles: many brochures land about €15–22/month",
      "Separate ZZP/business line: often about €10–35/month for light use — read the business PDF",
    ],
    bestFor: ["Dutch payroll + rent on one mainstream IBAN", "Long-term everyday banking", "Households wanting familiar local rails"],
    watchOuts: [
      "The site lists many products with similar names — choose the personal, joint, or business path that matches you before you compare prices.",
      "Large transfers in other currencies: a “no fee” line can still mean a weaker exchange rate than a dedicated transfer app — look at euros received, not only the headline.",
    ],
    affiliateProviderKey: "monetization-bank-ing",
    providerUrlKey: "ing",
    pricingUrlKey: "ing-nl-retail-tariffs",
    lastReviewed: "2026-04-30",
    reviewNotes: "Checked against our best-banks guide — review again after big price or package changes.",
    editorialDisclosure: "ING partner links may pay us a commission. Your scores still use only our ratings and your answers.",
    pricingPageUrl: null,
    externalUrl: "https://www.ing.nl/en/personal/expats",
    logoSrc: "/images/affiliates/logos/ing.svg",
  },
  {
    id: "abn-amro",
    name: "ABN AMRO",
    providerType: "traditional",
    bankId: "abn-amro",
    scores: {
      localIntegrationScore: 5,
      onboardingScore: 3,
      costScore: 3,
      internationalTransferScore: 3,
      freelancerScore: 5,
      familyScore: 4,
      supportScore: 5,
      digitalExperienceScore: 4,
      longTermFitScore: 5,
    },
    supportsIdeal: true,
    supportsBusinessAccount: true,
    supportsJointAccount: true,
    supportsSavings: true,
    supportsCreditCard: "depends",
    bsnRequirement: "required",
    featuresSummary:
      "ABN AMRO behaves like a classic Dutch “main bank”: branches in many places, advisers for mortgages or business, and everyday accounts that support iDEAL, direct debits, and a normal Dutch IBAN. English is widely available on the international pages, but branch hours and which products can be opened fully online change — follow the flow for the exact account you want.",
    costModelLabel: "One monthly package can bundle cards or perks; freelancers usually add a separate business/ZZP sheet.",
    pricingCaveat: "ABN AMRO changes packages often — treat euro bullets as orientation; confirm totals on their site.",
    costExamples: [
      "Common personal packages: often about €4–12/month depending on bundle",
      "Extra debit card: often about €2.50–5/month",
      "Light ZZP add-on: often about €15–40/month before heavy transaction fees",
    ],
    bestFor: ["Branch + app hybrid", "ZZP wanting depth and export conversations", "Mortgage-bound households later"],
    watchOuts: [
      "Some journeys still need a branch visit or a booked call — good if you like face-to-face help, less convenient if you want everything finished on your phone in one evening.",
      "Premium add-ons (extra cards, insurance, lounge access) can quietly raise the monthly bill — decide what you truly need before you tick boxes.",
    ],
    affiliateProviderKey: "monetization-bank-abn-amro",
    providerUrlKey: "abn-amro",
    pricingUrlKey: "abn-amro-retail-tariffs",
    lastReviewed: "2026-04-30",
    reviewNotes: "ABN AMRO ZZP depth called out in guides — confirm current business PDF naming.",
    editorialDisclosure: "ABN AMRO partner links may pay a commission. Rankings ignore affiliate configuration.",
    pricingPageUrl: null,
    externalUrl: "https://www.abnamro.nl/en/personal/",
    logoSrc: "/images/affiliates/logos/abn-amro.svg",
  },
  {
    id: "rabobank",
    name: "Rabobank",
    providerType: "traditional",
    bankId: "rabobank",
    scores: {
      localIntegrationScore: 5,
      onboardingScore: 2,
      costScore: 3,
      internationalTransferScore: 2,
      freelancerScore: 3,
      familyScore: 4,
      supportScore: 4,
      digitalExperienceScore: 3,
      longTermFitScore: 4,
    },
    supportsIdeal: true,
    supportsBusinessAccount: true,
    supportsJointAccount: true,
    supportsSavings: true,
    supportsCreditCard: "depends",
    bsnRequirement: "required",
    featuresSummary:
      "Rabobank is a cooperative bank rooted in local regions: strong for everyday Dutch banking (IBAN, iDEAL, direct debits) once you are in their service area. Joint, youth, and business products exist, but names and opening rules can differ by postcode — use the tariff page tied to your address.",
    costModelLabel: "Regional cooperative: one payment-account package plus separate lines for cards or business add-ons.",
    pricingCaveat: "Open the PDF for your postcode — amounts below are typical planning bands, not your final price.",
    costExamples: [
      "Personal payment accounts: often about €3–9/month before add-ons (varies by region)",
      "Extra card: often about €2–5/month",
      "Light freelancer add-on: often about €12–35/month — regional lists differ",
    ],
    bestFor: ["Domestic-first households", "Regional cooperative preference", "Long-horizon NL integration"],
    watchOuts: [
      "English is not guaranteed on every local line — stick to the published international or expat routes if that matters to you.",
      "International transfer screens and card rules can differ by region; download the PDF for your postcode rather than a generic screenshot.",
    ],
    providerUrlKey: "rabobank",
    pricingUrlKey: "rabobank-particulieren-tariffs",
    lastReviewed: "2026-04-30",
    reviewNotes: "Prices can vary by region — check the list for your area.",
    pricingPageUrl: null,
    externalUrl: "https://www.rabobank.nl/particulieren",
    logoSrc: "/images/affiliates/logos/rabobank.svg",
  },
  {
    id: "bunq",
    name: "bunq",
    providerType: "digital",
    bankId: "bunq",
    scores: {
      localIntegrationScore: 4,
      onboardingScore: 5,
      costScore: 3,
      internationalTransferScore: 4,
      freelancerScore: 5,
      familyScore: 3,
      supportScore: 3,
      digitalExperienceScore: 5,
      longTermFitScore: 3,
    },
    supportsIdeal: true,
    supportsBusinessAccount: true,
    supportsJointAccount: "depends",
    supportsSavings: true,
    supportsCreditCard: "depends",
    bsnRequirement: "depends",
    featuresSummary:
      "bunq is built around app-first accounts with a Dutch IBAN, instant notifications, and pots for budgeting. iDEAL and direct debits usually work like other Dutch banks once the account is live, but employers and landlords sometimes ask for a “household name” bank — confirm acceptance for the exact plan (personal vs business) you pick.",
    costModelLabel: "Fixed monthly subscription; higher tiers unlock more cards, ATM use, or business tools.",
    pricingCaveat: "Plan names change — screenshot your tier; verify euros on bunq's current English pricing page.",
    costExamples: [
      "Personal plans in marketing: often about €3–19/month depending on tier",
      "Business tools on top: often about €10–35/month combined with personal",
      "Extra physical card beyond allowance: often about €3–10/month each",
    ],
    bestFor: ["English-first Dutch account with fast remote onboarding", "App-native freelancers and solos"],
    watchOuts: [
      "There is almost no branch network — if you like walking into a desk for every question, a traditional bank may feel calmer.",
      "Ask payroll and your landlord (or agency) if they are happy with this IBAN and account type before you rely on it for salary or rent.",
    ],
    affiliateProviderKey: "monetization-bank-bunq",
    providerUrlKey: "bunq",
    pricingUrlKey: "bunq-plan-pricing",
    lastReviewed: "2026-04-30",
    reviewNotes: "Plans and names change often — match the English sign-up flow to the plan you want.",
    editorialDisclosure: "bunq partner links may pay us a commission. That does not change your scores.",
    pricingPageUrl: null,
    externalUrl: "https://www.bunq.com/",
    logoSrc: "/images/affiliates/logos/bunq.svg",
  },
  {
    id: "revolut",
    name: "Revolut",
    providerType: "digital",
    bankId: "revolut",
    scores: {
      localIntegrationScore: 3,
      onboardingScore: 5,
      costScore: 4,
      internationalTransferScore: 5,
      freelancerScore: 3,
      familyScore: 3,
      supportScore: 3,
      digitalExperienceScore: 5,
      longTermFitScore: 3,
    },
    supportsIdeal: "depends",
    supportsBusinessAccount: "depends",
    supportsJointAccount: "depends",
    supportsSavings: true,
    supportsCreditCard: "depends",
    bsnRequirement: "depends",
    featuresSummary:
      "Revolut is mainly a smartphone wallet with strong currency features: hold euros plus other currencies, spend on a card, and send money abroad. It can sit next to a Dutch high-street account, but salary, iDEAL, and some landlord setups still expect a classic Dutch IBAN — confirm in writing if anyone insists on a specific bank name.",
    costModelLabel: "Often free to start; paid tiers lift limits on FX, ATM, and support — weekend FX can cost extra.",
    pricingCaveat: "Read the Netherlands signup path; euro hints are common marketing levels, not your contract.",
    costExamples: [
      "Paid tiers often marketed around €3.99, €8.99, and about €14.99/month (names change)",
      "ATM above allowance: often about €2/withdrawal plus possible weekend FX markup",
      "Large non-euro send: compare euros received in Revolut vs your Dutch bank the same day",
    ],
    bestFor: ["Travel + FX companion beside a Dutch IBAN", "Multi-currency budgeting", "Backup wallet during relocation"],
    watchOuts: [
      "Some employers and housing agents still prefer a household-name Dutch bank on paperwork — ask before you move all money.",
      "Support is mostly chat-first and plan limits can cap withdrawals or conversions — read the cap table for the tier you pick.",
    ],
    affiliateProviderKey: "monetization-bank-revolut",
    providerUrlKey: "revolut",
    pricingUrlKey: "revolut-plans-fx",
    lastReviewed: "2026-04-30",
    reviewNotes: "Marketing can differ from the Dutch product — confirm which country’s rules you sign under.",
    editorialDisclosure: "Revolut partner links may pay us a commission. That does not change your scores.",
    pricingPageUrl: null,
    externalUrl: "https://www.revolut.com/",
    logoSrc: "/images/affiliates/logos/revolut.svg",
  },
  {
    id: "n26",
    name: "N26",
    providerType: "digital",
    bankId: "n26",
    scores: {
      localIntegrationScore: 3,
      onboardingScore: 5,
      costScore: 4,
      internationalTransferScore: 4,
      freelancerScore: 3,
      familyScore: 3,
      supportScore: 3,
      digitalExperienceScore: 5,
      longTermFitScore: 3,
    },
    supportsIdeal: "depends",
    supportsBusinessAccount: "depends",
    supportsJointAccount: "depends",
    supportsSavings: "depends",
    supportsCreditCard: "depends",
    bsnRequirement: "depends",
    featuresSummary:
      "N26 is a mobile-first euro account from a German-licensed group: good for day-to-day card spend and simple SEPA transfers. iDEAL and some Dutch employer portals expect a local Dutch bank label — read N26’s Netherlands help pages for what is supported today before you rely on it for rent or salary.",
    costModelLabel: "Often a free Standard-style tier, then paid plans for higher limits or insurance bundles.",
    pricingCaveat: "Protections depend on which N26 entity you join — read the NL/EEA terms you actually accept.",
    costExamples: [
      "Smart-style plan: often about €4.90/month in EU marketing where offered",
      "Foreign ATM outside allowance: often about €2 plus a small FX percent on some tiers",
      "Top metal-style plans: often about €16.90/month in marketing — verify your signup country",
    ],
    bestFor: ["EU movers who already know N26", "Simple euro everyday layer while settling"],
    watchOuts: [
      "Local Dutch support depth is thinner than the global brand suggests — check how you can reach a human if a payment is blocked.",
      "Not every Dutch workflow (some payroll files, certain mortgage steps) is mapped to N26 — keep a backup plan until you have written confirmation.",
    ],
    providerUrlKey: "n26",
    pricingUrlKey: "n26-eu-pricing",
    lastReviewed: "2026-04-30",
    reviewNotes: "No partner programme on file for this row — outbound link is for your convenience.",
    pricingPageUrl: null,
    externalUrl: "https://n26.com/en-eu",
    logoSrc: null,
  },
  {
    id: "wise",
    name: "Wise",
    providerType: "transfer_specialist",
    scores: {
      localIntegrationScore: 2,
      onboardingScore: 5,
      costScore: 4,
      internationalTransferScore: 5,
      freelancerScore: 4,
      familyScore: 2,
      supportScore: 3,
      digitalExperienceScore: 5,
      longTermFitScore: 3,
    },
    supportsIdeal: false,
    supportsBusinessAccount: "depends",
    supportsJointAccount: false,
    supportsSavings: "depends",
    supportsCreditCard: false,
    bsnRequirement: "depends",
    featuresSummary:
      "Wise is best thought of as a transfer and multi-currency tool: you move money between countries with transparent fees, and you can hold balances in several currencies. It is not a full replacement for a Dutch retail account if you need every iDEAL, payroll, and landlord workflow on one classic Dutch IBAN — pair it with a local bank when in doubt.",
    costModelLabel: "Pay per transfer and per conversion — no classic Dutch monthly bundle from Wise itself.",
    pricingCaveat: "Fees change by corridor and time — run Wise's calculator on the send day; bullets are patterns only.",
    costExamples: [
      "Common pattern: small fixed fee plus a percent (example: a €1,000 send might show roughly €4–8 total fee in the calculator — live quote wins)",
      "Weekend or rush delivery options can add a few euros more on the same amount",
      "Holding or spending from Wise balances: check Wise's own table for card and conversion lines",
    ],
    bestFor: ["Non-euro sends and multi-currency balances beside a Dutch everyday account", "Freelancers invoicing abroad"],
    watchOuts: [
      "Do not assume one Wise balance replaces every Dutch direct debit or iDEAL habit — check each biller accepts the account details you plan to use.",
      "Fair-use rules and account-type limits apply — read the small print if you move business-sized amounts.",
    ],
    affiliateProviderKey: "monetization-bank-wise",
    providerUrlKey: "wise",
    pricingUrlKey: "wise-transfer-pricing",
    lastReviewed: "2026-04-30",
    reviewNotes: "Listed mainly for sending money abroad — see our transfers guide for the full story.",
    editorialDisclosure: "Wise partner links may pay us a commission. That does not change your scores.",
    pricingPageUrl: null,
    externalUrl: "https://wise.com/",
    logoSrc: "/images/affiliates/logos/wise.svg",
  },
] as const;

export function getCatalogEntry(id: string): BankComparisonCatalogEntry | undefined {
  return BANK_COMPARISON_CATALOG.find((p) => p.id === id);
}
