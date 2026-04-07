import type { ReactNode } from "react";
import { Clock, ListOrdered, Sparkles, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";

export type AtGlanceCardProps = {
  id?: string;
  /** Small caps label above the heading (default matches moving NL pillar). */
  eyebrow?: string;
  /** Main heading (default: “At a glance”). */
  heading?: string;
  /** Intro under the heading. */
  intro?: string;
  /** Who this applies to (compact chips). */
  who: string[];
  /** One line, e.g. timing. */
  timeline: string;
  /** Max 3 short steps. */
  steps: string[];
  /** Optional footer line (e.g. last updated). */
  footer?: ReactNode;
  className?: string;
};

const CHIP_CLASS =
  "flex w-full min-w-0 whitespace-normal break-words rounded-2xl border-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 px-3 py-2 text-left text-xs font-semibold leading-snug text-copilot-primary ring-1 ring-copilot-primary/15 [overflow-wrap:anywhere]";

/**
 * At a glance — signature ExpatOS summary module: gradient cap, elevation, directional steps.
 */
export function AtGlanceCard({
  id,
  eyebrow = "ExpatOS summary",
  heading = "At a glance",
  intro = "Who this is for, realistic timing, and the first moves that matter—before you scroll.",
  who,
  timeline,
  steps,
  footer,
  className,
}: AtGlanceCardProps) {
  const stepItems = steps.slice(0, 3);
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.07] sm:p-7",
        movingNlCardShadowHoverClass,
        movingNlCardMicroLiftClass,
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="absolute -right-16 top-24 h-40 w-40 rounded-full bg-copilot-accent/10 blur-3xl" aria-hidden />

      <div className="relative flex items-start gap-4 sm:gap-5">
        <span className="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-primary/15 to-copilot-accent/15 text-copilot-primary shadow-expatos-sm ring-1 ring-copilot-primary/10">
          <Sparkles className="h-6 w-6" aria-hidden />
        </span>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted">{eyebrow}</p>
          <h2
            id={headingId}
            className="mt-1.5 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl"
          >
            {heading}
          </h2>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{intro}</p>
        </div>
      </div>

      {who.length > 0 ? (
        <div className="relative mt-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
            <Users className="h-3.5 w-3.5 text-copilot-primary" aria-hidden />
            Who this is for
          </div>
          <ul className="mt-3 flex flex-col gap-2">
            {who.map((w) => (
              <li key={w} className="min-w-0 w-full">
                <span className={CHIP_CLASS}>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="relative mt-5 rounded-xl bg-gradient-to-br from-copilot-bg-soft/90 to-white px-4 py-3.5 shadow-expatos-sm sm:px-5 sm:py-4">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
          <Clock className="h-3.5 w-3.5 shrink-0 text-copilot-accent" aria-hidden />
          Timeline
        </div>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-copilot-text-primary">{timeline}</p>
      </div>

      {stepItems.length > 0 ? (
        <div className="relative mt-5">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
            <ListOrdered className="h-3.5 w-3.5 shrink-0 text-copilot-primary" aria-hidden />
            Key steps
          </div>
          <ol className="mt-3 space-y-2.5">
            {stepItems.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-primary to-copilot-primary-strong text-xs font-bold text-white shadow-expatos-sm"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="min-w-0 border-l-2 border-copilot-accent/40 pl-3 pt-1.5 text-sm leading-relaxed text-copilot-text-primary">
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {footer ? (
        <div className="relative mt-6 rounded-xl bg-slate-50/90 px-4 py-3 text-xs leading-relaxed text-copilot-text-secondary">
          {footer}
        </div>
      ) : null}
    </section>
  );
}
