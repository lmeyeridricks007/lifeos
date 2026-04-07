/**
 * Ensures the seeded NL/EN payroll alias dictionary stays large enough for decoder coverage.
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { PAYROLL_ALIAS_SEED, PAYROLL_ALIAS_STRING_COUNT } from "@/src/lib/payslip/payrollAliasSeed";
import { CANONICAL_PAYROLL_TERMS } from "@/src/lib/payslip/canonicalRegistry";

describe("payrollAliasSeed", () => {
  it("has at least 150 plain alias strings (audit / regression)", () => {
    assert.ok(PAYROLL_ALIAS_STRING_COUNT >= 150, `expected >= 150, got ${PAYROLL_ALIAS_STRING_COUNT}`);
  });

  it("covers every canonical payroll term key with a seed group", () => {
    const seeded = new Set(Object.keys(PAYROLL_ALIAS_SEED));
    for (const t of CANONICAL_PAYROLL_TERMS) {
      assert.ok(
        seeded.has(t.key),
        `CANONICAL_PAYROLL_TERMS key "${t.key}" is missing from PAYROLL_ALIAS_SEED — add a group or remove the term`
      );
    }
  });
});
