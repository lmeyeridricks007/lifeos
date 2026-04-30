import { expatTaxesNlRoutes as R } from "@/src/components/money/expat-taxes-nl/expatTaxesNlRoutes";
import type { MoneyExpatTaxesRiskSignalsShellConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesRiskSignals: MoneyExpatTaxesRiskSignalsShellConfig = {
  id: "early-tax-signals",
  eyebrow: "Check-in prompts",
  title: "Expat tax signals worth checking early",
  subtitle:
    "A gentle triage — not a verdict. If a line sounds familiar, open the linked section or tool before filing season compresses your patience.",
  intro:
    "Check-in levels mean more paperwork or moving parts — not a judgment. Use this block to route yourself, then confirm binding details with official guidance or an adviser if you need to.",
  cards: [
    {
      id: "signal-mid-year-move",
      title: "You moved during the tax year",
      whyItMatters:
        "Partial years often mean more sections in a return, more dates to align, and sometimes income or premiums that do not fit a clean twelve-month story.",
      recommendedAction:
        "Sketch a timeline (move date, job start, registration) and read the arrival/departure section on this page — then follow Belastingdienst guidance for your year.",
      cautionLevel: "medium",
      relatedToolKeys: [],
      relatedAnchors: [{ id: "arrival-departure-year", label: "Arrival & departure year (this page)" }],
      relatedServiceKeys: [],
      officialSourceKeys: ["bd_filing_return"],
    },
    {
      id: "signal-foreign-wealth",
      title: "You still have foreign savings or investments",
      whyItMatters:
        "Wealth-style reporting can surface before it feels intuitive if you are still mentally “banked” in another country.",
      recommendedAction:
        "Read foreign assets & Box 3 below, then decide whether you only need vocabulary or scoped professional confirmation.",
      cautionLevel: "medium",
      relatedToolKeys: [],
      relatedAnchors: [{ id: "foreign-box3", label: "Foreign assets & Box 3 (this page)" }],
      relatedServiceKeys: [],
      officialSourceKeys: ["bd_income_tax_individuals"],
    },
    {
      id: "signal-foreign-income",
      title: "You receive income from outside the Netherlands",
      whyItMatters:
        "Cross-border income can change which questions appear first — and assumptions from social threads are often country-wrong.",
      recommendedAction:
        "Run the double-tax awareness tool for structured prompts, then confirm facts with official international guidance or an adviser if stakes are high.",
      cautionLevel: "high",
      relatedToolKeys: ["doubleTax"],
      relatedAnchors: [],
      relatedServiceKeys: [],
      officialSourceKeys: ["bd_international_en"],
    },
    {
      id: "signal-remote-cross-border",
      title: "You work remotely across borders",
      whyItMatters:
        "Where work is taxed and how treaties interact are not always guessable from a job title — especially with hybrid patterns.",
      recommendedAction:
        "Pair double-tax awareness with employment type scenarios so you ask HR and advisers better questions, earlier.",
      cautionLevel: "high",
      relatedToolKeys: ["employmentType"],
      relatedAnchors: [],
      relatedServiceKeys: [],
      officialSourceKeys: ["bd_international_en"],
    },
    {
      id: "signal-thirty-percent",
      title: "You may qualify for the 30% ruling",
      whyItMatters:
        "Offers often mention the facility early — but eligibility and payroll setup still need a real process, not vibes.",
      recommendedAction:
        "Model indicative scenarios in the ruling calculator, then align with payroll using the 30% ruling section below.",
      cautionLevel: "low",
      relatedToolKeys: ["ruling"],
      relatedAnchors: [],
      relatedServiceKeys: [],
      officialSourceKeys: ["bd_30_percent_facility"],
    },
    {
      id: "signal-family-allowances",
      title: "You have partner, children, or allowance questions",
      whyItMatters:
        "Premiums, toeslagen, and return-time items use different mechanics — mixing them up causes missed support or wrong expectations.",
      recommendedAction:
        "Estimate healthcare allowance and childcare, then read family & allowances for how those lines sit beside salary tax.",
      cautionLevel: "low",
      relatedToolKeys: [],
      relatedAnchors: [{ id: "family-allowances", label: "Family & allowances (this page)" }],
      relatedServiceKeys: [],
      officialSourceKeys: ["toeslagen_portal"],
    },
    {
      id: "signal-mixed-income",
      title: "You are self-employed or have mixed income",
      whyItMatters:
        "Hybrid or freelance patterns change which reporting lines matter first — and DIY confidence from salaried friends may not transfer.",
      recommendedAction:
        "Use employment type scenarios for vocabulary, then consider scoped adviser help if invoices, VAT, or cross-border clients are in play.",
      cautionLevel: "high",
      relatedToolKeys: ["employmentType"],
      relatedAnchors: [],
      relatedServiceKeys: [],
      officialSourceKeys: ["bd_income_tax_individuals"],
    },
    {
      id: "signal-leaving-soon",
      title: "You are leaving the Netherlands soon",
      whyItMatters:
        "Departure years can reverse the “new arrival” problem — timing, final payroll, and last obligations deserve the same calm checklist mindset.",
      recommendedAction:
        "Read arrival/departure context here, then use the broad tax guide for return-cycle orientation and official sources for deadlines.",
      cautionLevel: "medium",
      relatedToolKeys: [] as const,
      relatedAnchors: [],
      relatedServiceKeys: [],
      relatedTools: [{ kind: "link", href: `${R.taxGuideBroad}#tax-return-basics`, label: "Tax guide — return basics" }],
      officialSourceKeys: ["bd_filing_return"],
    },
  ],
} as const;
