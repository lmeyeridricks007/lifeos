import type {
  ClauseFinding,
  ClauseCategory,
  FindingRiskLabel,
  MissingItem,
  RiskCategoryResult,
  RiskScoreDimension,
  OverallConcernLevel,
} from "@/src/lib/tools/contract-scanner/types";

const RELOCATION_NO_PRORATION = /\b(volledig|in\s+full|full\s+repayment|geen\s+pro\s*rata|not\s+prorat|without\s+proration|in\s+its\s+entirety|geheel|niet\s+evenredig)\b/i;
const RELOCATION_PRORATION_OK = /\b(pro\s*rata|evenredig|prorated|per\s+month\s+served|naar\s+rato|evenredigelijk)\b/i;

function refineRelocationRiskFixed(f: ClauseFinding, window: string): FindingRiskLabel {
  if (!f.subcategory.toLowerCase().includes("relocation")) return f.riskLabel;
  const w = window.toLowerCase();
  if (RELOCATION_PRORATION_OK.test(w)) return f.riskLabel;
  if (RELOCATION_NO_PRORATION.test(w)) return "review_before_signing";
  if (/\b(repay|terug|clawback)\b/i.test(w)) return "potentially_restrictive";
  return f.riskLabel;
}

function refineThirtyRisk(f: ClauseFinding, window: string): FindingRiskLabel {
  if (!f.subcategory.includes("30%")) return f.riskLabel;
  if (f.id.includes("discretionary")) return "worth_confirming";
  if (/\b(naar\s+goeddunken|geen\s+garantie|no\s+guarantee|discretion|best\s+efforts|afhankelijk\s+van)\b/i.test(window)) {
    return "worth_confirming";
  }
  return f.riskLabel;
}

function refineHandbookRisk(f: ClauseFinding, window: string): FindingRiskLabel {
  if (f.category !== "policy_data") return f.riskLabel;
  if (/\b(overwerk|overtime|overuren|verzuim|ziekte|sanctie|disciplinary|ontslag|illness)\b/i.test(window)) {
    return "broad_strong_wording";
  }
  return f.riskLabel;
}

function refineConfidentialityAmbiguity(f: ClauseFinding, window: string): { riskLabel: FindingRiskLabel; appearsBroad?: boolean } {
  if (!f.subcategory.includes("Confidentiality")) return { riskLabel: f.riskLabel };
  const w = window.toLowerCase();
  const broadAllInfo =
    /\b(all\s+information|alle\s+informatie|any\s+information)\b/i.test(w) &&
    !/\b(publicly\s+available|openbaar\s+beschikbaar|already\s+known|reeds\s+bekend|in\s+the\s+public\s+domain)\b/i.test(w);
  if (broadAllInfo && f.riskLabel === "common_standard") {
    return { riskLabel: "worth_confirming", appearsBroad: true };
  }
  if (broadAllInfo) {
    return { riskLabel: f.riskLabel, appearsBroad: true };
  }
  return { riskLabel: f.riskLabel };
}

export function refineClauseFinding(f: ClauseFinding, contextWindow: string): ClauseFinding {
  let risk = f.riskLabel;
  risk = refineRelocationRiskFixed({ ...f, riskLabel: risk }, contextWindow);
  risk = refineThirtyRisk({ ...f, riskLabel: risk }, contextWindow);
  risk = refineHandbookRisk({ ...f, riskLabel: risk }, contextWindow);
  const conf = refineConfidentialityAmbiguity({ ...f, riskLabel: risk }, contextWindow);
  risk = conf.riskLabel;
  if (f.appearsBroad && f.subcategory.includes("Non-compete")) {
    risk = "potentially_restrictive";
  }
  return { ...f, riskLabel: risk, appearsBroad: f.appearsBroad || conf.appearsBroad || undefined };
}

export function buildTailoredQuestion(f: ClauseFinding): string {
  const s = f.snippet.replace(/^…|…$/g, "").trim();
  const short = s.length > 90 ? `${s.slice(0, 87)}…` : s;

  if (f.subcategory.includes("Non-compete")) {
    return f.appearsBroad
      ? `The non-compete language (“${short}”) does not clearly cap duration, geography, or role — can HR send a redlined version with explicit km/month limits and any compensation during the restriction?`
      : `Regarding the non-compete (“${short}”), can you confirm geographic radius, duration from last day, and whether clients/colleagues are covered separately from competitors?`;
  }
  if (f.subcategory.includes("Relocation repayment")) {
    return `About relocation repayment (“${short}”), is the amount prorated by months worked, which invoices qualify, and does redundancy or employer termination waive repayment?`;
  }
  if (f.subcategory.includes("30%")) {
    return `On the 30% ruling (“${short}”), is application and maintenance a binding employer duty with deadlines, or discretionary — and what happens to gross salary if the ruling is denied or ends?`;
  }
  if (f.category === "policy_data") {
    return `Policies are incorporated (“${short}”) — please attach the current overtime, illness/verzuim, and discipline chapters referenced, or confirm exact URLs/version dates.`;
  }
  if (f.subcategory.includes("Overtime included")) {
    return `Overtime wording (“${short}”) suggests unpaid extra hours — what is the CAO overtime table, and from how many hours per week does overtime accrue separately from salary?`;
  }
  if (f.subcategory.includes("Gross salary")) {
    return `Salary wording (“${short}”) — confirm gross monthly vs annual in euros, whether holiday allowance and any 13th month are on top, and the payroll schedule.`;
  }
  if (f.subcategory.includes("Confidentiality") && f.appearsBroad) {
    return `Confidentiality (“${short}”) looks very broad — are there carve-outs for public-domain information, general skills, and work done on personal time without company resources?`;
  }
  if (f.subcategory.includes("Holiday allowance")) {
    return `Holiday pay (“${short}”) — confirm percentage, whether it is included in the quoted base, and the May (or other) payout date.`;
  }
  if (f.subcategory.includes("Notice")) {
    return `Notice (“${short}”) — please state employee vs employer months after probation and whether CAO deviates from contract.`;
  }
  if (f.subcategory.includes("Visa")) {
    return `Permit/sponsor terms (“${short}”) — what notice do I get if sponsorship stops, and which contract changes require IND notification?`;
  }
  return f.questionToAsk;
}

export function dedupeOverlappingFindings(findings: ClauseFinding[]): ClauseFinding[] {
  const thirtyDisc = findings.filter((f) => f.id.startsWith("thirty-percent-discretionary"));
  if (thirtyDisc.length === 0) return findings;
  const ranges = thirtyDisc.map((f) => f.matchSpan).filter(Boolean) as { start: number; end: number }[];
  return findings.filter((f) => {
    if (!f.id.startsWith("thirty-percent-") || f.id.startsWith("thirty-percent-discretionary")) return true;
    const span = f.matchSpan;
    if (!span) return true;
    return !ranges.some(
      (r) =>
        (span.start >= r.start && span.start <= r.end + 40) ||
        (span.end <= r.end && span.end >= r.start - 40) ||
        (span.start <= r.start && span.end >= r.end)
    );
  });
}

export function maybeAddHandbookSubstanceFinding(text: string, findings: ClauseFinding[]): ClauseFinding[] {
  const hasHandbook = findings.some((f) => f.id.startsWith("handbook-incorporation"));
  if (!hasHandbook) return findings;
  if (!/\b(overwerk|overtime|overuren|verzuim|ziekte|sanctie|disciplinary|ontslag\s+wegens)\b/i.test(text)) {
    return findings;
  }
  const idx = text.search(/\b(handbook|handboek|policies|beleid|reglement|incorporated\s+by\s+reference)\b/i);
  const start = idx >= 0 ? idx : 0;
  return [
    ...findings,
    {
      id: `handbook-material-terms-${findings.length}`,
      category: "policy_data" as ClauseCategory,
      subcategory: "Handbook may govern overtime / absence / discipline",
      snippet:
        idx >= 0
          ? `…${text.slice(idx, Math.min(text.length, idx + 160)).replace(/\s+/g, " ").trim()}…`
          : "Material employment terms may be delegated to policies.",
      explanation:
        "The contract references policies while the text also touches overtime, illness, or discipline — those rules may live only in the handbook.",
      whyItMatters: "Signing without the referenced sections can leave key obligations unknown.",
      riskLabel: "missing_unclear" as FindingRiskLabel,
      questionToAsk:
        "Which handbook sections define overtime, illness reporting, and disciplinary sanctions — and can I receive those sections dated and signed-off before signing?",
      confidence: "medium",
    },
  ];
}

export function dimensionScoresEnhanced(findings: ClauseFinding[], missing: MissingItem[]): RiskCategoryResult[] {
  const has = (cat: ClauseCategory) => findings.filter((f) => f.category === cat);
  const restrictive = has("restrictive_clauses");
  const salary = has("salary_compensation");
  const notice = has("notice_termination");
  const expat = has("expat_immigration");
  const policy = has("policy_data");
  const work = has("working_time");

  let scoreRestrictive = Math.min(
    100,
    restrictive.filter((f) => f.riskLabel === "potentially_restrictive" || f.riskLabel === "review_before_signing").length *
      26 +
      restrictive.filter((f) => f.appearsBroad).length * 18 +
      restrictive.filter((f) => f.riskLabel === "broad_strong_wording").length * 8
  );

  let scoreSalary =
    salary.length === 0 ? 48 : salary.some((f) => f.subcategory.includes("Overtime included")) ? 58 : salary.length < 2 ? 38 : 24;

  let scoreNotice = notice.length === 0 ? 42 : 20;
  if (findings.some((f) => f.id.startsWith("probation")) && notice.length === 0) scoreNotice = 35;

  let scoreOvertime = 14;
  if (findings.some((f) => f.subcategory.includes("Overtime included"))) scoreOvertime = 58;
  else if (findings.some((f) => f.subcategory.includes("Overtime compensation"))) scoreOvertime = 22;
  if (missing.some((m) => m.id === "overtime-handling")) scoreOvertime += 18;

  let scoreExpat =
    expat.filter((f) => f.subcategory.toLowerCase().includes("relocation")).length * 28 +
    expat.filter((f) => f.subcategory.includes("30%")).length * 14 +
    expat.filter((f) => f.id.includes("visa")).length * 12;
  scoreExpat = Math.min(100, scoreExpat + 8);

  let scoreRepay = 12;
  if (findings.some((f) => f.subcategory.includes("Relocation repayment") && f.riskLabel === "review_before_signing"))
    scoreRepay = 72;
  else if (findings.some((f) => f.subcategory.includes("relocation") || f.subcategory.includes("Relocation"))) scoreRepay = 48;
  else if (findings.some((f) => f.subcategory.includes("Signing"))) scoreRepay = 44;

  const missWeighted = missing.reduce((acc, m) => {
    const w =
      m.id === "salary" || m.id === "salary-period"
        ? 14
        : m.id === "notice" || m.id === "probation"
          ? 12
          : m.id === "handbook-annex" || m.id === "overtime-handling"
            ? 11
            : 9;
    return acc + w;
  }, 0);
  const missScore = Math.min(100, missWeighted);

  let scorePolicy = policy.length ? 52 : 14;
  if (findings.some((f) => f.id.startsWith("handbook-material-terms"))) scorePolicy = Math.min(100, scorePolicy + 22);
  if (findings.some((f) => f.category === "policy_data" && f.riskLabel === "broad_strong_wording")) scorePolicy += 12;

  const dims: RiskCategoryResult[] = [
    { dimension: "salary_clarity", score: Math.min(100, scoreSalary), summary: "Salary components, period, and overtime wording." },
    { dimension: "termination_clarity", score: Math.min(100, scoreNotice), summary: "Notice, probation, and end-of-contract clarity." },
    { dimension: "restrictive_clauses", score: scoreRestrictive, summary: "Non-compete, side-work, confidentiality, IP." },
    { dimension: "overtime_work_time", score: Math.min(100, scoreOvertime + (work.length ? 6 : 12)), summary: "Hours, overtime, remote expectations." },
    { dimension: "expat_immigration", score: scoreExpat, summary: "Permits, relocation, 30% ruling mentions." },
    { dimension: "repayment_clawback", score: Math.min(100, scoreRepay), summary: "Relocation or bonus repayment exposure." },
    { dimension: "missing_information", score: missScore, summary: "Essential topics not clearly found." },
    { dimension: "policy_dependency", score: Math.min(100, scorePolicy), summary: "Handbook / policy incorporation risk." },
  ];
  return dims;
}

export function overallFromDimensionsEnhanced(dims: RiskCategoryResult[], findings: ClauseFinding[]): OverallConcernLevel {
  const avg = dims.reduce((a, d) => a + d.score, 0) / dims.length;
  const hard =
    findings.filter((f) => f.riskLabel === "review_before_signing").length * 20 +
    findings.filter((f) => f.appearsBroad && f.category === "restrictive_clauses").length * 14 +
    findings.filter((f) => f.id.startsWith("handbook-material-terms")).length * 6;
  const total = avg + hard;
  if (total >= 78) return "high_review_recommended";
  if (total >= 58) return "elevated_concern";
  if (total >= 38) return "moderate_concern";
  return "low_concern";
}
