import type { JobOfferComparisonFormState, JobOfferComparisonResult } from "./types";

export type JobOfferComparisonExportPayload = {
  siteName: string;
  generatedAtIso: string;
  calculatorCanonicalUrl: string;
  disclaimer: string;
  state: JobOfferComparisonFormState;
  result: JobOfferComparisonResult;
};

function esc(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildJobOfferComparisonExportHtml(payload: JobOfferComparisonExportPayload): string {
  const { siteName, generatedAtIso, calculatorCanonicalUrl, disclaimer, result, state } = payload;
  const { topRecommendation, activeOffers, decisionLenses, whatWouldChange, assumptionsEcho, priorityWeightingNote } = result;

  const tableRows = activeOffers
    .map((o) => {
      const ss = o.structuredScores;
      return `<tr>
<td>${esc(o.label)}</td>
<td>${esc(Math.round(o.compensationSummary.annualTotalCashRecurring).toLocaleString("en-NL"))}</td>
<td>${esc(String(ss.compensation))}</td>
<td>${esc(Math.round(o.netPayEstimate.estimatedNetMonthly).toLocaleString("en-NL"))}</td>
<td>${esc(String(ss.estimatedNetPay))}</td>
<td>${esc(String(ss.benefits))}</td>
<td>${esc(String(ss.securityStability))}</td>
<td>${esc(String(o.expatSupportSummary.score))}</td>
<td>${esc(String(ss.contractQuality))}</td>
<td>${esc(String(ss.commuteLifestyle))}</td>
<td>${esc(String(ss.affordabilityAfterCosts))}</td>
<td>${esc(String(o.overallScore))}</td>
</tr>`;
    })
    .join("");

  const questions = activeOffers.flatMap((o) => o.negotiationQuestions.map((q) => ({ who: o.label, q })));

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Job offer comparison summary</title>
<style>
body{font-family:system-ui,-apple-system,sans-serif;max-width:960px;margin:24px auto;padding:0 16px;color:#0f172a}
h1{font-size:1.4rem;margin-bottom:0.25rem}
h2{font-size:1.05rem;margin-top:1.5rem}
table{width:100%;border-collapse:collapse;margin-top:0.5rem;font-size:0.82rem}
th,td{border:1px solid #dbe3ee;padding:6px;vertical-align:top}
th{background:#f6f8fc;text-align:left}
.muted{color:#475569;font-size:0.9rem}
ul{padding-left:1.2rem}
@media print { a { color: inherit; text-decoration: none; } }
</style></head><body>
<h1>${esc(siteName)} — Job Offer Comparison (Netherlands)</h1>
<p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">Back to tool</a></p>
<p class="muted">${esc(disclaimer)}</p>
<h2>Top recommendation</h2>
<p><strong>${esc(topRecommendation.winnerLabel)}</strong> — ${esc(topRecommendation.confidenceLabel)}</p>
<p>${esc(topRecommendation.plainEnglishLead)}</p>
<p class="muted">${esc(topRecommendation.confidenceNote)}</p>
<ul>${topRecommendation.whyItWon.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>
<p><strong>Trade-off:</strong> ${esc(topRecommendation.mainTradeOff)}</p>
<p><strong>Runner-up (${esc(topRecommendation.runnerUpLabel)}):</strong></p>
<ul>${topRecommendation.runnerUpWhyLost.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>
${topRecommendation.moneyVsSecurityTension ? `<p><strong>Money vs security / expat:</strong> ${esc(topRecommendation.moneyVsSecurityTension)}</p>` : ""}
<h3>Confidence &amp; refinements</h3>
<p>${esc(topRecommendation.closeness.isCloseCall ? "Close call — scores are tight." : "Gap is wider with your current sliders.")} Overall gap: ${esc(String(topRecommendation.closeness.overallScoreGap))} points.</p>
<ul>${topRecommendation.closeness.refinementSuggestions.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
<h2>Priority weighting</h2>
<p class="muted">${esc(priorityWeightingNote)}</p>
<h2>Decision lenses</h2>
<ul>${decisionLenses
    .map(
      (l) =>
        `<li><strong>${esc(l.title)}:</strong> ${esc(l.winnerLabel)} (${esc(l.winnerScoreSummary)}) — ${esc(l.why)}${l.tiedSlots && l.tiedSlots.length > 1 ? ` [tie: ${l.tiedSlots.join(", ")}]` : ""}</li>`
    )
    .join("")}</ul>
<h2>Comparison table</h2>
<table>
<thead><tr>
<th>Offer</th><th>Annual recurring cash (€)</th><th>Compensation score</th><th>Est. net / mo (€)</th><th>Net score</th>
<th>Benefits</th><th>Security</th><th>Expat</th><th>Contract quality</th><th>Commute/life</th><th>Affordability</th><th>Overall fit</th>
</tr></thead>
<tbody>${tableRows}</tbody>
</table>
<h2>Hidden costs &amp; heads-ups (planning)</h2>
${activeOffers
  .map((o) => {
    const lines = o.hiddenCosts.items
      .map((h) => `<li><strong>${esc(h.headline)}</strong> (${esc(h.severity)}) — ${esc(h.detail)}</li>`)
      .join("");
    return `<h3>${esc(o.label)}</h3><p class="muted">${esc(o.hiddenCosts.summaryLine)}</p><ul>${lines}</ul>`;
  })
  .join("")}
<h2>Strengths / weaknesses</h2>
${activeOffers
  .map(
    (o) => `<h3>${esc(o.label)}</h3>
<p><strong>Strengths</strong></p><ul>${o.strengths.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
<p><strong>Downsides / review</strong></p><ul>${o.weaknesses.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`
  )
  .join("")}
<h2>Risk highlights</h2>
<ul>${activeOffers
    .flatMap((o) => o.riskFlags.map((f) => `<li><strong>${esc(o.label)}:</strong> ${esc(f.message)}</li>`))
    .join("")}</ul>
<h2>Questions to ask / negotiate</h2>
<ul>${questions.map((x) => `<li><strong>${esc(x.who)}:</strong> ${esc(x.q)}</li>`).join("")}</ul>
<h2>What could change the result</h2>
<ul>${whatWouldChange.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>
<h2>Assumptions echoed</h2>
<ul>${assumptionsEcho.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
${(() => {
  const blocks = activeOffers
    .map((o) => {
      const slot = state.offers[o.slotId];
      const t = slot.offer.uploadedOfferLetterText.trim();
      if (!t) return "";
      const name = slot.offer.uploadedOfferLetterFileName.trim();
      const sub = name ? `${esc(o.label)} — ${esc(name)}` : esc(o.label);
      return `<h3>${sub}</h3>
<pre style="white-space:pre-wrap;word-break:break-word;font-size:0.82rem;border:1px solid #dbe3ee;padding:10px;border-radius:8px;background:#fafbfc">${esc(t)}</pre>`;
    })
    .filter(Boolean);
  if (!blocks.length) return "";
  return `<h2>Uploaded offer letter excerpts</h2>
<p class="muted">Text extracted in the tool (PDF with text layer or .txt). Not used in scores — for your records.</p>
${blocks.join("")}`;
})()}
</body></html>`;
}

export function downloadJobOfferComparisonHtml(payload: JobOfferComparisonExportPayload): void {
  const html = buildJobOfferComparisonExportHtml(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-job-offer-comparison-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintJobOfferComparisonSummary(payload: JobOfferComparisonExportPayload): void {
  const html = buildJobOfferComparisonExportHtml(payload);
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}
