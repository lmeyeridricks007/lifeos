import test from "node:test";
import assert from "node:assert/strict";
import { DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT, sanitizeEmploymentTypeScenarioInput } from "./defaults";
import { calculateEmploymentTypeScenario, activeScenarioIds } from "./engine";
import {
  fixtureContractorWithAdmin,
  fixtureFixedTermEmployee,
  fixtureForeignRemote,
  fixtureHighIncomeConsultant,
  fixtureVisaSensitiveExpat,
  fixtureZzpWithDowntime,
} from "./fixtures";
import { generateEmploymentQuestions, questionTexts } from "./questions";
import { hasIncomeVolatilityFlag } from "./riskHighlights";
import { normalizePrioritySliders } from "./priorityWeights";

test("recommend mode includes four core scenarios by default", () => {
  const input = sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    includeForeignRemoteScenario: false,
  });
  assert.deepEqual(activeScenarioIds(input), [
    "permanent_employee",
    "fixed_term_employee",
    "contractor",
    "zzp_self_employed",
  ]);
});

test("recommend mode can add foreign remote when enabled", () => {
  const input = sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    includeForeignRemoteScenario: true,
  });
  assert.ok(activeScenarioIds(input).includes("foreign_remote_employee"));
});

test("compare_two mode restricts to two scenarios", () => {
  const input = sanitizeEmploymentTypeScenarioInput({
    ...DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT,
    toolMode: "compare_two",
    compareScenarioA: "permanent_employee",
    compareScenarioB: "zzp_self_employed",
  });
  assert.deepEqual(activeScenarioIds(input), ["permanent_employee", "zzp_self_employed"]);
});

test("calculateEmploymentTypeScenario returns ranked scenarios and best fit", () => {
  const input = sanitizeEmploymentTypeScenarioInput(DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT);
  const r = calculateEmploymentTypeScenario(input);
  assert.ok(r.scenarios.length >= 4);
  assert.ok(r.bestFitId);
  assert.ok(r.rankedIds[0] === r.bestFitId);
  assert.ok(r.summary.plainEnglish.length > 20);
  assert.ok(r.summary.bestFitLabel.length > 5);
  assert.ok(r.summary.tradeOffLabel.length > 10);
  assert.ok(r.priorityWeightingDocumentation.includes("Overall fit"));
  assert.equal(r.insights.decisionLenses.length, 6);
  assert.ok(r.insights.narrative.personalizedLead.length > 40);
  assert.ok(r.insights.negativeFitByScenario.permanent_employee?.length);
  for (const s of r.scenarios) {
    assert.ok(s.scores.overall >= 0 && s.scores.overall <= 100);
    assert.ok(s.money.estimatedNetAnnual >= 0);
    assert.ok(Array.isArray(s.money.formulaNotes));
    assert.ok(s.scoringExplanation.overall.formulaSummary.includes("overall"));
    assert.ok(s.riskHighlights.every((h) => typeof h.message === "string" && h.id));
  }
});

test("visa-sensitive fixture: permanent beats ZZP on expat practicality score", () => {
  const r = calculateEmploymentTypeScenario(fixtureVisaSensitiveExpat());
  const perm = r.scenarios.find((s) => s.scenarioId === "permanent_employee")!;
  const zzp = r.scenarios.find((s) => s.scenarioId === "zzp_self_employed")!;
  assert.ok(perm.scores.immigrationFit > zzp.scores.immigrationFit);
});

test("fixed-term vs permanent compare_two returns exactly two scenarios with explanations", () => {
  const r = calculateEmploymentTypeScenario(fixtureFixedTermEmployee());
  assert.equal(r.scenarios.length, 2);
  for (const s of r.scenarios) {
    assert.ok(s.scoringExplanation.security.factorsIncreasing.length >= 1);
  }
});

test("ZZP downtime fixture triggers income volatility risk category", () => {
  const r = calculateEmploymentTypeScenario(fixtureZzpWithDowntime());
  const zzp = r.scenarios.find((s) => s.scenarioId === "zzp_self_employed")!;
  assert.ok(hasIncomeVolatilityFlag(zzp.riskHighlights));
});

test("contractor admin fixture lowers contractor net vs baseline but engine still runs", () => {
  const base = calculateEmploymentTypeScenario(sanitizeEmploymentTypeScenarioInput(DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT));
  const heavy = calculateEmploymentTypeScenario(fixtureContractorWithAdmin());
  const cBase = base.scenarios.find((s) => s.scenarioId === "contractor")!.money.estimatedNetAnnual;
  const cHeavy = heavy.scenarios.find((s) => s.scenarioId === "contractor")!.money.estimatedNetAnnual;
  assert.ok(cHeavy <= cBase);
});

test("foreign remote compare_two includes foreign_remote_employee", () => {
  const r = calculateEmploymentTypeScenario(fixtureForeignRemote());
  assert.ok(r.scenarios.some((s) => s.scenarioId === "foreign_remote_employee"));
  const fr = r.scenarios.find((s) => s.scenarioId === "foreign_remote_employee")!;
  assert.ok(fr.money.components.crossBorderPlanningDiscountAnnual >= 0);
});

test("generated questions are structured and deduped", () => {
  const input = fixtureHighIncomeConsultant();
  const r = calculateEmploymentTypeScenario(input);
  const qs = generateEmploymentQuestions(input, r);
  assert.ok(qs.length >= 5);
  assert.ok(qs.every((q) => q.id && q.text));
  const texts = questionTexts(qs);
  assert.equal(texts.length, qs.length);
});

test("normalizePrioritySliders sums to approximately 1", () => {
  const w = normalizePrioritySliders(DEFAULT_EMPLOYMENT_TYPE_SCENARIO_INPUT.priorities);
  const sum =
    w.higherNetIncome +
    w.stabilitySecurity +
    w.lowerAdminBurden +
    w.benefitsProtections +
    w.flexibilityIndependence +
    w.visaSponsorshipSimplicity +
    w.lowerTaxPayrollComplexity;
  assert.ok(Math.abs(sum - 1) < 1e-9);
});
