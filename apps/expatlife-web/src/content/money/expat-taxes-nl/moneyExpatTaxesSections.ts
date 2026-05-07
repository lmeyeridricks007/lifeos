import { expatTaxesNlRoutes as R } from "@/src/components/money/expat-taxes-nl/expatTaxesNlRoutes";
import type { MoneyExpatTaxesSectionConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesSections: readonly MoneyExpatTaxesSectionConfig[] = [
  {
    id: "employment-payslips",
    eyebrow: "Your job",
    title: "Your job, your pay, and your payslip",
    subtitle: "Most people first meet Dutch tax through the payslip each month — it is a simple map, not the whole story for the year.",
    intro:
      "Each month your employer takes tax and other amounts out of your pay before you get it. On the slip you may see words like **wage tax**, **pension**, and sometimes **holiday pay** on its own schedule.\n\nAt the end of the year things can still look different if you changed jobs, had a partner’s income, got a bonus, or earned money in more than one country — **what you see each month is not always the same as the final year-end picture**.",
    keyPoints: [
      "**Gross** pay is what the job ad says; **net** is what lands in your bank after everything is taken out.",
      "Holiday pay can make one month look odd if you only look at a single payslip.",
      "If the words on the slip confuse you, use a **payslip explainer tool** instead of guessing from chat screenshots.",
    ],
    relatedTools: [
      { kind: "tool", key: "payslip" },
      { kind: "tool", key: "salaryNet" },
      { kind: "tool", key: "taxReturnNl" },
      { kind: "tool", key: "howTaxesWorkInNl" },
      { kind: "tool", key: "jobOffer" },
    ],
    officialSourceKeys: ["bd_payroll_taxes", "bd_income_tax_individuals"],
    cautionNote:
      "Your payslip each month is a useful snapshot — it is not always the same as your final position after you file your yearly tax form.",
  },
  {
    id: "thirty-percent-ruling",
    eyebrow: "30% ruling",
    title: "The 30% ruling (expat tax benefit)",
    subtitle: "You often hear about it when you get a job offer — your employer still has to set it up correctly on pay.",
    intro:
      "The 30% ruling is only for some people who move to the Netherlands for work. The rules **change over the years**. Think of it as three separate things: **whether you qualify**, **the forms**, and **what actually shows on your pay** — not the same as a catchy line in a job ad.",
    keyPoints: [
      "Your employer is part of the process — you cannot usually turn it on alone.",
      "Online calculators help you try “what if” numbers — they do not prove you qualify.",
      "If your pay offer counts on this benefit, talk early with HR and payroll so everyone expects the same thing.",
    ],
    relatedTools: [
      { kind: "tool", key: "ruling" },
      { kind: "tool", key: "thirtyPercentRulingGuide" },
      { kind: "tool", key: "salaryNet" },
      { kind: "tool", key: "jobOffer" },
    ],
    officialSourceKeys: ["bd_30_percent_facility"],
    cautionNote: "Calculator results are for trying ideas — they are not proof that you qualify or that payroll is set up correctly.",
  },
  {
    id: "foreign-box3",
    eyebrow: "Savings abroad",
    title: "Money abroad and the “Box 3” part of your tax form",
    subtitle: "Many people only hear about this when they file — a short read earlier can feel calmer.",
    memoryHook:
      "On your yearly tax form, **Box 3** is the part about **savings and investments** — not the same as the tax taken from your pay each month.",
    intro:
      "The exact rules follow the **tax year** you file for. Money or accounts outside the Netherlands can still matter on your Dutch form, depending on your situation — worth a quiet read before filing season.",
    keyPoints: [
      "This topic feels different from your payslip — that is normal.",
      "If the amounts are large, read the official site or ask a tax person for a short review instead of trusting random forums.",
      "If you also earn across borders, read the **double tax** section below as well.",
    ],
    relatedTools: [
      { kind: "tool", key: "taxResidencyNl" },
      { kind: "tool", key: "doubleTax" },
      { kind: "link", href: R.taxGuideBroad, label: "Big-picture tax guide (overview of the “boxes”)" },
      { kind: "tool", key: "taxAdvisorsExpats", label: "When paid tax help might help (guide)" },
    ],
    officialSourceKeys: ["bd_income_tax_individuals", "bd_international_en"],
    cautionNote:
      "If you still have meaningful savings or investments abroad, official guidance or a short paid review often fits better than forum threads.",
  },
  {
    id: "arrival-departure-year",
    eyebrow: "Part-year moves",
    title: "Arriving or leaving part-way through the year",
    subtitle: "When your life year and the calendar year do not line up neatly.",
    intro:
      "If you move mid-year you might have more than one job, income in more than one country, or paperwork that does not fit one simple story.\n\nThat usually means **more lines on your yearly tax form** — not that you did something wrong. **Dates and letters from the tax office** matter more than gut feeling.",
    keyPoints: [
      "Write a simple timeline: move dates, job start and end dates, and any big money moves.",
      "Letters and the Dutch tax office website are the reliable place for filing dates and steps.",
      "If your story crosses borders, a little paid help up front can cost less than fixing mistakes later.",
    ],
    relatedTools: [
      { kind: "link", href: `${R.taxGuideBroad}#tax-return-basics`, label: "Tax guide — yearly form basics" },
      { kind: "tool", key: "taxesHub" },
      { kind: "tool", key: "workingNl" },
    ],
    officialSourceKeys: ["bd_filing_return", "bd_income_tax_individuals"],
    cautionNote: "Part-year moves are easier if you start with a simple list of dates — before you open the yearly form.",
  },
  {
    id: "family-allowances",
    eyebrow: "Family money",
    title: "Partner, kids, benefits, and household money",
    subtitle: "Some help with costs uses a different website and rules than your yearly tax form — keep the two in mind separately.",
    intro:
      "Things like **healthcare allowance** use the benefits (“toeslagen”) system — different website and timing than your main yearly tax form.\n\n**Our calculators are only for planning** — they are not a final yes or no from the government. Other family items may matter more on the yearly form. Keeping the two apart helps you avoid missed help or wrong hopes.",
    keyPoints: [
      "If insurance premiums hurt your budget, try the healthcare allowance estimator before you lock in housing.",
      "Childcare is both a monthly cost and sometimes benefits — model both.",
      "A partner’s income can change what you file — do not assume you can ignore it without checking.",
    ],
    relatedTools: [
      { kind: "tool", key: "healthcare" },
      { kind: "tool", key: "childcare" },
      { kind: "tool", key: "col" },
    ],
    officialSourceKeys: ["toeslagen_portal", "gov_income_tax_allowances"],
    cautionNote: "Allowance tools help you guess your budget — they do not replace the official benefits site or a government decision.",
  },
  {
    id: "double-tax",
    eyebrow: "Two countries",
    title: "Paying tax in two countries (double tax worries)",
    subtitle: "Turn a vague worry into a short list of questions — then decide who should check the answers.",
    intro:
      "Work or investments across borders can raise questions about **which country taxes what** and **when**. The answers depend on your facts and on **tax agreements between countries**.\n\nOur **double tax awareness tool** is a **simple checklist of questions** — not a final legal answer. Use it to see what to ask, then check official guidance or a tax adviser when a lot of money is involved.",
    keyPoints: [
      "Treat country agreements and timing as real details — not small print you can skip.",
      "If the amounts matter, a focused question to a tax adviser (one country pair, one year) is often enough.",
      "Use tools to learn what to ask — not to “prove” something to the tax office on your own.",
    ],
    relatedTools: [
      { kind: "tool", key: "doubleTax" },
      { kind: "tool", key: "employmentType" },
      { kind: "tool", key: "taxAdvisorsExpats", label: "Optional guide to paid help" },
    ],
    officialSourceKeys: ["bd_international_en"],
    cautionNote:
      "Cross-border tools give you words and checklists — they are not a binding answer you can wave at a government.",
  },
] as const;
