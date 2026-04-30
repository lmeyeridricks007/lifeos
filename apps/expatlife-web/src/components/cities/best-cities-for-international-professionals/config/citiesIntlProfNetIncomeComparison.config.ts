/** Illustrative planning snapshot — not tax advice, not live payroll output. */
export type NetIncomeComparisonExample = {
  id: string;
  city: string;
  grossAnnual: string;
  monthlyDisposable: string;
  /** One line on what the stack assumes (household, rent band, commute). */
  context: string;
};

export const citiesIntlProfNetIncomeEquationLabels = {
  salary: "Salary (before tax)",
  tax: "Tax & social contributions",
  rent: "Rent",
  transport: "Travel",
  result: "≈ Rough spending money / month",
} as const;

export const citiesIntlProfNetIncomeExamples: NetIncomeComparisonExample[] = [
  {
    id: "amsterdam-illustrative",
    city: "Amsterdam",
    grossAnnual: "€70,000",
    monthlyDisposable: "~€2,000",
    context: "Example single renter, inner-ring rent, bike + public transport — higher salary before tax, thinner margin after housing.",
  },
  {
    id: "eindhoven-illustrative",
    city: "Eindhoven",
    grossAnnual: "€60,000",
    monthlyDisposable: "~€2,500",
    context: "Example same lifestyle bar, softer rent, shorter/cheaper travel — lower salary before tax, more room after fixed costs.",
  },
];
