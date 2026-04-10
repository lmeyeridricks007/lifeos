import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Bike, Smartphone, TrainFront } from "lucide-react";
import { cn } from "@/lib/cn";
import type { LivingQuickStartPhase } from "@/src/components/living/livingPillarContent";

const ICONS = [Smartphone, Bike, TrainFront] as const;

function QuickCard({
  title,
  intro,
  bullets,
  icon: Icon,
  footHref,
  footLabel,
  badge,
  priority,
}: LivingQuickStartPhase & { icon: LucideIcon }) {
  const isPriority = priority === "high";
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-card border bg-surface-raised p-5 shadow-card ring-1 ring-border/10 sm:p-6",
        isPriority
          ? "border border-border border-l-[3px] border-l-brand shadow-card-hover ring-brand/15"
          : "border border-border"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-brand-strong",
            isPriority ? "bg-brand-muted" : "bg-brand-muted/80"
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0">
          {badge ? (
            <span className="mb-2 inline-flex rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
              {badge}
            </span>
          ) : null}
          <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{intro}</p>
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground-muted" role="list">
        {bullets.map((b) => (
          <li key={b} className="marker:text-brand/70">
            {b}
          </li>
        ))}
      </ul>
      {footHref && footLabel ? (
        <div className="mt-4 border-t border-border/70 pt-4">
          <Link
            href={footHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:text-link-hover hover:underline"
          >
            {footLabel}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function LivingQuickStartCards({ phases }: { phases: LivingQuickStartPhase[] }) {
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
      {phases.map((phase, i) => (
        <QuickCard key={phase.title} {...phase} icon={phase.icon ?? ICONS[i] ?? Smartphone} />
      ))}
    </div>
  );
}
