/**
 * Parsing layer: deterministic line-by-line payslip decode (decoder v2 + legacy adapter).
 */
import { runDecoderPipeline } from "@/src/lib/tools/payslip/decoder/runDecoderPipeline";
import { toLegacyParseResult } from "@/src/lib/tools/payslip/decoder/toLegacyParseResult";
import type { ParseDiagnostics, PayslipParseResult } from "@/src/lib/tools/payslip/types";
import type { ExtractionQualityLevel } from "@/src/lib/tools/payslip/types";

export type ParseLayerOptions = {
  includeDiagnostics: boolean;
  extractionQuality: ExtractionQualityLevel;
};

export function parsePayslipFromNormalized(
  normalizedText: string,
  options: ParseLayerOptions
): { result: PayslipParseResult; diagnostics?: ParseDiagnostics; decoderResult: ReturnType<typeof runDecoderPipeline> } {
  const decoderResult = runDecoderPipeline({
    normalizedText,
    extractionQuality: options.extractionQuality,
    includeDiagnostics: options.includeDiagnostics,
  });
  const result = toLegacyParseResult(decoderResult);

  let diagnostics: ParseDiagnostics | undefined;
  if (options.includeDiagnostics && decoderResult.parserDiagnostics) {
    diagnostics = {
      matchedRules: decoderResult.parserDiagnostics.aliasHits.map((h, i) => ({
        rule: `alias:${h.alias}`,
        lineIndex: i,
        field: h.key,
      })),
      rejectedCandidates: [],
      qualityExplanation: [],
      decoderDiagnostics: decoderResult.parserDiagnostics,
    };
  }

  return { result, diagnostics, decoderResult };
}

/** Narrow export for callers that only need the public parse shape. */
export function parsePayslipText(normalizedText: string, extractionQuality: ExtractionQualityLevel = "good"): PayslipParseResult {
  return parsePayslipFromNormalized(normalizedText, { includeDiagnostics: false, extractionQuality }).result;
}
