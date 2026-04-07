import assert from "node:assert/strict";
import { test } from "node:test";
import {
  estimateAffordableRent,
  estimateLandlordScreening,
  landlordCheckEur,
} from "./calculateRentAffordability";

test("estimateAffordableRent orders bands comfortable ≤ essential ≤ balanced ≤ stretch", () => {
  const b = estimateAffordableRent(4000, 6000, 1800, 0, 3.5, 0.94);
  assert.ok(b.comfortableMaxRentEur <= b.essentialMaxRentEur);
  assert.ok(b.essentialMaxRentEur <= b.balancedMaxRentEur);
  assert.ok(b.balancedMaxRentEur <= b.stretchMaxRentEur);
  assert.ok(b.safeMaxRentEur === b.comfortableMaxRentEur);
});

test("estimateLandlordScreening marks pass when gross clears selected multiplier", () => {
  const r = estimateLandlordScreening(5000, 1400, 3.5);
  assert.equal(r.checks.length, 3);
  const sel = r.checks.find((c) => c.multiplier === 3.5);
  assert.ok(sel?.passes);
  assert.equal(landlordCheckEur(5000, 1400, 3.5).passes, true);
});
