import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { runDecoderPipeline } from "@/src/lib/tools/payslip/decoder/runDecoderPipeline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturesDir = join(__dirname, "../../../../../test/fixtures/payslips");

function load(name: string) {
  return readFileSync(join(fixturesDir, name), "utf8");
}

test("fixture: complex Dutch multi-column rows (TB/TBB, pension, 30% corrections)", () => {
  const dr = runDecoderPipeline({
    normalizedText: load("complex-dutch-columns.txt"),
    extractionQuality: "good",
    includeDiagnostics: true,
  });
  const keys = new Set(dr.fields.map((f) => f.key));
  assert.ok(keys.has("gross_salary"));
  assert.ok(keys.has("wage_tax"));
  assert.ok(keys.has("wage_tax_tb"));
  assert.ok(keys.has("wage_tax_tbb"));
  assert.ok(keys.has("pension_employee"));
  assert.ok(keys.has("pension_taxable_base"));
  assert.ok(keys.has("holiday_allowance"));
  assert.ok(keys.has("ruling_correction_taxable"));
  assert.ok(keys.has("ruling_correction_special"));
  assert.ok(keys.has("days_worked"));

  const tbb = dr.fields.find((f) => f.key === "wage_tax_tbb");
  assert.ok(tbb?.ratePercent != null && tbb.ratePercent > 40 && tbb.ratePercent < 60);

  const gross = dr.fields.find((f) => f.key === "gross_salary");
  assert.equal(gross?.periodAmount?.normalized, 12731.5);
  assert.equal(gross?.ytdAmount?.normalized, 50926);

  const corr = dr.fields.find((f) => f.key === "ruling_correction_taxable");
  assert.ok(corr?.ytdAmount?.normalized != null && corr.ytdAmount.normalized < 0);
});

test("fixture: English payroll export", () => {
  const dr = runDecoderPipeline({
    normalizedText: load("english-payroll-export.txt"),
    extractionQuality: "good",
    includeDiagnostics: false,
  });
  const keys = new Set(dr.fields.map((f) => f.key));
  assert.ok(keys.has("gross_salary"));
  assert.ok(keys.has("wage_tax"));
  assert.ok(keys.has("pension_employee"));
  assert.ok(keys.has("holiday_allowance"));
  assert.ok(keys.has("taxable_wage_base"));
  assert.ok(keys.has("health_insurance_wage_base"));
  assert.ok(keys.has("net_salary"));
  assert.ok(keys.has("ruling_correction_taxable"));
  assert.ok(keys.has("tax_free_reimbursement"));
  assert.ok(dr.detectedSignals.includes("has_english_labels"));
});

test("fixture: mixed bilingual row", () => {
  const dr = runDecoderPipeline({
    normalizedText: load("mixed-bilingual.txt"),
    extractionQuality: "good",
    includeDiagnostics: false,
  });
  const keys = new Set(dr.fields.map((f) => f.key));
  assert.ok(keys.has("gross_salary"));
  assert.ok(keys.has("wage_tax"));
  assert.ok(keys.has("net_salary"));
  assert.ok(keys.has("holiday_allowance"));
});

test("fixture: hourly / 4-week style", () => {
  const dr = runDecoderPipeline({
    normalizedText: load("hourly-4week.txt"),
    extractionQuality: "good",
    includeDiagnostics: false,
  });
  const keys = new Set(dr.fields.map((f) => f.key));
  assert.ok(keys.has("hourly_wage"));
  assert.ok(keys.has("hours_worked"));
  assert.ok(keys.has("gross_salary") || keys.has("payments_total"));
  assert.ok(keys.has("wage_tax"));
  assert.ok(keys.has("net_salary"));
  assert.ok(dr.detectedSignals.includes("has_hourly_or_time_rows"));
});

test("fixture: abbreviated noisy labels", () => {
  const dr = runDecoderPipeline({
    normalizedText: load("abbrev-noisy.txt"),
    extractionQuality: "good",
    includeDiagnostics: false,
  });
  const keys = new Set(dr.fields.map((f) => f.key));
  assert.ok(keys.has("gross_salary"));
  assert.ok(keys.has("wage_tax"));
  assert.ok(keys.has("pension_employee"));
  assert.ok(keys.has("holiday_allowance"));
  assert.ok(keys.has("deductions_total"));
  assert.ok(keys.has("payments_total"));
});

test("fixture: duplicate totals row coexists with detail lines", () => {
  const dr = runDecoderPipeline({
    normalizedText: load("duplicate-totals.txt"),
    extractionQuality: "good",
    includeDiagnostics: false,
  });
  const keys = new Set(dr.fields.map((f) => f.key));
  assert.ok(keys.has("gross_salary"));
  assert.ok(keys.has("payments_total"));
  assert.ok(keys.has("deductions_total"));
  assert.ok(keys.has("net_salary"));
});
