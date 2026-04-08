import { utilitiesCityAnchors } from "./assumptions";
import { formatUtilitiesEur } from "./format";
import type { UsExportPayload } from "./types";

export const UTILITIES_SERVICES_EXPORT_DISCLAIMER =
  "This summary is a household planning estimate only. It is not a quote, provider offer, or legal advice. Tariffs, municipal charges, and building arrangements vary by address and contract — confirm every line with landlords, suppliers, and official letters before you budget firmly.";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildUtilitiesServicesExportHtml(payload: UsExportPayload): string {
  const { siteName, generatedAtIso, disclaimer, calculatorCanonicalUrl, input, result } = payload;
  const cityLabel = utilitiesCityAnchors[input.city].label;
  const b = result.setupBuckets;

  const breakdownRows = result.serviceBreakdown
    .filter((l) => l.monthlyEur > 0 || l.classification === "may_already_be_included")
    .map((l) => {
      const checks = l.whatToCheck.map((t) => `<li>${esc(t)}</li>`).join("");
      const assumptions = l.assumptionsUsed.map((a) => `<span class="mono">${esc(a)}</span>`).join(" · ");
      return `<tr><td>${esc(l.label)}<div class="muted">${esc(l.essential ? "Essential" : "Optional")} · ${esc(
        l.classification.replace(/_/g, " ")
      )}${l.maybeIncluded ? " · maybe included" : ""}</div>${
        checks ? `<ul class="small">${checks}</ul>` : ""
      }${assumptions ? `<div class="muted small">${assumptions}</div>` : ""}</td><td style="text-align:right;vertical-align:top">${esc(
        formatUtilitiesEur(l.monthlyEur)
      )}<div class="muted">${esc(formatUtilitiesEur(l.annualEstimate))}/yr</div><div class="muted">Setup ${esc(
        formatUtilitiesEur(l.setupEstimate)
      )}</div></td></tr>`;
    })
    .join("");

  const compareFixed = result.serviceBreakdown
    .map(
      (l) =>
        `<li><strong>${esc(l.label)}</strong> — ${esc(l.classification.replace(/_/g, " "))}${
          l.maybeIncluded ? " (check lease)" : ""
        }. ${esc(l.compareNote)}</li>`
    )
    .join("");

  const checklistBefore = result.moveInChecklist.filter((c) => c.phase === "before_move_in").map((c) => `<li>${esc(c.text)}</li>`).join("");
  const checklistDay = result.moveInChecklist.filter((c) => c.phase === "move_in_day").map((c) => `<li>${esc(c.text)}</li>`).join("");
  const checklistFirst = result.moveInChecklist.filter((c) => c.phase === "first_month").map((c) => `<li>${esc(c.text)}</li>`).join("");

  const fmtDelta = (n: number) => {
    if (Math.abs(n) < 0.01) return "—";
    const sign = n > 0 ? "+" : "";
    return `${sign}${formatUtilitiesEur(n)}`;
  };

  const scenarioRows = result.scenarioComparisons
    .map(
      (s) =>
        `<tr><td>${esc(s.label)}<div class="muted">${esc(s.whatChanged)}</div></td><td style="text-align:right">${esc(formatUtilitiesEur(s.monthlyTotalEur))}<div class="muted">${esc(fmtDelta(s.monthlyDeltaEur))} vs baseline</div></td><td style="text-align:right">${esc(formatUtilitiesEur(s.firstMonthSetupEur))}<div class="muted">${esc(fmtDelta(s.setupDeltaEur))} setup</div></td><td>${esc(s.biggestCostDriver)}</td></tr>`
    )
    .join("");

  const warnings = result.warnings.map((w) => `<li>${esc(w)}</li>`).join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Utilities & services summary</title>
<style>
body{font-family:system-ui,sans-serif;max-width:880px;margin:24px auto;padding:0 16px;color:#111}
h1{font-size:1.35rem}
h2{font-size:1.05rem;margin-top:1.5rem}
table{border-collapse:collapse;width:100%;margin:8px 0}
td,th{border:1px solid #ddd;padding:8px;font-size:0.9rem}
th{background:#f6f7f9;text-align:left}
.muted{color:#555;font-size:0.88rem}
.small{font-size:0.82rem;margin:6px 0 0 16px}
.mono{font-family:ui-monospace,monospace;font-size:0.78rem}
</style></head><body>
<h1>${esc(siteName)} — Netherlands utilities & household services (planning)</h1>
<p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">${esc(calculatorCanonicalUrl)}</a></p>
<p>${esc(result.summaryText)}</p>
<h2>Totals</h2>
<table>
<tr><th>Metric</th><th>Amount</th></tr>
<tr><td>Estimated monthly total</td><td style="text-align:right">${esc(formatUtilitiesEur(result.monthlyTotals.allInEur))}</td></tr>
<tr><td>Essential services</td><td style="text-align:right">${esc(formatUtilitiesEur(result.monthlyTotals.essentialEur))}</td></tr>
<tr><td>Optional services</td><td style="text-align:right">${esc(formatUtilitiesEur(result.monthlyTotals.optionalEur))}</td></tr>
<tr><td>First-month setup (modeled)</td><td style="text-align:right">${esc(formatUtilitiesEur(result.setupTotalEur))}</td></tr>
<tr><td>Services worth comparing (count)</td><td style="text-align:right">${result.comparableServicesCount}</td></tr>
<tr><td>Local / fixed charges (count)</td><td style="text-align:right">${result.fixedLocalServicesCount}</td></tr>
</table>
<h2>Setup buckets</h2>
<table>
<tr><th>Bucket</th><th style="text-align:right">€</th></tr>
<tr><td>Installation / activation</td><td style="text-align:right">${esc(formatUtilitiesEur(b.installationActivationEur))}</td></tr>
<tr><td>Hardware / modem</td><td style="text-align:right">${esc(formatUtilitiesEur(b.hardwareModemEur))}</td></tr>
<tr><td>Admin / overlap friction</td><td style="text-align:right">${esc(formatUtilitiesEur(b.adminOverlapFrictionEur))}</td></tr>
<tr><td>First-invoice timing buffer</td><td style="text-align:right">${esc(formatUtilitiesEur(b.firstInvoiceTimingBufferEur))}</td></tr>
<tr><td>Moving / connection friction</td><td style="text-align:right">${esc(formatUtilitiesEur(b.movingConnectionFrictionEur))}</td></tr>
</table>
<h2>Your inputs (summary)</h2>
<ul>
<li>City: ${esc(cityLabel)}</li>
<li>Household: ${esc(input.householdType)} · adults ${input.adultsCount} · children ${input.childrenCount}</li>
<li>Housing: ${esc(input.housingType)} · ${esc(input.sizeBand)} · heating ${esc(input.heating)}</li>
<li>Utilities included in rent: ${esc(input.utilitiesIncludedInRent)}</li>
</ul>
<h2>Monthly breakdown</h2>
<table><tr><th>Category</th><th style="text-align:right">Monthly / annual / setup</th></tr>${breakdownRows}</table>
<h2>What to compare vs what is fixed</h2>
<ul>${compareFixed}</ul>
<h2>Move-in checklist</h2>
<h3>Before move-in</h3><ul>${checklistBefore}</ul>
<h3>On move-in day</h3><ul>${checklistDay}</ul>
<h3>First month</h3><ul>${checklistFirst}</ul>
${
  result.scenarioComparisons.length
    ? `<h2>Scenario comparison</h2><table><tr><th>Scenario</th><th>Monthly</th><th>First month</th><th>Driver</th></tr>${scenarioRows}</table>`
    : ""
}
${warnings ? `<h2>Notes</h2><ul>${warnings}</ul>` : ""}
<h2>Disclaimer</h2>
<p class="muted">${esc(disclaimer)}</p>
</body></html>`;
}

export function downloadUtilitiesServicesHtml(filename: string, html: string): void {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintUtilitiesServicesSummary(html: string): void {
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.open();
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}
