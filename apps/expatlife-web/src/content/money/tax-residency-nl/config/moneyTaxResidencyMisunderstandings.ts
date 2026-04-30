import type { MoneyTaxResidencyMisunderstandingRowConfig } from "./moneyTaxResidencyTypes";

export const moneyTaxResidencyMisunderstandings: readonly MoneyTaxResidencyMisunderstandingRowConfig[] = [
  {
    id: "m1",
    title: "“My residence permit automatically decides my tax residency.”",
    body: "Permits answer stay questions; tax residency can still need a fact bundle and official return guidance.",
  },
  {
    id: "m2",
    title: "“BSN means everything is settled.”",
    body: "A BSN is essential admin — it does not replace careful thought about income sources, assets abroad, or other countries.",
  },
  {
    id: "m3",
    title: "“Payroll tax means my final tax is done.”",
    body: "Withholding and the annual return are different layers — many people still file or receive assessments.",
  },
  {
    id: "m4",
    title: "“Foreign assets do not matter after moving.”",
    body: "Reporting discussions can include assets outside the Netherlands depending on facts and year — read official Box guidance.",
  },
  {
    id: "m5",
    title: "“Moving mid-year is just a normal tax year.”",
    body: "Transition years often need extra organisation and sometimes professional help.",
  },
  {
    id: "m6",
    title: "“Remote work across borders is always simple.”",
    body: "Days, employer location, and treaty topics can interact — treat simple stories with caution.",
  },
  {
    id: "m7",
    title: "“Only income in the Netherlands matters.”",
    body: "Worldwide income concepts and foreign lines can still be relevant in official language for some residents.",
  },
  {
    id: "m8",
    title: "“Online calculators can decide my residency.”",
    body: "Calculators can model slices of pay or risk — they do not replace facts, official guidance, or an adviser.",
  },
] as const;
