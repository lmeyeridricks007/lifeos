import type { MoneyExpatTaxesMisunderstandingRowConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesMisunderstandings: {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly rows: readonly MoneyExpatTaxesMisunderstandingRowConfig[];
} = {
  id: "misunderstandings",
  eyebrow: "Reality check",
  title: "What expats often misunderstand",
  subtitle: "Six quick patterns — useful when forum confidence meets real filing mechanics.",
  rows: [
    {
      id: "withholding-final",
      title: "Withheld tax is not always the final story",
      intro: "Payroll can be close — or not — depending on your full-year facts and return-time adjustments.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "ruling-guarantee",
      title: "The 30% ruling is not a guaranteed label on your life",
      intro: "Eligibility, documentation, and payroll implementation still matter — treat calculators as sensitivity tools.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "foreign-outside",
      title: "Foreign does not automatically mean outside the return",
      intro: "Residency and reporting rules can bring overseas accounts and investments into the conversation.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "allowance-deduction",
      title: "Allowances are not the same as deductions",
      intro: "Different portals, different rules — mixing them up causes missed support or wrong expectations.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "partial-template",
      title: "Partial years rarely match a single template",
      intro: "Arrival and departure stories need timelines — not a one-size blog flowchart.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "tool-verdict",
      title: "Tools suggest — they do not decide",
      intro: "Use them to compare scenarios and build better questions for HR, payroll, or an adviser.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
  ],
} as const;
