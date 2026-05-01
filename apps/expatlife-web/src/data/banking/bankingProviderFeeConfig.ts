import type { BankingCostEuroBand } from "@/src/data/banking/bankingCostAssumptions";

/**
 * Sourced, editorial fee *patterns* for a named provider — intended to back future
 * provider-specific banking cost estimates. **Not** live API pricing.
 *
 * Until a row exists in {@link bankingCostProviderFeeRegistry} and passes
 * {@link isBankingProviderFeeConfigActionable}, the estimator stays on generic editorial bands.
 */
export type ProviderFeeConfig = {
  /** Stable id — should align with bank comparison / catalog ids when wired (e.g. `ing`). */
  providerId: string;
  /** Typical monthly account / bundle charge band (EUR/month, inclusive planning range). */
  monthlyFeeRange: BankingCostEuroBand;
  /** Extra or paid-card fee pressure beyond the first card (EUR/month band). */
  cardFeeRange: BankingCostEuroBand;
  /**
   * Editorial description of how this provider prices international sends for the estimator
   * (e.g. `flat-plus-markup`, `corridor-dependent`). Future engine maps this to numeric bands.
   */
  transferFeePattern: string;
  /** How FX is usually applied on card spend / conversions for modelling (e.g. `weekend-markup`). */
  fxPattern: string;
  /** Cash / ATM behaviour summary for modelling (e.g. `eurozone-free-abroad-fee`). */
  atmPattern: string;
  /** Provenance key for editorial review (not a live tariff API id). */
  sourceKey: string;
  /** ISO `YYYY-MM-DD` when this profile was last editorially reviewed. */
  lastChecked: string;
};

const RESERVED_NON_SOURCE_KEYS = new Set(["pending", "unknown", "todo", ""]);

function isValidIsoDate(s: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(s.trim());
}

function isValidBand(b: BankingCostEuroBand): boolean {
  const [low, high] = b;
  return Number.isFinite(low) && Number.isFinite(high) && low >= 0 && high >= low;
}

/**
 * Registry of provider fee profiles. **Empty until** each provider has complete,
 * sourced config — the estimator ignores optional `providerId` on questionnaire inputs until then.
 */
/** Mutable for tests; populate only with complete {@link ProviderFeeConfig} rows. */
export const bankingCostProviderFeeRegistry: Partial<Record<string, ProviderFeeConfig>> = {};

export function getBankingCostProviderFeeConfig(providerId: string): ProviderFeeConfig | undefined {
  const id = providerId.trim();
  if (!id) return undefined;
  return bankingCostProviderFeeRegistry[id];
}

/** True when a config row exists and is complete enough to drive provider-specific engine paths. */
export function isBankingProviderFeeConfigActionable(config: ProviderFeeConfig): boolean {
  if (!config.providerId?.trim() || config.providerId.trim() !== config.providerId) return false;
  if (!isValidBand(config.monthlyFeeRange) || !isValidBand(config.cardFeeRange)) return false;
  const sk = config.sourceKey?.trim().toLowerCase();
  if (!sk || RESERVED_NON_SOURCE_KEYS.has(sk)) return false;
  if (!isValidIsoDate(config.lastChecked)) return false;
  if (!config.transferFeePattern?.trim()) return false;
  if (!config.fxPattern?.trim()) return false;
  if (!config.atmPattern?.trim()) return false;
  return true;
}
