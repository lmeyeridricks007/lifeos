import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { runDecoderPipeline } from "@/src/lib/tools/payslip/decoder/runDecoderPipeline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturePath = join(__dirname, "../../../../../test/fixtures/payslips/suitsupply-like.txt");

test("decoder v2: suitsupply-like fixture maps core Dutch payroll rows with period+YTD", () => {
  const text = readFileSync(fixturePath, "utf8");
  const dr = runDecoderPipeline({
    normalizedText: text,
    extractionQuality: "good",
    includeDiagnostics: false,
  });

  const keys = new Set(dr.fields.map((f) => f.key));
  assert.ok(keys.has("gross_salary"));
  assert.ok(keys.has("net_salary"));
  assert.ok(keys.has("wage_tax"));
  assert.ok(keys.has("pension_employee"));
  assert.ok(keys.has("holiday_allowance"));
  assert.ok(keys.has("holiday_allowance_base"));
  assert.ok(keys.has("ruling_correction_taxable"));
  assert.ok(keys.has("ruling_correction_special"));
  assert.ok(keys.has("tax_free_reimbursement"));
  assert.ok(keys.has("health_insurance_wage_base"));
  assert.ok(keys.has("taxable_wage_base"));
  assert.ok(keys.has("labour_credit"));
  assert.ok(keys.has("wga_deduction"));
  assert.ok(keys.has("social_fund"));

  assert.ok(dr.detectedSignals.includes("has_30_ruling_lines"));
  assert.ok(dr.detectedSignals.includes("has_ytd_columns"));

  const wageTax = dr.fields.find((f) => f.key === "wage_tax");
  assert.ok(wageTax?.periodAmount?.normalized && wageTax?.ytdAmount?.normalized);
  assert.equal(wageTax?.periodAmount?.normalized, 4915.48);
  assert.equal(wageTax?.ytdAmount?.normalized, 15412.72);

  const ruling = dr.fields.find((f) => f.key === "ruling_correction_taxable");
  assert.ok(ruling?.periodAmount?.normalized && ruling.periodAmount.normalized < 0);
});
