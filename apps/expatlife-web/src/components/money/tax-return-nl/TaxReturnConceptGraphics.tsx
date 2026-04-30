import { ArrowRight, BriefcaseBusiness, CalendarCheck2, FileCheck2, FolderOpen, Globe2, Home, Landmark, ReceiptText, UsersRound } from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

type TextCard = {
  id: string;
  title: string;
  body: string;
};

type PayrollVsReturnGraphicProps = {
  contrastStrip: {
    payrollLabel: string;
    payrollLine: string;
    returnLabel: string;
    returnLine: string;
  };
  intro: string;
  comparison: readonly TextCard[];
};

const returnFlow = [
  { title: "During the year", body: "Employer withholds wage tax from salary.", icon: BriefcaseBusiness },
  { title: "After year-end", body: "Annual statements and prefilled data appear.", icon: FolderOpen },
  { title: "Return review", body: "You confirm, correct, or add what applies.", icon: FileCheck2 },
  { title: "Assessment", body: "The result can be pay, refund, or no change.", icon: ReceiptText },
] as const;

const boxIcons = [BriefcaseBusiness, Landmark, Globe2] as const;

export function TaxReturnPayrollReconciliationGraphic({
  contrastStrip,
  intro,
  comparison,
}: PayrollVsReturnGraphicProps) {
  return (
    <div className="space-y-5">
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-surface-muted/45 via-surface-raised to-surface-muted/30 p-5 shadow-sm ring-1 ring-border/20 sm:p-6">
        <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Visual model</p>
            <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-xl">Payroll is monthly; the return checks the year</h3>
            <BoldParagraph text={intro} className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <article className="rounded-2xl border border-brand/15 bg-brand/[0.06] p-4 ring-1 ring-brand/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{contrastStrip.payrollLabel}</p>
                <BoldParagraph text={contrastStrip.payrollLine} className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
              </article>
              <article className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 ring-1 ring-slate-900/[0.04]">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">{contrastStrip.returnLabel}</p>
                <BoldParagraph text={contrastStrip.returnLine} className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
              </article>
            </div>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2" aria-label="Tax return reconciliation flow">
            {returnFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="relative min-w-0">
                  <article
                    className={cn(
                      "flex h-full min-w-0 flex-col rounded-2xl border border-border/70 bg-white/90 p-4 shadow-sm ring-1 ring-border/15",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand-strong ring-1 ring-brand/20">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Step {index + 1}</span>
                        <h4 className="mt-1 text-sm font-bold tracking-tight text-foreground">{step.title}</h4>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-3">
        {comparison.map((item) => (
          <article
            key={item.id}
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface-raised p-4 shadow-sm ring-1 ring-border/20",
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <p className="pt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{item.title}</p>
            <BoldParagraph text={item.body} className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
          </article>
        ))}
      </div>
    </div>
  );
}

export function TaxReturnBoxRouteGraphic({
  intro,
  cards,
}: {
  intro: string;
  cards: readonly TextCard[];
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-surface-muted/45 via-surface-raised to-surface-muted/30 p-5 shadow-sm ring-1 ring-border/20 sm:p-6">
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="grid gap-5 lg:grid-cols-[minmax(220px,0.32fr)_minmax(0,1fr)] lg:items-center">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Return routing</p>
          <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-xl">Different facts land in different places</h3>
          <BoldParagraph text={intro} className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
        </div>
        <ol className="grid gap-3 md:grid-cols-3" aria-label="Tax return box routing">
          {cards.map((card, index) => {
            const Icon = boxIcons[index] ?? Landmark;
            return (
              <li key={card.id} className="relative min-w-0">
                <article
                  className={cn(
                    "flex h-full min-w-0 flex-col rounded-2xl border border-border/70 bg-white/90 p-4 shadow-sm ring-1 ring-border/15",
                    movingNlCardMicroLiftClass
                  )}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand-strong ring-1 ring-brand/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h4 className="mt-3 text-sm font-bold tracking-tight text-foreground">{card.title}</h4>
                  <BoldParagraph text={card.body} className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                </article>
                {index < cards.length - 1 ? (
                  <ArrowRight className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-foreground-faint md:block" aria-hidden />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function TaxReturnLifeEventGraphic({
  partnerBody,
  partnerBullets,
  foreignBody,
}: {
  partnerBody: string;
  partnerBullets: readonly string[];
  foreignBody: string;
}) {
  const lanes = [
    {
      title: "Household and partner",
      eyebrow: "Family lane",
      body: partnerBody,
      bullets: partnerBullets,
      icon: UsersRound,
    },
    {
      title: "Foreign income and assets",
      eyebrow: "Cross-border lane",
      body: foreignBody,
      bullets: ["Foreign salary or workdays can change the questions.", "Foreign property, investments, or accounts may need review.", "Double-tax relief depends on the facts and treaty context."],
      icon: Globe2,
    },
  ] as const;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-surface-muted/45 via-surface-raised to-surface-muted/30 p-5 shadow-sm ring-1 ring-border/20 sm:p-6">
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="grid gap-3 md:grid-cols-2">
        {lanes.map((lane) => {
          const Icon = lane.icon;
          return (
            <article
              key={lane.title}
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-white/90 p-4 shadow-sm ring-1 ring-border/20 sm:p-5",
                movingNlCardMicroLiftClass
              )}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand-strong ring-1 ring-brand/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">{lane.eyebrow}</p>
                  <h3 className="mt-1 text-base font-bold tracking-tight text-foreground">{lane.title}</h3>
                </div>
              </div>
              <BoldParagraph text={lane.body} className="mt-3 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
              <ul className="mt-4 space-y-1.5 border-t border-border/70 pt-3 text-sm text-foreground-muted" role="list">
                {lane.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={bullet} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <div className="mt-3 rounded-xl border border-brand/15 bg-brand/[0.05] px-4 py-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-brand/10">
        <span className="font-semibold text-foreground">Use the picture like a filter:</span> if either lane applies, slow down before submitting and check the related guide or official source.
      </div>
    </section>
  );
}

export function TaxReturnYearTimelineGraphic() {
  const points = [
    { label: "Arrival or departure", body: "Part-year situations can change forms and dates.", icon: CalendarCheck2 },
    { label: "Home and household", body: "Partner, mortgage, and family details can affect filing.", icon: Home },
    { label: "Work and income", body: "Payroll, self-employment, or foreign income add lines to review.", icon: BriefcaseBusiness },
    { label: "Submit and assess", body: "Keep the final assessment with your records.", icon: ReceiptText },
  ] as const;

  return (
    <div className="rounded-2xl border border-indigo-200/80 bg-white/80 p-4 ring-1 ring-indigo-900/[0.05] sm:p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-900/70">Year view</p>
      <ol className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4" aria-label="Tax return year view">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <li key={point.label} className="rounded-xl border border-indigo-200/70 bg-indigo-50/60 p-3">
              <Icon className="h-5 w-5 text-indigo-700" aria-hidden />
              <p className="mt-2 text-sm font-bold text-indigo-950">{point.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-indigo-950/75">{point.body}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
