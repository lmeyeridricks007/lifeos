/**
 * Shared Dutch / EU banking vocabulary for ExpatCopilot Money · Banking guides.
 * Use {@link bankingGlossaryLinkSpecs} with {@link BankingRichText} for optional first-hit inline links (one match per spec id per text blob).
 */

export const BANKING_INTERNAL_PATHS = {
  bankingHub: "/netherlands/money/banking/",
  /** Hub glossary anchor — full term grid. */
  bankingGlossaryHub: "/netherlands/money/banking/#banking-glossary-hub",
  typesOfAccounts: "/netherlands/money/banking/types-of-accounts/",
  /** Money · Banking — IBAN, iDEAL, SEPA, direct debit, cards (canonical education). */
  howPaymentsWork: "/netherlands/money/banking/how-payments-work/",
  /** Living hub — international rails orientation (not a fee calculator). */
  payments: "/netherlands/living/payments/",
  fees: "/netherlands/money/banking/fees/",
  tradVsDigital: "/netherlands/money/banking/traditional-vs-digital/",
  bestBanks: "/netherlands/money/banking/best-banks-expats/",
} as const;

/** Re-export for hub page and deep links. */
export const BANKING_GLOSSARY_HUB_ANCHOR = BANKING_INTERNAL_PATHS.bankingGlossaryHub;

export type BankingGlossaryTerm = {
  readonly id: string;
  readonly title: string;
  readonly dutchLabel?: string;
  /** Editorial definition (plain text). */
  readonly definition: string;
  /** “Learn more” for glossary panel only (not duplicated by inline linker). */
  readonly learnMoreHref?: (typeof BANKING_INTERNAL_PATHS)[keyof typeof BANKING_INTERNAL_PATHS];
};

/**
 * Canonical term copy — keep aligned across banking pages.
 * Order: payment rails → Dutch payment culture → account products → cross-border → other.
 */
export const bankingGlossaryTerms: readonly BankingGlossaryTerm[] = [
  {
    id: "iban",
    title: "IBAN",
    definition:
      "International Bank Account Number — the standard account identifier for SEPA credit transfers and many direct debits. Dutch IBANs start with NL; do not confuse with your card number.",
    learnMoreHref: BANKING_INTERNAL_PATHS.howPaymentsWork,
  },
  {
    id: "ideal",
    title: "iDEAL",
    definition:
      "Common Dutch online checkout: you choose iDEAL at a merchant, pick your bank, then approve in your bank app — not a stored wallet balance on the shop’s site.",
    learnMoreHref: BANKING_INTERNAL_PATHS.howPaymentsWork,
  },
  {
    id: "sepa",
    title: "SEPA",
    definition:
      "Single Euro Payments Area — shared rules for many euro bank transfers and direct debits between participating countries using IBAN. Cut-offs and fees are still bank-specific.",
    learnMoreHref: BANKING_INTERNAL_PATHS.howPaymentsWork,
  },
  {
    id: "direct-debit-incasso",
    title: "Direct debit / incasso",
    dutchLabel: "Automatische incasso",
    definition:
      "After you sign a mandate, an approved creditor can pull euros from your account on a schedule — Dutch forms and apps often say incasso. Common for utilities, insurance, and subscriptions.",
    learnMoreHref: BANKING_INTERNAL_PATHS.howPaymentsWork,
  },
  {
    id: "betaalverzoek",
    title: "Betaalverzoek",
    dutchLabel: "Payment request",
    definition:
      "A payment request link or in-app flow so someone can collect their share — you approve like other bank-led payments. Verify who sent it before you pay.",
    learnMoreHref: BANKING_INTERNAL_PATHS.howPaymentsWork,
  },
  {
    id: "tikkie",
    title: "Tikkie",
    definition:
      "A well-known Dutch app/brand for small group splits after someone pays the whole bill — a common example of betaalverzoek culture, not a bank requirement.",
    learnMoreHref: BANKING_INTERNAL_PATHS.howPaymentsWork,
  },
  {
    id: "betaalrekening",
    title: "Betaalrekening",
    dutchLabel: "Current / payment account",
    definition:
      "The standard Dutch current account for salary, direct debits, debit card, and usually iDEAL. Closest US analogy: checking.",
    learnMoreHref: BANKING_INTERNAL_PATHS.typesOfAccounts,
  },
  {
    id: "spaarrekening",
    title: "Spaarrekening",
    dutchLabel: "Savings account",
    definition:
      "A savings product beside your betaalrekening — interest, access rules, and tax reporting follow the bank’s current terms. Not the same as investment advice.",
    learnMoreHref: BANKING_INTERNAL_PATHS.typesOfAccounts,
  },
  {
    id: "pinpas",
    title: "Pinpas",
    dutchLabel: "Bank debit card",
    definition:
      "Everyday debit card on your betaalrekening for chip, PIN, and contactless in shops — the word people use for “bank card” in daily Dutch.",
    learnMoreHref: BANKING_INTERNAL_PATHS.howPaymentsWork,
  },
  {
    id: "debit-card",
    title: "Debit card",
    definition:
      "A card that spends your own money from a payment account — default for much in-store spend in the Netherlands. Product rules and limits are bank-specific.",
    learnMoreHref: BANKING_INTERNAL_PATHS.typesOfAccounts,
  },
  {
    id: "credit-card",
    title: "Credit card",
    definition:
      "A credit-line product — useful for some travel, deposits, or foreign websites; acceptance, fees, and interest vary. Many residents still lean on debit for routine Dutch spend.",
    learnMoreHref: BANKING_INTERNAL_PATHS.typesOfAccounts,
  },
  {
    id: "fx-currency-conversion",
    title: "FX / currency conversion",
    definition:
      "Where one currency becomes another — the exchange rate (and any markup) often matters more than a small transfer fee. Compare amount received on each provider’s official tool.",
    learnMoreHref: BANKING_INTERNAL_PATHS.howPaymentsWork,
  },
  {
    id: "international-transfer",
    title: "International transfer",
    definition:
      "Sending or receiving money across borders or non-euro routes — may use SEPA, SWIFT-style messaging, or app-specific rails. Pricing and speed differ by bank and specialist.",
    learnMoreHref: BANKING_INTERNAL_PATHS.payments,
  },
  {
    id: "multi-currency-account",
    title: "Multi-currency account",
    definition:
      "An app or account that holds or converts multiple currencies — check licence, deposit protection, and whether it sits alongside a Dutch betaalrekening for payroll and local bills.",
    learnMoreHref: BANKING_INTERNAL_PATHS.tradVsDigital,
  },
  {
    id: "gezamenlijke-rekening",
    title: "Gezamenlijke rekening",
    dutchLabel: "Joint account",
    definition:
      "A shared account for two or more people — signing rules, cards, and liability follow the bank’s product terms.",
    learnMoreHref: BANKING_INTERNAL_PATHS.typesOfAccounts,
  },
  {
    id: "zakelijke-rekening",
    title: "Zakelijke rekening",
    dutchLabel: "Business account",
    definition:
      "A business / ZZP product for turnover, invoicing, and VAT admin — fee tables differ from personal packages.",
    learnMoreHref: BANKING_INTERNAL_PATHS.typesOfAccounts,
  },
  {
    id: "zzp",
    title: "ZZP",
    dutchLabel: "Freelancer / self-employed",
    definition:
      "Zelfstandige zonder personeel — Dutch freelancer lane. Banking and tax paperwork often expect clean separation between private spend and business turnover.",
    learnMoreHref: BANKING_INTERNAL_PATHS.typesOfAccounts,
  },
] as const;

export type BankingGlossaryLinkSpec = {
  readonly id: string;
  readonly pattern: string;
  readonly href: string;
};

/**
 * Inline link patterns — longer / more specific patterns first in this file for readability.
 * Each `id` links at most once per {@link BankingRichText} `text` value.
 */
export const bankingGlossaryLinkSpecs: readonly BankingGlossaryLinkSpec[] = [
  { id: "traditional-vs-digital-banks-title", pattern: "Traditional vs digital banks", href: BANKING_INTERNAL_PATHS.tradVsDigital },
  { id: "types-of-bank-accounts-title", pattern: "Types of bank accounts", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "banking-fees-ampersand", pattern: "Banking fees & costs", href: BANKING_INTERNAL_PATHS.fees },
  { id: "banking-fees-short", pattern: "Banking fees", href: BANKING_INTERNAL_PATHS.fees },
  { id: "how-payments-work-title", pattern: "How payments work", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "gezamenlijke-rekening", pattern: "gezamenlijke rekening", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "multi-currency-account", pattern: "multi-currency account", href: BANKING_INTERNAL_PATHS.tradVsDigital },
  { id: "international-transfers-plural", pattern: "international transfers", href: BANKING_INTERNAL_PATHS.payments },
  { id: "international-transfer", pattern: "international transfer", href: BANKING_INTERNAL_PATHS.payments },
  { id: "fx-spread", pattern: "FX spread", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "foreign-exchange", pattern: "foreign exchange", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "currency-conversion", pattern: "currency conversion", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "direct-debit", pattern: "direct debit", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "betaalverzoek", pattern: "betaalverzoek", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "Betaalverzoek", pattern: "Betaalverzoek", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "best-banks-for-expats-title", pattern: "Best banks for expats", href: BANKING_INTERNAL_PATHS.bestBanks },
  { id: "best-banks-for-expats-lower", pattern: "best banks for expats", href: BANKING_INTERNAL_PATHS.bestBanks },
  { id: "banking-glossary", pattern: "Banking glossary", href: BANKING_INTERNAL_PATHS.bankingGlossaryHub },
  { id: "zakelijke-rekening", pattern: "zakelijke rekening", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "incasso", pattern: "incasso", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "Tikkie", pattern: "Tikkie", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "pinpas", pattern: "pinpas", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "Pinpas", pattern: "Pinpas", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "spaarrekening", pattern: "spaarrekening", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "betaalrekening", pattern: "betaalrekening", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "Betaalrekening", pattern: "Betaalrekening", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "debit-card", pattern: "debit card", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "credit-card", pattern: "credit card", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "ideal", pattern: "iDEAL", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "sepa", pattern: "SEPA", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "iban", pattern: "IBAN", href: BANKING_INTERNAL_PATHS.howPaymentsWork },
  { id: "zzp", pattern: "ZZP", href: BANKING_INTERNAL_PATHS.typesOfAccounts },
  { id: "multi-currency", pattern: "multi-currency", href: BANKING_INTERNAL_PATHS.tradVsDigital },
  { id: "traditional-vs-digital-short", pattern: "Traditional vs digital", href: BANKING_INTERNAL_PATHS.tradVsDigital },
  { id: "traditional-vs-digital-lower", pattern: "traditional vs digital", href: BANKING_INTERNAL_PATHS.tradVsDigital },
] as const;

/** Shared section copy for banking subpages (fees, trad/digital, best banks). */
export const bankingSubpageGlossarySection = {
  id: "banking-glossary",
  eyebrow: "Reference",
  title: "Banking glossary",
  intro:
    "Short definitions for the same Dutch banking words live on the Banking hub glossary — one place to look up terms when you read fee lists or bank emails.",
} as const;
