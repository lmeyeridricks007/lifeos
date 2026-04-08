import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { UTILITIES_SERVICES_DEFAULT_INPUT } from "./defaultInput";
import { estimateUtilitiesServices } from "./estimate";
import { utilitiesFixtures } from "./fixtures";

describe("estimateUtilitiesServices", () => {
  it("studio Amsterdam: positive energy and municipality; setup buckets sum to total", () => {
    const r = estimateUtilitiesServices(utilitiesFixtures.studioAmsterdam);
    assert.ok(r.monthlyTotals.allInEur > 0);
    const energy = r.serviceEstimates.find((e) => e.categoryId === "energy");
    assert.ok(energy && energy.monthlyEstimate > 0);
    const mun = r.serviceEstimates.find((e) => e.categoryId === "municipality");
    assert.ok(mun && mun.monthlyEstimate > 0);
    assert.equal(mun!.annualEstimate, Math.round(mun!.monthlyEstimate * 12 * 100) / 100);
    const sumBuckets =
      r.setupBuckets.installationActivationEur +
      r.setupBuckets.hardwareModemEur +
      r.setupBuckets.adminOverlapFrictionEur +
      r.setupBuckets.firstInvoiceTimingBufferEur +
      r.setupBuckets.movingConnectionFrictionEur;
    assert.equal(r.setupTotalEur, sumBuckets);
  });

  it("family house Utrecht: higher energy than studio default; energy retail-compare when lease is exclusive", () => {
    const studio = estimateUtilitiesServices(utilitiesFixtures.studioAmsterdam);
    const family = estimateUtilitiesServices(utilitiesFixtures.familyHouseUtrecht);
    assert.ok(family.monthlyTotals.allInEur > studio.monthlyTotals.allInEur);
    assert.ok(family.comparableServicesCount >= 1);
    const energy = family.serviceEstimates.find((e) => e.categoryId === "energy")!;
    assert.equal(energy.classification.classification, "actively_compare");
    assert.ok(energy.monthlyEstimate > 0);
  });

  it("shared housing utilities included: energy and water model to zero; classification may flag inclusion", () => {
    const r = estimateUtilitiesServices(utilitiesFixtures.sharedUtilitiesIncluded);
    const energy = r.serviceEstimates.find((e) => e.categoryId === "energy")!;
    const water = r.serviceEstimates.find((e) => e.categoryId === "water")!;
    assert.equal(energy.monthlyEstimate, 0);
    assert.equal(water.monthlyEstimate, 0);
    assert.equal(energy.classification.classification, "may_already_be_included");
  });

  it("older gas-heated home: energy exceeds average apartment baseline", () => {
    const base = estimateUtilitiesServices({
      ...UTILITIES_SERVICES_DEFAULT_INPUT,
      plannerMode: "detailed",
      energyQuality: "average",
      heating: "gas",
      housingType: "apartment",
      usageLevel: "average",
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
    });
    const old = estimateUtilitiesServices(utilitiesFixtures.olderGasHeatedHome);
    const eOld = old.serviceEstimates.find((e) => e.categoryId === "energy")!;
    assert.equal(eOld.classification.classification, "actively_compare");
    assert.ok(eOld.monthlyEstimate > base.serviceEstimates.find((e) => e.categoryId === "energy")!.monthlyEstimate);
  });

  it("remote worker fast internet: internet line higher than basic tier scenario", () => {
    const basic = estimateUtilitiesServices({
      ...UTILITIES_SERVICES_DEFAULT_INPUT,
      plannerMode: "detailed",
      internetTier: "basic",
      wfhHeavy: false,
      includeInternet: true,
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
    });
    const wfh = estimateUtilitiesServices(utilitiesFixtures.remoteWorkerFastInternet);
    const ib = basic.serviceEstimates.find((e) => e.categoryId === "internet")!.monthlyEstimate;
    const iw = wfh.serviceEstimates.find((e) => e.categoryId === "internet")!.monthlyEstimate;
    assert.ok(iw > ib);
    assert.ok(wfh.serviceEstimates.find((e) => e.categoryId === "internet")!.setupEstimate >= basic.serviceEstimates.find((e) => e.categoryId === "internet")!.setupEstimate);
    const eWfh = wfh.serviceEstimates.find((e) => e.categoryId === "energy")!;
    assert.equal(eWfh.classification.classification, "actively_compare");
  });

  it("optional home insurance toggles: monthly total moves only when lines enabled", () => {
    const off = estimateUtilitiesServices({
      ...UTILITIES_SERVICES_DEFAULT_INPUT,
      includeContentsInsurance: false,
      includeLiabilityInsurance: false,
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
    });
    const on = estimateUtilitiesServices({
      ...UTILITIES_SERVICES_DEFAULT_INPUT,
      includeContentsInsurance: true,
      includeLiabilityInsurance: true,
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
    });
    assert.ok(on.monthlyTotals.allInEur > off.monthlyTotals.allInEur);
    assert.equal(off.serviceEstimates.filter((e) => e.categoryId === "contents_insurance" || e.categoryId === "liability_insurance").every((e) => e.monthlyEstimate === 0), true);
    assert.ok(on.serviceEstimates.find((e) => e.categoryId === "contents_insurance")!.monthlyEstimate > 0);
  });

  it("default unsure utilities: energy hedged as lease-dependent (no contradictory retail-compare label)", () => {
    const r = estimateUtilitiesServices({
      ...UTILITIES_SERVICES_DEFAULT_INPUT,
      housingType: "apartment",
      householdType: "couple",
    });
    const energy = r.serviceEstimates.find((e) => e.categoryId === "energy")!;
    assert.equal(energy.classification.classification, "may_already_be_included");
  });

  it("owner vs renter: owner checklist includes meter handover coordination", () => {
    const renter = estimateUtilitiesServices({ ...utilitiesFixtures.ownerVsRenterBaseline, renterOrOwner: "renter" });
    const owner = estimateUtilitiesServices(utilitiesFixtures.ownerVsRenterBaseline);
    assert.equal(owner.householdProfile.renterOrOwner, "owner");
    assert.ok(owner.moveInChecklist.some((c) => c.id === "owner-meter"));
    assert.ok(!renter.moveInChecklist.some((c) => c.id === "owner-meter"));
    assert.ok(owner.setupBuckets.movingConnectionFrictionEur > 0);
  });

  it("checklist is deterministic and includes core ids", () => {
    const r = estimateUtilitiesServices(utilitiesFixtures.studioAmsterdam);
    const ids = r.moveInChecklist.map((c) => c.id);
    assert.ok(ids.includes("landlord-included"));
    assert.ok(ids.includes("meter-readings"));
    assert.ok(r.moveInChecklist.every((c) => c.sourceRule.length > 0));
  });

  it("quick vs detailed: energy line differs when detailed uses explicit average+gas vs quick uncertainty mix", () => {
    const common = {
      ...UTILITIES_SERVICES_DEFAULT_INPUT,
      utilitiesIncludedInRent: "no" as const,
      landlordBuildingIncludesServices: "no" as const,
      energyQuality: "average" as const,
      heating: "gas" as const,
      housingType: "apartment" as const,
      usageLevel: "average" as const,
    };
    const quick = estimateUtilitiesServices({ ...common, plannerMode: "quick" });
    const detailed = estimateUtilitiesServices({ ...common, plannerMode: "detailed" });
    const eQuick = quick.serviceEstimates.find((e) => e.categoryId === "energy")!.monthlyEstimate;
    const eDet = detailed.serviceEstimates.find((e) => e.categoryId === "energy")!.monthlyEstimate;
    assert.notEqual(eQuick, eDet);
  });
});
