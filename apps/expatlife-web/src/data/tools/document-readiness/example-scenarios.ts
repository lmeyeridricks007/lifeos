/**
 * Example scenarios for the Document Readiness Checker.
 * Used to prefill the tool and show "Use this example" CTAs.
 */

import type { DocumentReadinessAnswers } from "@/src/lib/document-readiness/readinessEngine";

export type ExampleScenario = {
  id: string;
  title: string;
  summary: string;
  documentFocus: string;
  /** Partial answers to prefill the tool */
  prefilledAnswers: Partial<DocumentReadinessAnswers>;
};

export const EXAMPLE_SCENARIOS: ExampleScenario[] = [
  {
    id: "indian-engineer-hsm",
    title: "Indian engineer with employer-sponsored move",
    summary: "Non-EU professional with a Dutch job offer from a recognized sponsor; HSM or EU Blue Card route.",
    documentFocus: "Passport, employment contract, salary proof, birth certificate, address proof.",
    prefilledAnswers: {
      countryCode: "india",
      citizenshipCategory: "non-eu",
      primaryRoute: "highly-skilled-migrant",
      householdType: "solo",
      jobOfferStatus: "yes",
      currentDocumentStatuses: {
        passport: "ready",
        "employment-contract": "ready",
        "salary-proof": "ready",
        "birth-certificate": "not_ready",
        "address-housing": "not_sure",
      },
      complexityFlags: ["apostille", "legalization", "translation"],
    },
  },
  {
    id: "us-founder-daft",
    title: "US founder exploring DAFT",
    summary: "American planning to work as self-employed in the Netherlands under DAFT.",
    documentFocus: "Passport, business documents, proof of funds, civil documents.",
    prefilledAnswers: {
      countryCode: "united-states",
      citizenshipCategory: "non-eu",
      primaryRoute: "daft",
      householdType: "solo",
      businessDocumentStatus: "partly",
      currentDocumentStatuses: {
        passport: "ready",
        "business-documents": "not_ready",
        "proof-of-funds": "ready",
        "birth-certificate": "not_ready",
        "address-housing": "not_ready",
      },
      complexityFlags: ["apostille"],
    },
  },
  {
    id: "uk-student",
    title: "UK student preparing for university",
    summary: "Non-EU student with or expecting admission to Dutch education.",
    documentFocus: "Passport, admission letter, proof of funds, birth certificate, housing.",
    prefilledAnswers: {
      countryCode: "united-kingdom",
      citizenshipCategory: "non-eu",
      primaryRoute: "student",
      householdType: "solo",
      studyAdmissionStatus: "yes",
      currentDocumentStatuses: {
        passport: "ready",
        "admission-letter": "ready",
        "proof-of-funds": "ready",
        "birth-certificate": "ready",
        "address-housing": "not_ready",
      },
      complexityFlags: ["apostille"],
    },
  },
  {
    id: "south-african-family-partner",
    title: "South African family joining partner in the Netherlands",
    summary: "Family relocating to join a sponsor in the Netherlands; partner and children.",
    documentFocus: "Passport, marriage certificate, birth certificates, proof of relationship, address.",
    prefilledAnswers: {
      countryCode: "south-africa",
      citizenshipCategory: "non-eu",
      primaryRoute: "partner-family",
      householdType: "partner-and-children",
      relationshipProofStatus: "partly",
      currentDocumentStatuses: {
        passport: "ready",
        "marriage-certificate": "ready",
        "child-documents": "not_ready",
        "birth-certificate": "ready",
        "address-housing": "not_sure",
      },
      complexityFlags: ["apostille", "legalization", "replacement"],
    },
  },
  {
    id: "self-employed-consultant-solo",
    title: "Self-employed consultant planning a solo move",
    summary: "Non-DAFT entrepreneur or freelancer preparing for the self-employed visa route.",
    documentFocus: "Passport, business plan, client documentation, proof of funds, civil documents.",
    prefilledAnswers: {
      countryCode: "germany",
      citizenshipCategory: "eu",
      primaryRoute: "self-employed",
      householdType: "solo",
      businessDocumentStatus: "no",
      currentDocumentStatuses: {
        passport: "ready",
        "business-documents": "not_ready",
        "proof-of-funds": "not_sure",
        "birth-certificate": "ready",
        "address-housing": "not_ready",
      },
      complexityFlags: [],
    },
  },
  {
    id: "eu-blue-card-couple",
    title: "Couple moving on EU Blue Card",
    summary: "Primary applicant with job offer; partner joining on family permit.",
    documentFocus: "Passport, employment contract, salary proof, marriage certificate, address.",
    prefilledAnswers: {
      countryCode: "india",
      citizenshipCategory: "non-eu",
      primaryRoute: "eu-blue-card",
      householdType: "partner",
      jobOfferStatus: "yes",
      currentDocumentStatuses: {
        passport: "ready",
        "employment-contract": "ready",
        "salary-proof": "ready",
        "marriage-certificate": "ready",
        "address-housing": "not_ready",
      },
      complexityFlags: ["apostille", "translation"],
    },
  },
];
