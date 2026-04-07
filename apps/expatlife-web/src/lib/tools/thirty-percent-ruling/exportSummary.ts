import { eligibilityBandLabel } from "./eligibility";
import type { DownloadSummaryPayload } from "./types";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmtEur(n: number): string {
  return n.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

function tri(v: string): string {
  if (v === "yes") return "Yes";
  if (v === "no") return "No";
  return "Not sure";
}

/**
 * Self-contained HTML document for print / Save as PDF / download .html
 */
export function buildSummaryHtmlDocument(payload: DownloadSummaryPayload): string {
  const { generatedAtIso, siteName, primaryInputs, primaryResult, scenarioResults, eligibilityExportLines } = payload;
  const r = primaryResult;
  const pe = r?.primaryEligibility;
  const checklist = eligibilityExportLines?.checklist ?? pe?.checklist ?? [];
  const nextSteps = eligibilityExportLines?.nextSteps ?? pe?.nextStepBullets ?? [];

  const inputLines: string[] = [
    `Salary: ${primaryInputs.salaryInputType === "monthly" ? "monthly" : "annual"} gross ${primaryInputs.grossSalary}`,
    `Bonus / variable (annual): ${primaryInputs.bonusAnnual ?? "—"}`,
    `Calculation year focus: ${primaryInputs.calculationYear}`,
    `Age: ${primaryInputs.age}; category: ${primaryInputs.employeeCategory}`,
    `Qualifying master’s (under-30 path): ${primaryInputs.qualifyingMasters ? "yes" : "no"}`,
    `Employer applies jointly: ${tri(primaryInputs.employerApplyIntent)}`,
    `Recruited from abroad: ${tri(primaryInputs.recruitedFromAbroad)}`,
    `150 km / 24-month condition (self-reported): ${tri(primaryInputs.distanceRule150km)}`,
    `Prior 30% ruling: ${tri(primaryInputs.priorThirtyPercentRuling)}`,
    `Changing employer in NL: ${primaryInputs.changingEmployerInNL === "yes" ? "yes" : "no"}`,
    `Months applicable: ${primaryInputs.monthsApplicable} / 12`,
    `Holiday allowance included in contract figure: ${primaryInputs.salaryIncludesHolidayAllowance ? "yes" : "no"}`,
    `Employer allowance % (if any): ${primaryInputs.customAllowancePercent ?? primaryInputs.employerAllowancePercent ?? "statutory max"}`,
    `2027 preview toggled: ${primaryInputs.includeFutureYearPreview ? "yes" : "no"}`,
  ];

  const allowanceRows: string[] = [];
  const pushRow = (k: string, v: string) => {
    allowanceRows.push(`<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`);
  };

  if (r && pe) {
    pushRow("Primary eligibility (planning)", pe.headline);
    pushRow("Summary explanation", pe.explanation);
    pushRow("Legacy band (reference)", eligibilityBandLabel(r.eligibilityBand));
    pushRow("Salary norm checked", fmtEur(r.primary.applicableThresholdAnnual));
    pushRow("Meets norm (model)", r.primary.meetsSalaryThreshold ? "Yes (estimate)" : "No (estimate)");
    pushRow("Salary cap applied", r.primary.isSalaryCapped ? "Yes" : "No");
    pushRow("Months applicable", `${r.primary.monthsApplicable} / 12`);
    pushRow("Statutory facility %", `${Math.round(r.primary.facilityPercent * 100)}%`);
    pushRow("Applied allowance %", `${Math.round(r.primary.allowancePercentApplied * 100)}%`);
    pushRow("Annual untaxed allowance (est.)", fmtEur(r.primary.maxUntaxedAllowanceAnnual));
    pushRow("Annual taxable wages (est.)", fmtEur(r.primary.taxableSalaryEstimateAnnual));
    pushRow("Monthly untaxed (÷12)", fmtEur(r.primary.monthlyUntaxedAllowance));
    if (r.preview2027) {
      pushRow("2027 preview — annual untaxed (est.)", fmtEur(r.preview2027.maxUntaxedAllowanceAnnual));
    }
    if (r.netComparison) {
      pushRow("Indicative net without ruling (annual)", fmtEur(r.netComparison.estimatedNetIfNoRulingAnnual));
      pushRow("Indicative net with ruling (annual)", fmtEur(r.netComparison.estimatedNetWithRulingAnnual));
      pushRow("Indicative monthly net delta", fmtEur(r.netComparison.estimatedMonthlyNetDelta));
    }
  }

  const checklistHtml =
    checklist.length > 0
      ? `<h2>Why this result (checklist)</h2><ul>${checklist
          .map((row) => `<li><strong>${esc(row.label)}</strong> — ${esc(row.detail)}</li>`)
          .join("")}</ul>`
      : "";

  const nextHtml =
    nextSteps.length > 0
      ? `<h2>Next steps / what to verify</h2><ul>${nextSteps.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`
      : "";

  let scenarioBlock = "";
  if (scenarioResults && scenarioResults.length > 0) {
    const head =
      "<thead><tr><th>Scenario</th><th>Eligibility</th><th>Untaxed / yr</th><th>Est. mo. net Δ</th></tr></thead>";
    const body = scenarioResults
      .map(({ label, result }) => {
        const el = result?.primaryEligibility?.headline ?? (result ? eligibilityBandLabel(result.eligibilityBand) : "—");
        const u = result ? fmtEur(result.primary.maxUntaxedAllowanceAnnual) : "—";
        const d = result?.netComparison ? fmtEur(result.netComparison.estimatedMonthlyNetDelta) : "—";
        return `<tr><td>${esc(label)}</td><td>${esc(el)}</td><td>${esc(u)}</td><td>${esc(d)}</td></tr>`;
      })
      .join("");
    scenarioBlock = `<h2>Scenario comparison</h2><table class="t">${head}<tbody>${body}</tbody></table>`;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <title>30% ruling eligibility summary — ${esc(siteName)}</title>
  <style>
    :root { --ink:#0f172a; --muted:#475569; --line:#e2e8f0; --brand:#0369a1; }
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color: var(--ink); margin: 0; padding: 32px; max-width: 720px; }
    h1 { font-size: 1.5rem; margin: 0 0 8px; color: var(--brand); }
    h2 { font-size: 1.1rem; margin: 28px 0 12px; border-bottom: 2px solid var(--line); padding-bottom: 6px; }
    .meta { color: var(--muted); font-size: 0.875rem; margin-bottom: 24px; }
    table.t { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    table.t th { text-align: left; font-weight: 600; padding: 8px 12px 8px 0; border-bottom: 1px solid var(--line); width: 42%; vertical-align: top; }
    table.t td { padding: 8px 0; border-bottom: 1px solid var(--line); }
    .disc { margin-top: 28px; padding: 16px; background: #fffbeb; border: 1px solid #fcd34d; border-radius: 8px; font-size: 0.8rem; }
    footer { margin-top: 36px; font-size: 0.75rem; color: var(--muted); border-top: 1px solid var(--line); padding-top: 16px; }
    ul { padding-left: 1.25rem; }
    li { margin: 0.35rem 0; }
    @media print { body { padding: 16px; } }
  </style>
</head>
<body>
  <h1>30% ruling — eligibility &amp; planning summary</h1>
  <p class="meta">Generated: ${esc(generatedAtIso)} · ${esc(siteName)} · Calculation year focus: ${esc(String(primaryInputs.calculationYear))}</p>
  <h2>Assumptions entered</h2>
  <ul>${inputLines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>
  <h2>Primary result</h2>
  <table class="t"><tbody>${allowanceRows.join("")}</tbody></table>
  ${checklistHtml}
  ${nextHtml}
  ${scenarioBlock}
  <div class="disc">
    <strong>Disclaimer:</strong> Planning estimate only — not a Belastingdienst decision, not payroll, and not legal advice. Tax credits,
    pension, social premiums, holiday allowance treatment, and employer configuration may change outcomes. Confirm with Belastingdienst.nl,
    your employer, or a qualified Dutch tax adviser.
  </div>
  <footer>Generated by ExpatCopilot · expatcopilot.com</footer>
</body>
</html>`;
}

export function downloadHtmlSummary(payload: DownloadSummaryPayload, filename = "30-percent-ruling-eligibility-summary.html"): void {
  const html = buildSummaryHtmlDocument(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintSummary(payload: DownloadSummaryPayload): void {
  const html = buildSummaryHtmlDocument(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (!w) return;
  w.document.open();
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}
