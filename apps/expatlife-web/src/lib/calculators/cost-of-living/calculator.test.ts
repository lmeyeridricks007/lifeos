import test from "node:test";
import assert from "node:assert/strict";
import { buildComparisonRows, computeCostOfLiving, DEFAULT_COL_INPUT } from "./calculator";
import type { ColInput } from "./types";

test("single Amsterdam balanced renter: positive totals and ordered salary targets", () => {
  const input: ColInput = {
    ...DEFAULT_COL_INPUT,
    city: "amsterdam",
    neighborhood: "outside",
    householdPreset: "single",
    housingMode: "apartment_1bed",
    lifestyle: "balanced",
    transportMode: "bike_pt",
    showSalaryTargets: true,
    rulingAssumption: "no",
  };
  const r = computeCostOfLiving(input);
  assert.ok(r.monthly.totalEur > 800);
  assert.ok(r.setup.totalEur > 500);
  assert.ok(r.firstMonthCashEur >= r.setup.totalEur + r.monthly.totalEur - 1);
  assert.ok(r.emergencyBufferEur > 0);
  assert.ok(r.salaryTargets);
  assert.ok(r.salaryTargets!.essentialNetMonthlyEur < r.salaryTargets!.balancedNetMonthlyEur);
  assert.ok(r.salaryTargets!.balancedNetMonthlyEur < r.salaryTargets!.comfortableNetMonthlyEur);
  assert.equal(r.recommendedNetSalaryMonthlyEur, r.salaryTargets!.balancedNetMonthlyEur);
});

test("couple Rotterdam outside center", () => {
  const input: ColInput = {
    ...DEFAULT_COL_INPUT,
    city: "rotterdam",
    neighborhood: "outside",
    householdPreset: "couple",
    housingMode: "apartment_2bed",
  };
  const r = computeCostOfLiving(input);
  assert.ok(r.monthly.totalEur > 2000);
  const rent = r.monthly.items.find((i) => i.id === "rent");
  assert.ok(rent && rent.amountEur > 1000);
});

test("family with childcare in The Hague", () => {
  const input: ColInput = {
    ...DEFAULT_COL_INPUT,
    city: "the-hague",
    householdPreset: "family2",
    childcareNeeded: true,
    childcareIntensity: "full_time",
    housingMode: "apartment_3bed_family",
  };
  const r = computeCostOfLiving(input);
  const cc = r.monthly.items.find((i) => i.id === "childcare");
  assert.ok(cc && cc.amountEur > 400);
});

test("childcare on with zero children in household uses one-child planning default", () => {
  const input: ColInput = {
    ...DEFAULT_COL_INPUT,
    city: "rotterdam",
    householdPreset: "couple",
    childrenCount: 0,
    childcareNeeded: true,
    childcareIntensity: "full_time",
    housingMode: "apartment_2bed",
  };
  const r = computeCostOfLiving(input);
  const cc = r.monthly.items.find((i) => i.id === "childcare");
  assert.ok(cc && cc.amountEur > 400, "childcare line should be non-zero when enabled");
  assert.ok(cc!.note?.includes("1 child"), "note should explain one-child default");
});

test("car owner includes higher transport", () => {
  const base = computeCostOfLiving({ ...DEFAULT_COL_INPUT, transportMode: "bike_pt" });
  const car = computeCostOfLiving({ ...DEFAULT_COL_INPUT, transportMode: "car", includeParking: true });
  const tBase = base.monthly.items.find((i) => i.id === "transport")!.amountEur;
  const tCar = car.monthly.items.find((i) => i.id === "transport")!.amountEur;
  assert.ok(tCar > tBase);
});

test("short-stay temporary housing increases rent vs long-term 1-bed", () => {
  const longTerm = computeCostOfLiving({
    ...DEFAULT_COL_INPUT,
    housingMode: "apartment_1bed",
    city: "utrecht",
  });
  const shortStay = computeCostOfLiving({
    ...DEFAULT_COL_INPUT,
    housingMode: "short_stay_serviced",
    city: "utrecht",
  });
  const r1 = longTerm.monthly.items.find((i) => i.id === "rent")!.amountEur;
  const r2 = shortStay.monthly.items.find((i) => i.id === "rent")!.amountEur;
  assert.ok(r2 > r1);
});

test("custom rent override is reflected in monthly and salary targets", () => {
  const model = computeCostOfLiving({
    ...DEFAULT_COL_INPUT,
    city: "amsterdam",
    rentInputMode: "model",
  });
  const manual = computeCostOfLiving({
    ...DEFAULT_COL_INPUT,
    city: "amsterdam",
    rentInputMode: "manual",
    manualRentEur: 2900,
  });
  const mr = manual.monthly.items.find((i) => i.id === "rent")!.amountEur;
  assert.equal(mr, 2900);
  assert.ok(manual.monthly.totalEur > model.monthly.totalEur);
  assert.ok(manual.recommendedNetSalaryMonthlyEur >= model.recommendedNetSalaryMonthlyEur);
});

test("30% ruling assumption lowers net targets vs none", () => {
  const none = computeCostOfLiving({ ...DEFAULT_COL_INPUT, rulingAssumption: "no", showSalaryTargets: true });
  const yes = computeCostOfLiving({ ...DEFAULT_COL_INPUT, rulingAssumption: "yes", showSalaryTargets: true });
  assert.ok(yes.salaryTargets!.balancedNetMonthlyEur < none.salaryTargets!.balancedNetMonthlyEur);
});

test("employer-paid relocation reduces travel setup and total setup vs self-paid", () => {
  const base = { ...DEFAULT_COL_INPUT, movingFrom: "us_canada" as const };
  const selfPaid = computeCostOfLiving({ ...base, employerRelocationSupport: "none" });
  const employerFull = computeCostOfLiving({ ...base, employerRelocationSupport: "full" });
  const partial = computeCostOfLiving({ ...base, employerRelocationSupport: "partial" });
  const tSelf = selfPaid.setup.items.find((i) => i.id === "travel")!.amountEur;
  const tFull = employerFull.setup.items.find((i) => i.id === "travel")!.amountEur;
  const tPartial = partial.setup.items.find((i) => i.id === "travel")!.amountEur;
  assert.equal(tFull, 0);
  assert.ok(tPartial > 0 && tPartial < tSelf);
  assert.ok(employerFull.setup.totalEur < selfPaid.setup.totalEur);
  assert.ok(partial.setup.totalEur < selfPaid.setup.totalEur);
});

test("compare mode produces multiple rows", () => {
  const input: ColInput = {
    ...DEFAULT_COL_INPUT,
    city: "amsterdam",
    householdPreset: "couple",
    childcareNeeded: true,
    childcareIntensity: "part_time",
    housingMode: "apartment_2bed",
    compareScenariosEnabled: true,
  };
  const rows = buildComparisonRows(input);
  assert.ok(rows.length >= 2);
  assert.equal(rows[0].label, "Your scenario");
  for (const row of rows) {
    assert.ok(row.result.monthly.totalEur > 0);
    assert.ok(row.result.setup.totalEur > 0);
  }
});
