import { ArrowRight, BriefcaseBusiness, Calculator, FileCheck2, Globe2, Home, Landmark, ReceiptText } from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

type TaxConceptVariant = "tax-guide" | "how-taxes-work" | "tax-residency" | "tax-return";

type ConceptStep = {
  title: string;
  body: string;
  icon: typeof BriefcaseBusiness;
};

const variantContent: Record<
  TaxConceptVariant,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    flowLabel: string;
    steps: readonly ConceptStep[];
    sideNotes: readonly string[];
  }
> = {
  "tax-guide": {
    eyebrow: "Visual map",
    title: "How Dutch tax topics connect",
    subtitle: "Use this picture before the detail: payroll handles the month, the return checks the year, and special topics sit around that flow.",
    flowLabel: "Tax guide concept flow",
    steps: [
      { title: "Pay and payroll", body: "Salary is taxed during the year through employer withholding.", icon: BriefcaseBusiness },
      { title: "Annual return", body: "The return checks whether the year still adds up after life changes.", icon: FileCheck2 },
      { title: "Special topics", body: "Ruling, allowances, Box 3, and foreign facts can change what you need to read.", icon: Globe2 },
    ],
    sideNotes: ["30% ruling", "Allowances", "Box 3", "Double-tax questions"],
  },
  "how-taxes-work": {
    eyebrow: "System picture",
    title: "The Dutch tax system in one flow",
    subtitle: "Most confusion clears up when you separate monthly payroll from the annual return and the three income boxes.",
    flowLabel: "How taxes work concept flow",
    steps: [
      { title: "Money comes in", body: "Salary, benefits, business income, savings, or investments start the question.", icon: Landmark },
      { title: "System sorts it", body: "Dutch rules group income into boxes and apply credits, deductions, or allowances.", icon: Calculator },
      { title: "Return reconciles", body: "The annual process compares what was withheld with what the year requires.", icon: ReceiptText },
    ],
    sideNotes: ["Box 1", "Box 2", "Box 3", "Credits vs allowances"],
  },
  "tax-residency": {
    eyebrow: "Residency lens",
    title: "Tax residency is a facts pattern",
    subtitle: "It is not just your permit label. Tax residency looks at where your life, work, home, and ties point over time.",
    flowLabel: "Tax residency concept flow",
    steps: [
      { title: "Life facts", body: "Home, partner, family, registrations, and routines show where life is centred.", icon: Home },
      { title: "Work facts", body: "Employer, workdays, travel rhythm, and remote work add another layer.", icon: BriefcaseBusiness },
      { title: "Country view", body: "When two countries care, treaties and official guidance decide how facts are weighed.", icon: Globe2 },
    ],
    sideNotes: ["Home base", "Workdays", "Family ties", "Treaty checks"],
  },
  "tax-return": {
    eyebrow: "Filing picture",
    title: "What the Dutch tax return actually does",
    subtitle: "Think of the return as a year-end reconciliation, not a second monthly payslip.",
    flowLabel: "Tax return concept flow",
    steps: [
      { title: "Gather documents", body: "Payslips, annual statements, mortgage, partner, and foreign details shape the file.", icon: ReceiptText },
      { title: "Check prefilled data", body: "The portal may know a lot, but you still review what applies to your year.", icon: FileCheck2 },
      { title: "Assessment follows", body: "After submission, the tax authority confirms whether you pay, receive, or simply close the year.", icon: Calculator },
    ],
    sideNotes: ["Documents", "Prefilled data", "Partner details", "Assessment"],
  },
};

export function TaxConceptInfographic({
  variant,
  className,
}: {
  variant: TaxConceptVariant;
  className?: string;
}) {
  const content = variantContent[variant];

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-surface-muted/55 via-surface-raised to-surface-muted/40 p-5 shadow-md ring-1 ring-border/25 sm:p-6",
        className
      )}
      aria-labelledby={`${variant}-concept-infographic-heading`}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.38fr)] lg:items-stretch">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">{content.eyebrow}</p>
          <h2 id={`${variant}-concept-infographic-heading`} className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {content.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">{content.subtitle}</p>

          <ol className="mt-5 grid gap-3 md:grid-cols-3" aria-label={content.flowLabel}>
            {content.steps.map((step, index) => {
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
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand-strong ring-1 ring-brand/20">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                          Step {index + 1}
                        </span>
                        <h3 className="mt-1 text-sm font-bold tracking-tight text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
                  </article>
                  {index < content.steps.length - 1 ? (
                    <ArrowRight
                      className="pointer-events-none absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-foreground-faint md:block"
                      aria-hidden
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>

        <aside className="rounded-2xl border border-brand/15 bg-brand/[0.06] p-4 ring-1 ring-brand/10 sm:p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Keep separate</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-1" role="list">
            {content.sideNotes.map((note) => (
              <li key={note} className="rounded-xl border border-border/60 bg-white/85 px-3 py-2 text-sm font-semibold text-foreground shadow-sm">
                {note}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
