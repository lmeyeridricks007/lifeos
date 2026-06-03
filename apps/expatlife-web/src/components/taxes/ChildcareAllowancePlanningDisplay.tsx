import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { CITIES_FUNNEL_SOFT_COPILOT_SURFACE } from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  CHILDCARE_ALLOWANCE_PLANNING_DISCLAIMER,
  childcareAllowancePlanningHighlights,
} from "./childcareAllowancePlanningHighlights";
import { CHILDCARE_COST_ESTIMATOR_PATH } from "./childcareAllowanceNetherlandsPageModel";

export function ChildcareAllowancePlanningDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-foreground-muted", className)}>
      <strong className="font-semibold text-foreground">Planning only.</strong> {CHILDCARE_ALLOWANCE_PLANNING_DISCLAIMER}
    </p>
  );
}

export function ChildcareAllowancePlanningHighlightCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {childcareAllowancePlanningHighlights.map((item) => (
        <article
          key={item.id}
          className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-4", movingNlCardMicroLiftClass)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.label}</p>
          <p className="mt-2 text-xl font-bold tracking-tight text-foreground">{item.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{item.note}</p>
        </article>
      ))}
    </div>
  );
}

export function ChildcareAllowancePlanningCtaStrip({ className }: { className?: string }) {
  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );
  const secondaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-5 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-6",
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-foreground-muted sm:text-base">
          Model net childcare costs and planning-range allowance with the ExpatCopilot estimator — then confirm your official amount on toeslagen.nl.
        </p>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
          <a
            href="https://www.toeslagen.nl/proefberekening"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(primaryCtaClass, "w-full sm:w-auto")}
          >
            Proefberekening Toeslagen
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <Link href={CHILDCARE_COST_ESTIMATOR_PATH} className={cn(secondaryCtaClass, "w-full sm:w-auto")}>
            Childcare cost estimator
          </Link>
        </div>
      </div>
      <ChildcareAllowancePlanningDisclaimer className="mt-4" />
    </div>
  );
}
