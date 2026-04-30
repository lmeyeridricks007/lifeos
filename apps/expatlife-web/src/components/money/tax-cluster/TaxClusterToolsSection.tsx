import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  EXPAT_TAXES_NL_HREF,
  HOW_TAXES_WORK_IN_NL_HREF,
  THIRTY_PERCENT_RULING_NL_HREF,
  TAX_ADVISORS_COMPARE_HREF,
  TAX_ADVISORS_HUB_HREF,
  TAX_ADVISORS_TOOLS_FIRST_HREF,
  TAX_ADVISORS_WHEN_HELP_HREF,
  TAX_GUIDE_FOR_EXPATS_HREF,
  TAX_RESIDENCY_NL_HREF,
  TAX_RETURN_NL_HREF,
  taxClusterTools,
  type TaxClusterToolId,
} from "./taxClusterToolsConfig";
import { MoneyTaxLearningPath } from "./MoneyTaxLearningPath";

type TaxClusterToolsSectionProps = {
  /** Highlights one card when embedded on that tool’s page. */
  current?: TaxClusterToolId;
  className?: string;
  /** Anchor for in-page nav (tax guide, money hub). */
  id?: string;
  /** When true, adds a short link to the Netherlands Tax Guide for Expats under the grid. */
  showGuideLink?: boolean;
  /**
   * When true (default), adds a muted line with links to the editorial tax-advisors guide (optional paid help).
   * Can be true while `showGuideLink` is false to show only that line (e.g. Tax Guide tools column).
   */
  showTaxHelpLinks?: boolean;
  /** When true (default), shows the shared five-step Money → Tax learning path above the tool grid. */
  showLearningPath?: boolean;
};

export function TaxClusterToolsSection({
  current,
  className,
  id = "tax-tools-cluster",
  showGuideLink = true,
  showTaxHelpLinks,
  showLearningPath = true,
}: TaxClusterToolsSectionProps) {
  /** Shown on all Money → Tax cluster embeds unless a page opts out (rare). */
  const taxHelpLinksVisible = showTaxHelpLinks !== false;
  return (
    <section id={id} className={cn("space-y-4 scroll-mt-28 md:scroll-mt-32", className)} aria-labelledby="tax-cluster-tools-heading">
      <div>
        <h2 id="tax-cluster-tools-heading" className="text-lg font-semibold tracking-tight text-copilot-text-primary sm:text-xl">
          Tax tools
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
          Six calculators shared across the Money → Tax cluster — same sequence as the{" "}
          <Link href={`${HOW_TAXES_WORK_IN_NL_HREF}#tax-learning-path`} className="font-semibold text-copilot-primary hover:underline">
            Tax learning path
          </Link>
          :{" "}
          <Link href={HOW_TAXES_WORK_IN_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            How Taxes Work
          </Link>
          ,{" "}
          <Link href={TAX_GUIDE_FOR_EXPATS_HREF} className="font-semibold text-copilot-primary hover:underline">
            Tax Guide
          </Link>
          ,{" "}
          <Link href={EXPAT_TAXES_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            Expat Taxes
          </Link>
          ,{" "}
          <Link href={TAX_RESIDENCY_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            Tax residency
          </Link>
          ,{" "}
          <Link href={TAX_RETURN_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            Tax return
          </Link>
          , then this tools hub. Each tool documents its own methodology; outputs are planning-only.
        </p>
      </div>
      {showLearningPath ? <MoneyTaxLearningPath variant="compact" currentStep={5} /> : null}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {taxClusterTools.map((c) => (
          <Link
            key={c.id}
            href={c.href}
            className={cn(
              "group rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.1] transition hover:ring-copilot-primary/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/30 sm:p-5",
              current === c.id && "ring-2 ring-copilot-primary/35"
            )}
          >
            <p className="text-sm font-semibold text-copilot-text-primary group-hover:text-copilot-primary">{c.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{c.description}</p>
            <p className="mt-3 text-xs font-semibold text-copilot-primary">{c.ctaLabel} →</p>
          </Link>
        ))}
      </div>
      {showGuideLink ? (
        <p className="text-sm text-copilot-text-secondary">
          <span className="text-copilot-text-primary">Orientation: </span>
          <Link href={HOW_TAXES_WORK_IN_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            How Taxes Work in the Netherlands
          </Link>
          {" · "}
          <Link href={TAX_RESIDENCY_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            Tax residency in the Netherlands
          </Link>
          {" · "}
          <Link href={TAX_RETURN_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            Tax return in the Netherlands
          </Link>
          {" · "}
          <Link href={TAX_GUIDE_FOR_EXPATS_HREF} className="font-semibold text-copilot-primary hover:underline">
            Netherlands Tax Guide for Expats
          </Link>
          {" · "}
          <Link href={THIRTY_PERCENT_RULING_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            30% ruling in the Netherlands
          </Link>
          {" · "}
          <Link href={EXPAT_TAXES_NL_HREF} className="font-semibold text-copilot-primary hover:underline">
            Expat Taxes in the Netherlands
          </Link>
          {" · "}
          <Link href={TAX_ADVISORS_HUB_HREF} className="font-semibold text-copilot-primary hover:underline">
            Netherlands taxes hub
          </Link>
          {" — "}
          same sequence as the Tax learning path: foundation → guides → residency → annual return → tools, then optional help.
        </p>
      ) : null}
      {taxHelpLinksVisible ? (
        <p className="text-xs leading-relaxed text-copilot-text-muted">
          <span className="text-copilot-text-secondary">Paid help is optional for many questions.</span>{" "}
          <Link href={TAX_ADVISORS_WHEN_HELP_HREF} className="font-semibold text-copilot-primary hover:underline">
            When to consider tax help
          </Link>
          {" · "}
          <Link href={TAX_ADVISORS_COMPARE_HREF} className="font-semibold text-copilot-primary hover:underline">
            Compare tax advisor options
          </Link>
          {" · "}
          <Link href={TAX_ADVISORS_TOOLS_FIRST_HREF} className="font-semibold text-copilot-primary hover:underline">
            Use tools first, then ask sharper questions
          </Link>
          <span className="text-copilot-text-secondary"> (editorial; not a firm recommendation).</span>
        </p>
      ) : null}
    </section>
  );
}
