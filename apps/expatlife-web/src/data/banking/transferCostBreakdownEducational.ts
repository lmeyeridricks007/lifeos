import type { BankingTotalCostBreakdownItem, BankingTotalCostEquationSummary } from "@/components/banking/BankingTotalCostBreakdown";

/** Shared “what makes up transfer cost” copy — guide + transfer cost calculator tool. */
export const transferCostEducationalItems: readonly BankingTotalCostBreakdownItem[] = [
  {
    id: "fee",
    label: "Send fee",
    text: "The charge your bank or app shows up front — a flat amount, a percentage, or sometimes zero inside a plan.",
    chip: "Easy to spot",
  },
  {
    id: "fx-spread",
    label: "Exchange rate gap",
    text: "The gap between the rate you are offered and a fair rate you might see online or in the news. On many sends this matters more than the send fee.",
    chip: "Often largest",
  },
  {
    id: "receiver",
    label: "Fees on the other side",
    text: "The recipient’s bank may take a slice when the money lands — you might not see it on your own receipt.",
    chip: "Their bank",
  },
  {
    id: "timing",
    label: "When you press send",
    text: "Nights, weekends, and public holidays can change which rate or path your money takes — read the “last time today to send” notes before you confirm.",
    chip: "Timing",
  },
  {
    id: "intermediary",
    label: "Extra banks in the middle",
    text: "Some international paths pass through other banks along the way — each step can add a small fee or delay.",
    chip: "Some routes",
  },
] as const;

export const transferCostEducationalEquation: BankingTotalCostEquationSummary = {
  factors: ["Send fee", "Exchange rate gap", "Fees when money lands", "Timing", "Banks in between"],
  outcomeLine: "The real price is how much money arrives after everything — not a headline “low fee” on its own.",
  footnote:
    "This tool uses simple planning ranges only — not live rates or live prices. It is for learning the idea; always use each company’s own calculator for your amount and route.",
};
