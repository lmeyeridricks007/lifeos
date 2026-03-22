/**
 * Typed state model for the Netherlands visa checker tool.
 * Used by the multi-step form and the recommendation engine.
 */

export type CitizenshipCategory =
  | "eu-eea-ch"
  | "united-states"
  | "united-kingdom"
  | "india"
  | "south-africa"
  | "other";

export type MovePurpose =
  | "work"
  | "business"
  | "study"
  | "partner-family"
  | "exploring";

export type YesNoUnsure = "yes" | "no" | "unsure";

export type SalaryRange =
  | "under-45k"
  | "45k-60k"
  | "60k-80k"
  | "80k-plus"
  | "not-sure";

export type AgeBracket = "under-30" | "30-plus";

export type EntrepreneurType =
  | "freelancer"
  | "founder"
  | "small-business"
  | "not-sure";

export type PartnerFamilyContext =
  | "partner-spouse"
  | "family-member"
  | "no"
  | "not-sure";

export type StudyIntent = "yes-admission" | "possibly" | "no";

export type StudyType = "university-hbo" | "vocational-other" | "not-sure";

export interface VisaCheckerAnswers {
  citizenshipCategory: CitizenshipCategory;
  countryCode?: string;
  movePurpose: MovePurpose;
  hasDutchJobOffer: YesNoUnsure | null;
  employerSponsorKnown: YesNoUnsure | null;
  salaryRange: SalaryRange | null;
  ageBracket: AgeBracket | null;
  workProfile: EntrepreneurType | null;
  entrepreneurType: EntrepreneurType | null;
  isUSCitizen: boolean;
  hasPartnerInNL: PartnerFamilyContext | null;
  movingToJoinPartner: YesNoUnsure | null;
  studyIntent: StudyIntent | null;
  studyType: StudyType | null;
  exploringDAFT: YesNoUnsure | null;
  hasClientsOrActivity: YesNoUnsure | null;
}

export type VisaRouteSlug =
  | "no-visa-needed"
  | "highly-skilled-migrant"
  | "eu-blue-card"
  | "dutch-american-friendship-treaty"
  | "self-employed-visa"
  | "student-visa"
  | "partner-family-visa";

export interface VisaRecommendationItem {
  slug: VisaRouteSlug;
  reason?: string;
  priority: "primary" | "secondary";
  /** For secondary options: what the user still needs (vs their inputs) to qualify. Shown as "What you need". */
  gapsToQualify?: string[];
}

export interface VisaCheckerRecommendation {
  primaryRecommendations: VisaRecommendationItem[];
  secondaryRecommendations: VisaRecommendationItem[];
  excludedRoutes: VisaRouteSlug[];
  explanation: string[];
  nextSteps: string[];
  confidence: "high" | "medium" | "low";
}

export function getDefaultVisaCheckerAnswers(): VisaCheckerAnswers {
  return {
    citizenshipCategory: "other",
    movePurpose: "exploring",
    hasDutchJobOffer: null,
    employerSponsorKnown: null,
    salaryRange: null,
    ageBracket: null,
    workProfile: null,
    entrepreneurType: null,
    isUSCitizen: false,
    hasPartnerInNL: null,
    movingToJoinPartner: null,
    studyIntent: null,
    studyType: null,
    exploringDAFT: null,
    hasClientsOrActivity: null,
  };
}
