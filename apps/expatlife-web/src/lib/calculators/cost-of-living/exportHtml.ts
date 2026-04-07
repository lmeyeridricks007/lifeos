import { formatColMoney } from "./format";
import type { ColComparisonRow, ColInput, ColLineItem, ColResult } from "./types";

export type ColExportPayload = {
  siteName: string;
  generatedAtIso: string;
  disclaimer: string;
  calculatorCanonicalUrl: string;
  input: ColInput;
  result: ColResult;
  compareRows?: ColComparisonRow[];
  planningNotes?: string;
};

const DISCLAIMER_DEFAULT =
  "This summary is a planning estimator only. Real rents, utilities, childcare, and taxes vary. It is not legal, tax, or financial advice. Confirm figures with listings, insurers, schools, and professionals before you decide.";

function formatPlanningMonthsLabel(n: number): string {
  const roundedTenth = Math.round(n * 10) / 10;
  return Math.abs(roundedTenth - Math.round(n)) < 0.05 ? String(Math.round(n)) : roundedTenth.toFixed(1);
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function employerRelocationSummary(input: ColInput): string {
  switch (input.employerRelocationSupport) {
    case "full":
      return "employer covers main relocation travel (model)";
    case "partial":
      return "employer covers part of relocation travel (model)";
    default:
      return "relocation travel out of pocket (model)";
  }
}

function inputSummaryHtml(input: ColInput): string {
  const lines = [
    `City: ${input.city}`,
    `Neighborhood band: ${input.neighborhood}`,
    `Household: ${input.householdPreset} (${input.adultsCount} adults, ${input.childrenCount} children if custom)`,
    `Housing: ${input.housingMode} · rent ${input.rentInputMode}${input.manualRentEur ? ` (€${input.manualRentEur})` : ""}`,
    `Lifestyle: ${input.lifestyle} · dining ${input.diningLevel} · travel ${input.travelStyle}`,
    `Transport: ${input.transportMode}${input.includeNsCommuteSupplement ? " + NS supplement" : ""}${input.includeParking ? " + parking" : ""}`,
    `Childcare: ${input.childcareNeeded ? input.childcareIntensity : "no"} · Schooling: ${input.schooling} · Pet: ${input.pet ? "yes" : "no"}`,
    `Setup: from ${input.movingFrom} · ${employerRelocationSummary(input)} · furniture ${input.includeFurnitureSetup} · deposit/first month ${input.includeDepositAndFirstMonth} · visa/admin ${input.includeVisaAdminBudget}`,
    `30% ruling assumption: ${input.rulingAssumption}`,
  ];
  return `<ul>${lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>`;
}

function tableRows(items: { label: string; amountEur: number }[], currency: ColInput["currency"]): string {
  return items
    .map(
      (r) =>
        `<tr><td>${esc(r.label)}</td><td style="text-align:right">${esc(formatColMoney(r.amountEur, currency))}</td></tr>`
    )
    .join("");
}

function tableRowsMonthly(items: ColLineItem[], currency: ColInput["currency"]): string {
  return items
    .map((r) => {
      const sub = [r.note, r.whyItMatters].filter(Boolean).join(" — ");
      return `<tr><td>${esc(r.label)}${sub ? `<br/><span class="muted" style="font-size:0.88em">${esc(sub)}</span>` : ""}</td><td style="text-align:right">${esc(formatColMoney(r.amountEur, currency))}</td></tr>`;
    })
    .join("");
}

function tableRowsSetup(items: ColLineItem[], currency: ColInput["currency"]): string {
  return items
    .map((r) => {
      const sub = [r.note, r.whyItMatters].filter(Boolean).join(" — ");
      return `<tr><td>${esc(r.label)}${sub ? `<br/><span class="muted" style="font-size:0.88em">${esc(sub)}</span>` : ""}</td><td style="text-align:right">${esc(formatColMoney(r.amountEur, currency))}</td></tr>`;
    })
    .join("");
}

export function buildCostOfLivingHtmlDocument(payload: ColExportPayload): string {
  const {
    siteName,
    generatedAtIso,
    disclaimer = DISCLAIMER_DEFAULT,
    calculatorCanonicalUrl,
    input,
    result,
    compareRows,
    planningNotes,
  } = payload;
  const cur = input.currency;

  const salaryBlock =
    result.salaryTargets != null
      ? `<h2>Salary targets (planning)</h2>
      <p><strong>Essential</strong> (${esc("thin margin over recurring")}): <strong>${esc(formatColMoney(result.salaryTargets.essentialNetMonthlyEur, cur))}</strong>/mo ·
      <strong>Balanced</strong> (${esc("savings + lifestyle headroom")}): <strong>${esc(formatColMoney(result.salaryTargets.balancedNetMonthlyEur, cur))}</strong>/mo ·
      <strong>Comfortable</strong> (${esc("stronger discretionary buffer")}): <strong>${esc(formatColMoney(result.salaryTargets.comfortableNetMonthlyEur, cur))}</strong>/mo</p>
      <p class="muted">These bands are <strong>not</strong> payroll, contract, or Belastingdienst outcomes — planning anchors only.</p>
      <p class="muted">Directional gross (from balanced net, single wedge — not tax advice): about <strong>${esc(formatColMoney(result.salaryTargets.directionalGrossAnnualFromBalancedNetEur, cur))}</strong>/year. Use the Dutch salary net calculator for real gross↔net.</p>
      ${result.salaryTargets.rulingNote ? `<p><em>${esc(result.salaryTargets.rulingNote)}</em></p>` : ""}
      ${result.netSalaryComparisonInsight ? `<p><strong>Your entered net (if any):</strong> ${esc(result.netSalaryComparisonInsight)}</p>` : ""}`
      : "<p>Salary targets were disabled for this export.</p>";

  const baseCompare = compareRows?.[0]?.result;
  const compareBlock =
    compareRows && compareRows.length > 1 && baseCompare
      ? `<h2>Scenario comparison</h2>
      <p class="muted">Δ columns = savings vs your scenario when positive (your totals minus alternative).</p>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:920px">
        <thead><tr><th>Scenario</th><th>Monthly</th><th>Δ monthly</th><th>Setup</th><th>Δ setup</th><th>Balanced net</th><th>Δ balanced net</th></tr></thead>
        <tbody>
        ${compareRows
          .map((r) => {
            const dm =
              r.id === "a"
                ? "—"
                : esc(formatColMoney(baseCompare.monthly.totalEur - r.result.monthly.totalEur, cur));
            const ds =
              r.id === "a"
                ? "—"
                : esc(formatColMoney(baseCompare.setup.totalEur - r.result.setup.totalEur, cur));
            const dn =
              r.id === "a"
                ? "—"
                : esc(formatColMoney(baseCompare.recommendedNetSalaryMonthlyEur - r.result.recommendedNetSalaryMonthlyEur, cur));
            return `<tr>
            <td>${esc(r.label)}</td>
            <td style="text-align:right">${esc(formatColMoney(r.result.monthly.totalEur, cur))}</td>
            <td style="text-align:right">${dm}</td>
            <td style="text-align:right">${esc(formatColMoney(r.result.setup.totalEur, cur))}</td>
            <td style="text-align:right">${ds}</td>
            <td style="text-align:right">${esc(formatColMoney(r.result.recommendedNetSalaryMonthlyEur, cur))}</td>
            <td style="text-align:right">${dn}</td>
          </tr>`;
          })
          .join("")}
        </tbody>
      </table>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${esc(siteName)} — Netherlands cost of living summary</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; color: #111; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.15rem; margin-top: 1.75rem; }
    table { font-size: 0.9rem; }
    .muted { color: #444; font-size: 0.9rem; }
    .box { background: #f6f8fa; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
  </style>
</head>
<body>
  <h1>Netherlands expat cost of living — planning summary</h1>
  <p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">Open calculator</a></p>
  ${planningNotes ? `<div class="box"><strong>Your notes</strong><p>${esc(planningNotes)}</p></div>` : ""}

  <h2>Inputs (snapshot)</h2>
  ${inputSummaryHtml(input)}

  <h2>Headline results</h2>
  <ul>
    <li>Estimated monthly living cost: <strong>${esc(formatColMoney(result.monthly.totalEur, cur))}</strong></li>
    <li>One-time setup: <strong>${esc(formatColMoney(result.setup.totalEur, cur))}</strong></li>
    <li>First-month cash need (setup + one full month recurring, simplified): <strong>${esc(formatColMoney(result.firstMonthCashEur, cur))}</strong></li>
    <li>Suggested emergency buffer: <strong>${esc(formatColMoney(result.emergencyBufferEur, cur))}</strong> — reserve cash (about ${esc(formatPlanningMonthsLabel(result.emergencyBufferPlanningMonths))} months of estimated recurring cost at ${esc(formatColMoney(result.monthly.totalEur, cur))}/month in this run), separate from first-month cash; see calculator for full explanation.</li>
    <li>Pre-move buffer (setup + emergency): <strong>${esc(formatColMoney(result.savingsBufferBeforeMoveEur, cur))}</strong></li>
  </ul>

  ${salaryBlock}

  <h2>Common underestimates (checklist)</h2>
  <ul>${result.trustUnderestimates.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>

  <h2>Top monthly drivers</h2>
  <ol>${result.topMonthlyDrivers.map((d) => `<li>${esc(d.label)}: ${esc(formatColMoney(d.amountEur, cur))}</li>`).join("")}</ol>

  <h2>Interpretation</h2>
  <p>${esc(result.interpretation.biggestDriver)}</p>
  <p>${esc(result.interpretation.topThreeDriversSummary)}</p>
  ${result.interpretation.childcareContext ? `<p><strong>Childcare:</strong> ${esc(result.interpretation.childcareContext)}</p>` : ""}
  <p>${esc(result.interpretation.surprises)}</p>
  <p>${esc(result.interpretation.reduceCosts)}</p>
  <p>${esc(result.interpretation.oneTimeVsRecurring)}</p>

  <h2>Monthly breakdown</h2>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:520px">
    <thead><tr><th>Category</th><th>Amount</th></tr></thead>
    <tbody>
    ${tableRowsMonthly(result.monthly.items, cur)}
    <tr><td><strong>Total</strong></td><td style="text-align:right"><strong>${esc(formatColMoney(result.monthly.totalEur, cur))}</strong></td></tr>
    </tbody>
  </table>

  <h2>Setup breakdown</h2>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:520px">
    <thead><tr><th>Item</th><th>Amount</th></tr></thead>
    <tbody>
    ${tableRowsSetup(result.setup.items, cur)}
    <tr><td><strong>Total</strong></td><td style="text-align:right"><strong>${esc(formatColMoney(result.setup.totalEur, cur))}</strong></td></tr>
    </tbody>
  </table>

  ${compareBlock}

  <h2>Assumptions & disclaimer</h2>
  <p class="muted">${esc(disclaimer)}</p>
  <p class="muted">USD amounts (if any) use a static planning rate, not a live exchange quote.</p>
</body>
</html>`;
}

export function downloadCostOfLivingHtml(payload: ColExportPayload): void {
  const html = buildCostOfLivingHtmlDocument(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-nl-cost-of-living-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintCostOfLivingSummary(payload: ColExportPayload): void {
  const html = buildCostOfLivingHtmlDocument(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (w) {
    w.document.write(html);
    w.document.close();
    w.focus();
    w.print();
  }
}
