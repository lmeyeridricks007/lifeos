/**
 * Maps primary visa/move routes to document category IDs and route metadata.
 * Used by the readiness engine to determine required vs optional documents.
 */

import type { DocumentCategoryId, PrimaryRoute } from "./document-categories";

export type RouteDocumentMapEntry = {
  route: PrimaryRoute;
  label: string;
  criticalDocs: DocumentCategoryId[];
  highDocs: DocumentCategoryId[];
  optionalDocs: DocumentCategoryId[];
  visaGuideHref: string;
};

const BASE = "/netherlands";

export const ROUTE_DOCUMENT_MAP: RouteDocumentMapEntry[] = [
  {
    route: "highly-skilled-migrant",
    label: "Highly Skilled Migrant",
    criticalDocs: ["passport", "employment-contract"],
    highDocs: ["salary-proof", "birth-certificate", "address-housing", "insurance-awareness"],
    optionalDocs: ["marriage-certificate", "child-documents", "proof-of-funds"],
    visaGuideHref: `${BASE}/visa/highly-skilled-migrant/`,
  },
  {
    route: "eu-blue-card",
    label: "EU Blue Card",
    criticalDocs: ["passport", "employment-contract"],
    highDocs: ["salary-proof", "birth-certificate", "address-housing", "insurance-awareness"],
    optionalDocs: ["marriage-certificate", "child-documents", "proof-of-funds"],
    visaGuideHref: `${BASE}/visa/eu-blue-card/`,
  },
  {
    route: "self-employed",
    label: "Self-Employed",
    criticalDocs: ["passport", "business-documents"],
    highDocs: ["proof-of-funds", "birth-certificate", "address-housing", "insurance-awareness"],
    optionalDocs: ["marriage-certificate", "child-documents", "salary-proof"],
    visaGuideHref: `${BASE}/visa/self-employed-visa/`,
  },
  {
    route: "daft",
    label: "DAFT",
    criticalDocs: ["passport", "business-documents"],
    highDocs: ["proof-of-funds", "birth-certificate", "address-housing", "insurance-awareness"],
    optionalDocs: ["marriage-certificate", "child-documents"],
    visaGuideHref: `${BASE}/visa/dutch-american-friendship-treaty/`,
  },
  {
    route: "student",
    label: "Student",
    criticalDocs: ["passport", "admission-letter", "proof-of-funds"],
    highDocs: ["birth-certificate", "address-housing", "insurance-awareness"],
    optionalDocs: ["marriage-certificate", "child-documents"],
    visaGuideHref: `${BASE}/visa/student-visa/`,
  },
  {
    route: "partner-family",
    label: "Partner / Family",
    criticalDocs: ["passport", "marriage-certificate"],
    highDocs: ["salary-proof", "birth-certificate", "address-housing", "child-documents", "insurance-awareness"],
    optionalDocs: ["proof-of-funds"],
    visaGuideHref: `${BASE}/visa/partner-family-visa/`,
  },
  {
    route: "not-sure",
    label: "Not sure yet",
    criticalDocs: ["passport"],
    highDocs: [
      "employment-contract",
      "business-documents",
      "admission-letter",
      "marriage-certificate",
      "proof-of-funds",
      "address-housing",
      "birth-certificate",
      "insurance-awareness",
    ],
    optionalDocs: ["child-documents", "salary-proof"],
    visaGuideHref: `${BASE}/visa-checker/`,
  },
];

export function getRouteDocumentMap(route: PrimaryRoute): RouteDocumentMapEntry | undefined {
  return ROUTE_DOCUMENT_MAP.find((m) => m.route === route);
}
