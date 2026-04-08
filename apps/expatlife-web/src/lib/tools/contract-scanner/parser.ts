import { CLAUSE_PATTERNS } from "@/src/lib/tools/contract-scanner/clausePatterns";
import { extractClauseSnippet } from "@/src/lib/tools/contract-scanner/clauseSnippets";
import {
  buildTailoredQuestion,
  dedupeOverlappingFindings,
  dimensionScoresEnhanced,
  maybeAddHandbookSubstanceFinding,
  overallFromDimensionsEnhanced,
  refineClauseFinding,
} from "@/src/lib/tools/contract-scanner/clauseHeuristics";
import { sectionContainingIndex, splitContractSections } from "@/src/lib/tools/contract-scanner/contractSections";
import { normalizeContractText } from "@/src/lib/tools/contract-scanner/format";
import { buildPrioritizedMissingItems } from "@/src/lib/tools/contract-scanner/missingItems";
import { runChecklistScan } from "@/src/lib/tools/contract-scanner/checklistEngine";
import { mergePipelineIntoResult } from "@/src/lib/tools/contract-scanner/pipelineMerge";
import type { ContractInsightProvider } from "@/src/lib/tools/contract-scanner/providers";
import type {
  ClauseFinding,
  ConfidenceTier,
  ContractScanInput,
  ContractScanResult,
  ContractType,
  ExtractionQuality,
  OverallConcernLevel,
} from "@/src/lib/tools/contract-scanner/types";

function findingId(seed: string, index: number): string {
  return `${seed}-${index}`;
}

function computeMatchConfidence(
  matchLength: number,
  snippetLen: number,
  sectionHeading: string | null,
  appearsBroad: boolean,
  extractionQuality?: ExtractionQuality
): ConfidenceTier {
  let tier: ConfidenceTier = "low";
  if (matchLength >= 10 && snippetLen >= 90) tier = "medium";
  if (matchLength >= 6 && snippetLen >= 160) tier = "high";
  if (sectionHeading && sectionHeading.trim().length > 4) {
    if (tier === "low") tier = "medium";
    else if (tier === "medium" && snippetLen >= 120) tier = "high";
  }
  if (appearsBroad) {
    tier = tier === "high" ? "medium" : "low";
  }
  if (extractionQuality === "poor") {
    tier = tier === "high" ? "medium" : "low";
  } else if (extractionQuality === "partial" && tier === "high") {
    tier = "medium";
  }
  return tier;
}

function detectContractType(text: string): { type: ContractType; confidence: ConfidenceTier } {
  const fixed =
    /\b(fixed[\s-]?term|bepaalde\s+tijd|tijdelijke\s+arbeidsovereenkomst|einddatum)\b/i.test(text) &&
    !/\b(permanent|onbepaalde\s+tijd)\b/i.test(text);
  const perm =
    /\b(permanent|onbepaalde\s+tijd|indefinite|employment\s+of\s+indefinite)\b/i.test(text) &&
    !/\b(fixed[\s-]?term|bepaalde\s+tijd)\b/i.test(text);
  if (perm && !fixed) return { type: "permanent", confidence: "medium" };
  if (fixed && !perm) return { type: "fixed_term", confidence: "medium" };
  if (perm && fixed) return { type: "unknown", confidence: "low" };
  if (/\b(stage|internship|detachering|uitzend)\b/i.test(text)) return { type: "temporary", confidence: "low" };
  return { type: "unknown", confidence: "low" };
}

function concernLabel(level: OverallConcernLevel): string {
  switch (level) {
    case "low_concern":
      return "Low concern";
    case "moderate_concern":
      return "Moderate concern";
    case "elevated_concern":
      return "Elevated concern";
    case "high_review_recommended":
      return "High review recommended";
    default:
      return level;
  }
}

function buildKeyRiskCards(findings: ClauseFinding[]) {
  const pick = (sub: string) => findings.find((f) => f.subcategory.toLowerCase().includes(sub.toLowerCase()));
  const cards: ContractScanResult["keyRiskCards"] = [];
  const p = pick("probation");
  if (p) cards.push({ id: "kr-probation", title: "Probation", badge: p.riskLabel, summary: p.whyItMatters });
  const n = findings.find((f) => f.id.startsWith("non-compete"));
  if (n) cards.push({ id: "kr-noncompete", title: "Non-compete", badge: n.riskLabel, summary: n.whyItMatters });
  const r = pick("relocation");
  if (r) cards.push({ id: "kr-reloc", title: "Relocation repayment", badge: r.riskLabel, summary: r.whyItMatters });
  const t = findings.find((f) => f.subcategory.includes("30%"));
  if (t) cards.push({ id: "kr-30", title: "30% ruling wording", badge: t.riskLabel, summary: t.whyItMatters });
  const h = findings.find((f) => f.category === "policy_data");
  if (h) cards.push({ id: "kr-handbook", title: "Handbook / policies", badge: h.riskLabel, summary: h.whyItMatters });
  const o = findings.find((f) => f.subcategory.includes("Overtime included"));
  if (o) cards.push({ id: "kr-overtime", title: "Overtime / hours", badge: o.riskLabel, summary: o.whyItMatters });
  const s = findings.find((f) => f.category === "salary_compensation" && f.subcategory.includes("Bonus"));
  if (s) cards.push({ id: "kr-bonus", title: "Bonus / variable pay", badge: s.riskLabel, summary: s.whyItMatters });
  const np = pick("notice");
  if (np) cards.push({ id: "kr-notice", title: "Notice period", badge: np.riskLabel, summary: np.whyItMatters });
  return cards.slice(0, 8);
}

function scanConfidence(textLen: number, findingsCount: number): ConfidenceTier {
  if (textLen < 400) return "low";
  if (textLen < 1500 || findingsCount < 3) return "medium";
  return "high";
}

export type ParseContractTextOptions = {
  extractionQuality?: ExtractionQuality;
};

export function parseContractText(
  rawInput: string,
  options?: ParseContractTextOptions
): Omit<ContractScanResult, "mode" | "extractionQuality" | "likelyScannedDocument" | "extractionWarnings"> {
  const normalizedText = normalizeContractText(rawInput);
  const text = normalizedText;
  const sections = splitContractSections(text);
  const extractionQuality = options?.extractionQuality;
  const findings: ClauseFinding[] = [];
  let patternIndex = 0;

  for (const p of CLAUSE_PATTERNS) {
    p.re.lastIndex = 0;
    const m = p.re.exec(text);
    if (!m || m.index === undefined) continue;
    const matchStart = m.index;
    const matchLen = m[0].length;
    const matchEnd = matchStart + matchLen;
    const section = sectionContainingIndex(sections, matchStart + Math.floor(matchLen / 2));
    const sectionHeading = section?.heading ?? null;

    const snippet = extractClauseSnippet(text, matchStart, matchLen, { maxChars: 360, maxSentences: 3 });

    let appearsBroad = false;
    if (p.broadUnlessContains?.length) {
      const chunk = text.slice(Math.max(0, matchStart - 200), Math.min(text.length, matchEnd + 400)).toLowerCase();
      appearsBroad = !p.broadUnlessContains.some((kw) => chunk.includes(kw.toLowerCase()));
    }
    if (p.id === "non-compete" && appearsBroad) {
      const ncWin = text.slice(Math.max(0, matchStart - 120), Math.min(text.length, matchEnd + 500));
      appearsBroad =
        !/\b(\d+\s*(month|maand|year|jaar)|km|kilometer|meter|radius|geographic|geo|functie|role|sector|bedrijfstak)\b/i.test(
          ncWin
        );
    }

    const confidence = computeMatchConfidence(matchLen, snippet.length, sectionHeading, Boolean(appearsBroad), extractionQuality);

    findings.push({
      id: findingId(p.id, patternIndex++),
      category: p.category,
      subcategory: p.subcategory,
      snippet,
      explanation: p.explain,
      whyItMatters: p.whyItMatters,
      riskLabel: p.riskLabel,
      questionToAsk: p.question,
      confidence,
      appearsBroad: appearsBroad || undefined,
      matchSpan: { start: matchStart, end: matchEnd },
    });
  }

  let refined = dedupeOverlappingFindings(findings).map((f) => {
    const span = f.matchSpan;
    const win = span
      ? text.slice(Math.max(0, span.start - 220), Math.min(text.length, span.end + 320))
      : f.snippet;
    const r = refineClauseFinding(f, win);
    return { ...r, questionToAsk: buildTailoredQuestion({ ...r, questionToAsk: f.questionToAsk }) };
  });

  refined = maybeAddHandbookSubstanceFinding(text, refined).map((f) => {
    if (f.matchSpan) return f;
    return { ...f, questionToAsk: buildTailoredQuestion(f) };
  });

  const { type: contractType, confidence: contractTypeConfidence } = detectContractType(text);
  const missingItems = buildPrioritizedMissingItems(text, text.length < 400 ? 200 : 120, refined);
  const categoryScores = dimensionScoresEnhanced(refined, missingItems);
  const overallConcern = overallFromDimensionsEnhanced(categoryScores, refined);

  const topConcerns: string[] = [];
  const sortedDims = [...categoryScores].sort((a, b) => b.score - a.score);
  for (const d of sortedDims.slice(0, 3)) {
    if (d.score >= 40) topConcerns.push(`${d.dimension.replace(/_/g, " ")}: elevated in this scan.`);
  }
  if (refined.some((f) => f.appearsBroad && f.subcategory.includes("Non-compete"))) {
    topConcerns.unshift("Non-compete wording looks broad or underspecified — worth legal review.");
  }
  if (refined.some((f) => f.subcategory.includes("Handbook") || f.id.startsWith("handbook-material"))) {
    topConcerns.push("Policies may be incorporated by reference — obtain the referenced sections before signing.");
  }
  if (refined.some((f) => f.subcategory.includes("Relocation repayment") && f.riskLabel === "review_before_signing")) {
    topConcerns.unshift("Relocation repayment wording suggests little or no proration — confirm with HR.");
  }

  const hrQuestions: { id: string; text: string; relatedFindingId?: string }[] = [];
  const qSeen = new Set<string>();
  for (const f of refined) {
    const t = f.questionToAsk.trim();
    if (!qSeen.has(t)) {
      qSeen.add(t);
      hrQuestions.push({ id: `hq-${f.id}`, text: t, relatedFindingId: f.id });
    }
  }
  const missingForQuestions = missingItems.slice(0, 10);
  for (const mi of missingForQuestions) {
    const t = `For “${mi.label}”: ${mi.detail} Where in the contract pack or annexes is this spelled out?`;
    if (!qSeen.has(t)) {
      qSeen.add(t);
      hrQuestions.push({ id: `hq-miss-${mi.id}`, text: t });
    }
  }

  const keyRiskCards = buildKeyRiskCards(refined);

  let suggestedNextStep =
    "Use the generated questions with HR or your recruiter, then consider a qualified employment lawyer for restrictive or immigration-linked clauses.";
  if (overallConcern === "low_concern") {
    suggestedNextStep = "Confirm remaining gaps with HR; escalate to a lawyer if any clause feels unclear or unusually broad.";
  }

  return {
    contractType,
    contractTypeConfidence,
    overallConcern,
    scanConfidence: scanConfidence(text.length, refined.length),
    topConcerns: topConcerns.slice(0, 4),
    suggestedNextStep,
    categoryScores,
    findings: refined,
    hrQuestions,
    missingItems,
    keyRiskCards,
    normalizedText,
    normalizedTextLength: text.length,
  };
}

function runContractScanImpl(input: ContractScanInput): ContractScanResult {
  if (input.mode === "checklist" && input.checklist) {
    const checklistResult = runChecklistScan(input.checklist);
    return mergePipelineIntoResult(checklistResult, input);
  }

  const base = parseContractText(input.text, { extractionQuality: input.extractionQuality });
  const partial: ContractScanResult = {
    ...base,
    mode: input.mode,
    extractionQuality: input.extractionQuality,
    likelyScannedDocument: input.likelyScannedDocument,
    extractionWarnings: input.extractionWarnings,
  };
  return mergePipelineIntoResult(partial, input);
}

/** Free/basic deterministic scan (rules + heuristics). */
export function runContractScan(input: ContractScanInput): ContractScanResult {
  return runContractScanImpl(input);
}

/** Typed facade for DI / tests; same behavior as `runContractScan`. */
export const basicContractInsightProvider: ContractInsightProvider = {
  level: "basic",
  analyze: runContractScanImpl,
};

export function formatOverallConcernLabel(level: OverallConcernLevel): string {
  return concernLabel(level);
}
