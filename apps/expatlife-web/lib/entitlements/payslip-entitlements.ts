/**
 * Payslip Decoder — per-request entitlements (what the caller may use).
 *
 * Today: static anonymous-free defaults + request-shaped resolver stub for future auth.
 * Product flags (`lib/config/payslip-features.ts`) still gate whether features exist at all;
 * entitlements gate whether **this user/session** may use them. Effective capability is both.
 *
 * TODO(auth + billing): Resolve session from cookies/headers, load subscription/plan,
 * merge with org defaults, and return a populated `PayslipEntitlements` object.
 */

export type PayslipEntitlements = {
  canUseTextPdfUpload: boolean;
  canUsePasteMode: boolean;
  canUseOcr: boolean;
  canUseImageUpload: boolean;
  canUsePremiumInsights: boolean;
};

/** Anonymous visitor on the free tool — current production default. */
export const ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS: PayslipEntitlements = {
  canUseTextPdfUpload: true,
  canUsePasteMode: true,
  canUseOcr: false,
  canUseImageUpload: false,
  canUsePremiumInsights: false,
};

/**
 * Default resolver when no request context is available (e.g. static generation, tests, scripts).
 */
export function getPayslipEntitlements(): PayslipEntitlements {
  return ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS;
}

/**
 * Resolve entitlements for an HTTP request.
 *
 * TODO(auth): `cookies()` / `headers()` from `next/headers`, validate session JWT, load user + plan,
 * map plan SKU to booleans below. Consider caching per-request on `AsyncLocalStorage` if needed.
 */
export function getPayslipEntitlementsFromRequest(_request: Request): PayslipEntitlements {
  void _request;
  return getPayslipEntitlements();
}
