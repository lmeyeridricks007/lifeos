/**
 * Public entry: maps legacy route inputs (paste vs PDF text) into the layered pipeline.
 * PDF bytes are extracted in the route; OCR stays behind `ocr/OcrProvider` (disabled in v1).
 *
 * When OCR ships, prefer producing **final** `extractedText` in the route (or a pre-pipeline helper) and passing
 * `documentSource` / `extractionMethod` that reflect OCR — this module stays a thin mapper. See
 * docs/tools/payslip-decoder-future-ocr.md.
 *
 * `entitlements` (4th arg) flows from `getPayslipEntitlementsFromRequest` in the API route; defaults to anonymous free tier.
 */
import { getPayslipEntitlements, type PayslipEntitlements } from "@/lib/entitlements/payslip-entitlements";
import { processPayslipDocument, toPayslipDecodeResponse } from "@/src/lib/tools/payslip/pipeline/process-payslip-document";
import type { PayslipDecodeResponse, PayslipInputSource } from "@/src/lib/tools/payslip/types";

export function buildPayslipDecodeResponse(
  extractedText: string,
  inputSource: PayslipInputSource,
  sanitizedFileName?: string,
  entitlements: PayslipEntitlements = getPayslipEntitlements()
): PayslipDecodeResponse {
  const documentSource = inputSource === "pdf" ? "pdf_text" : "pasted_text";
  const extractionMethod = inputSource === "pdf" ? "pdf_text" : "none";

  const internal = processPayslipDocument({
    rawText: extractedText,
    documentSource,
    extractionMethod,
    sanitizedFileName,
    entitlements,
  });

  return toPayslipDecodeResponse(internal, inputSource, entitlements);
}
