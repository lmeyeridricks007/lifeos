import { TAX_RETURN_NL_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";

const R = taxGuideRoutes;

/**
 * Related tools & hubs for the tax-advisor guide — hrefs resolved from `taxGuideRoutes` for drift safety.
 * Reuse `beforePayingRows` (toolKey-driven) in other service guides; reuse `helpfulSections` for “more guides” grids.
 */
export const moneyTaxAdvisorRelatedTools = {
  beforePayingRows: [
    { id: "tbp-salary", title: "Dutch salary net calculator", body: "Rough take-home and ruling toggles — understand payroll-shaped questions first.", toolKey: "salaryNet" as const },
    { id: "tbp-30", title: "30% ruling calculator", body: "Eligibility prompts with tax-year configuration — not approval, but a structured rehearsal.", toolKey: "ruling" as const },
    { id: "tbp-slip", title: "Payslip decoder", body: "Turn slip lines into vocabulary before you pay someone to read the same PDF.", toolKey: "payslip" as const },
    { id: "tbp-dt", title: "Double tax awareness tool", body: "Early multi-country prompts — good prep for what to ask an adviser.", toolKey: "doubleTax" as const },
    { id: "tbp-res", title: "Tax residency guide", body: "Labels vs facts before you buy a residency opinion.", toolKey: "taxResidencyNl" as const },
    { id: "tbp-ret", title: "Tax return guide", body: "What the annual return actually settles after payroll.", toolKey: "taxReturnNl" as const },
  ] as const,

  helpfulSections: [
    {
      eyebrow: "Core Money guides",
      description: "Read the map, then decide whether to book time.",
      items: [
        { title: "Netherlands Tax Guide for Expats", description: "Hub for payroll, return, ruling, and allowances.", href: R.taxGuideForExpats, cta: "Open tax guide" },
        { title: "Expat Taxes in the Netherlands", description: "Scenario-first prompts for complex years.", href: R.expatTaxesGuide, cta: "Open expat taxes guide" },
        { title: "How Taxes Work in the Netherlands", description: "Plain-language system overview.", href: R.howTaxesWorkInNl, cta: "Open foundation guide" },
        { title: "Tax Residency in the Netherlands", description: "Ties and cross-border reading order.", href: R.taxResidencyNl, cta: "Open tax residency guide" },
        { title: "Tax Return in the Netherlands", description: "Annual filing orientation after payroll.", href: TAX_RETURN_NL_PATH, cta: "Open tax return guide" },
        { title: "30% ruling in the Netherlands", description: "Facility guide beside the calculator.", href: R.thirtyPercentRulingGuide, cta: "Open 30% ruling guide" },
      ],
    },
    {
      eyebrow: "Tax tools",
      description: "Each tool documents methodology on its own page.",
      items: [
        { title: "Dutch Salary Net Calculator", description: "Indicative gross-to-net — planning only.", href: R.salaryNet, cta: "Estimate net salary" },
        { title: "30% Ruling Calculator", description: "Eligibility-first modelling — confirm facts with payroll.", href: R.ruling, cta: "Check 30% ruling" },
        { title: "Payslip Decoder", description: "Understand withholding lines from a real slip.", href: R.payslip, cta: "Decode payslip" },
        { title: "Double Tax Awareness Tool", description: "Structured prompts when more than one country could matter.", href: R.doubleTax, cta: "Open double-tax tool" },
        { title: "Healthcare Allowance Estimator", description: "Zorgtoeslag-style planning — not Dienst Toeslagen.", href: R.healthcare, cta: "Estimate healthcare allowance" },
        { title: "Childcare Cost Estimator", description: "Budget childcare alongside take-home cash.", href: R.childcare, cta: "Estimate childcare costs" },
        { title: "Job Offer Comparison Tool", description: "Compare offers beyond headline gross.", href: R.jobOffer, cta: "Compare job offers" },
      ],
    },
    {
      eyebrow: "Hubs",
      items: [
        { title: "Money & tax tools hub", description: "Browse calculators and Money guides.", href: R.moneyTools, cta: "Browse Money tools" },
        { title: "Dutch taxes hub", description: "Taxes pillar landing and services context.", href: R.taxAdvisorsGuide, cta: "Open taxes hub" },
      ],
    },
  ] as const,
} as const;
