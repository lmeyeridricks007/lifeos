import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateDoubleTaxAwareness } from "./engine";
import { buildDoubleTaxAwarenessExportHtml } from "./exportHtml";
import { DEFAULT_DOUBLE_TAX_AWARENESS_INPUT, type IncomeType } from "./types";

test("export HTML renders key awareness sections", () => {
  const input = {
    ...DEFAULT_DOUBLE_TAX_AWARENESS_INPUT,
    incomeTypes: ["salary_dutch_employer", "rental_income_abroad"] as IncomeType[],
  };
  const result = calculateDoubleTaxAwareness(input);
  const html = buildDoubleTaxAwarenessExportHtml({
    siteName: "ExpatCopilot",
    generatedAtIso: "2026-04-07T12:00:00.000Z",
    calculatorCanonicalUrl: "https://www.expatcopilot.com/netherlands/taxes/tools/double-tax-awareness-tool/",
    disclaimer: "Planning view only.",
    input,
    result,
  });
  assert.ok(html.includes("Residency assessment"));
  assert.ok(html.includes("Income tax map"));
  assert.ok(html.includes("Action checklist"));
  assert.ok(html.includes("Records to keep"));
  assert.ok(html.includes("Will you likely pay tax twice?"));
  assert.ok(html.includes("What this likely means for you"));
  assert.ok(html.includes("What could change this outcome"));
  assert.ok(html.includes("When this tool may not be enough"));
  assert.ok(html.includes("What this means for you"));
});
