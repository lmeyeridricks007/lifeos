export type PayslipGlossaryEntry = { term: string; definition: string; matchNeedles: string[] };

/** Static glossary for on-page SEO and the results panel. `matchNeedles` tie to `notableTerms` / text search. */
export const PAYSLIP_GLOSSARY: PayslipGlossaryEntry[] = [
  {
    term: "Bruto loon",
    definition: "Gross wages before most payroll deductions — not the same as what lands in your bank account.",
    matchNeedles: ["bruto"],
  },
  {
    term: "Netto loon",
    definition: "Net wages after payroll withholdings shown on the slip — still not identical to annual income tax settled later.",
    matchNeedles: ["netto"],
  },
  {
    term: "Loonheffing",
    definition: "Payroll withholding for wage tax and wage-related social components handled through your employer.",
    matchNeedles: ["loonheffing"],
  },
  {
    term: "Vakantiegeld / vakantietoeslag",
    definition: "Statutory holiday allowance (often ~8%); accrual and payout timing depend on your contract and employer practice.",
    matchNeedles: ["vakantie"],
  },
  {
    term: "Pensioenpremie",
    definition: "Pension premium split between employee and employer when a scheme applies — caps and rules depend on the fund or insurer.",
    matchNeedles: ["pensioen"],
  },
  {
    term: "SV-loon / sociale premies",
    definition: "Wage bases and employee premiums for social insurance may appear under several labels on real payslips.",
    matchNeedles: ["sv", "sociale", "premie"],
  },
  {
    term: "Belastbaar loon",
    definition: "Taxable wage used in payroll withholding can differ from contract gross because of allowances, corrections, or exemptions.",
    matchNeedles: ["belastbaar"],
  },
  {
    term: "Bijzonder tarief",
    definition: "A special withholding percentage the employer may apply in specific situations — not the same as your final annual tax rate.",
    matchNeedles: ["bijzonder"],
  },
  {
    term: "Vergoeding",
    definition: "Reimbursement or allowance lines; tax and social treatment depends on the type.",
    matchNeedles: ["vergoeding"],
  },
  {
    term: "Inhouding",
    definition: "A generic label for amounts withheld — read the adjacent description for what it is.",
    matchNeedles: ["inhouding"],
  },
  {
    term: "Reservering",
    definition: "Amounts set aside on the payslip (for example holiday accrual) depending on employer presentation.",
    matchNeedles: ["reservering"],
  },
];
