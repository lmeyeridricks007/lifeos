/**
 * Future paid “deeper insights” — disabled until `ENABLE_PREMIUM_PAYSLIP_INSIGHTS` and implementations exist.
 * Planned examples: anomaly hints, payroll issue suggestions, richer missing-line narrative, optimization notes.
 *
 * TODO(paid): Implement deterministic rules first; optional ML only with strict no-PII logging policy.
 * TODO(paid): Require subscription/entitlement in the API before setting `enablePremium: true` for real users
 * (env flag alone is insufficient). Orchestrator: `insights/payslip-insights.ts`. Blueprint:
 * docs/tools/payslip-decoder-future-ocr.md
 */
import type { PayslipParseResult, PayslipPremiumInsightsBlock } from "@/src/lib/tools/payslip/types";

export function buildPremiumPayslipInsights(params: {
  enablePremium: boolean;
  parsed: PayslipParseResult;
}): PayslipPremiumInsightsBlock {
  void params.parsed;
  if (!params.enablePremium) {
    return { enabled: false, items: [] };
  }
  // TODO(paid): populate items from deterministic rules + optional ML — keep PII out of logs.
  return { enabled: false, items: [] };
}
