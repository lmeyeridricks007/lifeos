import type { MoneyTaxResidencySignalCardConfig } from "./moneyTaxResidencyTypes";

export const moneyTaxResidencySignalCards: readonly MoneyTaxResidencySignalCardConfig[] = [
  {
    id: "signal-mid-year-move",
    title: "You moved during the tax year",
    whyItMatters:
      "Arrival or departure mid-year often means overlapping payslips, registration timing, and questions about which country’s return language applies for which months — easy to postpone until deadlines feel loud.",
    recommendedAction:
      "Write down move-in / move-out dates, first and last Dutch payroll dates, and any income still tied to another country — then read partial-year orientation with those facts in front of you.",
    cautionLevel: "low",
    relatedToolKeys: ["expatTaxesGuide"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-family-abroad",
    title: "Your partner or family lives in another country",
    whyItMatters:
      "Household location can sit next to allowance rules, filing household concepts, and sometimes two countries asking questions in the same year — even when daily life feels stable.",
    recommendedAction:
      "Keep a plain list of where each person lived month by month (no storytelling) and skim official household / international pages before you assume one country “owns” the whole picture.",
    cautionLevel: "medium",
    relatedToolKeys: ["doubleTax"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-remote-cross-border",
    title: "You work remotely across borders",
    whyItMatters:
      "Days in each place, employer location, and payroll country can all be separate data points — forums often oversimplify; your facts may still be manageable with structure.",
    recommendedAction:
      "Track workdays by country for a sample month, note contract employer entity, and run the awareness tool if two countries could both care about the same income.",
    cautionLevel: "high",
    relatedToolKeys: ["doubleTax"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-foreign-employer-income",
    title: "You have a foreign employer or foreign income",
    whyItMatters:
      "Foreign invoices, dividends, rent, or salary can sit next to Dutch payroll in one calendar year — the return story is often wider than “only my Dutch payslip”.",
    recommendedAction:
      "List each income line by country and currency, gather year-end statements, and read expat tax scenario language for overlap years before you file from memory.",
    cautionLevel: "high",
    relatedToolKeys: ["expatTaxesGuide"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-property-abroad",
    title: "You still own property abroad",
    whyItMatters:
      "Property abroad can matter for reporting discussions and ties to another country even when you rent in the Netherlands — it is a common “I forgot to map this” item.",
    recommendedAction:
      "Collect ownership docs, mortgage or lease abroad, and any rental income; pair with official Box / international reading rather than assumptions from friends’ moves.",
    cautionLevel: "medium",
    relatedToolKeys: ["taxGuideForExpats"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-savings-abroad",
    title: "You have significant savings or investments abroad",
    whyItMatters:
      "Accounts and portfolios outside the Netherlands often deserve a deliberate look in return preparation — not because anything is wrong, but so you are not surprised later by Box-style questions.",
    recommendedAction:
      "Export year-end balances where you can, note account country, and walk the foreign assets sections in the expat tax guide at a calm pace.",
    cautionLevel: "medium",
    relatedToolKeys: ["expatTaxesGuide"],
    relatedServiceKeys: [],
  },
  {
    id: "signal-leaving-soon",
    title: "You are leaving the Netherlands soon",
    whyItMatters:
      "Departure-year filing, final payroll, and what you still report for the Dutch year can differ from your travel date — a little planning avoids a rushed January.",
    recommendedAction:
      "Read emigration / departure-year orientation, list expected last Dutch income, and note what might continue abroad after you leave.",
    cautionLevel: "medium",
    relatedToolKeys: [],
    relatedServiceKeys: [],
    primaryLink: { href: "#arrival-departure-year", label: "Arrival & departure year (this page)" },
  },
  {
    id: "signal-dual-payroll",
    title: "You have both Dutch and foreign payroll or income in one year",
    whyItMatters:
      "Two pay streams can be totally normal after a move — they still deserve a clean timeline so withholding, treaty ideas, and return sections are not guessed in a hurry.",
    recommendedAction:
      "Align payslips by month (your payslip decoder can help read Dutch lines), mark currency and gross/net, then use double-tax awareness if both countries might assert questions on the same income.",
    cautionLevel: "high",
    relatedToolKeys: ["doubleTax", "payslip"],
    relatedServiceKeys: [],
  },
] as const;
