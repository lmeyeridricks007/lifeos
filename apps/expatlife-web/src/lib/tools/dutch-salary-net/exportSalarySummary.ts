import { formatEur } from "./calculateDutchSalaryNet";
import { formatRulingSettingLabel } from "./displayLabels";
import type { SalaryExportPayload, SalaryNetComputation } from "./types";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inputLinesFromComputation(c: SalaryNetComputation): string[] {
  const i = c.inputs;
  return [
    `Salary basis: ${i.salaryInputBasis} — amount: ${i.salaryAmount}`,
    `Bonus (annual): ${i.bonusAnnual}`,
    `Holiday allowance 8%: ${i.includeHolidayAllowance ? "included" : "excluded"}`,
    `Tax year: ${i.taxYear}; age: ${i.age}`,
    `30% ruling setting (taxable modelling): ${formatRulingSettingLabel(i)}`,
    `Employer facility % override: ${i.employerFacilityPercent ?? "—"}`,
    `Employment: ${i.employmentType}; months in year: ${i.monthsWorkedInYear}`,
    `Pension (employee % of gross): ${i.pensionEmployeePercent ?? "—"}`,
    `Social contributions (approx.): ${i.includeSocialContributions ? "on" : "off"}`,
    `General tax credit (approx.): ${i.includeGeneralTaxCredit ? "on" : "off"}`,
    `Labour tax credit (approx.): ${i.includeLabourTaxCredit ? "on" : "off"}`,
    `Partner effect (placeholder): ${i.includePartnerEffect ? "flagged" : "off"}`,
  ];
}

function resultTable(c: SalaryNetComputation): string {
  const rows: [string, string][] = [
    ["Gross (annual)", formatEur(c.grossAnnual)],
    ["Gross (monthly, ÷12)", formatEur(c.grossMonthly)],
  ];
  if (c.rulingPercentApplied > 0) {
    rows.push(["Facility applied (%)", `${c.rulingPercentApplied.toFixed(2)}%`]);
    rows.push(["Untaxed facility (annual)", formatEur(c.rulingUntaxedAnnual)]);
  }
  rows.push([
    "Taxable after facility, before pension (annual)",
    formatEur(c.taxableIncomeAnnual + c.pensionEmployeeAnnual),
  ]);
  rows.push(["Employee pension (model)", formatEur(c.pensionEmployeeAnnual)]);
  rows.push([
    c.rulingPercentApplied > 0 ? "Taxable income for income tax (annual)" : "Taxable income (annual)",
    formatEur(c.taxableIncomeAnnual),
  ]);
  rows.push(
    ["Taxable without facility (annual)", formatEur(c.withoutRuling.taxableIncomeAnnual)],
    ["Lower taxable from facility (annual)", formatEur(c.taxableIncomeReductionFromFacilityAnnual)],
    ["Wage tax before credits (model)", formatEur(c.rawIncomeTaxAnnual)],
    ["General tax credit (approx.)", formatEur(c.generalTaxCreditApplied)],
    ["Labour tax credit (approx.)", formatEur(c.labourTaxCreditApplied)],
    ["Income tax after credits (indicative)", formatEur(c.incomeTaxAnnual)]
  );
  if (c.rulingPercentApplied > 0) {
    rows.push(["Indicative tax saved vs no facility (annual)", formatEur(c.annualIncomeTaxSavedVsWithoutFacility)]);
  }
  rows.push(
    ["Social (model)", formatEur(c.socialEmployeeAnnual)],
    ["Total employee deductions (pension + social + income tax)", formatEur(c.totalEmployeeDeductionsAnnual)],
    ["Net (annual)", formatEur(c.netAnnual)],
    ["Net (monthly)", formatEur(c.netMonthly)],
    ["Effective income-tax / gross", `${(c.effectiveTaxRateOnGross * 100).toFixed(1)}%`]
  );
  return `<table class="t"><tbody>${rows
    .map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`)
    .join("")}</tbody></table>`;
}

export function buildSalarySummaryHtmlDocument(payload: SalaryExportPayload): string {
  const { generatedAtIso, siteName, disclaimer, primaryLabel, primary, compareRows, planningNotes, calculatorCanonicalUrl } = payload;

  const withoutRulingBlock =
    primary != null && primary.rulingPercentApplied > 0
      ? `<h3>Same gross without 30% ruling structure (indicative)</h3><table class="t"><tbody>
          <tr><th>30% facility untaxed (annual)</th><td>${esc(formatEur(primary.withoutRuling.rulingUntaxedAnnual))}</td></tr>
          <tr><th>Taxable after facility before pension (annual)</th><td>${esc(
            formatEur(primary.withoutRuling.taxableIncomeAnnual + primary.withoutRuling.pensionEmployeeAnnual)
          )}</td></tr>
          <tr><th>Pension employee (annual)</th><td>${esc(formatEur(primary.withoutRuling.pensionEmployeeAnnual))}</td></tr>
          <tr><th>Taxable income (annual)</th><td>${esc(formatEur(primary.withoutRuling.taxableIncomeAnnual))}</td></tr>
          <tr><th>Social Zvw employee (model)</th><td>${esc(formatEur(primary.withoutRuling.socialEmployeeAnnual))}</td></tr>
          <tr><th>Wage tax before credits (model)</th><td>${esc(formatEur(primary.withoutRuling.rawIncomeTaxAnnual))}</td></tr>
          <tr><th>General tax credit (approx.)</th><td>${esc(formatEur(primary.withoutRuling.generalTaxCreditApplied))}</td></tr>
          <tr><th>Labour tax credit (approx.)</th><td>${esc(formatEur(primary.withoutRuling.labourTaxCreditApplied))}</td></tr>
          <tr><th>Income tax after credits (indicative)</th><td>${esc(formatEur(primary.withoutRuling.incomeTaxAnnual))}</td></tr>
          <tr><th>Total employee deductions (annual)</th><td>${esc(formatEur(primary.withoutRuling.totalEmployeeDeductionsAnnual))}</td></tr>
          <tr><th>Net take-home (annual)</th><td>${esc(formatEur(primary.withoutRuling.netAnnual))}</td></tr>
          <tr><th>Net take-home (monthly)</th><td>${esc(formatEur(primary.withoutRuling.netMonthly))}</td></tr>
          <tr><th>Monthly net delta (with vs without)</th><td>${esc(formatEur(primary.monthlyNetDeltaWithVsWithoutRuling))}</td></tr>
        </tbody></table>`
      : "";

  const primaryBlock =
    primary != null
      ? `<h2>${esc(primaryLabel)}</h2><h3>Inputs</h3><ul>${inputLinesFromComputation(primary)
          .map((l) => `<li>${esc(l)}</li>`)
          .join("")}</ul><h3>Results</h3>${resultTable(primary)}${withoutRulingBlock}`
      : "<p>No primary result.</p>";

  let compare = "";
  if (compareRows.length > 1) {
    const head =
      "<thead><tr><th>Scenario</th><th>Gross / yr</th><th>Gross / mo</th><th>30% setting</th><th>Taxable</th><th>Tax</th><th>Net / yr</th><th>Net / mo</th><th>Δ mo vs #1</th></tr></thead>";
    const firstNet = compareRows[0]?.row?.netMonthly ?? null;
    const body = compareRows
      .map(({ label, row }) => {
        if (!row) return `<tr><td>${esc(label)}</td><td colspan="9">—</td></tr>`;
        const delta = firstNet != null ? formatEur(row.netMonthly - firstNet) : "—";
        const ruling = esc(formatRulingSettingLabel(row.inputs));
        return `<tr><td>${esc(label)}</td><td>${esc(formatEur(row.grossAnnual))}</td><td>${esc(
          formatEur(row.grossMonthly)
        )}</td><td>${ruling}</td><td>${esc(formatEur(row.taxableIncomeAnnual))}</td><td>${esc(
          formatEur(row.incomeTaxAnnual)
        )}</td><td>${esc(formatEur(row.netAnnual))}</td><td>${esc(formatEur(row.netMonthly))}</td><td>${esc(delta)}</td></tr>`;
      })
      .join("");
    compare = `<h2>Comparison</h2><table class="t">${head}<tbody>${body}</tbody></table>`;
  }

  const notesBlock =
    planningNotes && planningNotes.trim()
      ? `<h2>Your notes</h2><p class="muted" style="white-space:pre-wrap">${esc(planningNotes.trim())}</p>`
      : "";
  const linkBack =
    calculatorCanonicalUrl && calculatorCanonicalUrl.trim()
      ? `<p class="muted" style="margin-top:1.5rem"><a href="${esc(calculatorCanonicalUrl)}">Open Dutch Salary Net Calculator again</a></p>`
      : "";

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>${esc(
    siteName
  )} — Dutch salary net summary</title>
  <style>
    body{font-family:system-ui,-apple-system,sans-serif;max-width:900px;margin:24px auto;padding:0 16px;color:#0f172a;line-height:1.5}
    h1{font-size:1.35rem}
    h2{font-size:1.1rem;margin-top:1.75rem}
    h3{font-size:0.95rem;margin-top:1rem}
    .t{width:100%;border-collapse:collapse;margin:12px 0;font-size:0.9rem}
    .t th,.t td{border:1px solid #e2e8f0;padding:8px 10px;text-align:left}
    .t th{width:42%;background:#f8fafc;font-weight:600}
    .muted{color:#64748b;font-size:0.85rem}
    .warn{border-left:4px solid #f59e0b;padding:12px 16px;background:#fffbeb;margin:16px 0}
  </style></head><body>
  <h1>Dutch salary net calculator — planning summary</h1>
  <p class="muted">Generated ${esc(generatedAtIso)} · ${esc(siteName)}</p>
  <div class="warn"><strong>Indicative only.</strong> ${esc(disclaimer)}</div>
  ${primaryBlock}
  ${compare}
  ${notesBlock}
  <p class="muted" style="margin-top:2rem">Model: simplified bands and credits — not payroll-accurate.</p>
  ${linkBack}
  </body></html>`;
}

export function downloadSalaryHtmlSummary(payload: SalaryExportPayload): void {
  const html = buildSalarySummaryHtmlDocument(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-dutch-salary-net-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintSalarySummary(payload: SalaryExportPayload): void {
  const html = buildSalarySummaryHtmlDocument(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (w) {
    w.document.write(html);
    w.document.close();
    w.focus();
    w.print();
  }
}
