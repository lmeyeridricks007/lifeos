/**
 * Example visa cost scenarios for prefill and "Use this scenario" CTAs.
 */

import type { VisaCostCalculatorAnswers } from "./types";

export type VisaCostExampleScenario = {
  id: string;
  title: string;
  explanation: string;
  costEmphasis: string;
  prefilledAnswers: Partial<VisaCostCalculatorAnswers>;
};

const BASE_PARTIAL: Partial<VisaCostCalculatorAnswers> = {
  documentReadinessLevel: "partly-ready",
  includedCostCategories: ["flights", "temporary-housing", "first-week-admin", "bank-phone-insurance"],
  tempHousingDuration: "2-weeks",
};

export const EXAMPLE_SCENARIOS: VisaCostExampleScenario[] = [
  {
    id: "indian-hsm",
    title: "Indian software engineer on HSM route",
    explanation: "Non-EU professional with a Dutch job offer from a recognized sponsor; typical document and travel costs from India.",
    costEmphasis: "Official fee €423; document prep and long-haul flights often €2,000–5,000+.",
    prefilledAnswers: {
      ...BASE_PARTIAL,
      primaryRoute: "highly-skilled-migrant",
      countryCode: "india",
      travelDistanceBand: "long-haul",
      householdType: "solo",
      includesPets: false,
      sponsorStatus: "yes",
      workAgeBand: "30-or-over",
      documentComplexityFlags: ["translation", "apostille", "legalization"],
    },
  },
  {
    id: "us-daft",
    title: "US entrepreneur on DAFT",
    explanation: "American planning to set up a business in the Netherlands under the Dutch-American Friendship Treaty.",
    costEmphasis: "Application €423; investment €4,500+; business setup, travel, and first weeks often €8,000–15,000+.",
    prefilledAnswers: {
      ...BASE_PARTIAL,
      primaryRoute: "daft",
      countryCode: "united-states",
      travelDistanceBand: "long-haul",
      householdType: "solo",
      includesPets: false,
      entrepreneurMode: "daft",
      businessStage: "planning",
      documentComplexityFlags: ["apostille"],
    },
  },
  {
    id: "uk-student",
    title: "UK student moving for university",
    explanation: "Non-EU student with admission to a Dutch university; study permit and proof of funds.",
    costEmphasis: "Application €254; proof-of-funds and first-month setup; travel and housing from UK.",
    prefilledAnswers: {
      ...BASE_PARTIAL,
      primaryRoute: "student",
      countryCode: "united-kingdom",
      travelDistanceBand: "medium-haul",
      householdType: "solo",
      includesPets: false,
      studyType: "university-hbo",
      documentComplexityFlags: [],
    },
  },
  {
    id: "south-african-family",
    title: "South African family on partner route",
    explanation: "Partner and children joining a sponsor already in the Netherlands.",
    costEmphasis: "Adult fee €210, child €45; MVV if needed; documents and long-haul flights for family.",
    prefilledAnswers: {
      ...BASE_PARTIAL,
      primaryRoute: "partner-family",
      countryCode: "south-africa",
      travelDistanceBand: "long-haul",
      householdType: "partner-and-children",
      includesPets: false,
      partnerJoiningSponsor: "yes",
      sponsorIncomeStatus: "yes",
      documentComplexityFlags: ["translation", "apostille", "legalization"],
    },
  },
  {
    id: "solo-freelancer",
    title: "Solo freelancer on self-employed route",
    explanation: "Non-DAFT freelancer applying for the self-employed residence permit.",
    costEmphasis: "Application €423; business docs and viability; document prep and move costs.",
    prefilledAnswers: {
      ...BASE_PARTIAL,
      primaryRoute: "self-employed",
      countryCode: "germany",
      travelDistanceBand: "nearby-europe",
      householdType: "solo",
      includesPets: false,
      entrepreneurMode: "self-employed",
      businessStage: "existing-clients",
      documentComplexityFlags: ["certified-copies"],
    },
  },
  {
    id: "couple-blue-card-vs-hsm",
    title: "Couple comparing Blue Card vs HSM",
    explanation: "Two work routes; similar official fee; different salary and eligibility rules.",
    costEmphasis: "Both €423 application fee; total planning cost similar; compare salary thresholds and employer fit.",
    prefilledAnswers: {
      ...BASE_PARTIAL,
      primaryRoute: "eu-blue-card",
      countryCode: "india",
      travelDistanceBand: "long-haul",
      householdType: "partner",
      includesPets: false,
      sponsorStatus: "yes",
      workAgeBand: "30-or-over",
      documentComplexityFlags: ["apostille", "translation"],
    },
  },
];
