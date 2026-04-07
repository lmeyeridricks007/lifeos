/**
 * Free-tier insight layer: decode hints, summaries, parser warnings — no premium heuristics.
 */
import { buildDecodeHints, buildSummaryMessage } from "@/src/lib/tools/payslip/explain";
import type { PayslipInsightsPayload } from "@/src/lib/tools/payslip/pipeline/document-types";
import type { ExtractionQualityLevel, PayslipParseResult } from "@/src/lib/tools/payslip/types";

export function buildBasicPayslipInsights(params: {
  extractionQuality: ExtractionQualityLevel;
  parsed: PayslipParseResult;
}): PayslipInsightsPayload {
  const decodeHintsFull = buildDecodeHints(params.parsed);
  const summaryMessage = buildSummaryMessage(params.extractionQuality, params.parsed, decodeHintsFull);

  const hintsOut =
    decodeHintsFull.partialDecode ||
    decodeHintsFull.missingFields.length > 0 ||
    (params.parsed.ambiguousNetCandidates?.length ?? 0) > 0
      ? decodeHintsFull
      : undefined;

  const processingWarnings = [...(params.parsed.warnings ?? [])];

  return {
    decodeHints: hintsOut,
    summaryMessage,
    processingWarnings,
  };
}
