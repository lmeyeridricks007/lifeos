import test from "node:test";
import assert from "node:assert/strict";
import { payslipDecodeJsonSchema } from "@/src/lib/tools/payslip/schema";

test("payslipDecodeJsonSchema accepts valid text", () => {
  const r = payslipDecodeJsonSchema.safeParse({ text: "Bruto loon 100,00" });
  assert.equal(r.success, true);
});

test("payslipDecodeJsonSchema rejects empty text", () => {
  const r = payslipDecodeJsonSchema.safeParse({ text: "" });
  assert.equal(r.success, false);
});

test("payslipDecodeJsonSchema rejects huge text", () => {
  const r = payslipDecodeJsonSchema.safeParse({ text: "x".repeat(600_000) });
  assert.equal(r.success, false);
});
