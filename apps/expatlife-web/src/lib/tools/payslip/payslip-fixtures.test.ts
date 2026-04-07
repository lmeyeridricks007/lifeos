import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parsePayslipEngine } from "@/src/lib/tools/payslip/parser";

const fixturesDir = join(process.cwd(), "test/fixtures/payslips");

function load(name: string): string {
  return readFileSync(join(fixturesDir, name), "utf8");
}

test("fixture: simple monthly payslip", () => {
  const { result: r } = parsePayslipEngine(load("monthly-simple.txt"), { includeDiagnostics: true });
  assert.ok(r.grossSalary);
  assert.equal(r.grossSalary!.normalizedAmount, 4250.75);
  assert.ok(r.netSalary);
  assert.equal(r.netSalary!.normalizedAmount, 3010.25);
  assert.ok(r.wageTax);
  assert.equal(Math.abs(r.wageTax!.normalizedAmount), 1125.5);
  assert.ok(r.taxableWage);
  assert.ok(r.socialContributions);
  assert.equal(r.socialContributions!.normalizedAmount, 4100);
});

test("fixture: holiday allowance and reserve", () => {
  const { result: r } = parsePayslipEngine(load("holiday-reserve.txt"));
  assert.ok(r.grossSalary);
  assert.ok(r.holidayAllowance);
  assert.ok(r.netSalary);
});

test("fixture: pension employee and employer", () => {
  const { result: r } = parsePayslipEngine(load("with-pension.txt"));
  assert.ok(r.grossSalary);
  assert.equal(r.grossSalary!.normalizedAmount, 5500.5);
  assert.ok(r.pensionEmployee);
  assert.equal(Math.abs(r.pensionEmployee!.normalizedAmount), 275.03);
  assert.ok(r.pensionEmployer);
  assert.equal(r.pensionEmployer!.normalizedAmount, 275.03);
});

test("fixture: ambiguous multiple net lines — no silent net pick", () => {
  const { result: r } = parsePayslipEngine(load("ambiguous-net.txt"));
  assert.equal(r.netSalary, undefined);
  assert.ok(r.ambiguousNetCandidates && r.ambiguousNetCandidates.length >= 2);
  assert.ok(r.warnings?.some((w) => /multiple plausible net/i.test(w)));
});

test("fixture: sparse English-style export", () => {
  const { result: r } = parsePayslipEngine(load("sparse-export.txt"));
  assert.ok(r.grossSalary);
  assert.ok(r.wageTax);
  assert.ok(r.netSalary);
});

test("fixture: English payroll wording from Dutch employer", () => {
  const { result: r } = parsePayslipEngine(load("english-dutch-employer.txt"));
  assert.ok(r.grossSalary);
  assert.equal(r.grossSalary!.normalizedAmount, 6000);
  assert.ok(r.pensionEmployee);
  assert.ok(r.wageTax);
  assert.ok(r.netSalary);
  assert.ok(r.holidayAllowance);
  const gh = r.glossaryHighlights ?? [];
  assert.ok(gh.some((h) => h.term === "Vakantiegeld" && h.matchedLines.length > 0));
});

test("diagnostics omit raw payslip; include matched rule metadata", () => {
  const { diagnostics } = parsePayslipEngine(load("monthly-simple.txt"), { includeDiagnostics: true });
  assert.ok(diagnostics);
  assert.ok(diagnostics!.matchedRules.length > 0);
  for (const rc of diagnostics!.rejectedCandidates) {
    assert.ok(rc.linePreview.length <= 120);
  }
});
