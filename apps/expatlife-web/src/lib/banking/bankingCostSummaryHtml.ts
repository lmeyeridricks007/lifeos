import type { BankingCostEstimateResult, BankingCostEstimatorInputs } from "./bankingCostEstimator";
import { getBankingCostMethodologyLines } from "./bankingCostEstimator";
import { AFFILIATE_LINKS_SCORING_DISCLAIMER } from "@/src/data/banking/bankingProviderAffiliateSafety";
import { getBankingCostProfileSummaryLines } from "./bankingCostSummaryText";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function profileMarkdownLineToPlain(line: string): string {
  return line.replace(/^-\s*/, "").replace(/\*\*/g, "");
}

/** Minimal printable HTML summary — same idea as other tool HTML exports, without external assets. */
export function buildBankingCostSummaryHtml(opts: {
  input: BankingCostEstimatorInputs;
  result: BankingCostEstimateResult;
  nextSteps: readonly string[];
  shareUrl?: string;
}): string {
  const { input, result, nextSteps, shareUrl } = opts;
  const r = (a: number, b: number) => `${Math.round(a)}–${Math.round(b)} EUR`;

  const rows = result.breakdown
    .map(
      (b) =>
        `<tr><td>${esc(b.label)}</td><td style="text-align:right">${r(b.monthlyLow, b.monthlyHigh)}/mo</td><td style="text-align:right">${r(b.yearlyLow, b.yearlyHigh)}/yr</td></tr>`,
    )
    .join("");

  const warnings = result.warnings.map((w) => `<li>${esc(w.message)}</li>`).join("");
  const drivers = result.biggestCostDrivers.map((d) => `<li>${esc(d)}</li>`).join("");
  const steps = nextSteps.map((s) => `<li>${esc(s)}</li>`).join("");
  const assumptions = result.assumptionsUsed.map((a) => `<li>${esc(a)}</li>`).join("");
  const profile = getBankingCostProfileSummaryLines(input)
    .map((line) => `<li>${esc(profileMarkdownLineToPlain(line))}</li>`)
    .join("");
  const methodology = getBankingCostMethodologyLines().map((l) => `<li>${esc(l)}</li>`).join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><title>Banking cost estimate</title>
<style>body{font-family:system-ui,sans-serif;max-width:40rem;margin:2rem auto;padding:0 1rem;color:#111}table{width:100%;border-collapse:collapse}td,th{border:1px solid #ddd;padding:.4rem .5rem;font-size:14px}th{background:#f5f5f5;text-align:left}ul{margin:.25rem 0 .75rem}</style></head><body>
<h1>Banking cost estimate (planning)</h1>
${shareUrl ? `<p><a href="${esc(shareUrl)}">${esc(shareUrl)}</a></p>` : ""}
<p><strong>Monthly:</strong> ${r(result.monthlyLowEstimate, result.monthlyHighEstimate)} · <strong>Yearly:</strong> ${r(result.yearlyLowEstimate, result.yearlyHighEstimate)} · ${esc(result.currency)}</p>
<p style="font-size:13px;color:#333">Planning ranges only — not a live price from any bank.</p>
<h2>Selected profile</h2><ul>${profile}</ul>
<h2>${esc(result.recommendedSetup.title)}</h2>
<p>${esc(result.recommendedSetup.body)}</p>
<h2>Top cost drivers</h2><ol>${drivers}</ol>
<h2>Hidden cost warnings</h2><ul>${warnings.length ? warnings : "<li>(none flagged for this run)</li>"}</ul>
<h2>Category breakdown</h2>
<table><thead><tr><th>Category</th><th>Monthly</th><th>Yearly</th></tr></thead><tbody>${rows}</tbody></table>
<h2>Assumptions in this run</h2><ul>${assumptions}</ul>
<h2>Next steps</h2><ul>${steps}</ul>
<h2>Methodology &amp; disclaimer</h2><ul>${methodology}</ul>
<p style="font-size:13px;color:#333"><strong>Partner links:</strong> ${esc(AFFILIATE_LINKS_SCORING_DISCLAIMER)} This calculator does not use partner-link data in the math.</p>
<p style="font-size:13px;color:#333">This file was made in your browser. We do not store your answers on our servers.</p>
</body></html>`;
}
