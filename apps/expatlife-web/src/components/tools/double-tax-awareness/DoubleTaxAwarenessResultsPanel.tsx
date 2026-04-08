"use client";

import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { THIRTY_RULING_ADVISORY } from "@/src/lib/tools/double-tax-awareness/explanations";
import { formatPriority, formatResidencyConfidence, incomeTypeLabel } from "@/src/lib/tools/double-tax-awareness/helpers";
import { payTaxTwiceTitle, professionalReviewLevelLabel } from "@/src/lib/tools/double-tax-awareness/resultDerivations";
import type { ScenarioCompareRow } from "@/src/lib/tools/double-tax-awareness/scenarioCompare";
import type { DoubleTaxAwarenessInput, DoubleTaxAwarenessResult } from "@/src/lib/tools/double-tax-awareness/types";
import { DoubleTaxAwarenessRecommendedServices } from "./DoubleTaxAwarenessRecommendedServices";
import { DoubleTaxAwarenessTip } from "./DoubleTaxAwarenessTip";

const BASE = "/netherlands";

function ResultSectionCard({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:scroll-mt-32 md:p-5"
    >
      <h3 className="text-xs font-semibold uppercase tracking-wide text-copilot-primary">{title}</h3>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function professionalReviewBadge(result: DoubleTaxAwarenessResult["professionalReview"]): string {
  if (result.title.toLowerCase().includes("optional")) return "Optional planning check";
  return professionalReviewLevelLabel(result.level);
}

function summaryCardTip(label: string): React.ReactNode | null {
  if (label.includes("residency")) {
    return (
      <DoubleTaxAwarenessTip
        label="Tax residency signal"
        text="This is a planning signal from your answers, not a legal residency test. Officials and treaties use detailed facts and timelines."
      />
    );
  }
  if (label.includes("Double-tax")) {
    return (
      <DoubleTaxAwarenessTip
        label="Double-tax risk"
        text="Here we mean overlap risk and filing friction — not a prediction that you will pay full tax twice. Relief often applies when documentation is right."
      />
    );
  }
  if (label.includes("complexity")) {
    return (
      <DoubleTaxAwarenessTip
        label="Filing complexity"
        text="Complexity reflects how many countries, income types, and documentation threads you may need to align — not how smart you need to be."
      />
    );
  }
  return null;
}

export type DoubleTaxAwarenessResultsPanelProps = {
  liveResult: DoubleTaxAwarenessResult;
  scenarioInput: DoubleTaxAwarenessInput;
  scenarioRows: ScenarioCompareRow[];
  exportNotes: string;
  setExportNotes: (v: string) => void;
  downloadHtml: () => void;
  printSummary: () => void;
  copyShareLink: () => void;
  resetDefaults: () => void;
  fieldLabelClass: string;
};

export function DoubleTaxAwarenessResultsPanel({
  liveResult,
  scenarioInput,
  scenarioRows,
  exportNotes,
  setExportNotes,
  downloadHtml,
  printSummary,
  copyShareLink,
  resetDefaults,
  fieldLabelClass,
}: DoubleTaxAwarenessResultsPanelProps) {
  const showThirtyRuling = scenarioInput.thirtyPercentRuling !== "no";

  return (
    <div className="space-y-6">
      <div id="start-here-summary" className="scroll-mt-28 md:scroll-mt-32">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">What matters most</p>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {liveResult.summaryCards.map((card, index) => (
            <article
              key={card.label}
              className={
                index < 2
                  ? "rounded-xl border border-copilot-primary/25 bg-gradient-to-br from-copilot-primary/[0.08] to-copilot-surface p-4 shadow-expatos-md ring-1 ring-copilot-primary/[0.12]"
                  : "rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm"
              }
            >
              <p className="flex flex-wrap items-center gap-1 text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">
                {card.label}
                {summaryCardTip(card.label)}
              </p>
              <p className={index < 2 ? "mt-1 text-base font-semibold text-copilot-text-primary" : "mt-1 text-sm font-semibold text-copilot-text-primary"}>
                {card.value}
              </p>
              <p className="mt-1 text-xs text-copilot-text-secondary">{card.note}</p>
            </article>
          ))}
        </div>
      </div>

      <ResultSectionCard id="pay-twice-likelihood" title="Will you likely pay tax twice?">
        <p className="text-base font-semibold text-copilot-text-primary">{payTaxTwiceTitle(liveResult.payTaxTwiceVerdict)}</p>
        <p className="text-sm text-copilot-text-secondary">{liveResult.payTaxTwiceSummary}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
          <li>Filing in two countries does not automatically mean tax is paid twice.</li>
          <li>Treaties, exemptions, and tax credits often reduce overlap when rules and evidence line up.</li>
          <li>The practical issue is often filing scope, withholding alignment, and documentation — not double payment itself.</li>
        </ul>
      </ResultSectionCard>

      <ResultSectionCard id="what-this-means-summary" title="What this likely means for you">
        <ul className="list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
          {liveResult.whatThisLikelyMeans.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </ResultSectionCard>

      {showThirtyRuling ? (
        <InfoBox title={THIRTY_RULING_ADVISORY.title} variant="info">
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
            {THIRTY_RULING_ADVISORY.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </InfoBox>
      ) : null}

      <ResultSectionCard id="residency-assessment" title="Residency assessment">
        <p className="text-base font-semibold text-copilot-text-primary">{liveResult.residencyAssessment.headline}</p>
        <p className="text-sm text-copilot-text-secondary">
          Planning signal strength (not a legal test):{" "}
          <span className="font-medium text-copilot-text-primary">{formatResidencyConfidence(liveResult.residencyAssessment.confidence)}</span>
          <DoubleTaxAwarenessTip
            label="Confidence label"
            text="Low to high describes how strongly your answers point in one direction. Borderline facts, missing dates, or treaty tie-breakers can change outcomes."
          />
        </p>
        <p className="text-sm text-copilot-text-secondary">
          This is a planning interpretation of your signals (time, home and family ties, and work pattern), not a final legal residency determination.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
          {liveResult.residencyAssessment.reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
        <div className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4">
          <p className="text-sm font-semibold text-copilot-text-primary">What could change this outcome</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
            {liveResult.whatCouldChangeOutcome.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </ResultSectionCard>

      <ResultSectionCard id="income-tax-map" title="Where each income may be taxed">
        <p className="text-sm text-copilot-text-secondary">
          Use this as a filing-prep map. Labels are directional; exact rules depend on treaties and your evidence.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-copilot-primary/10 text-left text-xs uppercase tracking-wide text-copilot-text-secondary">
                <th className="py-2 pr-3">Income type</th>
                <th className="py-2 pr-3">Likely taxed in</th>
                <th className="py-2 pr-3">Why</th>
                <th className="py-2 pr-3">NL declaration</th>
                <th className="py-2 pr-3">What this means for you</th>
                <th className="py-2 pr-3">Risk</th>
                <th className="py-2">Note</th>
              </tr>
            </thead>
            <tbody>
              {liveResult.taxMapByIncomeType.map((row) => (
                <tr key={row.incomeType} className="border-b border-copilot-primary/[0.07]">
                  <td className="py-2 pr-3 text-copilot-text-primary">{incomeTypeLabel(row.incomeType)}</td>
                  <td className="py-2 pr-3 text-copilot-text-secondary">{row.likelyTaxedIn}</td>
                  <td className="py-2 pr-3 text-copilot-text-secondary">{row.why}</td>
                  <td className="py-2 pr-3 text-copilot-text-secondary">{row.nlDeclarationLikelyMatters}</td>
                  <td className="py-2 pr-3 text-copilot-text-secondary">{row.whatThisMeansForYou}</td>
                  <td className="py-2 pr-3 capitalize text-copilot-text-primary">{row.doubleTaxRisk}</td>
                  <td className="py-2 text-copilot-text-secondary">{row.cautionNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ResultSectionCard>

      <ResultSectionCard id="double-tax-risk" title="Double taxation risk (planning view)">
        <p className="inline-flex flex-wrap items-center gap-1 text-base font-semibold text-copilot-text-primary">
          Risk rating: {liveResult.doubleTaxRiskLevel.toUpperCase()}
          <DoubleTaxAwarenessTip
            label="Risk rating"
            text="This summarizes overlap and mismatch signals from your inputs. It is not a statutory penalty or a final tax bill."
          />
        </p>
        <p className="text-sm text-copilot-text-secondary">
          Filing in two countries does not always mean tax is paid twice. Relief methods often reduce overlap, but correct filing and records still matter.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-copilot-text-primary">Top triggers</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
              {liveResult.topRiskReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-copilot-text-primary">What usually helps</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
              {liveResult.topProtectiveFactors.length ? (
                liveResult.topProtectiveFactors.map((reason) => <li key={reason}>{reason}</li>)
              ) : (
                <li>Early record-keeping and clear income mapping often reduce later corrections.</li>
              )}
            </ul>
          </div>
        </div>
      </ResultSectionCard>

      <ResultSectionCard id="relief-methods" title="Relief direction (treaty-awareness)">
        <p className="text-sm text-copilot-text-secondary">
          Relief labels below are directional categories for planning. Exact relief depends on treaty text, domestic rules, and your final facts at filing.
        </p>
        <ul className="space-y-3">
          {liveResult.reliefMethodLikely.map((method) => (
            <li key={`${method.key}-${method.whyLikely}`} className="rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/50 p-3">
              <p className="font-semibold text-copilot-text-primary">
                {method.title}
                {method.key === "exemption_possible" ? (
                  <DoubleTaxAwarenessTip
                    label="Exemption method"
                    text="Exemption often means income is still reportable in a return, but tax is reduced in one country to avoid duplicate taxation."
                  />
                ) : null}
                {method.key === "tax_credit_possible" ? (
                  <DoubleTaxAwarenessTip
                    label="Tax credit method"
                    text="Tax credit often means foreign tax paid can offset domestic tax up to allowed limits, depending on domestic rules and treaty provisions."
                  />
                ) : null}
                {method.key === "treaty_review_needed" ? (
                  <DoubleTaxAwarenessTip
                    label="Tax treaty review"
                    text="Treaties usually allocate taxing rights by income type. In complex cases, article-level review is often needed by a qualified advisor."
                  />
                ) : null}
              </p>
              <p className="mt-1 text-sm text-copilot-text-secondary">{method.plainEnglish}</p>
              <p className="mt-1 text-xs text-copilot-text-secondary">Why this appears: {method.whyLikely}</p>
            </li>
          ))}
        </ul>
      </ResultSectionCard>

      <ResultSectionCard id="what-to-do-next" title="Action checklist">
        <div className="grid gap-3 md:grid-cols-2">
          {liveResult.filingActions.map((action) => (
            <article key={action.title} className="rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/50 p-3">
              <p className="text-sm font-semibold text-copilot-text-primary">{action.title}</p>
              <p className="text-xs text-copilot-text-secondary">{formatPriority(action.priority)}</p>
              <p className="mt-1 text-sm text-copilot-text-secondary">{action.whyItMatters}</p>
            </article>
          ))}
        </div>
      </ResultSectionCard>

      <ResultSectionCard id="how-tool-works-user" title="How this tool works">
        <p className="text-sm text-copilot-text-secondary">
          Short explanation of what we do — and what we do not compute.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
          {liveResult.reasoning.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="mt-3">
          <Accordion
            tone="copilot"
            density="comfortable"
            items={[
              {
                id: "advanced-logic",
                title: "Advanced logic (deterministic details)",
                content: (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                    {liveResult.advancedReasoning.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <article className="rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/50 p-3">
            <p className="font-semibold text-copilot-text-primary">
              When to escalate (signals)
              <DoubleTaxAwarenessTip
                label="When to escalate"
                text="Escalation means the pattern often needs human judgment on timelines, treaty articles, or payroll coordination — not that you did something wrong."
              />
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
              {liveResult.topRiskReasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-copilot-primary/12 bg-copilot-bg-soft/50 p-3">
            <p className="font-semibold text-copilot-text-primary">Protective signals we detected</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
              {liveResult.topProtectiveFactors.length ? (
                liveResult.topProtectiveFactors.map((reason) => <li key={reason}>{reason}</li>)
              ) : (
                <li>Add stronger records and filing confirmations to reduce uncertainty.</li>
              )}
            </ul>
          </article>
        </div>
      </ResultSectionCard>

      <ResultSectionCard id="professional-review" title={liveResult.professionalReview.title}>
        <p className="text-sm font-medium text-copilot-primary">{professionalReviewBadge(liveResult.professionalReview)}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
          {liveResult.professionalReview.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="text-sm text-copilot-text-secondary">
          Examples that often warrant review: dual homes, multiple payrolls, foreign property with Dutch residency, unclear foreign withholding, treaty residence tension, self-employment, director or equity income.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`${BASE}/services/`}
            className="inline-flex min-h-10 items-center rounded-lg bg-copilot-primary px-4 text-sm font-semibold text-white hover:opacity-95"
          >
            Compare expat support services
          </Link>
          <Link
            href={`${BASE}/taxes/`}
            className="inline-flex min-h-10 items-center rounded-lg border border-copilot-primary/20 px-4 text-sm font-semibold text-copilot-text-primary hover:bg-copilot-bg-soft/60"
          >
            Review Dutch taxes hub
          </Link>
        </div>
      </ResultSectionCard>

      <ResultSectionCard id="when-tool-not-enough" title="When this tool may not be enough">
        <p className="text-sm text-copilot-text-secondary">
          We flag these patterns to reduce false certainty and to show where specialist review is common.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
          {liveResult.whenToolNotEnough.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </ResultSectionCard>

      <ResultSectionCard id="records-to-keep" title="Records to keep">
        <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
          {liveResult.recordKeepingChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ResultSectionCard>

      <ResultSectionCard id="escalation-flags" title="Escalation flags">
        <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
          {liveResult.escalationFlags.length ? (
            liveResult.escalationFlags.map((flag) => <li key={flag}>{flag}</li>)
          ) : (
            <li>No major escalation flags from current inputs. Continue monitoring if facts change.</li>
          )}
        </ul>
      </ResultSectionCard>

      <ResultSectionCard id="scenario-compare" title="What if your situation changes?">
        <p className="text-sm text-copilot-text-secondary">
          Each row re-runs the same deterministic rules with one change, so you can see directionally how signals move — not a full simulation of every fact pattern.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-copilot-primary/10 text-left text-xs uppercase tracking-wide text-copilot-text-secondary">
                <th className="py-2 pr-3">Scenario tweak</th>
                <th className="py-2 pr-3">Residency signal</th>
                <th className="py-2 pr-3">Double-tax risk</th>
                <th className="py-2 pr-3">Filing complexity</th>
                <th className="py-2">Relief direction</th>
              </tr>
            </thead>
            <tbody>
              {scenarioRows.map((row) => (
                <tr key={row.id} className="border-b border-copilot-primary/[0.07]">
                  <td className="py-2 pr-3 font-medium text-copilot-text-primary">{row.label}</td>
                  <td className="py-2 pr-3 text-copilot-text-secondary">{row.residencyHeadline}</td>
                  <td className="py-2 pr-3 capitalize text-copilot-text-primary">{row.doubleTaxRisk}</td>
                  <td className="py-2 pr-3 text-copilot-text-secondary">{row.filingComplexity}</td>
                  <td className="py-2 text-copilot-text-secondary">{row.reliefHint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ResultSectionCard>

      <section id="recommended-services" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
        <h3 className="text-lg font-semibold text-copilot-text-primary">Recommended services</h3>
        <DoubleTaxAwarenessRecommendedServices input={scenarioInput} result={liveResult} />
      </section>

      <ResultSectionCard id="download-summary" title="Download / export">
        <p className="text-sm text-copilot-text-secondary">
          Export includes scenario summary, residency signal, filing-country hints, income map, relief direction, checklist, records, escalation flags, and disclaimer — useful to share with an accountant or payroll team.
        </p>
        <label htmlFor="double-tax-export-notes" className={`${fieldLabelClass} mt-2 block`}>
          Optional notes
        </label>
        <textarea
          id="double-tax-export-notes"
          rows={3}
          value={exportNotes}
          onChange={(event) => setExportNotes(event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-sm text-copilot-text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-copilot-primary/25"
          placeholder="Example: confirm tie-breaker with advisor before filing."
        />
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/20 sm:w-auto" onClick={downloadHtml}>
            Download HTML
          </Button>
          <Button type="button" className="min-h-11 w-full sm:w-auto" onClick={printSummary}>
            Print / Save PDF
          </Button>
          <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/20 sm:w-auto" onClick={copyShareLink}>
            Copy share link
          </Button>
          <Button type="button" variant="secondary" className="min-h-11 w-full border-copilot-primary/20 sm:w-auto" onClick={resetDefaults}>
            Reset defaults
          </Button>
        </div>
        <p className="mt-3 text-xs text-copilot-text-secondary">
          Share links use encoded state so the same planning scenario can be reopened and reviewed.
        </p>
      </ResultSectionCard>
    </div>
  );
}
