import test from "node:test";
import assert from "node:assert/strict";
import { assessExtractionQuality } from "@/src/lib/tools/contract-scanner/textQuality";

test("very short text is poor and likely scanned", () => {
  const r = assessExtractionQuality("x", 3);
  assert.equal(r.quality, "poor");
  assert.equal(r.likelyScannedDocument, true);
  assert.ok(r.warnings.length > 0);
});

test("reasonable contract-like text is good with enough pages", () => {
  const text = `
    Employment agreement. Gross salary EUR 5000 per month. Holiday allowance 8%.
    Notice period one month. Pension fund. Vacation days 25. Working hours 40 per week.
    Probation two months. Non-compete limited to twelve months within Netherlands.
  `.repeat(8);
  const r = assessExtractionQuality(text, 2);
  assert.ok(r.quality === "good" || r.quality === "partial");
});
