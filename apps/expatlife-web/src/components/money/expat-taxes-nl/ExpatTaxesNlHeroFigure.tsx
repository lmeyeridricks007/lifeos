import type { ReactNode } from "react";
import { FileText, Globe2, Percent, Receipt, UserRound } from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

/** Same shell rhythm as `TaxInstructionalFigures` — layered instructional hero, no stock photo. */
const shell = cn(
  "relative overflow-hidden rounded-2xl border-2 border-slate-300/90 bg-gradient-to-b from-white via-slate-50/80 to-white p-4 shadow-lg ring-2 ring-slate-200/70 sm:p-5"
);

function MiniCard({
  label,
  sub,
  children,
  className,
}: {
  label: string;
  sub: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-[88px] flex-col justify-between rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-sm ring-1 ring-slate-900/[0.04] sm:min-h-[96px] sm:p-3.5",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-strong ring-1 ring-brand/20">{children}</span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold leading-tight text-foreground">{label}</p>
          <p className="mt-0.5 text-[10px] leading-snug text-foreground-muted">{sub}</p>
        </div>
      </div>
    </div>
  );
}

function CrossArrow({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-8 w-full text-brand-strong/35 sm:h-10", className)}
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M4 16h88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M84 10l10 6-10 6" fill="currentColor" />
      <path d="M116 8v16M108 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

type ExpatTaxesNlHeroFigureProps = {
  className?: string;
};

/**
 * Layered Money-style diagram: profile, Dutch tax slip, 30% card, Box 3 / foreign, payslip, cross-border flow.
 */
export function ExpatTaxesNlHeroFigure({ className }: ExpatTaxesNlHeroFigureProps) {
  return (
    <section
      className={cn(shell, "m-0", className)}
      aria-labelledby="expat-taxes-nl-hero-visual-title"
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Simple map</p>
      <h2 id="expat-taxes-nl-hero-visual-title" className="mt-1.5 text-sm font-bold tracking-tight text-foreground sm:text-base">
        You → Dutch pay and yearly form topics
      </h2>
      <p className="mt-1 max-w-md text-[11px] leading-snug text-foreground-muted sm:text-xs">
        Picture for learning only — not your personal tax answer.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        <MiniCard label="You" sub="Job & household" className="sm:col-span-1">
          <UserRound className="h-4 w-4" aria-hidden />
        </MiniCard>
        <div className="col-span-2 flex items-center justify-center sm:col-span-1">
          <CrossArrow />
        </div>
        <MiniCard label="Payslip" sub="Tax lines each month" className="sm:col-span-1">
          <Receipt className="h-4 w-4" aria-hidden />
        </MiniCard>

        <MiniCard label="Yearly tax form" sub="End-of-year picture" className="sm:col-span-1">
          <FileText className="h-4 w-4" aria-hidden />
        </MiniCard>
        <MiniCard label="30% ruling" sub="Employer sets up" className="sm:col-span-1">
          <Percent className="h-4 w-4" aria-hidden />
        </MiniCard>
        <MiniCard label="Savings abroad" sub="Yearly form section" className="sm:col-span-1">
          <Globe2 className="h-4 w-4" aria-hidden />
        </MiniCard>
      </div>

      <div className="mt-3 rounded-lg border border-dashed border-brand/25 bg-brand/[0.04] px-3 py-2 text-center text-[10px] font-semibold leading-snug text-brand-strong sm:text-[11px]">
        Arrows across countries mean extra questions — use the tools and official sites, not guesses
      </div>
    </section>
  );
}
