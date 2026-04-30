import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { TaxJourneyFlowStep } from "@/src/components/money/tax-guide-for-expats/TaxJourneyFlow";
import { expatTaxesNlRoutes as R } from "./expatTaxesNlRoutes";

const prose = "[&_strong]:font-semibold [&_strong]:text-foreground";

/** Default six-step expat tax journey for the Netherlands Money pillar. */
export const expatTaxJourneyFlowDefaultSteps: readonly TaxJourneyFlowStep[] = [
  {
    number: 1,
    title: "Before arrival / job offer",
    body:
      "Model numbers early: compare offers and rough gross-to-net so monthly cash flow is plausible before you commit — still indicative until Dutch payroll confirms.",
    links: [
      { label: "Job offer comparison", href: R.jobOffer },
      { label: "Net salary estimator", href: R.salaryNet },
      { label: "Cost of living (budget context)", href: R.col },
    ],
  },
  {
    number: 2,
    title: "Payroll setup",
    body:
      "Contract labels, 30% ruling paperwork (if applicable), and withholding choices land here — the bridge between HR systems and what you will see on slips.",
    links: [
      { label: "Employment type scenarios", href: R.employmentType },
      { label: "30% ruling calculator", href: R.ruling },
      { label: "Working in the Netherlands", href: R.workingNl },
    ],
  },
  {
    number: 3,
    title: "First payslip",
    body:
      "This is where Dutch tax feels real: gross, net, premiums, and labels. Treat the slip as a map, not the full annual story.",
    links: [
      { label: "Decode payslip", href: R.payslip },
      { label: "Net salary estimator", href: R.salaryNet },
    ],
  },
  {
    number: 4,
    title: "Arrival-year tax situation",
    body:
      "Partial years, registration timing, and sometimes cross-border threads show up first in this window — before “a normal twelve months” exists.",
    links: [
      { label: "Arrival / departure year (this page)", href: "#arrival-departure-year" },
      { label: "Tax guide — orientation", href: R.taxGuideBroad },
    ],
  },
  {
    number: 5,
    title: "Annual tax return",
    body:
      "Withholding is a running estimate; the return can still reconcile deductions, household, and international lines when your year was not simple.",
    links: [{ label: "Tax guide — return basics", href: `${R.taxGuideBroad}#tax-return-basics` }],
  },
  {
    number: 6,
    title: "Ongoing checks: 30% ruling, assets, allowances, family changes",
    body:
      "Ruling reviews, Box 3 / foreign assets, toeslagen, and family events can shift later years — light check-ins beat last-minute surprises.",
    links: [
      { label: "30% ruling calculator", href: R.ruling },
      { label: "Foreign assets & Box 3 (this page)", href: "#foreign-box3" },
      { label: "Healthcare allowance", href: R.healthcare },
      { label: "Double-tax awareness", href: R.doubleTax },
      { label: "Family & allowances (this page)", href: "#family-allowances" },
      { label: "Early tax signals (this page)", href: "#early-tax-signals" },
    ],
  },
];

export type ExpatTaxJourneyFlowProps = {
  /** Override steps for reuse in tests or variants; defaults to the expat NL journey. */
  steps?: readonly TaxJourneyFlowStep[];
  className?: string;
};

/**
 * Vertical, timeline-style journey — tuned for six steps on small screens (no cramped horizontal row).
 */
export function ExpatTaxJourneyFlow({ steps = expatTaxJourneyFlowDefaultSteps, className }: ExpatTaxJourneyFlowProps) {
  const n = steps.length;

  return (
    <ol className={cn("m-0 flex list-none flex-col gap-6 p-0 sm:gap-8", className)} aria-label="Expat tax journey steps">
      {steps.map((step, i) => (
        <li key={step.number} className="flex gap-3 sm:gap-4">
          <div className="flex w-11 shrink-0 flex-col items-center sm:w-12">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand-strong ring-4 ring-surface-raised"
              aria-hidden
            >
              {step.number}
            </span>
            {i < n - 1 ? (
              <div
                className="mt-2 w-0.5 flex-1 min-h-[1.25rem] bg-gradient-to-b from-brand/35 via-brand/15 to-border/50"
                aria-hidden
              />
            ) : null}
          </div>

          <article
            className={cn(
              "relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-border/90 bg-surface-raised p-4 shadow-expatos-sm ring-1 ring-border/10 sm:p-5",
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <h3 className="pt-0.5 text-sm font-semibold tracking-tight text-foreground sm:text-base">{step.title}</h3>
            <BoldParagraph text={step.body} className={cn("mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm", prose)} />
            {step.links && step.links.length > 0 ? (
              <ul className="mt-3 flex flex-col gap-1.5" role="list">
                {step.links.map((link) => (
                  <li key={`${step.number}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-xs font-semibold text-link hover:text-link-hover hover:underline sm:text-sm"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
