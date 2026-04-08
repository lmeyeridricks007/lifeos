import type { HealthcareAllowanceExportPayload } from "./types";
import { formatHealthcareEur, formatHealthcareEurMonthly } from "./format";

export const HA_EXPORT_DISCLAIMER_DEFAULT =
  "This HTML summary is for personal planning only. It does not replace Dienst Toeslagen, is not legal or tax advice, and uses simplified thresholds and taper logic that may differ from your official award.";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inputLines(payload: HealthcareAllowanceExportPayload): string[] {
  const i = payload.inputs;
  const lines = [
    `Tax year: ${i.taxYear}`,
    `Age: ${i.age}`,
    `Dutch health insurance: ${i.insuranceStatus}`,
    `Insurance start month: ${i.insuranceStartMonth}`,
    `Insured full year: ${i.insuredFullYear ? "yes" : "no"}`,
    `Living in NL: ${i.livingInNl}`,
    `Entitled to Dutch basic insurance: ${i.entitledToDutchInsurance}`,
    `Premium mode: ${i.premiumMode}${i.premiumMode === "manual" ? ` (${formatHealthcareEurMonthly(i.monthlyPremiumManual)})` : ""}`,
    `Household: ${i.householdType}`,
    `Partner included for allowance year: ${i.partnerIncludedForYear ? "yes" : "no"}`,
    `Income entry: ${i.incomeEntryMode}`,
    `Your annual income (entered): ${formatHealthcareEur(i.annualIncomeYou)}`,
    `Your monthly gross (entered): ${formatHealthcareEur(i.monthlyGrossYou)}`,
    `Partner annual income (entered): ${formatHealthcareEur(i.annualIncomePartner)}`,
    `Partner monthly gross (entered): ${formatHealthcareEur(i.monthlyGrossPartner)}`,
    `Income uncertain toggle: ${i.incomeNotSure ? "on" : "off"}`,
    `Your assets 1 Jan: ${formatHealthcareEur(i.assetsYouJan1)}`,
    `Partner assets 1 Jan: ${formatHealthcareEur(i.assetsPartnerJan1)}`,
    `Allowance months override: ${i.allowanceMonthsThisYear ?? "auto"}`,
    `Mid-year move flag: ${i.movingMidYear ? "yes" : "no"}`,
    `Year estimate display: ${i.yearEstimateMode}`,
  ];
  return lines;
}

export function buildHealthcareAllowanceExportHtml(payload: HealthcareAllowanceExportPayload): string {
  const { siteName, generatedAtIso, disclaimer, calculatorCanonicalUrl, result, plainEnglishSummaryLines } = payload;
  const r = result;

  const reasons = r.eligibilityReasons.map((x) => `<li>${esc(x)}</li>`).join("");
  const risks = r.riskFlags.map((x) => `<li>${esc(x)}</li>`).join("");
  const nextSteps = r.guidanceActions.map((x) => `<li>${esc(x)}</li>`).join("");
  const repayment = r.repaymentRiskNotes.map((x) => `<li>${esc(x)}</li>`).join("");
  const affects = r.whatAffectsMost.map((x) => `<li>${esc(x)}</li>`).join("");
  const plainEnglish =
    plainEnglishSummaryLines && plainEnglishSummaryLines.length
      ? `<h2>What this likely means for you</h2><ul>${plainEnglishSummaryLines.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`
      : "";

  const cards = r.summaryCards
    .map((c) => `<tr><th>${esc(c.label)}</th><td>${esc(c.value)}${c.hint ? `<div class="muted">${esc(c.hint)}</div>` : ""}</td></tr>`)
    .join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Healthcare allowance planning summary</title>
<style>
body{font-family:system-ui,-apple-system,sans-serif;max-width:880px;margin:24px auto;padding:0 16px 48px;color:#111;line-height:1.5}
h1{font-size:clamp(1.2rem,2.5vw,1.45rem);line-height:1.25;margin:0 0 8px}
h2{font-size:1.05rem;margin:1.75rem 0 0.5rem;color:#0f172a}
.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:8px 0;border-radius:8px;border:1px solid #e5e7eb}
table{border-collapse:collapse;width:100%;min-width:520px;margin:0}
td,th{border-bottom:1px solid #e5e7eb;padding:10px 12px;font-size:0.9rem;vertical-align:top}
tr:last-child td,tr:last-child th{border-bottom:none}
th{background:#f8fafc;text-align:left;width:38%;font-weight:600;color:#334155}
.muted{color:#64748b;font-size:0.88rem;margin:0 0 16px}
.lead{font-size:1rem;color:#1e293b;margin:12px 0 0;max-width:65ch}
.callout{background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:14px 16px;margin:12px 0 0;max-width:65ch}
.callout p{margin:0;font-size:0.95rem;color:#0c4a6e}
ul{margin:8px 0;padding-left:1.25rem}
li{margin:4px 0}
a{color:#0369a1}
@media print{
body{max-width:100%;padding:0 12px 24px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
h2{break-after:avoid}
.table-wrap{border:none}
tr{break-inside:avoid}
a{color:#0f172a;text-decoration:none}
.callout{border:1px solid #94a3b8}
}
</style></head><body>
<h1>${esc(siteName)} — Healthcare allowance estimator (Netherlands)</h1>
<p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">Open calculator</a></p>
<p class="lead">Planning summary from the ExpatCopilot estimator. Numbers are illustrative; Dienst Toeslagen decides the official award.</p>
<h2>Inputs</h2>
<ul>${inputLines(payload)
    .map((l) => `<li>${esc(l)}</li>`)
    .join("")}</ul>
<h2>Summary</h2>
<div class="table-wrap"><table><tbody>${cards}</tbody></table></div>
<h2>Eligibility notes</h2>
<ul>${reasons}</ul>
${plainEnglish}
<h2>Recommendation summary</h2>
<div class="callout"><p>${esc(r.recommendationText)}</p></div>
${
  r.validationNotes.length
    ? `<h2>Validation notes</h2><ul>${r.validationNotes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`
    : ""
}
<h2>Net premium view</h2>
<div class="table-wrap"><table><tbody>
<tr><th>Gross monthly premium (model)</th><td>${esc(formatHealthcareEurMonthly(r.grossMonthlyPremium))}</td></tr>
<tr><th>Estimated monthly allowance</th><td>${esc(formatHealthcareEurMonthly(r.estimatedMonthlyAllowanceFullRate))}</td></tr>
<tr><th>Estimated net monthly premium</th><td>${esc(formatHealthcareEurMonthly(r.estimatedMonthlyNetPremium))}</td></tr>
<tr><th>Estimated annual allowance (prorated)</th><td>${esc(formatHealthcareEur(r.estimatedAnnualAllowanceProrated))} (${r.allowanceMonthsInYear} months)</td></tr>
<tr><th>Estimated annual allowance (12 mo)</th><td>${esc(formatHealthcareEur(r.estimatedAnnualAllowanceFullYear))}</td></tr>
<tr><th>Estimated annual net (prorated)</th><td>${esc(formatHealthcareEur(r.estimatedAnnualNetPremiumProrated))}</td></tr>
<tr><th>Estimated annual net (12 mo)</th><td>${esc(formatHealthcareEur(r.estimatedAnnualNetPremiumFullYear))}</td></tr>
</tbody></table></div>
<h2>What affects your result</h2>
<ul>${affects}</ul>
<h2>Repayment &amp; adjustment risks</h2>
<ul>${repayment}</ul>
<h2>Risk flags</h2>
<ul>${risks}</ul>
<h2>What to do next</h2>
<ul>${nextSteps}</ul>
<h2>Disclaimer</h2>
<p>${esc(disclaimer)}</p>
</body></html>`;
}

export function downloadHealthcareAllowanceHtml(payload: HealthcareAllowanceExportPayload): void {
  const html = buildHealthcareAllowanceExportHtml(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-nl-healthcare-allowance-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintHealthcareAllowanceSummary(payload: HealthcareAllowanceExportPayload): void {
  const html = buildHealthcareAllowanceExportHtml(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (w) {
    w.document.write(html);
    w.document.close();
    w.focus();
    w.print();
  }
}

export function openHealthcareAllowanceSummaryTab(payload: HealthcareAllowanceExportPayload): void {
  const html = buildHealthcareAllowanceExportHtml(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (w) {
    w.document.write(html);
    w.document.close();
    w.focus();
  }
}
