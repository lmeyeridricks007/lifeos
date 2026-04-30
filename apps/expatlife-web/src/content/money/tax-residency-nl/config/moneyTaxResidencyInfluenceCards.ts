import type { MoneyTaxResidencyInfluenceCardConfig } from "./moneyTaxResidencyTypes";

export const moneyTaxResidencyInfluenceCards: readonly MoneyTaxResidencyInfluenceCardConfig[] = [
  {
    id: "time",
    title: "Where you live most of the time",
    body:
      "Presence is about the pattern of the year: where you sleep, where you return after trips, and whether time abroad is occasional travel or a real second base.",
    examples: [
      "You spend weekdays in the Netherlands but work several long remote blocks abroad.",
      "You arrive mid-year and split the calendar between two homes.",
      "You travel often for business but your normal home base stays in the Netherlands.",
    ],
  },
  {
    id: "home",
    title: "Where your home and household are",
    body:
      "Home is more than a postal address. Lease dates, ownership, where your belongings are, and where everyday life admin happens can help explain the tax-year story.",
    examples: [
      "You keep a long-term rental in the Netherlands while your old-country home is still available.",
      "Your mail, health insurance, school, and bank admin move to the Netherlands at different times.",
      "You stay in temporary housing first, then sign a permanent lease months later.",
    ],
  },
  {
    id: "family",
    title: "Where your partner and family are",
    body:
      "Household facts can affect how you read partner, allowance, and family-related questions. The important part is to document who lived where, and when.",
    examples: [
      "You move first and your partner or children arrive later in the year.",
      "Your partner keeps working abroad while you start Dutch payroll.",
      "Childcare, school, or allowance questions start before the whole household is settled.",
    ],
  },
  {
    id: "work",
    title: "Where you work and earn income",
    body:
      "Work location, employer location, payroll country, and contract type can point in different directions. Map the facts instead of assuming the payslip tells the whole story.",
    examples: [
      "You live in the Netherlands but remain employed by a foreign company.",
      "You work partly from another country while Dutch payroll continues.",
      "You switch from employee to contractor or receive invoices and salary in the same year.",
    ],
  },
  {
    id: "assets",
    title: "Where your assets and accounts are",
    body:
      "Savings, investments, property, and accounts abroad can matter even when your salary is straightforward. This is where many people discover that the return is not only about payroll.",
    examples: [
      "You keep brokerage or savings accounts in your previous country.",
      "You own a home abroad, whether rented out, empty, or used by family.",
      "You hold crypto, shares, or investments outside your Dutch bank account.",
    ],
  },
  {
    id: "timing",
    title: "Arrival, departure, and old-country ties",
    body:
      "Transition years create overlap: old-country income, Dutch payroll, registration dates, and family timing can all sit in the same calendar year.",
    examples: [
      "You earn foreign salary before arrival and Dutch salary after arrival in the same year.",
      "You leave the Netherlands but receive final Dutch payments after moving.",
      "You close accounts, sell property, or end a lease after your physical move date.",
    ],
  },
] as const;
