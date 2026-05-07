import type { MoneyExpatTaxesStartCardConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesStartCards: readonly MoneyExpatTaxesStartCardConfig[] = [
  {
    id: "transition-year",
    title: "You may have a transition year",
    intro:
      "The year you arrive or leave rarely looks like a neat twelve-month story. Income, where you are registered, and paperwork can touch more than one country even when your pay already feels Dutch.",
    keyPoints: [
      "A part-year tax form can need **extra pages** — that is common, not a sign you did something wrong.",
      "Move dates, job start dates, and **when you got your citizen service number (BSN)** are facts you will need, not small talk.",
    ],
    relatedTools: [],
    officialSourceKeys: [],
  },
  {
    id: "cross-border-assets",
    title: "You may have money or work across borders",
    intro:
      "Foreign bank accounts, employers abroad, or a lot of travel can raise questions that do not show up on your first payslip. Treat those prompts as a **to-do list**, not something to feel bad about.",
    keyPoints: [
      "Savings and investments on the yearly form exist because **reporting** can still matter after you move.",
      "Use the **double tax awareness** tool to list questions early, then check official sources if the amounts matter.",
    ],
    relatedTools: [],
    officialSourceKeys: [],
  },
  {
    id: "employment-setup",
    title: "How you are hired matters",
    intro:
      "Employee, contractor, mixed work, or more than one employer changes which questions come first and which tools help. Most people **feel** Dutch tax on the payslip long before they think about the yearly form.",
    keyPoints: [
      "The wage tax line on a payslip is money taken out each month — **not always** the same as the final year-end result.",
      "If your contract is not a plain full-time job story, try the **employment type** tool for the right words before you plan alone.",
    ],
    relatedTools: [],
    officialSourceKeys: [],
  },
  {
    id: "household-allowances",
    title: "Your household can change both tax and benefits",
    intro:
      "Partner income, children, insurance costs, and government benefits change your monthly cash and sometimes what you file. Keep **benefits (“toeslagen”)** in a separate mental bucket from the main yearly tax form so expectations stay clear.",
    keyPoints: [
      "Try the **healthcare allowance** and **childcare** tools next to rent and cost-of-living when they affect your budget.",
      "When income changes, check benefits again — what you get can move with your situation.",
    ],
    relatedTools: [],
    officialSourceKeys: [],
  },
] as const;
