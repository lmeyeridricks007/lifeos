"use client";

import { InfoBox } from "@/components/ui/info-box";
import type { EligibilityChecklistRow, ThirtyPercentCalculatorResult } from "@/src/lib/tools/thirty-percent-ruling/types";
import { NetComparisonPanel } from "./panels/NetComparisonPanel";
import { DownloadSummaryPanel } from "./panels/DownloadSummaryPanel";
import type { DownloadSummaryPayload } from "@/src/lib/tools/thirty-percent-ruling/types";
import { ResultCard, SubduedResultCard, toneForEligibilityStatus, YearBreakdown } from "./copilotUi";
import { cn } from "@/lib/cn";

function stateDot(state: EligibilityChecklistRow["state"]): string {
  switch (state) {
    case "pass":
      return "bg-emerald-500";
    case "fail":
      return "bg-red-500";
    case "uncertain":
      return "bg-amber-500";
    case "info":
      return "bg-sky-500";
    default:
      return "bg-slate-300";
  }
}

function ChecklistBlock({ rows }: { rows: EligibilityChecklistRow[] }) {
  return (
    <ul className="space-y-3">
      {rows.map((row) => (
        <li key={row.id} className="flex gap-3 rounded-xl border border-slate-100 bg-white/80 p-3">
          <span className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", stateDot(row.state))} aria-hidden />
          <div className="min-w-0">
            <p className="font-medium text-slate-900">{row.label}</p>
            <p className="mt-1 text-sm text-slate-600">{row.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function MonetizationHintByStatus({ status }: { status: ThirtyPercentCalculatorResult["primaryEligibility"]["status"] }) {
  const copy =
    status === "likely_eligible"
      ? "If you want the employer application or payroll double-checked before you sign, a Dutch expat tax advisor can sanity-check your package and documents."
      : status === "possibly_eligible" || status === "insufficient_information"
        ? "This outcome usually means paperwork, distance evidence, or timing still need review — a qualified advisor can map your facts to the official rules."
        : "If something in your answers might be wrong, adjust and recalculate — or speak with HR or a tax advisor before relying on the signal.";
  return (
    <InfoBox title="When independent tax advice helps" variant="info" className="border-sky-200/80 bg-sky-50/40">
      <p className="text-sm text-slate-700">{copy}</p>
    </InfoBox>
  );
}

type Props = {
  displayedResult: ThirtyPercentCalculatorResult;
  downloadPayload: DownloadSummaryPayload | null;
  showNetComparison?: boolean;
};

export function ThirtyRulingResultsStack({ displayedResult, downloadPayload, showNetComparison = true }: Props) {
  const pe = displayedResult.primaryEligibility;
  const tone = toneForEligibilityStatus(pe.status);

  return (
    <div id="tool-results" className="scroll-mt-24 space-y-6">
      <ResultCard title={pe.headline} tone={tone} titleAs="h2">
        <p>{pe.explanation}</p>
        <p className="text-xs font-medium text-slate-600">{pe.caveatLine}</p>
      </ResultCard>

      <div>
        <h3 className="text-base font-semibold text-slate-900">Why this result</h3>
        <p className="mt-1 text-sm text-slate-600">Checklist-style view of how your answers map to this planning signal — not a legal finding.</p>
        <div className="mt-4">
          <ChecklistBlock rows={pe.checklist} />
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-slate-900">Estimated ruling value (tax-free allowance)</h3>
        <p className="mt-1 text-sm text-slate-600">
          On your gross package, this is the planning untaxed share and taxable remainder after the facility structure — before real payroll
          deductions.
        </p>
        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          <ResultCard title={`${displayedResult.primary.label}`} tone="neutral">
            <YearBreakdown row={displayedResult.primary} />
          </ResultCard>
          {displayedResult.preview2027 ? (
            <ResultCard title="2027 preview (27%)" tone="neutral">
              <YearBreakdown row={displayedResult.preview2027} />
              <p className="mt-3 text-xs text-slate-600">
                Preview only — final rules and transition mechanics are subject to legislation and guidance.
              </p>
            </ResultCard>
          ) : null}
        </div>
      </div>

      {showNetComparison && displayedResult.netComparison ? (
        <SubduedResultCard title="Indicative take-home comparison">
          <p className="font-medium text-slate-700">Indicative net salary comparison</p>
          <p className="text-sm">
            <strong>Not payroll.</strong> This is a planning estimate only — not tax, legal, or payroll advice. It does not use official
            loonbelasting tables and will not match your payslip. Use it to compare scenarios in conversations with HR or an advisor, not to
            predict take-home.
          </p>
          <div className="mt-4">
            <NetComparisonPanel net={displayedResult.netComparison} />
          </div>
        </SubduedResultCard>
      ) : null}

      <div>
        <h3 className="text-base font-semibold text-slate-900">Next steps</h3>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          {pe.nextStepBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <DownloadSummaryPanel payload={downloadPayload} />

      <MonetizationHintByStatus status={pe.status} />

      <InfoBox title="Planning limits" variant="warn">
        <ul className="list-disc space-y-1 pl-4 text-sm">
          <li>Tax credits, pension, social contributions, and employer-specific payroll are not modeled.</li>
          <li>Net comparison uses simplified brackets — not official wage tax tables.</li>
          <li>Always confirm norms, caps, and approval with the Belastingdienst and your employer.</li>
        </ul>
      </InfoBox>

      {displayedResult.warnings.length > 0 ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
          <p className="text-sm font-semibold text-slate-800">Notes</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-slate-700">
            {displayedResult.warnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
