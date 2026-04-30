import { ArrowRight, Banknote, CalendarCheck2, FileCheck2, Landmark, ReceiptText, WalletCards } from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

type TextCard = {
  id: string;
  title: string;
  body: string;
  examples?: readonly string[];
};

type TimingLane = TextCard & {
  kicker: string;
};

const payrollFlow = [
  { label: "Salary run", detail: "Employer calculates the month", icon: Banknote },
  { label: "Withholding", detail: "Tax and premiums are held back", icon: ReceiptText },
  { label: "Payslip", detail: "You see cash flow and line items", icon: FileCheck2 },
] as const;

export function PayrollReturnInfographic({
  timingHighlight,
  intro,
  comparison,
}: {
  timingHighlight: readonly TimingLane[];
  intro: string;
  comparison: readonly TextCard[];
}) {
  return (
    <div className="space-y-5">
      <section
        className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-copilot-bg-soft/80 via-white to-brand-muted/20 p-5 shadow-card ring-1 ring-border/30 sm:p-6"
        aria-label="Payroll withholding and annual tax return visual explainer"
      >
        <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-stretch">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Visual model</p>
            <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-xl">Monthly withholding is not the whole tax year</h3>
            <BoldParagraph
              text={intro}
              className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
            />

            <ol className="mt-5 grid gap-3 sm:grid-cols-3" role="list" aria-label="Payroll flow">
              {payrollFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.label} className="relative min-w-0">
                    <div className="h-full rounded-2xl border border-border/70 bg-white/90 p-4 shadow-sm ring-1 ring-border/20">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand-strong ring-1 ring-brand/20">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <p className="mt-3 text-sm font-bold text-foreground">{step.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-foreground-muted">{step.detail}</p>
                    </div>
                    {index < payrollFlow.length - 1 ? (
                      <ArrowRight className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-foreground-faint sm:block" aria-hidden />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex min-w-0 flex-col rounded-2xl border border-brand/15 bg-brand/[0.06] p-4 ring-1 ring-brand/10 sm:p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-strong shadow-sm ring-1 ring-brand/20">
                <CalendarCheck2 className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">After the year</p>
                <h4 className="mt-1 text-base font-bold tracking-tight text-foreground">Annual return reconciles the full picture</h4>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {timingHighlight.map((lane) => (
                <div key={lane.id} className="rounded-xl border border-border/70 bg-white/85 p-3 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{lane.kicker}</p>
                  <h5 className="mt-1 text-sm font-semibold text-foreground">{lane.title}</h5>
                  <BoldParagraph text={lane.body} className="mt-1 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-3">
        {comparison.map((item) => (
          <article
            key={item.id}
            className={cn(
              "relative h-full overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{item.title}</p>
            <BoldParagraph text={item.body} className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
          </article>
        ))}
      </div>
    </div>
  );
}

const leverIcons = [Landmark, FileCheck2, WalletCards] as const;

export function CreditsDeductionsAllowancesGraphic({ items }: { items: readonly TextCard[] }) {
  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-surface-muted/60 via-white to-copilot-bg-soft/60 p-5 shadow-card ring-1 ring-border/30 sm:p-6"
      aria-label="Tax credits deductions and allowances concept visual"
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="grid gap-5 lg:grid-cols-[minmax(220px,0.35fr)_minmax(0,1fr)] lg:items-center">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Three levers</p>
          <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground sm:text-xl">Similar words, different places in the system</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            Use this visual before the details: one item can change taxable income, another can reduce tax due, and allowances can live in a separate benefit portal.
          </p>
        </div>
        <ol className="grid gap-3 sm:grid-cols-3" role="list">
          {items.map((item, index) => {
            const Icon = leverIcons[index] ?? Landmark;
            return (
              <li key={item.id} className="min-w-0">
                <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-white/90 p-4 shadow-sm ring-1 ring-border/20">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/10 text-brand-strong ring-1 ring-brand/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h4 className="mt-3 text-sm font-bold tracking-tight text-foreground">{item.title}</h4>
                  <BoldParagraph text={item.body} className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                  {item.examples && item.examples.length > 0 ? (
                    <div className="mt-3 border-t border-border/60 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Examples</p>
                      <ul className="mt-2 space-y-1.5" role="list">
                        {item.examples.map((example) => (
                          <li key={example} className="flex gap-2 text-sm leading-snug text-foreground-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
