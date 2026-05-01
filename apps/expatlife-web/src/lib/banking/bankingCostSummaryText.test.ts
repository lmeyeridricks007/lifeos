import test from "node:test";
import assert from "node:assert/strict";
import { defaultBankingCostEstimatorInput, estimateBankingCosts, getBankingCostNextSteps } from "./bankingCostEstimator";
import { buildBankingCostSummaryMarkdown, getBankingCostProfileSummaryLines } from "./bankingCostSummaryText";

test("profile summary lines cover key questionnaire fields", () => {
  const input = defaultBankingCostEstimatorInput();
  const lines = getBankingCostProfileSummaryLines(input);
  assert.ok(lines.some((l) => l.includes("Situation:")));
  assert.ok(lines.some((l) => l.includes("Send money abroad:")));
});

test("markdown summary includes ranges, drivers, warnings, setup, steps, disclaimer", () => {
  const input = {
    ...defaultBankingCostEstimatorInput(),
    sendsMoneyAbroad: "monthly" as const,
  };
  const result = estimateBankingCosts(input);
  const nextSteps = getBankingCostNextSteps(input);
  const md = buildBankingCostSummaryMarkdown({
    input,
    result,
    nextSteps,
    shareUrl: "https://example.com/netherlands/tools/banking-cost-estimator/",
  });
  assert.match(md, /## Selected profile/);
  assert.match(md, /## Estimated ranges/);
  assert.match(md, /## Top cost drivers/);
  assert.match(md, /## Hidden cost warnings/);
  assert.match(md, /## Recommended setup/);
  assert.match(md, /## Next-step checklist/);
  assert.match(md, /## Methodology & disclaimer/);
  assert.match(md, /Monthly:/);
  assert.match(md, /Yearly/);
  assert.match(md, /Data source:/);
});
