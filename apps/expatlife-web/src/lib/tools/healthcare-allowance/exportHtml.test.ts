import { describe, expect, it } from "vitest";
import { buildHealthcareAllowanceExportHtml, HA_EXPORT_DISCLAIMER_DEFAULT } from "./exportHtml";
import { computeHealthcareAllowance } from "./computeHealthcareAllowance";
import { mergeHealthcareAllowanceInputs } from "./defaultInputs";

describe("buildHealthcareAllowanceExportHtml", () => {
  it("includes inputs, summary table, risks, repayment, disclaimer, and plain English when provided", () => {
    const inputs = mergeHealthcareAllowanceInputs({
      annualIncomeYou: 25_000,
      incomeEntryMode: "annual",
      premiumMode: "manual",
      monthlyPremiumManual: 150,
    });
    const result = computeHealthcareAllowance(inputs);
    const plainEnglishSummaryLines = ["Planning bullet one for export test.", "Planning bullet two <safe>."];
    const html = buildHealthcareAllowanceExportHtml({
      siteName: "ExpatCopilot",
      generatedAtIso: "2026-04-08T12:00:00.000Z",
      disclaimer: HA_EXPORT_DISCLAIMER_DEFAULT,
      calculatorCanonicalUrl: "https://example.com/netherlands/taxes/tools/healthcare-allowance-estimator/",
      inputs,
      result,
      plainEnglishSummaryLines,
    });

    expect(html).toContain("Tax year:");
    expect(html).toContain("Premium mode: manual");
    expect(html).toContain("Summary");
    expect(html).toContain("Eligibility notes");
    expect(html).toContain("What this likely means for you");
    expect(html).toContain("Planning bullet one for export test.");
    expect(html).toContain("Planning bullet two &lt;safe&gt;.");
    expect(html).toContain("Recommendation summary");
    expect(html).toContain("Repayment &amp; adjustment risks");
    expect(html).toContain("Risk flags");
    expect(html).toContain("What to do next");
    expect(html).toContain(HA_EXPORT_DISCLAIMER_DEFAULT.slice(0, 40));
    expect(html).toContain("@media print");
  });
});
