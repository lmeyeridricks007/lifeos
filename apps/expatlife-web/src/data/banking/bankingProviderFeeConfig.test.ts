import test from "node:test";
import assert from "node:assert/strict";
import {
  bankingCostProviderFeeRegistry,
  getBankingCostProviderFeeConfig,
  isBankingProviderFeeConfigActionable,
  type ProviderFeeConfig,
} from "./bankingProviderFeeConfig";

const validFixture = (): ProviderFeeConfig => ({
  providerId: "fixture-bank",
  monthlyFeeRange: [2, 8],
  cardFeeRange: [0, 4],
  transferFeePattern: "flat-plus-markup",
  fxPattern: "weekend-markup",
  atmPattern: "eurozone-free-abroad-fee",
  sourceKey: "editorial-banking-provider-fee-fixture",
  lastChecked: "2026-05-01",
});

test("isBankingProviderFeeConfigActionable rejects incomplete rows", () => {
  assert.equal(isBankingProviderFeeConfigActionable({ ...validFixture(), transferFeePattern: "  " }), false);
  assert.equal(isBankingProviderFeeConfigActionable({ ...validFixture(), sourceKey: "pending" }), false);
  assert.equal(isBankingProviderFeeConfigActionable({ ...validFixture(), lastChecked: "05-01-2026" }), false);
  assert.equal(isBankingProviderFeeConfigActionable({ ...validFixture(), monthlyFeeRange: [10, 3] }), false);
});

test("isBankingProviderFeeConfigActionable accepts a complete sourced row", () => {
  assert.equal(isBankingProviderFeeConfigActionable(validFixture()), true);
});

test("registry lookup returns undefined until a row is added", () => {
  assert.equal(getBankingCostProviderFeeConfig("fixture-bank"), undefined);
  bankingCostProviderFeeRegistry["fixture-bank"] = validFixture();
  try {
    assert.equal(getBankingCostProviderFeeConfig("fixture-bank")?.providerId, "fixture-bank");
  } finally {
    delete bankingCostProviderFeeRegistry["fixture-bank"];
  }
});
