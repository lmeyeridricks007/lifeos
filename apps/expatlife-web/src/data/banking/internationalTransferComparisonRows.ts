import type { TraditionalDigitalComparisonRow } from "@/src/data/banking/traditionalDigitalComparison";

/** Editorial bank vs digital vs send-money lens for international sends — not live pricing. */
export const internationalTransferProviderComparisonRows = [
  {
    id: "visible-fees",
    label: "Fees you see upfront",
    traditional:
      "Lines on the bank’s price list — often a flat fee or a percent when you send outside countries that use the euro, or when you change money to another currency. Check the account you actually use.",
    digital:
      "Plans sometimes include a bundle of sends; other times you pay per send or when you hit limits. Weekend or “express” options can add cost.",
    hybrid:
      "A clear send fee plus what happens on the exchange rate — use the company’s own calculator instead of the marketing headline.",
  },
  {
    id: "exchange-rate",
    label: "How fair the exchange rate is",
    traditional:
      "Often a standard bank rate — compare how much money arrives with another tool at the same minute.",
    digital:
      "Can be strong on common paths within the limits of your plan — read rules for money outside the euro.",
    hybrid:
      "Usually built around clear calculators — still check the exact country, amount, and how the money is paid out.",
  },
  {
    id: "speed",
    label: "How fast it arrives",
    traditional:
      "Weekday handling is normal; unusual countries or large amounts can take longer.",
    digital:
      "Money can move quickly inside the app; reaching someone else’s bank account still follows bank hours and checks.",
    hybrid:
      "Can feel very fast between app balances; a normal bank deposit on the other end may still take working days.",
  },
  {
    id: "convenience",
    label: "Ease of use",
    traditional:
      "One bank you already use for salary and rent — fewer logins, but not always the best rate on big sends abroad.",
    digital:
      "Strong phone apps — still check that Dutch billers and your employer accept the account you pick.",
    hybrid:
      "Built for sending abroad — one extra login, but clear steps when you repeat the same send.",
  },
  {
    id: "transparency",
    label: "How easy it is to understand the bill",
    traditional:
      "Long PDF price lists — complete once you find the right line, slower to skim.",
    digital:
      "Differs by brand — some screens are clear, others hide details in the small print of your plan; save a quote when unsure.",
    hybrid:
      "Usually starts with a price calculator — keep a screenshot or PDF before you send a large amount.",
  },
  {
    id: "best-use",
    label: "When this type often fits (our view)",
    traditional:
      "Large one-off sends when you want one trusted bank handling the full process.",
    digital:
      "Travel and several currencies next to a Dutch everyday account — watch subscription limits.",
    hybrid:
      "Money home every month or invoices in another currency when calculators beat your bank — still check what arrives.",
  },
] as const satisfies readonly TraditionalDigitalComparisonRow[];
