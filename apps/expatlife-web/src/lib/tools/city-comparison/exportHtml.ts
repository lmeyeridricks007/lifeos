import type { CityComparisonInput, CityComparisonResult } from "./types";

export type CityComparisonExportPayload = {
  siteName: string;
  generatedAtIso: string;
  calculatorCanonicalUrl: string;
  disclaimer: string;
  input: CityComparisonInput;
  result: CityComparisonResult;
  planningNotes?: string;
};

function esc(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildCityComparisonExportHtml(payload: CityComparisonExportPayload): string {
  const { siteName, generatedAtIso, input, result, calculatorCanonicalUrl, disclaimer, planningNotes } = payload;
  const rows = result.ranking;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Netherlands city comparison summary</title>
<style>
body{font-family:system-ui,-apple-system,sans-serif;max-width:960px;margin:24px auto;padding:0 16px;color:#0f172a}
h1{font-size:1.4rem;margin-bottom:0.25rem}
h2{font-size:1.05rem;margin-top:1.5rem}
table{width:100%;border-collapse:collapse;margin-top:0.5rem}
th,td{border:1px solid #dbe3ee;padding:8px;font-size:0.88rem;vertical-align:top}
th{background:#f6f8fc;text-align:left}
.muted{color:#475569;font-size:0.9rem}
ul{padding-left:1.2rem}
</style></head><body>
<h1>${esc(siteName)} — Netherlands City Comparison Tool</h1>
<p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">Back to tool</a></p>
<p class="muted">${esc(disclaimer)}</p>
<h2>Profile snapshot</h2>
<ul>
<li>Selected cities: ${esc(input.selectedCities.join(", "))}</li>
<li>Household: ${esc(input.householdType)} (${input.adultsCount} adults, ${input.childrenCount} children)</li>
<li>Monthly net salary (entered): €${input.monthlyNetSalary}</li>
<li>Work mode: ${esc(input.workMode)}${input.workMode !== "remote" ? ` · Office city: ${esc(input.officeCity)}` : ""}</li>
<li>Scenario lens: ${esc(result.activeScenarioMode)} · How decisive: ${esc(result.resultConfidence)}</li>
<li>Cost detail: ${input.useColModelForSpend ? "Full monthly estimate" : "Essentials only"} · 30% ruling boost applied: ${input.planningWith30PercentRuling ? "Yes" : "No"}</li>
</ul>
${
  result.comparisonContextNotes?.length
    ? `<h2>Whole comparison (not per city)</h2><ul>${result.comparisonContextNotes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>`
    : ""
}
${result.tradeoffSectionTip ? `<p class="muted"><strong>Expand your shortlist:</strong> ${esc(result.tradeoffSectionTip)}</p>` : ""}
<h2>Best match (planning fit)</h2>
<p><strong>${esc(result.bestMatch.displayName)}</strong> — overall score ${result.bestMatch.overallScore}/100</p>
<p class="muted">${esc(result.planningFitConfidence)}</p>
<p class="muted">${esc(result.bestMatch.descriptor)}</p>
<p class="muted">Strengths: ${esc(result.bestMatch.positives.join("; "))}</p>
<p class="muted">Watch-outs: ${esc(result.bestMatch.negatives.join("; "))}</p>
<h2>Ranking table</h2>
<table><thead><tr><th>City</th><th>Overall</th><th>Affordability</th><th>Commute</th><th>Family</th><th>Expat ease</th><th>Lifestyle</th><th>Career</th><th>Net remaining</th></tr></thead><tbody>
${rows
  .map(
    (r) =>
      `<tr><td>${esc(r.displayName)}</td><td>${r.overallScore}</td><td>${r.dimensions.affordability}</td><td>${r.dimensions.commute}</td><td>${r.dimensions.family}</td><td>${r.dimensions.expatEase}</td><td>${r.dimensions.lifestyle}</td><td>${r.dimensions.career}</td><td>€${r.netRemainingEur}</td></tr>`
  )
  .join("")}
</tbody></table>
<h2>Estimated monthly costs</h2>
<table><thead><tr><th>City</th><th>Rent</th><th>Living (excl. rent)</th><th>Transport</th><th>Health</th><th>Leisure</th><th>Family / childcare</th><th>Total</th></tr></thead><tbody>
${rows
  .map(
    (r) =>
      `<tr><td>${esc(r.displayName)}</td><td>€${r.cost.rentEur}</td><td>€${r.cost.livingLessRentEur}</td><td>€${r.cost.transportEur}</td><td>€${r.cost.healthEur}</td><td>€${r.cost.lifestyleLeisureEur}</td><td>€${r.cost.familyChildcareEur}</td><td>€${r.cost.totalMonthlyOutflowEur}</td></tr>`
  )
  .join("")}
</tbody></table>
${
  input.workMode !== "remote"
    ? `<h2>Commute snapshot (illustrative)</h2>
<p class="muted">Not live timetables — verify with NS / 9292.</p>
${rows
  .map((r) => {
    const ci = r.commuteInsights;
    if (!ci) return "";
    const m = (b: { title: string; typicalOneWay: string; reliability: string; costRough: string }) =>
      `<li><strong>${esc(b.title)}</strong> — typical one-way: ${esc(b.typicalOneWay)}; reliability: ${esc(b.reliability)}; rough cost: ${esc(b.costRough)}</li>`;
    return `<h3>${esc(r.displayName)} → ${esc(ci.officeDisplayName)} (${esc(ci.practicality)})</h3><p>${esc(ci.preferredSummary)}</p><ul>${m(ci.modes.train_pt)}${m(ci.modes.bike)}${m(ci.modes.car)}</ul><p class="muted"><strong>Disruptions:</strong> ${esc(ci.corridorDisruption)}</p>`;
  })
  .join("")}`
    : ""
}
<h2>Recommended decision (plain language)</h2>
<ul>${result.recommendedDecision.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
<h2>What would change the result</h2>
<ul>${result.whatWouldChange.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
<h2>Scenario lenses</h2>
<table><thead><tr><th>Scenario</th><th>Top pick</th><th>Note</th></tr></thead><tbody>
${result.scenarioRows.map((s) => `<tr><td>${esc(s.label)}</td><td>${esc(s.topCity)}</td><td>${esc(s.note)}</td></tr>`).join("")}
</tbody></table>
${planningNotes ? `<h2>Your notes</h2><p>${esc(planningNotes)}</p>` : ""}
<h2>Disclaimer</h2>
<p class="muted">Planning comparison using the same cost estimates as ExpatCopilot’s calculator plus commute and lifestyle snapshots — not rental quotes, not live timetables, and not a single “best city” for everyone. Check rent, schools, and commute with real sources before you decide.</p>
</body></html>`;
}

export function downloadCityComparisonHtml(payload: CityComparisonExportPayload): void {
  const html = buildCityComparisonExportHtml(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-nl-city-comparison-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintCityComparisonSummary(payload: CityComparisonExportPayload): void {
  const html = buildCityComparisonExportHtml(payload);
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}
