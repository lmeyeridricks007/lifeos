import type { BankId } from "@/src/data/banking/banks";

/**
 * Canonical order for “low-cost” editorial shortlists (banks + non-bank transfer companion).
 * Keeps page models free of provider ordering — reuse for tools later.
 */
export type BankingLowCostShortlistEntry = { kind: "bank"; id: BankId } | { kind: "wise-transfer" };

export const BANKING_LOW_COST_SHORTLIST_ENTRIES: readonly BankingLowCostShortlistEntry[] = [
  { kind: "bank", id: "bunq" },
  { kind: "bank", id: "revolut" },
  { kind: "bank", id: "n26" },
  { kind: "bank", id: "ing" },
  { kind: "bank", id: "abn-amro" },
  { kind: "bank", id: "rabobank" },
  { kind: "wise-transfer" },
] as const;

/** Freelancer / ZZP guide — traditional majors first, then digital, Wise companion last. */
export const BANKING_ZZP_FREELANCER_SHORTLIST_ENTRIES: readonly BankingLowCostShortlistEntry[] = [
  { kind: "bank", id: "ing" },
  { kind: "bank", id: "abn-amro" },
  { kind: "bank", id: "rabobank" },
  { kind: "bank", id: "bunq" },
  { kind: "bank", id: "revolut" },
  { kind: "bank", id: "n26" },
  { kind: "wise-transfer" },
] as const;

/** International transfers guide — specialist first, then digital majors, then Dutch branch banks. */
export const BANKING_INTERNATIONAL_TRANSFERS_SHORTLIST_ENTRIES: readonly BankingLowCostShortlistEntry[] = [
  { kind: "wise-transfer" },
  { kind: "bank", id: "revolut" },
  { kind: "bank", id: "bunq" },
  { kind: "bank", id: "n26" },
  { kind: "bank", id: "ing" },
  { kind: "bank", id: "abn-amro" },
  { kind: "bank", id: "rabobank" },
] as const;

/** Wise is not a {@link Bank} row — shared editorial profile for low-cost / transfer companion cards. */
export const wiseTransferCompanionLowCostProfile = {
  providerId: "wise" as const,
  typeLabel: "Transfer / multi-currency",
  feeModelSummary: "Varies — check current provider pricing on Wise’s official site.",
  bestForMarkdown:
    "Sends in other currencies and holding money outside euros — usually next to a normal Dutch everyday account.",
  costWatchOutsMarkdown:
    "Corridor pricing, amount received, and timing (weekends) — compare official calculators, not headlines.",
  localFit: "Add-on to a Dutch account for most salary and online shopping setups — check that your billers accept it.",
  internationalFit: "Strong fit for several currencies and sends to other countries — read fair-use and account-type notes.",
  notIdealMarkdown: "Replacing every Dutch automatic bill payment or salary setup without checking what your contract or employer allows.",
} as const;
