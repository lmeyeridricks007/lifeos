import { expatTaxesNlRoutes as R } from "@/src/components/money/expat-taxes-nl/expatTaxesNlRoutes";
import { taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import type { TaxJourneyFlowStep } from "@/src/components/money/tax-guide-for-expats/TaxJourneyFlow";

/**
 * Simple expat tax journey for the Netherlands Money pillar — plain language; links use `R` / `taxGuideRoutes`.
 */
export const moneyExpatTaxesJourneyFlowSteps: readonly TaxJourneyFlowStep[] = [
  {
    number: 1,
    title: "Before you move / before you sign",
    body: "Try rough numbers early: compare job offers and guess take-home pay so monthly life feels realistic before you commit — still a guess until Dutch payroll is set up.",
    links: [
      { label: "Job offer comparison", href: R.jobOffer },
      { label: "Net salary estimator", href: R.salaryNet },
      { label: "Cost of living (budget picture)", href: R.col },
    ],
  },
  {
    number: 2,
    title: "Pay is set up at work",
    body: "Contract wording, 30% ruling forms if they apply, and what is taken from pay all land here — between HR and what you will see on your slips.",
    links: [
      { label: "Employment type scenarios", href: R.employmentType },
      { label: "30% ruling calculator", href: R.ruling },
      { label: "Working in the Netherlands", href: R.workingNl },
    ],
  },
  {
    number: 3,
    title: "First payslip",
    body: "This is where Dutch tax feels real: gross, net, insurance lines, and labels. Think of the slip as a map, not the full story for the whole year.",
    links: [
      { label: "Decode payslip", href: R.payslip },
      { label: "Net salary estimator", href: R.salaryNet },
    ],
  },
  {
    number: 4,
    title: "The year you arrive or leave",
    body: "Part-year life, when you registered, and sometimes money in more than one country show up here — before a “normal” full year exists.",
    links: [
      { label: "Arriving or leaving (this page)", href: "#arrival-departure-year" },
      { label: "Big-picture tax guide", href: R.taxGuideBroad },
    ],
  },
  {
    number: 5,
    title: "Yearly tax form",
    body: "What came out of your pay was a running guess; the yearly form can still settle extras, family items, and foreign lines when your year was not simple.",
    links: [
      { label: "Tax return in the Netherlands", href: R.taxReturnNl },
      { label: "Tax guide — yearly form basics", href: `${taxGuideRoutes.taxGuideForExpats}#tax-return-basics` },
    ],
  },
  {
    number: 6,
    title: "Later: ruling, savings abroad, benefits, family changes",
    body: "Ruling checks, savings abroad on the form, benefits, and family events can shift later years — small check-ins beat big surprises at the deadline.",
    links: [
      { label: "30% ruling calculator", href: R.ruling },
      { label: "30% ruling guide", href: R.thirtyPercentRulingGuide },
      { label: "Savings abroad (this page)", href: "#foreign-box3" },
      { label: "Healthcare allowance", href: R.healthcare },
      { label: "Childcare cost estimator", href: R.childcare },
      { label: "Double tax awareness", href: R.doubleTax },
      { label: "Family & benefits (this page)", href: "#family-allowances" },
      { label: "Early signals (this page)", href: "#early-tax-signals" },
    ],
  },
];
