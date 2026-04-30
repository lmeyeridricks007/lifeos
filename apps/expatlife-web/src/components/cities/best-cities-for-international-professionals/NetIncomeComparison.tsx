import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { citiesBestForExpatsRoutes as R } from "../best-cities-for-expats/config/citiesBestForExpats.routes";
import type { NetIncomeComparisonExample } from "./config/citiesIntlProfNetIncomeComparison.config";
import { citiesIntlProfNetIncomeEquationLabels } from "./config/citiesIntlProfNetIncomeComparison.config";

const EQ = citiesIntlProfNetIncomeEquationLabels;

function EquationStrip() {
  const steps = [EQ.salary, EQ.tax, EQ.rent, EQ.transport] as const;
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1.5 rounded-2xl border border-border/80 bg-surface-muted/40 px-2.5 py-3 text-center text-xs font-semibold text-foreground shadow-sm ring-1 ring-border/30 sm:gap-x-2 sm:gap-y-2 sm:px-5 sm:py-5 sm:text-sm"
      role="img"
      aria-label={`${EQ.salary} minus ${EQ.tax} minus ${EQ.rent} minus ${EQ.transport} equals approximate monthly disposable income after those costs.`}
    >
      {steps.map((label, i) => (
        <span key={label} className="flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2">
          {i > 0 ? (
            <span className="text-lg font-bold text-foreground-muted tabular-nums" aria-hidden>
              −
            </span>
          ) : null}
          <span className="rounded-lg bg-surface-raised px-2.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-foreground-muted ring-1 ring-border/50 sm:px-3 sm:text-[11px] sm:tracking-[0.1em]">
            {label}
          </span>
        </span>
      ))}
      <span className="text-lg font-bold text-foreground-muted" aria-hidden>
        =
      </span>
      <span className="rounded-lg bg-brand/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-brand-strong ring-1 ring-brand/20 sm:text-[11px]">
        {EQ.result}
      </span>
    </div>
  );
}

function ExampleCard({ example }: { example: NetIncomeComparisonExample }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-6",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Illustrative snapshot</p>
      <h3 className="mt-2 min-h-[1.75rem] text-lg font-bold leading-tight tracking-tight text-foreground">{example.city}</h3>
      <div className="mt-4 space-y-1.5 sm:mt-5">
        {/* Label row: same structure on every card so “Left / month” lines up when cards are side-by-side */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Gross (annual)</p>
          </div>
          <div className="w-9 shrink-0 sm:w-10" aria-hidden />
          <div className="min-w-0 flex-1 text-right sm:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Left / month</p>
          </div>
        </div>
        {/* Values row: baseline-align figures + arrow so the strip is stable across cities */}
        <div className="flex min-w-0 items-baseline gap-2 sm:gap-3">
          <p className="min-w-0 flex-1 text-2xl font-bold tabular-nums leading-none tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {example.grossAnnual}
          </p>
          <span className="shrink-0 translate-y-px text-xl font-light leading-none text-foreground-faint sm:text-2xl" aria-hidden>
            →
          </span>
          <div className="min-w-0 flex-1 rounded-xl border border-brand/25 bg-brand/5 px-3 py-2.5 ring-1 ring-brand/15 sm:px-4 sm:py-3">
            <p className="text-xl font-bold tabular-nums leading-none tracking-tight text-brand-strong sm:text-2xl md:text-3xl">{example.monthlyDisposable}</p>
          </div>
        </div>
      </div>
      <BoldParagraph
        text={example.context}
        className="mt-3 text-[13px] leading-snug text-foreground-muted sm:mt-4 sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
      />
    </article>
  );
}

type NetIncomeComparisonProps = {
  examples: readonly NetIncomeComparisonExample[];
  className?: string;
};

/**
 * Stacked **illustrative** gross → disposable snapshots for career-led city choice.
 * Not payroll output — run the Dutch salary (net) and rent tools on your own offer and lease.
 */
export function NetIncomeComparison({ examples, className }: NetIncomeComparisonProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <EquationStrip />
      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {examples.map((ex) => (
          <ExampleCard key={ex.id} example={ex} />
        ))}
      </div>
      <div className="rounded-xl border border-border/70 bg-surface-muted/30 px-3 py-3 text-[11px] leading-snug text-foreground-muted ring-1 ring-border/40 sm:px-4 sm:py-3.5 sm:text-sm sm:leading-relaxed">
        <strong className="font-semibold text-foreground">Salary ≠ money you keep.</strong> Tax residency, 30% ruling eligibility,
        actual rent, and commute mode move the line more than a gross headline.{" "}
        <Link href={R.dutchSalaryNetCalculator} className="font-semibold text-link hover:underline">
          Dutch salary (net) calculator
        </Link>
        {" · "}
        <Link href={R.rentAffordability} className="font-semibold text-link hover:underline">
          Rent affordability
        </Link>
        {" · "}
        <Link href={R.costOfLiving} className="font-semibold text-link hover:underline">
          Cost of living
        </Link>
        .
      </div>
    </div>
  );
}
