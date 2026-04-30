import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { THIRTY_PERCENT_RULING_NL_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";

type UnderstandFirstThenCalculateCtaProps = {
  /** `guide` = first CTA scrolls to concepts on this page; `calculator` = first CTA opens the Money guide. */
  variant: "guide" | "calculator";
  className?: string;
  id?: string;
};

const R = taxGuideRoutes;

/**
 * Shared “understand first, then calculate” strip for the 30% ruling Money guide ↔ Taxes calculator pairing.
 */
export function UnderstandFirstThenCalculateCta({ variant, className, id }: UnderstandFirstThenCalculateCtaProps) {
  const readFirst =
    variant === "guide"
      ? { href: `${THIRTY_PERCENT_RULING_NL_PATH}#start-here-30`, label: "Review concepts on this page" }
      : { href: THIRTY_PERCENT_RULING_NL_PATH, label: "Read the 30% ruling guide" };

  const steps = [
    readFirst,
    { href: R.ruling, label: "Check eligibility" },
    { href: R.salaryNet, label: "Compare net salary" },
    { href: R.payslip, label: "Decode payslip after approval" },
  ] as const;

  const primaryClass = cn(
    "inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong sm:w-auto",
    transitionInteractive,
    activeBrightnessPress
  );

  const secondaryClass =
    "inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted sm:w-auto";

  return (
    <section
      id={id ?? "understand-first-then-calculate"}
      className={cn(
        "scroll-mt-28 rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] sm:p-6 md:scroll-mt-32",
        className
      )}
      aria-labelledby="understand-first-heading"
    >
      <h2 id="understand-first-heading" className="text-lg font-bold tracking-tight text-copilot-text-primary sm:text-xl">
        Understand first, then calculate
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
        {variant === "guide" ? (
          <>
            This guide = <strong>context</strong>. The calculator = <strong>tax-year numbers</strong> from your inputs. Estimates are{" "}
            <strong>not approval</strong>; the statutory <strong>maximum</strong> is not always what <strong>payroll</strong> applies.
          </>
        ) : (
          <>
            Use the <strong>Money guide</strong> for the full walkthrough. Tool output follows the <strong>tax year</strong> you select.
            Estimates support planning; <strong>Belastingdienst</strong> and your <strong>employer</strong> decide binding facts.
          </>
        )}
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4" role="list">
        {steps.map((step, i) => (
          <li key={step.href}>
            <Link href={step.href} className={i === 0 ? primaryClass : secondaryClass}>
              <span className="text-center">{step.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-copilot-text-secondary sm:text-sm">
        <span className="font-semibold text-copilot-text-primary">Broader Money guides:</span>
        <Link href={R.taxGuideForExpats} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
          Netherlands Tax Guide for Expats
        </Link>
        <span aria-hidden className="text-copilot-text-muted">
          ·
        </span>
        <Link href={R.expatTaxesGuide} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
          Expat Taxes in the Netherlands
        </Link>
      </p>
    </section>
  );
}
