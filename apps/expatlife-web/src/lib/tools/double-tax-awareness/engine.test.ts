import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateDoubleTaxAwareness } from "./engine";
import { DEFAULT_DOUBLE_TAX_AWARENESS_INPUT } from "./types";

test("simple Dutch employee case stays low/medium risk and Dutch residency leaning", () => {
  const result = calculateDoubleTaxAwareness({
    ...DEFAULT_DOUBLE_TAX_AWARENESS_INPUT,
    incomeTypes: ["salary_dutch_employer"],
  });
  assert.equal(result.residencyAssessment.key, "likely_dutch_resident");
  assert.notEqual(result.doubleTaxRiskLevel, "high");
});

test("Dutch resident with foreign rental income shows medium+ double-tax risk", () => {
  const result = calculateDoubleTaxAwareness({
    ...DEFAULT_DOUBLE_TAX_AWARENESS_INPUT,
    incomeTypes: ["salary_dutch_employer", "rental_income_abroad"],
    rentalIncomeCountryCode: "ES",
  });
  assert.ok(["medium", "high"].includes(result.doubleTaxRiskLevel));
  assert.ok(result.taxMapByIncomeType.some((row) => row.incomeType === "rental_income_abroad"));
});

test("foreign employer with work in Netherlands can elevate risk", () => {
  const result = calculateDoubleTaxAwareness({
    ...DEFAULT_DOUBLE_TAX_AWARENESS_INPUT,
    employerInNl: "no",
    payrollInNl: "no",
    mainWorkPhysicallyInNl: "yes",
    incomeTypes: ["salary_foreign_employer"],
  });
  assert.equal(result.doubleTaxRiskLevel, "high");
});

test("dual-home mixed-country case triggers dual residency risk", () => {
  const result = calculateDoubleTaxAwareness({
    ...DEFAULT_DOUBLE_TAX_AWARENESS_INPUT,
    permanentHomeNl: "yes",
    permanentHomeAbroad: "yes",
    monthsInNetherlands: 6,
    monthsInOtherMainCountry: 6,
    incomeTypes: ["salary_dutch_employer", "salary_foreign_employer"],
  });
  assert.equal(result.residencyAssessment.key, "possible_dual_residency");
  assert.equal(result.dualResidencyRisk, "high");
});

test("freelancer with foreign clients is treated as complex", () => {
  const result = calculateDoubleTaxAwareness({
    ...DEFAULT_DOUBLE_TAX_AWARENESS_INPUT,
    incomeTypes: ["freelance_self_employed", "foreign_business_income"],
    workLocationPattern: "mixed",
  });
  assert.equal(result.filingComplexity, "complex");
  assert.ok(result.escalationFlags.some((flag) => flag.toLowerCase().includes("self-employment")));
});

test("30% ruling does not remove foreign complexity", () => {
  const result = calculateDoubleTaxAwareness({
    ...DEFAULT_DOUBLE_TAX_AWARENESS_INPUT,
    thirtyPercentRuling: "yes",
    incomeTypes: ["salary_dutch_employer", "dividends_investments"],
  });
  assert.ok(result.reliefMethodLikely.some((method) => method.whyLikely.toLowerCase().includes("30% ruling")));
  const asText = JSON.stringify(result).toLowerCase();
  assert.equal(asText.includes("definitely"), false);
  assert.equal(asText.includes("guaranteed"), false);
});
