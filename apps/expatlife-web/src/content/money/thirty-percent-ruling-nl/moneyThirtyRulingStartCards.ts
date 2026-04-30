import type { MoneyThirtyRulingStartCardConfig } from "./moneyThirtyRulingContent.types";

/** “What it means” — four concept anchors (no numeric rules). */
export const moneyThirtyRulingStartCards: readonly MoneyThirtyRulingStartCardConfig[] = [
  {
    id: "c1",
    title: "It can reduce taxable salary",
    body: "For eligible incoming employees, the facility can allow part of the compensation package to be treated as a tax-free allowance within rules that evolve by tax year — see Belastingdienst for binding wording.",
  },
  {
    id: "c2",
    title: "It usually requires employer involvement",
    body: "Application and payroll setup are not a solo “toggle” in personal banking apps. Employers are part of the process and the payslip is where many people first see outcomes.",
  },
  {
    id: "c3",
    title: "It depends on eligibility criteria",
    body: "Typical themes include incoming employee context, recruitment distance, salary norms for the tax year, expertise, and timing — your facts must match official tests for the year that applies.",
  },
  {
    id: "c4",
    title: "It affects package planning, not only monthly net",
    body: "Gross, taxable, and net can diverge in non-obvious ways. Use job-offer comparison, salary net, and ruling tools together when you are still in negotiation mode.",
  },
] as const;
