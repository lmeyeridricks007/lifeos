import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CalendarClock,
  ClipboardCheck,
  FileSpreadsheet,
  Home,
  Laptop,
  Plane,
  Scale,
  ShieldCheck,
  Stamp,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { taxInstructionalRasterAssets } from "@/src/components/money/tax-cluster/taxInstructionalRasterAssets";

/** Stands off the moving-pillar `copilot-surface` panel so diagrams read as real visuals. */
const shell = cn(
  "relative overflow-hidden rounded-2xl border-2 border-slate-300/90 bg-white p-4 shadow-lg ring-2 ring-slate-200/70 sm:p-5"
);

function StepCard({
  index,
  title,
  body,
  Icon,
}: {
  index: number;
  title: string;
  body: string;
  Icon: LucideIcon;
}) {
  return (
    <div className="relative flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:p-4">
      <div className="flex items-start gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/12 text-sm font-bold text-brand-strong ring-1 ring-brand/20">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <h4 className="text-sm font-bold leading-snug tracking-tight text-foreground">{title}</h4>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-[13px]">{body}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Read left-to-right: money and data through the Dutch system (high level, no rates).
 */
export function TaxMoneyFlowPipelineFigure({ className }: { className?: string }) {
  const steps: { title: string; body: string; Icon: LucideIcon }[] = [
    {
      title: "Income is reported during the year",
      body: "Employers, banks, and institutions send data to the Belastingdienst. Your payslip is the part you see every month.",
      Icon: Wallet,
    },
    {
      title: "Payroll withholds wage tax",
      body: "Each pay run, wage tax and premiums are withheld. That is a running estimate — not the final annual answer.",
      Icon: FileSpreadsheet,
    },
    {
      title: "After year-end, the return pre-fills",
      body: "Much of the return arrives pre-filled online. Your job is to check, add missing items, and apply the right boxes.",
      Icon: Laptop,
    },
    {
      title: "Filing closes the loop",
      body: "Submitting reconciles the year: you may get a refund, owe more, or land near zero. Credits and allowances are decided here too.",
      Icon: ClipboardCheck,
    },
  ];

  return (
    <section
      className={cn(shell, "mb-6 sm:mb-7", className)}
      aria-labelledby="tax-money-flow-pipeline-heading"
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">How to read the system</p>
      <h3 id="tax-money-flow-pipeline-heading" className="mt-2 text-base font-bold tracking-tight text-foreground sm:text-lg">
        From payslips to the annual return (same tax year, two rhythms)
      </h3>
      <InstructionalRasterFigure
        raster={taxInstructionalRasterAssets.moneyFlow}
        caption="One year of data: reported income → monthly holds → you complete the online return → outcome."
      />
      <ol className="mt-4 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4" role="list">
        {steps.map((s, i) => (
          <li key={s.title}>
            <StepCard index={i + 1} title={s.title} body={s.body} Icon={s.Icon} />
          </li>
        ))}
      </ol>
    </section>
  );
}

/**
 * Calendar-oriented strip: what happens during the year vs after December.
 */
export function TaxYearActivityStripFigure({ className }: { className?: string }) {
  const lanes = [
    {
      title: "During the calendar year",
      Icon: CalendarClock,
      bullets: ["Employer withholds from salary", "You live with the cash-flow result on payslips", "Big life changes update what the return will need later"],
    },
    {
      title: "After the year ends",
      Icon: FileSpreadsheet,
      bullets: ["Income statements and letters arrive", "The online return fills with known data", "You verify, add missing pieces, then submit in the filing window"],
    },
  ] as const;

  return (
    <section className={cn(shell, "mb-6 sm:mb-7", className)} aria-labelledby="tax-year-activity-strip-heading">
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Timing</p>
      <h3 id="tax-year-activity-strip-heading" className="mt-2 text-base font-bold tracking-tight text-foreground sm:text-lg">
        Monthly payroll vs. the once-a-year reconciliation
      </h3>
      <InstructionalRasterFigure
        raster={taxInstructionalRasterAssets.yearLanes}
        caption="Left: what happens each month on payroll. Right: what shifts once the year is closed."
      />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {lanes.map((lane) => (
          <div key={lane.title} className="rounded-xl border border-border/70 bg-white/95 p-4 ring-1 ring-border/15">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-strong ring-1 ring-brand/20">
                <lane.Icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-sm font-bold text-foreground">{lane.title}</p>
            </div>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-foreground-muted sm:text-[13px]" role="list">
              {lane.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Concrete filing sequence (instructional — not legal advice).
 */
export function TaxReturnFilingStepsFigure({ className }: { className?: string }) {
  const steps: { title: string; body: string; Icon: LucideIcon }[] = [
    {
      title: "Collect letters and totals",
      body: "Annual statements, mortgage year statements, foreign income summaries — whatever matches your situation.",
      Icon: FileSpreadsheet,
    },
    {
      title: "Open the personal return online",
      body: "Use the official flow you already use for Dutch government services (DigiD-level access is the norm).",
      Icon: Laptop,
    },
    {
      title: "Walk box-by-box, then hunt mismatches",
      body: "Confirm pre-filled lines, add missing income and deductions, and fix anything that does not match your records.",
      Icon: ClipboardCheck,
    },
    {
      title: "Submit before the deadline",
      body: "Keep the assessment notice when it arrives; pay or challenge on time if you disagree with an outcome.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <section className={cn(shell, "mb-6 sm:mb-7", className)} aria-labelledby="tax-return-filing-steps-heading">
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Checklist-style map</p>
      <h3 id="tax-return-filing-steps-heading" className="mt-2 text-base font-bold tracking-tight text-foreground sm:text-lg">
        A practical order for doing the return
      </h3>
      <InstructionalRasterFigure
        raster={taxInstructionalRasterAssets.returnSteps}
        caption="Do these in order: paperwork first, then the portal, then corrections, then submit."
      />
      <ol className="mt-4 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4" role="list">
        {steps.map((s, i) => (
          <li key={s.title}>
            <StepCard index={i + 1} title={s.title} body={s.body} Icon={s.Icon} />
          </li>
        ))}
      </ol>
    </section>
  );
}

/**
 * Fiscal residency vs immigration — instructional labels only.
 */
export function TaxResidencyFactsVsPermitFigure({ className }: { className?: string }) {
  return (
    <section className={cn(shell, "mb-6 sm:mb-7", className)} aria-labelledby="tax-residency-facts-vs-permit-heading">
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Two different questions</p>
      <h3 id="tax-residency-facts-vs-permit-heading" className="mt-2 text-base font-bold tracking-tight text-foreground sm:text-lg">
        Tax residency (facts over time) vs residence permits (rules on stay)
      </h3>
      <InstructionalRasterFigure
        raster={taxInstructionalRasterAssets.residencySplit}
        caption="Tax side: where life and income are centered. Immigration side: permission to stay — related, not identical."
      />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-brand/20 bg-brand/[0.06] p-4 ring-1 ring-brand/15">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
            <h4 className="text-sm font-bold text-foreground">Fiscal residency (tax)</h4>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-[13px]">
            Looks at where your <strong className="text-foreground">home, family, and economic life</strong> are centered across the year, plus days present and treaties when
            countries could both claim you.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-foreground-muted sm:text-[13px]" role="list">
            <li className="flex gap-2">
              <Home className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
              <span>Where you actually live and return to between trips</span>
            </li>
            <li className="flex gap-2">
              <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
              <span>Where work and income are anchored</span>
            </li>
            <li className="flex gap-2">
              <Plane className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
              <span>Cross-border days and ties when you split time</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-4 ring-1 ring-border/40">
          <div className="flex items-center gap-2">
            <Stamp className="h-5 w-5 shrink-0 text-foreground-muted" aria-hidden />
            <h4 className="text-sm font-bold text-foreground">Immigration status (stay rules)</h4>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-[13px]">
            Answers whether you <strong className="text-foreground">may live or work in the Netherlands under immigration law</strong>. It supports BSN, employer checks, and police registration — it does not by itself pick your tax country.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-foreground-muted sm:text-[13px]" role="list">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
              <span>Permit type, validity dates, and work restrictions</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
              <span>Gemeente registration and ID documents</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-muted" aria-hidden />
              <span>Not a substitute for a tax treaty or days test when two states overlap</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * Three lanes expats use to orient (not exhaustive scenarios).
 */
export function TaxExpatScenarioLanesFigure({ className }: { className?: string }) {
  const lanes = [
    {
      title: "First year in NL",
      body: "Priority: BSN, bank, payroll setup, and learning which letters matter for next year’s return.",
      Icon: Plane,
    },
    {
      title: "Settled filing each year",
      body: "Priority: pre-filled return review, box choices, cross-border income, and allowances you actually qualify for.",
      Icon: Home,
    },
    {
      title: "Leaving or split year",
      body: "Priority: move dates, residency end, foreign work, and which country gets which slice of income.",
      Icon: CalendarClock,
    },
  ] as const;

  return (
    <section className={cn(shell, "mb-6 sm:mb-7", className)} aria-labelledby="tax-expat-scenario-lanes-heading">
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Pick your lane</p>
      <h3 id="tax-expat-scenario-lanes-heading" className="mt-2 text-base font-bold tracking-tight text-foreground sm:text-lg">
        What to focus on depends on where you are in the move
      </h3>
      <InstructionalRasterFigure
        raster={taxInstructionalRasterAssets.expatLanes}
        caption="Three common situations expats use to decide what to read and do next."
      />
      <ul className="mt-4 grid list-none gap-3 p-0 md:grid-cols-3" role="list">
        {lanes.map((lane) => (
          <li key={lane.title}>
            <div className="flex h-full flex-col rounded-xl border border-border/70 bg-white/95 p-4 shadow-sm ring-1 ring-border/15">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-strong ring-1 ring-brand/20">
                <lane.Icon className="h-5 w-5" aria-hidden />
              </span>
              <h4 className="mt-3 text-sm font-bold text-foreground">{lane.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-[13px]">{lane.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
