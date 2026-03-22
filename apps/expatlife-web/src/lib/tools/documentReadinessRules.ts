import type { DocumentReadinessDatasets, DocumentReadinessInput, PackOutlineItem } from "./loadDocumentReadinessContent";
import type { DocumentEntry, DocumentChecklistItem, ResolvedDocument } from "@/src/lib/tools/document-readiness/types";
import { applyCountryOverrides } from "@/src/lib/tools/document-readiness/applyCountryOverrides";

export type DocumentStatus = "ready" | "missing" | "pending" | "not_applicable";
export type DocumentPriority = "high" | "medium" | "optional";

function matchesScenario(item: DocumentEntry, scenario: DocumentReadinessInput["scenario"]): boolean {
  const scenarios = item.conditions?.scenario;
  if (!scenarios || scenarios.length === 0) return true;
  return scenarios.includes(scenario);
}

function mapInputToStatus(input: DocumentReadinessInput, item: DocumentEntry): DocumentStatus {
  if (!matchesScenario(item, input.scenario)) return "not_applicable";

  const id = item.id;
  const scenario = input.scenario;
  const core = item.core ?? false;

  if (id === "passport" || id === "passport-copies" || id === "residence-permit-awareness") {
    return input.hasPassport === "yes" ? "ready" : "missing";
  }

  if (
    id === "marriage-certificate" ||
    id === "birth-certificate" ||
    id === "children-birth-certificates" ||
    id === "school-records-awareness"
  ) {
    if (input.hasCivilCertificates === "na" && (scenario === "work" || scenario === "unsure")) return "not_applicable";
    if (scenario === "family" && id === "children-birth-certificates") {
      return input.hasCivilCertificates === "yes" ? "ready" : "missing";
    }
    return input.hasCivilCertificates === "yes"
      ? "ready"
      : input.hasCivilCertificates === "na"
        ? "not_applicable"
        : "missing";
  }

  if (id === "rental-agreement" || id === "address-confirmation" || id === "landlord-agency-contact") {
    if (input.hasProofOfAddress === "yes") return "ready";
    if (input.hasProofOfAddress === "soon") return "pending";
    return "missing";
  }

  if (
    id === "employment-contract" ||
    id === "job-offer-letter" ||
    id === "employer-contact-details" ||
    id === "work-authorization-awareness"
  ) {
    if (scenario === "work") {
      if (input.hasEmploymentDocs === "yes") return "ready";
      if (input.hasEmploymentDocs === "na") return "missing";
      return "missing";
    }
    if (input.hasEmploymentDocs === "na") return "not_applicable";
    if (input.hasEmploymentDocs === "yes") return "ready";
    return "missing";
  }

  if (scenario === "unsure" && !core) return "pending";
  return "pending";
}

function mapPriority(input: DocumentReadinessInput, datasets: DocumentReadinessDatasets, id: string): DocumentPriority {
  const scenarioRules = datasets.rules.scenarioPriority[input.scenario];
  if (scenarioRules.high.includes(id)) return "high";
  if (scenarioRules.medium.includes(id)) return "medium";
  return "optional";
}

export function buildDocumentSummary(input: DocumentReadinessInput, _datasets: DocumentReadinessDatasets): string {
  if (input.scenario === "work") {
    return "If you are moving for work, the document pack often starts with identity, employment, and housing records so practical setup can move faster.";
  }
  if (input.scenario === "family") {
    return "If you are moving with family, it helps to prepare both core identity documents and household records early, including child-related civil documents where relevant.";
  }
  if (input.scenario === "partner") {
    return "Partner moves often work best with a clear identity and housing pack, plus relationship records where relevant to your route.";
  }
  return "If you are still unsure of your route, start with a core identity and housing pack first, then add scenario-specific documents as your plan becomes clearer.";
}

export function buildDocumentChecklist(
  input: DocumentReadinessInput,
  datasets: DocumentReadinessDatasets
): Record<DocumentEntry["category"], DocumentChecklistItem[]> {
  const grouped: Record<DocumentEntry["category"], DocumentChecklistItem[]> = {
    identity: [],
    employment: [],
    housing: [],
    family: [],
    education: [],
    travel: [],
  };

  for (const item of datasets.documents) {
    const status = mapInputToStatus(input, item);
    const priority = mapPriority(input, datasets, item.id);
    const resolved = applyCountryOverrides(item, input.from || null);
    grouped[item.category].push({ ...resolved, status, priority });
  }

  for (const category of Object.keys(grouped) as Array<keyof typeof grouped>) {
    grouped[category].sort((a, b) => {
      const statusA = datasets.rules.statusPriority[a.status];
      const statusB = datasets.rules.statusPriority[b.status];
      if (statusB !== statusA) return statusB - statusA;
      const priorityOrder = { high: 3, medium: 2, optional: 1 };
      if (priorityOrder[b.priority] !== priorityOrder[a.priority]) return priorityOrder[b.priority] - priorityOrder[a.priority];
      return a.title.localeCompare(b.title);
    });
  }

  return grouped;
}

export type MissingDocumentItem = DocumentChecklistItem;

export function buildMissingDocuments(
  input: DocumentReadinessInput,
  datasets: DocumentReadinessDatasets
): MissingDocumentItem[] {
  const checklist = buildDocumentChecklist(input, datasets);
  const all = Object.values(checklist).flat();

  return all
    .filter((item) => item.status === "missing" || item.status === "pending")
    .sort((a, b) => {
      const priorityRank = { high: 3, medium: 2, optional: 1 };
      if (priorityRank[b.priority] !== priorityRank[a.priority]) return priorityRank[b.priority] - priorityRank[a.priority];
      const statusRank = { missing: 2, pending: 1, ready: 0, not_applicable: 0 };
      if (statusRank[b.status] !== statusRank[a.status]) return statusRank[b.status] - statusRank[a.status];
      return a.title.localeCompare(b.title);
    });
}

export function buildPackOutline(
  input: DocumentReadinessInput,
  datasets: DocumentReadinessDatasets
): Array<PackOutlineItem & { count: number; readyCount: number; missingCount: number }> {
  const checklist = buildDocumentChecklist(input, datasets);
  return datasets.packOutline.map((group) => {
    const items = checklist[group.id];
    return {
      ...group,
      count: items.length,
      readyCount: items.filter((i) => i.status === "ready").length,
      missingCount: items.filter((i) => i.status === "missing" || i.status === "pending").length,
    };
  });
}

export function buildReadinessScore(
  input: DocumentReadinessInput,
  datasets: DocumentReadinessDatasets
): { score: number; label: string; explanation: string } {
  const weights = datasets.scoring.weights;
  let score = 0;

  if (input.hasPassport === "yes") score += weights.passport;

  if (input.hasCivilCertificates === "yes") score += weights.civilDocs;
  else if (input.hasCivilCertificates === "na" && (input.scenario === "work" || input.scenario === "unsure")) {
    score += weights.civilDocs;
  }

  if (input.hasProofOfAddress === "yes") score += weights.proofOfAddress;
  else if (input.hasProofOfAddress === "soon") score += Math.round(weights.proofOfAddress * 0.5);

  if (input.hasEmploymentDocs === "yes") score += weights.employmentDocs;
  else if (input.hasEmploymentDocs === "na" && input.scenario !== "work") score += weights.employmentDocs;

  score += input.scenario === "unsure" ? Math.round(weights.scenarioCoverage * 0.5) : weights.scenarioCoverage;

  const missingHighCount = buildMissingDocuments(input, datasets).filter((doc) => doc.priority === "high").length;
  score -= Math.min(12, missingHighCount * 4);
  score = Math.max(0, Math.min(100, score));

  const band =
    datasets.scoring.bands.find((b) => score >= b.min && score <= b.max) ??
    datasets.scoring.bands[datasets.scoring.bands.length - 1];

  const explanation =
    score >= 70
      ? "You already have several core documents in place, but a few supporting items may still help reduce delays."
      : score >= 40
        ? "You are getting organized, and a focused pass on missing support documents can improve readiness quickly."
        : "You are in early prep mode. Prioritize core identity and address-related documents first.";

  return { score, label: band.label, explanation };
}

export function buildRelevantLinks(
  input: DocumentReadinessInput,
  _datasets: DocumentReadinessDatasets
): Array<{ label: string; href: string }> {
  const withFrom = (href: string) => `${href}${href.includes("?") ? "&" : "?"}from=${encodeURIComponent(input.from)}`;
  const links = [
    { label: "Documents needed", href: withFrom("/netherlands/documents-needed-to-move-netherlands/") },
    { label: "Moving checklist Netherlands", href: withFrom("/netherlands/moving-checklist-netherlands/") },
    { label: "Register address in the Netherlands", href: withFrom("/netherlands/register-address-netherlands/") },
    { label: "Moving to the Netherlands guide", href: withFrom("/netherlands/moving-to-the-netherlands/") },
    { label: "Moving to the Netherlands", href: withFrom("/netherlands/moving-to-the-netherlands/") },
  ];
  const originSlug = input.from?.trim().toLowerCase().replace(/\s+/g, "-");
  if (originSlug) {
    links.push({
      label: `Moving to the Netherlands from ${originSlug.replace(/-/g, " ")}`,
      href: `/netherlands/moving/moving-to-netherlands-from/${originSlug}/`,
    });
  }
  return links;
}

export function buildAffiliateContext(
  input: DocumentReadinessInput,
  results: {
    checklist: ReturnType<typeof buildDocumentChecklist>;
    missing: ReturnType<typeof buildMissingDocuments>;
  }
): { categoryOrder: string[]; emphasis: string } {
  const missing = results.missing;
  const fromMissing = new Set<string>();
  for (const doc of missing) {
    for (const cat of doc.affiliateCategories ?? []) fromMissing.add(cat);
  }
  const fromMissingOrder = Array.from(fromMissing);
  const defaultOrder = ["housing", "banking", "insurance"];
  if (input.hasProofOfAddress === "no") {
    const order = [...fromMissingOrder.filter((c) => defaultOrder.includes(c)), ...defaultOrder.filter((c) => !fromMissingOrder.includes(c))];
    return { categoryOrder: order.length ? order : defaultOrder, emphasis: "address-gap" };
  }
  if (input.scenario === "work") {
    const order = ["document-translation", "relocation-services", ...defaultOrder].filter((c) => fromMissingOrder.includes(c) || defaultOrder.includes(c));
    return { categoryOrder: order.length ? order : ["banking", "insurance", "housing"], emphasis: "work-setup" };
  }
  if (input.scenario === "family") {
    const order = [...fromMissingOrder, "housing", "insurance", "banking"].filter((c, i, a) => a.indexOf(c) === i);
    return { categoryOrder: order.length ? order : ["housing", "insurance", "banking"], emphasis: "family-doc-flow" };
  }
  const order = [...fromMissingOrder, "banking", "housing", "insurance"].filter((c, i, a) => a.indexOf(c) === i);
  return { categoryOrder: order.length ? order : ["banking", "housing", "insurance"], emphasis: "core-document-flow" };
}
