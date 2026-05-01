import test from "node:test";
import assert from "node:assert/strict";
import {
  buildTransferCostHiddenWarnings,
  computeTransferCostEstimate,
  defaultTransferCostCalculatorInput,
  getEffectiveSendAmountEur,
  getTransferCostCalculatorBlockers,
} from "./engine";

test("computes wider total cost for traditional bank than transfer provider at €1000", () => {
  const input = { ...defaultTransferCostCalculatorInput(), amountBand: "1000" as const, method: "not_sure" as const };
  const r = computeTransferCostEstimate(input);
  const trad = r.channels.find((c) => c.channel === "traditional_bank")!;
  const spec = r.channels.find((c) => c.channel === "transfer_provider")!;
  assert.ok(trad.totalCostEurHigh > spec.totalCostEurHigh);
  assert.ok(trad.receivedValueEurHigh <= spec.receivedValueEurHigh);
});

test("uses custom amount when band is custom", () => {
  const input = {
    ...defaultTransferCostCalculatorInput(),
    amountBand: "custom" as const,
    customAmountEur: 3333,
  };
  assert.equal(getEffectiveSendAmountEur(input), 3333);
  const r = computeTransferCostEstimate(input);
  assert.equal(r.sendAmountEur, 3333);
});

test("blocks zero custom amount", () => {
  const input = { ...defaultTransferCostCalculatorInput(), amountBand: "custom" as const, customAmountEur: 0 };
  assert.ok(getTransferCostCalculatorBlockers(input).length > 0);
});

test("adds speed uplift to fee upper bound", () => {
  const base = { ...defaultTransferCostCalculatorInput(), amountBand: "1000" as const };
  const slow = computeTransferCostEstimate({ ...base, speedPreference: "not_important" });
  const fast = computeTransferCostEstimate({ ...base, speedPreference: "same_day" });
  const tSlow = slow.channels.find((c) => c.channel === "digital_bank")!;
  const tFast = fast.channels.find((c) => c.channel === "digital_bank")!;
  assert.ok(tFast.feeEurHigh >= tSlow.feeEurHigh);
});

test("emits hidden warnings for frequent transfers", () => {
  const w = buildTransferCostHiddenWarnings({ ...defaultTransferCostCalculatorInput(), frequency: "frequent" });
  assert.ok(w.some((x) => x.toLowerCase().includes("send often")));
});
