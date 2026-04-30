import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { TaxJourneyFlowStep } from "@/src/components/money/tax-guide-for-expats/TaxJourneyFlow";
import { taxGuideRoutes as G } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";

const prose = "[&_strong]:font-semibold [&_strong]:text-foreground";
type TaxResidencyJourneyStep = TaxJourneyFlowStep & { examples?: readonly string[] };

const MOVE = {
  arrivalPlanner: "/netherlands/moving/tools/arrival-planner/",
  first90: "/netherlands/moving/tools/first-90-days/",
  municipality: "/netherlands/municipality-registration-netherlands/",
  bsn: "/netherlands/bsn-registration/",
  statusChanges: "/netherlands/moving/status-changes/",
  extensions: "/netherlands/moving/extensions-changes/",
} as const;

/** Default six-step tax residency journey — vertical timeline for small screens. */
export const taxResidencyJourneyFlowDefaultSteps: readonly TaxJourneyFlowStep[] = [
  {
    number: 1,
    title: "Before arrival / before leaving",
    body:
      "Sketch dates, income sources in each country, and what might overlap in the calendar year — useful whether you are relocating in or planning an orderly exit.",
    links: [
      { label: "Working in the Netherlands", href: G.workingNl },
      { label: "Job offer comparison", href: G.jobOffer },
      { label: "Expat taxes — scenario depth", href: G.expatTaxesGuide },
      { label: "Arrival & departure year (this page)", href: "#arrival-departure-year" },
    ],
  },
  {
    number: 2,
    title: "Registration and practical setup",
    body:
      "Address registration, BSN, and day-one services set facts that often sit next to tax questions — helpful admin context, not a complete residency answer on its own.",
    links: [
      { label: "Municipality registration", href: MOVE.municipality },
      { label: "BSN registration", href: MOVE.bsn },
      { label: "Arrival planner", href: MOVE.arrivalPlanner },
      { label: "First 90 days planner", href: MOVE.first90 },
    ],
  },
  {
    number: 3,
    title: "Work and payroll setup",
    body:
      "Contract, employer / payroll entity, and withholding determine what hits your payslip — align vocabulary with how taxes work once you have real slips.",
    links: [
      { label: "How taxes work in the Netherlands", href: G.howTaxesWorkInNl },
      { label: "Payslip decoder", href: G.payslip },
      { label: "Net salary calculator", href: G.salaryNet },
      { label: "30% ruling calculator", href: G.ruling },
      { label: "Employment type scenarios", href: G.employmentType },
    ],
  },
  {
    number: 4,
    title: "Tax year transition",
    body:
      "Partial years, overlap income, or two countries asking questions are common here — collect dates and documents, then use signals and awareness tools before you assume a headline label.",
    links: [
      { label: "Signals worth checking (this page)", href: "#tax-residency-signals" },
      { label: "Arrival & departure year (this page)", href: "#arrival-departure-year" },
      { label: "Double tax awareness tool", href: G.doubleTax },
    ],
  },
  {
    number: 5,
    title: "Annual tax return",
    body:
      "Withholding is a running estimate; the return can still bring in deductions, household, assets, and cross-border lines when your year was not simple.",
    links: [
      { label: "How taxes work — return framing", href: G.howTaxesWorkInNl },
      { label: "Netherlands tax guide for expats", href: G.taxGuideForExpats },
      { label: "Expat taxes in the Netherlands", href: G.expatTaxesGuide },
    ],
  },
  {
    number: 6,
    title: "Ongoing checks: family, assets, work location, status changes",
    body:
      "Later years still move: remote patterns, assets abroad, household changes, and immigration events — a light rhythm of check-ins beats guessing once a year.",
    links: [
      { label: "Signals worth checking (this page)", href: "#tax-residency-signals" },
      { label: "Status changes in the Netherlands", href: MOVE.statusChanges },
      { label: "Extensions & changes", href: MOVE.extensions },
      { label: "Double tax awareness tool", href: G.doubleTax },
      { label: "Childcare cost estimator", href: G.childcare },
    ],
  },
];

export type TaxResidencyJourneyFlowProps = {
  /** Override for tests or A/B copy; defaults to the NL tax residency journey. */
  steps?: readonly TaxResidencyJourneyStep[];
  className?: string;
};

/**
 * Vertical timeline of tax-residency-relevant stages — mobile-first (no cramped horizontal row on small viewports).
 */
export function TaxResidencyJourneyFlow({ steps = taxResidencyJourneyFlowDefaultSteps, className }: TaxResidencyJourneyFlowProps) {
  const n = steps.length;

  return (
    <ol className={cn("m-0 flex list-none flex-col gap-6 p-0 sm:gap-8", className)} aria-label="Tax residency journey steps">
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
                className="mt-2 min-h-[1.25rem] w-0.5 flex-1 bg-gradient-to-b from-brand/35 via-brand/15 to-border/50"
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
            {step.examples && step.examples.length > 0 ? (
              <div className="mt-3 rounded-xl border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/30">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Examples</p>
                <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-foreground-muted sm:text-sm" role="list">
                  {step.examples.map((example) => (
                    <li key={example} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
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
