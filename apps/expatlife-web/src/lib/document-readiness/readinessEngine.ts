/**
 * Document Readiness Engine: computes score, missing/ready/uncertain categories,
 * risk flags, and recommended next steps from user answers.
 * Planning guidance only — not legal readiness certification.
 */

import type { DocumentCategoryId, PrimaryRoute, HouseholdType } from "@/src/data/tools/document-readiness/document-categories";
import { DOCUMENT_CATEGORIES, getDocumentCategoriesForRouteAndHousehold } from "@/src/data/tools/document-readiness/document-categories";
import { getRouteDocumentMap } from "@/src/data/tools/document-readiness/route-document-map";
import { getCountryDocumentNote } from "@/src/data/tools/document-readiness/country-document-notes";
import { getNextStepsForRoute } from "@/src/data/tools/document-readiness/next-steps";

export type DocumentStatusValue = "ready" | "not_ready" | "not_sure";

export type DocumentReadinessAnswers = {
  countryCode: string;
  citizenshipCategory: "eu" | "non-eu" | "not-sure";
  primaryRoute: PrimaryRoute;
  householdType: HouseholdType;
  jobOfferStatus?: "yes" | "no" | "not-sure";
  studyAdmissionStatus?: "yes" | "no" | "not-sure";
  businessDocumentStatus?: "yes" | "no" | "partly";
  relationshipProofStatus?: "yes" | "no" | "partly";
  currentDocumentStatuses: Partial<Record<DocumentCategoryId, DocumentStatusValue>>;
  complexityFlags: Array<"translation" | "apostille" | "legalization" | "replacement" | "certification" | "not-sure">;
  officialSourceChecked?: boolean;
};

export type ReadinessLevel = "high" | "medium" | "low";

export type RiskFlag = {
  id: string;
  label: string;
  description: string;
};

export type MissingDocumentItem = {
  id: DocumentCategoryId;
  title: string;
  whyItMatters: string;
  status: "missing" | "partial" | "uncertain";
  suggestedAction: string;
  relatedGuideHref?: string;
};

export type ReadyCategoryItem = {
  id: DocumentCategoryId;
  title: string;
};

export type ReadinessResult = {
  readinessScore: number;
  readinessLevel: ReadinessLevel;
  readyCategories: ReadyCategoryItem[];
  missingCategories: MissingDocumentItem[];
  uncertainCategories: MissingDocumentItem[];
  riskFlags: RiskFlag[];
  recommendedNextSteps: Array<{ label: string; href?: string }>;
  recommendedGuides: Array<{ label: string; href: string }>;
  recommendedTools: Array<{ label: string; href: string }>;
  summaryText: string[];
};

const ROUTE_GUIDE_HREFS: Record<PrimaryRoute, string> = {
  "highly-skilled-migrant": "/netherlands/visa/highly-skilled-migrant/",
  "eu-blue-card": "/netherlands/visa/eu-blue-card/",
  "self-employed": "/netherlands/visa/self-employed-visa/",
  daft: "/netherlands/visa/dutch-american-friendship-treaty/",
  student: "/netherlands/visa/student-visa/",
  "partner-family": "/netherlands/visa/partner-family-visa/",
  "not-sure": "/netherlands/visa-checker/",
};

const RELATED_TOOLS = [
  { label: "Visa Checker", href: "/netherlands/visa-checker/" },
  { label: "Relocation Cost Estimator", href: "/netherlands/moving/tools/relocation-cost-estimator/" },
  { label: "Moving Checklist", href: "/netherlands/moving/tools/moving-checklist/" },
  { label: "First 90 Days Planner", href: "/netherlands/moving/tools/first-90-days/" },
  { label: "Arrival Planner", href: "/netherlands/moving/tools/arrival-planner/" },
];

function getRelevantDocumentIds(route: PrimaryRoute, household: HouseholdType): DocumentCategoryId[] {
  const categories = getDocumentCategoriesForRouteAndHousehold(route, household);
  return categories.map((c) => c.id);
}

function computeScore(answers: DocumentReadinessAnswers): number {
  const routeMap = getRouteDocumentMap(answers.primaryRoute);
  const relevantIds = getRelevantDocumentIds(answers.primaryRoute, answers.householdType);
  let score = 0;
  const maxScore = 100;
  const readyWeight = 12;
  const notSureWeight = 4;
  const criticalBonus = 5;

  for (const id of relevantIds) {
    const status = answers.currentDocumentStatuses[id] ?? "not_sure";
    if (status === "ready") {
      score += readyWeight;
      const isCritical = routeMap?.criticalDocs.includes(id);
      if (isCritical) score += criticalBonus;
    } else if (status === "not_sure") {
      score += notSureWeight;
    }
  }

  // Cap and floor
  score = Math.min(maxScore, Math.max(0, score));

  // Penalty for complexity flags
  if (answers.complexityFlags.length > 0 && !answers.complexityFlags.every((f) => f === "not-sure")) {
    score = Math.max(0, score - answers.complexityFlags.length * 3);
  }

  // Penalty if official source not checked
  if (answers.officialSourceChecked === false) {
    score = Math.max(0, score - 5);
  }

  return Math.min(100, score);
}

function getReadinessLevel(score: number): ReadinessLevel {
  if (score >= 70) return "high";
  if (score >= 40) return "medium";
  return "low";
}

function buildReadyMissingUncertain(answers: DocumentReadinessAnswers): {
  ready: ReadyCategoryItem[];
  missing: MissingDocumentItem[];
  uncertain: MissingDocumentItem[];
} {
  const categories = getDocumentCategoriesForRouteAndHousehold(answers.primaryRoute, answers.householdType);
  const ready: ReadyCategoryItem[] = [];
  const missing: MissingDocumentItem[] = [];
  const uncertain: MissingDocumentItem[] = [];

  for (const cat of categories) {
    const status = answers.currentDocumentStatuses[cat.id] ?? "not_sure";
    if (status === "ready") {
      ready.push({ id: cat.id, title: cat.title });
    } else if (status === "not_ready") {
      missing.push({
        id: cat.id,
        title: cat.title,
        whyItMatters: cat.description,
        status: "missing",
        suggestedAction: `Gather or request ${cat.title.toLowerCase()}. Check official route instructions.`,
        relatedGuideHref: cat.relatedGuideHref,
      });
    } else {
      uncertain.push({
        id: cat.id,
        title: cat.title,
        whyItMatters: cat.description,
        status: "uncertain",
        suggestedAction: `Confirm whether you need ${cat.title.toLowerCase()} for your route and gather if required.`,
        relatedGuideHref: cat.relatedGuideHref,
      });
    }
  }

  return { ready, missing, uncertain };
}

function buildRiskFlags(answers: DocumentReadinessAnswers): RiskFlag[] {
  const flags: RiskFlag[] = [];
  const countryNote = getCountryDocumentNote(answers.countryCode);

  if (answers.complexityFlags.includes("apostille") || countryNote?.apostilleLikely) {
    flags.push({
      id: "apostille",
      label: "Apostille may be needed",
      description: "Some documents from your country of origin may need apostille before use in Dutch procedures. This can add time.",
    });
  }
  if (answers.complexityFlags.includes("legalization") || countryNote?.legalizationLikely) {
    flags.push({
      id: "legalization",
      label: "Legalization may be required",
      description: "Documents may need legalization in addition to or instead of apostille. Check IND and municipality requirements.",
    });
  }
  if (answers.complexityFlags.includes("translation") || countryNote?.translationOftenRequired) {
    flags.push({
      id: "translation",
      label: "Translation may add time",
      description: "Certified translation may be required for documents not in Dutch or English. Plan for extra lead time.",
    });
  }
  if (answers.complexityFlags.includes("replacement") || countryNote?.replacementTimingRisk) {
    flags.push({
      id: "replacement",
      label: "Civil document replacement can take longer",
      description: countryNote?.replacementTimingRisk ?? "Replacement or certified copies of civil documents can take several weeks.",
    });
  }
  if (answers.officialSourceChecked === false) {
    flags.push({
      id: "official-not-checked",
      label: "Official instructions not yet confirmed",
      description: "Confirm exact document requirements with the IND or official source for your route.",
    });
  }
  if (answers.householdType === "partner-and-children" || answers.householdType === "children-only") {
    flags.push({
      id: "family-complexity",
      label: "Family move complexity",
      description: "Moving with family often requires more documents and earlier planning; allow extra time for civil and custody documents.",
    });
  }

  return flags;
}

function buildSummaryText(
  answers: DocumentReadinessAnswers,
  level: ReadinessLevel,
  readyCount: number,
  missingCount: number
): string[] {
  const lines: string[] = [];
  if (level === "high") {
    lines.push("You appear well prepared for document planning. A few supporting items may still help reduce delays.");
  } else if (level === "medium") {
    lines.push("You look partly ready. Several route-specific or supporting documents still need work before you rely on this route.");
    lines.push("Focus on the missing and uncertain items below and confirm with official sources.");
  } else {
    lines.push("You are in early prep mode. Prioritize core identity and route-specific documents first.");
    lines.push("Use the visa checker if you are not yet sure of your route, then return here to build your document list.");
  }
  if (readyCount > 0) {
    lines.push(`You have indicated ${readyCount} document category/categories ready.`);
  }
  if (missingCount > 0) {
    lines.push(`You have ${missingCount} document category/categories still missing or uncertain; see the list below for next steps.`);
  }
  return lines;
}

export function runReadinessEngine(answers: DocumentReadinessAnswers): ReadinessResult {
  const score = computeScore(answers);
  const readinessLevel = getReadinessLevel(score);
  const { ready, missing, uncertain } = buildReadyMissingUncertain(answers);
  const riskFlags = buildRiskFlags(answers);
  const nextSteps = getNextStepsForRoute(answers.primaryRoute);
  const routeHref = ROUTE_GUIDE_HREFS[answers.primaryRoute];
  const routeMap = getRouteDocumentMap(answers.primaryRoute);

  const recommendedGuides = [
    { label: routeMap?.label ?? "Your visa route", href: routeHref },
    { label: "Documents needed to move", href: "/netherlands/documents-needed-to-move-netherlands/" },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/" },
  ].filter((g) => g.href);

  const recommendedTools = RELATED_TOOLS;

  const summaryText = buildSummaryText(answers, readinessLevel, ready.length, missing.length + uncertain.length);

  return {
    readinessScore: score,
    readinessLevel,
    readyCategories: ready,
    missingCategories: missing,
    uncertainCategories: uncertain,
    riskFlags,
    recommendedNextSteps: nextSteps,
    recommendedGuides,
    recommendedTools,
    summaryText,
  };
}
