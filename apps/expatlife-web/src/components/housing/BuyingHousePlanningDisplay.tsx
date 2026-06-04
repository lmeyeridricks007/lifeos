import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { BUYING_HOUSE_REFERENCE_DISCLAIMER } from "./buyingHouseReference2026";
import { HOUSING_HUB_PATH, RENT_AFFORDABILITY_TOOL_PATH } from "./buyingHouseNetherlandsPageModel";

export function BuyingHousePlanningDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs leading-relaxed text-foreground-muted", className)}>
      <strong className="font-semibold text-foreground">Planning only.</strong> {BUYING_HOUSE_REFERENCE_DISCLAIMER}
    </p>
  );
}

export function BuyingHousePlanningCtaStrip({ className }: { className?: string }) {
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
          Stress-test housing budget and kosten koper with the rent affordability calculator — then verify transfer tax and registration rules on official government sources before you bid.
        </p>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
          <Link href={RENT_AFFORDABILITY_TOOL_PATH} className={cn(primaryCtaClass, "w-full sm:w-auto")}>
            Rent affordability calculator
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href="https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingen/content/overdrachtsbelasting"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(secondaryCtaClass, "w-full sm:w-auto")}
          >
            Belastingdienst transfer tax
          </a>
        </div>
      </div>
      <BuyingHousePlanningDisclaimer className="mt-4" />
    </div>
  );
}

export function BuyingHouseHubCtaStrip({ className }: { className?: string }) {
  const secondaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Link href={HOUSING_HUB_PATH} className={secondaryCtaClass}>
        Netherlands housing hub
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
      <a href="https://www.kadaster.nl/" target="_blank" rel="noopener noreferrer" className={secondaryCtaClass}>
        Kadaster property registry
      </a>
    </div>
  );
}
