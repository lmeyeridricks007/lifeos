import test from "node:test";
import assert from "node:assert/strict";
import { computeLikelyScannedDocument } from "@/src/lib/tools/payslip/pipeline/scanned-detection";
import { assessExtractionQuality } from "@/src/lib/tools/payslip/quality";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { normalizeExtractedText } from "@/src/lib/tools/payslip/pipeline/normalize";

const fixturesDir = join(process.cwd(), "test/fixtures/payslips");

function load(name: string): string {
  return readFileSync(join(fixturesDir, name), "utf8");
}

test("paste path never marks likely scanned", () => {
  const q = assessExtractionQuality(normalizeExtractedText(load("monthly-simple.txt")));
  assert.equal(
    computeLikelyScannedDocument({
      documentSource: "pasted_text",
      extractionMethod: "none",
      quality: q,
    }),
    false
  );
});

test("text-based PDF fixture is not likely scanned", () => {
  const normalized = normalizeExtractedText(load("monthly-simple.txt"));
  const q = assessExtractionQuality(normalized);
  assert.notEqual(q.level, "poor", "fixture should be decodable text, not empty garbage");
  assert.equal(
    computeLikelyScannedDocument({
      documentSource: "pdf_text",
      extractionMethod: "pdf_text",
      quality: q,
    }),
    false
  );
});

test("sparse extracted PDF text is likely scanned", () => {
  const normalized = normalizeExtractedText("x\ny\nz");
  const q = assessExtractionQuality(normalized);
  assert.equal(
    computeLikelyScannedDocument({
      documentSource: "pdf_text",
      extractionMethod: "pdf_text",
      quality: q,
    }),
    true
  );
});
