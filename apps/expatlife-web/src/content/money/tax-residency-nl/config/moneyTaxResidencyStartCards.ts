import type { MoneyTaxResidencyStartCardConfig } from "./moneyTaxResidencyTypes";

export const moneyTaxResidencyStartCards: readonly MoneyTaxResidencyStartCardConfig[] = [
  {
    id: "scope",
    title: "It changes what the Dutch return may ask about",
    intro:
      "Tax residency is mainly about scope: which income, assets, and dates may need to be considered in a Dutch filing context. For many employees the answer is simple, but arrival years and cross-border facts can widen the picture.",
    keyPoints: [
      "Make a list of salary, freelance income, benefits, dividends, rent, or other income by country",
      "Note savings, investments, property, or foreign accounts that may need Box-style review",
      "Keep the tax year in mind — moving in July is not the same as a full Dutch year",
    ],
  },
  {
    id: "facts-ties",
    title: "No single fact decides it on its own",
    intro:
      "Tax residency is usually read from the whole situation, not one checkbox. Registration helps the story, but advisers and official guidance may also look at where you actually live, work, keep family ties, and spend time.",
    keyPoints: [
      "Where your main home and household are during the year",
      "Where you physically work, not only where the employer is based",
      "Whether your partner, children, or long-term home are still abroad",
      "Registration, BSN, and municipality admin — useful evidence, not a complete answer",
    ],
  },
  {
    id: "cross-border",
    title: "Cross-border facts are where mistakes happen",
    intro:
      "A Dutch payslip does not automatically explain the whole tax year. Remote work, a foreign employer, old-country assets, or family split across countries can each add questions before you decide which guide or tool to open.",
    keyPoints: [
      "You worked from one country while being paid from another",
      "You had foreign salary, invoices, rental income, dividends, or pension income",
      "You kept investments, savings, crypto, or property outside the Netherlands",
      "Your household moved in stages or still has a home abroad",
    ],
  },
  {
    id: "not-diy-certainty",
    title: "Use tools to prepare better questions",
    intro:
      "Most people do not need a tax adviser for every question. Use tools and official pages first to name the issue clearly; if the facts are tangled, a scoped review is more useful when your dates, income, and assets are already organised.",
    keyPoints: [
      "Run the double-tax awareness tool when two countries could both care about the year",
      "Use the expat tax guide to find the right scenario language before searching forums",
      "Open Belastingdienst international pages when wording needs to be authoritative",
      "Ask an adviser a specific question, not “am I fine?”",
    ],
  },
] as const;
