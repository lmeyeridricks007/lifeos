import type { ContractEntitlements } from "@/src/lib/tools/contract-scanner/architectureTypes";

/** Default for anonymous / free tier. Replace later with `getContractEntitlementsFromRequest(req)`. */
export function getDefaultContractEntitlements(): ContractEntitlements {
  return {
    ocrEnabled: false,
    premiumInsightsEnabled: false,
    imageUploadTabEnabled: false,
    savedHistoryEnabled: false,
    compareContractsEnabled: false,
  };
}

/**
 * Future: read session / subscription and return entitlements.
 * Today: always free defaults (no auth dependency).
 */
export function getContractEntitlementsFromRequest(_request: Request): ContractEntitlements {
  return getDefaultContractEntitlements();
}
