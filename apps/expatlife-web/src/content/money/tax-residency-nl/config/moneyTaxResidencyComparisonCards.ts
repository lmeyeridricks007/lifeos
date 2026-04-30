import type { MoneyTaxResidencyComparisonCardConfig } from "./moneyTaxResidencyTypes";

/** Large tax vs immigration contrast — kept beside the comparison grid for separation of tax vs Move framing. */
export const moneyTaxResidencyComparisonProminentContrast = {
  taxTitle: "Tax residency",
  taxScan: "Belastingdienst / income-tax world — what income, assets, boxes, and international lines may belong in the Dutch tax year.",
  immTitle: "Immigration / permit",
  immScan: "IND / right-to-stay world — whether you may live here, under which permit route, with which sponsor or renewal rules.",
} as const;

export const moneyTaxResidencyComparisonCards: readonly MoneyTaxResidencyComparisonCardConfig[] = [
  {
    id: "immigration",
    concept: "Immigration / residence status",
    plainEnglishExplanation: "This is the permission-to-stay question. It is about your legal basis for living in the Netherlands, not the scope of your income tax return.",
    whatItDoes: "Answers questions like: Which permit route do I use? Do I need a sponsor? When do I renew? Can I work under this status?",
    whatItDoesNotDecide:
      "A valid residence permit does not automatically answer whether foreign income, assets, or a partial Dutch year need attention in the tax return.",
    relatedLinks: [
      { kind: "link", href: "/netherlands/moving/visas-residency/", label: "Visas & residency" },
      { kind: "link", href: "/netherlands/moving/residence-permits/", label: "Residence permits in the Netherlands" },
    ],
  },
  {
    id: "muni",
    concept: "Municipality registration / BSN",
    plainEnglishExplanation: "This is local admin: address registration and identification. It creates practical records and unlocks services, but it is not the full tax-residency test.",
    whatItDoes: "Helps with a BSN, address record, DigiD-style admin, bank/insurance setup, and facts you may later use when organising your tax-year timeline.",
    whatItDoesNotDecide:
      "Being registered at a Dutch address is important, but it does not by itself settle foreign employer, foreign asset, treaty, or part-year filing questions.",
    relatedLinks: [
      { kind: "link", href: "/netherlands/municipality-registration-netherlands/", label: "Municipality registration" },
      { kind: "link", href: "/netherlands/bsn-registration/", label: "BSN registration" },
    ],
  },
  {
    id: "tax-res",
    concept: "Tax residency",
    plainEnglishExplanation: "This is the tax-scope question: for a period or year, are you treated as resident for Dutch tax purposes, non-resident, or something more nuanced?",
    whatItDoes: "Can affect which income and assets may need review, whether Box 3 or foreign lines deserve attention, and how you read official return guidance.",
    whatItDoesNotDecide:
      "It is not usually proven by one screenshot or one admin step. Dates, home, work, family, income, and cross-border facts can all matter.",
    relatedLinks: [
      { kind: "tool", key: "howTaxesWorkInNl", label: "How taxes work in the Netherlands" },
      { kind: "tool", key: "expatTaxesGuide", label: "Expat taxes in the Netherlands" },
    ],
  },
  {
    id: "filing",
    concept: "Tax filing position",
    plainEnglishExplanation: "This is the practical return question: once the year is over, what does the Dutch return ask you to declare or confirm?",
    whatItDoes: "Determines the sections, questions, documents, and return language you deal with for that specific tax year.",
    whatItDoesNotDecide:
      "Filing can still be more nuanced than a simple label when you arrive, leave, keep assets abroad, or have income in more than one country.",
    relatedLinks: [
      { kind: "tool", key: "expatTaxesGuide", label: "Expat taxes in the Netherlands" },
      { kind: "tool", key: "doubleTax", label: "Double tax awareness tool" },
    ],
  },
] as const;
