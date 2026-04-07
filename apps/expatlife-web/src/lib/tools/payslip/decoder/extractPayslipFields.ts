/**
 * Map parsed lines to canonical ExtractedField rows (period / YTD / confidence).
 */
import {
  CANONICAL_PAYROLL_TERMS,
  sortedAliasesForTerm,
  type CanonicalPayrollTerm,
} from "@/src/lib/payslip/canonicalRegistry";
import type { ColumnHeaderContext } from "@/src/lib/payslip/columnHeaderContext";
import { inferColumnAmounts } from "@/src/lib/payslip/inferColumns";
import { matchesNormAndAlias, normalizeForAlias, type ParsedPayslipLine } from "@/src/lib/tools/payslip/decoder/parsePayslipLines";
import type {
  ExtractedField,
  FieldConfidence,
  MatchSource,
  PayslipDecoderDiagnostics,
  PayslipFieldKey,
} from "@/src/lib/tools/payslip/decoder/types";
import { findMoneyTokensInLine, findPercentageTokensInLine } from "@/src/lib/tools/payslip/parse/amounts";

type AliasHit = PayslipDecoderDiagnostics["aliasHits"][number];

/** Core payslip rows — bump confidence when label match is clean and amounts exist. */
const HIGH_TRUST_MONEY_KEYS = new Set<PayslipFieldKey>([
  "gross_salary",
  "net_salary",
  "wage_tax",
  "wage_tax_tb",
  "wage_tax_tbb",
  "taxable_wage_base",
  "health_insurance_wage_base",
  "labour_credit",
  "general_tax_credit",
  "holiday_allowance",
  "holiday_allowance_base",
  "pension_employee",
  "pension_taxable_base",
  "tax_free_reimbursement",
  "ruling_correction_taxable",
  "ruling_correction_special",
  "wga_deduction",
  "social_fund",
  "days_worked",
  "hours_worked",
  "payments_total",
  "deductions_total",
]);

function confidenceFromSignals(args: {
  key: PayslipFieldKey;
  aliasLen: number;
  tokenCount: number;
  source: MatchSource;
  shapeConfidence: number;
}): FieldConfidence {
  let score = 0;
  if (args.source === "exact_label") score += 4;
  else if (args.source === "regex_label") score += 3;
  else if (args.source === "alias_label") score += 2;
  else score += 1;
  if (args.aliasLen >= 14) score += 2;
  else if (args.aliasLen >= 8) score += 1;
  if (args.tokenCount >= 2) score += 1;
  if (args.shapeConfidence >= 0.25) score += 2;
  else if (args.shapeConfidence >= 0.1) score += 1;

  if (HIGH_TRUST_MONEY_KEYS.has(args.key) && args.tokenCount >= 1) {
    if (args.source === "exact_label") score += 2;
    else if (args.source === "alias_label" && args.aliasLen >= 5) score += 1;
  }

  if (score >= 6) return "high";
  if (score >= 4) return "medium";
  return "low";
}

/** Avoid tagging every row as "mixed" just because the dictionary supports NL+EN. */
function inferFieldLanguage(rawLine: string, matchedAlias: string): "nl" | "en" | "mixed" | undefined {
  const raw = rawLine.toLowerCase();
  const alias = matchedAlias.replace(/^regex:/, "").toLowerCase();
  const enFromAlias =
    /^(gross|net pay|net salary|basic salary|base salary|tax withholding|payroll tax|holiday pay|pension contribution|employee pension|taxable wage|taxable income|health insurance wage|total payments|total deductions|withholdings total|earnings total|vacation pay)/.test(
      alias
    );
  const nlFromAlias =
    /^(salaris|netto|bruto|loonheffing|loonhef|vakantiegeld|pensioen|heffingsloon|arbeidskorting|gewerkte|inhoudingen|betalingen|corr)/.test(
      alias
    );
  const enFromLine =
    /\b(gross salary|net pay|tax withholding|holiday pay|pension contribution|year to date|pay period|employer:|employee:)\b/i.test(raw);
  const nlFromLine =
    /\b(salaris|netto|bruto|loonheff|vakantiegeld|pensioen|heffingsloon|werkgever|werknemer|gewerkte dagen|inhoudingen|betalingen|mei\s+20|mrt\s+20)\b/i.test(
      raw
    );
  if ((enFromAlias || enFromLine) && (nlFromAlias || nlFromLine)) return "mixed";
  if (enFromAlias || enFromLine) return "en";
  if (nlFromAlias || nlFromLine) return "nl";
  return undefined;
}

function findBestTerm(normLabel: string): { term: CanonicalPayrollTerm; alias: string; source: MatchSource } | null {
  let best: { term: CanonicalPayrollTerm; alias: string; source: MatchSource; score: number } | null = null;

  for (const term of CANONICAL_PAYROLL_TERMS) {
    for (const alias of sortedAliasesForTerm(term)) {
      if (!matchesNormAndAlias(normLabel, alias)) continue;
      const source: MatchSource = normLabel === alias ? "exact_label" : "alias_label";
      const score = alias.length * 1000 - term.priority + (source === "exact_label" ? 50 : 0);
      if (!best || score > best.score) {
        best = { term, alias, source, score };
      }
    }
    if (term.regexPatterns) {
      for (const re of term.regexPatterns) {
        const r = new RegExp(re.source, re.flags);
        if (r.test(normLabel)) {
          const source: MatchSource = "regex_label";
          const score = 8000 - term.priority;
          if (!best || score > best.score) {
            best = { term, alias: `regex:${term.key}`, source, score };
          }
        }
      }
    }
  }
  if (!best) return null;
  return { term: best.term, alias: best.alias, source: best.source };
}

function mergeDuplicateMoneyFields(
  fields: ExtractedField[]
): { fields: ExtractedField[]; duplicates: NonNullable<PayslipDecoderDiagnostics["duplicateFieldKeys"]> } {
  const byKey = new Map<PayslipFieldKey, ExtractedField[]>();
  for (const f of fields) {
    const arr = byKey.get(f.key) ?? [];
    arr.push(f);
    byKey.set(f.key, arr);
  }
  const rank = (c: FieldConfidence) => (c === "high" ? 3 : c === "medium" ? 2 : 1);
  const out: ExtractedField[] = [];
  const duplicates: NonNullable<PayslipDecoderDiagnostics["duplicateFieldKeys"]> = [];
  for (const [fieldKey, arr] of Array.from(byKey.entries())) {
    if (arr.length === 1) {
      out.push(arr[0]!);
      continue;
    }
    const sorted = [...arr].sort((a, b) => {
      const dr = rank(b.confidence) - rank(a.confidence);
      if (dr !== 0) return dr;
      const pa = a.periodAmount?.normalized != null ? 1 : 0;
      const pb = b.periodAmount?.normalized != null ? 1 : 0;
      return pb - pa;
    });
    out.push(sorted[0]!);
    for (let i = 1; i < sorted.length; i++) {
      duplicates.push({
        key: fieldKey,
        keptLine: sorted[0]!.rawLine.slice(0, 160),
        droppedLine: sorted[i]!.rawLine.slice(0, 160),
      });
    }
  }
  return { fields: out, duplicates };
}

function buildField(
  term: CanonicalPayrollTerm,
  alias: string,
  source: MatchSource,
  pl: ParsedPayslipLine,
  aliasHits: AliasHit[],
  amounts: ReturnType<typeof inferColumnAmounts>,
  percents: ReturnType<typeof findPercentageTokensInLine>
): ExtractedField {
  const { period, ytd, taxable, ratePercent, indexes } = amounts;
  const tokenCount = pl.moneyTokens.filter((t) => t.value !== 0).length;
  const notes: string[] = [];
  if (tokenCount === 1 && term.oftenPeriodYtd) {
    notes.push("Only one amount detected on this row — year-to-date was not inferred.");
  }
  if (tokenCount >= 3) {
    notes.push("Multiple numeric columns detected; period / YTD assignment follows common payroll column order and may not match every vendor.");
  }
  if (percents.length > 0 && term.key === "wage_tax_tbb") {
    notes.push(`Withholding percentage on this row: ${percents.map((p) => p.raw).join(", ")}.`);
  }

  if (
    term.key === "holiday_allowance" &&
    tokenCount === 3 &&
    period?.normalized != null &&
    ytd?.normalized != null &&
    Math.abs(period.normalized - ytd.normalized) < 0.02
  ) {
    notes.push(
      "Each printed column shows the same figure on this row — some payroll layouts repeat the period amount in multiple columns."
    );
  }

  const confidence = confidenceFromSignals({
    key: term.key,
    aliasLen: alias.startsWith("regex:") ? 12 : alias.length,
    tokenCount,
    source,
    shapeConfidence: amounts.shapeConfidence,
  });

  const language = inferFieldLanguage(pl.rawLine, alias);

  aliasHits.push({ alias, key: term.key, line: pl.rawLine.slice(0, 140) });

  return {
    key: term.key,
    label: term.primaryLabel,
    canonicalLabel: term.primaryLabel,
    explanation: term.explanation,
    periodAmount: period,
    ytdAmount: ytd,
    taxableAmount: taxable,
    ratePercent: ratePercent ?? undefined,
    language,
    rawLine: pl.rawLine,
    rawLabelMatch: pl.labelPart.slice(0, 120),
    source,
    confidence,
    notes: notes.length ? notes : undefined,
  };
}

/** Lines already consumed by money-field extraction (by lineIndex). */
export function extractMoneyFields(
  parsed: ParsedPayslipLine[],
  aliasHits: AliasHit[],
  headerContext: ColumnHeaderContext
): {
  fields: ExtractedField[];
  consumedLineIndexes: Set<number>;
  amountIndexes: PayslipDecoderDiagnostics["selectedAmountIndexes"];
  duplicateFieldKeys: NonNullable<PayslipDecoderDiagnostics["duplicateFieldKeys"]>;
} {
  const rawFields: ExtractedField[] = [];
  const consumed = new Set<number>();
  const amountIndexes: PayslipDecoderDiagnostics["selectedAmountIndexes"] = [];
  const seenRawLine = new Set<string>();

  for (const pl of parsed) {
    if (pl.moneyTokens.length === 0) continue;
    const norm = normalizeForAlias(pl.labelPart);
    if (norm.length < 2) continue;

    const hit = findBestTerm(norm);
    if (!hit) continue;

    const percents = findPercentageTokensInLine(pl.rawLine);
    const amounts = inferColumnAmounts({
      key: hit.term.key,
      money: pl.moneyTokens,
      percents,
      rowShapeHint: hit.term.rowShapeHint ?? "default",
      headerContext,
    });

    const field = buildField(hit.term, hit.alias, hit.source, pl, aliasHits, amounts, percents);
    if (seenRawLine.has(pl.rawLine)) continue;
    seenRawLine.add(pl.rawLine);
    consumed.add(pl.lineIndex);
    amountIndexes.push({
      key: hit.term.key,
      periodIdx: amounts.indexes.periodIdx,
      ytdIdx: amounts.indexes.ytdIdx,
      taxableIdx: amounts.indexes.taxableIdx,
    });
    rawFields.push(field);
  }

  const { fields, duplicates } = mergeDuplicateMoneyFields(rawFields);
  return { fields, consumedLineIndexes: consumed, amountIndexes, duplicateFieldKeys: duplicates };
}

export function extractMetadataFields(lines: string[]): { fields: ExtractedField[]; consumedLineIndexes: Set<number> } {
  const out: ExtractedField[] = [];
  const consumed = new Set<number>();

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i] ?? "";
    const t = rawLine.trim();
    if (!t) continue;

    // Plain column-guide text (no amounts) — remove from unresolved noise
    if (
      t.length < 160 &&
      /^(ytd|cumulative|cumulatief|jaar\s*t\/m|year\s*to\s*date|this\s*period|current\s*period|huidige\s*periode)\b/i.test(
        t
      ) &&
      !/\d+,\d{2}/.test(t) &&
      !/\d+\.\d{2}/.test(t)
    ) {
      consumed.add(i);
      continue;
    }

    if (/^pay\s+period\b/i.test(t) && t.length < 120) {
      out.push({
        key: "period_label",
        label: "Pay period",
        canonicalLabel: "Period label",
        explanation: "Pay-period heading from the slip (may mix English labels with Dutch dates).",
        rawLine: t,
        rawLabelMatch: t.slice(0, 100),
        source: "row_inference",
        confidence: "high",
      });
      consumed.add(i);
      continue;
    }

    if (/\bB\.V\.|\bB\.V\b|\bBV\b/i.test(t) && t.length < 140 && !/^[\d\s.,€%-]+$/.test(t)) {
      out.push({
        key: "employer_name",
        label: "Employer",
        canonicalLabel: "Employer name",
        explanation: "Employer legal name as it appears on the payslip layout.",
        rawLine: t,
        rawLabelMatch: t.slice(0, 80),
        source: "row_inference",
        confidence: "medium",
        notes: ["Detected from a line that looks like a company name (e.g. B.V.). Verify against your contract."],
      });
      consumed.add(i);
      continue;
    }

    if (/^(Dhr\.?|Mw\.?|Mevr\.?)\s+/i.test(t) && t.length < 160) {
      out.push({
        key: "employee_name",
        label: "Employee",
        canonicalLabel: "Employee name",
        explanation: "Employee name line (common Dutch prefixes Dhr./Mw.).",
        rawLine: t,
        rawLabelMatch: t.slice(0, 80),
        source: "row_inference",
        confidence: "medium",
      });
      consumed.add(i);
      continue;
    }

    if (/^functie\s*[:\-]?\s*/i.test(t)) {
      const rest = t.replace(/^functie\s*[:\-]?\s*/i, "").trim();
      if (rest.length > 2) {
        out.push({
          key: "job_title",
          label: "Job title",
          canonicalLabel: "Function / role",
          explanation: "Role or job title field when labeled as functie.",
          rawLine: t,
          rawLabelMatch: rest.slice(0, 80),
          source: "exact_label",
          confidence: "high",
        });
        consumed.add(i);
      }
      continue;
    }

    if (/^job\s*title\s*[:\-]?\s*/i.test(t)) {
      const rest = t.replace(/^job\s*title\s*[:\-]?\s*/i, "").trim();
      if (rest.length > 2) {
        out.push({
          key: "job_title",
          label: "Job title",
          canonicalLabel: "Job title",
          explanation: "Role or job title in English.",
          rawLine: t,
          rawLabelMatch: rest.slice(0, 80),
          source: "exact_label",
          confidence: "high",
        });
        consumed.add(i);
      }
      continue;
    }

    if (
      /^(jan|feb|mrt|apr|mei|jun|jul|aug|sep|okt|nov|dec)\s+20\d{2}\s*$/i.test(t) ||
      (/^\d{1,2}-\d{1,2}-20\d{2}\s*$/i.test(t) && t.length < 24)
    ) {
      out.push({
        key: "period_label",
        label: "Pay period",
        canonicalLabel: "Period label",
        explanation: "Human-readable pay period or start date text from the slip.",
        rawLine: t,
        rawLabelMatch: t,
        source: "context_inference",
        confidence: "medium",
      });
      consumed.add(i);
      continue;
    }
  }

  return { fields: dedupeMetadata(out), consumedLineIndexes: consumed };
}

function dedupeMetadata(fields: ExtractedField[]): ExtractedField[] {
  const seen = new Set<PayslipFieldKey>();
  const out: ExtractedField[] = [];
  for (const f of fields) {
    if (f.key === "period_label" && seen.has("period_label")) continue;
    if (f.key === "employer_name" && seen.has("employer_name")) continue;
    if (f.key === "employee_name" && seen.has("employee_name")) continue;
    if (f.key === "job_title" && seen.has("job_title")) continue;
    seen.add(f.key);
    out.push(f);
  }
  return out;
}
