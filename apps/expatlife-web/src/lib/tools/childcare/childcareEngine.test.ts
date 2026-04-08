import test from "node:test";
import assert from "node:assert/strict";
import { calculateChildcareEstimate } from "./childcareEngine";
import {
  CHILDCARE_DEFAULT_INCOME_WHEN_MISSING_EUR,
  estimateChildcareBenefitForChild,
  getChildcareOfficialCap,
  getChildcareReimbursementPercent,
  getChildcareReimbursableHourCap,
  roundMoney,
} from "./childcareHelpers";
import {
  FIXTURE_AMS_OVER_CAP_MANUAL_RATE,
  FIXTURE_AMS_TODDLER_3D_DAYCARE,
  FIXTURE_GASTOUDER_HAGUE,
  FIXTURE_MISSING_INCOME,
  FIXTURE_TWO_KIDS_DAYCARE_BSO,
} from "./childcareFixtures";
import { buildChildcareScenarioComparison } from "./childcareScenarios";
import { buildChildcareHtmlDocument, CHILDCARE_EXPORT_DISCLAIMER_DEFAULT } from "./exportChildcareSummary";

test("getChildcareOfficialCap 2026 matches published maxima", () => {
  assert.equal(getChildcareOfficialCap(2026, "daycare"), 11.23);
  assert.equal(getChildcareOfficialCap(2026, "bso"), 9.98);
  assert.equal(getChildcareOfficialCap(2026, "gastouder"), 8.49);
  assert.equal(getChildcareReimbursableHourCap(2026), 230);
});

test("getChildcareReimbursementPercent: additional child ≤ first child", () => {
  const y = 2026 as const;
  const inc = 70_000;
  const first = getChildcareReimbursementPercent(y, inc, 0, "couple");
  const second = getChildcareReimbursementPercent(y, inc, 1, "couple");
  assert.ok(second <= first);
  assert.ok(first > 0 && second > 0);
});

test("estimateChildcareBenefitForChild never exceeds provider bill", () => {
  const b = estimateChildcareBenefitForChild({
    capAware: true,
    providerBillMonthly: 800,
    reimbursableBase: 600,
    reimbursementPercent: 0.8,
    eligibilityMultiplier: 1,
  });
  assert.ok(b <= 800);
  assert.ok(b >= 0);
});

test("fixture: Amsterdam toddler 3d daycare — deterministic bill and cap", () => {
  const r = calculateChildcareEstimate(FIXTURE_AMS_TODDLER_3D_DAYCARE);
  const c = r.perChild[0];
  assert.equal(c.officialHourlyCapEur, 11.23);
  assert.ok(c.monthlyHours > 100 && c.monthlyHours < 115);
  assert.ok(c.providerBillMonthly > 0);
  assert.ok(c.reimbursableHours <= 230);
  assert.equal(c.reimbursableRate, Math.min(c.providerHourlyRateEur, 11.23));
  assert.ok(r.insightFlags.hasOverCapRate);
});

test("fixture: manual rate above cap — over-cap loss and flag", () => {
  const r = calculateChildcareEstimate(FIXTURE_AMS_OVER_CAP_MANUAL_RATE);
  const c = r.perChild[0];
  assert.ok(c.overCapLoss > 0);
  assert.ok(c.hourlyOverCapComponent > 0);
  assert.equal(c.providerHourlyRateEur, 14.5);
  assert.ok(r.insightFlags.hasOverCapRate);
});

test("fixture: two children daycare + BSO", () => {
  const r = calculateChildcareEstimate(FIXTURE_TWO_KIDS_DAYCARE_BSO);
  assert.equal(r.perChild.length, 2);
  assert.ok(r.insightFlags.hasMultipleChildren);
  assert.ok(r.grossMonthlyProviderCostEur > r.perChild[0].providerBillMonthly);
  const p0 = getChildcareReimbursementPercent(2026, 95_000, 0, "couple");
  const p1 = getChildcareReimbursementPercent(2026, 95_000, 1, "couple");
  assert.ok(p1 < p0);
});

test("fixture: gastouder uses 8.49 cap in 2026", () => {
  const r = calculateChildcareEstimate(FIXTURE_GASTOUDER_HAGUE);
  assert.equal(r.perChild[0].officialHourlyCapEur, 8.49);
  assert.equal(r.perChild[0].careType, "gastouder");
});

test("fixture: missing income uses default and uncertain flag", () => {
  const r = calculateChildcareEstimate(FIXTURE_MISSING_INCOME);
  assert.equal(r.annualHouseholdIncomeUsedEur, CHILDCARE_DEFAULT_INCOME_WHEN_MISSING_EUR);
  assert.equal(r.insightFlags.uncertainIncomeInput, true);
  assert.ok(r.engineWarnings.length >= 1);
});

test("first-month breakdown lines sum to firstMonthChildcareCashEur", () => {
  const r = calculateChildcareEstimate(FIXTURE_AMS_TODDLER_3D_DAYCARE);
  const sumRaw = r.firstMonthBreakdown.lines.reduce((a, l) => a + l.amountEur, 0);
  assert.equal(roundMoney(sumRaw), r.firstMonthBreakdown.totalEur);
  assert.equal(r.firstMonthBreakdown.totalEur, r.firstMonthChildcareCashEur);
});

test("first-month cash equals net childcare when all first-month toggles are off", () => {
  const x = JSON.parse(JSON.stringify(FIXTURE_AMS_TODDLER_3D_DAYCARE)) as typeof FIXTURE_AMS_TODDLER_3D_DAYCARE;
  x.setupFirstMonth = {
    includeRegistrationFees: false,
    includeFirstInvoiceTimingRisk: false,
    includeAdvanceDeposit: false,
    includeSchoolHolidayReserve: false,
    includeEmergencyBackupReserve: false,
    includePickupTransportReserve: false,
  };
  const r = calculateChildcareEstimate(x);
  assert.equal(r.firstMonthChildcareCashEur, r.estimatedMonthlyNetChildcareCostEur);
  assert.equal(r.firstMonthBreakdown.lines.length, 1);
});

test("HTML export includes summary, household inputs, per-child breakdown, first-month detail, scenarios, notes, disclaimer", () => {
  const r = calculateChildcareEstimate(FIXTURE_TWO_KIDS_DAYCARE_BSO);
  const scenarios = buildChildcareScenarioComparison(FIXTURE_TWO_KIDS_DAYCARE_BSO);
  const html = buildChildcareHtmlDocument({
    siteName: "ExpatCopilot",
    generatedAtIso: "2026-04-08T12:00:00.000Z",
    disclaimer: CHILDCARE_EXPORT_DISCLAIMER_DEFAULT,
    calculatorCanonicalUrl: "https://example.com/netherlands/family/tools/childcare-cost-estimator/",
    input: FIXTURE_TWO_KIDS_DAYCARE_BSO,
    result: r,
    scenarios,
    planningNotes: "Employer allowance TBD",
  });
  assert.ok(html.includes("Estimated monthly gross provider bill"));
  assert.ok(html.includes("Estimated monthly childcare benefit"));
  assert.ok(html.includes("Per-child breakdown"));
  assert.ok(html.includes("First-month cash (detail)"));
  assert.ok(html.includes("Household"));
  assert.ok(html.includes("Scenario comparison"));
  assert.ok(html.includes("Employer allowance TBD"));
  assert.ok(html.includes("kinderopvangtoeslag"));
  assert.ok(html.includes("Younger"));
  assert.ok(html.includes("Disclaimer"));
});
