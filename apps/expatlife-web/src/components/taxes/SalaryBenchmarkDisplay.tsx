import Link from "next/link";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { CITIES_FUNNEL_SOFT_COPILOT_SURFACE } from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  AVERAGE_SALARY_BENCHMARKS_DISCLAIMER,
  type SalaryBenchmarkRow,
  type SalaryBenchmarkSection,
} from "./averageSalaryNetherlandsBenchmarks";

function formatEur(n: number, compact = false): string {
  if (compact && n >= 1000) {
    const k = n / 1000;
    return k % 1 === 0 ? `€${k}k` : `€${k.toFixed(1)}k`;
  }
  return new Intl.NumberFormat("en-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatRange(min: number, max: number, compact = false): string {
  if (min === max) return formatEur(min, compact);
  return `${formatEur(min, compact)}–${formatEur(max, compact)}`;
}

function monthlyFromAnnual(min: number, max: number): string {
  const mMin = Math.round(min / 12);
  const mMax = Math.round(max / 12);
  return formatRange(mMin, mMax);
}

type SalaryBenchmarkTableProps = {
  section: SalaryBenchmarkSection;
  className?: string;
  showNet?: boolean;
  showMonthly?: boolean;
  compact?: boolean;
};

export function SalaryBenchmarkTable({
  section,
  className,
  showNet = true,
  showMonthly = true,
  compact = false,
}: SalaryBenchmarkTableProps) {
  return (
    <div className={cn("mt-6 w-full max-w-none", className)}>
      {section.subtitle ? (
        <p className="w-full max-w-none text-sm leading-relaxed text-foreground-muted">{section.subtitle}</p>
      ) : null}
      <div className="mt-4 w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]">
        <table className="w-full min-w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/90 bg-slate-50/90">
              <th className="px-4 py-3 font-bold text-foreground">Category</th>
              <th className="px-4 py-3 font-bold text-foreground">Gross annual</th>
              {showMonthly ? <th className="px-4 py-3 font-bold text-foreground">Gross monthly*</th> : null}
              {showNet ? <th className="px-4 py-3 font-bold text-foreground">Indicative net annual**</th> : null}
              <th className="px-4 py-3 font-bold text-foreground">Notes</th>
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, index) => (
              <SalaryBenchmarkTableRow
                key={row.id}
                row={row}
                index={index}
                showNet={showNet}
                showMonthly={showMonthly}
                compact={compact}
              />
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
        * Monthly figures divide annual gross by 12 and exclude holiday allowance unless your contract states otherwise.
        {showNet ? " ** Indicative net is a simplified planning band — use the salary net calculator for your offer." : null}
      </p>
    </div>
  );
}

function SalaryBenchmarkTableRow({
  row,
  index,
  showNet,
  showMonthly,
  compact,
}: {
  row: SalaryBenchmarkRow;
  index: number;
  showNet: boolean;
  showMonthly: boolean;
  compact: boolean;
}) {
  const hasAnnual = row.grossAnnualMin > 0 || row.grossAnnualMax > 0;
  const annual =
    row.grossAnnualMin === 0 && row.grossAnnualMax === 0
      ? "—"
      : formatRange(row.grossAnnualMin, row.grossAnnualMax, compact);
  const monthly =
    row.grossMonthlyMin != null && row.grossMonthlyMax != null
      ? formatRange(row.grossMonthlyMin, row.grossMonthlyMax, compact)
      : hasAnnual
        ? monthlyFromAnnual(row.grossAnnualMin, row.grossAnnualMax)
        : "—";
  const net =
    row.indicativeNetAnnualMin != null && row.indicativeNetAnnualMax != null
      ? formatRange(row.indicativeNetAnnualMin, row.indicativeNetAnnualMax, compact)
      : "—";

  return (
    <tr className={cn(index % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
      <td className="px-4 py-3 font-semibold text-foreground">{row.label}</td>
      <td className="px-4 py-3 font-medium text-brand-strong">{annual}</td>
      {showMonthly ? <td className="px-4 py-3 text-foreground-muted">{monthly}</td> : null}
      {showNet ? <td className="px-4 py-3 text-foreground-muted">{net}</td> : null}
      <td className="px-4 py-3 text-foreground-muted">{row.note ?? "—"}</td>
    </tr>
  );
}

export function SalaryBenchmarkDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-foreground-muted", className)}>
      <strong className="font-semibold text-foreground">Planning ranges only.</strong> {AVERAGE_SALARY_BENCHMARKS_DISCLAIMER}
    </p>
  );
}

export function SalaryBenchmarkHighlightCards({
  rows,
  className,
}: {
  rows: SalaryBenchmarkRow[];
  className?: string;
}) {
  return (
    <div className={cn("mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {rows.map((row) => (
        <article
          key={row.id}
          className={cn("relative overflow-hidden", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-4", movingNlCardMicroLiftClass)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{row.label}</p>
          <p className="mt-2 text-xl font-bold tracking-tight text-foreground">
            {row.grossAnnualMin === row.grossAnnualMax
              ? formatEur(row.grossAnnualMin)
              : formatRange(row.grossAnnualMin, row.grossAnnualMax)}
          </p>
          {row.indicativeNetAnnualMin != null && row.indicativeNetAnnualMax != null ? (
            <p className="mt-1 text-sm text-foreground-muted">
              Indicative net {formatRange(row.indicativeNetAnnualMin, row.indicativeNetAnnualMax, true)}
            </p>
          ) : null}
          {row.note ? <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{row.note}</p> : null}
        </article>
      ))}
    </div>
  );
}

export function SalaryBenchmarkInline({ row }: { row?: SalaryBenchmarkRow | null }) {
  if (!row || (row.grossAnnualMin === 0 && row.grossAnnualMax === 0)) return null;
  return (
    <p className="mt-2 text-sm leading-relaxed">
      <span className="font-semibold text-brand-strong">{formatRange(row.grossAnnualMin, row.grossAnnualMax)}</span>
      <span className="text-foreground-muted"> gross/year</span>
      {row.indicativeNetAnnualMin != null && row.indicativeNetAnnualMax != null ? (
        <span className="mt-1 block text-xs text-foreground-muted">
          Indicative net {formatRange(row.indicativeNetAnnualMin, row.indicativeNetAnnualMax, true)}
        </span>
      ) : null}
    </p>
  );
}

export function SalaryRangeInlineCard({
  label,
  grossAnnualMin,
  grossAnnualMax,
  note,
}: {
  label: string;
  grossAnnualMin: number;
  grossAnnualMax: number;
  note?: string;
}) {
  return (
    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
      <span className="font-semibold text-foreground">{label}: </span>
      <span className="font-semibold text-brand-strong">{formatRange(grossAnnualMin, grossAnnualMax)}</span>
      <span className="text-foreground-muted"> gross/year</span>
      {note ? <span className="block mt-1 text-xs">{note}</span> : null}
    </p>
  );
}

export function SalaryBenchmarkCtaStrip({
  calculatorHref,
  className,
}: {
  calculatorHref: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-4 rounded-2xl border border-copilot-primary/15 bg-copilot-bg-soft/60 px-4 py-3 text-sm leading-relaxed text-foreground-muted",
        className
      )}
    >
      Model your own offer with the{" "}
      <Link href={calculatorHref} className="font-semibold text-link hover:text-link-hover">
        Dutch salary net calculator
      </Link>
      . Compare gross bands above against indicative take-home pay for your situation.
    </div>
  );
}
