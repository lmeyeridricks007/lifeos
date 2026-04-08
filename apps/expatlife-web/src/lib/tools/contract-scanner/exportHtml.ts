import { formatOverallConcernLabel } from "@/src/lib/tools/contract-scanner/parser";
import type { ConfidenceTier, ContractScanResult, FindingRiskLabel, InputMode } from "@/src/lib/tools/contract-scanner/types";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function modeLabel(m: InputMode): string {
  switch (m) {
    case "paste":
      return "Pasted text";
    case "pdf":
      return "PDF upload (text extracted)";
    case "checklist":
      return "Manual checklist";
    default:
      return m;
  }
}

function riskLabelHuman(l: FindingRiskLabel): string {
  const map: Record<FindingRiskLabel, string> = {
    common_standard: "Common / standard",
    worth_confirming: "Worth confirming",
    potentially_restrictive: "Potentially restrictive",
    broad_strong_wording: "Broad / strong wording",
    missing_unclear: "Missing / unclear",
    review_before_signing: "Review before signing",
  };
  return map[l] ?? l;
}

function scanConfidenceHuman(t: ConfidenceTier): string {
  const map: Record<ConfidenceTier, string> = {
    high: "Higher — more text and clearer matches",
    medium: "Medium — useful but verify against your PDF",
    low: "Lower — short text or weak PDF extraction; treat as indicative only",
  };
  return map[t] ?? t;
}

function findingConfidenceHuman(t: ConfidenceTier): string {
  const map: Record<ConfidenceTier, string> = {
    high: "Higher match confidence",
    medium: "Medium",
    low: "Lower — double-check in the original document",
  };
  return map[t] ?? t;
}

export function buildContractScannerHtmlExport(result: ContractScanResult, calculatorCanonicalUrl: string): string {
  const ts = new Date().toISOString();
  const concern = formatOverallConcernLabel(result.overallConcern);

  const findingsRows = result.findings
    .map(
      (f) =>
        `<tr><td>${esc(f.subcategory)}</td><td>${esc(riskLabelHuman(f.riskLabel))}</td><td>${esc(
          findingConfidenceHuman(f.confidence)
        )}</td><td>${esc(f.snippet)}</td></tr>`
    )
    .join("");

  const keyRiskRows = result.keyRiskCards
    .map((k) => `<tr><td>${esc(k.title)}</td><td>${esc(riskLabelHuman(k.badge))}</td><td>${esc(k.summary)}</td></tr>`)
    .join("");

  const questions = result.hrQuestions.map((q) => `<li>${esc(q.text)}</li>`).join("");

  const missing = result.missingItems.map((m) => `<li><strong>${esc(m.label)}</strong> — ${esc(m.detail)}</li>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Contract scan summary — ExpatCopilot</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; max-width: 820px; margin: 28px auto; padding: 0 18px 40px; color: #111; line-height: 1.5; }
    h1 { font-size: 1.4rem; line-height: 1.25; margin-bottom: 0.35em; }
    h2 { font-size: 1.05rem; margin-top: 1.5em; margin-bottom: 0.5em; border-bottom: 1px solid #e5e5e5; padding-bottom: 0.25em; }
    .muted { color: #444; font-size: 0.9rem; line-height: 1.45; }
    table { width: 100%; border-collapse: collapse; margin: 12px 0 20px; font-size: 0.82rem; }
    th, td { border: 1px solid #ccc; padding: 10px; vertical-align: top; text-align: left; }
    th { background: #f4f4f4; font-weight: 600; }
    .warn { background: #fff8e6; padding: 14px; border-radius: 10px; margin: 18px 0; font-size: 0.9rem; line-height: 1.45; border: 1px solid #f0e0b2; }
    ul, ol { padding-left: 1.2em; }
    li { margin: 0.35em 0; }
    @media print { a { color: #000; } body { margin: 12px; } }
  </style>
</head>
<body>
  <h1>Dutch employment contract — planning scan summary</h1>
  <p class="muted">Generated ${esc(ts)} · <a href="${esc(calculatorCanonicalUrl)}">ExpatCopilot contract scanner</a></p>
  <div class="warn">
    <strong>Not legal advice.</strong> This export is for awareness and preparation only. It does not validate clauses or predict enforceability.
  </div>
  <h2>Input</h2>
  <p><strong>Mode:</strong> ${esc(modeLabel(result.mode))}</p>
  ${
    result.documentInputSource
      ? `<p class="muted"><strong>Document source:</strong> ${esc(result.documentInputSource.replace(/_/g, " "))} · <strong>Extraction:</strong> ${esc(
          (result.extractionMethod ?? "none").replace(/_/g, " ")
        )} · <strong>Insight tier:</strong> ${esc(result.insightLevel ?? "basic")}</p>`
      : ""
  }
  ${
    result.ocrRecommended !== undefined
      ? `<p class="muted"><strong>OCR recommended (heuristic):</strong> ${result.ocrRecommended ? "Yes" : "No"} · <strong>OCR available:</strong> ${
          result.ocrAvailable ? "Yes" : "No"
        }</p>`
      : ""
  }
  <p><strong>Overall concern:</strong> ${esc(concern)}</p>
  <p><strong>Contract type (detected / indicated):</strong> ${esc(result.contractType.replace(/_/g, " "))}</p>
  <p><strong>Scan confidence:</strong> ${esc(scanConfidenceHuman(result.scanConfidence))}</p>
  <h2>Top concerns</h2>
  <ul>${result.topConcerns.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
  <p><strong>Suggested next step:</strong> ${esc(result.suggestedNextStep)}</p>
  ${
    result.keyRiskCards.length
      ? `<h2>Key risks (high level)</h2>
  <table>
    <thead><tr><th>Topic</th><th>Label</th><th>Summary</th></tr></thead>
    <tbody>${keyRiskRows}</tbody>
  </table>`
      : ""
  }
  <h2>Clause findings (summary)</h2>
  <table>
    <thead><tr><th>Topic</th><th>Risk label</th><th>Match confidence</th><th>Snippet</th></tr></thead>
    <tbody>${findingsRows || "<tr><td colspan='4'>No automated clause matches.</td></tr>"}</tbody>
  </table>
  <h2>Questions to ask HR / recruiter</h2>
  <ol>${questions}</ol>
  <h2>Missing / unclear (heuristic)</h2>
  <ul>${missing || "<li>None flagged by this scan.</li>"}</ul>
  <p class="muted">Handbook annexes and CAO text may contain material terms not reflected here.</p>
</body>
</html>`;
}

export function downloadContractScannerHtml(result: ContractScanResult, calculatorCanonicalUrl: string): void {
  const html = buildContractScannerHtmlExport(result, calculatorCanonicalUrl);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `expatcopilot-contract-scan-${new Date().toISOString().slice(0, 10)}.html`;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function openPrintContractScannerSummary(result: ContractScanResult, calculatorCanonicalUrl: string): void {
  const html = buildContractScannerHtmlExport(result, calculatorCanonicalUrl);
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}
