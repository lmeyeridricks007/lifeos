import test from "node:test";
import assert from "node:assert/strict";
import {
  defaultBankingCostEstimatorInput,
  estimateBankingCosts,
  getBankingCostEstimatorBlockers,
  getBiggestCostDrivers,
  normalizeCustomAmount,
} from "./bankingCostEstimator";

test("normalizeCustomAmount parses numbers and strings", () => {
  assert.equal(normalizeCustomAmount(4.5), 4.5);
  assert.equal(normalizeCustomAmount("12,5"), 12.5);
  assert.equal(normalizeCustomAmount("  8  "), 8);
  assert.equal(normalizeCustomAmount(""), null);
  assert.equal(normalizeCustomAmount("x"), null);
  assert.equal(normalizeCustomAmount(null), null);
});

test("simple employee with low monthly fee", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    userType: "employee" as const,
    monthlyAccountFee: "low" as const,
    sendsMoneyAbroad: "never" as const,
    averageTransferAmount: "under_250" as const,
    currenciesNeeded: "EUR_only" as const,
  };
  const r = estimateBankingCosts(input);
  assert.ok(r.monthlyHighEstimate < 50);
  assert.equal(r.currency, "EUR");
  assert.ok(r.breakdown.some((b) => b.key === "accountPackage"));
  assert.ok(getBiggestCostDrivers(r).length > 0);
});

test("international professional with monthly transfers", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    userType: "international_professional" as const,
    sendsMoneyAbroad: "monthly" as const,
    averageTransferAmount: "1000_to_5000" as const,
    currenciesNeeded: "multiple_currencies" as const,
  };
  const r = estimateBankingCosts(input);
  const xfer = r.breakdown.find((b) => b.key === "internationalTransfers");
  const fx = r.breakdown.find((b) => b.key === "fxRisk");
  assert.ok(xfer && xfer.monthlyHigh > 5);
  assert.ok(fx && fx.monthlyHigh > 10);
  assert.ok(r.warnings.some((w) => w.id === "intl-fx-dominates"));
});

test("freelancer with business account", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    userType: "freelancer_zzp" as const,
    needsBusinessAccount: true,
    freelancerTransactionVolume: "medium" as const,
  };
  const r = estimateBankingCosts(input);
  const biz = r.breakdown.find((b) => b.key === "businessZzp");
  assert.ok(biz && biz.monthlyLow > 0);
  assert.ok(r.recommendedSetup.title.toLowerCase().includes("business"));
});

test("family with joint account and extra cards", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    userType: "family" as const,
    needsJointAccount: true,
    extraCards: "two_or_more" as const,
    familySharedCosts: "medium" as const,
  };
  const r = estimateBankingCosts(input);
  const joint = r.breakdown.find((b) => b.key === "jointFamily");
  const cards = r.breakdown.find((b) => b.key === "extraCards");
  assert.ok(joint && joint.monthlyLow > 0);
  assert.ok(cards && cards.monthlyHigh >= 4);
});

test("frequent traveller", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    travelsOften: true,
    foreignCardUse: "frequent" as const,
    atmWithdrawalsPerMonth: "frequent" as const,
  };
  const r = estimateBankingCosts(input);
  const atm = r.breakdown.find((b) => b.key === "atmCardUse");
  assert.ok(atm && atm.monthlyHigh >= 10);
  assert.ok(r.warnings.some((w) => w.id === "travel-fx-dcc" || w.id === "atm-foreign"));
});

test("custom monthly fee", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    monthlyAccountFee: "custom_amount" as const,
    customMonthlyAccountFee: 9.95,
  };
  const r = estimateBankingCosts(input);
  const acc = r.breakdown.find((b) => b.key === "accountPackage");
  assert.ok(acc && acc.monthlyLow <= 10 && acc.monthlyHigh >= 9);
  assert.equal(acc?.confidence, "high");
});

test("hybrid setup adjusts assumptionsUsed and transfer band", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    setupType: "hybrid" as const,
    accountCount: "one" as const,
    sendsMoneyAbroad: "monthly" as const,
  };
  const r = estimateBankingCosts(input);
  assert.ok(r.assumptionsUsed.some((s) => s.toLowerCase().includes("hybrid")));
  const xfer = r.breakdown.find((b) => b.key === "internationalTransfers");
  assert.ok(xfer);
});

test("traditional_only with frequent sends adds warning", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    setupType: "traditional_only" as const,
    sendsMoneyAbroad: "frequently" as const,
  };
  const r = estimateBankingCosts(input);
  assert.ok(r.warnings.some((w) => w.id === "traditional-high-xfer"));
});

test("digital_only with family adds local-fit warning", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    setupType: "digital_only" as const,
    userType: "family" as const,
  };
  const r = estimateBankingCosts(input);
  assert.ok(r.warnings.some((w) => w.id === "digital-local-fit"));
});

test("bankingCostEstimator blocks custom monthly fee when missing", () => {
  const input = { ...defaultBankingCostEstimatorInput(), monthlyAccountFee: "custom_amount" as const, customMonthlyAccountFee: undefined };
  assert.ok(getBankingCostEstimatorBlockers(input).length > 0);
});

test("bankingCostEstimator raises transfer bands when sending frequently", () => {
  const base = defaultBankingCostEstimatorInput();
  const lowSend = estimateBankingCosts({ ...base, sendsMoneyAbroad: "never" });
  const highSend = estimateBankingCosts({ ...base, sendsMoneyAbroad: "frequently" });
  assert.ok(highSend.monthlyHighEstimate > lowSend.monthlyHighEstimate);
});

test("optional providerId without registry still uses generic bands and notes intent", () => {
  const base = defaultBankingCostEstimatorInput();
  const without = estimateBankingCosts(base);
  const withId = estimateBankingCosts({ ...base, providerId: "unknown-bank" });
  assert.equal(without.monthlyHighEstimate, withId.monthlyHighEstimate);
  assert.equal(withId.costAssumptionSource, "generic_editorial");
  assert.ok(withId.assumptionsUsed.some((l) => l.includes("unknown-bank") && l.includes("no saved fee profile")));
});
