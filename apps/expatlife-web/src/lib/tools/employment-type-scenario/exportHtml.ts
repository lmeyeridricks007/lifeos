import { buildDynamicQuestions } from "./questions";
import type { EmploymentTypeScenarioInput, EmploymentTypeScenarioResult } from "./types";

export type EmploymentTypeScenarioExportPayload = {
  siteName: string;
  generatedAtIso: string;
  calculatorCanonicalUrl: string;
  disclaimer: string;
  input: EmploymentTypeScenarioInput;
  result: EmploymentTypeScenarioResult;
  planningNotes?: string;
};

function esc(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildEmploymentTypeScenarioExportHtml(payload: EmploymentTypeScenarioExportPayload): string {
  const { siteName, generatedAtIso, calculatorCanonicalUrl, disclaimer, input, result, planningNotes } = payload;
  const questions = buildDynamicQuestions(input, result);

  const tableRows = result.scenarios
    .map((s) => {
      return `<tr>
<td>${esc(s.shortLabel)}</td>
<td>${esc(Math.round(s.money.grossOrRevenueAnnual).toLocaleString("en-NL"))}</td>
<td>${esc(Math.round(s.money.estimatedNetAnnual).toLocaleString("en-NL"))}</td>
<td>${esc(String(Math.round(s.scores.stability)))}</td>
<td>${esc(String(Math.round(s.scores.flexibility)))}</td>
<td>${esc(String(Math.round(s.scores.adminSimplicity)))}</td>
<td>${esc(String(Math.round(s.scores.benefits)))}</td>
<td>${esc(String(Math.round(s.scores.immigrationFit)))}</td>
<td>${esc(String(Math.round(s.scores.overall)))}</td>
</tr>`;
    })
    .join("");

  const risks = result.scenarios
    .flatMap((s) => s.riskHighlights.map((h) => ({ who: s.shortLabel, h })))
    .map((x) => `<li><strong>${esc(x.who)}:</strong> ${esc(x.h.message)}</li>`)
    .join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Employment type scenario summary</title>
<style>
body{font-family:system-ui,-apple-system,sans-serif;max-width:960px;margin:24px auto;padding:0 16px;color:#0f172a}
h1{font-size:1.4rem;margin-bottom:0.25rem}
h2{font-size:1.05rem;margin-top:1.5rem}
table{width:100%;border-collapse:collapse;margin-top:0.5rem;font-size:0.82rem}
th,td{border:1px solid #dbe3ee;padding:6px;vertical-align:top}
th{background:#f6f8fc;text-align:left}
.muted{color:#475569;font-size:0.9rem}
ul{padding-left:1.2rem}
</style></head><body>
<h1>${esc(siteName)} — Employment Type Scenario Tool (Netherlands)</h1>
<p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">Back to tool</a></p>
<p class="muted">${esc(disclaimer)}</p>
${planningNotes ? `<p><strong>Your notes:</strong> ${esc(planningNotes)}</p>` : ""}
<h2>Summary</h2>
<p><strong>${esc(result.summary.headline)}</strong></p>
<p class="muted">${esc(result.summary.bestFitLabel)}</p>
<p class="muted">${esc(result.summary.plainEnglish)}</p>
<p><strong>Trade-off:</strong> ${esc(result.summary.tradeOffLabel)}</p>
<ul>${result.summary.whyItWon.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>
<h2>Priority weighting (how sliders combine)</h2>
<p class="muted">${esc(result.priorityWeightingDocumentation)}</p>
<h2>Assumptions echoed</h2>
<ul>${result.assumptionsEcho.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
<h2>Scenario comparison</h2>
<table>
<thead><tr>
<th>Scenario</th><th>Gross / revenue (€)</th><th>Est. net (€)</th>
<th>Stability</th><th>Flexibility</th><th>Admin</th><th>Benefits</th><th>Expat fit</th><th>Overall</th>
</tr></thead>
<tbody>${tableRows}</tbody>
</table>
<h2>Risk highlights</h2>
<ul>${risks}</ul>
<h2>Questions to ask before choosing</h2>
<ul>${questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul>
<h2>Money breakdown (per scenario)</h2>
${result.scenarios
  .map((s) => {
    const lines = s.money.lines
      .map((l) => `<li>${esc(l.label)}: €${esc(Math.round(l.amountAnnual).toLocaleString("en-NL"))}${l.note ? ` — ${esc(l.note)}` : ""}</li>`)
      .join("");
    const notes = s.money.planningNotes.map((n) => `<li>${esc(n)}</li>`).join("");
    return `<h3>${esc(s.label)}</h3><ul>${lines}</ul><p class="muted">Planning notes:</p><ul>${notes}</ul>`;
  })
  .join("")}
</body></html>`;
}

export function downloadEmploymentTypeScenarioHtml(payload: EmploymentTypeScenarioExportPayload): void {
  const html = buildEmploymentTypeScenarioExportHtml(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-employment-type-scenario-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintEmploymentTypeScenarioSummary(payload: EmploymentTypeScenarioExportPayload): void {
  const html = buildEmploymentTypeScenarioExportHtml(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}
