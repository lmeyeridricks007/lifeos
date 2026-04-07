/**
 * Insight orchestration: basic (always) + premium (flag-gated stub).
 *
 * TODO(paid): When premium is on, merge `premium.items` into API `premiumInsights` and optionally gate UI blocks.
 * Deeper generation belongs in `premium-payslip-insights.ts` — keep this file as wiring only.
 */
import { buildBasicPayslipInsights } from "@/src/lib/tools/payslip/insights/basic-payslip-insights";
import { buildPremiumPayslipInsights } from "@/src/lib/tools/payslip/insights/premium-payslip-insights";
import type { PayslipInsightsPayload } from "@/src/lib/tools/payslip/pipeline/document-types";
import type { ExtractionQualityLevel, PayslipParseResult, PayslipPremiumInsightsBlock } from "@/src/lib/tools/payslip/types";

export type PayslipInsightLayers = {
  basic: PayslipInsightsPayload;
  premium: PayslipPremiumInsightsBlock;
};

export function buildPayslipInsightLayers(params: {
  extractionQuality: ExtractionQualityLevel;
  parsed: PayslipParseResult;
  enablePremiumInsights: boolean;
}): PayslipInsightLayers {
  return {
    basic: buildBasicPayslipInsights({
      extractionQuality: params.extractionQuality,
      parsed: params.parsed,
    }),
    premium: buildPremiumPayslipInsights({
      enablePremium: params.enablePremiumInsights,
      parsed: params.parsed,
    }),
  };
}

export { buildBasicPayslipInsights } from "@/src/lib/tools/payslip/insights/basic-payslip-insights";
export { buildPremiumPayslipInsights } from "@/src/lib/tools/payslip/insights/premium-payslip-insights";
