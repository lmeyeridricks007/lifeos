import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { CITIES_FUNNEL_SOFT_COPILOT_SURFACE } from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  CHILDCARE_ALLOWANCE_REFERENCE_DISCLAIMER,
  childcareAllowanceReference2026,
  type ChildcareAllowanceIncomeBandRow,
  type ChildcareAllowanceReferenceHighlight,
  type ChildcareAllowanceReferenceRow,
  type ChildcareAllowanceWorkedExample,
} from "./childcareAllowanceReference2026";

export function ChildcareAllowanceReferenceDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-foreground-muted", className)}>
      <strong className="font-semibold text-foreground">Planning figures only.</strong> {CHILDCARE_ALLOWANCE_REFERENCE_DISCLAIMER}
    </p>
  );
}

export function ChildcareAllowanceReferenceHighlightCards({
  highlights = childcareAllowanceReference2026.highlights,
  className,
}: {
  highlights?: readonly ChildcareAllowanceReferenceHighlight[];
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

export function ChildcareAllowanceReferenceTable({
  rows = childcareAllowanceReference2026.thresholds,
  className,
  subtitle,
}: {
  rows?: readonly ChildcareAllowanceReferenceRow[];
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
        Source note: {childcareAllowanceReference2026.sourceNote}
      </p>
    </div>
  );
}

export function ChildcareAllowanceIncomeBandTable({
  rows = childcareAllowanceReference2026.incomeBands,
  className,
  subtitle,
}: {
  rows?: readonly ChildcareAllowanceIncomeBandRow[];
  className?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn("w-full max-w-none", className)}>
      {subtitle ? (
        <p className="w-full max-w-none text-sm leading-relaxed text-foreground-muted">{subtitle}</p>
      ) : null}
      <div className="mt-4 w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/90 bg-slate-50/90">
              <th className="px-4 py-3 font-bold text-foreground">Toetsingsinkomen from</th>
              <th className="px-4 py-3 font-bold text-foreground">To</th>
              <th className="px-4 py-3 font-bold text-brand-strong">1st child</th>
              <th className="px-4 py-3 font-bold text-brand-strong">Next child</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id} className={cn(index % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.incomeFrom}</td>
                <td className="px-4 py-3 text-foreground-muted">{row.incomeTo}</td>
                <td className="px-4 py-3 font-medium text-brand-strong">{row.firstChild}</td>
                <td className="px-4 py-3 font-medium text-brand-strong">{row.nextChild}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
        Abbreviated from the official 2026 kinderopvangtoeslag table — see Rijksoverheid for every income band. Percentages apply to the reimbursable hourly base, not your full gross invoice when rates exceed caps.
      </p>
    </div>
  );
}

export function ChildcareAllowanceWorkedExampleCards({
  examples = childcareAllowanceReference2026.workedExamples,
  className,
}: {
  examples?: readonly ChildcareAllowanceWorkedExample[];
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
          {example.indicativeGross ? (
            <p className="mt-3 text-sm font-semibold text-foreground-muted">{example.indicativeGross}</p>
          ) : null}
          <p className="mt-3 text-2xl font-black tracking-tight text-brand-strong">{example.indicativeMonthly}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground-muted">Indicative allowance / month</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{example.body}</p>
        </article>
      ))}
    </div>
  );
}
