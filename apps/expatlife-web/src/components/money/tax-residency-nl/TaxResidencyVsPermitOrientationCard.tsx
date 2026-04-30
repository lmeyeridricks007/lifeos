import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { TAX_RESIDENCY_NL_PATH } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";

/** Matches `taxVsImmigration.id` in `buildTaxResidencyNlPageModel`. */
export const TAX_VS_IMMIGRATION_SECTION_ANCHOR = "#tax-vs-immigration-residency" as const;

type TaxResidencyVsPermitOrientationCardProps = {
  className?: string;
  /**
   * When true, the primary action jumps to the detailed comparison on the tax residency page.
   * When false, it opens the Money tax residency guide (use on Move pages).
   */
  samePageDetailAnchor: boolean;
};

export function TaxResidencyVsPermitOrientationCard({ className, samePageDetailAnchor }: TaxResidencyVsPermitOrientationCardProps) {
  return (
    <aside
      className={cn(
        "rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/45 p-4 shadow-card ring-1 ring-border/10 sm:p-5",
        className
      )}
      aria-labelledby="tax-res-vs-permit-card-title"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Money · Move</p>
      <h2 id="tax-res-vs-permit-card-title" className="mt-2 text-base font-semibold tracking-tight text-foreground">
        Tax residency vs residence permit
      </h2>
      <BoldParagraph
        text="Immigration status (visa or residence permit) is not the same as tax residency — they often change in the same years, but official guidance and labels differ. BSN and municipal registration are useful admin context; they are not a complete tax-residency answer on their own. ExpatCopilot does not give final determinations — use Belastingdienst international pages or a tax adviser when you need a binding position."
        className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
      />
      <p className="mt-4">
        {samePageDetailAnchor ? (
          <Link
            href={TAX_VS_IMMIGRATION_SECTION_ANCHOR}
            className="text-sm font-semibold text-link transition-colors hover:text-link-hover hover:underline"
          >
            Detailed comparison on this page →
          </Link>
        ) : (
          <Link
            href={TAX_RESIDENCY_NL_PATH}
            className="text-sm font-semibold text-link transition-colors hover:text-link-hover hover:underline"
          >
            Open Tax residency in the Netherlands →
          </Link>
        )}
      </p>
    </aside>
  );
}
