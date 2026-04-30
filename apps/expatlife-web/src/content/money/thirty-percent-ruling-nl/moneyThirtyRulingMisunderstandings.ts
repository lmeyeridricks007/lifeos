import type { MoneyThirtyRulingMisunderstandingConfig } from "./moneyThirtyRulingContent.types";

export const moneyThirtyRulingMisunderstandings: readonly MoneyThirtyRulingMisunderstandingConfig[] = [
  { id: "m1", title: "“The 30% ruling is automatic.”", body: "Eligibility and employer setup both have to line up — silence on a contract is not the same as approval." },
  { id: "m2", title: "“My employer must handle everything.”", body: "Employers differ in speed, documentation support, and policy. You still own reading your payslip and asking clear questions." },
  { id: "m3", title: "“I will always get the maximum.”", body: "Policy, caps, and package shape can mean you see less than the headline theoretical allowance." },
  { id: "m4", title: "“Gross salary is enough to compare offers.”", body: "Taxable base, pension, allowances, and hours can flip which offer is better for your household." },
  { id: "m5", title: "“Payslip lines always say ‘30%’ clearly.”", body: "Presentation varies — use the payslip decoder and employer explanations alongside tools." },
  { id: "m6", title: "“Eligibility equals benefit amount.”", body: "You can have complex stories where directionally eligible situations still produce smaller in-payroll benefit than expected." },
  { id: "m7", title: "“Old forum numbers still apply.”", body: "Rule changes and caps can move — verify against official year guidance." },
  { id: "m8", title: "“The calculator approved me.”", body: "Calculators output scenarios — not Dienst letters and not payroll mandates." },
] as const;
