import Link from "next/link";
import {
  Banknote,
  Briefcase,
  CreditCard,
  FileText,
  Globe2,
  Landmark,
  Receipt,
  Send,
  Star,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { BankingFeeCategory } from "@/src/data/banking/bankingFeeCategories";

const linkClass =
  "text-xs sm:text-sm font-medium text-link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 rounded-sm";

const CATEGORY_VISUALS: Record<
  string,
  {
    Icon: LucideIcon;
    label: string;
    iconWrap: string;
    wash: string;
    signal: readonly string[];
  }
> = {
  "monthly-account": {
    Icon: Wallet,
    label: "Fixed monthly",
    iconWrap: "bg-sky-500/12 text-sky-800 ring-sky-400/35",
    wash: "from-sky-50/60 via-white to-copilot-surface",
    signal: ["Fixed", "Package", "Baseline"],
  },
  "debit-extra": {
    Icon: CreditCard,
    label: "Card add-ons",
    iconWrap: "bg-indigo-500/12 text-indigo-800 ring-indigo-400/35",
    wash: "from-indigo-50/55 via-white to-copilot-surface",
    signal: ["Card", "Replacement", "Second user"],
  },
  credit: {
    Icon: Receipt,
    label: "Optional credit",
    iconWrap: "bg-violet-500/12 text-violet-800 ring-violet-400/35",
    wash: "from-violet-50/55 via-white to-copilot-surface",
    signal: ["Annual", "Interest", "Travel"],
  },
  atm: {
    Icon: Landmark,
    label: "Cash access",
    iconWrap: "bg-emerald-500/12 text-emerald-800 ring-emerald-400/35",
    wash: "from-emerald-50/55 via-white to-copilot-surface",
    signal: ["Cash", "Abroad", "Machine fee"],
  },
  fx: {
    Icon: Globe2,
    label: "Currency",
    iconWrap: "bg-cyan-500/12 text-cyan-900 ring-cyan-400/35",
    wash: "from-cyan-50/55 via-white to-copilot-surface",
    signal: ["FX spread", "Travel", "Webshops"],
  },
  "intl-transfer": {
    Icon: Send,
    label: "Cross-border",
    iconWrap: "bg-blue-500/12 text-blue-900 ring-blue-400/35",
    wash: "from-blue-50/55 via-white to-copilot-surface",
    signal: ["Route", "FX", "Received amount"],
  },
  instant: {
    Icon: Zap,
    label: "Speed premium",
    iconWrap: "bg-amber-500/14 text-amber-950 ring-amber-400/35",
    wash: "from-amber-50/60 via-white to-copilot-surface",
    signal: ["Urgent", "Priority", "Special"],
  },
  "premium-plans": {
    Icon: Star,
    label: "Paid tier",
    iconWrap: "bg-rose-500/12 text-rose-900 ring-rose-400/35",
    wash: "from-rose-50/55 via-white to-copilot-surface",
    signal: ["Bundle", "Perks", "Monthly"],
  },
  paper: {
    Icon: FileText,
    label: "Admin",
    iconWrap: "bg-slate-500/12 text-slate-800 ring-slate-400/35",
    wash: "from-slate-50 via-white to-copilot-surface",
    signal: ["Paper", "Archive", "Manual"],
  },
  "business-zzp": {
    Icon: Briefcase,
    label: "Business use",
    iconWrap: "bg-teal-500/12 text-teal-900 ring-teal-400/35",
    wash: "from-teal-50/55 via-white to-copilot-surface",
    signal: ["ZZP", "Volume", "Software"],
  },
};

const fallbackVisual = {
  Icon: Banknote,
  label: "Fee line",
  iconWrap: "bg-brand/10 text-brand-strong ring-brand/25",
  wash: "from-copilot-bg-soft/70 via-white to-copilot-surface",
  signal: ["Fee", "Usage", "Check"],
} satisfies (typeof CATEGORY_VISUALS)[string];

export type BankingFeeCategoryGridProps = {
  categories: readonly BankingFeeCategory[];
  className?: string;
  linkClassName?: string;
};

/**
 * Editorial cost-category cards (monthly fees, cards, ATM, FX, transfers, premium, business, etc.)
 * driven from shared {@link bankingFeeCategories}.
 */
export function BankingFeeCategoryGrid({ categories, className, linkClassName }: BankingFeeCategoryGridProps) {
  return (
    <div className={cn("grid min-w-0 max-w-full gap-4 sm:grid-cols-2 sm:gap-5", className)}>
      {categories.map((cat, index) => {
        const visual = CATEGORY_VISUALS[cat.id] ?? fallbackVisual;
        const Icon = visual.Icon;
        return (
          <article
            key={cat.id}
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b p-0 shadow-sm ring-1 ring-border/15",
              visual.wash,
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 [&>svg]:h-6 [&>svg]:w-6",
                    visual.iconWrap
                  )}
                  aria-hidden
                >
                  <Icon />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border/70 bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted ring-1 ring-border/25">
                      {visual.label}
                    </span>
                    <span className="rounded-full bg-brand/10 px-2 py-1 text-[10px] font-bold tabular-nums text-brand-strong ring-1 ring-brand/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground sm:text-lg">{cat.title}</h3>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-border/65 bg-white/70 px-3 py-3 ring-1 ring-border/20">
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">Cost signal</p>
                <div className="mt-2 flex flex-wrap gap-1.5" aria-label={`${cat.title} cost signals`}>
                  {visual.signal.map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-border/70 bg-surface-raised/90 px-2.5 py-1 text-[11px] font-semibold leading-none text-foreground-muted"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <dl className="mt-4 grid gap-3">
                <div className="rounded-xl border border-border/55 bg-white/65 p-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">What it means</dt>
                  <dd>
                    <BoldParagraph
                      text={cat.description}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </dd>
                </div>
                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="rounded-xl border border-sky-200/70 bg-sky-50/50 p-3 ring-1 ring-sky-100/40">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.13em] text-sky-900/80">When it matters</dt>
                    <dd>
                      <BoldParagraph
                        text={cat.whenItMatters}
                        className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </dd>
                  </div>
                  <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/45 p-3 ring-1 ring-emerald-100/40">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.13em] text-emerald-900/80">How to reduce it</dt>
                    <dd>
                      <BoldParagraph
                        text={cat.howToReduce}
                        className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </dd>
                  </div>
                </div>
              </dl>

              {cat.relatedLinks.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/45 pt-3" role="list">
                  {cat.relatedLinks.map((rl) => (
                    <li key={rl.href}>
                      <Link href={rl.href} className={cn(linkClass, "font-semibold", linkClassName)}>
                        {rl.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
