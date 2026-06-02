import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  CheckCircle2,
  FileText,
  Globe2,
  Percent,
  ReceiptText,
  ShieldCheck,
  Sun,
  TrendingUp,
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
import { HolidayAllowanceNetherlandsRecommendedServices } from "./HolidayAllowanceNetherlandsRecommendedServices";
import {
  holidayAllowanceNetherlandsPage as page,
  type HolidayAllowanceNetherlandsLink,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
  GROSS_VS_NET_SALARY_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  PAYROLL_TAX_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  TAXES_HUB_PATH,
  THIRTY_PERCENT_RULING_PATH,
} from "./holidayAllowanceNetherlandsPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-5 sm:space-y-6 md:space-y-7";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
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
const linkIcons = [Sun, WalletCards, ReceiptText, Globe2, Percent, Calculator, TrendingUp, BriefcaseBusiness] as const;
const snapshotIcons = [Sun, WalletCards, CalendarDays, Percent, TrendingUp, Globe2] as const;

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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: HolidayAllowanceNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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

function ConceptFlow({ className }: { className?: string }) {
  const icons = [Sun, WalletCards, Percent] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Sun;
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

function WorkedExamples({ examples, className }: { examples: typeof page.salaryWorkedExamples; className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {examples.map((example) => (
        <article key={example.label} className={cn("relative overflow-hidden", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-4", movingNlCardMicroLiftClass)}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{example.label}</p>
          <p className="mt-2 text-lg font-bold text-foreground">{example.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{example.note}</p>
        </article>
      ))}
    </div>
  );
}

function PaymentTimingCards({ className }: { className?: string }) {
  const icons = [CalendarDays, WalletCards, TrendingUp] as const;
  return (
    <div className={cn("grid w-full gap-4 md:grid-cols-3", className)}>
      {page.paymentTimingScenarios.map((scenario, index) => {
        const Icon = icons[index] ?? CalendarDays;
        return (
          <article key={scenario.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{scenario.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function ExpatScenarioCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 md:grid-cols-3", className)}>
      {page.expatScenarios.map((scenario) => (
        <article key={scenario.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{scenario.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
        </article>
      ))}
    </div>
  );
}

function BonusComparisonTable({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200/90 bg-slate-50/80">
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Aspect</th>
            <th scope="col" className="px-4 py-3 font-bold text-brand-strong sm:px-5">Vakantiegeld</th>
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Bonus</th>
          </tr>
        </thead>
        <tbody>
          {page.bonusComparisonRows.map((row) => (
            <tr key={row.aspect} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="px-4 py-3 font-semibold text-foreground sm:px-5">{row.aspect}</th>
              <td className="px-4 py-3 leading-relaxed text-foreground-muted sm:px-5">{row.allowance}</td>
              <td className="px-4 py-3 leading-relaxed text-foreground-muted sm:px-5">{row.bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function VakantiegeldFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Read the offer", body: "Ask whether headline salary includes or excludes vakantiegeld.", Icon: ReceiptText },
    { label: "Compare total value", body: "An extra ~8% can change which offer is actually higher.", Icon: WalletCards },
    { label: "Model net pay", body: "Holiday allowance is gross — use calculators for take-home context.", Icon: Calculator },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Total compensation</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Vakantiegeld is part of the real offer</h3>
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
      title="From vakantiegeld context to a clear decision"
      rows={[
        { label: "Negotiate", body: "Use the salary negotiation guide for total package discussions.", Icon: BriefcaseBusiness },
        { label: "Calculate", body: "Estimate take-home pay with the net salary calculator.", Icon: Calculator },
        { label: "Compare", body: "Benchmark against employee benefits and expat salary guides.", Icon: TrendingUp },
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

export function HolidayAllowanceNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL("/netherlands/moving/working-in-the-netherlands/", baseUrl).toString() },
    { name: "Holiday allowance", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href="/netherlands/moving/working-in-the-netherlands/" className="hover:text-foreground">Jobs</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Holiday allowance</span>
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
            <nav aria-label="Holiday allowance guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="What Is Holiday Allowance in the Netherlands?" fullWidth>
                  <p>Holiday allowance (vakantiegeld) is a common part of Dutch compensation packages. Many employees receive additional holiday-related compensation — often paid once per year, separate from regular monthly salary.</p>
                  <p>Expats are often surprised because similar systems may not exist in their home countries. Understanding vakantiegeld helps you compare job offers fairly and plan cash-flow around annual payments.</p>
                  <p>
                    This guide explains concepts clearly — orientation only, not tax or payroll advice. For broader benefits context, see the{" "}
                    <Link href={EMPLOYEE_BENEFITS_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Employee Benefits guide</Link>
                    {" "}and use the{" "}
                    <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">net salary calculator</Link>
                    {" "}to model take-home pay.
                  </p>
                </SectionIntro>
                <ConceptFlow />
                <VisualFigure visual={page.infographics.introFlow} className="mt-0" />
                <VisualFigure visual={page.infographics.offerReview} className="mt-0" />
                <ChecklistBlock title="When reviewing a Dutch job offer" items={page.introChecklist} />
                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Vakantiegeld basics", body: "What holiday allowance is and how it differs from bonuses.", Icon: Sun },
                    { label: "Offer comparison", body: "Inclusive vs exclusive salary quotes and payment timing.", Icon: WalletCards },
                    { label: "Total package", body: "Why vakantiegeld changes the value of Dutch job offers.", Icon: Percent },
                  ]}
                />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Holiday Allowance at a Glance" fullWidth>
                  <p>Use these cards as quick orientation before comparing offers or reading your contract. Dutch vakantiegeld is a structured pay component — not a discretionary bonus in most employment relationships.</p>
                </SectionIntro>
                <SnapshotCards />
                <TipsPanel title="Snapshot — what to remember" items={page.snapshotTips} />
                <VakantiegeldFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.snapshot} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="how-it-works"
              title="How Vakantiegeld Works"
              intro={
                <>
                  <p>Holiday allowance is usually calculated as a percentage of salary (minimum rules often discussed as ~8%), accrued over time and paid separately from normal monthly salary — though some employers spread it monthly.</p>
                  <p>Exact arrangements may vary depending on employer, industry, collective labour agreements (CAOs) and contract structure. Reference official government guidance for minimum rules.</p>
                </>
              }
              tips={page.howItWorksTips}
              tipsTitle="How accrual usually works"
              visual={page.infographics.howItWorks}
              panel={{
                eyebrow: "Verify your contract",
                title: "What to confirm with HR",
                rows: [
                  { label: "Calculation basis", body: "Which salary components count toward vakantiegeld.", Icon: Percent },
                  { label: "Payment method", body: "Annual lump sum vs monthly spread on payslips.", Icon: CalendarDays },
                  { label: "CAO rules", body: "Sector agreements may override generic assumptions.", Icon: FileText },
                ],
              }}
              extra={<TipsPanel title="Pro-rata and part-time" items={page.proRataTips} />}
            />

            <SectionWithVisual
              id="payment-timing"
              title="When Do Employees Receive Holiday Allowance?"
              intro={
                <>
                  <p>Many employers pay holiday allowance annually, often around May or June before summer leave. Some employers instead spread payments monthly or include vakantiegeld differently in compensation structures.</p>
                  <p>Payment timing affects budgeting — a May/June lump sum feels very different from the same amount spread across twelve payslips.</p>
                </>
              }
              tips={page.paymentTimingTips}
              tipsTitle="Payment timing tips"
              visual={page.infographics.paymentTiming}
              extra={
                <>
                  <PaymentTimingCards />
                  <ProcessPanel
                    eyebrow="Cash-flow planning"
                    title="Plan around your payout pattern"
                    rowsLayout="wide"
                    rows={[
                      { label: "Annual lump sum", body: "Set aside part of the May/June payment for tax prep or large expenses.", Icon: CalendarDays },
                      { label: "Monthly spread", body: "Easier to budget month-to-month — check payslip lines each period.", Icon: WalletCards },
                      { label: "First year", body: "Pro-rata rules may mean a smaller first payout if you start mid-year.", Icon: TrendingUp },
                    ]}
                  />
                </>
              }
            />

            <SectionWithVisual
              id="mandatory"
              title="Is Holiday Allowance Mandatory?"
              intro={
                <>
                  <p>Dutch labour law includes rules around holiday allowance for covered employees. However, details may vary — collective agreements affect implementation and certain contract structures may differ.</p>
                  <p>This guide explains the framework only. It does not provide legal guarantees for your specific employment situation.</p>
                </>
              }
              tips={page.mandatoryTips}
              tipsTitle="Mandatory rules — orientation"
              visual={page.infographics.mandatory}
              panel={{
                eyebrow: "Not legal advice",
                title: "Why wording matters",
                rows: [
                  { label: "Minimum rules", body: "Government guidance sets baseline expectations.", Icon: ShieldCheck },
                  { label: "CAO variation", body: "Sector agreements may define higher or specific terms.", Icon: BriefcaseBusiness },
                  { label: "Contract type", body: "Verify whether your agreement is covered.", Icon: FileText },
                ],
                note: "Confirm your situation with HR and official sources — not from generic guides alone.",
              }}
            />

            <section id="salary-inclusion" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Is Holiday Allowance Included in Salary?" fullWidth>
                  <p>Some employers quote salary excluding holiday allowance; others quote total compensation including vakantiegeld. This creates confusion when comparing offers — especially for expats moving from countries with different salary conventions.</p>
                  <p>The worked examples below are illustrative only. Always confirm the gross basis in your written offer.</p>
                </SectionIntro>
                <WorkedExamples examples={page.salaryWorkedExamples} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.salaryInclusionExamples.map((example) => (
                    <article key={example.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground">{example.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{example.body}</p>
                    </article>
                  ))}
                </div>
                <ChecklistBlock title="Offer comparison checklist" items={page.salaryInclusionChecklist} />
                <VisualFigure visual={page.infographics.salaryInclusion} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="gross-net"
              title="How Holiday Allowance Is Taxed"
              intro={
                <>
                  <p>Holiday allowance is generally paid gross. Actual take-home value depends on payroll tax, pension deductions and your individual tax situation.</p>
                  <p>
                    Read the{" "}
                    <Link href={GROSS_VS_NET_SALARY_PATH} className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>
                    {", "}
                    <Link href={NET_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Net Salary guide</Link>
                    {" "}and{" "}
                    <Link href={PAYROLL_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Payroll Tax guide</Link>
                    {" "}for fuller payslip context.
                  </p>
                </>
              }
              tips={page.grossNetTips}
              tipsTitle="Gross vs net context"
              visual={page.infographics.grossNet}
              extra={
                <>
                  <ChecklistBlock title="What to check on your payslip" items={page.payslipChecklist} columns={1} />
                  <ProcessPanel
                    eyebrow="Take-home planning"
                    title="Why net matters more than gross vakantiegeld"
                    rowsLayout="wide"
                    rows={[
                      { label: "Payroll tax", body: "Loonheffing applies to vakantiegeld like regular salary.", Icon: ReceiptText },
                      { label: "Pension", body: "Pension deductions may further reduce the net payment.", Icon: WalletCards },
                      { label: "Calculator", body: "Model annual and monthly net before comparing offers.", Icon: Calculator },
                    ]}
                    note="Illustrative only — confirm payslip lines with HR for your payroll setup."
                  />
                </>
              }
            />

            <SectionWithVisual
              id="expat-context"
              title="What Expats Should Know About Vakantiegeld"
              intro={
                <>
                  <p>Many expats misunderstand salary packages, incorrectly compare international offers or assume holiday allowance is discretionary bonus money. In the Netherlands, vakantiegeld is typically part of broader structured compensation.</p>
                  <p>The 30% ruling and payroll setup may affect take-home amounts — read the linked guide for orientation, not tax guarantees.</p>
                </>
              }
              tips={page.expatTips}
              tipsTitle="Expat comparison tips"
              visual={page.infographics.expatContext}
              extra={<ExpatScenarioCards />}
            />

            <SectionWithVisual
              id="thirty-ruling"
              title="Holiday Allowance and the 30% Ruling"
              intro={
                <>
                  <p>For eligible expats, tax treatment may differ and overall take-home pay may be affected by how payroll applies the 30% facility to compensation components.</p>
                  <p>
                    Read the{" "}
                    <Link href={THIRTY_PERCENT_RULING_PATH} className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>
                    {" "}for eligibility context — confirm payroll treatment with your employer.
                  </p>
                </>
              }
              tips={page.thirtyRulingTips}
              tipsTitle="30% ruling context"
              visual={page.infographics.thirtyRuling}
              panel={{
                eyebrow: "Not tax advice",
                title: "Confirm with payroll",
                rows: [
                  { label: "Eligibility", body: "The ruling is not automatic for every expat.", Icon: ShieldCheck },
                  { label: "Payslip setup", body: "How vakantiegeld appears may differ by employer.", Icon: ReceiptText },
                  { label: "Professional help", body: "Use tax advisers for personal situations.", Icon: Globe2 },
                ],
              }}
            />

            <section id="industry" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How Holiday Allowance Differs by Industry" fullWidth>
                  <p>Compensation structures vary significantly by sector. Use industry context when comparing offers — not assumptions copied from another employer. Your CAO and contract override general sector patterns.</p>
                </SectionIntro>
                <TipsPanel title="Sector comparison tips" items={page.industryTips} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.industryCards.map((industry) => (
                    <article key={industry.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground">{industry.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{industry.body}</p>
                    </article>
                  ))}
                </div>
                <VisualFigure visual={page.infographics.industry} className="mt-0" />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Questions Expats Often Have About Holiday Allowance" fullWidth>
                  <p>Quick orientation answers — verify specifics in your contract and with official sources.</p>
                </SectionIntro>
                <QuestionGrid items={page.expatQuestions} />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="bonus-vs-allowance"
              title="Holiday Allowance vs Bonuses"
              intro={
                <>
                  <p>Holiday allowance is usually structured compensation tied to salary accrual. Bonuses are often performance-related or discretionary — different compensation components with different expectations.</p>
                  <p>Do not negotiate away vakantiegeld expecting a bonus to replace it, or assume a bonus is guaranteed because holiday allowance is predictable.</p>
                </>
              }
              tips={page.bonusVsAllowanceTips}
              tipsTitle="Allowance vs bonus"
              visual={page.infographics.bonusVsAllowance}
              extra={<BonusComparisonTable />}
            />

            <section id="total-compensation" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Why Holiday Allowance Matters in Total Compensation" fullWidth>
                  <p>Dutch compensation packages may include base salary, holiday allowance, pension, mobility budget, bonus and remote work support. Expats should compare full packages — not only base salary.</p>
                  <p>
                    Use the{" "}
                    <Link href={EMPLOYEE_BENEFITS_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Employee Benefits guide</Link>
                    {" "}and{" "}
                    <Link href={SALARY_NEGOTIATION_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Salary Negotiation guide</Link>
                    {" "}to compare packages in writing.
                  </p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.totalCompensationItems.map((item) => (
                    <Link key={item.href} href={item.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground group-hover:text-link">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link">Open guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
                    </Link>
                  ))}
                </div>
                <VisualFigure visual={page.infographics.totalCompensation} className="mt-0" />
              </div>
            </section>

            <section id="related-salary-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Salary & Benefits Guides" fullWidth>
                  <p>Connect vakantiegeld context to salary benchmarks, employee benefits and tax planning across the Netherlands.</p>
                  <p>
                    Start with the{" "}
                    <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                    {" "}for the full salary and tax topic map.
                  </p>
                </SectionIntro>
                <TipsPanel title="How to use these guides together" items={page.relatedSalaryGuideTips} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedSalaryGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.exploreNext} className="mt-0" />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro eyebrow="Calculator" title={page.calculatorToolCta.title} fullWidth>
                  <p>{page.calculatorToolCta.description}</p>
                  <p>{page.calculatorToolCta.supportingText}</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Before calculating"
                  title="Prepare better inputs"
                  rowsLayout="wide"
                  rows={page.calculatorToolCta.prepItems.map((item, index) => ({
                    label: item.label,
                    body: item.body,
                    Icon: [FileText, CalendarDays, WalletCards][index] ?? FileText,
                  }))}
                  note={page.calculatorToolCta.disclaimer}
                />
                <VisualFigure visual={page.infographics.calculatorFlow} className="mt-0" />
                <div className="relative overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-8">
                  <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground">Model net pay with vakantiegeld context</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                        Open the Dutch salary net calculator to explore gross-to-net pay alongside holiday allowance timing and payroll tax.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[240px] lg:flex-col">
                      <Link href={page.calculatorToolCta.primaryCta.href} className={cn(primaryCtaClass, "w-full sm:w-auto lg:w-full")}>
                        {page.calculatorToolCta.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link href={page.calculatorToolCta.secondaryCta.href} className={cn(secondaryCtaClass, "w-full sm:w-auto lg:w-full")}>
                        {page.calculatorToolCta.secondaryCta.label}
                      </Link>
                    </div>
                  </div>
                  <p className="mt-5 text-xs leading-relaxed text-foreground-muted sm:text-sm">{page.calculatorToolCta.disclaimer}</p>
                </div>
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Professional Services That May Help" fullWidth>
                  <p>Holiday allowance questions often touch payroll wording, tax context and offer comparisons. Use professionals for contract-specific advice — this guide is orientation only.</p>
                </SectionIntro>
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
                    { label: "Tax advisors", body: "Payroll tax, 30% ruling and cross-border income context.", Icon: ReceiptText },
                    { label: "Payroll specialists", body: "Payslip vakantiegeld lines and contract wording.", Icon: FileText },
                    { label: "Relocation", body: "Employment package context when planning a move.", Icon: Globe2 },
                  ]}
                />
                <VisualFigure visual={page.infographics.services} className="mt-0" />
                <HolidayAllowanceNetherlandsRecommendedServices />
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
                  <p>These answers summarize common vakantiegeld questions for expats. Orientation only — not tax, payroll or legal advice.</p>
                  <p>If you are reviewing a job offer, work through the quick checks below before relying on general answers.</p>
                </SectionIntro>
                <ChecklistBlock title="Quick checks before you decide" items={page.faqQuickChecks} />
                <QuestionGrid items={page.faq} compact />
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="When in doubt, verify"
                  rowsLayout="wide"
                  rows={[
                    { label: "Written offer", body: "Compare contract terms against this orientation guide.", Icon: ReceiptText },
                    { label: "Official sources", body: "Check Government.nl and Rijksoverheid for current rules.", Icon: ShieldCheck },
                    { label: "Net reality", body: "Model take-home pay before judging an offer.", Icon: Calculator },
                  ]}
                  note="Holiday allowance rules are governed through labour law, collective agreements and employer-specific policies."
                />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>The Dutch government provides guidance on holiday allowance (vakantiegeld), including payment structures and labour law considerations. Verify current rules on official sites.</p>
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
                    { label: "Government.nl", body: "Holiday allowance rules and minimum framework.", Icon: ShieldCheck },
                    { label: "Business.gov.nl", body: "Employer guidance on paying vakantiegeld.", Icon: BriefcaseBusiness },
                    { label: "Rijksoverheid", body: "Dutch-language official vakantiegeld information.", Icon: FileText },
                  ]}
                />
                <VisualFigure visual={page.infographics.officialSourcesMap} className="mt-0" />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Continue exploring salary, tax and relocation guides connected to Dutch compensation.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark" fullWidth>
                <p>Connect holiday allowance understanding to salary negotiation, employee benefits and tax planning.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
              <VisualFigure visual={page.infographics.exploreNext} className="mt-6" />
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
