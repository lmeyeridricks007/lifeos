import { formatEur } from "@/src/lib/tools/dutch-salary-net/calculateDutchSalaryNet";
import type {
  DecisionLens,
  JobOfferComparisonResult,
  OfferStructuredScores,
  PerOfferResult,
  RecommendationCloseness,
  UserPriorities,
} from "./types";

function bestNumericAmong(
  offers: PerOfferResult[],
  value: (o: PerOfferResult) => number,
  higherIsBetter: boolean,
  tieEps: number
): { winner: PerOfferResult; tied: PerOfferResult[]; bestVal: number } {
  const vals = offers.map((o) => ({ o, v: value(o) }));
  const bestVal = higherIsBetter ? Math.max(...vals.map((x) => x.v)) : Math.min(...vals.map((x) => x.v));
  const close = (a: number, b: number) => Math.abs(a - b) <= tieEps;
  const tied = vals.filter((x) => close(x.v, bestVal)).map((x) => x.o);
  const winner = tied.sort((a, b) => a.slotId.localeCompare(b.slotId))[0]!;
  return { winner, tied, bestVal };
}

export function buildDecisionLenses(offers: PerOfferResult[]): DecisionLens[] {
  const t = (o: PerOfferResult) => o.label;

  const takeHome = bestNumericAmong(offers, (o) => o.netPayEstimate.estimatedNetMonthly, true, 85);
  const totalPkg = bestNumericAmong(offers, (o) => o.structuredScores.totalPackageComposite, true, 2);
  const sec = bestNumericAmong(offers, (o) => o.structuredScores.securityStability, true, 2);
  const ben = bestNumericAmong(offers, (o) => o.structuredScores.benefits, true, 2);
  const exp = bestNumericAmong(offers, (o) => o.structuredScores.expatSupport, true, 2);
  const aff = bestNumericAmong(offers, (o) => o.affordabilitySummary.estimatedNetRemainingMonthly, true, 125);
  const life = bestNumericAmong(offers, (o) => o.structuredScores.commuteLifestyle, true, 2);

  const tiedSlots = (arr: PerOfferResult[]) => (arr.length > 1 ? arr.map((x) => x.slotId) : undefined);

  return [
    {
      id: "best_take_home",
      title: "Best take-home pay",
      winnerSlot: takeHome.winner.slotId,
      winnerLabel: t(takeHome.winner),
      winnerScoreSummary: `${formatEur(takeHome.winner.netPayEstimate.estimatedNetMonthly)}/mo estimated net`,
      why: "Highest estimated take-home pay in this comparison (same tax rules applied to each offer).",
      tiedSlots: tiedSlots(takeHome.tied),
    },
    {
      id: "best_total_package",
      title: "Best total package",
      winnerSlot: totalPkg.winner.slotId,
      winnerLabel: t(totalPkg.winner),
      winnerScoreSummary: `Composite score ${totalPkg.winner.structuredScores.totalPackageComposite}/100`,
      why: "Combines pay, benefits, job security, expat help, contract fit, commute, and money left after typical costs.",
      tiedSlots: tiedSlots(totalPkg.tied),
    },
    {
      id: "best_security",
      title: "Best security / stability",
      winnerSlot: sec.winner.slotId,
      winnerLabel: t(sec.winner),
      winnerScoreSummary: `Stability ${sec.winner.structuredScores.securityStability}/100`,
      why: "Contract type, notice, probation, and renewal signals — not a legal guarantee.",
      tiedSlots: tiedSlots(sec.tied),
    },
    {
      id: "best_benefits",
      title: "Best benefits",
      winnerSlot: ben.winner.slotId,
      winnerLabel: t(ben.winner),
      winnerScoreSummary: `Benefits ${ben.winner.structuredScores.benefits}/100`,
      why: "Allowances, pension description, leave, equipment, and wellness signals captured in the form.",
      tiedSlots: tiedSlots(ben.tied),
    },
    {
      id: "best_expat_support",
      title: "Best expat support",
      winnerSlot: exp.winner.slotId,
      winnerLabel: t(exp.winner),
      winnerScoreSummary: `Expat support ${exp.winner.structuredScores.expatSupport}/100`,
      why: "Sponsorship, 30% ruling support quality, relocation, tax help, and move budget signals.",
      tiedSlots: tiedSlots(exp.tied),
    },
    {
      id: "best_affordability",
      title: "Best affordability after living costs",
      winnerSlot: aff.winner.slotId,
      winnerLabel: t(aff.winner),
      winnerScoreSummary: `${formatEur(aff.winner.affordabilitySummary.estimatedNetRemainingMonthly)}/mo left after rent and typical costs`,
      why: "Most take-home money left after estimated rent, day-to-day costs, and commute for this comparison.",
      tiedSlots: tiedSlots(aff.tied),
    },
    {
      id: "best_commute_lifestyle",
      title: "Best commute / lifestyle fit",
      winnerSlot: life.winner.slotId,
      winnerLabel: t(life.winner),
      winnerScoreSummary: `Commute / lifestyle ${life.winner.structuredScores.commuteLifestyle}/100`,
      why: "Work mode plus commute burden — lower office days and gentler commute score higher.",
      tiedSlots: tiedSlots(life.tied),
    },
  ];
}

function buildRefinementSuggestions(w: PerOfferResult, r: PerOfferResult, priorities: UserPriorities): string[] {
  const s: string[] = [];

  if (w.offer.bonusType !== r.offer.bonusType && (w.offer.bonusType === "discretionary" || r.offer.bonusType === "discretionary")) {
    s.push("Clarify bonus certainty (guaranteed vs discretionary) and typical payout — discretionary uses a conservative fraction in the model.");
  }
  if (!w.offer.homeOrTargetCity.trim() || !r.offer.homeOrTargetCity.trim()) {
    s.push("Set target / home city for each offer so rent pressure matches where you actually plan to live.");
  }
  if (w.offer.commuteDaysPerWeek !== r.offer.commuteDaysPerWeek || Math.max(w.offer.commuteDaysPerWeek, r.offer.commuteDaysPerWeek) >= 4) {
    s.push("Confirm expected office days per week — attendance assumptions move commute cost and lifestyle scores quickly.");
  }
  if (w.offer.pensionEmployerDescription.trim().length < 3 || r.offer.pensionEmployerDescription.trim().length < 3) {
    s.push("Add employer pension wording where missing — long-term wealth often exceeds a small gross difference.");
  }
  if (w.offer.thirtyPercentSupport !== r.offer.thirtyPercentSupport) {
    s.push("Check what each employer will put in writing about the 30% ruling (promised in contract, “we’ll try”, or not mentioned).");
  }
  if (w.offer.relocationRepayment === "not_sure" || r.offer.relocationRepayment === "not_sure") {
    s.push("Confirm whether relocation or sign-on amounts are repayable and under what timeline.");
  }
  if (priorities.highestNetPay === "high") {
    s.push("Double-check holiday allowance included vs on top — it changes the net engine.");
  }

  return Array.from(new Set(s)).slice(0, 8);
}

function buildCloseness(winner: PerOfferResult, runner: PerOfferResult | null, priorities: UserPriorities): RecommendationCloseness {
  if (!runner) {
    return { isCloseCall: false, overallScoreGap: 0, refinementSuggestions: ["Add a second offer to stress-test the ranking."] };
  }
  const gap = winner.overallScore - runner.overallScore;
  const isCloseCall = gap < 6;
  const all = buildRefinementSuggestions(winner, runner, priorities);
  return {
    isCloseCall,
    overallScoreGap: Math.round(gap * 10) / 10,
    refinementSuggestions: isCloseCall ? all : all.slice(0, 3),
  };
}

function runnerLostBecause(w: PerOfferResult, r: PerOfferResult): string[] {
  const lines: string[] = [];
  const ws = w.structuredScores;
  const rs = r.structuredScores;

  if (rs.estimatedNetPay > ws.estimatedNetPay + 5) {
    lines.push(`${r.label} shows higher estimated take-home — with your settings you are trading some of that for other things you said matter.`);
  }
  if (rs.compensation > ws.compensation + 5) {
    lines.push(`${r.label} ranks higher on base salary and how predictable the bonus is — the top pick’s edge comes from other factors or how you weighted them.`);
  }
  if (rs.benefits > ws.benefits + 8) {
    lines.push(`${r.label} has a stronger benefits signal — allowances, pension text, or leave may be richer there.`);
  }
  if (rs.securityStability > ws.securityStability + 10) {
    lines.push(`${r.label} looks more secure on contract type / notice / probation signals — the winner may be riskier on paper.`);
  }
  if (rs.expatSupport > ws.expatSupport + 10) {
    lines.push(`${r.label} shows stronger sponsorship, ruling, or relocation support — weigh that if you are moving from abroad.`);
  }
  if (rs.contractQuality > ws.contractQuality + 10) {
    lines.push(`${r.label} triggered fewer contract risk flags from your answers — read the fine print on the top pick before you sign.`);
  }
  if (rs.affordabilityAfterCosts > ws.affordabilityAfterCosts + 5) {
    lines.push(`${r.label} leaves more money after rent and typical living costs in this scenario — check cities and commute details you entered.`);
  }
  if (rs.commuteLifestyle > ws.commuteLifestyle + 8) {
    lines.push(`${r.label} fits hybrid/remote or lighter commute inputs better — time cost is not fully priced in gross pay.`);
  }

  if (lines.length === 0) {
    lines.push(`${r.label} is close on most things — the top pick is ahead mainly because of how you set your priorities, not one huge difference.`);
  }
  return lines.slice(0, 5);
}

function moneyVsSecurityTensionLine(w: PerOfferResult, r: PerOfferResult): string | null {
  const ws = w.structuredScores;
  const rs = r.structuredScores;
  const moneyLead = ws.estimatedNetPay - rs.estimatedNetPay >= 10 || ws.compensation - rs.compensation >= 12;
  const weakSecurity = ws.securityStability + 12 <= rs.securityStability;
  const weakExpat = ws.expatSupport + 12 <= rs.expatSupport;
  if (moneyLead && (weakSecurity || weakExpat)) {
    const parts: string[] = [];
    if (weakSecurity) parts.push("job security");
    if (weakExpat) parts.push("expat and relocation support");
    return `${w.label} looks stronger on pay in this comparison, but ${r.label} scores higher on ${parts.join(" and ")}. If visa, expat support, or a stable contract matters for you, don't decide on take-home pay alone.`;
  }
  return null;
}

export function buildTopRecommendation(offers: PerOfferResult[], priorities: UserPriorities): JobOfferComparisonResult["topRecommendation"] {
  const sorted = [...offers].sort((a, b) => b.overallScore - a.overallScore);
  const winner = sorted[0]!;
  const runner = sorted.length > 1 ? sorted[1]! : null;
  const gap = runner ? winner.overallScore - runner.overallScore : 0;

  const closeness = buildCloseness(winner, runner, priorities);

  const why: string[] = [];
  const ws = winner.structuredScores;
  const entries: [keyof typeof ws, number][] = [
    ["estimatedNetPay", ws.estimatedNetPay],
    ["compensation", ws.compensation],
    ["benefits", ws.benefits],
    ["securityStability", ws.securityStability],
    ["expatSupport", ws.expatSupport],
    ["contractQuality", ws.contractQuality],
    ["commuteLifestyle", ws.commuteLifestyle],
    ["affordabilityAfterCosts", ws.affordabilityAfterCosts],
    ["totalPackageComposite", ws.totalPackageComposite],
  ];
  entries.sort((a, b) => b[1] - a[1]);
  const labels: Record<string, string> = {
    estimatedNetPay: "estimated take-home pay",
    compensation: "base salary and bonus package",
    benefits: "benefits and extras",
    securityStability: "job security (contract, notice, probation)",
    expatSupport: "help for internationals (visa, 30% ruling, relocation)",
    contractQuality: "fewer contract risk flags from your answers",
    commuteLifestyle: "commute and hybrid / remote fit",
    affordabilityAfterCosts: "money left after rent and typical costs",
    totalPackageComposite: "overall package when everything is combined",
  };
  for (const [k] of entries.slice(0, 3)) {
    why.push(`Ranks higher on ${labels[k] ?? k} (${(ws as Record<string, number>)[k]} out of 100 in this comparison).`);
  }

  const plainEnglishLead = runner
    ? closeness.isCloseCall
      ? `Close call: ${winner.label} is only slightly ahead of ${runner.label} (~${closeness.overallScoreGap} points with your current settings) — treat this as a rough guide.`
      : `${winner.label} ranks highest overall for how you set your priorities, ahead of ${runner.label} by ~${Math.round(gap)} points.`
    : `Add another offer to see how ${winner.label} compares side by side.`;

  const mainTradeOff = !runner
    ? "Add at least two offers to compare trade-offs."
    : closeness.isCloseCall
      ? "Scores are very close — double-check bonus rules, city and rent, office days, pension wording, and 30% ruling promises; small changes can swap the favourite."
      : `${runner.label} might still be the better pick for take-home pay, benefits, commute, or job security. Scroll to the topic-by-topic section below before you decide.`;

  let confidenceLabel: string;
  let confidenceNote: string;
  if (!runner) {
    confidenceLabel = "Incomplete comparison";
    confidenceNote = "Two or more offers are needed for confidence language.";
  } else if (closeness.isCloseCall) {
    confidenceLabel = "Close call";
    confidenceNote =
      "Overall scores are within a few points — use this as a planning hint, not a final answer. See the suggestions below.";
  } else if (gap >= 14) {
    confidenceLabel = "Clear favourite";
    confidenceNote = "The gap matches how you set the importance sliders — still read the contract and check tax with a professional.";
  } else {
    confidenceLabel = "Leads, but not by much";
    confidenceNote = "There is a real difference, but the topic-by-topic cards and “hidden costs” notes below still matter.";
  }

  return {
    winnerLabel: winner.label,
    winnerSlot: winner.slotId,
    plainEnglishLead,
    whyItWon: why.length ? why : ["Highest overall score with the priorities you chose."],
    mainTradeOff,
    runnerUpLabel: runner?.label ?? "—",
    runnerUpSlot: runner?.slotId ?? winner.slotId,
    runnerUpWhyLost: runner ? runnerLostBecause(winner, runner) : [],
    moneyVsSecurityTension: runner ? moneyVsSecurityTensionLine(winner, runner) : null,
    confidenceLabel,
    confidenceNote,
    closeness,
  };
}

export function buildWhatWouldChange(offers: PerOfferResult[], priorities: UserPriorities): string[] {
  const lines: string[] = [];
  const sorted = [...offers].sort((a, b) => b.overallScore - a.overallScore);
  const w = sorted[0]!;
  const r = sorted[1];
  if (!r) return ["Add a second offer to see contrast scenarios."];

  if (w.expatSupportSummary.score < r.expatSupportSummary.score && priorities.visaExpatFriendliness !== "low") {
    lines.push(`Stronger sponsorship or relocation wording on ${w.label} could overtake ${r.label} if expat weight rises.`);
  }
  if (w.structuredScores.estimatedNetPay < r.structuredScores.estimatedNetPay && priorities.highestNetPay === "high") {
    lines.push(`If ${w.label}'s gross, ruling, or holiday-pay basis shifts net upward, it better matches a net-first priority.`);
  }
  if (w.affordabilitySummary.estimatedNetRemainingMonthly < r.affordabilitySummary.estimatedNetRemainingMonthly) {
    lines.push(`A lower-rent city or fewer office days would improve ${w.label}'s affordability story vs ${r.label}.`);
  }
  if (priorities.stabilitySecurity === "low" && r.structuredScores.securityStability > w.structuredScores.securityStability + 8) {
    lines.push(`Raising stability in priorities would favour ${r.label} unless ${w.label} moves to a stronger contract type on paper.`);
  }
  if (lines.length < 3) {
    lines.push("Guaranteeing bonus or clarifying pension terms often moves the composite more than small gross tweaks.");
    lines.push("Confirm 30% ruling eligibility with a tax advisor — the model only reflects the per-offer toggle you chose.");
  }
  return Array.from(new Set(lines)).slice(0, 6);
}

export function buildStrengthsWeaknesses(o: PerOfferResult, peerMax: Record<keyof OfferStructuredScores, number>): {
  strengths: string[];
  weaknesses: string[];
} {
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const s = o.structuredScores;

  if (s.estimatedNetPay >= 82 || s.estimatedNetPay >= peerMax.estimatedNetPay - 3) {
    strengths.push("Top or near-top estimated take-home pay in this comparison.");
  }
  if (s.expatSupport >= 75 || s.expatSupport >= peerMax.expatSupport - 5) {
    strengths.push("Strong expat / relocation signal vs the other offer(s).");
  }
  if (s.benefits >= 75 || s.benefits >= peerMax.benefits - 5) {
    strengths.push("Benefits and allowances look comparatively solid.");
  }
  if (s.securityStability >= 80) strengths.push("Stability inputs (contract type, notice) look favourable.");
  if (s.contractQuality >= 78) strengths.push("Fewer contract risk flags from your answers than the other offer(s).");
  if (o.affordabilitySummary.estimatedNetRemainingMonthly > 950) strengths.push("Comfortable money left after rent and typical costs in this scenario.");

  if (s.contractQuality < 52) weaknesses.push("Contract checklist score is low — clarify non-compete, overtime, and repayment rules with HR or a lawyer.");
  if (s.expatSupport < 42) weaknesses.push("Weaker sponsorship / ruling / relocation signal for an international move.");
  if (s.estimatedNetPay < 42) weaknesses.push("Estimated take-home is behind the other offer(s) — check gross basis, 30% ruling, and holiday pay.");
  if (o.contractRiskSummary.riskScore >= 62) weaknesses.push("Several practical risk inputs fired — worth a contract pass.");
  if (o.affordabilitySummary.estimatedNetRemainingMonthly < 380) weaknesses.push("Tight money left after modelled housing and commute — stress-test rent.");
  if (s.benefits < peerMax.benefits - 15) weaknesses.push("Benefits look weaker than the strongest offer in this comparison.");

  if (strengths.length === 0) strengths.push("No single standout strength — check the topic-by-topic cards for where each offer wins.");
  if (weaknesses.length === 0) weaknesses.push("No major weakness flags in this pass — still verify contract text.");

  return { strengths, weaknesses };
}
