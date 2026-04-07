import test from "node:test";
import assert from "node:assert/strict";
import { DisabledPayslipOcrProvider, getPayslipOcrProvider } from "@/src/lib/tools/payslip/ocr/OcrProvider";

test("free tier: OCR provider disabled and not callable", async () => {
  const p = getPayslipOcrProvider();
  assert.equal(p.isEnabled(), false);
  await assert.rejects(
    () => p.extractTextFromImageOrScannedPdf({ buffer: Buffer.from("%PDF-1.4"), mimeType: "application/pdf" }),
    /PAYSLIP_OCR_DISABLED/
  );
});

test("DisabledPayslipOcrProvider is stable stub", () => {
  const d = new DisabledPayslipOcrProvider();
  assert.equal(d.id, "disabled");
  assert.equal(d.isEnabled(), false);
});
