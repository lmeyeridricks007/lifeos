/**
 * Document categories and metadata for the Document Readiness Checker.
 * Used by the readiness engine to determine which documents apply to which routes and households.
 */

export type DocumentCategoryId =
  | "passport"
  | "employment-contract"
  | "salary-proof"
  | "business-documents"
  | "admission-letter"
  | "birth-certificate"
  | "marriage-certificate"
  | "child-documents"
  | "proof-of-funds"
  | "address-housing"
  | "insurance-awareness";

export type PrimaryRoute =
  | "highly-skilled-migrant"
  | "eu-blue-card"
  | "self-employed"
  | "daft"
  | "student"
  | "partner-family"
  | "not-sure";

export type HouseholdType =
  | "solo"
  | "partner"
  | "partner-and-children"
  | "children-only"
  | "not-sure";

export type DocumentCategoryEntry = {
  id: DocumentCategoryId;
  title: string;
  description: string;
  appliesToRoutes: PrimaryRoute[];
  appliesToHouseholdTypes: HouseholdType[];
  importanceLevel: "critical" | "high" | "medium" | "optional";
  commonComplexityFlags: Array<"translation" | "apostille" | "legalization" | "certification" | "replacement">;
  officialSourceTopics: string[];
  relatedGuideHref?: string;
};

export const DOCUMENT_CATEGORIES: DocumentCategoryEntry[] = [
  {
    id: "passport",
    title: "Passport",
    description: "Valid passport for identity, travel, and registration.",
    appliesToRoutes: [
      "highly-skilled-migrant",
      "eu-blue-card",
      "self-employed",
      "daft",
      "student",
      "partner-family",
      "not-sure",
    ],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "critical",
    commonComplexityFlags: [],
    officialSourceTopics: ["identity", "travel"],
    relatedGuideHref: "/netherlands/documents-needed-to-move-netherlands/",
  },
  {
    id: "employment-contract",
    title: "Employment contract / job offer",
    description: "Signed contract or formal job offer from a Dutch employer or recognized sponsor.",
    appliesToRoutes: ["highly-skilled-migrant", "eu-blue-card", "not-sure"],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "critical",
    commonComplexityFlags: ["certification"],
    officialSourceTopics: ["work", "sponsor"],
    relatedGuideHref: "/netherlands/visa/highly-skilled-migrant/",
  },
  {
    id: "salary-proof",
    title: "Salary / income proof",
    description: "Evidence of salary level or income for route requirements.",
    appliesToRoutes: ["highly-skilled-migrant", "eu-blue-card", "partner-family", "not-sure"],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "high",
    commonComplexityFlags: ["certification"],
    officialSourceTopics: ["income", "sponsor"],
    relatedGuideHref: "/netherlands/visa/eu-blue-card/",
  },
  {
    id: "business-documents",
    title: "Business plan / company documents",
    description: "Business plan, registration, or client documentation for self-employed routes.",
    appliesToRoutes: ["self-employed", "daft", "not-sure"],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "critical",
    commonComplexityFlags: ["certification", "translation"],
    officialSourceTopics: ["business", "KVK"],
    relatedGuideHref: "/netherlands/visa/dutch-american-friendship-treaty/",
  },
  {
    id: "admission-letter",
    title: "University admission / enrollment proof",
    description: "Proof of admission or enrollment at a qualifying Dutch educational institution.",
    appliesToRoutes: ["student", "not-sure"],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "critical",
    commonComplexityFlags: ["certification"],
    officialSourceTopics: ["study", "admission"],
    relatedGuideHref: "/netherlands/visa/student-visa/",
  },
  {
    id: "birth-certificate",
    title: "Birth certificate",
    description: "Civil record of birth; may need apostille or legalization.",
    appliesToRoutes: [
      "highly-skilled-migrant",
      "eu-blue-card",
      "self-employed",
      "daft",
      "student",
      "partner-family",
      "not-sure",
    ],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "high",
    commonComplexityFlags: ["apostille", "legalization", "translation", "replacement"],
    officialSourceTopics: ["civil documents", "identity"],
    relatedGuideHref: "/netherlands/document-legalization-netherlands/",
  },
  {
    id: "marriage-certificate",
    title: "Marriage / partnership certificate",
    description: "Proof of marriage or registered partnership for partner/family routes.",
    appliesToRoutes: ["partner-family", "highly-skilled-migrant", "eu-blue-card", "not-sure"],
    appliesToHouseholdTypes: ["partner", "partner-and-children"],
    importanceLevel: "critical",
    commonComplexityFlags: ["apostille", "legalization", "translation", "replacement"],
    officialSourceTopics: ["partner", "family", "civil documents"],
    relatedGuideHref: "/netherlands/visa/partner-family-visa/",
  },
  {
    id: "child-documents",
    title: "Child birth certificates / custody documents",
    description: "Birth certificates and any custody or parental authority documents for children.",
    appliesToRoutes: [
      "highly-skilled-migrant",
      "eu-blue-card",
      "self-employed",
      "daft",
      "student",
      "partner-family",
      "not-sure",
    ],
    appliesToHouseholdTypes: ["partner-and-children", "children-only"],
    importanceLevel: "high",
    commonComplexityFlags: ["apostille", "legalization", "translation", "replacement"],
    officialSourceTopics: ["family", "civil documents"],
    relatedGuideHref: "/netherlands/visa/partner-family-visa/",
  },
  {
    id: "proof-of-funds",
    title: "Proof of funds",
    description: "Evidence of sufficient funds for study, DAFT, or initial stay requirements.",
    appliesToRoutes: ["student", "daft", "self-employed", "partner-family", "not-sure"],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "high",
    commonComplexityFlags: ["certification"],
    officialSourceTopics: ["financial", "study amount", "DAFT investment"],
    relatedGuideHref: "/netherlands/visa/student-visa/",
  },
  {
    id: "address-housing",
    title: "Proof of housing / address",
    description: "Rental agreement, address confirmation, or proof of housing for registration.",
    appliesToRoutes: [
      "highly-skilled-migrant",
      "eu-blue-card",
      "self-employed",
      "daft",
      "student",
      "partner-family",
      "not-sure",
    ],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "high",
    commonComplexityFlags: [],
    officialSourceTopics: ["registration", "municipality"],
    relatedGuideHref: "/netherlands/register-address-netherlands/",
  },
  {
    id: "insurance-awareness",
    title: "Health insurance awareness / setup",
    description: "Awareness of mandatory health insurance and any documents needed for setup.",
    appliesToRoutes: [
      "highly-skilled-migrant",
      "eu-blue-card",
      "self-employed",
      "daft",
      "student",
      "partner-family",
      "not-sure",
    ],
    appliesToHouseholdTypes: ["solo", "partner", "partner-and-children", "children-only", "not-sure"],
    importanceLevel: "medium",
    commonComplexityFlags: [],
    officialSourceTopics: ["insurance", "registration"],
    relatedGuideHref: "/netherlands/health-insurance-netherlands/",
  },
];

export function getDocumentCategoriesForRouteAndHousehold(
  route: PrimaryRoute,
  household: HouseholdType
): DocumentCategoryEntry[] {
  return DOCUMENT_CATEGORIES.filter(
    (cat) =>
      (cat.appliesToRoutes.includes(route) || cat.appliesToRoutes.includes("not-sure")) &&
      (cat.appliesToHouseholdTypes.includes(household) || cat.appliesToHouseholdTypes.includes("not-sure"))
  );
}
