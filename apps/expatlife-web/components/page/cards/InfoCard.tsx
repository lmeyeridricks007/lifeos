import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type InfoCardProps = {
  /** Small uppercase label (e.g. quick-fact key). */
  eyebrow: string;
  /** Primary line (value / title). */
  title: string;
  accent?: "top" | "left";
  className?: string;
  children?: ReactNode;
};

/**
 * Light informational surface — quick facts, short summaries, highlight tiles.
 * One accent edge only (gradient cap or left stripe).
 */
export function InfoCard({ eyebrow, title, accent = "top", className, children }: InfoCardProps) {
  const leftAccent = accent === "left";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-md ring-1 ring-copilot-primary/[0.07] sm:p-5",
        movingNlCardMicroLiftClass,
        leftAccent && "border-l-4 border-l-copilot-accent pl-4 sm:pl-5",
        className
      )}
    >
      {!leftAccent ? (
        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      ) : null}
      <p className="relative z-[1] text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
        {eyebrow}
      </p>
      <p className="relative z-[1] mt-2 text-sm font-semibold leading-snug text-copilot-text-primary">{title}</p>
      {children ? <div className="relative z-[1] mt-2 text-sm text-copilot-text-secondary">{children}</div> : null}
    </div>
  );
}
