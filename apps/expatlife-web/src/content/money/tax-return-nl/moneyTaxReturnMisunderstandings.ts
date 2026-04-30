import type { MoneyTaxReturnMisunderstandingConfig } from "./moneyTaxReturnTypes";

export const moneyTaxReturnMisunderstandings: readonly MoneyTaxReturnMisunderstandingConfig[] = [
  { id: "m1", title: "“My employer withheld tax, so I never need to think about filing.”", body: "Withholding handles cash flow during the year; the return can still matter for deductions, credits, assets, or letters from Belastingdienst." },
  { id: "m2", title: "“A tax return always means I get money back.”", body: "Some people receive a refund; others owe a top-up, or land neutral — outcomes depend on facts and year rules." },
  { id: "m3", title: "“Box 3 does not matter unless I am wealthy.”", body: "Savings and investments, including abroad, can surface in Box-style discussions for many everyday households — read official guidance." },
  { id: "m4", title: "“Foreign accounts and assets are irrelevant after moving.”", body: "Reporting discussions can still include foreign lines depending on facts — do not assume “only Dutch salary counts”." },
  { id: "m5", title: "“Allowances and deductions are the same thing.”", body: "Toeslagen run on allowance rules; many deductions/credits sit in the income tax return — different mechanics." },
  { id: "m6", title: "“Moving mid-year is a normal tax year.”", body: "Transition years often need extra organisation and sometimes professional help." },
  { id: "m7", title: "“Online calculators can replace official filing.”", body: "Tools help you model and learn — they do not replace DigiD, official forms, or binding Belastingdienst outcomes." },
  { id: "m8", title: "“30% ruling makes all taxes simple.”", body: "The facility can simplify some payroll lines but does not remove the need to think about return sections, assets, or cross-border facts." },
];
