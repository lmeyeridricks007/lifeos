import type { MoneyTaxBasicsRelatedToolsConfig } from "./moneyTaxBasics.types";

export const moneyTaxBasicsRelatedTools = {
  id: "helpful-tools",
  eyebrow: "Tools & guides",
  title: "Helpful tools and related guides",
  intro: "Each link answers a different question — combine them rather than chasing one “super number”.",
  keyPoints: [] as const,
  cautionNote: "Tool outputs are planning-only — read each tool’s own methodology page.",
  relatedToolKeys: [] as const,
  officialSourceKeys: [] as const,
  sections: [
    {
      eyebrow: "Guides",
      description: "Orientation before you chase every calculator result.",
      keyPoints: [] as const,
      relatedToolKeys: ["taxResidencyNl", "taxReturnNl", "taxGuideForExpats", "expatTaxesGuide"] as const,
      officialSourceKeys: [] as const,
      items: [
        {
          title: "Tax residency in the Netherlands",
          intro: "Separate tax residency from permits and BSN — practical questions before treaty detail.",
          ctaLabel: "Open tax residency guide",
          toolKey: "taxResidencyNl",
        },
        {
          title: "Tax return in the Netherlands",
          intro: "Annual return orientation: what filing can settle, what to prepare, and how payroll withholding connects — not a filing portal.",
          ctaLabel: "Open tax return guide",
          toolKey: "taxReturnNl",
        },
        {
          title: "Netherlands Tax Guide for Expats",
          intro: "Practical expat-facing map when you need more than this foundation page.",
          ctaLabel: "Open tax guide",
          toolKey: "taxGuideForExpats",
        },
        {
          title: "Expat Taxes in the Netherlands",
          intro: "Scenario-first lane when your situation is cross-border or non-standard.",
          ctaLabel: "Open scenario guide",
          toolKey: "expatTaxesGuide",
        },
      ],
    },
    {
      eyebrow: "Salary & payroll",
      description: "Connect gross offers to payslip reality and take-home cash.",
      relatedToolKeys: ["salaryNet", "ruling", "payslip", "jobOffer"] as const,
      officialSourceKeys: ["bd_payroll_taxes"] as const,
      items: [
        {
          title: "Dutch Salary Net Calculator",
          intro: "Rough gross-to-net with common toggles — each tool documents its own limits.",
          ctaLabel: "Estimate net salary",
          toolKey: "salaryNet",
        },
        {
          title: "30% Ruling Calculator",
          intro: "Indicative eligibility scenarios — confirm with payroll or an adviser.",
          ctaLabel: "Check 30% ruling",
          toolKey: "ruling",
        },
        {
          title: "Payslip Decoder",
          intro: "Turn real line items into plain language once you are employed.",
          ctaLabel: "Decode payslip",
          toolKey: "payslip",
        },
        {
          title: "Job Offer Comparison Tool",
          intro: "Compare offers beyond gross salary headlines.",
          ctaLabel: "Compare offers",
          toolKey: "jobOffer",
        },
      ],
    },
    {
      eyebrow: "Household & cross-border",
      description: "Allowances and flags that often sit next to income tax in real life.",
      relatedToolKeys: ["doubleTax", "healthcare", "childcare", "col"] as const,
      officialSourceKeys: ["toeslagen_portal", "bd_international_en"] as const,
      items: [
        {
          title: "Double Tax Awareness Tool",
          intro: "Structured prompts when more than one country could be in scope.",
          ctaLabel: "Check double-tax awareness",
          toolKey: "doubleTax",
        },
        {
          title: "Healthcare Allowance Estimator",
          intro: "Zorgtoeslag-style planning — not Dienst Toeslagen.",
          ctaLabel: "Estimate healthcare allowance",
          toolKey: "healthcare",
        },
        {
          title: "Childcare Cost Estimator",
          intro: "Budget childcare alongside rent and take-home cash.",
          ctaLabel: "Estimate childcare costs",
          toolKey: "childcare",
        },
        {
          title: "Cost of Living Calculator",
          intro: "City-level spending context to pair with tax estimates.",
          ctaLabel: "Open COL calculator",
          toolKey: "col",
        },
      ],
    },
  ],
} as const satisfies MoneyTaxBasicsRelatedToolsConfig;
