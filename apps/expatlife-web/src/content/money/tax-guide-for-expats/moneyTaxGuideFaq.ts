import type { MoneyTaxGuideFaqItemConfig } from "./taxGuideContent.types";

export const moneyTaxGuideFaq: readonly MoneyTaxGuideFaqItemConfig[] = [
  {
    q: "How does Dutch tax work for expats?",
    a: "Most employees meet Dutch tax first through employer withholding on salary, then sometimes through an annual income tax return that reconciles income, deductions, and credits. Your residency, family situation, assets, and cross-border ties change which boxes and questions matter — use this page to orient, then confirm with official sources or an adviser.",
  },
  {
    q: "Is payroll tax the same as my final tax?",
    a: "Not always. Payroll withholding is an estimate through the year. A tax return can still show you owe more, get a refund, or largely align — especially in years with multiple employers, bonuses, partner income, or international complexity.",
  },
  {
    q: "Do I need to file a Dutch tax return?",
    a: "Some people must file, others receive an invitation, and some choose to file when they expect a refund or need to report something not fully captured in payroll. Whether you should file depends on your facts — use official Belastingdienst guidance or ask a tax adviser when unsure.",
  },
  {
    q: "What is the 30% ruling?",
    a: "It is a specific tax facility for eligible incoming employees that can reduce taxable wages within rules and caps. Eligibility is not automatic, employers are involved in the process, and details can change — use the dedicated 30% ruling calculator for indicative scenarios, then confirm eligibility with payroll or a tax professional.",
  },
  {
    q: "What is Box 3?",
    a: "Box 3 is the part of the income tax return that broadly covers savings and investments (wealth) in the Dutch system. It can matter for expats with accounts or assets abroad as well as in the Netherlands — treat our explanation as orientation, not a personal assessment.",
  },
  {
    q: "Do foreign assets matter?",
    a: "They can, depending on residency and reporting rules. A common misunderstanding is treating a foreign account as automatically outside Dutch reporting — that is not always true. If you have meaningful assets or investment income outside the Netherlands, check official guidance or ask a tax adviser when unsure.",
  },
  {
    q: "Can I be taxed twice?",
    a: "Cross-border situations can create double taxation risk or complex relief. Tax treaties and timing (for example arrival or departure years) matter. Use the Double Tax Awareness Tool for planning questions, then confirm with official guidance or a tax adviser.",
  },
  {
    q: "Should I use a tax advisor?",
    a: "Many people file straightforward employee situations themselves. A tax adviser is often useful for first-year moves, partner income, property, company shares, or cross-border work — especially when you want someone to sanity-check your facts against the rules. Choose scoped help for a clear question rather than open-ended worry.",
  },
] as const;
