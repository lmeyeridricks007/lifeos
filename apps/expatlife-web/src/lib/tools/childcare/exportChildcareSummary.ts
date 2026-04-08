import { CARE_TYPE_LABELS, CITY_LABELS, formatChildcareEur } from "@/src/lib/tools/childcare/childcareFormatters";
import type { ChildcareEstimatorInput, ChildcareEstimateResult, ChildcareScenarioRow } from "@/src/types/tools/childcare";

export type ChildcareExportPayload = {
  siteName: string;
  generatedAtIso: string;
  disclaimer?: string;
  calculatorCanonicalUrl: string;
  input: ChildcareEstimatorInput;
  result: ChildcareEstimateResult;
  scenarios?: ChildcareScenarioRow[];
  planningNotes?: string;
};

const DISCLAIMER_DEFAULT =
  "This summary is for relocation and family budgeting only. It is not the official Dutch childcare benefit (kinderopvangtoeslag) calculator, not legal or tax advice, and real provider fees and Belastingdienst outcomes can differ. Confirm rates, contracts, and entitlement with your childcare provider and Belastingdienst.";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inputSummaryHtml(input: ChildcareEstimatorInput, result: ChildcareEstimateResult): string {
  const incomeEntered = input.benefit.annualHouseholdIncomeEur;
  const lines = [
    `Tax year: ${input.taxYear}`,
    `City: ${CITY_LABELS[input.city] ?? input.city}`,
    `Household: ${input.householdType} · stage: ${input.relocationStage} · provider rate tier: ${input.providerCostTier}`,
    `Income entered: €${incomeEntered.toLocaleString("en-NL")}/yr · income used in model: €${result.annualHouseholdIncomeUsedEur.toLocaleString("en-NL")}/yr`,
    `Working parents: ${input.benefit.workingParentsCount} · status: ${input.benefit.workingParentsStatus}`,
    `Cap-aware benefit model: ${input.benefit.useOfficialCapAwareEstimate ? "on" : "off"}`,
    `First-month toggles: registration ${input.setupFirstMonth.includeRegistrationFees ? "yes" : "no"} · invoice timing risk ${input.setupFirstMonth.includeFirstInvoiceTimingRisk ? "yes" : "no"} · deposit ${input.setupFirstMonth.includeAdvanceDeposit ? "yes" : "no"} · holiday reserve ${input.setupFirstMonth.includeSchoolHolidayReserve ? "yes" : "no"} · backup ${input.setupFirstMonth.includeEmergencyBackupReserve ? "yes" : "no"} · transport ${input.setupFirstMonth.includePickupTransportReserve ? "yes" : "no"}`,
  ];
  if (result.engineWarnings.length > 0) {
    lines.push(`Warnings: ${result.engineWarnings.join(" ")}`);
  }
  if (input.workDecision.householdNetMonthlyEur != null) {
    lines.push(
      `Household net (entered): ${formatChildcareEur(input.workDecision.householdNetMonthlyEur)}/mo · comfort: ${input.workDecision.comfortLevel}`
    );
  }
  const childLines = input.children.map((c) => {
    const hoursStr =
      c.hoursInputMode === "days_per_week"
        ? `${c.daysPerWeek} d/wk`
        : c.hoursPerMonth != null && Number.isFinite(c.hoursPerMonth)
          ? `${c.hoursPerMonth} h/mo`
          : "hours/mo not set";
    return `${esc(c.label)}: ${c.ageBand} · ${CARE_TYPE_LABELS[c.careType]} · ${c.rateMode} rate · ${hoursStr} · ${c.scheduleMode} · reg fee €${c.registrationFeeEur} · meals/supplies €${c.mealsSuppliesMonthlyEur}/mo`;
  });
  return `<ul>${lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul><h3>Children</h3><ul>${childLines.map((l) => `<li>${l}</li>`).join("")}</ul>`;
}

export function buildChildcareHtmlDocument(payload: ChildcareExportPayload): string {
  const {
    siteName,
    generatedAtIso,
    disclaimer = DISCLAIMER_DEFAULT,
    calculatorCanonicalUrl,
    input,
    result,
    scenarios,
    planningNotes,
  } = payload;

  const firstMonthLines = result.firstMonthBreakdown.lines
    .map(
      (l) =>
        `<tr><td>${esc(l.label)}${l.detail ? `<br/><span class="muted" style="font-size:0.85em">${esc(l.detail)}</span>` : ""}</td><td align="right">${esc(formatChildcareEur(l.amountEur))}</td></tr>`
    )
    .join("");

  const firstMonthBlock = `<h2>First-month cash (detail)</h2>
  <p class="muted">Lines reflect your first-month toggles in the calculator. Total matches the summary figure.</p>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:520px">
    <thead><tr><th>Line</th><th align="right">€</th></tr></thead>
    <tbody>${firstMonthLines}</tbody>
    <tfoot><tr><td><strong>Total</strong></td><td align="right"><strong>${esc(formatChildcareEur(result.firstMonthBreakdown.totalEur))}</strong></td></tr></tfoot>
  </table>
  ${
    result.firstMonthBreakdown.suggestedExtraReserveEur != null
      ? `<p class="muted">Suggested extra liquidity cushion (illustrative): ${esc(formatChildcareEur(result.firstMonthBreakdown.suggestedExtraReserveEur))}</p>`
      : ""
  }
  <p class="muted">One-off setup subtotal (registration + deposit toggles only): ${esc(formatChildcareEur(result.totalSetupCashEur))}</p>`;

  const scenarioBlock =
    scenarios && scenarios.length > 0
      ? `<h2>Scenario comparison</h2>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:720px">
        <thead><tr><th>Scenario</th><th align="right">Gross /mo</th><th align="right">Est. benefit /mo</th><th align="right">Net /mo</th><th align="right">Annual net</th><th align="right">1st month cash</th></tr></thead>
        <tbody>
        ${scenarios
          .map(
            (r) =>
              `<tr><td>${esc(r.label)}<br/><span class="muted" style="font-size:0.85em">${esc(r.notes)}</span></td><td align="right">${esc(formatChildcareEur(r.grossMonthlyProviderCostEur))}</td><td align="right">${esc(formatChildcareEur(r.estimatedMonthlyBenefitEur))}</td><td align="right">${esc(formatChildcareEur(r.estimatedMonthlyNetChildcareCostEur))}</td><td align="right">${esc(formatChildcareEur(r.annualNetChildcareCostEur))}</td><td align="right">${esc(formatChildcareEur(r.firstMonthChildcareCashEur))}</td></tr>`
          )
          .join("")}
        </tbody>
      </table>`
      : "";

  const perChildRows = result.perChild
    .map(
      (c) =>
        `<tr><td>${esc(c.label)}</td><td>${esc(c.ageBand)}</td><td>${esc(CARE_TYPE_LABELS[c.careType])}</td><td align="right">${esc(String(c.monthlyHours))}</td><td align="right">${esc(formatChildcareEur(c.providerHourlyRateEur, true))}</td><td align="right">${esc(formatChildcareEur(c.reimbursableRate, true))}</td><td align="right">${esc(String(c.reimbursableHours))}</td><td align="right">${esc(formatChildcareEur(c.providerBillMonthly))}</td><td align="right">${esc(formatChildcareEur(c.reimbursableBase))}</td><td align="right">${esc(formatChildcareEur(c.estimatedBenefit))}</td><td align="right">${esc(formatChildcareEur(c.outOfPocket))}</td><td align="right">${esc(formatChildcareEur(c.overCapLoss))}</td></tr>`
    )
    .join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Childcare cost estimate — ${esc(siteName)}</title>
  <style>
    body{font-family:system-ui,sans-serif;max-width:800px;margin:24px auto;padding:0 16px;color:#111}
    h1{font-size:1.35rem}
    h2{font-size:1.1rem;margin-top:1.5rem}
    .muted{color:#555}
    table{font-size:0.9rem}
  </style></head><body>
  <h1>Netherlands childcare cost estimate (planning)</h1>
  <p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">${esc(calculatorCanonicalUrl)}</a></p>
  <h2>Summary</h2>
  <ul>
    <li><strong>Estimated monthly gross provider bill:</strong> ${esc(formatChildcareEur(result.grossMonthlyProviderCostEur))}</li>
    <li><strong>Estimated monthly childcare benefit:</strong> ${esc(formatChildcareEur(result.estimatedMonthlyBenefitEur))}</li>
    <li><strong>Estimated monthly net childcare (out-of-pocket):</strong> ${esc(formatChildcareEur(result.estimatedMonthlyNetChildcareCostEur))}</li>
    <li><strong>Estimated annual net childcare:</strong> ${esc(formatChildcareEur(result.annualNetChildcareCostEur))}</li>
    <li><strong>Estimated first-month childcare cash (with toggles):</strong> ${esc(formatChildcareEur(result.firstMonthChildcareCashEur))}</li>
  </ul>
  ${result.salaryTargetNarrative ? `<p>${esc(result.salaryTargetNarrative)}</p>` : ""}
  ${firstMonthBlock}
  <h2>Household &amp; inputs</h2>
  ${inputSummaryHtml(input, result)}
  <h2>Per-child breakdown</h2>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:920px">
    <thead><tr><th>Child</th><th>Age</th><th>Care</th><th align="right">H/mo</th><th align="right">Prov €/h</th><th align="right">Reimb €/h</th><th align="right">Reimb h</th><th align="right">Bill/mo</th><th align="right">Reimb. base</th><th align="right">Est. benefit</th><th align="right">Out of pocket</th><th align="right">Over-cap</th></tr></thead>
    <tbody>${perChildRows}</tbody>
  </table>
  <p class="muted">First-child planning reimbursement bracket: ~${esc(String(Math.round(result.reimbursementPercentApplied * 100)))}% of reimbursable base before eligibility weighting (×${esc(String(result.benefitEligibilityMultiplier))}). Additional children use the “additional child” band in config.</p>
  ${scenarioBlock}
  ${planningNotes ? `<h2>Notes</h2><p>${esc(planningNotes)}</p>` : ""}
  <h2>Disclaimer</h2>
  <p class="muted">${esc(disclaimer)}</p>
  </body></html>`;
}

export function downloadChildcareHtmlFile(payload: ChildcareExportPayload, filename: string): void {
  const html = buildChildcareHtmlDocument(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export { DISCLAIMER_DEFAULT as CHILDCARE_EXPORT_DISCLAIMER_DEFAULT };
