import type { ClauseFinding, MissingItem } from "@/src/lib/tools/contract-scanner/types";

type MissingRule = {
  id: string;
  /** Higher = listed first when many gaps exist */
  priority: number;
  label: string;
  detail: string;
  /** If this matches text, topic is considered present */
  presentRe: RegExp;
  /** Extra: suppress if any finding id starts with one of these */
  suppressIfFindingPrefix?: string[];
};

const MISSING_RULES: MissingRule[] = [
  {
    id: "salary",
    priority: 100,
    label: "Base salary clarity",
    detail: "No clear gross salary amount or structure — confirm figure, currency, and gross vs net.",
    presentRe: /\b(bruto|gross|€\s*[\d.,]{2,}|eur\s*[\d.,]{2,}|salaris\s+(?:van|bedraagt|is)|jaarsalaris|maandsalaris|annual\s+salary|monthly\s+salary|base\s+salary|remuneration\s+of)\b/i,
    suppressIfFindingPrefix: ["gross-salary"],
  },
  {
    id: "salary-period",
    priority: 95,
    label: "Salary period (month vs year)",
    detail: "Salary period not clearly stated — confirm per month vs per year and whether 13th month or holiday pay is included in the quoted figure.",
    presentRe: /\b(per\s+month|per\s+maand|per\s+year|per\s+jaar|monthly\s+gross|annual\s+gross|maandloon|jaarloon)\b/i,
    suppressIfFindingPrefix: ["gross-salary"],
  },
  {
    id: "holiday",
    priority: 88,
    label: "Holiday allowance (vakantiegeld)",
    detail: "Vakantiegeld not clearly referenced — confirm ~8% on top, payout timing, and inclusion in monthly pay if any.",
    presentRe: /\b(vakantiegeld|vakantietoeslag|holiday\s+allowance|8\s*%|8,3\s*%)\b/i,
    suppressIfFindingPrefix: ["holiday-allowance"],
  },
  {
    id: "pension",
    priority: 86,
    label: "Pension scheme",
    detail: "Pension fund or premium split not clear — ask for provider name and employee/employer percentages.",
    presentRe: /\b(pensioen|pensioenfonds|pensioenpremie|pension\s+(scheme|plan|fund))\b/i,
    suppressIfFindingPrefix: ["pension"],
  },
  {
    id: "notice",
    priority: 84,
    label: "Notice period",
    detail: "Notice for employee and employer after probation not clear — confirm calendar months and CAO alignment.",
    presentRe: /\b(opzegtermijn|opzeggingstermijn|notice\s+period|kalendermaand)\b/i,
    suppressIfFindingPrefix: ["notice-period"],
  },
  {
    id: "probation",
    priority: 78,
    label: "Probation",
    detail: "Probation not mentioned — confirm if it applies, length, and notice during probation.",
    presentRe: /\b(proeftijd|probation|trial\s+period)\b/i,
    suppressIfFindingPrefix: ["probation"],
  },
  {
    id: "overtime-handling",
    priority: 76,
    label: "Overtime handling",
    detail: "How overtime is paid or included is unclear — confirm CAO rates, registration, and whether extra hours are compensated.",
    presentRe: /\b(overwerk|overtime|overuren|meewerker|overwerkvergoeding|all\s+reasonable\s+overtime)\b/i,
    suppressIfFindingPrefix: ["overtime-included", "overtime-paid"],
  },
  {
    id: "hours-fte",
    priority: 74,
    label: "Working hours / FTE",
    detail: "Weekly hours or FTE not quantified — confirm contracted hours and part-time percentage if relevant.",
    presentRe: /\b(uren\s+per\s+week|hours\s+per\s+week|\d{1,3}\s*%\s*fte|arbeidsduur|full[\s-]?time)\b/i,
    suppressIfFindingPrefix: ["working-hours"],
  },
  {
    id: "leave-days",
    priority: 72,
    label: "Annual leave days",
    detail: "Number of vacation days not stated — ask for statutory vs extra (bovenwettelijk) and carry-over rules.",
    presentRe: /\b(vakantiedagen|verlofdagen|\d{1,2}\s+vakantie|annual\s+leave|vacation\s+days)\b/i,
    suppressIfFindingPrefix: ["annual-leave"],
  },
  {
    id: "contract-duration",
    priority: 70,
    label: "Contract duration",
    detail: "Indefinite vs fixed-term not clear — confirm end date, renewal, or conversion rules.",
    presentRe: /\b(onbepaalde\s+tijd|bepaalde\s+tijd|fixed[\s-]?term|permanent|indefinite|einddatum)\b/i,
    suppressIfFindingPrefix: ["fixed-term", "permanent-indefinite"],
  },
  {
    id: "handbook-annex",
    priority: 68,
    label: "Handbook / policies annex",
    detail: "If policies apply by reference, request the actual handbook, overtime, illness, and discipline chapters before signing.",
    presentRe: /\b(handbook|handboek|employee\s+policies|personnel\s+polic|arbeidsvoorwaarden|incorporated\s+by\s+reference|beleid|reglement)\b/i,
    suppressIfFindingPrefix: ["handbook-incorporation"],
  },
  {
    id: "relocation-detail",
    priority: 66,
    label: "Relocation costs & repayment",
    detail: "Relocation reimbursement or repayment not addressed — if you relocate, ask for caps, eligible costs, and proration if you leave early.",
    presentRe: /\b(relocation|verhuiskosten|vergoeding\s+verhuizing|terugbetal|repay.{0,30}relocat)\b/i,
    suppressIfFindingPrefix: ["relocation-repay"],
  },
  {
    id: "visa-sponsor",
    priority: 64,
    label: "Visa / permit dependency",
    detail: "No permit or sponsor language — if you need a work permit, confirm employer IND obligations and what happens if the role changes.",
    presentRe: /\b(kennismigrant|highly\s+skilled|verblijfsvergunning|work\s+permit|tewerkstellingsvergunning|IND|sponsor)\b/i,
    suppressIfFindingPrefix: ["visa-sponsor"],
  },
  {
    id: "sick-process",
    priority: 55,
    label: "Sickness / absence process",
    detail: "Illness reporting or bedrijfsarts process not referenced — confirm first-day reporting and pay during illness (CAO vs contract).",
    presentRe: /\b(ziekmelding|verzuim|bedrijfsarts|sick\s+leave|illness\s+reporting)\b/i,
    suppressIfFindingPrefix: ["sick-reporting"],
  },
];

function findingPrefixes(findings: ClauseFinding[]): Set<string> {
  const s = new Set<string>();
  for (const f of findings) {
    const base = f.id.replace(/-\d+$/, "");
    s.add(base);
    const parts = f.id.split("-");
    for (let i = 1; i <= parts.length; i++) {
      s.add(parts.slice(0, i).join("-"));
    }
  }
  return s;
}

function suppressedByFinding(rule: MissingRule, prefixes: Set<string>): boolean {
  if (!rule.suppressIfFindingPrefix?.length) return false;
  return rule.suppressIfFindingPrefix.some((p) => prefixes.has(p));
}

/**
 * Prioritized missing-topic list; respects detected findings to avoid contradicting matches.
 */
export function buildPrioritizedMissingItems(
  text: string,
  minLen: number,
  findings: ClauseFinding[]
): MissingItem[] {
  if (text.length < minLen) return [];
  const lower = text.toLowerCase();
  const prefixes = findingPrefixes(findings);
  const out: MissingItem[] = [];

  for (const rule of MISSING_RULES) {
    if (suppressedByFinding(rule, prefixes)) continue;
    if (rule.presentRe.test(lower)) continue;
    out.push({ id: rule.id, label: rule.label, detail: rule.detail });
  }

  out.sort((a, b) => {
    const pa = MISSING_RULES.find((r) => r.id === a.id)?.priority ?? 0;
    const pb = MISSING_RULES.find((r) => r.id === b.id)?.priority ?? 0;
    return pb - pa;
  });

  return out;
}
