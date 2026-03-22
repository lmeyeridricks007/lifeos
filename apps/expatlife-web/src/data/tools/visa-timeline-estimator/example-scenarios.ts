/**
 * Example scenarios for the Visa Timeline Estimator.
 * Used to prefill the tool and show "Use this scenario" CTAs.
 */

import type { VisaTimelineEstimatorAnswers } from "@/src/lib/visa-timeline-estimator/types";

export interface VisaTimelineExampleScenario {
  id: string;
  title: string;
  summary: string;
  timingEmphasis: string;
  prefilledAnswers: Partial<VisaTimelineEstimatorAnswers>;
}

export const EXAMPLE_SCENARIOS: VisaTimelineExampleScenario[] = [
  {
    id: "india-hsm",
    title: "Indian software engineer on Highly Skilled Migrant route",
    summary: "Non-EU professional with a Dutch job offer from a recognized sponsor; estimating full timeline from doc prep to move.",
    timingEmphasis: "Sponsor submission and IND 90-day decision; doc prep often 1–2 months.",
    prefilledAnswers: {
      primaryRoute: "highly-skilled-migrant",
      countryCode: "india",
      travelDistanceBand: "long-haul",
      currentStage: "gathering-documents",
      documentReadinessLevel: "some-ready",
      documentBottleneck: "employer-contract",
      sponsorReadyStatus: "yes",
      applicationStartedWithEmployer: "no",
      includedTimingAreas: ["temporary-housing", "flights-travel", "municipality-registration", "bank-phone-insurance"],
      targetMoveWindow: "3-6-months",
    },
  },
  {
    id: "us-daft",
    title: "US entrepreneur comparing DAFT timing",
    summary: "American planning to work as self-employed in the Netherlands under DAFT.",
    timingEmphasis: "Business doc prep and 90-day IND decision; plan 3–6 months total.",
    prefilledAnswers: {
      primaryRoute: "daft",
      countryCode: "united-states",
      travelDistanceBand: "long-haul",
      currentStage: "chosen-route",
      documentReadinessLevel: "some-ready",
      documentBottleneck: "business-docs",
      businessReadinessStatus: "no",
      stillDecidingDaftVsSelfEmployed: "no",
      includedTimingAreas: ["temporary-housing", "flights-travel", "bank-phone-insurance"],
      targetMoveWindow: "6-plus-months",
    },
  },
  {
    id: "uk-student",
    title: "UK student moving for university",
    summary: "Non-EU student with admission; planning visa and move timeline.",
    timingEmphasis: "Institution submits application; 60-day decision period typical.",
    prefilledAnswers: {
      primaryRoute: "student",
      countryCode: "united-kingdom",
      travelDistanceBand: "nearby-europe",
      currentStage: "gathering-documents",
      documentReadinessLevel: "most-ready",
      admissionReadyStatus: "yes",
      studyStartDateFixed: "yes",
      includedTimingAreas: ["temporary-housing", "flights-travel", "municipality-registration"],
      targetMoveWindow: "3-6-months",
    },
  },
  {
    id: "south-african-partner",
    title: "South African partner–family move",
    summary: "Joining a partner in the Netherlands; relationship and sponsor docs in progress.",
    timingEmphasis: "Partner route has 90-day decision period; civil docs and sponsor proof can add lead time.",
    prefilledAnswers: {
      primaryRoute: "partner-family",
      countryCode: "south-africa",
      travelDistanceBand: "long-haul",
      currentStage: "gathering-documents",
      documentReadinessLevel: "some-ready",
      documentBottleneck: "partner-family-docs",
      sponsorSituationClear: "yes",
      familyDocReadinessStatus: "no",
      includedTimingAreas: ["temporary-housing", "flights-travel", "family-school", "municipality-registration"],
      targetMoveWindow: "6-plus-months",
    },
  },
  {
    id: "self-employed-consultant",
    title: "Self-employed consultant still preparing documents",
    summary: "Non-DAFT self-employed professional; business and viability docs not yet complete.",
    timingEmphasis: "Self-employed route can take 90 days (or longer if extended); doc prep is critical.",
    prefilledAnswers: {
      primaryRoute: "self-employed",
      countryCode: "germany",
      travelDistanceBand: "nearby-europe",
      currentStage: "chosen-route",
      documentReadinessLevel: "barely-started",
      documentBottleneck: "business-docs",
      businessReadinessStatus: "no",
      stillDecidingDaftVsSelfEmployed: "no",
      includedTimingAreas: ["temporary-housing", "bank-phone-insurance"],
      targetMoveWindow: "6-plus-months",
    },
  },
  {
    id: "couple-two-months",
    title: "Couple trying to move within 2 months",
    summary: "One partner has job offer; both want to move soon. Checking if timeline is realistic.",
    timingEmphasis: "Aggressive target; depends on submission date and IND processing.",
    prefilledAnswers: {
      primaryRoute: "highly-skilled-migrant",
      countryCode: "india",
      travelDistanceBand: "long-haul",
      currentStage: "ready-to-apply",
      documentReadinessLevel: "most-ready",
      sponsorReadyStatus: "yes",
      applicationStartedWithEmployer: "yes",
      includedTimingAreas: ["temporary-housing", "flights-travel", "municipality-registration", "bank-phone-insurance"],
      targetMoveWindow: "1-3-months",
    },
  },
];
