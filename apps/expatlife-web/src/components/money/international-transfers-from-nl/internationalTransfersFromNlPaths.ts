/**
 * Canonical URL for the international transfers guide.
 * Kept separate from the page model so data modules (e.g. `bankingTransferScenarios`) can import it
 * without creating a circular dependency with `internationalTransfersFromNlPageModel`.
 */
export const INTERNATIONAL_TRANSFERS_FROM_NL_PATH = "/netherlands/money/banking/international-transfers/" as const;
