import { taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import type { MoneyExpatTaxesRiskSignalsShellConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesRiskSignals: MoneyExpatTaxesRiskSignalsShellConfig = {
  id: "early-tax-signals",
  eyebrow: "What to open first",
  title: "Tax topics worth noticing early",
  subtitle:
    "If a line sounds like your year, read the card, take the next step, then open a tool or section when you are ready — no score, no drama.",
  intro:
    "These are **practical prompts**, not predictions. The “caution” label only means how much paperwork or coordination often shows up — **not** that you did anything wrong. Use them to pick a lane, then check anything serious with the Dutch tax office or a tax adviser.",
  cards: [
    {
      id: "signal-mid-year-move",
      title: "You moved during the tax year",
      whyItMatters:
        "A mid-year move usually means more dates to line up — job start or stop, where you registered, and sometimes pay or premiums that do not fit one neat twelve-month story. That is paperwork rhythm, not a mistake.",
      recommendedAction:
        "Write a short timeline (move date, job dates, registration). Open the arriving or leaving section on this page, then use the tax return guide when you want filing-season words.",
      cautionLevel: "worth_checking",
      relatedToolKeys: ["taxReturnNl"],
      relatedAnchors: [{ id: "arrival-departure-year", label: "Arriving or leaving (this page)" }],
      officialSourceKeys: ["bd_filing_return"],
    },
    {
      id: "signal-foreign-wealth",
      title: "You still have savings or investments abroad",
      whyItMatters:
        "The savings-and-investments part of the yearly form can matter even when pay felt “finished” each month. If your money still spans countries, learning a few words early keeps surprises smaller later.",
      recommendedAction:
        "Read the savings abroad section below. If the amounts are meaningful, pair it with the tax residency guide — then decide if you only need clarity or a short paid review.",
      cautionLevel: "worth_checking",
      relatedGuideKeys: ["taxResidencyNl"],
      relatedAnchors: [{ id: "foreign-box3", label: "Savings abroad & Box 3 (this page)" }],
      officialSourceKeys: ["bd_income_tax_individuals"],
    },
    {
      id: "signal-foreign-income",
      title: "You receive income from outside the Netherlands",
      whyItMatters:
        "Income from another country changes which questions come first. Each country pair is different — start with your facts in a short list before you copy a random thread.",
      recommendedAction:
        "Use the double tax awareness tool for a simple checklist, then use official guidance or a tax adviser if the amounts or countries make this high-stakes.",
      cautionLevel: "consider_support",
      relatedToolKeys: ["doubleTax"],
      relatedAnchors: [{ id: "double-tax", label: "Two countries (this page)" }],
      officialSourceKeys: ["bd_international_en"],
    },
    {
      id: "signal-remote-cross-border",
      title: "You work remotely across borders",
      whyItMatters:
        "Hybrid and remote work can make “where work is taxed” less obvious than one office address. Treating that as a planning question early usually saves stress later.",
      recommendedAction:
        "Use double tax awareness together with the employment-type tool so talks with HR or a tax adviser start from clearer questions.",
      cautionLevel: "consider_support",
      relatedToolKeys: ["doubleTax", "employmentType"],
      relatedAnchors: [{ id: "double-tax", label: "Two countries (this page)" }],
      officialSourceKeys: ["bd_international_en"],
    },
    {
      id: "signal-thirty-percent",
      title: "You may qualify for the 30% ruling",
      whyItMatters:
        "Offers often mention it before the paperwork exists. Who qualifies and what payroll does still follow a process you can map calmly with HR.",
      recommendedAction:
        "Try a few numbers in the ruling calculator, then read the 30% ruling section on this page so your expectations match what payroll can actually do.",
      cautionLevel: "simple",
      relatedToolKeys: ["ruling"],
      relatedGuideKeys: ["thirtyPercentRulingGuide"],
      relatedAnchors: [{ id: "thirty-percent-ruling", label: "30% ruling (this page)" }],
      officialSourceKeys: ["bd_30_percent_facility"],
    },
    {
      id: "signal-family-allowances",
      title: "You have partner or children benefit questions",
      whyItMatters:
        "Insurance premiums, government benefits, and yearly-form items use different rules and sites. Keeping them separate helps you claim what you should without mixing them up.",
      recommendedAction:
        "Try healthcare allowance and childcare tools where they matter, then read the family & benefits section to see how they sit next to pay tax.",
      cautionLevel: "simple",
      relatedToolKeys: ["healthcare", "childcare"],
      relatedAnchors: [{ id: "family-allowances", label: "Family & benefits (this page)" }],
      officialSourceKeys: ["toeslagen_portal"],
    },
    {
      id: "signal-mixed-income",
      title: "You are self-employed or have mixed income",
      whyItMatters:
        "Invoices, business registration timing, or a job plus freelance work can change which parts of the form matter first. Habits from a simple job do not always carry over when clients or borders are involved.",
      recommendedAction:
        "Use the employment-type tool for vocabulary, then open the tax return guide. If invoices or borders are in play, consider paid help in line with the amounts.",
      cautionLevel: "consider_support",
      relatedToolKeys: ["employmentType"],
      relatedGuideKeys: ["taxReturnNl", "taxAdvisorsExpats"],
      relatedAnchors: [{ id: "employment-payslips", label: "Your job & payslip (this page)" }],
      officialSourceKeys: ["bd_income_tax_individuals"],
    },
    {
      id: "signal-leaving-soon",
      title: "You are leaving the Netherlands soon",
      whyItMatters:
        "A departure year is often the mirror of an arrival year: last pay, last tasks, and timing deserve the same calm checklist mindset.",
      recommendedAction:
        "Read the arriving or leaving section here, skim yearly-form basics in the big tax guide, and bookmark official filing help for your tax year.",
      cautionLevel: "worth_checking",
      relatedGuideKeys: ["taxReturnNl"],
      relatedTools: [{ kind: "link", href: `${taxGuideRoutes.taxGuideForExpats}#tax-return-basics`, label: "Tax guide — yearly form basics" }],
      relatedAnchors: [{ id: "arrival-departure-year", label: "Arriving or leaving (this page)" }],
      officialSourceKeys: ["bd_filing_return"],
    },
  ],
} as const;
