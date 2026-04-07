/**
 * Payslip Decoder feature gates (OCR, image upload, premium insights).
 * Server: set ENABLE_* (no prefix). Client: mirror with NEXT_PUBLIC_* where UI must hide modes before decode.
 * All default to off when unset.
 *
 * These are **rollout / ops switches**, not authorization. Combine with `lib/entitlements/payslip-entitlements.ts`
 * for per-user/session access (see docs/tools/payslip-decoder-future-ocr.md).
 */

export type PayslipFeatureFlags = {
  enableOcr: boolean;
  enableImageUpload: boolean;
  enablePremiumInsights: boolean;
};

function envTruthy(v: string | undefined): boolean {
  if (v === undefined || v === "") return false;
  const x = v.trim().toLowerCase();
  return x === "1" || x === "true" || x === "yes" || x === "on";
}

/**
 * Server / API — use in route handlers and `processPayslipDocument` mapping.
 * Env: `ENABLE_PAYSLIP_OCR`, `ENABLE_PAYSLIP_IMAGE_UPLOAD`, `ENABLE_PREMIUM_PAYSLIP_INSIGHTS`
 */
export function getPayslipFeatureFlags(): PayslipFeatureFlags {
  return {
    enableOcr: envTruthy(process.env.ENABLE_PAYSLIP_OCR),
    enableImageUpload: envTruthy(process.env.ENABLE_PAYSLIP_IMAGE_UPLOAD),
    enablePremiumInsights: envTruthy(process.env.ENABLE_PREMIUM_PAYSLIP_INSIGHTS),
  };
}

/**
 * Client bundle — controls visible input modes before any API call.
 * Env: `NEXT_PUBLIC_ENABLE_PAYSLIP_OCR`, `NEXT_PUBLIC_ENABLE_PAYSLIP_IMAGE_UPLOAD`, `NEXT_PUBLIC_ENABLE_PREMIUM_PAYSLIP_INSIGHTS`
 */
export function getPayslipPublicFeatureFlags(): PayslipFeatureFlags {
  return {
    enableOcr: envTruthy(process.env.NEXT_PUBLIC_ENABLE_PAYSLIP_OCR),
    enableImageUpload: envTruthy(process.env.NEXT_PUBLIC_ENABLE_PAYSLIP_IMAGE_UPLOAD),
    enablePremiumInsights: envTruthy(process.env.NEXT_PUBLIC_ENABLE_PREMIUM_PAYSLIP_INSIGHTS),
  };
}
