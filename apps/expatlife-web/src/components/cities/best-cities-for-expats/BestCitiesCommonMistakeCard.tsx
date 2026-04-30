import {
  Baby,
  Calculator,
  CalendarClock,
  Camera,
  Euro,
  Home,
  MapPinned,
  TrainFront,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";

export type BestCitiesCommonMistakeRow = {
  id: string;
  title: string;
  body: string;
};

const ICON_BY_ID: Record<string, LucideIcon> = {
  "headline-rent": Euro,
  "rent-only": Euro,
  "commute-reality": TrainFront,
  "commute-ideal": TrainFront,
  "amsterdam-default": MapPinned,
  "family-stage": Baby,
  "ignore-childcare": Baby,
  "major-city": Home,
  "total-cost": Calculator,
  "tourism-vs-life": Camera,
  "logistics-handwave": CalendarClock,
  "salary-only": TrendingUp,
  "ignore-rent": Home,
  "commute-underestimate": TrainFront,
  "lifestyle-skip": Users,
  "no-net-model": Calculator,
};

type VariantKey = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const VARIANT_STYLES: Record<
  VariantKey,
  {
    iconWrap: string;
    topBar: string;
    cardBg: string;
    label: string;
  }
> = {
  0: {
    iconWrap: "bg-sky-500/15 text-sky-700 ring-1 ring-sky-400/35",
    topBar: "bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500",
    cardBg: "bg-gradient-to-br from-sky-50/90 via-white to-white",
    label: "text-sky-700/90",
  },
  1: {
    iconWrap: "bg-violet-500/15 text-violet-800 ring-1 ring-violet-400/35",
    topBar: "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500",
    cardBg: "bg-gradient-to-br from-violet-50/85 via-white to-white",
    label: "text-violet-800/90",
  },
  2: {
    iconWrap: "bg-emerald-500/15 text-emerald-800 ring-1 ring-emerald-400/35",
    topBar: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600",
    cardBg: "bg-gradient-to-br from-emerald-50/88 via-white to-white",
    label: "text-emerald-800/90",
  },
  3: {
    iconWrap: "bg-amber-500/15 text-amber-900 ring-1 ring-amber-400/40",
    topBar: "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-white",
    label: "text-amber-900/90",
  },
  4: {
    iconWrap: "bg-rose-500/15 text-rose-800 ring-1 ring-rose-400/35",
    topBar: "bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500",
    cardBg: "bg-gradient-to-br from-rose-50/85 via-white to-white",
    label: "text-rose-800/90",
  },
  5: {
    iconWrap: "bg-indigo-500/15 text-indigo-900 ring-1 ring-indigo-400/35",
    topBar: "bg-gradient-to-r from-indigo-500 via-blue-600 to-sky-500",
    cardBg: "bg-gradient-to-br from-indigo-50/88 via-white to-white",
    label: "text-indigo-900/90",
  },
  6: {
    iconWrap: "bg-cyan-500/15 text-cyan-900 ring-1 ring-cyan-400/35",
    topBar: "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500",
    cardBg: "bg-gradient-to-br from-cyan-50/88 via-white to-white",
    label: "text-cyan-900/90",
  },
};

type BestCitiesCommonMistakeCardProps = {
  row: BestCitiesCommonMistakeRow;
  /** Visual cycle (0–6) — drives icon accent and background tint. */
  variant: VariantKey;
  className?: string;
};

export function BestCitiesCommonMistakeCard({ row, variant, className }: BestCitiesCommonMistakeCardProps) {
  const v = VARIANT_STYLES[variant];
  const Icon = ICON_BY_ID[row.id] ?? MapPinned;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 shadow-expatos-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass,
        v.cardBg,
        className
      )}
    >
      <div className={cn("h-1 w-full shrink-0", v.topBar)} aria-hidden />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl [&>svg]:h-5 [&>svg]:w-5",
              v.iconWrap
            )}
            aria-hidden
          >
            <Icon />
          </span>
          <div className="min-w-0 flex-1">
            <p className={cn("text-[10px] font-bold uppercase tracking-[0.14em]", v.label)}>Common mistake</p>
            <h3 className="mt-1.5 text-[15px] font-bold leading-snug tracking-tight text-copilot-text-primary sm:text-base">
              <BoldInline text={row.title} className="[&_strong]:font-bold [&_strong]:text-copilot-text-primary" />
            </h3>
          </div>
        </div>
        <BoldParagraph
          text={row.body}
          className="mt-3 border-t border-border/50 pt-3 text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
        />
      </div>
    </article>
  );
}
