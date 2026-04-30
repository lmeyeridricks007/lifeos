import type { MoneyTaxGuideBoxSectionConfig } from "./taxGuideContent.types";

export const moneyTaxGuideBoxCards: MoneyTaxGuideBoxSectionConfig = {
  id: "box-123",
  eyebrow: "Filing structure",
  title: "Box 1, 2, 3 — the short version",
  subtitle: "Three buckets in the return — not three personality types.",
  cautionNote:
    "Box 3 often matters for expats with savings or investments abroad — residency still decides whether you declare. Confirm rather than assume.",
  cards: [
    {
      id: "box1",
      title: "Box 1",
      intro: "Work and many home-related items — where most employees spend their time in the return.",
      keyPoints: [],
      cautionNote: "",
      relatedTools: [],
      officialSourceKeys: ["bd_income_tax_individuals"],
    },
    {
      id: "box2",
      title: "Box 2",
      intro: "Substantial company shareholdings — not your normal payslip job.",
      keyPoints: [],
      cautionNote: "",
      relatedTools: [],
      officialSourceKeys: [],
    },
    {
      id: "box3",
      title: "Box 3",
      intro:
        "Wealth-style reporting for savings and investments — rules and thresholds change by year; treat online numbers as orientation.",
      keyPoints: [],
      cautionNote: "",
      relatedTools: [],
      officialSourceKeys: ["bd_income_tax_individuals", "gov_income_tax_allowances"],
    },
  ],
  relatedTools: [{ kind: "tool", key: "doubleTax" }],
  officialSourceKeys: ["bd_income_tax_individuals"],
};
