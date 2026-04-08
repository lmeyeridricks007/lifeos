import type {
  AffordabilitySummary,
  BenefitsSummary,
  CommuteLifestyleSummary,
  ExpatSupportSummary,
  HiddenCostItem,
  JobOfferInput,
} from "./types";

type PeerStats = {
  maxBenefits: number;
  maxExpat: number;
  minRentPressure: number;
  minCommuteBurden: number;
  minCityCostPressure: number;
  hasStrongRelocationPeer: boolean;
  hasPensionPeer: boolean;
};

function peerStats(offers: { offer: JobOfferInput; benefits: BenefitsSummary; expat: ExpatSupportSummary; aff: AffordabilitySummary; commute: CommuteLifestyleSummary }[]): PeerStats {
  return {
    maxBenefits: Math.max(...offers.map((o) => o.benefits.score)),
    maxExpat: Math.max(...offers.map((o) => o.expat.score)),
    minRentPressure: Math.min(...offers.map((o) => o.aff.rentPressureMonthly)),
    minCommuteBurden: Math.min(...offers.map((o) => o.commute.commuteBurdenScore)),
    minCityCostPressure: Math.min(...offers.map((o) => o.aff.cityCostPressureMonthly)),
    hasStrongRelocationPeer: offers.some((o) => o.offer.relocationSupport === "strong" || o.offer.relocationBonus > 2_000),
    hasPensionPeer: offers.some((o) => o.offer.pensionEmployerDescription.trim().length > 3),
  };
}

/**
 * Surfaces planning “hidden cost” and friction lines — comparable across offers, mostly qualitative.
 */
export function buildHiddenCostItems(
  self: {
    offer: JobOfferInput;
    benefits: BenefitsSummary;
    expat: ExpatSupportSummary;
    aff: AffordabilitySummary;
    commute: CommuteLifestyleSummary;
    contractRiskScore: number;
  },
  label: string,
  allSame: typeof self[]
): HiddenCostItem[] {
  const peers = peerStats(allSame);
  const o = self.offer;
  const items: HiddenCostItem[] = [];

  const rentVsBest = self.aff.rentPressureMonthly - peers.minRentPressure;
  if (rentVsBest > 80 || self.aff.rentPressureMonthly >= 1_500) {
    items.push({
      id: "rent-pressure",
      category: "City & housing",
      severity: rentVsBest > 200 ? "high" : "medium",
      headline: "Higher rent pressure in this estimate",
      detail: `Estimated rent ~€${Math.round(self.aff.rentPressureMonthly)}/mo (${self.aff.colCity}). ${rentVsBest > 50 ? `Roughly €${Math.round(rentVsBest)}/mo above the lowest offer in this comparison.` : ""}`.trim(),
    });
  }

  if (self.aff.cityCostPressureMonthly > peers.minCityCostPressure + 40) {
    items.push({
      id: "city-cost-pressure",
      category: "City & living costs",
      severity: "medium",
      headline: "Heavier city + commute cost stack",
      detail: `Utilities, groceries (scaled), and commute are estimated at ~€${Math.round(self.aff.cityCostPressureMonthly)}/mo combined — higher than at least one other offer here.`,
    });
  }

  if (self.commute.commuteBurdenScore > peers.minCommuteBurden + 12 || (o.workMode === "office" && o.commuteDaysPerWeek >= 4)) {
    items.push({
      id: "commute-burden",
      category: "Commute & time",
      severity: o.workMode === "office" && o.commuteDaysPerWeek >= 5 ? "high" : "medium",
      headline: "Office-heavy or costly commute pattern",
      detail: `${o.commuteDaysPerWeek} office day(s)/week, ${o.commuteMode.replace("_", " ")} — commute / lifestyle score ${self.commute.commuteBurdenScore}/100. Time and travel costs are easy to miss next to the salary number.`,
    });
  }

  if (o.relocationSupport === "none" && (peers.hasStrongRelocationPeer || o.visaSponsorship === "yes")) {
    items.push({
      id: "relocation-gap",
      category: "Relocation",
      severity: "medium",
      headline: "Relocation support gap",
      detail:
        "No relocation package signalled while another offer includes stronger move support (or you need sponsorship). First months in NL can be cash-heavy even with a good gross.",
    });
  }

  if (o.relocationRepayment === "yes") {
    items.push({
      id: "relocation-clawback",
      category: "Relocation",
      severity: "high",
      headline: "Relocation repayment / clawback risk",
      detail: "You flagged possible repayment if you leave early — that can erase part of the sign-on story. Confirm triggers, amounts, and timeline in writing.",
    });
  }

  if (self.benefits.score < 45 || (self.benefits.score < peers.maxBenefits - 18 && peers.maxBenefits > 50)) {
    items.push({
      id: "benefits-thin",
      category: "Benefits",
      severity: self.benefits.score < 35 ? "high" : "medium",
      headline: "Thin or unclear benefits vs the other offer(s)",
      detail: `Benefits score ${self.benefits.score}/100. ${self.benefits.score < peers.maxBenefits - 18 ? `The strongest offer in this comparison scores ${peers.maxBenefits}.` : ""} Allowances, pension, and leave often matter more in real life than a small gross bump.`.trim(),
    });
  }

  if (o.pensionEmployerDescription.trim().length < 3) {
    items.push({
      id: "pension-unknown",
      category: "Long-term wealth",
      severity: peers.hasPensionPeer ? "high" : "medium",
      headline: "Pension terms unclear or missing",
      detail:
        peers.hasPensionPeer
          ? "Another offer documents employer pension; this one does not — long-term wealth gap can dwarf a modest net difference."
          : "No employer pension description captured — for many expats this is the largest hidden gap vs headline cash.",
    });
  }

  if (self.contractRiskScore >= 58) {
    items.push({
      id: "contract-friction",
      category: "Contract & clarity",
      severity: self.contractRiskScore >= 72 ? "high" : "medium",
      headline: "More contract risk signals from your answers",
      detail: `Contract checklist score ${self.contractRiskScore}/100 from probation, notice, non-compete, overtime, and how the role is set up — not legal advice, but worth checking with HR.`,
    });
  }

  if (o.contractType === "fixed_term") {
    items.push({
      id: "fixed-term",
      category: "Security",
      severity: o.fixedTermRenewalLikely === "no" ? "high" : "medium",
      headline: "Fixed-term insecurity",
      detail:
        o.fixedTermRenewalLikely === "no"
          ? "Fixed-term with weak renewal signal — income continuity for housing and permits can be harder than with permanent payroll."
          : "Fixed-term contract — renewal and sponsor continuity need explicit confirmation.",
    });
  }

  if (o.contractType === "contractor") {
    items.push({
      id: "contractor-structure",
      category: "Security",
      severity: "medium",
      headline: "Contractor / umbrella structure",
      detail: "Leave, pension, sick pay, and bench risk typically differ from employee payroll — model applies a net discount but real gaps vary by provider.",
    });
  }

  if (o.contractType === "remote_foreign") {
    items.push({
      id: "foreign-remote",
      category: "Admin & tax",
      severity: "medium",
      headline: "Employer abroad — extra admin",
      detail: "Cross-border payroll and compliance reduce the estimated net in this tool — day-to-day admin can be heavier than with a local Dutch employer.",
    });
  }

  if (o.thirtyPercentSupport === "no" || o.thirtyPercentSupport === "not_mentioned") {
    const peerRuling = allSame.some((x) => x.offer.thirtyPercentSupport === "yes" || x.offer.thirtyPercentSupport === "best_efforts");
    if (peerRuling) {
      items.push({
        id: "ruling-gap",
        category: "Tax planning",
        severity: "medium",
        headline: "Weaker 30% ruling support than the other offer",
        detail: "Another offer assumes 30% ruling support; this one does not — estimated take-home can change a lot if you qualify.",
      });
    }
  }

  if (self.expat.score < 40 && self.expat.score < peers.maxExpat - 15) {
    items.push({
      id: "expat-setup-gap",
      category: "Expat setup",
      severity: "medium",
      headline: "Weaker visa / move / admin support story",
      detail: `Expat support score ${self.expat.score}/100 vs a stronger offer in this comparison — sponsorship, housing, and tax admin time are real costs.`,
    });
  }

  if (items.length === 0) {
    items.push({
      id: "no-major-flags",
      category: "Summary",
      severity: "low",
      headline: "No standout hidden-cost flags in this pass",
      detail: `Still verify ${label} contract text, bonus rules, and rent with real numbers — this tool uses typical mid-range estimates only.`,
    });
  }

  return items.slice(0, 14);
}

export function hiddenCostsSummaryLine(items: HiddenCostItem[], label: string): string {
  const high = items.filter((i) => i.severity === "high").length;
  const med = items.filter((i) => i.severity === "medium").length;
  if (high > 0) return `${label}: ${high} high-priority heads-up(s) and ${med} medium — read these before you choose on salary alone.`;
  if (med > 0) return `${label}: ${med} medium heads-up(s) on costs or contract — worth comparing to the other offer(s).`;
  return `${label}: fewer big warning signs in this pass — still double-check anything that affects take-home and rent.`;
}
