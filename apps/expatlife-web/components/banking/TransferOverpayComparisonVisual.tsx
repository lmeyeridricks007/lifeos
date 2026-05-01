import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

const shell = cn(
  "relative overflow-hidden rounded-2xl border border-border/55 bg-gradient-to-b from-surface-muted/35 via-surface-muted/15 to-canvas/40 p-4 ring-1 ring-border/10 sm:p-5"
);

function QualBarRow({
  label,
  segments,
}: {
  label: string;
  segments: readonly { widthPct: number; tone: "fee" | "fx" | "neutral" }[];
}) {
  const toneClass: Record<(typeof segments)[number]["tone"], string> = {
    fee: "bg-emerald-600/75",
    fx: "bg-amber-500/80",
    neutral: "bg-slate-400/45",
  };
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">{label}</p>
      <div className="mt-1.5 flex h-2.5 w-full overflow-hidden rounded-full bg-surface-muted ring-1 ring-border/30" aria-hidden>
        {segments.map((s, i) => (
          <span
            key={`${label}-${i}`}
            className={cn("h-full shrink-0", toneClass[s.tone])}
            style={{ width: `${s.widthPct}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function ColumnCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col gap-3 rounded-xl border border-border/70 bg-surface-raised/95 p-4 shadow-sm ring-1 ring-border/8 sm:p-4">
      <p className="text-center text-xs font-bold leading-snug text-foreground sm:text-sm">{title}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

export type TransferOverpayComparisonVisualProps = {
  caption: string;
  disclaimer: string;
  className?: string;
};

/**
 * Qualitative comparison of where cost hides — bar widths are for learning only, not live fees or exchange math.
 */
export function TransferOverpayComparisonVisual({ caption, disclaimer, className }: TransferOverpayComparisonVisualProps) {
  return (
    <figure className={cn(shell, "mt-5 sm:mt-6", className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Illustrative comparison</figcaption>
      <p className="mx-auto mt-2 max-w-2xl text-center text-xs leading-relaxed text-foreground-muted sm:text-sm">{caption}</p>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <ColumnCard title="Typical big-bank path">
          <QualBarRow label="Visible transfer fee" segments={[{ widthPct: 18, tone: "fee" }]} />
          <QualBarRow label="Cost hidden in the exchange rate" segments={[{ widthPct: 82, tone: "fx" }]} />
          <QualBarRow label="Hassle for you" segments={[{ widthPct: 28, tone: "neutral" }]} />
        </ColumnCard>
        <ColumnCard title="Many send-money app paths">
          <QualBarRow label="Visible transfer fee" segments={[{ widthPct: 35, tone: "fee" }]} />
          <QualBarRow label="Cost hidden in the exchange rate" segments={[{ widthPct: 45, tone: "fx" }]} />
          <QualBarRow label="Hassle for you" segments={[{ widthPct: 55, tone: "neutral" }]} />
        </ColumnCard>
      </div>
      <p className="mt-4 text-center text-[11px] leading-snug text-foreground-faint sm:text-xs">{disclaimer}</p>
    </figure>
  );
}
