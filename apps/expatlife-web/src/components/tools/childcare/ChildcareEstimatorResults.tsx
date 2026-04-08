"use client";

import { InfoBox } from "@/components/ui/info-box";
import { formatChildcareEur } from "@/src/lib/tools/childcare/childcareFormatters";
import { cn } from "@/lib/cn";
import type {
  ChildcareEstimateInsightFlags,
  ChildcareEstimateResult,
  ChildcareFirstMonthLineKind,
} from "@/src/types/tools/childcare";
import { ChildcarePerChildTable } from "@/src/components/tools/childcare/ChildcarePerChildTable";

type Props = {
  result: ChildcareEstimateResult;
  taxYear: number;
};

function TierSummaryCard({
  title,
  value,
  sub,
  variant,
}: {
  title: string;
  value: string;
  sub?: string;
  variant: "gross" | "benefit" | "net";
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4 shadow-expatos-sm md:p-5",
        variant === "gross" && "border-slate-200/90 bg-slate-50/80",
        variant === "benefit" && "border-emerald-200/90 bg-emerald-50/50",
        variant === "net" && "border-copilot-primary/25 bg-copilot-surface ring-1 ring-copilot-primary/10"
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{title}</p>
      <p
        className={cn(
          "mt-2 text-2xl font-bold tabular-nums tracking-tight",
          variant === "net" ? "text-copilot-primary" : "text-copilot-text-primary"
        )}
      >
        {value}
      </p>
      {sub ? <p className="mt-1 text-xs leading-snug text-copilot-text-secondary">{sub}</p> : null}
    </div>
  );
}

function SecondarySummaryCard({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/30 p-4 shadow-expatos-sm md:p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{title}</p>
      <p className="mt-2 text-xl font-bold tabular-nums text-copilot-text-primary">{value}</p>
      {sub ? <p className="mt-1 text-xs text-copilot-text-secondary">{sub}</p> : null}
    </div>
  );
}

const FLAG_LABELS: Array<{ key: keyof ChildcareEstimateInsightFlags; label: string }> = [
  { key: "hasOverCapRate", label: "Provider rate above statutory cap (hourly)" },
  { key: "hasMultipleChildren", label: "Multiple children in model" },
  { key: "highMonthlyChildcareBurden", label: "High monthly childcare vs typical budget heuristics" },
  { key: "highFirstMonthCash", label: "Elevated first-month cash vs recurring net" },
  { key: "uncertainIncomeInput", label: "Income missing — conservative default used" },
  { key: "schoolAgeMix", label: "Mixed school-age flags across children" },
  { key: "likelyWorkDecisionSensitive", label: "Work / second-income decision may matter" },
];

const FIRST_MONTH_KIND_LABEL: Record<ChildcareFirstMonthLineKind, string> = {
  recurring_net: "Recurring",
  one_off: "One-off",
  timing_buffer: "Timing",
  global_reserve: "Reserve",
};

export function ChildcareEstimatorResults({ result, taxYear }: Props) {
  const activeFlags = FLAG_LABELS.filter((f) => result.insightFlags[f.key]);
  const { firstMonthBreakdown } = result;

  const whatThisMeans = (() => {
    const g = formatChildcareEur(result.grossMonthlyProviderCostEur);
    const b = formatChildcareEur(result.estimatedMonthlyBenefitEur);
    const n = formatChildcareEur(result.estimatedMonthlyNetChildcareCostEur);
    if (result.insightFlags.hasOverCapRate) {
      return `Your model assumes about ${g} in monthly provider charges. Because at least one hourly rate is above the official reimbursable cap, part of that bill is unlikely to be covered by subsidy in this planning logic — estimated benefit is about ${b}, leaving roughly ${n} out of pocket before one-off setup costs.`;
    }
    return `In this run, monthly provider charges are about ${g}. The planning childcare benefit estimate is about ${b}, so typical monthly cash out-of-pocket is around ${n} — before registration, deposits, or odd first invoices if you enable those below.`;
  })();

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-copilot-text-primary">Results</h2>

      <p className="text-sm text-copilot-text-secondary">
        These figures are from your last calculation. Click <strong>Recalculate</strong> after you change inputs. All benefit
        figures are <strong>directional</strong> — confirm with Belastingdienst and your contract.
      </p>

      {result.engineWarnings.length > 0 ? (
        <InfoBox title="Heads-up from the planner" variant="warn" className="shadow-expatos-sm">
          <ul className="list-inside list-disc space-y-1 text-sm text-copilot-text-secondary">
            {result.engineWarnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </InfoBox>
      ) : null}

      {result.insightFlags.hasOverCapRate ? (
        <InfoBox title="Provider rate above official reimbursable cap" variant="warn" className="shadow-expatos-sm">
          <p className="text-sm text-copilot-text-secondary">
            At least one child has an hourly rate above the {taxYear} statutory maximum for that care type. The subsidy
            calculation normally only reimburses up to that cap — the extra hourly cost stays out of pocket in this model. Check
            the per-child table for details.
          </p>
        </InfoBox>
      ) : null}

      {activeFlags.length > 0 ? (
        <div className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/40 px-4 py-3 text-sm text-copilot-text-secondary">
          <p className="font-semibold text-copilot-text-primary">Scenario flags (planning heuristics)</p>
          <ul className="mt-2 list-inside list-disc space-y-0.5">
            {activeFlags.map((f) => (
              <li key={f.key}>{f.label}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div id="monthly-childcare-cost" className="scroll-mt-28 md:scroll-mt-32">
        <h3 className="mb-3 text-base font-semibold text-copilot-text-primary">Monthly childcare cost</h3>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <TierSummaryCard
            variant="gross"
            title="Gross provider bill (est.)"
            value={formatChildcareEur(result.grossMonthlyProviderCostEur)}
            sub="Care hours × rate plus monthly extras you entered."
          />
          <TierSummaryCard
            variant="benefit"
            title="Estimated childcare benefit"
            value={formatChildcareEur(result.estimatedMonthlyBenefitEur)}
            sub="From income bands — not Belastingdienst output."
          />
          <TierSummaryCard
            variant="net"
            title="Net out-of-pocket / month"
            value={formatChildcareEur(result.estimatedMonthlyNetChildcareCostEur)}
            sub="Provider bill minus estimated benefit."
          />
        </div>

        <div className="mt-4 rounded-xl border border-copilot-primary/12 bg-white/80 px-4 py-3 shadow-expatos-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">What this means</p>
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{whatThisMeans}</p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <SecondarySummaryCard
            title="Estimated annual out-of-pocket"
            value={formatChildcareEur(result.annualNetChildcareCostEur)}
            sub="12 × monthly net (excludes one-off timing)."
          />
          <SecondarySummaryCard
            title="First-month childcare cash (with toggles)"
            value={formatChildcareEur(result.firstMonthChildcareCashEur)}
            sub="See breakdown below — includes recurring net when applicable plus enabled setup lines."
          />
          {result.additionalNetForComfortEur != null && result.additionalNetForComfortEur > 0 ? (
            <SecondarySummaryCard
              title="Rough extra net (comfort target)"
              value={formatChildcareEur(result.additionalNetForComfortEur)}
              sub="Illustrative headroom vs entered household net."
            />
          ) : null}
        </div>
      </div>

      <div id="benefit-estimate" className="scroll-mt-28 md:scroll-mt-32">
        <InfoBox title="How to read the estimated benefit" variant="info" className="shadow-expatos-sm">
          <ul className="list-inside list-disc space-y-1.5 text-sm text-copilot-text-secondary">
            <li>
              The {taxYear} model caps reimbursable hours at <strong>230 per child per month</strong> and uses official{" "}
              <strong>maximum hourly rates</strong> per care type for the reimbursable slice.
            </li>
            <li>
              Your provider can charge above the cap — the extra portion is typically{" "}
              <strong>not</strong> reimbursed in this planning logic, which increases out-of-pocket.
            </li>
            <li>
              The first-child planning percentage (~{Math.round(result.reimbursementPercentApplied * 100)}% before eligibility
              weighting) comes from configurable <strong>income bands</strong>, not the live toeslag formula. Second and further
              children use a slightly lower banded rate in this model.
            </li>
            <li>
              Income used for bands in this run: <strong>€{result.annualHouseholdIncomeUsedEur.toLocaleString("en-NL")}/yr</strong>
              {result.insightFlags.uncertainIncomeInput ? " (includes conservative default — see warning above)." : "."}
            </li>
            <li>
              Eligibility weight ×{result.benefitEligibilityMultiplier} reflects working-parent assumptions — adjust if both
              parents work or study enough per current rules.
            </li>
          </ul>
        </InfoBox>
      </div>

      <ChildcarePerChildTable rows={result.perChild} />

      <div id="insights" className="scroll-mt-28 space-y-2 md:scroll-mt-32">
        <h3 className="text-lg font-semibold text-copilot-text-primary">What often surprises families</h3>
        <ul className="space-y-2 text-sm text-copilot-text-secondary">
          {result.insights.map((t) => (
            <li key={t} className="rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/50 px-3 py-2">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div id="first-month-cash" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
        <h3 className="text-lg font-semibold text-copilot-text-primary">First-month cash</h3>
        <p className="text-sm text-copilot-text-secondary">
          Providers often bill a partial first month while registration and deposits hit your account; childcare benefit may also
          lag. The lines below mirror your setup toggles — adjust toggles in the form to match your contract.
        </p>
        <div className="overflow-hidden rounded-xl border border-copilot-primary/12 bg-copilot-surface shadow-expatos-sm">
          <table className="w-full text-sm">
            <thead className="bg-copilot-bg-soft/80 text-left text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">
              <tr>
                <th className="px-3 py-2.5">Line</th>
                <th className="hidden px-3 py-2.5 sm:table-cell">Type</th>
                <th className="px-3 py-2.5 text-right">€</th>
              </tr>
            </thead>
            <tbody>
              {firstMonthBreakdown.lines.map((line) => (
                <tr key={line.id} className="border-t border-copilot-primary/[0.08]">
                  <td className="px-3 py-2.5">
                    <span className="font-medium text-copilot-text-primary">{line.label}</span>
                    {line.detail ? <span className="mt-0.5 block text-xs text-copilot-text-secondary">{line.detail}</span> : null}
                    <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-wide text-copilot-text-secondary sm:hidden">
                      {FIRST_MONTH_KIND_LABEL[line.kind]}
                    </span>
                  </td>
                  <td className="hidden px-3 py-2.5 text-copilot-text-secondary sm:table-cell">
                    {FIRST_MONTH_KIND_LABEL[line.kind]}
                  </td>
                  <td className="px-3 py-2.5 text-right tabular-nums text-copilot-text-primary">
                    {formatChildcareEur(line.amountEur)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-copilot-primary/15 bg-copilot-bg-soft/50">
                <td colSpan={2} className="px-3 py-3 font-semibold text-copilot-text-primary">
                  Total first-month cash (model)
                </td>
                <td className="px-3 py-3 text-right text-lg font-bold tabular-nums text-copilot-primary">
                  {formatChildcareEur(firstMonthBreakdown.totalEur)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="text-xs text-copilot-text-secondary">
          Pure one-off setup (registration + deposit toggles only, excluding recurring net and buffers): about{" "}
          {formatChildcareEur(result.totalSetupCashEur)}.
        </p>
        {firstMonthBreakdown.suggestedExtraReserveEur != null ? (
          <InfoBox title="Optional liquidity cushion" variant="info" className="shadow-expatos-sm">
            <p className="text-sm text-copilot-text-secondary">
              When one-offs or timing buffers apply, many families keep roughly{" "}
              <strong>{formatChildcareEur(firstMonthBreakdown.suggestedExtraReserveEur)}</strong> extra accessible for overlapping
              invoices or admin surprises — illustrative, not advice.
            </p>
          </InfoBox>
        ) : null}
      </div>

      <div id="work-decision-impact" className="scroll-mt-28 space-y-6 md:scroll-mt-32">
        <h3 className="text-lg font-semibold text-copilot-text-primary">Work decisions & household budget</h3>

        {result.budgetImpactLabel && result.childcareShareOfNetPercent != null ? (
          <div className="rounded-xl border border-copilot-primary/12 bg-copilot-surface p-4 text-sm text-copilot-text-secondary shadow-expatos-sm">
            <p>
              Childcare is roughly <strong>{result.childcareShareOfNetPercent.toFixed(0)}%</strong> of your entered household net
              — we label that as a <strong>{result.budgetImpactLabel}</strong> budget line for planning.
            </p>
            {result.salaryTargetNarrative ? <p className="mt-2">{result.salaryTargetNarrative}</p> : null}
          </div>
        ) : (
          <p className="text-sm text-copilot-text-secondary">
            Add optional household net income under family budget to see share-of-net and comfort headroom hints.
          </p>
        )}

        <div className="space-y-3 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/35 p-4 text-sm text-copilot-text-secondary">
          <h4 className="font-semibold text-copilot-text-primary">Does childcare still fit your family budget?</h4>
          <p>
            If net out-of-pocket stays within the share-of-net band you are willing to allocate, childcare can still be workable
            even when the gross invoice looks large — the benefit is doing part of the job. Pair this tool with your real payslips
            and rent line.
          </p>
        </div>

        <div className="space-y-3 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/35 p-4 text-sm text-copilot-text-secondary">
          <h4 className="font-semibold text-copilot-text-primary">When childcare often still makes sense</h4>
          <ul className="list-inside list-disc space-y-1.5">
            <li>Both careers need continuity and the benefit materially offsets the gross bill.</li>
            <li>Waiting lists or location lock you into a provider — knowing net cash helps you plan around it.</li>
            <li>Return-to-work timing is easier to judge when first-month cash is explicit.</li>
          </ul>
        </div>

        <div className="space-y-3 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/35 p-4 text-sm text-copilot-text-secondary">
          <h4 className="font-semibold text-copilot-text-primary">When to stress-test the numbers further</h4>
          <ul className="list-inside list-disc space-y-1.5">
            <li>Income is missing or unstable — benefit bands swing quickly.</li>
            <li>Hourly rate is above the official cap or hours sit near the 230 h/mo ceiling.</li>
            <li>You rely on BSO plus heavy holiday weeks — add separate holiday lines outside this model.</li>
            <li>Working-parent eligibility is borderline — confirm hours rules with Belastingdienst.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
