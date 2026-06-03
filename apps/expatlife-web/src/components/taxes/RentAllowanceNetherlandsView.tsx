import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Building2,
  Globe2,
  Home,
  Landmark,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  siteGuideColumnPadYClass,
  siteHeroFramedShellClass,
  siteHeroGlowPrimaryClass,
  siteHeroGlowSecondaryClass,
  siteHeroTopAccentClass,
  sitePageCanvasClass,
} from "@/lib/ui/site-shell-identity";
import {
  movingNlCardMicroLiftClass,
  movingNlSectionH2Class,
  movingNlSectionH2OnDarkClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  citiesFunnelHeroFigureClassName,
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  rentAllowanceNetherlandsPage as page,
  BONUS_TAX_NETHERLANDS_PATH,
  BSN_REGISTRATION_PATH,
  EXPAT_SALARY_NETHERLANDS_PATH,
  EXPAT_TAXES_NETHERLANDS_PATH,
  HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH,
  HOUSING_HUB_PATH,
  MUNICIPALITY_REGISTRATION_PATH,
  RENT_AFFORDABILITY_TOOL_PATH,
  TAXES_HUB_PATH,
  type RentAllowanceNetherlandsLink,
} from "./rentAllowanceNetherlandsPageModel";
import {
  RentAllowanceReferenceDisclaimer,
  RentAllowanceReferenceHighlightCards,
  RentAllowanceReferenceTable,
  RentAllowanceWorkedExampleCards,
} from "./RentAllowanceReferenceDisplay";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-5 sm:space-y-6 md:space-y-7";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const linkIcons = [Home, Building2, ReceiptText, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2] as const;
const snapshotIcons = [Home, Landmark, BriefcaseBusiness, WalletCards, ShieldCheck, Calculator] as const;

const primaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);
const secondaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
  fullWidth = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: "default" | "onDark";
  fullWidth?: boolean;
}) {
  const onDark = tone === "onDark";
  const useColumnLayout = fullWidth && Children.count(children) > 1;
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 w-full space-y-3 text-base leading-relaxed",
            useColumnLayout && "max-w-none lg:columns-2 lg:gap-x-10 [&>p]:break-inside-avoid",
            onDark ? "text-slate-300" : "text-foreground-muted"
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function VisualFigure({ visual, className }: { visual: (typeof page.infographics)[keyof typeof page.infographics]; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass, className)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-contain" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">{visual.caption}</figcaption>
    </figure>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: RentAllowanceNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = linkIcons[iconIndex % linkIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : isLive ? "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10" : "bg-slate-100 text-slate-500 ring-slate-200")}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {!isLive ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      {isLive ? <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>Open <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span> : null}
    </>
  );
  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", !onDark && movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function TipsPanel({ title = "Key points", items, className, embedded = false }: { title?: string; items: readonly string[]; className?: string; embedded?: boolean }) {
  return (
    <div className={cn(embedded ? "w-full" : cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass), className)}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 grid gap-3", items.length >= 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2")}>
        {items.map((tip) => (
          <li key={tip} className="flex gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessPanel({
  eyebrow,
  title,
  rows,
  note,
  rowsLayout = "stack",
  className,
  embedded = false,
}: {
  eyebrow: string;
  title: string;
  rows: Array<{ label: string; body: string; Icon: LucideIcon }>;
  note?: string;
  rowsLayout?: "stack" | "wide";
  className?: string;
  embedded?: boolean;
}) {
  return (
    <aside className={cn("relative w-full", !embedded && CITIES_FUNNEL_SOFT_COPILOT_SURFACE, !embedded && "overflow-hidden p-5 sm:p-6", !embedded && movingNlCardMicroLiftClass, className)}>
      {!embedded ? <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden /> : null}
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <div className={cn("mt-5 grid gap-3", rowsLayout === "wide" && "md:grid-cols-3")}>
        {rows.map(({ label, body, Icon }) => (
          <div key={label} className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{label}</span>
              <span className="mt-1 block text-sm leading-relaxed text-foreground-muted">{body}</span>
            </span>
          </div>
        ))}
      </div>
      {note ? <p className="mt-4 rounded-2xl bg-amber-50/80 p-4 text-sm leading-relaxed text-amber-950 ring-1 ring-amber-100">{note}</p> : null}
    </aside>
  );
}

function SectionGuideBand({ tips, tipsTitle, panel }: { tips?: readonly string[]; tipsTitle?: string; panel?: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string } }) {
  if (!tips?.length && !panel) return null;
  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/90 via-white to-copilot-bg-soft/40 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative flex flex-col gap-6">
        {tips?.length ? <TipsPanel title={tipsTitle} items={tips} embedded /> : null}
        {panel ? <ProcessPanel {...panel} embedded rowsLayout={panel.rows.length >= 3 ? "wide" : "stack"} className={cn("mt-0", tips?.length && "border-t border-slate-200/80 pt-6")} /> : null}
      </div>
    </div>
  );
}

function ChecklistBlock({ title, items, columns = 2, className }: { title: string; items: readonly string[]; columns?: 1 | 2; className?: string }) {
  return (
    <div className={cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 gap-3", columns === 2 ? "grid md:grid-cols-2" : "space-y-3")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConceptFlow({ className }: { className?: string }) {
  const icons = [Home, Landmark, ShieldCheck] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Home;
        return (
          <article key={card.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function SnapshotCards() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {page.snapshotCards.map((card, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <article key={card.label} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{card.label}</p>
            <p className="mt-2 text-base font-semibold text-foreground">{card.value}</p>
          </article>
        );
      })}
    </div>
  );
}

function QuestionGrid({ items, compact = false }: { items: readonly { q: string; a: string }[]; compact?: boolean }) {
  return (
    <div className={cn("grid w-full gap-4", compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4")}>
      {items.map((item) => (
        <article key={item.q} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className={cn("font-bold text-foreground", compact ? "text-sm" : "text-base")}>{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

function ScenarioCards({ items, className }: { items: readonly { title: string; body: string }[]; className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((scenario) => (
        <article key={scenario.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Globe2 className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-bold text-foreground">{scenario.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
        </article>
      ))}
    </div>
  );
}

function MistakeCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.mistakeCards.map((card) => (
        <article key={card.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function ApplicationSteps({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.applicationSteps.map((step) => (
        <article key={step.step} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Step {step.step}</p>
          <h3 className="mt-2 text-base font-bold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
        </article>
      ))}
    </div>
  );
}

function ComparisonTable({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200/90 bg-slate-50/80">
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Benefit</th>
            <th scope="col" className="px-4 py-3 font-bold text-brand-strong sm:px-5">Purpose</th>
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Note</th>
          </tr>
        </thead>
        <tbody>
          {page.comparisonRows.map((row) => (
            <tr key={row.component} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="px-4 py-3 font-semibold text-foreground sm:px-5">{row.component}</th>
              <td className="px-4 py-3 leading-relaxed text-foreground-muted sm:px-5">{row.treatment}</td>
              <td className="px-4 py-3 leading-relaxed text-foreground-muted sm:px-5">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PropertyCriteriaCards({ className }: { className?: string }) {
  const icons = [Home, Building2, FileText, WalletCards, Globe2] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.propertyCriteria.map((item, index) => {
        const Icon = icons[index] ?? Home;
        return (
          <article key={item.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function QualificationCriteriaCards({ className }: { className?: string }) {
  const icons = [ShieldCheck, BriefcaseBusiness, WalletCards, Home, Building2, Globe2] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.qualificationCriteria.map((item, index) => {
        const Icon = icons[index] ?? ShieldCheck;
        return (
          <article key={item.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function HousingMarketConcepts({ className }: { className?: string }) {
  const icons = [Building2, FileText, Calculator] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.housingMarketConcepts.map((item, index) => {
        const Icon = icons[index] ?? Building2;
        return (
          <article key={item.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function HousingMarketLinks({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.housingMarketLinks.map((item) => (
        <Link key={item.href} href={item.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground group-hover:text-link">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link">Open guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
        </Link>
      ))}
    </div>
  );
}

function IncomeFactorCards({ className }: { className?: string }) {
  const icons = [Globe2, WalletCards, Home, ClipboardCheck] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2", className)}>
      {page.incomeFactors.map((item, index) => {
        const Icon = icons[index] ?? WalletCards;
        return (
          <article key={item.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function CityLinksGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.cityLinks.map((item, index) => (
        <LinkCard key={item.href} item={item} iconIndex={index} />
      ))}
    </div>
  );
}

function AllowanceFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Check property", body: "Confirm your rental may meet official huurtoeslag property and rent rules.", Icon: Home },
    { label: "Model income & rent", body: "Use conservative figures for income and qualifying rent before applying.", Icon: Calculator },
    { label: "Apply officially", body: "Submit through Dienst Toeslagen — update records when circumstances change.", Icon: ShieldCheck },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Huurtoeslag planning</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Property + income + rent = eligibility picture</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {items.map(({ label, body, Icon }, index) => (
            <div key={label} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{index + 1}. {label}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-300">{body}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function RelatedGuidesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Next-step map"
      title="From huurtoeslag context to a clearer housing decision"
      rows={[
        { label: "Housing hub", body: "Read the Netherlands housing guide before comparing city rents.", Icon: Home },
        { label: "Official tools", body: "Use Belastingdienst and toeslagen.nl for planning ranges.", Icon: Calculator },
        { label: "City context", body: "Connect allowance planning to local rent reality across Dutch cities.", Icon: Globe2 },
      ]}
    />
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a href={source.href} target="_blank" rel="noopener noreferrer" className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative overflow-hidden block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="text-sm font-bold text-foreground group-hover:text-link">{source.label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </a>
  );
}

function SectionWithVisual({
  id,
  title,
  intro,
  tips,
  tipsTitle,
  visual,
  panel,
  extra,
}: {
  id: string;
  title: string;
  intro: ReactNode;
  tips?: readonly string[];
  tipsTitle?: string;
  visual: (typeof page.infographics)[keyof typeof page.infographics];
  panel?: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string };
  extra?: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className="flex w-full flex-col gap-6">
        <SectionIntro title={title} fullWidth>{intro}</SectionIntro>
        <SectionGuideBand tips={tips} tipsTitle={tipsTitle} panel={panel} />
        {extra}
        <VisualFigure visual={visual} className="mt-0" />
      </div>
    </section>
  );
}

export function RentAllowanceNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL(TAXES_HUB_PATH, baseUrl).toString() },
    { name: "Rent allowance", item: new URL(page.path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <Link href="/" className="hover:text-foreground">Home</Link><span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link><span aria-hidden>/</span>
                    <Link href={TAXES_HUB_PATH} className="hover:text-foreground">Taxes</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Rent allowance</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{page.hero.chips.map((chip) => <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>)}</div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>{page.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                    <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                  </div>
                </div>
                <HeroImage />
              </div>
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="Rent allowance guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="What Is Rent Allowance (Huurtoeslag)?" fullWidth>
                  <p>Rent allowance — <strong>huurtoeslag</strong> in Dutch — is a government benefit that can help eligible residents pay qualifying housing costs.</p>
                  <p>Many newcomers are surprised to learn that Dutch housing can be expensive, not every rental qualifies, and huurtoeslag may help reduce costs — but only for eligible households who apply through official channels.</p>
                  <p>It is administered through <strong>Dienst Toeslagen</strong> (part of Belastingdienst), separate from payroll tax on your payslip. Eligibility depends on income, rent level, property type and household — not nationality alone.</p>
                  <p>
                    Read the{" "}
                    <Link href={HOUSING_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Housing hub</Link>
                    {" "}for rental search context, then verify property and income rules on official Belastingdienst toeslagen guidance — orientation only, not an official determination.
                  </p>
                </SectionIntro>
                <TipsPanel title="What surprises many newcomers" items={page.newcomerSurprises} />
                <ConceptFlow />
                <VisualFigure visual={page.infographics.introFlow} className="mt-0" />
                <ChecklistBlock title="Before you apply or sign a lease" items={page.introChecklist} />
                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Eligibility basics", body: "Income, rent, property and household type for huurtoeslag.", Icon: Home },
                    { label: "Expat scenarios", body: "Move timing, partner setup and conservative income planning.", Icon: Globe2 },
                    { label: "Official application", body: "How to apply and update through Dienst Toeslagen.", Icon: ShieldCheck },
                  ]}
                  note="This page does not provide personalized entitlement decisions or guarantee allowance amounts."
                />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Rent Allowance at a Glance" fullWidth>
                  <p>
                    Key 2026 reference figures from Belastingdienst and Rijksoverheid — use them for planning before you run the official proefberekening.
                    From 2026, bare rent only counts and there is no maximum rent to qualify (allowance is still capped at €932.93/month for adults).
                  </p>
                </SectionIntro>
                <SnapshotCards />
                <RentAllowanceReferenceHighlightCards />
                <TipsPanel title="Snapshot — what to remember" items={page.snapshotTips} />
                <AllowanceFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.snapshot} className="mt-0" />
              </div>
            </section>

            <section id="thresholds-2026" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="2026 Huurtoeslag Thresholds & Conditions" fullWidth>
                  <p>
                    Published 2026 parameters for rent calculation caps, asset limits, income taper points and the main rule changes.
                    These are the numbers Dienst Toeslagen uses in its formula — not simplified blog estimates.
                  </p>
                  <p>
                    Income has no single fixed ceiling in isolation: it interacts with bare rent, age and household type.
                    Combined toetsingsinkomen reference €60,525 is where allowance typically reaches zero for couples.
                  </p>
                </SectionIntro>
                <RentAllowanceReferenceTable subtitle="Official-style 2026 reference table — verify on toeslagen.nl before applying." />
                <RentAllowanceReferenceDisclaimer />
              </div>
            </section>

            <SectionWithVisual
              id="why-exists"
              title="Why the Netherlands Offers Rent Allowance"
              intro={
                <>
                  <p>The Dutch housing market mixes social housing, private rentals and targeted support programs. Housing costs can represent a significant monthly burden — especially in major cities.</p>
                  <p>Huurtoeslag exists to help make housing more affordable for eligible residents with qualifying rent. It is a targeted toeslag benefit, not a payroll tax credit and not the same as healthcare allowance or child budget.</p>
                </>
              }
              tips={page.whyExistsTips}
              tipsTitle="Policy context"
              visual={page.infographics.whyExists}
              panel={{
                eyebrow: "Housing affordability",
                title: "Support for qualifying rent",
                rows: [
                  { label: "Competitive market", body: "Private and social rentals coexist in a tight Dutch housing market.", Icon: Building2 },
                  { label: "Rent support", body: "Allowance reduces pressure on qualifying housing costs for eligible households.", Icon: PiggyBank },
                  { label: "Separate admin", body: "Managed through Dienst Toeslagen — not your landlord.", Icon: Landmark },
                ],
              }}
            />

            <SectionWithVisual
              id="who-qualifies"
              title="Who Can Qualify?"
              intro={
                <>
                  <p>Qualification is a bundle of conditions: lawful residence and registered address, income within statutory ceilings, qualifying rent and property type, and correct household type (single or toeslagpartner).</p>
                  <p>Legal residence and registration context also matter — confirm your personal situation on official Belastingdienst and Government.nl guidance.</p>
                </>
              }
              tips={page.whoQualifiesTips}
              tipsTitle="Qualification gates"
              visual={page.infographics.whoQualifies}
              extra={<QualificationCriteriaCards />}
            />

            <SectionWithVisual
              id="expats"
              title="Can Expats Receive Huurtoeslag?"
              intro={
                <>
                  <p>Expats can qualify for huurtoeslag when they meet the same residence, income, rent and property conditions. Nationality or expat status alone does not determine eligibility.</p>
                  <p>International hires often face extra planning complexity: move timing, partner abroad, temporary housing and market-rate rentals that may not qualify. Plan conservatively and confirm on official toeslagen channels.</p>
                </>
              }
              tips={page.expatTips}
              tipsTitle="Expat planning tips"
              visual={page.infographics.expats}
              extra={<ScenarioCards items={page.expatScenarios} />}
            />

            <SectionWithVisual
              id="students"
              title="Rent Allowance for Students"
              intro={
                <>
                  <p>International and Dutch students may qualify for huurtoeslag when they meet the same income, rent and property tests as other residents. Student status alone does not guarantee allowance.</p>
                  <p>Part-time work, internships, grants and parental support can all affect the income picture. Student housing and shared flats often need extra verification against property rules — update Dienst Toeslagen when circumstances change during the academic year.</p>
                </>
              }
              tips={page.studentTips}
              tipsTitle="Student context"
              visual={page.infographics.students}
              extra={<ScenarioCards items={page.studentScenarios} />}
            />

            <SectionWithVisual
              id="properties"
              title="What Types of Rental Properties May Qualify?"
              intro={
                <>
                  <p>Property requirements are often the biggest source of confusion for expats. Independent living accommodation, registration at the address and a valid rental contract typically matter — but not every home meets official huurtoeslag rules.</p>
                  <p>Shared accommodation, student housing and market-rate expat apartments in major cities need extra verification. Do not rely on landlord assurances alone — confirm property eligibility on official toeslagen information.</p>
                </>
              }
              tips={page.propertyTips}
              tipsTitle="Property rules — verify early"
              visual={page.infographics.properties}
              panel={{
                eyebrow: "Property checklist",
                title: "Verify before you sign",
                rows: [
                  { label: "Registration", body: "Confirm BRP registration is allowed at the address.", Icon: ShieldCheck },
                  { label: "Contract", body: "Qualifying rental agreement with lawful rent figure.", Icon: FileText },
                  { label: "Independent unit", body: "Self-contained accommodation — not informal sublets.", Icon: Home },
                ],
              }}
              extra={<PropertyCriteriaCards />}
            />

            <SectionWithVisual
              id="income"
              title="Why Income Matters"
              intro={
                <>
                  <p>
                    Huurtoeslag uses <strong>toetsingsinkomen</strong> — not always the same as payslip gross.
                    Published 2026 taper starts around €23,425 (single) / €31,500 (with partner); combined income reference ceiling €60,525.
                  </p>
                  <p>
                    With a toeslagpartner, both incomes count. Assets on 1 January must stay under €38,479 (single) or €76,958 combined.
                  </p>
                  <p>
                    Bonuses, variable pay and partner income can move the real test. See the{" "}
                    <Link href={BONUS_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Bonus Tax guide</Link>
                    {", "}
                    <Link href={EXPAT_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Expat Salary guide</Link>
                    {" "}and{" "}
                    <Link href={EXPAT_TAXES_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Expat Taxes guide</Link>
                    {" "}for payroll and package context — use conservative inputs when uncertain.
                  </p>
                </>
              }
              tips={page.incomeTips}
              tipsTitle="Income and rent — both matter"
              visual={page.infographics.income}
              extra={
                <>
                  <IncomeFactorCards />
                  <RentAllowanceReferenceTable
                    subtitle="Income and asset parameters that interact with your toetsingsinkomen."
                    rows={page.reference2026.thresholds.filter((row) =>
                      ["asset-single", "asset-partner", "asset-co-tenant", "income-min-eigen", "income-combined-ceiling"].includes(row.id)
                    )}
                    className="mt-0"
                  />
                </>
              }
            />

            <SectionWithVisual
              id="how-much"
              title="How Much Rent Allowance Can You Receive?"
              intro={
                <>
                  <p>
                    Allowance is always less than your bare rent — Belastingdienst states you keep roughly <strong>€200</strong> yourself.
                    Calculation uses bare rent up to <strong>€932.93/month</strong> (21+). Higher rent can still qualify from 2026, but not increase the calculated portion.
                  </p>
                  <p>{page.officialCalculatorCta.description}</p>
                </>
              }
              tips={page.howMuchTips}
              tipsTitle="Indicative 2026 amounts"
              visual={page.infographics.howMuch}
              panel={{
                eyebrow: "Illustrative examples",
                title: page.officialCalculatorCta.title,
                rows: [
                  { label: "Low income", body: "~€280/mo at €800 rent and ~€18,000 income (indicative).", Icon: WalletCards },
                  { label: "Minimum wage", body: "~€273/mo at €850 rent and ~€33,045 income (proefberekening case).", Icon: Landmark },
                  { label: "Own share", body: "You always pay ~€200 rent yourself — allowance never covers full rent.", Icon: Calculator },
                ],
                note: page.officialCalculatorCta.disclaimer,
              }}
              extra={
                <>
                  <RentAllowanceWorkedExampleCards />
                  <RentAllowanceReferenceDisclaimer className="mt-2" />
                  <div className="relative overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-5 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-6">
                    <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                        Run the official proefberekening with your bare rent, toetsingsinkomen and household — it replaces any illustrative figure on this page.
                      </p>
                      <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
                        <a href={page.officialCalculatorCta.primaryCta.href} target="_blank" rel="noopener noreferrer" className={cn(primaryCtaClass, "w-full sm:w-auto")}>
                          {page.officialCalculatorCta.primaryCta.label}
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </a>
                        <a href={page.officialCalculatorCta.secondaryCta.href} target="_blank" rel="noopener noreferrer" className={cn(secondaryCtaClass, "w-full sm:w-auto")}>
                          {page.officialCalculatorCta.secondaryCta.label}
                        </a>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-foreground-muted sm:text-sm">{page.officialCalculatorCta.disclaimer}</p>
                  </div>
                </>
              }
            />

            <section id="apply" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How to Apply for Rent Allowance" fullWidth>
                  <p>Applications and updates go through Dienst Toeslagen — often via Mijn Toeslagen. Landlords cannot grant huurtoeslag on your behalf.</p>
                  <p>Gather income estimates, rent figures and household type before applying. Keep copies of submitted figures and your rental contract — update records when circumstances change.</p>
                  <p>
                    You typically need a{" "}
                    <Link href={BSN_REGISTRATION_PATH} className="font-semibold text-link hover:text-link-hover">BSN</Link>
                    {" "}and{" "}
                    <Link href={MUNICIPALITY_REGISTRATION_PATH} className="font-semibold text-link hover:text-link-hover">municipality registration</Link>
                    {" "}at your rental address before applying — plan these steps in your first weeks after arrival.
                  </p>
                </SectionIntro>
                <TipsPanel title="Application orientation" items={page.applyTips} />
                <ApplicationSteps />
                <ProcessPanel
                  eyebrow="Official channel"
                  title="Dienst Toeslagen — not third-party sites"
                  rowsLayout="wide"
                  rows={[
                    { label: "Mijn Toeslagen", body: "Official portal for applications and updates.", Icon: ShieldCheck },
                    { label: "Documentation", body: "Keep income, rent and household figures you submit.", Icon: FileText },
                    { label: "Timely updates", body: "Report changes during the year — not only at application.", Icon: ClipboardCheck },
                  ]}
                  note="This guide does not submit applications or read government systems."
                />
                <VisualFigure visual={page.infographics.apply} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="situation-changes"
              title="Life Changes That Affect Rent Allowance"
              intro={
                <>
                  <p>Salary increases, job changes, partner income shifts, moves and relationship changes can reduce or remove allowance during the year. Report changes to Dienst Toeslagen promptly.</p>
                  <p>If you received too much based on later income or rent, overpayments may be recovered. Use official calculators to stress-test higher income or rent changes before assuming allowance will continue unchanged.</p>
                </>
              }
              tips={page.situationChangeTips}
              tipsTitle="Keep records updated"
              visual={page.infographics.situationChanges}
              extra={<ScenarioCards items={page.situationChangeScenarios} className="lg:grid-cols-2 xl:grid-cols-3" />}
            />

            <section id="mistakes" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Common Expat Mistakes" fullWidth>
                  <p>These patterns appear often among international residents planning huurtoeslag. Conservative planning and official confirmation reduce repayment and correspondence surprises.</p>
                </SectionIntro>
                <TipsPanel title="Avoid these planning traps" items={page.mistakesTips} />
                <MistakeCards />
                <ProcessPanel
                  eyebrow="Recovery risk"
                  title="Why mistakes matter later"
                  rowsLayout="wide"
                  rows={[
                    { label: "Overpayment", body: "Too much allowance based on optimistic income can be recovered by Dienst Toeslagen.", Icon: PiggyBank },
                    { label: "Missed allowance", body: "Eligible residents who never apply leave support unclaimed.", Icon: Home },
                    { label: "Household errors", body: "Wrong toeslagpartner status changes which income and rent figures count.", Icon: Globe2 },
                  ]}
                />
                <VisualFigure visual={page.infographics.mistakes} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="compare-benefits"
              title="Rent Allowance vs Healthcare Allowance and Other Benefits"
              intro={
                <>
                  <p>Huurtoeslag is one of several Dutch benefits (toeslagen) and tax-related supports. Each has separate rules — qualifying for one does not automatically mean qualifying for others.</p>
                  <p>
                    See the{" "}
                    <Link href={HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Healthcare Allowance guide</Link>
                    {" "}for zorgtoeslag rules and the{" "}
                    <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                    {" "}for broader tax and benefits context.
                  </p>
                </>
              }
              tips={page.comparisonTips}
              tipsTitle="Separate benefits — separate rules"
              visual={page.infographics.compareBenefits}
              extra={
                <>
                  <ComparisonTable />
                  <ProcessPanel
                    eyebrow="Side-by-side"
                    title="Huurtoeslag vs zorgtoeslag at a glance"
                    rowsLayout="wide"
                    rows={[
                      { label: "Rent allowance", body: "Supports qualifying housing costs — property and rent tests apply.", Icon: Home },
                      { label: "Healthcare allowance", body: "Supports basic health insurance premiums — insurance and asset tests apply.", Icon: ShieldCheck },
                      { label: "Both separate", body: "You might qualify for one, both or neither — check each on official channels.", Icon: Landmark },
                    ]}
                  />
                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {page.futureBenefitLinks.map((item, index) => (
                      <LinkCard key={item.href} item={item} iconIndex={index + 2} />
                    ))}
                  </div>
                </>
              }
            />

            <SectionWithVisual
              id="housing-market"
              title="Rent Allowance and Dutch Housing Costs"
              intro={
                <>
                  <p>Housing affordability varies significantly between Amsterdam, Utrecht, Rotterdam and smaller cities. Huurtoeslag may help eligible households — but high market rents in Randstad cities still require careful budgeting.</p>
                  <p>
                    Read the{" "}
                    <Link href={HOUSING_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Housing hub</Link>
                    {" "}and{" "}
                    <Link href={RENT_AFFORDABILITY_TOOL_PATH} className="font-semibold text-link hover:text-link-hover">Rent Affordability Calculator</Link>
                    {" "}to connect allowance planning to local rent reality — not as a substitute for official entitlement.
                  </p>
                </>
              }
              tips={page.housingMarketTips}
              tipsTitle="City context + allowance"
              visual={page.infographics.housingMarket}
              extra={
                <>
                  <HousingMarketConcepts />
                  <HousingMarketLinks />
                  <CityLinksGrid />
                </>
              }
            />

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Questions Expats Often Ask" fullWidth>
                  <p>These are the questions international professionals, students and families ask most often about huurtoeslag — from eligibility and properties to partners, moves and application channels.</p>
                  <p>Answers below are orientation only. Verify your personal situation on official toeslagen guidance or with qualified advisers.</p>
                </SectionIntro>
                <TipsPanel title="Start with these prompts" items={page.questionsSectionTips} />
                <QuestionGrid items={page.expatQuestions} />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Housing Guides" fullWidth>
                  <p>Connect huurtoeslag planning to housing search, city comparison and broader relocation context.</p>
                  <p>
                    Start with the{" "}
                    <Link href={HOUSING_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Housing hub</Link>
                    {" "}before comparing city rents and allowance eligibility.
                  </p>
                </SectionIntro>
                <TipsPanel title="How to use these guides together" items={page.relatedGuideTips} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedHousingGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.relatedGuides} className="mt-0" />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Professional Services That May Help" fullWidth>
                  <p>Most huurtoeslag questions are concept-level, but complex household situations, property eligibility and correspondence with Dienst Toeslagen may need professional review — orientation only, not benefit advice.</p>
                </SectionIntro>
                <TipsPanel title="When professional help makes sense" items={page.servicesTips} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.servicesWhenToUse.map((item) => (
                    <article key={item.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
                <ProcessPanel
                  eyebrow="When to seek help"
                  title="Match the service to your question"
                  rowsLayout="wide"
                  rows={[
                    { label: "Tax advisors", body: "Income picture and toeslagpartner questions.", Icon: ShieldCheck },
                    { label: "Relocation services", body: "Move-year registration and housing orientation.", Icon: Globe2 },
                    { label: "Rental agencies", body: "Housing search — confirm property eligibility separately.", Icon: Building2 },
                  ]}
                />
                <VisualFigure visual={page.infographics.services} className="mt-0" />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.services.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Frequently Asked Questions" fullWidth>
                  <p>These answers summarize common rent allowance questions for expats. Orientation only — not tax, benefit or legal advice.</p>
                  <p>If you plan to apply, work through the quick checks below before relying on general answers.</p>
                </SectionIntro>
                <ChecklistBlock title="Quick checks before you decide" items={page.faqQuickChecks} />
                <QuestionGrid items={page.faq} compact />
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="Plan conservatively — confirm officially"
                  rowsLayout="wide"
                  rows={[
                    { label: "Verify property", body: "Confirm your rental may meet official huurtoeslag property rules.", Icon: Home },
                    { label: "Read housing guides", body: "Connect allowance planning to local rent reality.", Icon: Building2 },
                    { label: "Use official sources", body: "Thresholds and rules change with policy.", Icon: Landmark },
                  ]}
                  note="Rent allowance is administered by Dienst Toeslagen. Individual circumstances vary."
                />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>Rent allowance thresholds, rent caps and application rules are set by Dutch government policy. Verify current figures on official sources before applying or updating records.</p>
                  <p>{page.sourcesDisclaimer}</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rowsLayout="wide"
                  rows={[
                    { label: "Belastingdienst Toeslagen", body: "Applications, updates and official documentation.", Icon: ReceiptText },
                    { label: "Government.nl", body: "English-language eligibility overview.", Icon: ShieldCheck },
                    { label: "Mijn Toeslagen", body: "Official portal for managing allowances.", Icon: Landmark },
                  ]}
                />
                <VisualFigure visual={page.infographics.officialSources} className="mt-0" />
              </div>
            </section>

            <section id="related-guides-footer" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect rent allowance planning to housing, taxes, benefits and relocation guides across the site.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.relatedGuides} className="mt-0" />
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark" fullWidth>
                <p>Move from huurtoeslag concepts into housing search, city comparison and relocation planning.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
              <VisualFigure visual={page.infographics.exploreNext} className="mt-6 border-white/10 bg-white/5 ring-white/10 [&_figcaption]:border-white/10 [&_figcaption]:bg-white/5 [&_figcaption]:text-slate-300" />
            </section>

            <p className="rounded-2xl border border-amber-100 bg-amber-50/80 p-5 text-sm leading-relaxed text-amber-950">
              <strong>Disclaimer:</strong> This guide is for orientation only. It is not tax advice, benefit advice or legal advice. Rent allowance eligibility and amounts depend on individual circumstances, household type, property rules and applicable regulations. Only Dienst Toeslagen determines official awards. Confirm personal questions with qualified professionals and official sources.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
