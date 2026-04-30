import { bankMonthlyFeeDisplay, type Bank, type BankBsnRequired, type BankEnglishSupport, type BankKind } from "./banks";

/** Row shape for traditional vs digital aggregate table (shared with `TraditionalDigitalComparisonTable`). */
export type TraditionalDigitalComparisonRow = {
  id: string;
  label: string;
  traditional: string;
  digital: string;
  hybrid: string;
  /** Optional editorial note under the topic (config-driven tools). */
  explanation?: string;
};

function bsnHint(bsn: BankBsnRequired): string {
  if (bsn === true) return "Usually expects BSN for mainstream retail path";
  if (bsn === "partial") return "Often partial / staged BSN rules — read newcomer FAQ";
  return "BSN rules vary by product — confirm on site";
}

function englishHint(s: BankEnglishSupport): string {
  return s === "yes" ? "English-first materials common" : "English can be patchier outside core flows";
}

/** Editorial hybrid column — stable guidance not derived from a single bank row. */
const HYBRID: Record<string, string> = {
  onboarding:
    "Start digital for speed; add traditional when payroll/rent rails need a mainstream Dutch IBAN.",
  bsn: "Use the bank that matches today’s document state; migrate flows when BSN and address stabilise.",
  english: "Pick the stack where your must-have flows are comfortable in English.",
  ideal: "Keep local rail on a Dutch-licensed account; use apps for spending and FX layers.",
  salary: "Common pattern: Dutch IBAN for salary/rent + app for FX and travel.",
  intl: "Pair local account with Wise / Revolut-style tools when it saves fees on your volumes.",
  fees: "Total cost = both stacks; avoid duplicating paid features you do not need.",
  support: "Choose where you want human help vs self-serve speed — you can split across brands.",
  scores: "Blend scores with your real billers — models are indicative, not eligibility.",
  products: "Use traditional depth for mortgage-bound plans; keep an app for day-to-day rhythm.",
  profile: "New arrivals and cross-border earners often balance both worlds for the first year.",
};

function byKind(all: readonly Bank[], kind: BankKind): Bank[] {
  return all.filter((b) => b.type === kind);
}

function uniqueJoin(values: readonly string[], sep = " · "): string {
  return Array.from(new Set(values.map((v) => v.trim()).filter(Boolean))).join(sep);
}

function scoreBand(banks: Bank[], key: "localIntegrationScore" | "internationalUseScore"): string {
  if (banks.length === 0) return "—";
  const ns = banks.map((b) => b.scores[key]);
  const lo = Math.min(...ns);
  const hi = Math.max(...ns);
  return lo === hi ? `${lo}/5` : `${lo}–${hi}/5`;
}

/**
 * Builds the “traditional vs digital vs hybrid” comparison table from canonical {@link Bank} rows.
 * Traditional/digital cells aggregate short labels from each bank; hybrid stays editorial.
 */
export function buildTraditionalDigitalComparisonRowsFromBanks(all: readonly Bank[]): TraditionalDigitalComparisonRow[] {
  const trad = byKind(all, "traditional");
  const dig = byKind(all, "digital");

  return [
    {
      id: "onboarding",
      label: "Onboarding speed",
      traditional: uniqueJoin(trad.map((b) => b.onboardingSpeed)),
      digital: uniqueJoin(dig.map((b) => b.onboardingSpeed)),
      hybrid: HYBRID.onboarding,
    },
    {
      id: "bsn",
      label: "BSN / address requirements",
      traditional: uniqueJoin(trad.map((b) => bsnHint(b.bsnRequired))),
      digital: uniqueJoin(dig.map((b) => bsnHint(b.bsnRequired))),
      hybrid: HYBRID.bsn,
    },
    {
      id: "english",
      label: "English app / support",
      traditional: uniqueJoin(trad.map((b) => englishHint(b.englishSupport))),
      digital: uniqueJoin(dig.map((b) => englishHint(b.englishSupport))),
      hybrid: HYBRID.english,
    },
    {
      id: "ideal",
      label: "iDEAL / Dutch payments",
      traditional: uniqueJoin(trad.map((b) => b.idealSupport)),
      digital: uniqueJoin(dig.map((b) => b.idealSupport)),
      hybrid: HYBRID.ideal,
    },
    {
      id: "salary",
      label: "Salary / rent practical fit",
      traditional: uniqueJoin(trad.map((b) => b.salaryRentFit)),
      digital: uniqueJoin(dig.map((b) => b.salaryRentFit)),
      hybrid: HYBRID.salary,
    },
    {
      id: "intl",
      label: "International transfers",
      traditional: uniqueJoin(trad.map((b) => b.transferFit)),
      digital: uniqueJoin(dig.map((b) => b.transferFit)),
      hybrid: HYBRID.intl,
    },
    {
      id: "fees",
      label: "Fees (orientation)",
      traditional: uniqueJoin(trad.map((b) => bankMonthlyFeeDisplay(b))),
      digital: uniqueJoin(dig.map((b) => bankMonthlyFeeDisplay(b))),
      hybrid: HYBRID.fees,
    },
    {
      id: "support",
      label: "Customer support",
      traditional: uniqueJoin(trad.map((b) => b.supportModel)),
      digital: uniqueJoin(dig.map((b) => b.supportModel)),
      hybrid: HYBRID.support,
    },
    {
      id: "scores",
      label: "Local vs international (model bands)",
      traditional: `Local integration ${scoreBand(trad, "localIntegrationScore")} · international ${scoreBand(trad, "internationalUseScore")}`,
      digital: `Local integration ${scoreBand(dig, "localIntegrationScore")} · international ${scoreBand(dig, "internationalUseScore")}`,
      hybrid: HYBRID.scores,
    },
    {
      id: "products",
      label: "Long-term financial products",
      traditional: uniqueJoin(trad.map((b) => b.longTermProductFit)),
      digital: uniqueJoin(dig.map((b) => b.longTermProductFit)),
      hybrid: HYBRID.products,
    },
    {
      id: "profile",
      label: "Typical use (from bank cards)",
      traditional: uniqueJoin(trad.flatMap((b) => [...b.bestUseCases]).slice(0, 5)),
      digital: uniqueJoin(dig.flatMap((b) => [...b.bestUseCases]).slice(0, 5)),
      hybrid: HYBRID.profile,
    },
  ];
}
