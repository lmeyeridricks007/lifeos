import type { MoneyTaxReturnBoxCardConfig } from "./moneyTaxReturnTypes";

/** High-level Box 1–3 map for return prep — wording stays non-numeric. */
export const moneyTaxReturnBoxCards: readonly MoneyTaxReturnBoxCardConfig[] = [
  {
    id: "box1",
    title: "Box 1 — work and home-related income (broadly)",
    body: "Most employees see salary and closely related income topics here, along with some deductions where applicable. Wording follows Belastingdienst sections for the year.",
  },
  {
    id: "box2",
    title: "Box 2 — substantial interest / shareholding",
    body: "Relevant when you hold a meaningful stake in a company; not every employee touches this box.",
  },
  {
    id: "box3",
    title: "Box 3 — savings, investments, and wealth (broadly)",
    body: "Often important for expats with accounts or property abroad — treat official Box guidance as authoritative rather than forum summaries.",
  },
];
