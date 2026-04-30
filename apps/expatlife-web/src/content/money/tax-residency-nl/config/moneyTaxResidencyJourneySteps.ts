import type { MoneyTaxResidencyJourneyStepConfig } from "./moneyTaxResidencyTypes";

const MOVE = {
  arrivalPlanner: "/netherlands/moving/tools/arrival-planner/",
  first90: "/netherlands/moving/tools/first-90-days/",
  municipality: "/netherlands/municipality-registration-netherlands/",
  bsn: "/netherlands/bsn-registration/",
  statusChanges: "/netherlands/moving/status-changes/",
  extensions: "/netherlands/moving/extensions-changes/",
} as const;

/** Editorial journey — tax vs Move links separated in config for future year/treaty overlays. */
export const moneyTaxResidencyJourneySteps: readonly MoneyTaxResidencyJourneyStepConfig[] = [
  {
    title: "Before arrival / before leaving",
    body:
      "Sketch dates, income sources in each country, and what might overlap in the calendar year — useful whether you are relocating in or planning an orderly exit.",
    examples: [
      "You move to the Netherlands in August but earned salary abroad from January to July.",
      "You leave the Netherlands in October but keep Dutch payroll or a Dutch home until December.",
      "Your job offer starts before your physical move date.",
    ],
    linkDefs: [
      { kind: "tool", key: "workingNl" },
      { kind: "tool", key: "jobOffer" },
      { kind: "tool", key: "expatTaxesGuide", label: "Expat taxes — scenario depth" },
      { kind: "link", href: "#arrival-departure-year", label: "Arrival & departure year (this page)" },
    ],
  },
  {
    title: "Registration and practical setup",
    body:
      "Address registration, BSN, and day-one services set facts that often sit next to tax questions — helpful admin context, not a complete residency answer on its own.",
    examples: [
      "You register at the municipality before your first Dutch payslip arrives.",
      "You receive a BSN, open a bank account, and start health insurance in different weeks.",
      "You have a temporary address first, then move into a long-term rental later.",
    ],
    linkDefs: [
      { kind: "link", href: MOVE.municipality, label: "Municipality registration" },
      { kind: "link", href: MOVE.bsn, label: "BSN registration" },
      { kind: "link", href: MOVE.arrivalPlanner, label: "Arrival planner" },
      { kind: "link", href: MOVE.first90, label: "First 90 days planner" },
    ],
  },
  {
    title: "Work and payroll setup",
    body:
      "Contract, employer / payroll entity, and withholding determine what hits your payslip — align vocabulary with how taxes work once you have real slips.",
    examples: [
      "A Dutch employer withholds payroll tax each month, but you still need the annual picture.",
      "You work in the Netherlands for a foreign employer or remote arrangement.",
      "Your contract, payroll country, and physical work location do not all match.",
    ],
    linkDefs: [
      { kind: "tool", key: "howTaxesWorkInNl", label: "How taxes work in the Netherlands" },
      { kind: "tool", key: "payslip", label: "Payslip decoder" },
      { kind: "tool", key: "salaryNet", label: "Net salary calculator" },
      { kind: "tool", key: "ruling", label: "30% ruling calculator" },
      { kind: "tool", key: "employmentType", label: "Employment type scenarios" },
    ],
  },
  {
    title: "Tax year transition",
    body:
      "Partial years, overlap income, or two countries asking questions are common here — collect dates and documents, then use signals and awareness tools before you assume a headline label.",
    examples: [
      "Two countries issued annual statements for the same calendar year.",
      "You had salary in one country and investment income in another.",
      "Your partner or children moved at a different time than you did.",
    ],
    linkDefs: [
      { kind: "link", href: "#tax-residency-signals", label: "Signals worth checking (this page)" },
      { kind: "link", href: "#arrival-departure-year", label: "Arrival & departure year (this page)" },
      { kind: "tool", key: "doubleTax", label: "Double tax awareness tool" },
    ],
  },
  {
    title: "Annual tax return",
    body:
      "Withholding is a running estimate; the return can still bring in deductions, household, assets, and cross-border lines when your year was not simple.",
    examples: [
      "Your Dutch jaaropgave covers only part of the year.",
      "You need to decide whether foreign assets or income belong in the return story.",
      "Your payroll looked normal, but the return asks questions outside the payslip.",
    ],
    linkDefs: [
      { kind: "tool", key: "howTaxesWorkInNl", label: "How taxes work — return framing" },
      { kind: "tool", key: "taxGuideForExpats", label: "Netherlands tax guide for expats" },
      { kind: "tool", key: "expatTaxesGuide", label: "Expat taxes in the Netherlands" },
    ],
  },
  {
    title: "Ongoing checks: family, assets, work location, status changes",
    body:
      "Later years still move: remote patterns, assets abroad, household changes, and immigration events — a light rhythm of check-ins beats guessing once a year.",
    examples: [
      "You start working remotely from another country for several weeks or months.",
      "You buy property, open an investment account, or keep assets abroad.",
      "Your partner starts work, children enter childcare, or your permit/employment status changes.",
    ],
    linkDefs: [
      { kind: "link", href: "#tax-residency-signals", label: "Signals worth checking (this page)" },
      { kind: "link", href: MOVE.statusChanges, label: "Status changes in the Netherlands" },
      { kind: "link", href: MOVE.extensions, label: "Extensions & changes" },
      { kind: "tool", key: "doubleTax", label: "Double tax awareness tool" },
      { kind: "tool", key: "childcare", label: "Childcare cost estimator" },
    ],
  },
] as const;
