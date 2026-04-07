/**
 * Deterministic, rule-based payslip line parser (layered matching and amount heuristics).
 * v1 intentionally avoids LLM decoding — extend label/amount rules here.
 */
import {
  collapseSpaces,
  extractTrailingAmount,
  findMoneyTokensInLine,
  foldAccents,
  pickAmountForKeyword,
} from "@/src/lib/tools/payslip/parse/amounts";
import type {
  AmountCandidate,
  DeductionField,
  DecodedTerm,
  GlossaryLineHighlight,
  MoneyConfidence,
  MoneyField,
  ParseDiagnostics,
  PayslipParseResult,
} from "@/src/lib/tools/payslip/types";

type Hit = {
  field: string;
  line: string;
  lineIndex: number;
  rule: string;
  layer: 1 | 2 | 3 | 4;
  score: number;
  amountRaw: string;
  normalizedAmount: number;
  labelFound: string;
};

const GLOSSARY_NEEDLES: Array<{ id: string; term: string; needles: string[] }> = [
  {
    id: "bruto",
    term: "Bruto loon",
    needles: ["bruto loon", "brutoloon", "bruto salaris", "gross salary", "gross pay", "gross wages"],
  },
  {
    id: "netto",
    term: "Netto loon",
    needles: [
      "netto loon",
      "netto uitbetaling",
      "uit te betalen",
      "te betalen",
      "netto salaris",
      "net pay",
      "net salary",
      "take-home",
      "take home",
    ],
  },
  {
    id: "loonheffing",
    term: "Loonheffing",
    needles: ["loonheffing", "loonbelasting", "inhouding loonbelasting", "wage tax", "payroll tax", "income tax withheld"],
  },
  { id: "sv", term: "SV-loon", needles: ["sv loon", "sv-loon", "svloon", "sociale verzekering"] },
  { id: "belastbaar", term: "Belastbaar loon", needles: ["belastbaar loon", "belastbare loon", "taxable wage", "taxable income"] },
  {
    id: "vakantie",
    term: "Vakantiegeld",
    needles: [
      "vakantiegeld",
      "vakantietoeslag",
      "reservering vakantiegeld",
      "reserv. vakantiegeld",
      "holiday allowance",
      "holiday pay",
    ],
  },
  {
    id: "pensioen",
    term: "Pensioen",
    needles: [
      "pensioenpremie",
      "werknemerspremie pensioen",
      "premie pensioen",
      "pensioen werknemer",
      "employee pension",
      "employer pension",
      "pension contribution",
    ],
  },
  { id: "vergoeding", term: "Vergoedingen", needles: ["vergoeding", "vergoedingen"] },
  { id: "inhouding", term: "Inhoudingen", needles: ["inhouding", "inhoudingen"] },
  { id: "bijzonder", term: "Bijzonder tarief", needles: ["bijzonder tarief", "bijz. tarief", "bijzonder %"] },
  { id: "periode", term: "Periode", needles: ["loonperiode", "salarisperiode", "betaalperiode", "periode:", "datum:"] },
];

function lineNorm(line: string): string {
  return foldAccents(collapseSpaces(line.toLowerCase()));
}

/** Layer 1 — exact / strong phrase patterns. */
function layer1Hits(line: string, idx: number, n: string): Hit[] {
  const hits: Hit[] = [];
  const amt = extractTrailingAmount(line);
  const push = (
    field: string,
    rule: string,
    score: number,
    labelFound: string,
    amount: { display: string; value: number } | null = amt
  ) => {
    if (!amount || amount.value === 0) return;
    hits.push({
      field,
      line,
      lineIndex: idx,
      rule,
      layer: 1,
      score,
      amountRaw: amount.display,
      normalizedAmount: amount.value,
      labelFound,
    });
  };

  if (/\bbruto\s+loon\b/.test(n) || /^bruto\s*[:-]/.test(n) || /\bbruto\s+salaris\b/.test(n)) {
    push("gross", "L1:bruto-loon", 9, "bruto loon");
  }
  if (/\bnetto\s+loon\b/.test(n) || /\bnetto\s+uitbetaling\b/.test(n) || /\buit\s+te\s+betalen\b/.test(n)) {
    push("net", "L1:netto-core", 9, n.match(/netto\s+loon|netto\s+uitbetaling|uit\s+te\s+betalen/)?.[0] ?? "netto");
  }
  if (/\b(loonheffing|loonbelasting)\b/.test(n) && !/belastbaar/.test(n)) {
    push("wageTax", "L1:loonheffing", 9, n.includes("loonheffing") ? "loonheffing" : "loonbelasting");
  }
  if (/\b(belastbaar\s+loon|belastbare\s+loon)\b/.test(n)) {
    push("taxable", "L1:belastbaar-loon", 9, "belastbaar loon");
  }
  if (/\b(sv[\s-]*loon|svloon)\b/.test(n) || /\bsociale\s+verzekeringen\b/.test(n)) {
    push("sv", "L1:sv-loon", 8, "sv loon");
  }
  if (/\b(vakantiegeld|vakantietoeslag)\b/.test(n) || /\breservering\s+vakantiegeld\b/.test(n)) {
    push("holiday", "L1:vakantiegeld", 9, n.includes("reservering") ? "reservering vakantiegeld" : "vakantiegeld");
  }
  if (/\b(bijzonder\s+tarief|bijz\.\s*tarief)\b/.test(n) && amt && !/%/.test(line)) {
    push("specialRate", "L1:bijzonder-tarief", 7, "bijzonder tarief");
  }
  if (/\b(werknemerspremie\s+pensioen|pensioenpremie\s+werknemer)\b/.test(n)) {
    push("pensionEmp", "L1:pensioen-werknemer-phrase", 9, "werknemerspremie pensioen");
  }
  if (/\bpensioenpremie\b/.test(n) && !/\bwerkgever\b/.test(n)) {
    push("pensionEmp", "L1:pensioenpremie", 8, "pensioenpremie");
  }
  if (/\bpensioenpremie\b/.test(n) && /\bwerkgever\b/.test(n)) {
    push("pensionEr", "L1:pensioenpremie-werkgever", 9, "pensioenpremie werkgever");
  }
  if (/\bpensioen\b/.test(n) && /\b(werkgever|werkgeversbijdrage)\b/.test(n) && !/\bpensioenpremie\b/.test(n)) {
    push("pensionEr", "L1:pensioen-werkgever", 8, "pensioen werkgever");
  }

  return hits;
}

/** Layer 2 — fuzzy: substring stems after normalization. */
function layer2Hits(line: string, idx: number, n: string): Hit[] {
  const hits: Hit[] = [];
  const amt = extractTrailingAmount(line);
  if (!amt || amt.value === 0) return hits;

  const tryField = (field: string, needles: string[], rule: string, score: number, labelFound: string) => {
    if (needles.some((nd) => n.includes(nd))) {
      hits.push({
        field,
        line,
        lineIndex: idx,
        rule,
        layer: 2,
        score,
        amountRaw: amt.display,
        normalizedAmount: amt.value,
        labelFound,
      });
    }
  };

  if (/\bbruto\b/.test(n) && /\b(loon|salaris|uurloon)\b/.test(n) && !hits.some((h) => h.field === "gross")) {
    tryField("gross", ["bruto"], "L2:bruto+fuzzy", 6, "bruto");
  }
  if (/\bnetto\b/.test(n) && /\b(loon|salaris|betaal)\b/.test(n)) {
    tryField("net", ["netto"], "L2:netto+fuzzy", 6, "netto");
  }
  if (/\bte\s+ontvangen\b/.test(n) || /\bamount\s+payable\b/.test(n)) {
    tryField("net", ["ontvangen", "payable"], "L2:te-ontvangen", 6, "te ontvangen");
  }
  tryField("wageTax", ["loonheffing", "loonbelasting"], "L2:tax-words", 6, "loonheffing");
  tryField("taxable", ["belastbaar"], "L2:belastbaar", 6, "belastbaar");
  tryField("sv", ["sv loon", "sv-loon", "premies werknemer"], "L2:sv", 5, "sv");
  tryField("holiday", ["vakantie"], "L2:vakantie", 6, "vakantie");
  if (/\bpensioen\b/.test(n) && /\b(werknemer|deelnemer|employee)\b/.test(n)) {
    tryField("pensionEmp", ["pensioen"], "L2:pensioen-werknemer", 6, "pensioen werknemer");
  }

  return hits;
}

/** Layer 3 — amount nearest keyword position. */
function layer3Hits(line: string, idx: number, n: string): Hit[] {
  const tokens = findMoneyTokensInLine(line);
  if (tokens.length === 0) return [];

  const hits: Hit[] = [];
  const tryKw = (field: string, kw: string, rule: string, score: number) => {
    const pos = n.indexOf(kw);
    if (pos < 0) return;
    const t = pickAmountForKeyword(line, pos, tokens);
    if (!t || t.value === 0) return;
    hits.push({
      field,
      line,
      lineIndex: idx,
      rule,
      layer: 3,
      score,
      amountRaw: t.raw,
      normalizedAmount: t.value,
      labelFound: kw,
    });
  };

  tryKw("gross", "bruto", "L3:near-bruto", 5);
  tryKw("net", "netto", "L3:near-netto", 5);
  tryKw("wageTax", "loonheffing", "L3:near-loonheffing", 5);
  tryKw("wageTax", "loonbelasting", "L3:near-loonbelasting", 5);
  tryKw("taxable", "belastbaar", "L3:near-belastbaar", 5);
  tryKw("holiday", "vakantiegeld", "L3:near-vakantiegeld", 5);
  tryKw("pensionEmp", "pensioen", "L3:near-pensioen", 4);

  return hits;
}

/** Layer 4 — previous line label + current line amount only. */
function layer4Hits(lines: string[], idx: number): Hit[] {
  if (idx < 1) return [];
  const prev = lines[idx - 1];
  const cur = lines[idx];
  if (!prev || !cur) return [];
  const prevAmt = findMoneyTokensInLine(prev);
  const curAmt = findMoneyTokensInLine(cur);
  if (prevAmt.length > 0 || curAmt.length !== 1) return [];

  const pn = lineNorm(prev);
  const token = curAmt[0];
  if (token.value === 0) return [];

  const mk = (field: string, rule: string, labelFound: string, score: number): Hit => ({
    field,
    line: `${prev} ${cur}`,
    lineIndex: idx,
    rule,
    layer: 4,
    score,
    amountRaw: token.raw,
    normalizedAmount: token.value,
    labelFound,
  });

  const hits: Hit[] = [];
  if (/\bbruto\b/.test(pn) && /\b(loon|salaris)\b/.test(pn)) hits.push(mk("gross", "L4:prev-bruto", "bruto (split line)", 4));
  if (/\bnetto\b/.test(pn)) hits.push(mk("net", "L4:prev-netto", "netto (split line)", 4));
  return hits;
}

function confidenceFromScore(score: number): MoneyConfidence {
  if (score >= 8) return "high";
  if (score >= 5) return "medium";
  return "low";
}

function mergeHits(all: Hit[]): Map<string, Hit[]> {
  const m = new Map<string, Hit[]>();
  for (const h of all) {
    const arr = m.get(h.field) ?? [];
    arr.push(h);
    m.set(h.field, arr);
  }
  return m;
}

/** One hit per (field, lineIndex): keep highest score; tie-break prefer lower layer (more exact). */
function dedupeHits(hits: Hit[]): Hit[] {
  const m = new Map<string, Hit>();
  for (const h of hits) {
    const k = `${h.field}:${h.lineIndex}`;
    const cur = m.get(k);
    if (!cur || h.score > cur.score || (h.score === cur.score && h.layer < cur.layer)) m.set(k, h);
  }
  return Array.from(m.values());
}

function bestHitSimple(hits: Hit[]): { chosen: Hit | null; rejected: Hit[] } {
  if (hits.length === 0) return { chosen: null, rejected: [] };
  const sorted = [...hits].sort((a, b) => b.score - a.score || a.layer - b.layer);
  return { chosen: sorted[0], rejected: sorted.slice(1) };
}

function resolveNetField(hits: Hit[]): {
  mf: MoneyField | undefined;
  chosenHit?: Hit;
  ambiguous: boolean;
  candidates: AmountCandidate[];
  rejected: Hit[];
} {
  if (hits.length === 0) return { mf: undefined, chosenHit: undefined, ambiguous: false, candidates: [], rejected: [] };
  const sorted = [...hits].sort((a, b) => b.score - a.score || a.layer - b.layer);
  const strong = sorted.filter((h) => h.score >= 5);
  const distinctCents = new Set(strong.map((h) => Math.round(h.normalizedAmount * 100)));
  if (strong.length >= 2 && distinctCents.size >= 2) {
    const candidates: AmountCandidate[] = [];
    const seenCents = new Set<number>();
    for (const h of strong) {
      const c = Math.round(h.normalizedAmount * 100);
      if (seenCents.has(c)) continue;
      seenCents.add(c);
      candidates.push({
        field: "net",
        labelFound: h.labelFound,
        rawLine: h.line,
        amountDisplay: h.amountRaw,
        normalizedAmount: h.normalizedAmount,
        rule: h.rule,
        score: h.score,
      });
    }
    if (candidates.length >= 2) {
      return { mf: undefined, chosenHit: undefined, ambiguous: true, candidates, rejected: sorted };
    }
  }
  const { chosen, rejected } = bestHitSimple(hits);
  if (!chosen) return { mf: undefined, chosenHit: undefined, ambiguous: false, candidates: [], rejected };
  return {
    mf: toMoneyField("Net salary (netto)", chosen),
    chosenHit: chosen,
    ambiguous: false,
    candidates: [],
    rejected,
  };
}

function toMoneyField(displayLabel: string, h: Hit): MoneyField {
  return {
    label: displayLabel,
    labelFound: h.labelFound,
    amount: h.amountRaw,
    normalizedAmount: h.normalizedAmount,
    sourceLine: h.line,
    confidence: confidenceFromScore(h.score),
  };
}

function parsePeriodLine(line: string, n: string): string | undefined {
  if (
    /\b(loonperiode|salarisperiode|betaalperiode|periode|pay\s*period)\b/i.test(line) ||
    /^\s*datum\s*:/i.test(line)
  ) {
    const cleaned = line.replace(/^\s*(loonperiode|salarisperiode|betaalperiode|periode|datum|pay\s*period)\s*[:\-]?\s*/i, "").trim();
    if (cleaned.length > 2 && cleaned.length < 120) return cleaned;
  }
  if (/^\d{1,2}[-/.]\d{1,4}/.test(line.trim()) && /\b(202[0-9]|20[0-9]{2})\b/.test(line)) {
    return line.trim().slice(0, 120);
  }
  return undefined;
}

function buildGlossaryHighlights(
  lines: string[],
  parsedFields: Set<string>
): GlossaryLineHighlight[] {
  const fieldForGloss: Record<string, string[]> = {
    bruto: ["gross"],
    netto: ["net"],
    loonheffing: ["wageTax"],
    sv: ["sv"],
    belastbaar: ["taxable"],
    vakantie: ["holiday"],
    pensioen: ["pensionEmp", "pensionEr"],
    vergoeding: ["reimbursement"],
    inhouding: ["deduction"],
    bijzonder: ["specialRate"],
    periode: ["period"],
  };

  const out: GlossaryLineHighlight[] = [];
  for (const g of GLOSSARY_NEEDLES) {
    const matchedLines: string[] = [];
    for (const line of lines) {
      const ln = lineNorm(line);
      if (g.needles.some((nd) => ln.includes(nd))) matchedLines.push(line);
    }
    if (matchedLines.length === 0) continue;
    const pf = fieldForGloss[g.id];
    const parsedIntoValue = pf ? pf.some((f) => parsedFields.has(f)) : false;
    out.push({
      termId: g.id,
      term: g.term,
      matchedLines: matchedLines.slice(0, 8),
      parsedIntoValue,
    });
  }
  return out;
}

export type ParseEngineOptions = {
  includeDiagnostics?: boolean;
};

export type ParseEngineResult = {
  result: PayslipParseResult;
  diagnostics?: ParseDiagnostics;
};

export function parsePayslipEngine(rawText: string, options?: ParseEngineOptions): ParseEngineResult {
  const lines = rawText.split(/\n/).map((l) => l.trim());
  const allHits: Hit[] = [];
  const matchedRules: ParseDiagnostics["matchedRules"] = [];
  const rejectedCandidates: ParseDiagnostics["rejectedCandidates"] = [];

  let period: string | undefined;
  let employerName: string | undefined;
  let employeeName: string | undefined;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    const n = lineNorm(line);

    if (!period) {
      const p = parsePeriodLine(line, n);
      if (p) period = p;
    }
    if (!employerName && /\b(werkgever|employer)\b/i.test(line)) {
      const rest = line.replace(/^.*?\b(werkgever|employer)\b\s*[:\-]?\s*/i, "").trim();
      if (rest.length > 2) employerName = rest.slice(0, 200);
    }
    if (!employeeName && /\b(werknemer|medewerker|employee|naam)\b/i.test(line) && !/bruto|netto/i.test(line)) {
      const rest = line.replace(/^.*?\b(werknemer|medewerker|employee|naam)\b\s*[:\-]?\s*/i, "").trim();
      if (rest.length > 2 && rest.length < 200) employeeName = rest;
    }

    allHits.push(...layer1Hits(line, i, n));
    allHits.push(...layer2Hits(line, i, n));
    allHits.push(...layer3Hits(line, i, n));
    allHits.push(...layer4Hits(lines, i));

    const amtEn = extractTrailingAmount(line);
    if (amtEn && amtEn.value !== 0) {
      if (/\bgross\s+(salary|pay|wages)\b/.test(n)) {
        allHits.push({
          field: "gross",
          line,
          lineIndex: i,
          rule: "L-EN:gross",
          layer: 2,
          score: 5,
          amountRaw: amtEn.display,
          normalizedAmount: amtEn.value,
          labelFound: "gross salary",
        });
      }
      if (/\bnet\s+(pay|salary|wages)\b/.test(n)) {
        allHits.push({
          field: "net",
          line,
          lineIndex: i,
          rule: "L-EN:net",
          layer: 2,
          score: 5,
          amountRaw: amtEn.display,
          normalizedAmount: amtEn.value,
          labelFound: "net pay",
        });
      }
      if (/\b(wage\s+tax|payroll\s+tax)\b/.test(n) && !/\bbelastbaar\b/.test(n)) {
        allHits.push({
          field: "wageTax",
          line,
          lineIndex: i,
          rule: "L-EN:wage-tax",
          layer: 2,
          score: 5,
          amountRaw: amtEn.display,
          normalizedAmount: amtEn.value,
          labelFound: n.includes("payroll") ? "payroll tax" : "wage tax",
        });
      }
      if (/\bholiday\s+allowance\b/.test(n) || /\bholiday\s+pay\b/.test(n)) {
        allHits.push({
          field: "holiday",
          line,
          lineIndex: i,
          rule: "L-EN:holiday",
          layer: 2,
          score: 5,
          amountRaw: amtEn.display,
          normalizedAmount: amtEn.value,
          labelFound: "holiday allowance",
        });
      }
      if (/\bemployee\s+pension\b/.test(n)) {
        allHits.push({
          field: "pensionEmp",
          line,
          lineIndex: i,
          rule: "L-EN:employee-pension",
          layer: 2,
          score: 5,
          amountRaw: amtEn.display,
          normalizedAmount: amtEn.value,
          labelFound: "employee pension",
        });
      }
      if (/\bemployer\s+pension\b/.test(n)) {
        allHits.push({
          field: "pensionEr",
          line,
          lineIndex: i,
          rule: "L-EN:employer-pension",
          layer: 2,
          score: 5,
          amountRaw: amtEn.display,
          normalizedAmount: amtEn.value,
          labelFound: "employer pension",
        });
      }
    }
  }

  const deduped = dedupeHits(allHits);
  const byField = mergeHits(deduped);
  const warnings: string[] = [];
  const ambiguousNetCandidates: AmountCandidate[] = [];

  const pushRejected = (rejected: Hit[], fieldKey: string) => {
    for (const r of rejected) {
      rejectedCandidates.push({
        reason: `Alternate candidate for ${fieldKey}`,
        linePreview: r.line.slice(0, 120),
        rule: r.rule,
        normalizedAmount: r.normalizedAmount,
      });
    }
  };

  const takeSimple = (fieldKey: string, displayLabel: string): MoneyField | undefined => {
    const hits = byField.get(fieldKey) ?? [];
    const { chosen, rejected } = bestHitSimple(hits);
    pushRejected(rejected, fieldKey);
    if (!chosen) return undefined;
    matchedRules.push({ rule: chosen.rule, lineIndex: chosen.lineIndex, field: fieldKey });
    return toMoneyField(displayLabel, chosen);
  };

  const gross = takeSimple("gross", "Gross salary (bruto)");
  const wageTax = takeSimple("wageTax", "Wage tax / loonheffing");
  const taxable = takeSimple("taxable", "Taxable wage (belastbaar loon)");
  const sv = takeSimple("sv", "Social / employee premiums (simplified)");
  const holiday = takeSimple("holiday", "Holiday allowance (vakantiegeld)");
  const pensionEmp = takeSimple("pensionEmp", "Employee pension contribution");
  const pensionEr = takeSimple("pensionEr", "Employer pension contribution");
  const specialRate = takeSimple("specialRate", "Bijzonder tarief (withholding %)");

  const netHits = byField.get("net") ?? [];
  const netRes = resolveNetField(netHits);
  let net: MoneyField | undefined;
  if (netRes.ambiguous) {
    ambiguousNetCandidates.push(...netRes.candidates);
    warnings.push(
      `Multiple plausible net pay lines were found (${netRes.candidates.length}). We did not pick one automatically — check the raw text and your bank payment.`
    );
    pushRejected(netRes.rejected, "net");
  } else {
    net = netRes.mf;
    pushRejected(netRes.rejected, "net");
    if (netRes.chosenHit) {
      matchedRules.push({
        rule: netRes.chosenHit.rule,
        lineIndex: netRes.chosenHit.lineIndex,
        field: "net",
      });
    }
  }

  const reimbursementLines: MoneyField[] = [];
  const deductionLines: DeductionField[] = [];
  const usedLineIdx = new Set<number>();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    const low = line.toLowerCase();

    if (/\bvergoeding(en)?\b/i.test(low) && !/\b(km|kilometer)\b/i.test(low)) {
      const amt = extractTrailingAmount(line);
      if (amt && amt.value > 0 && !/\bbruto|netto|belastbaar\b/.test(low)) {
        const label = line.replace(/\s*[\d€.,\s()\-]+\s*$/i, "").trim().slice(0, 80) || "Vergoeding";
        reimbursementLines.push({
          label,
          labelFound: "vergoeding",
          amount: amt.display,
          normalizedAmount: amt.value,
          sourceLine: line,
          confidence: "medium",
        });
        usedLineIdx.add(i);
      }
    }
    if (/\binhouding(en)?\b/i.test(low) && !/loonbelasting|loonheffing/i.test(low)) {
      const amt = extractTrailingAmount(line);
      if (amt) {
        deductionLines.push({
          label: line.replace(/\s*[\d€.,\s()\-]+\s*$/i, "").trim().slice(0, 80) || "Inhouding",
          labelFound: "inhouding",
          amount: amt.display,
          normalizedAmount: amt.value,
          sourceLine: line,
          confidence: "low",
        });
        usedLineIdx.add(i);
      }
    }
  }

  const socialField = sv ? { ...sv, label: "Social / employee premiums (simplified)" } : undefined;

  const mappedLines = new Set<string>();
  const reg = (m?: MoneyField | null) => {
    if (m?.sourceLine) mappedLines.add(m.sourceLine);
  };
  reg(gross);
  reg(net);
  reg(wageTax);
  reg(holiday);
  reg(pensionEmp);
  reg(pensionEr);
  reg(taxable);
  reg(sv);
  reg(specialRate);
  for (const r of reimbursementLines) mappedLines.add(r.sourceLine);
  for (const d of deductionLines) mappedLines.add(d.sourceLine);

  const unmappedLines: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line || !/\d/.test(line)) continue;
    if (mappedLines.has(line)) continue;
    if (usedLineIdx.has(i)) continue;
    if (line.length < 4) continue;
    unmappedLines.push(line);
  }

  const notableTerms: DecodedTerm[] = [];
  const lower = rawText.toLowerCase();
  for (const g of GLOSSARY_NEEDLES) {
    if (g.needles.some((nd) => lower.includes(nd))) {
      notableTerms.push({ term: g.term, note: "Mentioned in your text." });
    }
  }

  const parsedFields = new Set<string>();
  if (gross) parsedFields.add("gross");
  if (net) parsedFields.add("net");
  if (wageTax) parsedFields.add("wageTax");
  if (taxable) parsedFields.add("taxable");
  if (sv) parsedFields.add("sv");
  if (holiday) parsedFields.add("holiday");
  if (pensionEmp) parsedFields.add("pensionEmp");
  if (pensionEr) parsedFields.add("pensionEr");
  if (specialRate) parsedFields.add("specialRate");
  if (reimbursementLines.length) parsedFields.add("reimbursement");
  if (deductionLines.length) parsedFields.add("deduction");
  if (period) parsedFields.add("period");

  const glossaryHighlights = buildGlossaryHighlights(lines, parsedFields);

  const result: PayslipParseResult = {
    period,
    employerName,
    employeeName,
    grossSalary: gross,
    netSalary: net,
    taxableWage: taxable,
    wageTax: wageTax,
    holidayAllowance: holiday,
    pensionEmployee: pensionEmp,
    pensionEmployer: pensionEr,
    socialContributions: socialField,
    specialWithholdingRate: specialRate,
    reimbursements: reimbursementLines.length ? reimbursementLines : undefined,
    deductions: deductionLines.length ? deductionLines : undefined,
    notableTerms: notableTerms.length ? notableTerms : undefined,
    warnings: warnings.length ? warnings : undefined,
    unmappedLines: unmappedLines.length ? unmappedLines.slice(0, 80) : undefined,
    ambiguousNetCandidates: ambiguousNetCandidates.length ? ambiguousNetCandidates : undefined,
    glossaryHighlights,
  };

  let diagnostics: ParseDiagnostics | undefined;
  if (options?.includeDiagnostics) {
    diagnostics = {
      matchedRules,
      rejectedCandidates: rejectedCandidates.slice(0, 80),
      qualityExplanation: [],
    };
  }

  return { result, diagnostics };
}
