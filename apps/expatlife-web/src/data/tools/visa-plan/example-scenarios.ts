/**
 * Example scenarios for the Visa Application Plan tool.
 * Used to prefill the tool and show "Use this scenario" CTAs.
 */

import type { VisaApplicationPlanAnswers } from "@/src/lib/visa-plan/types";

export type VisaPlanExampleScenario = {
  id: string;
  title: string;
  summary: string;
  prefilledAnswers: Partial<VisaApplicationPlanAnswers>;
};

export const EXAMPLE_SCENARIOS: VisaPlanExampleScenario[] = [
  {
    id: "indian-engineer-hsm",
    title: "Indian engineer moving on Highly Skilled Migrant route",
    summary: "Non-EU professional with a Dutch job offer from a recognized sponsor; early preparation stage.",
    prefilledAnswers: {
      primaryRoute: "highly-skilled-migrant",
      countryCode: "india",
      citizenshipCategory: "non-eu",
      householdType: "just-me",
      includesPets: false,
      applicationStage: "gathering-documents",
      documentReadinessLevel: "some-ready",
      missingDocumentAreas: ["employer-contract", "civil-documents", "translations-apostille"],
      targetMoveWindow: "3-6-months",
      hasFixedStartDate: false,
      practicalSetupNeeds: ["temporary-housing", "bank-account", "insurance"],
    },
  },
  {
    id: "us-entrepreneur-daft",
    title: "US entrepreneur comparing DAFT planning",
    summary: "American planning to work as self-employed in the Netherlands under DAFT.",
    prefilledAnswers: {
      primaryRoute: "daft",
      countryCode: "united-states",
      citizenshipCategory: "non-eu",
      householdType: "just-me",
      includesPets: false,
      applicationStage: "chosen-route",
      documentReadinessLevel: "some-ready",
      missingDocumentAreas: ["business-docs", "civil-documents"],
      targetMoveWindow: "6-plus-months",
      hasFixedStartDate: false,
      practicalSetupNeeds: ["temporary-housing", "long-term-housing", "bank-account"],
    },
  },
  {
    id: "uk-student",
    title: "UK student planning for Dutch university",
    summary: "Non-EU student with admission; planning visa and move timeline.",
    prefilledAnswers: {
      primaryRoute: "student",
      countryCode: "united-kingdom",
      citizenshipCategory: "non-eu",
      householdType: "just-me",
      includesPets: false,
      applicationStage: "gathering-documents",
      documentReadinessLevel: "most-ready",
      missingDocumentAreas: [],
      targetMoveWindow: "3-6-months",
      hasFixedStartDate: true,
      practicalSetupNeeds: ["temporary-housing", "long-term-housing", "flights"],
    },
  },
  {
    id: "south-african-partner",
    title: "South African partner–family move",
    summary: "Joining a partner in the Netherlands; gathering relationship and sponsor docs.",
    prefilledAnswers: {
      primaryRoute: "partner-family",
      countryCode: "south-africa",
      citizenshipCategory: "non-eu",
      householdType: "partner",
      includesPets: false,
      applicationStage: "gathering-documents",
      documentReadinessLevel: "some-ready",
      missingDocumentAreas: ["partner-family-docs", "civil-documents", "translations-apostille"],
      targetMoveWindow: "6-plus-months",
      hasFixedStartDate: false,
      practicalSetupNeeds: ["long-term-housing", "municipality-registration", "flights"],
    },
  },
  {
    id: "solo-self-employed",
    title: "Solo self-employed consultant move",
    summary: "Non-DAFT self-employed professional preparing business and viability docs.",
    prefilledAnswers: {
      primaryRoute: "self-employed",
      countryCode: "germany",
      citizenshipCategory: "eu",
      householdType: "just-me",
      includesPets: false,
      applicationStage: "chosen-route",
      documentReadinessLevel: "barely-started",
      missingDocumentAreas: ["business-docs", "civil-documents"],
      targetMoveWindow: "6-plus-months",
      hasFixedStartDate: false,
      practicalSetupNeeds: ["temporary-housing", "bank-account", "insurance"],
    },
  },
  {
    id: "family-work-sponsor",
    title: "Family move with work sponsor",
    summary: "HSM or Blue Card move with partner and children; school and housing planning.",
    prefilledAnswers: {
      primaryRoute: "highly-skilled-migrant",
      countryCode: "india",
      citizenshipCategory: "non-eu",
      householdType: "partner-and-children",
      includesPets: false,
      applicationStage: "ready-to-apply",
      documentReadinessLevel: "most-ready",
      missingDocumentAreas: [],
      targetMoveWindow: "1-3-months",
      hasFixedStartDate: true,
      practicalSetupNeeds: ["long-term-housing", "school-family-setup", "municipality-registration"],
    },
  },
];
