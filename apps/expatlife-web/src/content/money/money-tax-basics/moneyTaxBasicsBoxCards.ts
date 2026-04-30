import type { MoneyTaxBasicsTaxBoxesConfig } from "./moneyTaxBasics.types";

export const moneyTaxBasicsBoxCards = {
  id: "tax-boxes",
  eyebrow: "Structure",
  title: "The three tax boxes explained",
  intro: "High-level filing lanes — not bank product names.",
  subtitle:
    "Three lanes in return language — not three bank accounts. Most employees spend most mental energy on Box 1; know when 2 or 3 could apply.",
  keyPoints: [
    "Boxes describe where topics sit in return language.",
    "Payslip lines are not labelled Box 1/2/3 — boxes help after you open the return story.",
  ],
  note: "Box 1 is the usual employee lane; Box 3 can still matter with savings, investments, or foreign assets — definitions are year-specific; confirm with official guidance.",
  cautionNote: "Always confirm definitions for your tax year on official sites — labels move slowly, tests can change.",
  relatedToolKeys: ["salaryNet", "payslip", "taxGuideForExpats", "expatTaxesGuide", "doubleTax"] as const,
  officialSourceKeys: ["bd_income_tax_individuals", "bd_international_en"] as const,
  cards: [
    {
      id: "box1",
      boxNumber: 1,
      plainName: "Work and home",
      simpleExplanation: "Wages and many home-related return topics — the default lane for employment stories.",
      commonExamples: [
        "You have a Dutch employment contract and receive monthly salary through payroll.",
        "You compare your jaaropgave with your payslips before the annual return.",
        "You own a home and need to check whether any home-related return items apply for your year.",
      ],
      whoShouldCare: "Employees, payslip-to-return comparers, homeowners with return-relevant home topics.",
      relatedToolKeys: ["salaryNet", "payslip"] as const,
      officialSourceKeys: ["bd_income_tax_individuals"] as const,
    },
    {
      id: "box2",
      boxNumber: 2,
      plainName: "Company / shareholding",
      simpleExplanation: "Significant company stake and related receipts — not the usual wage-only employee path.",
      commonExamples: [
        "You own a meaningful stake in a private company, not just a few listed shares in an app.",
        "You receive dividends or sell shares connected to a substantial interest-style situation.",
        "You are a founder, director-shareholder, or co-owner and salary alone does not describe your income story.",
      ],
      whoShouldCare: "Founders, co-owners, and anyone with AB / substantial interest questions.",
      relatedToolKeys: ["taxGuideForExpats"] as const,
      officialSourceKeys: ["bd_income_tax_individuals"] as const,
    },
    {
      id: "box3",
      boxNumber: 3,
      plainName: "Savings and investments",
      simpleExplanation: "Wealth reporting in the legal sense for the year — may differ from everyday “savings account” labels.",
      commonExamples: [
        "You keep savings or investments above simple day-to-day cash needs.",
        "You have a brokerage account, crypto, or investment portfolio outside your Dutch salary account.",
        "You own property abroad or left financial assets in another country after moving.",
      ],
      whoShouldCare: "People with savings, brokerage accounts, extra property, or foreign assets to align with NL filing concepts.",
      relatedToolKeys: ["expatTaxesGuide", "doubleTax"] as const,
      officialSourceKeys: ["bd_international_en", "bd_income_tax_individuals"] as const,
    },
  ],
} as const satisfies MoneyTaxBasicsTaxBoxesConfig;
