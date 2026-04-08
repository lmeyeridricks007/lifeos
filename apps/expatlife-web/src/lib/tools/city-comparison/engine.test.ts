import test from "node:test";
import assert from "node:assert/strict";
import { computeCityComparison, sanitizeCityComparisonInput } from "./engine";
import { DEFAULT_CITY_COMPARISON_INPUT } from "./types";

test("computeCityComparison returns ranked rows for default four cities", () => {
  const input = sanitizeCityComparisonInput(DEFAULT_CITY_COMPARISON_INPUT);
  const result = computeCityComparison(input);
  assert.equal(result.ranking.length, 4);
  assert.ok(result.bestMatch);
  assert.ok(result.planningFitConfidence.length > 5);
  assert.ok(result.ranking[0]!.overallScore >= result.ranking[3]!.overallScore);
});

test("remote work lowers commute influence but still returns rows", () => {
  const input = sanitizeCityComparisonInput({
    ...DEFAULT_CITY_COMPARISON_INPUT,
    workMode: "remote",
    selectedCities: ["amsterdam", "groningen"],
  });
  const result = computeCityComparison(input);
  assert.equal(result.ranking.length, 2);
  assert.ok(result.ranking.every((r) => r.dimensions.commute > 50));
});
