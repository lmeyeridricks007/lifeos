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
  title: "What expats often get wrong",
  subtitle: "Eight worries we hear a lot — and simpler ways to think about them.",
  rows: [
    {
      id: "myth-withholding-final",
      title: "“What comes out of my pay each month settles everything”",
      intro:
        "Monthly pay can be **close to the final picture** — or not — when you changed jobs, had a partner’s income, cross-border lines, or credits on the yearly form. Treat payslips as a **monthly check-in**, not the whole year locked shut.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "myth-foreign-assets",
      title: "“Money abroad does not matter anymore”",
      intro:
        "Moving country does not automatically wipe reporting questions. The **savings-and-investments part of the form** exists so your facts still match what you hold.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "myth-ruling-auto",
      title: "“The 30% ruling just turns on by itself”",
      intro:
        "It **does not switch on alone**: who qualifies, forms, and **what payroll does** follow rules that change and need your employer. Calculators show **“what if”** numbers — not approval.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "myth-gross-lifestyle",
      title: "“Gross salary tells me how I will live”",
      intro:
        "**Cash after pay deductions** (and after rent, insurance, childcare) is what you live on. Gross is easy to compare in offers — just do not skip the **payslip and living-cost** step.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "myth-midyear-simple",
      title: "“Moving mid-year is always simple”",
      intro:
        "Mid-year moves are **common and manageable** — they are rarely **one-size simple**. Dates, letters, and income in more than one country deserve a **quiet list**, not a panic scroll.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "myth-allowances-free",
      title: "“Benefits are free extra money”",
      intro:
        "Benefits are **help based on income and rules**, with their own site and steps. Our tools help you **plan** — they do not replace the official benefits process or a government letter.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "myth-remote-simple",
      title: "“Remote work is always straightforward”",
      intro:
        "**Where the company is, where you work, and tax agreements between countries** can all matter. When two countries might care about the same income, it is **worth mapping early**.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "myth-calculators-replace",
      title: "“Online calculators replace the tax office”",
      intro:
        "Tools help you **estimate and ask better questions**. The **Dutch tax office** (or a qualified tax adviser) still owns the final definitions, dates, and binding answers for your year.",
      keyPoints: [],
      relatedTools: [],
      officialSourceKeys: [],
    },
  ],
} as const;
