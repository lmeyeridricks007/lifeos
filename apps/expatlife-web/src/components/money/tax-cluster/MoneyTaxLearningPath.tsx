import Link from "next/link";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  DOUBLE_TAX_AWARENESS_HREF,
  EXPAT_TAXES_NL_HREF,
  HOW_TAXES_WORK_IN_NL_HREF,
  TAX_ADVISORS_EXPATS_HREF,
  TAX_GUIDE_FOR_EXPATS_HREF,
  TAX_RESIDENCY_NL_HREF,
  TAX_RETURN_NL_HREF,
  TAXES_TOOLS_HREF,
} from "./taxClusterToolsConfig";

export type MoneyTaxLearningPathStep = 1 | 2 | 3 | 4 | 5;

type LearningPathStepDef = {
  step: MoneyTaxLearningPathStep;
  title: string;
  href: string;
  blurb: string;
  secondary?: { href: string; label: string };
};

const STEPS: readonly LearningPathStepDef[] = [
  {
    step: 1,
    title: "Learn how Dutch taxes work",
    href: HOW_TAXES_WORK_IN_NL_HREF,
    blurb: "Shortest system map — payroll, annual return, boxes, and how credits differ from allowances. Not expat-specific yet.",
  },
  {
    step: 2,
    title: "Understand expat-specific tax situations",
    href: EXPAT_TAXES_NL_HREF,
    blurb: "Scenario-first page for partial years, foreign assets, ruling, allowances, and double tax — then widen context when you need the full map.",
    secondary: { href: TAX_GUIDE_FOR_EXPATS_HREF, label: "Netherlands Tax Guide for Expats (broader map) →" },
  },
  {
    step: 3,
    title: "Check tax residency / cross-border risks",
    href: TAX_RESIDENCY_NL_HREF,
    blurb: "Facts-over-time and ties — vocabulary before you treat filing as salary-only or skip foreign lines.",
    secondary: { href: DOUBLE_TAX_AWARENESS_HREF, label: "Double tax awareness tool (checklist) →" },
  },
  {
    step: 4,
    title: "Prepare for tax return",
    href: TAX_RETURN_NL_HREF,
    blurb: "Dedicated return orientation — prep, payroll vs filing, and when expat facts add sections. Not a filing portal.",
  },
  {
    step: 5,
    title: "Use tools or tax support where needed",
    href: TAXES_TOOLS_HREF,
    blurb: "Calculators and estimators when numbers help. Editorial tax-advisors guide only if you may compare paid help — optional, not a default.",
    secondary: { href: TAX_ADVISORS_EXPATS_HREF, label: "When to consider tax help (guide) →" },
  },
];

function normalizePath(h: string): string {
  const t = h.trim();
  if (t.endsWith("/")) return t.slice(0, -1);
  return t;
}

function hrefMatches(a: string, b: string): boolean {
  return normalizePath(a) === normalizePath(b);
}

function stepIsHere(step: LearningPathStepDef, activeHref?: string, currentStep?: MoneyTaxLearningPathStep): boolean {
  if (activeHref) {
    if (hrefMatches(step.href, activeHref)) return true;
    if (step.secondary && hrefMatches(step.secondary.href, activeHref)) return true;
    return false;
  }
  if (currentStep !== undefined) return step.step === currentStep;
  return false;
}

type MoneyTaxLearningPathProps = {
  /** Highlights the step matching this URL (primary or secondary). Takes precedence over `currentStep`. */
  activeHref?: string;
  /** Fallback “you are here” when `activeHref` is not set. */
  currentStep?: MoneyTaxLearningPathStep;
  variant?: "full" | "compact";
  className?: string;
  id?: string;
};

/**
 * Shared Money → Tax cluster sequence: foundation → expat guides → residency → annual return → tools & help.
 */
export function MoneyTaxLearningPath({ activeHref, currentStep, variant = "full", className, id }: MoneyTaxLearningPathProps) {
  const compact = variant === "compact";

  if (compact) {
    return (
      <nav
        id={id}
        aria-label="Tax learning path"
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-copilot-bg-soft/80 via-white to-brand-muted/20 p-4 shadow-sm ring-1 ring-copilot-primary/[0.06] sm:p-5",
          className
        )}
      >
        <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Tax learning path</p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Follow the five steps in order — foundation, expat scenarios, residency, return prep, then tools or support.
            </p>
          </div>
        </div>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5" role="list">
          {STEPS.map((s) => {
            const here = stepIsHere(s, activeHref, currentStep);
            return (
              <li key={s.step} className="min-w-0">
                <article
                  className={cn(
                    "flex h-full min-w-0 flex-col rounded-2xl border p-3 shadow-sm transition-colors sm:p-3.5",
                    here
                      ? "border-copilot-primary/35 bg-white ring-2 ring-copilot-primary/18"
                      : "border-border/70 bg-white/80 ring-1 ring-border/30 hover:border-copilot-primary/25 hover:bg-white",
                    movingNlCardMicroLiftClass
                  )}
                >
                  <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                      here ? "bg-copilot-primary text-white shadow-sm" : "bg-brand/10 text-brand-strong ring-1 ring-brand/15"
                    )}
                    aria-current={here ? "step" : undefined}
                  >
                    {s.step}
                  </span>
                    {here ? (
                      <span className="rounded-full bg-copilot-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-copilot-primary">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-2 min-w-0 leading-snug">
                    {here ? (
                      <span className="text-sm font-semibold text-copilot-text-primary">{s.title}</span>
                    ) : (
                      <Link href={s.href} className="text-sm font-semibold text-copilot-primary hover:underline">
                        {s.title}
                      </Link>
                    )}
                    {s.secondary ? (
                      <p className="mt-1 text-[11px] leading-snug text-copilot-text-muted">
                        <Link href={s.secondary.href} className="font-semibold text-copilot-primary hover:underline">
                          {s.secondary.label}
                        </Link>
                      </p>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 md:scroll-mt-32",
        "relative overflow-hidden rounded-2xl border border-copilot-primary/12 bg-gradient-to-br from-copilot-bg-soft/90 via-surface-raised to-brand-muted/20 p-5 shadow-card ring-1 ring-copilot-primary/[0.07] sm:p-6",
        className
      )}
      aria-labelledby="money-tax-learning-path-heading"
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <h2 id="money-tax-learning-path-heading" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
        Tax learning path
      </h2>
      <p className="mt-1 text-sm text-foreground-muted">
        Shared Money → Tax cluster order: each page keeps its own depth — this path only shows where to start and what to open next without duplicating full guides.
      </p>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5" role="list">
        {STEPS.map((s) => {
          const here = stepIsHere(s, activeHref, currentStep);
          return (
            <li key={s.step} className="min-w-0">
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl border p-4 shadow-sm sm:p-4",
                  here
                    ? "border-copilot-primary/35 bg-white ring-2 ring-copilot-primary/20"
                    : "border-border/80 bg-white/90 ring-1 ring-border/40",
                  movingNlCardMicroLiftClass
                )}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                <div className="flex items-center gap-2 pt-0.5">
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      here ? "bg-copilot-primary text-white" : "bg-brand/15 text-brand-strong"
                    )}
                    aria-hidden
                  >
                    {s.step}
                  </span>
                  {here ? (
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-copilot-primary">You are here</span>
                  ) : null}
                </div>
                {here ? (
                  <p className="mt-2 text-sm font-semibold leading-snug text-foreground">{s.title}</p>
                ) : (
                  <Link href={s.href} className="mt-2 text-sm font-semibold leading-snug text-link hover:underline">
                    {s.title}
                  </Link>
                )}
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-[13px]">{s.blurb}</p>
                {s.secondary ? (
                  <p className="mt-2 text-xs font-semibold text-copilot-primary">
                    <Link href={s.secondary.href} className="hover:underline">
                      {s.secondary.label}
                    </Link>
                  </p>
                ) : null}
                {!here ? (
                  <p className="mt-3 text-xs font-semibold text-copilot-primary">
                    <Link href={s.href} className="hover:underline">
                      Open →
                    </Link>
                  </p>
                ) : null}
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
