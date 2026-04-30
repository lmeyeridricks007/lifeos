import Link from "next/link";
import { cn } from "@/lib/cn";
import { HOW_TAXES_WORK_IN_NL_PATH } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

const scrollMt = "scroll-mt-28 md:scroll-mt-32";

type MoneyTaxSystemFoundationPromoProps = {
  /** Where this promo is shown — copy points to the general Dutch tax foundation page. */
  variant: "from-tax-guide" | "from-expat-taxes";
  className?: string;
};

/**
 * Cross-link to the non-expat-first foundation explainer (`/netherlands/money/how-taxes-work-in-the-netherlands/`).
 */
export function MoneyTaxSystemFoundationPromo({ variant, className }: MoneyTaxSystemFoundationPromoProps) {
  const lead =
    variant === "from-tax-guide"
      ? "Need the simple version first? Read"
      : "Need the basics first? Read";

  return (
    <aside
      className={cn(
        scrollMt,
        "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/90 p-4 shadow-card ring-1 ring-slate-900/[0.05] sm:p-5",
        className
      )}
      aria-label="Foundation tax explainer"
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
        {lead}{" "}
        <Link href={HOW_TAXES_WORK_IN_NL_PATH} className="font-semibold text-link hover:underline">
          How Taxes Work in the Netherlands
        </Link>
        <span className="text-foreground-muted">
          {" "}
          — the Money pillar foundation (payroll vs return, boxes, credits, deductions, allowances) before the broader expat guides.
        </span>
      </p>
    </aside>
  );
}
