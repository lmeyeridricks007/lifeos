/**
 * Affiliate-ready **display** metadata for banking comparison tools.
 *
 * - Keys such as `affiliateProviderKey` exist for monetisation wiring and transparency copy only.
 * - Fit scoring must consume only editorial bands (scores, flags) — never these monetisation fields.
 */

import type { BankId } from "@/src/data/banking/banks";

/** Shown near outbound links on tool results — scoring is independent of this note. */
export const AFFILIATE_LINKS_SCORING_DISCLAIMER =
  "Some links may earn us a commission. That does not change your scores or which banks we suggest." as const;

/**
 * Optional monetisation / editorial-review fields layered on top of provider rows.
 * None of these fields may be read by `calculateBankFitScores` or weight logic.
 */
export type BankingProviderMonetizationMeta = {
  /** Registry id for affiliate / outbound tooling — documentation only for the scoring engine. */
  affiliateProviderKey?: string;
  /** Stable key for provider URL resolution (often same as catalog `id`). */
  providerUrlKey?: string;
  /** Stable key for pricing-page resolution or content ops (not a live API). */
  pricingUrlKey?: string;
  /** ISO `YYYY-MM-DD` when this catalog row was last editorially reviewed. */
  lastReviewed: string;
  /** Short internal/editorial note; may surface as a muted line on tool cards. */
  reviewNotes?: string;
  /** Extra transparency line when a commercial relationship exists — still not used in ranking math. */
  editorialDisclosure?: string;
  /** When set (including `null`), overrides {@link resolveDefaultBankingGuideHref}. Omit to use defaults. */
  bankingGuideHref?: string | null;
  /** When set, “Check current pricing” uses this URL; otherwise the main provider `externalUrl`. */
  pricingPageUrl?: string | null;
};

const BEST_BANKS_EXPATS_HREF = "/netherlands/money/banking/best-banks-expats/" as const;

const BANK_DETAIL_IDS = new Set<BankId>(["ing", "abn-amro", "rabobank", "bunq", "revolut", "n26"]);

/**
 * Deep link into the Best banks guide breakdown when we have a matching `bankId`, else sensible fallbacks.
 * Not used in scoring.
 */
export function resolveDefaultBankingGuideHref(entry: {
  bankingGuideHref?: string | null;
  bankId?: BankId;
  id: string;
}): string | null {
  if (entry.bankingGuideHref !== undefined) {
    return entry.bankingGuideHref;
  }
  if (entry.bankId !== undefined && BANK_DETAIL_IDS.has(entry.bankId)) {
    return `${BEST_BANKS_EXPATS_HREF}#${entry.bankId}`;
  }
  if (entry.id === "wise") {
    return "/netherlands/money/banking/international-transfers/";
  }
  return null;
}
