import test from "node:test";
import assert from "node:assert/strict";
import { parsePayslipText } from "@/src/lib/tools/payslip/parser";

test("parsePayslipText extracts bruto and netto with Dutch amounts", () => {
  const text = `
    Periode: 01-2026
    Bruto loon 4.500,00
    Loonheffing 1.200,00
    Netto loon 3.100,00
  `;
  const r = parsePayslipText(text);
  assert.ok(r.grossSalary);
  assert.match(r.grossSalary!.amount, /4\.500,00|4500/);
  assert.ok(r.netSalary);
  assert.ok(r.wageTax);
});

test("parsePayslipText picks holiday allowance line", () => {
  const r = parsePayslipText("Vakantiegeld 360,00");
  assert.ok(r.holidayAllowance);
  assert.ok(r.holidayAllowance!.confidence === "high" || r.holidayAllowance!.confidence === "medium");
});

test("parsePayslipText handles English-ish gross/net labels", () => {
  const r = parsePayslipText("Gross salary 5000.00\nNet pay 3200.00");
  assert.ok(r.grossSalary || r.netSalary);
});

test("parsePayslipText does not invent missing amounts", () => {
  const r = parsePayslipText("Random memo line without numbers that matter");
  assert.equal(r.grossSalary, undefined);
  assert.equal(r.netSalary, undefined);
});
