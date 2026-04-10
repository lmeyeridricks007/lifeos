import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type MoveMisunderstandingRow = { id?: string; title: string; body: ReactNode };

/**
 * Shared shell for renewal / after-approval / “reality check” grids on Move NL guides
 * (Visas & residency, Residence permits) so sections read as one template.
 */
export const MOVE_PILLAR_LIFECYCLE_CARD_CLASS =
  "rounded-xl border border-border/80 bg-surface-muted/50 px-4 py-4 ring-1 ring-inset ring-border/10 sm:px-5";

/** Lifecycle / “reality check” tile shell — gradient cap + shared border/fill (Move NL guides). */
export function MovePillarLifecycleCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(MOVE_PILLAR_LIFECYCLE_CARD_CLASS, "relative overflow-hidden", className)}>
      <div className={cn("absolute inset-x-0 top-0 h-0.5 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative min-w-0">{children}</div>
    </div>
  );
}

/** Shared “what people misunderstand” card grid — matches lifecycle cards on the same pages. */
export function MoveMisunderstandingCardGrid({
  rows,
  className,
}: {
  rows: MoveMisunderstandingRow[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {rows.map((row) => (
        <MovePillarLifecycleCard key={row.id ?? row.title}>
          <p className="text-sm font-semibold text-foreground">{row.title}</p>
          <div className="mt-2 text-sm leading-relaxed text-foreground-muted">{row.body}</div>
        </MovePillarLifecycleCard>
      ))}
    </div>
  );
}
