import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateFXImpact,
  calculateReceivedAmount,
  estimateTransferCost,
  getBestTransferOption,
  getTransferWarnings,
} from "./transferCostEstimator";

const baseInputs = {
  amount: 1000,
  toCurrency: "USD",
  frequency: "occasional" as const,
  method: "not_sure" as const,
  priority: "balanced" as const,
  speedPreference: "not_important" as const,
};

test("calculateFXImpact multiplies amount by markup decimals", () => {
  const fx = calculateFXImpact(1000, { low: 0.01, high: 0.02 });
  assert.equal(fx.low, 10);
  assert.equal(fx.high, 20);
});

test("calculateReceivedAmount subtracts total cost band", () => {
  const r = calculateReceivedAmount(1000, { low: 5, high: 40 });
  assert.equal(r.low, 960);
  assert.equal(r.high, 995);
});

test("estimateTransferCost returns three provider comparisons", () => {
  const r = estimateTransferCost(baseInputs);
  assert.equal(r.providerComparisons.length, 3);
  assert.ok(r.totalCostLow <= r.totalCostHigh);
  assert.ok(r.amountReceivedLow <= r.amountReceivedHigh);
  assert.ok(r.breakdown.transferFee.low <= r.breakdown.transferFee.high);
});

test("getBestTransferOption prefers transfer_provider when priority fastest", () => {
  const o = getBestTransferOption({ ...baseInputs, priority: "fastest" });
  assert.equal(o.channel, "transfer_provider");
});

test("getTransferWarnings includes weekend line", () => {
  const w = getTransferWarnings(baseInputs);
  assert.ok(w.some((x) => x.toLowerCase().includes("weekend")));
});
