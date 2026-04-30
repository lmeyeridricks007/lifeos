"use client";

import { Building2, Layers3, Smartphone, type LucideIcon } from "lucide-react";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { ContentTableCell, ContentTableRow } from "@/components/ui/content-table";
import type { TraditionalDigitalComparisonRow } from "@/src/data/banking/traditionalDigitalComparison";

export type BankFeePatternComparisonRow = TraditionalDigitalComparisonRow;

const TABLE_WRAP = cn(
  "max-w-full overflow-hidden rounded-card border border-border bg-surface-raised shadow-card ring-1 ring-border/10"
);

const TH =
  "min-w-0 whitespace-normal px-2 py-2 text-left text-[10px] font-semibold uppercase leading-tight tracking-wider text-foreground-muted sm:px-3 sm:py-2.5 sm:text-[11px] md:px-4 md:py-3 md:text-xs";

const TD =
  "min-w-0 w-[25%] break-words px-2 py-2 align-top text-[12px] leading-snug sm:px-3 sm:py-2.5 sm:text-[13px] md:px-4 md:py-3";

const COLUMN_VISUALS: {
  key: "traditional" | "digital" | "hybrid";
  label: string;
  hint: string;
  Icon: LucideIcon;
  shell: string;
  iconWrap: string;
}[] = [
  {
    key: "traditional",
    label: "Traditional",
    hint: "One full-service Dutch bank",
    Icon: Building2,
    shell: "border-emerald-200/75 bg-emerald-50/45 ring-emerald-100/50",
    iconWrap: "bg-emerald-500/12 text-emerald-900 ring-emerald-400/35",
  },
  {
    key: "digital",
    label: "Digital",
    hint: "App-first account or paid tier",
    Icon: Smartphone,
    shell: "border-sky-200/75 bg-sky-50/45 ring-sky-100/50",
    iconWrap: "bg-sky-500/12 text-sky-900 ring-sky-400/35",
  },
  {
    key: "hybrid",
    label: "Hybrid",
    hint: "Dutch account plus specialist app",
    Icon: Layers3,
    shell: "border-violet-200/75 bg-violet-50/45 ring-violet-100/50",
    iconWrap: "bg-violet-500/12 text-violet-900 ring-violet-400/35",
  },
];

export type BankFeePatternComparisonProps = {
  rows: readonly BankFeePatternComparisonRow[];
  className?: string;
  /** Screen-reader label for the comparison table (desktop). */
  tableCaption?: string;
};

/**
 * Traditional vs digital vs hybrid **fee patterns** — wide screens use a table;
 * smaller viewports stack one card per topic for readability.
 */
export function BankFeePatternComparison({
  rows,
  className,
  tableCaption = "Fee patterns compared across traditional banks, digital banks, and hybrid setups",
}: BankFeePatternComparisonProps) {
  return (
    <div className={cn("min-w-0 max-w-full space-y-4", className)}>
      <div className="grid gap-3 md:grid-cols-3" aria-label="Banking setup fee pattern summary">
        {COLUMN_VISUALS.map(({ key, label, hint, Icon, shell, iconWrap }) => (
          <article key={key} className={cn("rounded-2xl border p-4 shadow-sm ring-1", shell)}>
            <div className="flex items-start gap-3">
              <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 [&>svg]:h-5 [&>svg]:w-5", iconWrap)} aria-hidden>
                <Icon />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold tracking-tight text-foreground">{label}</h3>
                <p className="mt-1 text-xs leading-snug text-foreground-muted">{hint}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5" aria-hidden>
              {rows.slice(0, 4).map((row) => (
                <span key={`${key}-${row.id}`} className="rounded-full border border-white/70 bg-white/70 px-2 py-1 text-[10px] font-semibold leading-none text-foreground-muted shadow-sm">
                  {row.label}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="hidden min-w-0 max-w-full overflow-x-auto lg:block">
        <div className={TABLE_WRAP}>
          <table className="w-full min-w-0 table-fixed border-collapse">
            <caption className="sr-only">{tableCaption}</caption>
            <thead>
              <tr className="border-b border-border bg-surface-muted/80">
                <th scope="col" className={TH}>
                  Topic
                </th>
                <th scope="col" className={TH}>
                  Traditional
                </th>
                <th scope="col" className={TH}>
                  Digital
                </th>
                <th scope="col" className={TH}>
                  Hybrid
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <ContentTableRow key={row.id}>
                  <ContentTableCell emphasis className={cn(TD, "font-medium text-foreground")}>
                    <div>{row.label}</div>
                    {row.explanation ? (
                      <BoldParagraph
                        text={row.explanation}
                        className="mt-1.5 text-[10px] font-normal leading-snug text-foreground-faint sm:text-[11px] [&_strong]:font-semibold [&_strong]:text-foreground-muted"
                      />
                    ) : null}
                  </ContentTableCell>
                  <ContentTableCell className={cn(TD, "text-foreground-muted")}>
                    <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/35 px-3 py-2 ring-1 ring-emerald-100/30">
                      <BoldInline text={row.traditional} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                    </div>
                  </ContentTableCell>
                  <ContentTableCell className={cn(TD, "text-foreground-muted")}>
                    <div className="rounded-xl border border-sky-200/70 bg-sky-50/35 px-3 py-2 ring-1 ring-sky-100/30">
                      <BoldInline text={row.digital} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                    </div>
                  </ContentTableCell>
                  <ContentTableCell className={cn(TD, "text-foreground-muted")}>
                    <div className="rounded-xl border border-violet-200/70 bg-violet-50/35 px-3 py-2 ring-1 ring-violet-100/30">
                      <BoldInline text={row.hybrid} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                    </div>
                  </ContentTableCell>
                </ContentTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3 lg:hidden" role="list" aria-label="Traditional, digital, and hybrid fee patterns">
        {rows.map((row) => (
          <article
            key={row.id}
            role="listitem"
            className="rounded-2xl border border-border/70 bg-surface-raised p-4 shadow-sm ring-1 ring-border/15 sm:p-5"
          >
            <h3 className="text-sm font-bold text-foreground">{row.label}</h3>
            {row.explanation ? (
              <BoldParagraph
                text={row.explanation}
                className="mt-2 text-xs leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            ) : null}
            <dl className="mt-3 grid gap-3 text-sm">
              <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/40 p-3">
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-900/80">Traditional</dt>
                <dd className="mt-0.5 leading-snug text-foreground-muted">
                  <BoldInline text={row.traditional} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                </dd>
              </div>
              <div className="rounded-xl border border-sky-200/70 bg-sky-50/40 p-3">
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-sky-900/80">Digital</dt>
                <dd className="mt-0.5 leading-snug text-foreground-muted">
                  <BoldInline text={row.digital} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                </dd>
              </div>
              <div className="rounded-xl border border-violet-200/70 bg-violet-50/40 p-3">
                <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-violet-900/80">Hybrid</dt>
                <dd className="mt-0.5 leading-snug text-foreground-muted">
                  <BoldInline text={row.hybrid} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
