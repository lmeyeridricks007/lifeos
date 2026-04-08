import type { ContractRiskSummary, JobOfferInput, RiskFlag } from "./types";

/** Higher riskScore = more friction / uncertainty (practical signals, not legal classification). */
export function scoreContractSignals(o: JobOfferInput): { summary: ContractRiskSummary; flags: RiskFlag[] } {
  let risk = 22;
  const highlights: string[] = [];
  const flags: RiskFlag[] = [];

  const bump = (pts: number, line: string, flag?: RiskFlag) => {
    risk += pts;
    highlights.push(line);
    if (flag) flags.push(flag);
  };

  if (o.contractType === "fixed_term") bump(18, "Fixed-term contract — renewal path matters", { severity: "watch", message: "Fixed-term: confirm renewal likelihood and notice." });
  if (o.contractType === "contractor") bump(12, "Contractor / umbrella — benefits and continuity differ from payroll", { severity: "info", message: "Contractor structure: check pension, leave, and bench risk." });
  if (o.contractType === "remote_foreign") bump(16, "Foreign employer — payroll and permit story needs validation", { severity: "watch", message: "Foreign employer: confirm Dutch payroll / compliance and permit fit." });

  if (o.probationMonths >= 3) bump(10, "Longer probation window", { severity: "info", message: `Probation ~${o.probationMonths} months — confirm CAO / contract.` });
  else if (o.probationMonths > 0) bump(4, `Probation ~${o.probationMonths} months`);

  if (o.noticeMonthsEmployee < 1) bump(8, "Short employee notice period", { severity: "info", message: "Short notice — check CAO minimums." });
  if (o.nonCompetePresent === "yes") bump(16, "Non-compete referenced — scope and enforceability need review", { severity: "strong", message: "Non-compete present: review with counsel if material to you." });
  if (o.sideJobRestrictions === "yes") bump(10, "Side-job restrictions mentioned", { severity: "watch", message: "Side-job rules: confirm wording if you freelance." });
  if (o.overtimeIncludedInSalary === "yes") bump(12, "Overtime included in salary — hours clarity matters", { severity: "watch", message: "Overtime bundled: ask expected hours and CAO." });
  if (o.fixedTermRenewalLikely === "no" && o.contractType === "fixed_term") bump(10, "Renewal described as unlikely", { severity: "watch", message: "Fixed-term with low renewal: plan income gap risk." });
  if (o.handbookHeavy === "yes") bump(6, "Handbook / policy-heavy setup — discretionary policy changes possible");
  if (o.hybridPolicyFixed === "no" && (o.workMode === "hybrid" || o.workMode === "remote")) bump(8, "Hybrid / remote policy not fixed in inputs", { severity: "info", message: "Attendance policy discretionary — confirm expectations." });

  if (o.relocationRepayment === "yes") bump(10, "Relocation repayment risk", { severity: "strong", message: "Relocation clawback: confirm triggers and amounts." });

  risk = Math.max(0, Math.min(100, Math.round(risk)));

  if (highlights.length === 0) highlights.push("Few contract signals captured — run the contract scanner for clause detail.");

  return {
    summary: { riskScore: risk, highlights },
    flags,
  };
}
