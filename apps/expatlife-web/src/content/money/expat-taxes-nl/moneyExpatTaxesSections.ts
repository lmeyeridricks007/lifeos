import { expatTaxesNlRoutes as R } from "@/src/components/money/expat-taxes-nl/expatTaxesNlRoutes";
import type { MoneyExpatTaxesSectionConfig } from "./moneyExpatTaxesContent.types";

export const moneyExpatTaxesSections: readonly MoneyExpatTaxesSectionConfig[] = [
  {
    id: "employment-payslips",
    eyebrow: "Employment income",
    title: "Employment income, payroll, and payslips",
    subtitle: "Where most expats meet Dutch tax first — and why the payslip is a teaching tool, not the final chapter.",
    intro:
      "Most employees feel tax first as monthly withholding on a payslip — that is normal and useful.\n\nReturn-time topics can still appear later if your year had job changes, partner income, bonuses, or cross-border lines.",
    keyPoints: [
      "Gross offers are easy to compare — net is what you live on after payroll lines.",
      "Holiday allowance timing can make one month look odd if you only glance at a single slip.",
      "If labels confuse you, a payslip decoder beats guessing from screenshots.",
    ],
    relatedTools: [
      { kind: "tool", key: "payslip" },
      { kind: "tool", key: "salaryNet" },
      { kind: "tool", key: "jobOffer" },
    ],
    officialSourceKeys: ["bd_payroll_taxes", "bd_income_tax_individuals"],
  },
  {
    id: "thirty-percent-ruling",
    eyebrow: "30% ruling",
    title: "30% ruling and expat tax benefit context",
    subtitle: "Why this topic is offer-stage loud — and why payroll still has to match reality.",
    intro:
      "The 30% facility applies only to eligible incoming employees, within rules that change over time.\n\nRecruiters often mention it early — keep eligibility, paperwork, and payroll setup mentally separate from headline marketing language.",
    keyPoints: [
      "Employers are part of the process — not a solo DIY unlock.",
      "Use calculators for scenario sensitivity, not as proof of eligibility.",
      "If your package depends on the ruling, align HR, payroll, and your own expectations early.",
    ],
    relatedTools: [
      { kind: "tool", key: "thirtyPercentRulingGuide" },
      { kind: "tool", key: "ruling" },
      { kind: "tool", key: "salaryNet" },
      { kind: "tool", key: "jobOffer" },
    ],
    officialSourceKeys: ["bd_30_percent_facility"],
  },
  {
    id: "foreign-box3",
    eyebrow: "Wealth & reporting",
    title: "Foreign income, assets, and Box 3 awareness",
    subtitle: "Many people first hear “Box 3” at return time — even when a quick planning read would have been calmer.",
    memoryHook:
      "Think of Box 3 as “wealth-style reporting” in the return — not the same bucket as monthly wage tax on your payslip. If you still have meaningful savings or investments abroad, this label is worth recognising early.",
    intro:
      "Box 3 groups many savings and investments in the Dutch filing structure — definitions and thresholds follow the tax year.\n\n“Foreign” does not automatically mean “outside the return” — residency and reporting rules still matter.",
    keyPoints: [
      "Give yourself quiet time for this topic — it feels different from payslip tax, and that is common.",
      "If balances are meaningful, official guidance or a short scoped review beats forum threads.",
      "If you also have cross-border income, pair this section with double tax below.",
    ],
    relatedTools: [
      { kind: "tool", key: "doubleTax" },
      { kind: "link", href: R.taxGuideBroad, label: "Broad tax guide (boxes overview)" },
      { kind: "tool", key: "taxAdvisorsExpats", label: "When to consider tax help (guide)" },
    ],
    officialSourceKeys: ["bd_income_tax_individuals", "bd_international_en"],
  },
  {
    id: "arrival-departure-year",
    eyebrow: "Partial years",
    title: "Arrival, departure, and partial-year complexity",
    subtitle: "When the calendar year and your life year are not the same shape.",
    intro:
      "Mid-year moves can mean more than one employer, income in more than one country, or paperwork that does not fit a single tidy story.\n\nThat usually means more sections in a return — not that you did something wrong. Timelines and official letters matter more than vibes.",
    keyPoints: [
      "Keep a simple timeline: move dates, employment dates, and major asset events.",
      "Belastingdienst letters and portals are the operational source of truth for filing windows.",
      "If your story is split across borders, scoped professional help can be cheaper than rework.",
    ],
    relatedTools: [
      { kind: "link", href: `${R.taxGuideBroad}#tax-return-basics`, label: "Tax guide — return basics" },
      { kind: "tool", key: "taxesHub" },
      { kind: "tool", key: "workingNl" },
    ],
    officialSourceKeys: ["bd_filing_return", "bd_income_tax_individuals"],
  },
  {
    id: "family-allowances",
    eyebrow: "Household",
    title: "Partner, family, allowances, and household tax topics",
    subtitle: "When “tax life” is also premium life and toeslagen life — keep categories separate.",
    intro:
      "Allowances (for example healthcare allowance) use toeslagen mechanics — different portal, different rhythm than the annual return.\n\nOther household items may matter mainly at return time. Keeping the buckets separate prevents missed support or wrong expectations.",
    keyPoints: [
      "If premiums hurt cash flow, model healthcare allowance before you finalise housing choices.",
      "Childcare is both a lifestyle line and a benefits story — model it explicitly.",
      "Partner income can change filing decisions — do not assume independence without checking.",
    ],
    relatedTools: [
      { kind: "tool", key: "healthcare" },
      { kind: "tool", key: "childcare" },
      { kind: "tool", key: "col" },
    ],
    officialSourceKeys: ["toeslagen_portal", "gov_income_tax_allowances"],
  },
  {
    id: "double-tax",
    eyebrow: "Cross-border",
    title: "Double tax and cross-border questions",
    subtitle: "Turn a vague worry into a short checklist — then choose who verifies it.",
    intro:
      "Cross-border work and investments can raise questions about relief and timing — answers depend on facts and treaties.\n\nExpatCopilot helps you name the question class early — not to decide your country pair in one paragraph.",
    keyPoints: [
      "Treat treaties and timing as first-class details — not optional footnotes.",
      "If the numbers matter, scoped advice (one country pair, one year, one income type) is often enough.",
      "Use tools to learn what to ask — not to “prove” an outcome to an authority.",
    ],
    relatedTools: [
      { kind: "tool", key: "doubleTax" },
      { kind: "tool", key: "employmentType" },
      { kind: "tool", key: "taxAdvisorsExpats", label: "Optional paid-help guide" },
    ],
    officialSourceKeys: ["bd_international_en"],
  },
] as const;
