import test from "node:test";
import assert from "node:assert/strict";
import { BALANCED_PRIORITIES } from "./defaults";
import { compareJobOffers } from "./engine";
import { fixtureTwoOffers } from "./fixtures";
import type { UserPriorities } from "./types";

function lensWinner(lenses: ReturnType<typeof compareJobOffers>["decisionLenses"], id: string) {
  return lenses.find((l) => l.id === id)!;
}

test("Amsterdam higher gross vs Rotterdam lower gross: higher salary leads take-home; Rotterdam has lower rent pressure", () => {
  const state = fixtureTwoOffers(
    {
      city: "Amsterdam",
      grossSalary: 85_000,
      salaryInputBasis: "annual",
      thirtyPercentSupport: "yes",
      workMode: "hybrid",
      commuteDaysPerWeek: 2,
      homeOrTargetCity: "Amsterdam",
      pensionEmployerDescription: "8% employer",
    },
    {
      city: "Rotterdam",
      grossSalary: 62_000,
      salaryInputBasis: "annual",
      thirtyPercentSupport: "yes",
      workMode: "hybrid",
      commuteDaysPerWeek: 2,
      homeOrTargetCity: "Rotterdam",
      pensionEmployerDescription: "8% employer",
    },
    { a: "Amsterdam offer", b: "Rotterdam offer" }
  );
  const r = compareJobOffers(state);
  const ams = r.activeOffers.find((o) => o.label === "Amsterdam offer")!;
  const rtd = r.activeOffers.find((o) => o.label === "Rotterdam offer")!;
  assert.ok(ams.netPayEstimate.estimatedNetMonthly > rtd.netPayEstimate.estimatedNetMonthly);
  assert.ok(ams.structuredScores.estimatedNetPay >= rtd.structuredScores.estimatedNetPay);
  const takeHome = lensWinner(r.decisionLenses, "best_take_home");
  assert.equal(takeHome.winnerLabel, "Amsterdam offer");
  assert.ok(rtd.affordabilitySummary.rentPressureMonthly < ams.affordabilitySummary.rentPressureMonthly);
});

test("Permanent vs fixed-term: permanent wins security lens", () => {
  const state = fixtureTwoOffers(
    {
      contractType: "fixed_term",
      fixedTermRenewalLikely: "no",
      grossSalary: 70_000,
      salaryInputBasis: "annual",
    },
    {
      contractType: "permanent",
      grossSalary: 70_000,
      salaryInputBasis: "annual",
    },
    { a: "Fixed", b: "Permanent" }
  );
  const r = compareJobOffers(state);
  const sec = lensWinner(r.decisionLenses, "best_security");
  assert.equal(sec.winnerLabel, "Permanent");
  assert.ok(r.activeOffers.find((o) => o.label === "Permanent")!.structuredScores.securityStability > 70);
});

test("30% ruling support yes vs no: supported offer has higher net score when gross is equal", () => {
  const state = fixtureTwoOffers(
    {
      grossSalary: 72_000,
      salaryInputBasis: "annual",
      thirtyPercentSupport: "yes",
    },
    {
      grossSalary: 72_000,
      salaryInputBasis: "annual",
      thirtyPercentSupport: "no",
    }
  );
  const r = compareJobOffers(state);
  const a = r.activeOffers.find((o) => o.slotId === "A")!;
  const b = r.activeOffers.find((o) => o.slotId === "B")!;
  assert.ok(a.netPayEstimate.estimatedNetMonthly > b.netPayEstimate.estimatedNetMonthly);
  assert.ok(a.structuredScores.estimatedNetPay >= b.structuredScores.estimatedNetPay);
});

test("Richer benefits vs higher salary: lower salary can win benefits lens", () => {
  const state = fixtureTwoOffers(
    {
      grossSalary: 90_000,
      salaryInputBasis: "annual",
      pensionEmployerDescription: "",
      travelAllowanceMonthly: 0,
      trainingBudgetAnnual: 0,
    },
    {
      grossSalary: 68_000,
      salaryInputBasis: "annual",
      pensionEmployerDescription: "Employer matches 10% on base",
      travelAllowanceMonthly: 200,
      trainingBudgetAnnual: 2_500,
      extraLeaveDays: 5,
      equipmentProvided: "yes",
    }
  );
  const r = compareJobOffers(state);
  const ben = lensWinner(r.decisionLenses, "best_benefits");
  assert.equal(ben.winnerSlot, "B");
});

test("Contract risk: non-compete and overtime bundle lowers contract quality score vs cleaner peer", () => {
  const state = fixtureTwoOffers(
    {
      grossSalary: 70_000,
      salaryInputBasis: "annual",
      nonCompetePresent: "yes",
      overtimeIncludedInSalary: "yes",
    },
    {
      grossSalary: 70_000,
      salaryInputBasis: "annual",
      nonCompetePresent: "no",
      overtimeIncludedInSalary: "no",
    }
  );
  const r = compareJobOffers(state);
  const a = r.activeOffers.find((o) => o.slotId === "A")!;
  const b = r.activeOffers.find((o) => o.slotId === "B")!;
  assert.ok(b.structuredScores.contractQuality > a.structuredScores.contractQuality);
});

test("Office-heavy vs remote: remote wins commute / lifestyle lens", () => {
  const state = fixtureTwoOffers(
    {
      workMode: "office",
      commuteDaysPerWeek: 5,
      commuteMode: "car",
    },
    {
      workMode: "remote",
      commuteDaysPerWeek: 0,
      commuteMode: "bike",
    }
  );
  const r = compareJobOffers(state);
  const life = lensWinner(r.decisionLenses, "best_commute_lifestyle");
  assert.equal(life.winnerSlot, "B");
});

test("Identical offers produce close-call closeness and tiny overall gap", () => {
  const base = {
    grossSalary: 70_000,
    salaryInputBasis: "annual" as const,
    city: "Utrecht",
    workMode: "hybrid" as const,
    commuteDaysPerWeek: 2,
    contractType: "permanent" as const,
    thirtyPercentSupport: "yes" as const,
    pensionEmployerDescription: "7% employer",
  };
  const state = fixtureTwoOffers(
    { ...base, employerName: "Co A" },
    { ...base, employerName: "Co B" }
  );
  const r = compareJobOffers(state);
  assert.ok(r.topRecommendation.closeness.isCloseCall);
  assert.ok(r.topRecommendation.closeness.overallScoreGap < 1.5);
  assert.ok(r.topRecommendation.closeness.refinementSuggestions.length > 0);
});

test("Money-led winner with weak expat vs strong expat runner surfaces moneyVsSecurityTension", () => {
  const highMoneyLowExpat = fixtureTwoOffers(
    {
      grossSalary: 95_000,
      salaryInputBasis: "annual",
      thirtyPercentSupport: "yes",
      visaSponsorship: "no",
      relocationSupport: "none",
      contractType: "permanent",
    },
    {
      grossSalary: 68_000,
      salaryInputBasis: "annual",
      thirtyPercentSupport: "yes",
      visaSponsorship: "yes",
      relocationSupport: "strong",
      taxFilingSupport: "yes",
      temporaryHousingSupport: "yes",
      movingBudget: "yes",
      contractType: "permanent",
    }
  );
  const priorities: UserPriorities = {
    ...BALANCED_PRIORITIES,
    highestNetPay: "high",
    bestTotalPackage: "high",
    visaExpatFriendliness: "low",
    stabilitySecurity: "low",
  };
  const r = compareJobOffers({ ...highMoneyLowExpat, priorities });
  assert.ok(r.topRecommendation.winnerSlot === "A");
  assert.ok(typeof r.topRecommendation.moneyVsSecurityTension === "string");
  assert.match(r.topRecommendation.moneyVsSecurityTension!, /expat/i);
});

test("Hidden costs include relocation clawback when flagged", () => {
  const state = fixtureTwoOffers(
    { relocationRepayment: "yes", grossSalary: 70_000, salaryInputBasis: "annual" },
    { relocationRepayment: "no", grossSalary: 70_000, salaryInputBasis: "annual" }
  );
  const r = compareJobOffers(state);
  const a = r.activeOffers.find((o) => o.slotId === "A")!;
  assert.ok(a.hiddenCosts.items.some((i) => i.id === "relocation-clawback"));
});

test("Current vs new mode: engine compares two offers when labels match UI (Current job / New offer)", () => {
  const base = fixtureTwoOffers(
    { grossSalary: 65_000, salaryInputBasis: "annual" },
    { grossSalary: 72_000, salaryInputBasis: "annual" },
    { a: "Current job", b: "New offer" }
  );
  const state = { ...base, mode: "current_vs_new" as const };
  const r = compareJobOffers(state);
  assert.equal(r.activeOffers.length, 2);
  const takeHome = lensWinner(r.decisionLenses, "best_take_home");
  assert.equal(takeHome.winnerLabel, "New offer");
});

test("Weak expat inputs vs strong expat: expat support lens favours stronger package at equal gross", () => {
  const state = fixtureTwoOffers(
    {
      grossSalary: 70_000,
      salaryInputBasis: "annual",
      thirtyPercentSupport: "not_mentioned",
      visaSponsorship: "not_sure",
      relocationSupport: "none",
      taxFilingSupport: "no",
    },
    {
      grossSalary: 70_000,
      salaryInputBasis: "annual",
      thirtyPercentSupport: "yes",
      visaSponsorship: "yes",
      relocationSupport: "strong",
      taxFilingSupport: "yes",
      temporaryHousingSupport: "yes",
      movingBudget: "yes",
    },
    { a: "Weak expat signals", b: "Strong expat package" }
  );
  const r = compareJobOffers(state);
  const exp = lensWinner(r.decisionLenses, "best_expat_support");
  assert.equal(exp.winnerLabel, "Strong expat package");
  assert.ok(
    r.activeOffers.find((o) => o.label === "Strong expat package")!.structuredScores.expatSupport >
      r.activeOffers.find((o) => o.label === "Weak expat signals")!.structuredScores.expatSupport + 15
  );
});

test("Recommendation copy stays planning-oriented (no absolute 'best' phrasing in lead)", () => {
  const state = fixtureTwoOffers(
    { grossSalary: 80_000, salaryInputBasis: "annual", pensionEmployerDescription: "8% employer" },
    { grossSalary: 55_000, salaryInputBasis: "annual" }
  );
  const r = compareJobOffers(state);
  assert.match(r.topRecommendation.plainEnglishLead, /ranks highest|Close call|Add another offer/i);
  assert.ok(r.topRecommendation.whyItWon.every((w) => !/Stronger on\b/i.test(w)));
});
