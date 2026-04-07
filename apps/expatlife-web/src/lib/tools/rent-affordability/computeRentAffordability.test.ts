import assert from "node:assert/strict";
import { test } from "node:test";
import { computeRentAffordability } from "./computeRentAffordability";
import { mergeRaInputs } from "./defaultInputs";

test("computeRentAffordability returns ordered rent bands and positive non-rent for Amsterdam single", () => {
  const input = mergeRaInputs({
    toolMode: "max_rent",
    incomeBasis: "gross",
    monthlyGross: 6000,
    city: "amsterdam",
    householdPreset: "single",
    rentMode: "model",
    lifestyle: "balanced",
    landlordRuleMultiplier: 3.5,
  });
  const r = computeRentAffordability(input);
  assert.ok(r);
  assert.ok(r!.maxRent.comfortableEur <= r!.maxRent.essentialEur);
  assert.ok(r!.maxRent.essentialEur <= r!.maxRent.balancedEur);
  assert.ok(r!.maxRent.balancedEur <= r!.maxRent.stretchEur);
  assert.ok(r!.nonRent.totalEur > 400);
  assert.ok(r!.landlordChecks.length === 3);
});

test("salary_for_rent mode produces reverse block when target rent set", () => {
  const input = mergeRaInputs({
    toolMode: "salary_for_rent",
    incomeBasis: "net",
    monthlyNet: 0,
    rentMode: "target",
    targetRentEur: 1800,
    landlordRuleMultiplier: 3.5,
  });
  const r = computeRentAffordability(input);
  assert.ok(r);
  assert.ok(r!.reverse);
  assert.ok(r!.reverse!.requiredGrossMonthlyEur >= r!.reverse!.landlordFloorGrossMonthlyEur - 1);
});
