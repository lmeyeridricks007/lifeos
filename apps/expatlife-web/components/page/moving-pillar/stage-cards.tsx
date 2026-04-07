import Link from "next/link";
import type { PillarTimelineStage } from "@expatlife/content";
import type { ContentPublishStatus } from "@/src/lib/content/contentPublishStatus";
import { isComingSoonContent } from "@/src/lib/content/contentPublishStatus";
import { cn } from "@/lib/cn";
import { transitionSurface } from "@/lib/ui/interaction";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowClass,
  movingNlCardShadowHoverClass,
} from "@/lib/ui/moving-nl-pillar-identity";

const STAGE_RAIL = [
  "from-blue-500 via-copilot-accent to-cyan-400",
  "from-cyan-400 via-blue-500 to-copilot-primary",
  "from-copilot-primary to-copilot-accent",
] as const;

export type StageCardsProps = {
  stages: PillarTimelineStage[];
  /** Max bullets per stage (default 4). */
  maxBulletsPerStage?: number;
  /** Max stage cards to render (default 3; hubs may use up to 6). */
  maxStages?: number;
  className?: string;
  /** Elevated light cards on dark system band — Option A: white tiles, dark copy, cyan/blue accents. */
  variant?: "default" | "copilotDark";
  /** Optional: mark topic links (e.g. Living/Culture cluster) without per-card badge spam. */
  linkPublishStatus?: (href: string) => ContentPublishStatus | undefined;
};

export function StageCards({
  stages,
  maxBulletsPerStage = 4,
  maxStages = 3,
  className,
  variant = "default",
  linkPublishStatus,
}: StageCardsProps) {
  const list = stages.slice(0, Math.min(maxStages, 6));
  const onDarkBand = variant === "copilotDark";

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "grid gap-5",
          list.length <= 3 ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
          onDarkBand ? "md:gap-6" : "md:gap-7"
        )}
      >
        {list.map((stage, i) => (
          <div
            key={stage.id}
            className={cn(
              transitionSurface,
              "relative flex min-h-0 flex-col overflow-hidden rounded-2xl border-0 p-6 transition-all duration-200 ease-out md:min-h-[17.5rem]",
              onDarkBand
                ? cn(
                    "bg-copilot-surface text-copilot-text-primary shadow-[0_16px_40px_rgba(0,0,0,0.28),0_4px_12px_rgba(0,0,0,0.12)] ring-1 ring-white/30",
                    movingNlCardShadowHoverClass,
                    movingNlCardMicroLiftClass
                  )
                : cn(movingNlCardShadowClass, movingNlCardShadowHoverClass, movingNlCardMicroLiftClass, "bg-copilot-surface")
            )}
          >
            <div
              className={cn(
                "absolute left-0 right-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r opacity-100",
                STAGE_RAIL[i % STAGE_RAIL.length]
              )}
              aria-hidden
            />
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-bold tabular-nums text-white shadow-lg",
                  "bg-gradient-to-br from-copilot-primary via-blue-600 to-copilot-accent",
                  "ring-2 ring-cyan-300/70"
                )}
                aria-hidden
              >
                {i + 1}
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Stage {i + 1}</p>
            </div>
            <h3 className="mt-3 text-base font-bold tracking-tight text-copilot-text-primary sm:text-lg">{stage.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{stage.goal}</p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Key actions</p>
            <ul className="mt-2 list-none space-y-2 text-sm leading-snug text-copilot-text-secondary">
              {stage.actions.slice(0, maxBulletsPerStage).map((a) => (
                <li key={a} className="flex gap-2.5">
                  <span
                    className={cn(
                      "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                      onDarkBand ? "bg-copilot-accent" : "bg-copilot-primary/70"
                    )}
                    aria-hidden
                  />
                  <span className="min-w-0 font-medium text-copilot-text-primary">{a}</span>
                </li>
              ))}
            </ul>
            {stage.links.length > 0 ? (
              <ul className="mt-auto space-y-2 border-t border-slate-200 pt-4 text-sm">
                {stage.links.slice(0, 2).map((l) => {
                  const st = linkPublishStatus?.(l.href);
                  const expanding = st != null && isComingSoonContent(st);
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 font-bold text-copilot-primary underline-offset-2 transition-colors hover:text-copilot-primary-strong hover:underline"
                      >
                        <span className="inline-flex items-center gap-1">
                          {l.label}
                          <span aria-hidden>→</span>
                        </span>
                        {expanding ? (
                          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-copilot-text-muted">
                            Expanding
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
