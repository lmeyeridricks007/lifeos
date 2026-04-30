import { ClipboardCheck, FileSearch, MessageSquareText, ReceiptText } from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

const advisorFlow = [
  {
    title: "Do the first scan",
    body: "Use tools and official pages to name the question before you pay someone.",
    icon: FileSearch,
  },
  {
    title: "Package the facts",
    body: "Dates, payslips, assets, partner details, and foreign income make advice faster.",
    icon: ClipboardCheck,
  },
  {
    title: "Ask for scope",
    body: "Clarify whether you need filing, review, 30% ruling context, or cross-border advice.",
    icon: MessageSquareText,
  },
  {
    title: "Keep the record",
    body: "Save the engagement scope, submission proof, and final tax assessment together.",
    icon: ReceiptText,
  },
] as const;

export function TaxAdvisorConceptGraphic({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-surface-muted/45 via-surface-raised to-surface-muted/30 p-5 shadow-sm ring-1 ring-border/20 sm:p-6",
        className
      )}
      aria-labelledby="tax-advisor-concept-graphic-heading"
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="grid gap-5 lg:grid-cols-[minmax(220px,0.34fr)_minmax(0,1fr)] lg:items-center">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Decision picture</p>
          <h2 id="tax-advisor-concept-graphic-heading" className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Paid tax help works best after you can name the job
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            This guide should help users move from a vague worry to a scoped question: what needs checking, what documents matter, and what kind of provider fit is reasonable.
          </p>
        </div>

        <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Tax advisor decision flow">
          {advisorFlow.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="min-w-0">
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
                      <h3 className="mt-1 text-sm font-bold tracking-tight text-foreground">{step.title}</h3>
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
  );
}
