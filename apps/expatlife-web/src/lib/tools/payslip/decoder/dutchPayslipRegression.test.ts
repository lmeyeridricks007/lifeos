import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { runDecoderPipeline } from "@/src/lib/tools/payslip/decoder/runDecoderPipeline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const regressionText = readFileSync(join(__dirname, "../../../../../test/fixtures/payslips/dutch-payslip-regression.txt"), "utf8");

const REQUIRED_HIGH: Array<{ key: string; minConf?: "high" | "medium" }> = [
  { key: "gross_salary" },
  { key: "net_salary" },
  { key: "wage_tax" },
  { key: "wage_tax_tb" },
  { key: "wage_tax_tbb" },
  { key: "holiday_allowance" },
  { key: "pension_employee" },
  { key: "pension_taxable_base" },
  { key: "ruling_correction_taxable" },
  { key: "ruling_correction_special" },
  { key: "tax_free_reimbursement" },
  { key: "health_insurance_wage_base" },
  { key: "taxable_wage_base" },
  { key: "labour_credit" },
  { key: "wga_deduction" },
  { key: "social_fund" },
  { key: "days_worked" },
  { key: "payments_total" },
  { key: "deductions_total" },
];

test("regression: Dutch payslip sample — fields, confidence, totals, no false English signal", () => {
  const dr = runDecoderPipeline({
    normalizedText: regressionText,
    extractionQuality: "good",
    includeDiagnostics: true,
  });

  for (const { key, minConf = "high" } of REQUIRED_HIGH) {
    const f = dr.fields.find((x) => x.key === key);
    assert.ok(f, `missing field ${key}`);
    if (minConf === "high") {
      assert.equal(f!.confidence, "high", `expected high confidence for ${key}, got ${f!.confidence}`);
    }
  }

  const net = dr.fields.find((x) => x.key === "net_salary");
  assert.equal(net?.periodAmount?.normalized, 11613.39);
  assert.equal(net?.ytdAmount, undefined);

  const tbb = dr.fields.find((x) => x.key === "wage_tax_tbb");
  assert.equal(tbb?.ratePercent, 49.5);

  const gross = dr.fields.find((x) => x.key === "gross_salary");
  assert.equal(gross?.periodAmount?.normalized, 12731.5);
  assert.equal(gross?.ytdAmount?.normalized, 50926);

  const payTot = dr.fields.find((x) => x.key === "payments_total");
  assert.equal(payTot?.periodAmount?.normalized, 16805.58);
  assert.equal(payTot?.ytdAmount?.normalized, 67422.32);

  const dedTot = dr.fields.find((x) => x.key === "deductions_total");
  assert.equal(dedTot?.periodAmount?.normalized, 5192.19);
  assert.equal(dedTot?.ytdAmount?.normalized, 20768.76);

  assert.ok(!dr.detectedSignals.includes("has_english_labels"), "Dutch-only slip should not flag English labels");

  const unresolvedMoney = dr.unresolvedLines.filter((u) => u.rawLine.match(/\d+[.,]\d{2}/));
  assert.equal(unresolvedMoney.length, 0, `unexpected unresolved money lines: ${unresolvedMoney.map((u) => u.rawLine).join("; ")}`);

  assert.ok(dr.fields.some((f) => f.key === "period_label"));
  assert.equal(
    dr.unresolvedLines.filter((u) => /ytd|cumulative/i.test(u.rawLine)).length,
    0,
    "YTD header line should be consumed"
  );
});
