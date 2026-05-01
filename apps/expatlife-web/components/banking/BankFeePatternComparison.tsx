"use client";

import { Building2, Layers3, Smartphone, type LucideIcon } from "lucide-react";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlFaqCardInnerClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { ContentTableCell, ContentTableRow } from "@/components/ui/content-table";
import { Accordion } from "@/components/ui/accordion";
import type { TraditionalDigitalComparisonRow } from "@/src/data/banking/traditionalDigitalComparison";

export type BankFeePatternComparisonRow = TraditionalDigitalComparisonRow;

const TABLE_WRAP = cn(
  "max-w-full overflow-hidden rounded-2xl bg-copilot-surface shadow-expatos-md ring-1 ring-slate-900/[0.05]"
);

const TH =
  "min-w-0 whitespace-normal px-2 py-2.5 text-left text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-copilot-text-muted sm:px-3 sm:py-3 sm:text-[11px] md:px-4 md:py-3.5";

const TD = "min-w-0 w-[25%] break-words px-2 py-2.5 align-top sm:px-3 sm:py-3 md:px-4 md:py-3.5";

const INLINE_BODY = cn(
  "text-[12px] leading-snug text-copilot-text-secondary sm:text-[13px]",
  "[&_strong]:font-medium [&_strong]:text-copilot-text-primary"
);

const EXPLANATION_TOPIC = cn(
  "mt-1.5 text-[10px] font-normal leading-snug text-copilot-text-secondary sm:text-[11px]",
  "[&_strong]:font-medium [&_strong]:text-copilot-text-primary"
);

type ColumnKey = "traditional" | "digital" | "hybrid";

export type BankFeePatternComparisonColumnLabels = {
  traditional: { label: string; hint: string };
  digital: { label: string; hint: string };
  /** Maps to the `hybrid` field on each row — relabel when that column means “transfer specialists”, etc. */
  third: { label: string; hint: string };
};

const DEFAULT_COLUMN_LABELS: BankFeePatternComparisonColumnLabels = {
  traditional: { label: "Traditional", hint: "One full-service Dutch bank" },
  digital: { label: "Digital", hint: "App-first account or paid tier" },
  third: { label: "Hybrid", hint: "Dutch account plus specialist app" },
};

const COLUMN_ICON_WRAP: Record<ColumnKey, string> = {
  traditional: "bg-copilot-primary/12 text-copilot-primary ring-copilot-primary/20",
  digital: "bg-copilot-accent/15 text-copilot-text-primary ring-copilot-accent/25",
  hybrid: "bg-copilot-bg-soft text-copilot-primary ring-copilot-primary/12",
};

const COLUMN_ICONS: Record<ColumnKey, LucideIcon> = {
  traditional: Building2,
  digital: Smartphone,
  hybrid: Layers3,
};

function mergeColumnLabels(
  partial?: Partial<{
    traditional: Partial<BankFeePatternComparisonColumnLabels["traditional"]>;
    digital: Partial<BankFeePatternComparisonColumnLabels["digital"]>;
    third: Partial<BankFeePatternComparisonColumnLabels["third"]>;
  }>
): BankFeePatternComparisonColumnLabels {
  return {
    traditional: { ...DEFAULT_COLUMN_LABELS.traditional, ...partial?.traditional },
    digital: { ...DEFAULT_COLUMN_LABELS.digital, ...partial?.digital },
    third: { ...DEFAULT_COLUMN_LABELS.third, ...partial?.third },
  };
}

function buildColumnVisuals(labels: BankFeePatternComparisonColumnLabels) {
  const triplet: { key: ColumnKey; label: string; hint: string; Icon: LucideIcon; iconWrap: string }[] = [
    { key: "traditional", label: labels.traditional.label, hint: labels.traditional.hint, Icon: COLUMN_ICONS.traditional, iconWrap: COLUMN_ICON_WRAP.traditional },
    { key: "digital", label: labels.digital.label, hint: labels.digital.hint, Icon: COLUMN_ICONS.digital, iconWrap: COLUMN_ICON_WRAP.digital },
    { key: "hybrid", label: labels.third.label, hint: labels.third.hint, Icon: COLUMN_ICONS.hybrid, iconWrap: COLUMN_ICON_WRAP.hybrid },
  ];
  return triplet;
}

function ColumnAccentRail({ column }: { column: ColumnKey }) {
  const bar =
    column === "traditional"
      ? "from-copilot-primary/80 to-copilot-primary/20"
      : column === "digital"
        ? "from-copilot-accent/85 to-copilot-accent/15"
        : "from-blue-500/65 to-copilot-accent/20";
  return <div className={cn("w-[3px] shrink-0 self-stretch rounded-l-[10px] bg-gradient-to-b", bar)} aria-hidden />;
}

function ComparisonAnswerCell({ column, text }: { column: ColumnKey; text: string }) {
  return (
    <div className="flex min-h-[3rem] min-w-0 overflow-hidden rounded-xl border border-slate-200/70 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.03]">
      <ColumnAccentRail column={column} />
      <div className="min-w-0 flex-1 py-2.5 pl-2.5 pr-3">
        <BoldInline text={text} className={INLINE_BODY} />
      </div>
    </div>
  );
}

export type BankFeePatternComparisonProps = {
  rows: readonly BankFeePatternComparisonRow[];
  className?: string;
  /** Screen-reader label for the comparison table (desktop). */
  tableCaption?: string;
  /** Override the three column titles and hints (row data still uses traditional / digital / hybrid keys). */
  columnLabels?: Partial<{
    traditional: Partial<BankFeePatternComparisonColumnLabels["traditional"]>;
    digital: Partial<BankFeePatternComparisonColumnLabels["digital"]>;
    third: Partial<BankFeePatternComparisonColumnLabels["third"]>;
  }>;
};

/**
 * Traditional vs digital vs hybrid — desktop: table in a moving-style shell;
 * mobile: copilot accordion by topic.
 */
export function BankFeePatternComparison({
  rows,
  className,
  tableCaption = "Fee patterns compared across traditional banks, digital banks, and hybrid setups",
  columnLabels,
}: BankFeePatternComparisonProps) {
  const firstRowId = rows[0]?.id;
  const labels = mergeColumnLabels(columnLabels);
  const columnVisuals = buildColumnVisuals(labels);

  return (
    <div className={cn("min-w-0 max-w-full space-y-5", className)}>
      <div className="grid gap-3 md:grid-cols-3" aria-label="Banking setup fee pattern summary">
        {columnVisuals.map(({ key, label, hint, Icon, iconWrap }) => (
          <article
            key={key}
            className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-white/95 p-4 shadow-expatos-sm ring-1 ring-slate-900/[0.06] sm:p-4"
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <div className="mt-1 flex items-start gap-3">
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 [&>svg]:h-5 [&>svg]:w-5",
                  iconWrap
                )}
                aria-hidden
              >
                <Icon />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight text-copilot-text-primary">{label}</h3>
                <p className="mt-1 text-xs leading-snug text-copilot-text-secondary">{hint}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5" aria-hidden>
              {rows.slice(0, 4).map((row) => (
                <span
                  key={`${key}-${row.id}`}
                  className="rounded-full border border-copilot-primary/10 bg-copilot-bg-soft/80 px-2 py-1 text-[10px] font-medium leading-none text-copilot-text-muted ring-1 ring-copilot-primary/[0.04]"
                >
                  {row.label}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="hidden min-w-0 max-w-full overflow-x-auto lg:block">
        <div className={TABLE_WRAP}>
          <div className={cn("h-1 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
          <table className="w-full min-w-0 table-fixed border-collapse">
            <caption className="sr-only">{tableCaption}</caption>
            <thead>
              <tr className="border-b border-copilot-primary/[0.08] bg-copilot-bg-soft/50">
                <th scope="col" className={TH}>
                  Topic
                </th>
                <th scope="col" className={TH}>
                  {labels.traditional.label}
                </th>
                <th scope="col" className={TH}>
                  {labels.digital.label}
                </th>
                <th scope="col" className={TH}>
                  {labels.third.label}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <ContentTableRow
                  key={row.id}
                  className="border-b border-slate-200/55 last:border-b-0 even:bg-copilot-bg-soft/[0.35] hover:bg-copilot-bg-soft/55 motion-reduce:hover:bg-transparent"
                >
                  <ContentTableCell emphasis className={cn(TD, "bg-transparent font-medium text-copilot-text-primary")}>
                    <div className="text-[13px] font-semibold leading-snug sm:text-sm">{row.label}</div>
                    {row.explanation ? (
                      <BoldParagraph text={row.explanation} className={EXPLANATION_TOPIC} />
                    ) : null}
                  </ContentTableCell>
                  <ContentTableCell className={cn(TD, "bg-transparent")}>
                    <ComparisonAnswerCell column="traditional" text={row.traditional} />
                  </ContentTableCell>
                  <ContentTableCell className={cn(TD, "bg-transparent")}>
                    <ComparisonAnswerCell column="digital" text={row.digital} />
                  </ContentTableCell>
                  <ContentTableCell className={cn(TD, "bg-transparent")}>
                    <ComparisonAnswerCell column="hybrid" text={row.hybrid} />
                  </ContentTableCell>
                </ContentTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={cn("lg:hidden", movingNlFaqCardInnerClass)}>
        <Accordion
          tone="copilot"
          density="comfortable"
          allowMultiple
          initialOpenId={firstRowId}
          items={rows.map((row) => ({
            id: row.id,
            title: <span className="font-semibold text-copilot-text-primary">{row.label}</span>,
            content: (
              <div className="space-y-3">
                {row.explanation ? (
                  <BoldParagraph text={row.explanation} className="text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-medium [&_strong]:text-copilot-text-primary" />
                ) : null}
                <dl className="grid gap-2.5 text-sm">
                  <div className="rounded-xl border border-slate-200/70 bg-white/90 p-3 ring-1 ring-slate-900/[0.03]">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">{labels.traditional.label}</dt>
                    <dd className="mt-1 min-w-0">
                      <BoldInline text={row.traditional} className={INLINE_BODY} />
                    </dd>
                  </div>
                  <div className="rounded-xl border border-slate-200/70 bg-white/90 p-3 ring-1 ring-slate-900/[0.03]">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">{labels.digital.label}</dt>
                    <dd className="mt-1 min-w-0">
                      <BoldInline text={row.digital} className={INLINE_BODY} />
                    </dd>
                  </div>
                  <div className="rounded-xl border border-slate-200/70 bg-white/90 p-3 ring-1 ring-slate-900/[0.03]">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">{labels.third.label}</dt>
                    <dd className="mt-1 min-w-0">
                      <BoldInline text={row.hybrid} className={INLINE_BODY} />
                    </dd>
                  </div>
                </dl>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}
