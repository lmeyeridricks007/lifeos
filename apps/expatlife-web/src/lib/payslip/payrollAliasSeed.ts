/**
 * ## Dutch + English Netherlands payroll alias seed
 *
 * **Purpose:** Single place to grow label coverage for the deterministic payslip decoder.
 * Metadata (primary label, explanation, priority, row-shape hints) stays in `canonicalRegistry.ts`;
 * this file owns **plain aliases** and optional **regex** matchers only.
 *
 * ### Matching pipeline (punctuation-insensitive)
 * 1. `normalizeForAlias` on the **label** part of a line: lowercase, accents folded (NFD),
 *    **periods removed** (so `loonhef.` and `loonhef` match the same seed string `loonhef`),
 *    whitespace collapsed.
 * 2. **Plain aliases** are matched via `matchesNormAndAlias` (prefix / contains / exact rules).
 *    Do **not** duplicate punctuation variants in seed — omit trailing dots on Dutch abbreviations.
 * 3. **Regex patterns** run on the **same normalized** label string. Use `\b` word boundaries
 *    and allow optional whitespace (`\s*`) where PDF text may break oddly.
 * 4. **Scoring:** Longer alias strings win over shorter ones when multiple terms compete.
 *    Keep very short tokens (`lh`, `ww`) last in each group or accept occasional collisions with
 *    unrelated words — mitigated by requiring payroll-like rows (money tokens present).
 *
 * ### How to extend
 * - Add strings to the relevant `aliases` array for the field key.
 * - Prefer **specific** phrases (`loonheffing tbb`) before **generic** ones (`loon`).
 * - For vendor-specific lines that never match a stable substring, add a **regex** here.
 * - After changing seed, run `npm run test:payslip`.
 */

import type { PayslipFieldKey } from "@/src/lib/tools/payslip/decoder/types";

/** One logical field: many plain aliases + optional regex fallbacks. */
export type PayrollAliasSeedGroup = Readonly<{
  aliases: readonly string[];
  /** Tested against the normalized label; use when substring aliases are insufficient. */
  regexPatterns?: readonly RegExp[];
}>;

/**
 * All keys that currently have seed data. Other `PayslipFieldKey`s can be added over time.
 */
export type PayrollSeededFieldKey = keyof typeof PAYROLL_ALIAS_SEED;

export const PAYROLL_ALIAS_SEED = {
  ruling_correction_taxable: {
    aliases: [
      "corr 30% tb",
      "corr. 30% tb",
      "corr 30 tb",
      "corr30 tb",
      "30% tb",
      "30% taxable correction",
      "30% taxable base correction",
      "30% ruling correction taxable",
      "ruling correction taxable",
      "reduced taxable base",
      "correctie 30% tb",
      "correctie 30 tb",
      "correctie tb 30",
      "aanpassing 30% tb",
      "faciliteit 30% tb",
      "30pct tb",
      "30 pct tb",
      "30procent tb",
      "tb correctie 30",
    ],
    regexPatterns: [/\bcorr\.?\s*30\s*%\s*tb\b/i, /\b30\s*%\s*tb\b(?!\s*bt)/i] as const,
  },

  ruling_correction_special: {
    aliases: [
      "corr 30% bt",
      "corr. 30% bt",
      "corr 30 bt",
      "30% bt",
      "special rate correction",
      "special taxable correction",
      "bijzonder tarief correctie",
      "correctie 30% bt",
      "correctie bijzonder",
      "correctie bt 30",
      "30pct bt",
      "30 pct bt",
      "bijz tarief corr",
      "bt correctie 30",
    ],
    regexPatterns: [/\bcorr\.?\s*30\s*%\s*bt\b/i, /\b30\s*%\s*bt\b/i] as const,
  },

  ruling_percentage: {
    aliases: ["30% ruling", "30% regeling", "expat ruling", "ruling 30", "30 procent regeling", "30pct regeling"],
    regexPatterns: [/\b30\s*%\s*rul/i, /\b30\s*%\s*rege/i, /\b30\s*%\s*faciliteit/i] as const,
  },

  expat_allowance: {
    aliases: [
      "expat allowance",
      "extraterritorial costs",
      "et costs",
      "extraterritorial cost allowance",
      "et kosten",
      "kosten vergoeding expat",
      "extraterritoriale kosten",
      "kosten expat",
      "vergoeding expat",
      "et vergoeding",
      "buitenlandse kosten",
    ],
  },

  tax_free_reimbursement: {
    aliases: [
      "vrijgestelde verg",
      "vrijgestelde vergoeding",
      "vrijgest vergoeding",
      "vrijgestelde ver",
      "exempt reimbursement",
      "tax-free reimbursement",
      "tax free allowance",
      "tax-free allowance",
      "vrijstelling vergoeding",
      "onbelaste vergoeding",
      "onbelast vergoeding",
      "netto vergoeding",
      "costs exempt",
    ],
  },

  holiday_allowance_base: {
    aliases: [
      "bas vakgeld",
      "bas vak geld",
      "basis vakantiegeld",
      "basis vak.geld",
      "bas vak.geld",
      "holiday allowance base",
      "grondslag vakantiegeld",
      "vakantiegeld grondslag",
      "basis vak",
      "saldo vakantiegeld",
      "opbouw vakantiegeld",
    ],
  },

  pension_taxable_base: {
    aliases: [
      "pensioenpremie bpf tbb",
      "pensioenpr bpf tbb",
      "pensioenpr. bpf tbb",
      "pensioenpremie tbb",
      "pension taxable base",
      "pension tbb",
      "pensioen tbb",
      "premie tbb",
      "bpf tbb",
      "pens tbb",
      "werknemer pensioen tbb",
    ],
  },

  wage_tax_tbb: {
    aliases: [
      "loonhef tbb",
      "loonheffing tbb",
      "loonheffingtbb",
      "loonheftbb",
      "loonheffing bijzonder",
      "loonhef bijzonder",
      "lh tbb",
      "lh bijzonder",
      "wage tax tbb",
      "payroll tax tbb",
      "withholding tbb",
      "inhouding tbb",
      "loonbelasting tbb",
    ],
    regexPatterns: [/\bloonhef{1,2}\s*tbb\b/i] as const,
  },

  wage_tax_tb: {
    aliases: [
      "loonhef tb",
      "loonheffing tb",
      "loonheffingtb",
      "loonheftb",
      "loonheffing tabel",
      "loonhef tabel",
      "lh tb",
      "wage tax tb",
      "payroll tax tb",
      "withholding tb",
      "inhouding tb",
      "loonbelasting tb",
      "loonheffing normaal",
      "loonhef normaal",
    ],
    regexPatterns: [/\bloonhef{1,2}\s*tb\b/i] as const,
  },

  pension_employee: {
    aliases: [
      "pensioenpremie werknemer",
      "pensioen premie bpf",
      "pensioenpremie bpf",
      "pensioenpr bpf",
      "pensioenpr. bpf",
      "pensioenpremie",
      "pensioenpr",
      "pensioenpr.",
      "pens",
      "pens werknemer",
      "premie pensioen",
      "bpf premie",
      "pensioen inhouding",
      "inh pensioen",
      "pension contribution",
      "employee pension",
      "employee pension contribution",
      "ee pension",
      "pensioen afdracht",
      "opbouw pensioen",
    ],
  },

  wage_tax: {
    aliases: [
      "loonheffing",
      "loonhef",
      "loonh",
      "loonh ",
      "loonbelasting",
      "lh ",
      "lh",
      "loonheffing inhouding",
      "inh loonheffing",
      "payroll tax",
      "wage tax",
      "tax withholding",
      "withholding tax",
      "income tax withholding",
      "wht",
      "source tax",
      "paye",
      "loonbelasting inhouding",
    ],
    regexPatterns: [/\bloonhef{1,2}ing\b/i] as const,
  },

  general_tax_credit: {
    aliases: [
      "alg heff k",
      "algemene heffingskorting",
      "alg heffingskorting",
      "alg heff korting",
      "general tax credit",
      "general credit",
      "heffingskorting algemeen",
      "ahk",
      "alg hk",
    ],
  },

  health_insurance_wage_base: {
    aliases: [
      "loon zvw",
      "zvw loon",
      "loon voor zvw",
      "health insurance wage",
      "zvw base",
      "zvw wage",
      "zvw grondslag",
      "premiegrondslag zvw",
      "zvw premiegrondslag",
      "werkgeverslast zvw loon",
      "loon zorgverzekering",
    ],
    regexPatterns: [/\bloon\s*zvw\b/i, /\bzvw\s*loon\b/i] as const,
  },

  taxable_wage_base: {
    aliases: [
      "heffingsloon",
      "belastbaar loon",
      "belastbaarloon",
      "taxable wage",
      "taxable income",
      "taxable pay",
      "belastbare grondslag",
      "grondslag loonbelasting",
      "loon tb",
      "tb loon",
      "heffings grondslag",
    ],
    regexPatterns: [/\bheffingsloon\b/i, /\bbelastbaar\s*loon\b/i] as const,
  },

  labour_credit: {
    aliases: [
      "arbeidskorting",
      "arb korting",
      "arb.korting",
      "arb kort",
      "labour tax credit",
      "labor tax credit",
      "arbeids korting",
      "loonkorting",
      "heffingskorting arbeid",
    ],
  },

  ww_deduction: {
    aliases: [
      "inh ww",
      "ww premie",
      "ww ",
      "ww prem",
      "premie ww",
      "unemployment insurance",
      "uwv ww",
      "ww afdracht",
      "werknemersverzekering ww",
    ],
  },

  zw_deduction: {
    aliases: [
      "inh zw",
      "zw premie",
      "zw ",
      "zw prem",
      "premie zw",
      "sickness insurance",
      "ziekte",
      "ziekteverzuim premie",
      "wao zw",
    ],
  },

  whk_deduction: {
    aliases: ["whk", "inh whk", "sector premie", "whk premie", "sectorale premie", "werkgeversheffing"],
  },

  wga_deduction: {
    aliases: [
      "inh wga gedif",
      "inh wga",
      "wga gedif",
      "wga inh",
      "wga ",
      "wia ",
      "wga premie",
      "gedifferentieerde premie",
      "disability insurance",
      "arbeidsongeschiktheid premie",
    ],
  },

  social_fund: {
    aliases: [
      "sociaal fonds",
      "social fund",
      "soc fonds",
      "bedrijfsfonds",
      "sector fonds",
      "sociaal plan",
    ],
  },

  social_insurance: {
    aliases: [
      "sociale verzekeringen",
      "social insurance",
      "sv loon",
      "loon sv",
      "premies sv",
      "werknemersverzekeringen",
      "sv premies",
    ],
  },

  deductions_total: {
    aliases: [
      "totale inhoudingen",
      "inhoudingen totaal",
      "inh totaal",
      "inhoudingen",
      "inh tot",
      "inh.",
      "inh totaalbedrag",
      "total deductions",
      "total withholding",
      "withholdings total",
      "deductions total",
      "som inhoudingen",
    ],
  },

  payments_total: {
    aliases: [
      "totale betalingen",
      "betalingen totaal",
      "betalingen",
      "bet tot",
      "bet.",
      "total payments",
      "total earnings",
      "earnings total",
      "gross earnings total",
      "som betalingen",
      "totaal te betalen componenten",
      "verdiensten totaal",
    ],
  },

  holiday_allowance: {
    aliases: [
      "vakantiegeld",
      "vak geld",
      "vakgeld",
      "vak.geld",
      "vak gld",
      "vg ",
      "holiday allowance",
      "holiday pay",
      "vacation allowance",
      "vacation pay",
      "8% vakantiegeld",
      "reservering vakantiegeld",
    ],
  },

  bonus: {
    aliases: [
      "bonus",
      "performance bonus",
      "incentive",
      "prestatiebonus",
      "jaarbonus",
      "winstdeling",
      "variable pay",
    ],
  },

  commission: {
    aliases: ["commission", "commissie", "provisie", "comm", "sales commission", "omzetprovisie"],
  },

  thirteenth_month: {
    aliases: [
      "13e maand",
      "dertiende maand",
      "thirteenth month",
      "end of year bonus",
      "eindejaars",
      "13de maand",
      "dertiende",
    ],
  },

  overtime_pay: {
    aliases: [
      "overwerk",
      "overtime",
      "overtime pay",
      "ot pay",
      "overuren loon",
      "toeslag overwerk",
      "150% uur",
      "200% uur",
    ],
  },

  overtime_hours: {
    aliases: ["overuren", "overtime hours", "ot hours", "uur overwerk", "overwerk uren"],
  },

  hourly_wage: {
    aliases: [
      "uurloon",
      "hourly rate",
      "hourly wage",
      "rate per hour",
      "uurtarief",
      "loon per uur",
      "uur tarief",
    ],
  },

  hours_worked: {
    aliases: [
      "uren gewerkt",
      "hours worked",
      "gewerkte uren",
      "normal hours",
      "reguliere uren",
      "betaalde uren",
      "uren normaal",
    ],
  },

  travel_allowance: {
    aliases: [
      "reiskostenvergoeding",
      "travel allowance",
      "commute allowance",
      "reiskosten",
      "km vergoeding",
      "woon-werk",
      "ov vergoeding",
    ],
  },

  gross_salary: {
    aliases: [
      "salarisperov",
      "salaris per ov",
      "salaris ",
      "salaris",
      "salarissen",
      "gross salary",
      "gross pay",
      "basic salary",
      "base salary",
      "brutoloon",
      "bruto loon",
      "bruto",
      "brutol",
      "basisloon",
      "maandloon",
      "regular salary",
      "periodiek salaris",
      "uurloon salaris",
      "contractloon",
      "loon bruto",
      "bruto salaris",
    ],
    regexPatterns: [/\b(bruto|gross)\s*(loon|salary|pay)\b/i] as const,
  },

  net_salary: {
    aliases: [
      "netto loon",
      "nettoloon",
      "net pay",
      "net salary",
      "netto",
      "net ",
      "te betalen",
      "uit te betalen",
      "take home",
      "netto uitbetaling",
      "uitkering netto",
      "netto salaris",
      "loon netto",
      "werknemer netto",
    ],
    regexPatterns: [/\bnetto\s*(loon|pay|salary)\b/i] as const,
  },

  days_worked: {
    aliases: [
      "loontijdvakdagen sv",
      "loontijdvakdagen",
      "gewerkte dagen",
      "worked days",
      "workdays",
      "dagen",
      "dagen gewerkt",
      "betaalde dagen",
      "dagen periode",
      "kalenderdagen",
      "werkdagen",
    ],
  },

  iban: {
    aliases: ["iban", "rekeningnr", "rekening", "bankrekening"],
    regexPatterns: [/\b[A-Z]{2}\d{2}[A-Z0-9]{10,30}\b/i] as const,
  },

  employer_name: {
    aliases: ["naam werkgever", "werkgever", "employer", "werkgeversnaam", "company name", "bedrijfsnaam"],
  },

  employee_name: {
    aliases: [
      "naam werknemer",
      "werknemer",
      "employee",
      "employee name",
      "dhr",
      "mw",
      "medewerker",
      "personeelslid",
    ],
  },

  payroll_frequency: {
    aliases: [
      "4 weken",
      "vier weken",
      "weekly",
      "monthly",
      "maandelijks",
      "4-week",
      "pay frequency",
      "betaalperiode",
      "loonperiode",
      "periode loon",
      "wekelijks",
    ],
  },
} as const satisfies Record<string, PayrollAliasSeedGroup>;

/** Count plain alias strings (excludes regex-only coverage). Exported for tests / audits. */
export const PAYROLL_ALIAS_STRING_COUNT: number = (
  Object.values(PAYROLL_ALIAS_SEED) as PayrollAliasSeedGroup[]
).reduce((n, g) => n + g.aliases.length, 0);

export function payrollFieldAliases(key: PayslipFieldKey): string[] {
  const g = PAYROLL_ALIAS_SEED[key as PayrollSeededFieldKey];
  return g ? [...g.aliases] : [];
}

export function payrollFieldRegexes(key: PayslipFieldKey): RegExp[] {
  const g = PAYROLL_ALIAS_SEED[key as PayrollSeededFieldKey];
  if (!g?.regexPatterns?.length) return [];
  return g.regexPatterns.map((r) => new RegExp(r.source, r.flags));
}
