import { formatResidencyConfidence, incomeTypeLabel } from "./helpers";
import { payTaxTwiceTitle, professionalReviewLevelLabel } from "./resultDerivations";
import type { DoubleTaxAwarenessInput, DoubleTaxAwarenessResult } from "./types";

export type DoubleTaxExportPayload = {
  siteName: string;
  generatedAtIso: string;
  calculatorCanonicalUrl: string;
  disclaimer: string;
  input: DoubleTaxAwarenessInput;
  result: DoubleTaxAwarenessResult;
  planningNotes?: string;
};

function esc(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function yesNo(value: string): string {
  if (value === "yes") return "Yes";
  if (value === "no") return "No";
  return "Not sure / partly";
}

export function buildDoubleTaxAwarenessExportHtml(payload: DoubleTaxExportPayload): string {
  const { siteName, generatedAtIso, input, result, calculatorCanonicalUrl, disclaimer, planningNotes } = payload;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Double tax awareness summary</title>
<style>
body{font-family:system-ui,-apple-system,sans-serif;max-width:920px;margin:24px auto;padding:0 16px;color:#0f172a}
h1{font-size:1.4rem;margin-bottom:0.25rem}
h2{font-size:1.05rem;margin-top:1.5rem}
table{width:100%;border-collapse:collapse;margin-top:0.5rem}
th,td{border:1px solid #dbe3ee;padding:8px;font-size:0.9rem;vertical-align:top}
th{background:#f6f8fc;text-align:left}
.muted{color:#475569;font-size:0.9rem}
ul{padding-left:1.2rem}
.cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.card{border:1px solid #dbe3ee;border-radius:12px;padding:10px;background:#f8fbff}
@media (max-width:700px){.cards{grid-template-columns:1fr}}
</style></head><body>
<h1>${esc(siteName)} — Double Tax Awareness Tool Netherlands</h1>
<p class="muted">Generated ${esc(generatedAtIso)} · <a href="${esc(calculatorCanonicalUrl)}">Back to tool</a></p>
<p class="muted">${esc(disclaimer)}</p>
<h2>At a glance</h2>
<div class="cards">
${result.summaryCards
  .map(
    (card) =>
      `<div class="card"><p class="muted" style="margin:0 0 4px 0;font-size:0.75rem;text-transform:uppercase;letter-spacing:.04em">${esc(card.label)}</p><p style="margin:0;font-weight:600">${esc(card.value)}</p><p class="muted" style="margin:4px 0 0 0;font-size:0.8rem">${esc(card.note)}</p></div>`
  )
  .join("")}
</div>
<h2>Input snapshot</h2>
<ul>
<li>Scenario mode: ${esc(input.toolMode)}</li>
${input.planningFocus ? `<li>Guided planning focus: ${esc(input.planningFocus)}</li>` : ""}
<li>Tax year: ${input.taxYear}</li>
<li>Months in Netherlands / other main country: ${input.monthsInNetherlands} / ${input.monthsInOtherMainCountry}</li>
<li>BRP registration: ${yesNo(input.registeredInNlBrp)}</li>
<li>Permanent homes NL / abroad: ${yesNo(input.permanentHomeNl)} / ${yesNo(input.permanentHomeAbroad)}</li>
<li>Main work physically in NL: ${yesNo(input.mainWorkPhysicallyInNl)}</li>
<li>Employer in NL / payroll in NL: ${yesNo(input.employerInNl)} / ${yesNo(input.payrollInNl)}</li>
<li>Income types: ${esc(input.incomeTypes.map((type) => incomeTypeLabel(type)).join(", "))}</li>
</ul>
<h2>Will you likely pay tax twice?</h2>
<p><strong>${esc(payTaxTwiceTitle(result.payTaxTwiceVerdict))}</strong></p>
<p class="muted">${esc(result.payTaxTwiceSummary)}</p>
<h2>What this likely means for you</h2>
<ul>${result.whatThisLikelyMeans.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
<h2>Likely filing countries (planning hint)</h2>
<p class="muted">${esc(result.likelyFilingCountriesSummary)}</p>
<h2>Residency assessment</h2>
<p><strong>${esc(result.residencyAssessment.headline)}</strong></p>
<p class="muted">Planning signal strength (not a legal test): ${esc(formatResidencyConfidence(result.residencyAssessment.confidence))}</p>
<ul>${result.residencyAssessment.reasons.map((reason) => `<li>${esc(reason)}</li>`).join("")}</ul>
<h3>What could change this outcome</h3>
<ul>${result.whatCouldChangeOutcome.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
<h2>Double-tax risk</h2>
<p><strong>${esc(result.doubleTaxRiskLevel.toUpperCase())}</strong> · Complexity: ${esc(result.filingComplexity)}</p>
<ul>${result.topRiskReasons.map((reason) => `<li>${esc(reason)}</li>`).join("")}</ul>
<h2>How this tool works</h2>
<ul>${result.reasoning.map((reason) => `<li>${esc(reason)}</li>`).join("")}</ul>
<h3>Advanced logic (deterministic)</h3>
<ul>${result.advancedReasoning.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
<p class="muted">Protective factors seen: ${result.topProtectiveFactors.length ? esc(result.topProtectiveFactors.join(" | ")) : "No strong protective factor detected from current inputs."}</p>
<h2>Income tax map</h2>
<table><thead><tr><th>Income type</th><th>Likely taxed where</th><th>Why</th><th>NL declaration relevance</th><th>What this means for you</th><th>Risk</th><th>Note</th></tr></thead><tbody>
${result.taxMapByIncomeType
  .map(
    (row) =>
      `<tr><td>${esc(incomeTypeLabel(row.incomeType))}</td><td>${esc(row.likelyTaxedIn)}</td><td>${esc(row.why)}</td><td>${esc(row.nlDeclarationLikelyMatters)}</td><td>${esc(
        row.whatThisMeansForYou
      )}</td><td>${esc(row.doubleTaxRisk)}</td><td>${esc(row.cautionNote)}</td></tr>`
  )
  .join("")}
</tbody></table>
<h2>Likely relief categories</h2>
<ul>${result.reliefMethodLikely.map((method) => `<li><strong>${esc(method.title)}:</strong> ${esc(method.plainEnglish)} (${esc(method.whyLikely)})</li>`).join("")}</ul>
<h2>Action checklist</h2>
<ul>${result.filingActions.map((action) => `<li><strong>${esc(action.priority.toUpperCase())}</strong> — ${esc(action.title)}: ${esc(action.whyItMatters)}</li>`).join("")}</ul>
<h2>${esc(result.professionalReview.title)}</h2>
<p class="muted">${esc(
    result.professionalReview.title.toLowerCase().includes("optional")
      ? "Optional planning check"
      : professionalReviewLevelLabel(result.professionalReview.level)
  )}</p>
<ul>${result.professionalReview.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
<h2>When this tool may not be enough</h2>
<ul>${result.whenToolNotEnough.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
<h2>Records to keep</h2>
<ul>${result.recordKeepingChecklist.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
<h2>Escalation flags</h2>
<ul>${result.escalationFlags.map((flag) => `<li>${esc(flag)}</li>`).join("")}</ul>
${planningNotes ? `<h2>Your notes</h2><p>${esc(planningNotes)}</p>` : ""}
<h2>Important disclaimer</h2>
<p class="muted">This export is a planning aid only. It is not legal advice, not tax advice, and not a treaty determination. Filing outcomes depend on your facts, source-country rules, domestic law, and treaty interpretation. Verify with official sources and a qualified advisor before filing.</p>
</body></html>`;
}

export function downloadDoubleTaxAwarenessHtml(payload: DoubleTaxExportPayload): void {
  const html = buildDoubleTaxAwarenessExportHtml(payload);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-double-tax-awareness-${new Date().toISOString().slice(0, 10)}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function openPrintDoubleTaxAwarenessSummary(payload: DoubleTaxExportPayload): void {
  const html = buildDoubleTaxAwarenessExportHtml(payload);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}
