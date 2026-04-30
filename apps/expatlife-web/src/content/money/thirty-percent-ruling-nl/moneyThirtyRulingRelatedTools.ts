import type { MoneyTaxGuideToolKey } from "../tax-guide-for-expats/taxGuideContent.types";

type RelatedToolSectionItem = {
  title: string;
  description: string;
  /** Primary CTA resolves through `resolveTaxGuideTool`. */
  toolKey: MoneyTaxGuideToolKey;
  /** Optional button label; defaults to registry label. */
  ctaLabel?: string;
};

type RelatedToolSection = {
  eyebrow: string;
  description: string;
  items: readonly RelatedToolSectionItem[];
};

/** “Helpful tools” grid — keys only; hrefs resolved in `buildThirtyPercentRulingNlPageModel`. */
export const moneyThirtyRulingRelatedTools: {
  sections: readonly RelatedToolSection[];
} = {
  sections: [
    {
      eyebrow: "Planning tools",
      description: "Each tool documents methodology and limits on its own page.",
      items: [
        {
          title: "30% Ruling Calculator",
          description: "Likely eligibility and indicative allowance — not an approval.",
          toolKey: "ruling",
        },
        {
          title: "Dutch Salary Net Calculator",
          description: "Gross-to-net alongside optional ruling structure — indicative only.",
          toolKey: "salaryNet",
        },
        {
          title: "Job Offer Comparison Tool",
          description: "Compare offers when components beyond gross differ.",
          toolKey: "jobOffer",
          ctaLabel: "Compare job offers",
        },
        {
          title: "Payslip Decoder",
          description: "Understand withholding lines once payroll is live.",
          toolKey: "payslip",
          ctaLabel: "Decode payslip",
        },
      ],
    },
    {
      eyebrow: "Guides & hubs",
      description: "Read context before treating one calculator output as the whole story.",
      items: [
        {
          title: "Netherlands Tax Guide for Expats",
          description: "Broad payroll, ruling, return, and Box orientation.",
          toolKey: "taxGuideForExpats",
          ctaLabel: "Open tax guide",
        },
        {
          title: "Expat Taxes in the Netherlands",
          description: "Scenario-first depth for complex years.",
          toolKey: "expatTaxesGuide",
          ctaLabel: "Open expat taxes guide",
        },
        {
          title: "How Taxes Work in the Netherlands",
          description: "Plain-language Dutch tax system map.",
          toolKey: "howTaxesWorkInNl",
          ctaLabel: "Open foundation guide",
        },
        {
          title: "Tax Return in the Netherlands",
          description: "What the annual return does after payroll.",
          toolKey: "taxReturnNl",
          ctaLabel: "Open tax return guide",
        },
        {
          title: "Working in the Netherlands",
          description: "Move guide: offer, contract, payroll, first-month money.",
          toolKey: "workingNl",
          ctaLabel: "Open working guide",
        },
        {
          title: "Money & tax tools hub",
          description: "Browse calculators and Money guides.",
          toolKey: "moneyTools",
          ctaLabel: "Browse Money tools",
        },
      ],
    },
  ],
} as const;
