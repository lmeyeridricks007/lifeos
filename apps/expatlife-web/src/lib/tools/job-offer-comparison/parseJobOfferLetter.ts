import type { ContractType, HolidayAllowanceTreatment, JobOfferInput, ThirtyRulingSupport, TriState, WorkMode } from "./types";

export type ParseJobOfferLetterResult = {
  /** Only keys the parser extracted; safe to spread into `onChange`. */
  fields: Partial<JobOfferInput>;
  /** Keys present in `fields` (for UI summaries). */
  filledKeys: (keyof JobOfferInput)[];
};

const SALARY_CTX =
  /\b(bruto|gross|salaris|salary|jaarsalaris|annual|jaarloon|yearly|maand|month|monthly|per\s*maand|per\s*month|\/\s*maand|\/\s*month|pm|p\.m\.|compensation|remuneration|bezoldiging|beloning)\b/i;

const MONTH_HINT = /\b(per\s*maand|maandloon|monthly|\/\s*maand|\/\s*month|per\s*month|\bpm\b|p\.m\.|maandsalaris)\b/i;
const YEAR_HINT = /\b(per\s*jaar|jaarsalaris|annual|yearly|jaarloon|\/\s*jaar|\/\s*year)\b/i;

const CITY_MAP: { re: RegExp; city: string }[] = [
  { re: /\bamsterdam\b/i, city: "Amsterdam" },
  { re: /\brotterdam\b/i, city: "Rotterdam" },
  { re: /\b(?:the\s+hague|den\s+haag|'?s-gravenhage)\b/i, city: "The Hague" },
  { re: /\butrecht\b/i, city: "Utrecht" },
  { re: /\beindhoven\b/i, city: "Eindhoven" },
  { re: /\bhaarlem\b/i, city: "Haarlem" },
  { re: /\bdelft\b/i, city: "Delft" },
  { re: /\bgroningen\b/i, city: "Groningen" },
  { re: /\bleiden\b/i, city: "Leiden" },
  { re: /\barnhem\b/i, city: "Arnhem" },
  { re: /\bbreda\b/i, city: "Breda" },
  { re: /\btilburg\b/i, city: "Tilburg" },
  { re: /\bnijmegen\b/i, city: "Nijmegen" },
  { re: /\bmaastricht\b/i, city: "Maastricht" },
];

function clampStr(s: string, max: number): string {
  const t = s.replace(/\s+/g, " ").trim();
  return t.length <= max ? t : `${t.slice(0, max - 1)}…`;
}

/** Parse EUR amounts with Dutch (12.731,50 or 70.000) or US (12,731.50) grouping. */
export function parseEurAmount(raw: string): number | null {
  let s = raw
    .replace(/€|EUR|eur/gi, "")
    .replace(/[\s\u00a0\u202f]/g, "")
    .trim();
  if (!s) return null;

  const hasComma = s.includes(",");
  const hasDot = s.includes(".");
  if (hasComma && hasDot) {
    if (s.lastIndexOf(",") > s.lastIndexOf(".")) {
      s = s.replace(/\./g, "").replace(",", ".");
    } else {
      s = s.replace(/,/g, "");
    }
  } else if (hasComma && !hasDot) {
    const parts = s.split(",");
    if (parts.length === 2 && parts[1].length <= 2) {
      s = `${parts[0].replace(/\s/g, "")}.${parts[1]}`;
    } else {
      s = s.replace(/,/g, "");
    }
  } else if (hasDot && !hasComma) {
    const parts = s.split(".");
    if (parts.length !== 2 || parts[1]!.length > 2) {
      s = s.replace(/\./g, "");
    }
  }

  const n = Number(s);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

function normalizeOfferLetterText(raw: string): string {
  let t = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  // PDF extractors often put a line break between "EUR" / "€" and the number
  t = t.replace(/(EUR|€)\s*\n+\s*/gi, "$1 ");
  return t.trim();
}

function flattenForSalaryMatch(s: string): string {
  return s.replace(/\s*\n\s*/g, " ").replace(/\s{2,}/g, " ");
}

/** Prefer explicit "EUR … gross per month" / bruto per maand (handles 12.731,50). */
function extractExplicitGrossPerMonth(text: string): number | null {
  const flat = flattenForSalaryMatch(text);
  const patterns = [
    /(?:EUR|€)\s*([\d][\d.,]{0,18}?)\s*,?\s*[-–]?\s*gross\s+per\s+month/gi,
    /(?:EUR|€)\s*([\d][\d.,]{0,18}?)\s*,?\s*[-–]?\s*bruto\s+per\s+maand/gi,
    /(?:EUR|€)\s*([\d][\d.,]{0,18}?)\s*,?\s*[-–]?\s*monthly\s+gross/gi,
  ];
  let best: number | null = null;
  for (const re of patterns) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(flat)) !== null) {
      const n = parseEurAmount(m[1] ?? "");
      if (n !== null && n >= 500 && n <= 80_000) {
        if (best === null || n > best) best = n;
      }
    }
  }
  return best;
}

function roundMoney2(n: number): number {
  return Math.round(n * 100) / 100;
}

function extractEuroCandidates(line: string): number[] {
  const out: number[] = [];
  // Amount must start with a digit — avoids matching only whitespace before € (false positive).
  const re =
    /€\s*(\d[\d.,\s\u00a0\u202f]*(?:\s?\d{3})*(?:[.,]\d{1,2})?)|(?:EUR|€)\s*(\d[\d.,\s\u00a0\u202f]*(?:\s?\d{3})*(?:[.,]\d{1,2})?)|(\d[\d.,\s\u00a0\u202f]*(?:\s?\d{3})*(?:[.,]\d{1,2})?)\s*(?:EUR|€)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line)) !== null) {
    const g = m[1] || m[2] || m[3];
    if (!g) continue;
    const n = parseEurAmount(g.replace(/[)\];:\s]+$/g, "").replace(/\.+$/g, ""));
    if (n !== null) out.push(n);
  }
  return out;
}

function pickSalaryFromWindow(text: string): Partial<Pick<JobOfferInput, "grossSalary" | "salaryInputBasis">> | null {
  const lines = text.split(/\n/);
  let bestAnnual = 0;
  let bestMonthly = 0;
  let foundAnnual = false;
  let foundMonthly = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? "";
    const prev = lines[i - 1] ?? "";
    const next = lines[i + 1] ?? "";
    const window = `${prev}\n${line}\n${next}`;
    if (!SALARY_CTX.test(window) && !SALARY_CTX.test(line)) continue;

    const amounts = [...extractEuroCandidates(line), ...extractEuroCandidates(prev), ...extractEuroCandidates(next)];
    const isMonth = MONTH_HINT.test(window) || MONTH_HINT.test(line);
    const isYear = YEAR_HINT.test(window) || YEAR_HINT.test(line);

    for (const a of amounts) {
      if (isMonth && !isYear && a >= 1_500 && a <= 45_000) {
        if (a > bestMonthly) {
          bestMonthly = a;
          foundMonthly = true;
        }
      }
      if (isYear && !isMonth && a >= 20_000 && a <= 600_000) {
        if (a > bestAnnual) {
          bestAnnual = a;
          foundAnnual = true;
        }
      }
      if (!isMonth && !isYear) {
        if (a >= 20_000 && a <= 600_000 && a > bestAnnual) {
          bestAnnual = a;
          foundAnnual = true;
        }
        if (a >= 1_500 && a <= 45_000 && a > bestMonthly) {
          bestMonthly = a;
          foundMonthly = true;
        }
      }
    }
  }

  if (foundMonthly && (!foundAnnual || (bestMonthly >= 2_000 && bestMonthly <= 40_000 && bestAnnual / 12 < bestMonthly * 1.2))) {
    return { grossSalary: roundMoney2(bestMonthly), salaryInputBasis: "monthly" };
  }
  if (foundAnnual) {
    return { grossSalary: Math.round(bestAnnual), salaryInputBasis: "annual" };
  }
  if (foundMonthly) {
    return { grossSalary: roundMoney2(bestMonthly), salaryInputBasis: "monthly" };
  }
  return null;
}

function guessEmployer(lines: string[]): string | null {
  for (const line of lines.slice(0, 40)) {
    const t = line.trim();
    if (t.length < 3 || t.length > 100) continue;
    if (/^(dear|beste|geachte|subject|datum|date|vacancy|sollicitatie)/i.test(t)) continue;
    if (/\bB\.?\s*V\.?\b|B\.V\.|BV\b|N\.V\.|NV\b|Ltd\.?|Limited|Inc\.?|GmbH|B\.V\b/i.test(t)) {
      return clampStr(t.replace(/^[^\w]+/, ""), 80);
    }
  }
  return null;
}

function guessRoleTitle(text: string): string | null {
  const patterns: RegExp[] = [
    /\b(?:position|functie|rol|role)\s*(?:of|as|van|:)?\s*[“"]?([A-Za-z0-9][^\n,.]{2,70}?)[”"]?(?:\s*[,.]|\s+at\s+|\s+met\s+)/i,
    /\b(?:appointed|benoemd)\s+(?:as|als)\s+([A-Za-z][^\n,.]{2,60})/i,
    /\b(?:the|de|het)\s+role\s+of\s+([A-Za-z][^\n,.]{2,60})/i,
  ];
  for (const re of patterns) {
    const m = text.match(re);
    if (m?.[1]) {
      const s = clampStr(m[1].replace(/\s+/g, " "), 80);
      if (s.length >= 3 && !/^(you|we|the|your|our)$/i.test(s)) return s;
    }
  }
  return null;
}

function guessCity(text: string): string | null {
  for (const { re, city } of CITY_MAP) {
    if (re.test(text)) return city;
  }
  return null;
}

function guessWorkMode(lower: string): WorkMode | null {
  if (/\b(fully\s+remote|100%\s*remote|volledig\s+thuiswerk|remote\s+first|werk\s+vanuit\s+huis\s+only)\b/i.test(lower)) return "remote";
  if (/\b(hybrid|hybride|thuiswerk|working\s+from\s+home|wfh|deels\s+thuis)\b/i.test(lower)) return "hybrid";
  if (/\b(office\s+based|on\s*site|on-site|kantoor|at\s+the\s+office)\b/i.test(lower)) return "office";
  return null;
}

function guessContractType(lower: string): ContractType | null {
  // Avoid bare "interim" (often a job title); require contractor / zzp / umbrella signals.
  if (
    /\b(zzp|eenmanszaak|freelancer?|freelance\s+contract|payroll\s*flex|umbrella|contractor\s+via|detachering\s+zonder\s+loon)\b/i.test(
      lower
    )
  ) {
    return "contractor";
  }
  if (/\b(foreign\s+employer|employer\s+abroad|niet\s+in\s+loondienst\s+nl|payroll\s+outside\s+nl)\b/i.test(lower)) return "remote_foreign";
  if (/\b(bepaalde\s+tijd|fixed[\s-]term|temporary\s+contract|tijdelijk|contract\s+for\s+\d+)\b/i.test(lower)) return "fixed_term";
  if (/\b(onbepaalde\s+tijd|permanent|indefinite|vast\s+dienst|permanent\s+contract)\b/i.test(lower)) return "permanent";
  return null;
}

function guessHolidayAllowance(lower: string): HolidayAllowanceTreatment | null {
  if (/\b(vakantiegeld|holiday\s+allowance)\b/i.test(lower)) {
    if (/\b(bovenop|on\s+top|plus\s+vakantiegeld|excl|exclusive|extra\s+8|8\s*%?\s*bovenop)\b/i.test(lower)) return "separate";
    if (/\b(inclusief|included\s+in|in\s+the\s+gross|part\s+of\s+gross|in\s+het\s+bruto)\b/i.test(lower)) return "included";
  }
  return null;
}

function guessBonus(lower: string, text: string): Partial<Pick<JobOfferInput, "bonusType" | "bonusPercent" | "bonusAmountAnnual">> | null {
  const out: Partial<Pick<JobOfferInput, "bonusType" | "bonusPercent" | "bonusAmountAnnual">> = {};
  if (!/\b(bonus|incentive|variabele\s+beloning|thirteenth|13th|dertiende)\b/i.test(lower)) return null;

  const pct = text.match(/\b(?:bonus|target)\s*(?:of|:)?\s*(\d{1,2})\s*%/i) || text.match(/\b(\d{1,2})\s*%\s*(?:target\s+)?bonus/i);
  if (pct?.[1]) {
    const p = Number(pct[1]);
    if (p > 0 && p <= 100) out.bonusPercent = p;
  }

  if (/\b(guaranteed|vast|fixed\s+bonus|zeker)\b/i.test(lower)) out.bonusType = "guaranteed";
  else if (/\b(discretionary|naar\s+goeddunken|afhankelijk\s+van)\b/i.test(lower)) out.bonusType = "discretionary";
  else if (/\b(bonus|incentive)\b/i.test(lower)) out.bonusType = "discretionary";

  const bonusLine = text
    .split(/\n/)
    .find(
      (l) =>
        /\b(bonus|incentive)\b/i.test(l) &&
        !/\b(sign[\s-]?on|signing\s+bonus|welkomstbonus|welcome\s+bonus)\b/i.test(l) &&
        /€|EUR/i.test(l)
    );
  if (bonusLine) {
    const nums = extractEuroCandidates(bonusLine);
    const annual = nums.find((n) => n >= 500 && n <= 200_000);
    if (annual) out.bonusAmountAnnual = Math.round(annual);
  }

  return Object.keys(out).length ? out : null;
}

function guessSignOn(lower: string, text: string): number | null {
  if (!/\b(sign[\s-]?on|signing\s+bonus|startbonus|welkomstbonus|welcome\s+bonus)\b/i.test(lower)) return null;
  const line = text.split(/\n/).find((l) => /\b(sign[\s-]?on|signing|welkomst)\b/i.test(l)) ?? text;
  const nums = extractEuroCandidates(line);
  const v = nums.find((n) => n >= 500 && n <= 150_000);
  return v ? Math.round(v) : null;
}

function guessRelocationBonus(lower: string, text: string): number | null {
  if (!/\b(relocation|verhuiskosten|moving\s+allowance|vergoeding\s+verhuizing)\b/i.test(lower)) return null;
  const line = text.split(/\n/).find((l) => /\b(relocation|verhuizing|moving)\b/i.test(l) && /€|EUR/i.test(l)) ?? text;
  const nums = extractEuroCandidates(line);
  const v = nums.find((n) => n >= 500 && n <= 200_000);
  return v ? Math.round(v) : null;
}

function triFromMention(lower: string, yes: RegExp, no?: RegExp): TriState | null {
  if (no?.test(lower)) return "no";
  if (yes.test(lower)) return "yes";
  return null;
}

function guessThirtyRuling(lower: string): ThirtyRulingSupport | null {
  const rulingMention =
    /\b(30\s*%|30%|30-?procent|thirty\s*percent)\s*ruling|ruling.*\b30|30%-?regeling|expat\s*regeling\b/i.test(lower);
  if (!rulingMention) return null;
  if (/\b(geen\s+30|no\s+30|niet\s+voor\s+de\s+ruling|not\s+eligible\s+for\s+the\s+ruling)\b/i.test(lower)) return "no";
  if (/\b(aanvraag|application|will\s+support|ondersteunen|best\s+efforts|help\s+you\s+apply)\b/i.test(lower)) return "best_efforts";
  return "yes";
}

function guessRelocationSupport(lower: string): JobOfferInput["relocationSupport"] | null {
  if (!/\b(relocation|verhuizing|relocation\s+package|verhuispakket)\b/i.test(lower)) return null;
  if (/\b(full\s+relocation|complete\s+package|omvangrijk|all[\s-]inclusive)\b/i.test(lower)) return "strong";
  if (/\b(partial|contribut|tegemoet|allowance|budget\s+of)\b/i.test(lower)) return "partial";
  return "partial";
}

function parseProbationMonths(lower: string): number | null {
  const m = lower.match(/\b(?:proeftijd|probation(?:\s+period)?)\b[^0-9]{0,24}(\d{1,2})\s*(?:month|maand|months|maanden)\b/i);
  if (m?.[1]) {
    const n = Number(m[1]);
    if (n >= 0 && n <= 12) return n;
  }
  return null;
}

function parseNoticeMonths(lower: string): number | null {
  const m = lower.match(
    /\b(?:opzegtermijn|notice(?:\s+period)?)\b[^0-9]{0,40}(\d{1,2})\s*(?:month|maand|months|maanden)\b/i
  );
  if (m?.[1]) {
    const n = Number(m[1]);
    if (n >= 0 && n <= 12) return n;
  }
  return null;
}

export function parseJobOfferLetterFromText(raw: string): ParseJobOfferLetterResult {
  const text = normalizeOfferLetterText(raw);
  const lower = text.toLowerCase();
  const lines = text.split(/\n/).map((l) => l.trim());

  const fields: Partial<JobOfferInput> = {};

  const explicitMonthly = extractExplicitGrossPerMonth(text);
  if (explicitMonthly !== null) {
    fields.grossSalary = roundMoney2(explicitMonthly);
    fields.salaryInputBasis = "monthly";
  } else {
    const salary = pickSalaryFromTextBlock(text);
    if (salary) {
      fields.grossSalary = salary.grossSalary;
      fields.salaryInputBasis = salary.salaryInputBasis;
    }
  }

  const emp = guessEmployer(lines);
  if (emp) fields.employerName = emp;

  const role = guessRoleTitle(text);
  if (role) fields.roleTitle = role;

  const city = guessCity(text);
  if (city) {
    fields.city = city;
    fields.officeCity = city;
  }

  const wm = guessWorkMode(lower);
  if (wm) fields.workMode = wm;

  const ct = guessContractType(lower);
  if (ct) fields.contractType = ct;

  const ha = guessHolidayAllowance(lower);
  if (ha) fields.holidayAllowance = ha;

  const bonus = guessBonus(lower, text);
  if (bonus) Object.assign(fields, bonus);

  const sign = guessSignOn(lower, text);
  if (sign !== null) fields.signOnBonus = sign;

  const reloc = guessRelocationBonus(lower, text);
  if (reloc !== null) fields.relocationBonus = reloc;

  if (/\b(13th|13e|thirteenth|dertiende\s+maand)\b/i.test(lower)) fields.hasThirteenthMonth = true;

  if (/\b(pensioen|pension|bpp|stichting\s+pensioen)\b/i.test(lower)) {
    const line = lines.find((l) => /\b(pensioen|pension)\b/i.test(l));
    if (line) fields.pensionEmployerDescription = clampStr(line, 400);
  }

  const travelLine = lines.find((l) => /\b(reiskostenvergoeding|travel\s+allowance|commute\s+allowance)\b/i.test(l) && /€|EUR/i.test(l));
  if (travelLine) {
    const n = extractEuroCandidates(travelLine).find((x) => x >= 25 && x <= 2_000);
    if (n) fields.travelAllowanceMonthly = Math.round(n);
  }

  const wfhLine = lines.find((l) => /\b(thuiswerkvergoeding|wfh\s+allowance|home\s+office)\b/i.test(l) && /€|EUR/i.test(l));
  if (wfhLine) {
    const n = extractEuroCandidates(wfhLine).find((x) => x >= 10 && x <= 500);
    if (n) fields.wfhAllowanceMonthly = Math.round(n);
  }

  const trainLine = lines.find((l) => /\b(opleiding|training\s+budget|studie|education\s+budget)\b/i.test(l) && /€|EUR/i.test(l));
  if (trainLine) {
    const n = extractEuroCandidates(trainLine).find((x) => x >= 200 && x <= 25_000);
    if (n) fields.trainingBudgetAnnual = Math.round(n);
  }

  const extraLeave = lower.match(/\b(\d{1,2})\s*(?:extra\s+)?(?:days?\s+)?(?:leave|vacation|vakantiedagen)\b/i);
  if (extraLeave?.[1]) {
    const d = Number(extraLeave[1]);
    if (d >= 1 && d <= 40) fields.extraLeaveDays = d;
  }

  const visa = triFromMention(lower, /\b(visa\s+sponsorship|sponsorship|kennismigrant|highly\s+skilled\s+migrant|hsm)\b/i, /\b(no\s+visa|geen\s+sponsorship)\b/i);
  if (visa) fields.visaSponsorship = visa;

  const ruling = guessThirtyRuling(lower);
  if (ruling) fields.thirtyPercentSupport = ruling;

  const rs = guessRelocationSupport(lower);
  if (rs) fields.relocationSupport = rs;

  const tempHousing = triFromMention(lower, /\b(temporary\s+housing|tijdelijke\s+woning|serviced\s+apartment)\b/i);
  if (tempHousing) fields.temporaryHousingSupport = tempHousing;

  const moving = triFromMention(lower, /\b(moving\s+services|verhuis|relocation\s+vendor)\b/i);
  if (moving) fields.movingBudget = moving;

  const prob = parseProbationMonths(lower);
  if (prob !== null) fields.probationMonths = prob;

  const notice = parseNoticeMonths(lower);
  if (notice !== null) fields.noticeMonthsEmployee = notice;

  const nc = triFromMention(lower, /\b(non[\s-]?compete|concurrentiebeding|non\s*competition)\b/i);
  if (nc) fields.nonCompetePresent = nc;

  const side = triFromMention(lower, /\b(nevenactiviteit|side\s+job|bijbaan|outside\s+employment)\b/i);
  if (side) fields.sideJobRestrictions = side;

  const ot = triFromMention(lower, /\b(overtime\s+included|overuren\s+inbegrepen|no\s+overtime\s+pay)\b/i);
  if (ot) fields.overtimeIncludedInSalary = ot;

  if (/\b(renewal|verlenging|extension\s+likely)\b/i.test(lower)) fields.fixedTermRenewalLikely = "yes";

  const iso = text.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/);
  if (iso) {
    fields.expectedStartDate = `${iso[1]}-${iso[2]}-${iso[3]}`;
  } else {
    const dmy = text.match(/\b(\d{1,2})[./-](\d{1,2})[./-](20\d{2})\b/);
    if (dmy) {
      const d = dmy[1]!.padStart(2, "0");
      const mo = dmy[2]!.padStart(2, "0");
      const y = dmy[3]!;
      fields.expectedStartDate = `${y}-${mo}-${d}`;
    }
  }

  const filledKeys = Object.keys(fields) as (keyof JobOfferInput)[];
  return { fields, filledKeys };
}

/** Human labels for upload autofill summaries (subset of JobOfferInput keys). */
export const JOB_OFFER_AUTOFILL_FIELD_LABELS: Partial<Record<keyof JobOfferInput, string>> = {
  employerName: "Employer name",
  roleTitle: "Role title",
  city: "Job city",
  officeCity: "Office city",
  workMode: "Work mode",
  contractType: "Contract type",
  expectedStartDate: "Start date",
  salaryInputBasis: "Salary basis",
  grossSalary: "Gross salary",
  holidayAllowance: "Holiday allowance",
  bonusType: "Bonus type",
  bonusPercent: "Bonus %",
  bonusAmountAnnual: "Bonus (annual €)",
  signOnBonus: "Sign-on bonus",
  relocationBonus: "Relocation allowance",
  hasThirteenthMonth: "13th month",
  pensionEmployerDescription: "Pension note",
  travelAllowanceMonthly: "Travel allowance / mo",
  wfhAllowanceMonthly: "WFH allowance / mo",
  trainingBudgetAnnual: "Training budget",
  extraLeaveDays: "Extra leave days",
  visaSponsorship: "Visa sponsorship",
  thirtyPercentSupport: "30% ruling support",
  relocationSupport: "Relocation support",
  relocationRepayment: "Relocation repayment",
  taxFilingSupport: "Tax filing support",
  temporaryHousingSupport: "Temporary housing",
  movingBudget: "Moving support",
  probationMonths: "Probation (months)",
  noticeMonthsEmployee: "Notice period (months)",
  nonCompetePresent: "Non-compete",
  sideJobRestrictions: "Side-job rules",
  overtimeIncludedInSalary: "Overtime in salary",
  fixedTermRenewalLikely: "Renewal likely",
};

/** Salary pass with full-doc scan (lines + loose € near salary words). */
function pickSalaryFromTextBlock(text: string): Partial<Pick<JobOfferInput, "grossSalary" | "salaryInputBasis">> | null {
  const fromLines = pickSalaryFromWindow(text);
  if (fromLines) return fromLines;

  const lower = text.toLowerCase();
  if (!/\b(salaris|salary|bruto|gross|€|eur)\b/i.test(lower)) return null;

  const amounts: number[] = [];
  const re = /€\s*(\d[\d.,]*(?:\s?\d{3})*(?:[.,]\d{1,2})?)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const n = parseEurAmount(m[1]!.replace(/[)\];:\s]+$/g, "").replace(/\.+$/g, ""));
    if (n !== null && n >= 1_500) amounts.push(n);
  }
  const annual = amounts.filter((a) => a >= 25_000 && a <= 600_000).sort((a, b) => b - a)[0];
  const monthly = amounts.filter((a) => a >= 2_000 && a <= 45_000).sort((a, b) => b - a)[0];
  if (annual && (!monthly || annual / 12 > monthly)) {
    return { grossSalary: Math.round(annual), salaryInputBasis: "annual" };
  }
  if (monthly) return { grossSalary: roundMoney2(monthly), salaryInputBasis: "monthly" };
  return null;
}
