import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { CITIES_FUNNEL_SOFT_COPILOT_SURFACE } from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  RENT_ALLOWANCE_REFERENCE_DISCLAIMER,
  rentAllowanceReference2026,
  type RentAllowanceReferenceHighlight,
  type RentAllowanceReferenceRow,
  type RentAllowanceWorkedExample,
} from "./rentAllowanceReference2026";

export function RentAllowanceReferenceDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-foreground-muted", className)}>
      <strong className="font-semibold text-foreground">Planning figures only.</strong> {RENT_ALLOWANCE_REFERENCE_DISCLAIMER}
    </p>
  );
}

export function RentAllowanceReferenceHighlightCards({
  highlights = rentAllowanceReference2026.highlights,
  className,
}: {
  highlights?: readonly RentAllowanceReferenceHighlight[];
  className?: string;
}) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {highlights.map((item) => (
        <article
          key={item.id}
          className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-4", movingNlCardMicroLiftClass)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.label}</p>
          <p className="mt-2 text-xl font-bold tracking-tight text-foreground">{item.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{item.note}</p>
        </article>
      ))}
    </div>
  );
}

export function RentAllowanceReferenceTable({
  rows = rentAllowanceReference2026.thresholds,
  className,
  subtitle,
}: {
  rows?: readonly RentAllowanceReferenceRow[];
  className?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn("w-full max-w-none", className)}>
      {subtitle ? (
        <p className="w-full max-w-none text-sm leading-relaxed text-foreground-muted">{subtitle}</p>
      ) : null}
      <div className="mt-4 w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/90 bg-slate-50/90">
              <th className="px-4 py-3 font-bold text-foreground">Parameter</th>
              <th className="px-4 py-3 font-bold text-brand-strong">2026 reference</th>
              <th className="px-4 py-3 font-bold text-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id} className={cn(index % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.parameter}</td>
                <td className="px-4 py-3 font-medium text-brand-strong">{row.value2026}</td>
                <td className="px-4 py-3 leading-relaxed text-foreground-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
        Source note: {rentAllowanceReference2026.sourceNote}
      </p>
    </div>
  );
}

export function RentAllowanceWorkedExampleCards({
  examples = rentAllowanceReference2026.workedExamples,
  className,
}: {
  examples?: readonly RentAllowanceWorkedExample[];
  className?: string;
}) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {examples.map((example) => (
        <article
          key={example.id}
          className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{example.tag}</p>
          <h3 className="mt-2 text-base font-bold text-foreground">{example.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{example.inputs}</p>
          <p className="mt-4 text-2xl font-black tracking-tight text-brand-strong">{example.indicativeMonthly}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground-muted">Indicative / month</p>
          {example.indicativeAnnual ? (
            <p className="mt-1 text-sm text-foreground-muted">{example.indicativeAnnual} / year (illustrative)</p>
          ) : null}
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{example.body}</p>
        </article>
      ))}
    </div>
  );
}
