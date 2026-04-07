/**
 * Sanity checks for Dutch salary net calculator (4 scenarios, ruling vs non-ruling).
 * Run: npm run validate:salary-net (from apps/expatlife-web).
 */
import { calculateDutchSalaryNet } from "../src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import { mergeSalaryNetInputs, SALARY_NET_DEFAULT_INPUTS } from "../src/lib/tools/dutch-salary-net/defaultInputs";

function assert(cond: boolean, message: string): void {
  if (!cond) throw new Error(`[validate-dutch-salary-net] ${message}`);
}

const noRuling = mergeSalaryNetInputs({
  salaryAmount: 70_000,
  rulingMode: "none",
});

const maxRuling = mergeSalaryNetInputs({
  salaryAmount: 70_000,
  rulingMode: "max",
  maxStatutoryFacilityPercent: 30,
});

const a = calculateDutchSalaryNet(noRuling);
const b = calculateDutchSalaryNet(maxRuling);
assert(a != null && b != null, "expected results for 70k gross");
assert(b!.taxableIncomeAnnual < a!.taxableIncomeAnnual, "max ruling should reduce taxable vs none");
assert(b!.netAnnual > a!.netAnnual, "max ruling should increase indicative net vs none");

const four = [
  mergeSalaryNetInputs({ salaryAmount: 50_000, rulingMode: "none" }),
  mergeSalaryNetInputs({ salaryAmount: 65_000, rulingMode: "none" }),
  mergeSalaryNetInputs({ salaryAmount: 65_000, rulingMode: "max", maxStatutoryFacilityPercent: 27 }),
  mergeSalaryNetInputs({
    salaryAmount: 85_000,
    rulingMode: "custom",
    customRulingPercent: 25,
    bonusAnnual: 5_000,
  }),
];

four.forEach((inputs, i) => {
  const r = calculateDutchSalaryNet(inputs);
  assert(r != null && r.grossAnnual > 0 && r.netMonthly > 0, `scenario ${i + 1} should produce positive net`);
});

assert(
  calculateDutchSalaryNet(mergeSalaryNetInputs({ ...SALARY_NET_DEFAULT_INPUTS, salaryAmount: 0, bonusAnnual: 0 })) === null,
  "zero gross should return null"
);

// eslint-disable-next-line no-console
console.log("validate-dutch-salary-net: OK (4 scenarios + ruling vs non-ruling + zero guard)");
