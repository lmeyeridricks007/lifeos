import type { DoubleTaxAwarenessInput } from "./types";
import { DEFAULT_DOUBLE_TAX_AWARENESS_INPUT } from "./types";

export type ScenarioPreset = {
  id: string;
  title: string;
  summary: string;
  input: DoubleTaxAwarenessInput;
};

const base = DEFAULT_DOUBLE_TAX_AWARENESS_INPUT;

export const DOUBLE_TAX_SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    id: "sa-to-nl-employee",
    title: "Employee moving from South Africa to NL with Dutch employer",
    summary: "Likely Dutch residency planning signal with lower complexity when income is mainly Dutch payroll and foreign links are limited.",
    input: {
      ...base,
      mainOtherCountryCode: "ZA",
      employerCountryCode: "NL",
      incomeTypes: ["salary_dutch_employer"],
      toolMode: "moving_to_netherlands",
    },
  },
  {
    id: "nl-resident-spain-rental",
    title: "NL resident with rental income from Spain",
    summary: "Dutch residency likely; foreign property income is often taxable in the property country but may still require Dutch declaration context.",
    input: {
      ...base,
      mainOtherCountryCode: "ES",
      rentalIncomeCountryCode: "ES",
      incomeTypes: ["salary_dutch_employer", "rental_income_abroad"],
      toolMode: "already_in_netherlands",
    },
  },
  {
    id: "uk-remote-amsterdam",
    title: "Remote worker employed by UK company while living in Amsterdam",
    summary: "Foreign employer with Dutch workdays often increases payroll and filing coordination risk.",
    input: {
      ...base,
      employerCountryCode: "GB",
      mainOtherCountryCode: "GB",
      employerInNl: "no",
      payrollInNl: "no",
      incomeTypes: ["salary_remote_work", "salary_foreign_employer"],
      toolMode: "remote_foreign_employer",
    },
  },
  {
    id: "freelancer-split-presence",
    title: "Freelancer splitting time between NL and abroad",
    summary: "Mixed presence plus self-employment commonly raises treaty review, documentation, and filing complexity.",
    input: {
      ...base,
      monthsInNetherlands: 6,
      monthsInOtherMainCountry: 6,
      permanentHomeAbroad: "yes",
      workLocationPattern: "mixed",
      incomeTypes: ["freelance_self_employed", "foreign_business_income"],
      toolMode: "working_cross_border",
    },
  },
  {
    id: "couple-one-foreign-income",
    title: "Couple moving to NL with one foreign income stream",
    summary: "Household relocation with mixed-source income often creates dual filing needs and stronger record-keeping requirements.",
    input: {
      ...base,
      mainOtherCountryCode: "US",
      employerCountryCode: "NL",
      investmentIncomeCountryCode: "US",
      incomeTypes: ["salary_dutch_employer", "dividends_investments"],
      toolMode: "multiple_country_income",
    },
  },
];
