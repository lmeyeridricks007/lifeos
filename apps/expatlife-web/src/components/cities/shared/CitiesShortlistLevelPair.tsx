import { cn } from "@/lib/cn";
import type { BestCitiesLevel } from "@/src/components/cities/best-cities-for-expats/bestCitiesForExpatsPageModel";
import { SHORTLIST_LEVEL_STEPS, shortlistLevelScore } from "@/src/components/cities/best-cities-for-expats/bestCitiesForExpatsPageModel";

type CitiesShortlistLevelPairProps = {
  label: string;
  level: BestCitiesLevel;
};

export function CitiesShortlistLevelPair({ label, level }: CitiesShortlistLevelPairProps) {
  const score = shortlistLevelScore(level);
  const meterLabel = `${label}: ${score} of ${SHORTLIST_LEVEL_STEPS} compared with other cities on this guide.`;

  return (
    <li className="h-full min-w-0 list-none">
      <div
        className={cn(
          "flex h-full min-h-0 flex-col gap-1.5 rounded-xl border border-copilot-primary/12 bg-white/90 px-3 py-2.5 text-left shadow-sm ring-1 ring-copilot-primary/[0.06]",
          "dark:border-slate-700/80 dark:bg-slate-950/50 dark:ring-slate-800/40"
        )}
      >
        <span className="text-[11px] font-semibold uppercase tracking-wide text-copilot-text-primary/85">{label}</span>
        <div className="flex flex-wrap items-center gap-2 gap-y-1">
          <div className="flex min-w-0 flex-1 gap-1" role="img" aria-label={meterLabel}>
            {Array.from({ length: SHORTLIST_LEVEL_STEPS }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "h-2 min-w-[1.25rem] flex-1 rounded-full",
                  i < score ? "bg-sky-500/90 dark:bg-sky-500/75" : "bg-slate-200/90 dark:bg-slate-700/80"
                )}
                aria-hidden
              />
            ))}
          </div>
          <span className="shrink-0 tabular-nums text-[11px] font-medium text-copilot-text-secondary">{score}/{SHORTLIST_LEVEL_STEPS}</span>
        </div>
      </div>
    </li>
  );
}
