# Double Tax Awareness (Netherlands) — logic overview

Deterministic planning tool: **no APIs**, **no final tax math**, **no legal/tax advice**. Outputs are labeled as planning signals and directional treaty-awareness hints.

## Where logic lives

| Area | Module |
|------|--------|
| Core scoring, income rows, summary cards | `engine.ts` |
| Shared sets (foreign-linked income, complexity) | `rules.ts` |
| Headlines, labels, day clamping | `helpers.ts` |
| Relief text templates | `explanations.ts` |
| Pay-twice framing, plain summaries, professional review tier, “what could change”, tool limits | `resultDerivations.ts` |
| What-if rows (patch + re-run engine) | `scenarioCompare.ts` |
| Service category mapping | `serviceRecommendation.ts` |
| URL/storage encode + sanitize | `urlState.ts` |
| HTML export | `exportHtml.ts` |
| Module index / pointers | `ruleConfig.ts` |

## Types

`types.ts` defines inputs, `DoubleTaxAwarenessResult`, and enums. V2 adds `planningFocus`, `payTaxTwiceVerdict`, `whatThisLikelyMeans`, `whatCouldChangeOutcome`, `whenToolNotEnough`, `professionalReview`, `advancedReasoning`, and `whatThisMeansForYou` on income rows.

## Tests

- `engine.test.ts` — scenario smoke tests  
- `exportHtml.test.ts` — export contains key sections  

Run from repo root (adjust if your workspace uses a different test runner):

`node --import tsx --test apps/expatlife-web/src/lib/tools/double-tax-awareness/*.test.ts`

(or use the monorepo’s `npm test` target if configured).
