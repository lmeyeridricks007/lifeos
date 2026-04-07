import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { processPayslipDocument, toPayslipDecodeResponse } from "@/src/lib/tools/payslip/pipeline/process-payslip-document";
import { payslipDecodeResponseSchema } from "@/src/lib/tools/payslip/schema";

const fixturesDir = join(process.cwd(), "test/fixtures/payslips");

function load(name: string): string {
  return readFileSync(join(fixturesDir, name), "utf8");
}

test("paste-text path: structured sources and flow state", () => {
  const doc = processPayslipDocument({
    rawText: load("monthly-simple.txt"),
    documentSource: "pasted_text",
    extractionMethod: "none",
  });
  assert.equal(doc.transientDocument.sourceType, "pasted_text");
  assert.equal(doc.transientDocument.extractionMethod, "none");
  assert.equal(doc.flowState, "paste");
  assert.equal(doc.extraction.likelyScannedDocument, false);
  assert.ok(doc.transientDocument.normalizedText.length > 50);

  const api = toPayslipDecodeResponse(doc, "text");
  assert.equal(api.inputSource, "text");
  assert.equal(api.documentSource, "pasted_text");
  assert.equal(api.extractionMethod, "none");
  assert.equal(api.processingFlowState, "paste");
  assert.equal(api.decodeCapabilities.ocrFromPdf, false);
  assert.equal(api.scannedPdfHints.scannedLikely, false);
  assert.equal(api.scannedPdfHints.ocrRecommended, false);
  assert.equal(api.premiumInsights.enabled, false);
  assert.ok(api.decoderUiStates.includes("image_upload_disabled"));
  assert.ok(api.decoderUiStates.includes("premium_insights_disabled"));
  const validated = payslipDecodeResponseSchema.safeParse(api);
  assert.equal(validated.success, true);
});

test("text-based PDF path: pdf_text_ok and response validates", () => {
  const doc = processPayslipDocument({
    rawText: load("monthly-simple.txt"),
    documentSource: "pdf_text",
    extractionMethod: "pdf_text",
    sanitizedFileName: "stub.pdf",
  });
  assert.equal(doc.flowState, "pdf_text_ok");
  assert.equal(doc.extraction.likelyScannedDocument, false);

  const api = toPayslipDecodeResponse(doc, "pdf");
  assert.equal(api.inputSource, "pdf");
  assert.equal(api.documentSource, "pdf_text");
  assert.equal(api.extractionMethod, "pdf_text");
  assert.equal(api.sanitizedFileName, "stub.pdf");
  assert.equal(payslipDecodeResponseSchema.safeParse(api).success, true);
  assert.ok(api.decoderUiStates.includes("text_pdf_supported"));
});

test("scanned-like PDF text: pdf_likely_scanned and scanned hint", () => {
  const doc = processPayslipDocument({
    rawText: "abc\n",
    documentSource: "pdf_text",
    extractionMethod: "pdf_text",
  });
  assert.equal(doc.flowState, "pdf_likely_scanned");
  assert.equal(doc.extraction.likelyScannedDocument, true);
  assert.ok(
    doc.extraction.extractionWarnings.some((w) => /scanned|image-only|image-based|text-based PDFs/i.test(w)),
    "user should see either the scanned-PDF hint or an equivalent extraction warning"
  );

  const api = toPayslipDecodeResponse(doc, "pdf");
  assert.equal(api.processingFlowState, "pdf_likely_scanned");
  assert.equal(api.likelyScannedDocument, true);
  assert.equal(api.scannedPdfHints.scannedLikely, true);
  assert.equal(api.scannedPdfHints.ocrRecommended, true);
  assert.equal(api.scannedPdfHints.ocrAvailable, false);
  assert.ok(api.decoderUiStates.includes("scanned_pdf_requires_ocr"));
  assert.equal(payslipDecodeResponseSchema.safeParse(api).success, true);
});
