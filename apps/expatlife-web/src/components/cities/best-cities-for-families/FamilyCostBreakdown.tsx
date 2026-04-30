import Link from "next/link";
import {
  Baby,
  Bus,
  Home,
  Plug,
  type LucideIcon,
  Receipt,
  Shield,
  ShoppingBasket,
} from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { SectionBlock } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

function formatEur(amount: number): string {
  return amount.toLocaleString("en-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

export type FamilyCostBreakdownLine = {
  label: string;
  /** Monthly amount in euros (illustrative). */
  amountEur: number;
  /** Include in the “rent is not the whole story” running example (e.g. rent + childcare + transport). */
  inSpotlightSubtotal?: boolean;
};

export type FamilyCostBreakdownModel = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  equationPreamble: string;
  lines: FamilyCostBreakdownLine[];
  spotlightCaption: string;
  fullTableCaption: string;
  disclaimer: string;
  toolLinks: { href: string; label: string }[];
};

type FamilyCostBreakdownProps = {
  model: FamilyCostBreakdownModel;
  className?: string;
};

const SEGMENT_DOT: readonly string[] = [
  "bg-sky-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-rose-400",
  "bg-slate-500",
] as const;

const SEGMENT_BAR: readonly string[] = [
  "bg-sky-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-rose-400",
  "bg-slate-500",
] as const;

function iconForLine(label: string): LucideIcon {
  const l = label.toLowerCase();
  if (l.includes("rent")) return Home;
  if (l.includes("childcare") || l.includes("daycare")) return Baby;
  if (l.includes("grocer")) return ShoppingBasket;
  if (l.includes("transport") || l.includes("travel")) return Bus;
  if (l.includes("insurance")) return Shield;
  if (l.includes("utilities") || l.includes("household")) return Plug;
  return Receipt;
}

function CostShareBar({
  lines,
  total,
  compact,
}: {
  lines: FamilyCostBreakdownLine[];
  total: number;
  compact?: boolean;
}) {
  const safeTotal = total > 0 ? total : 1;
  const label = compact
    ? "Rough share of the three-line subtotal (example amounts)"
    : "Rough share of each cost in the example month (example amounts)";

  return (
    <div className="mt-4 w-full">
      <p className="sr-only">{label}</p>
      <div
        className={cn(
          "flex w-full overflow-hidden rounded-full bg-border/35 ring-1 ring-border/20",
          compact ? "h-2.5" : "h-3"
        )}
        role="img"
        aria-hidden
      >
        {lines.map((line, i) => {
          const pct = (line.amountEur / safeTotal) * 100;
          const w = Math.max(pct, line.amountEur > 0 ? 0.6 : 0);
          return (
            <div
              key={line.label}
              className={cn(SEGMENT_BAR[i % SEGMENT_BAR.length], "min-w-px transition-[width] duration-300")}
              style={{ width: `${w}%` }}
              title={formatEur(line.amountEur)}
            />
          );
        })}
      </div>
      <ul className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] leading-tight text-foreground-muted sm:text-xs" aria-hidden>
        {lines.map((line, i) => (
          <li key={line.label} className="inline-flex items-center gap-1.5">
            <span className={cn("h-2 w-2 shrink-0 rounded-full", SEGMENT_DOT[i % SEGMENT_DOT.length])} aria-hidden />
            <span className="max-w-[10rem] truncate sm:max-w-none sm:whitespace-normal">{line.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ICON_WRAP_BY_INDEX = [
  "bg-sky-500/12 text-sky-800 ring-sky-400/35",
  "bg-violet-500/12 text-violet-800 ring-violet-400/35",
  "bg-amber-500/12 text-amber-900 ring-amber-400/35",
  "bg-emerald-500/12 text-emerald-800 ring-emerald-400/35",
  "bg-rose-500/12 text-rose-800 ring-rose-400/35",
  "bg-slate-500/12 text-slate-800 ring-slate-400/35",
] as const;

function CostRow({
  line,
  dotClass,
  iconWrapClass,
  showShare,
  share,
}: {
  line: FamilyCostBreakdownLine;
  dotClass: string;
  iconWrapClass: string;
  showShare: boolean;
  share: number;
}) {
  const Icon = iconForLine(line.label);
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 py-3 sm:gap-x-4 sm:py-3.5">
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 [&>svg]:h-4 [&>svg]:w-4",
          iconWrapClass
        )}
        aria-hidden
      >
        <Icon />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-foreground">{line.label}</p>
        {showShare ? (
          <div className="mt-1.5 h-1.5 max-w-xs overflow-hidden rounded-full bg-border/40">
            <div
              className={cn("h-full rounded-full", dotClass)}
              style={{ width: `${Math.min(100, Math.max(share, 2))}%` }}
            />
          </div>
        ) : null}
      </div>
      <span className="shrink-0 text-right text-sm tabular-nums text-foreground sm:text-[15px]">{formatEur(line.amountEur)}</span>
    </div>
  );
}

export function FamilyCostBreakdown({ model, className }: FamilyCostBreakdownProps) {
  const spotlightLines = model.lines.filter((l) => l.inSpotlightSubtotal);
  const spotlightTotal = spotlightLines.reduce((s, l) => s + l.amountEur, 0);
  const grandTotal = model.lines.reduce((s, l) => s + l.amountEur, 0);
  const safeGrand = grandTotal > 0 ? grandTotal : 1;

  return (
    <SectionBlock
      id={model.id}
      funnelFramed
      className={className}
      eyebrow={model.eyebrow}
      title={model.title}
      subtitle={model.subtitle}
      subtitleMarkdown
      compact
    >
      <div className="mt-5 max-w-2xl lg:max-w-6xl">
        <p className="text-sm text-foreground-muted">{model.equationPreamble}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-foreground-muted">
          {model.lines.map((line, i) => (
            <span key={line.label} className="inline-flex flex-wrap items-center gap-x-1">
              {i > 0 ? <span className="px-0.5 text-foreground-faint">+</span> : null}
              <span className="rounded-md bg-surface-muted/80 px-2 py-0.5 text-foreground ring-1 ring-border/40">{line.label}</span>
            </span>
          ))}
          <span className="px-0.5 text-foreground-faint">=</span>
          <span className="rounded-md bg-brand/8 px-2 py-0.5 text-foreground ring-1 ring-brand/15">one picture of monthly pressure</span>
        </div>
      </div>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 lg:mx-auto lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-8 xl:max-w-7xl">
        <div
          className={cn(
            "relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-surface-raised to-surface-muted/20 p-5 shadow-card ring-1 ring-border/10 sm:p-6",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-medium leading-snug text-foreground-muted sm:text-sm">{model.spotlightCaption}</p>
          <CostShareBar lines={spotlightLines} total={spotlightTotal} compact />
          <ul className="m-0 mt-5 min-w-0 flex-1 list-none border-t border-border/50 p-0 pt-1">
            {spotlightLines.map((line, i) => (
              <li key={line.label} className="list-none">
                <CostRow
                  line={line}
                  dotClass={SEGMENT_DOT[i % SEGMENT_DOT.length]}
                  iconWrapClass={ICON_WRAP_BY_INDEX[i % ICON_WRAP_BY_INDEX.length]}
                  showShare={false}
                  share={(line.amountEur / (spotlightTotal || 1)) * 100}
                />
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-border/50 pt-4 text-sm tabular-nums text-foreground-muted">
            Subtotal about {formatEur(spotlightTotal)} a month before food, insurance, and utilities.
          </p>
        </div>

        <div className="relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface-raised/90 shadow-card ring-1 ring-border/35">
          <div className={cn("absolute inset-x-0 top-0 z-[1] h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="relative z-[2] px-4 pb-0 pt-4 sm:px-5 sm:pt-5">
            <p className="text-xs font-medium leading-snug text-foreground-muted sm:text-sm">{model.fullTableCaption}</p>
          </div>
          <div className="relative z-[2] px-2 sm:px-3">
            <CostShareBar lines={model.lines} total={grandTotal} />
          </div>
          <ul className="relative z-[2] m-0 min-w-0 flex-1 list-none divide-y divide-border/45 border-t border-border/50 px-1 pt-1 sm:px-2">
            {model.lines.map((line, i) => (
              <li key={line.label} className="list-none">
                <CostRow
                  line={line}
                  dotClass={SEGMENT_DOT[i % SEGMENT_DOT.length]}
                  iconWrapClass={ICON_WRAP_BY_INDEX[i % ICON_WRAP_BY_INDEX.length]}
                  showShare
                  share={(line.amountEur / safeGrand) * 100}
                />
              </li>
            ))}
          </ul>
          <div className="relative z-[2] mt-auto border-t border-border/50 bg-sky-50/80 px-4 py-4 dark:bg-sky-950/35 dark:text-sky-50 sm:px-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-sm text-foreground dark:text-sky-100">Example monthly total</span>
              <span className="text-base tabular-nums text-foreground dark:text-white sm:text-lg">
                about {formatEur(grandTotal)}{" "}
                <span className="text-xs font-normal text-foreground-muted dark:text-sky-200/90 sm:text-sm">/ month</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <BoldParagraph
        text={model.disclaimer}
        className="mt-8 w-full min-w-0 max-w-none text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
      />

      {model.toolLinks.length ? (
        <ul className="mt-4 flex w-full min-w-0 max-w-none flex-wrap gap-x-4 gap-y-2 text-sm" role="list">
          {model.toolLinks.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="font-medium text-link hover:text-link-hover hover:underline">
                {t.label} →
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </SectionBlock>
  );
}
