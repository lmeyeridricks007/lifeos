import type { MoneyTaxResidencyRelatedToolsSectionConfig } from "./moneyTaxResidencyTypes";

/** Grouped internal tools vs Move — edit here to keep tax and immigration CTAs explicit. */
export const moneyTaxResidencyRelatedTools: readonly MoneyTaxResidencyRelatedToolsSectionConfig[] = [
  {
    eyebrow: "Foundation & expat tax guides",
    description: "Read the map before you chase a single calculator output.",
    items: [
      {
        title: "How Taxes Work in the Netherlands",
        description: "Plain-English payroll vs return and boxes — helpful before residency edges.",
        toolKey: "howTaxesWorkInNl",
        cta: "Open foundation guide",
      },
      {
        title: "Netherlands Tax Guide for Expats",
        description: "Breadth: payslips, ruling, Box 3 language, and how topics connect.",
        toolKey: "taxGuideForExpats",
        cta: "Open tax guide",
      },
      {
        title: "Expat Taxes in the Netherlands",
        description: "Scenario-led depth when your year or income is not “standard employee only”.",
        toolKey: "expatTaxesGuide",
        cta: "Open expat tax scenarios",
      },
      {
        title: "Tax return in the Netherlands",
        description: "What the annual return does, preparation, and how payroll withholding connects — orientation only.",
        toolKey: "taxReturnNl",
        cta: "Open tax return guide",
      },
    ],
  },
  {
    eyebrow: "Cross-border & salary tools",
    description: "Awareness tools and indicative numbers — each page documents its own limits.",
    items: [
      {
        title: "Double Tax Awareness Tool",
        description: "Early structure for multi-country questions — not a treaty or residency verdict.",
        toolKey: "doubleTax",
        cta: "Check double-tax awareness",
      },
      {
        title: "Dutch Salary Net Calculator",
        description: "Rough take-home when Dutch employment is in scope — not a residency test.",
        toolKey: "salaryNet",
        cta: "Estimate net salary",
      },
      {
        title: "30% Ruling Calculator",
        description: "Facility planning only; payroll and eligibility facts still matter separately.",
        toolKey: "ruling",
        cta: "Open 30% ruling calculator",
      },
      {
        title: "Payslip Decoder",
        description: "Understand withholding lines once you have a real slip.",
        toolKey: "payslip",
        cta: "Decode payslip",
      },
      {
        title: "Job Offer Comparison Tool",
        description: "Compare packages beyond gross when you are choosing between roles.",
        toolKey: "jobOffer",
        cta: "Compare offers",
      },
      {
        title: "Employment Type Scenario Tool",
        description: "Employee vs contractor vs ZZP trade-offs that often sit next to tax questions.",
        toolKey: "employmentType",
        cta: "Open employment scenarios",
      },
    ],
  },
  {
    eyebrow: "Household & location context",
    description: "Pair tax residency questions with rent, city, and family costs.",
    items: [
      {
        title: "Cost of Living Calculator",
        description: "Monthly bands by city and household — planning support, not a tax outcome.",
        toolKey: "col",
        cta: "Open calculator",
      },
      {
        title: "Rent Affordability Calculator",
        description: "Stress-test housing against net cash once salary direction is clearer.",
        toolKey: "rent",
        cta: "Check rent affordability",
      },
    ],
  },
  {
    eyebrow: "Move — permits & work setup",
    description: "Immigration and work pages that often change in the same years as tax residency transitions.",
    items: [
      {
        title: "Visas & residency",
        description: "Stay routes and terminology — complementary to tax residency, not interchangeable.",
        href: "/netherlands/moving/visas-residency/",
        cta: "Open visas & residency",
      },
      {
        title: "Residence permits in the Netherlands",
        description: "Permit purpose and renewals — still not automatic answers for every tax filing question.",
        href: "/netherlands/moving/residence-permits/",
        cta: "Open residence permits",
      },
      {
        title: "Working in the Netherlands",
        description: "Offers, contracts, payroll timing, and first-month money on a work-led move.",
        toolKey: "workingNl",
        cta: "Open working in NL",
      },
      {
        title: "Money & tax tools hub",
        description: "Browse calculators and hubs in one place.",
        toolKey: "moneyTools",
        cta: "Browse Money tools",
      },
    ],
  },
] as const;
