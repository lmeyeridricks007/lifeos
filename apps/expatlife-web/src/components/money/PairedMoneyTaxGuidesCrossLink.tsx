import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  EXPAT_TAXES_NL_HREF,
  HOW_TAXES_WORK_IN_NL_HREF,
  TAX_GUIDE_FOR_EXPATS_HREF,
} from "@/src/components/money/tax-cluster/taxClusterToolsConfig";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

const scrollMt = "scroll-mt-28 md:scroll-mt-32";

type PairedMoneyTaxGuidesCrossLinkProps = {
  /** Broad tax guide page → points readers to the scenario-led Money guide. */
  variant: "tax-guide-to-expat" | "expat-to-tax-guide";
  className?: string;
};

/**
 * Explicit pairing between the broad Netherlands Tax Guide for Expats and the scenario-led Expat Taxes page.
 */
export function PairedMoneyTaxGuidesCrossLink({ variant, className }: PairedMoneyTaxGuidesCrossLinkProps) {
  if (variant === "tax-guide-to-expat") {
    return (
      <aside
        className={cn(
          scrollMt,
          "relative overflow-hidden rounded-2xl border border-copilot-primary/15 bg-gradient-to-r from-copilot-bg-soft/90 to-brand-muted/25 p-4 shadow-card ring-1 ring-copilot-primary/[0.08] sm:p-5",
          className
        )}
        aria-label="Related scenario-led tax guide"
      >
        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
        <p className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
          Have expat-specific tax questions?{" "}
          <Link href={EXPAT_TAXES_NL_HREF} className="font-semibold text-link hover:underline">
            Open Expat Taxes Netherlands
          </Link>
          <span className="text-foreground-muted">
            {" "}
            — Tax learning path step 2 (scenario-first): partial years, foreign assets, ruling, allowances, and double-tax prompts. Use the
            Tax Guide on the same step when you need the full expat curriculum, not only a lane.
          </span>
        </p>
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        scrollMt,
        "relative overflow-hidden rounded-2xl border border-copilot-primary/15 bg-gradient-to-r from-brand-muted/25 to-copilot-bg-soft/90 p-4 shadow-card ring-1 ring-copilot-primary/[0.08] sm:p-5",
        className
      )}
      aria-label="Related broad tax guide"
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
        Tax learning path step 2 also includes the broader map:{" "}
        <Link href={TAX_GUIDE_FOR_EXPATS_HREF} className="font-semibold text-link hover:underline">
          Netherlands Tax Guide for Expats
        </Link>
        <span className="text-foreground-muted"> — </span>
        <Link href={HOW_TAXES_WORK_IN_NL_HREF} className="font-semibold text-link hover:underline">
          How Taxes Work
        </Link>
        <span className="text-foreground-muted"> is step 1 (foundation) if you need to re-ground payroll, returns, and boxes.</span>
      </p>
    </aside>
  );
}
