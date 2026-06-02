import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  FileText,
  Globe2,
  HeartPulse,
  Landmark,
  Laptop,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  TrainFront,
  TrendingUp,
  Users,
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
import { EmployeeBenefitsRecommendedServices } from "./EmployeeBenefitsRecommendedServices";
import {
  employeeBenefitsNetherlandsPage as page,
  type EmployeeBenefitsNetherlandsLink,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  GROSS_VS_NET_SALARY_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  PAYROLL_TAX_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  THIRTY_PERCENT_RULING_PATH,
  TAXES_HUB_PATH,
} from "./employeeBenefitsNetherlandsPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
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
const linkIcons = [BriefcaseBusiness, PiggyBank, ReceiptText, Globe2, ShieldCheck, Calculator, TrendingUp, Users] as const;
const snapshotIcons = [WalletCards, PiggyBank, Users, Laptop, ShieldCheck, Globe2] as const;

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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: EmployeeBenefitsNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
    <aside
      className={cn(
        "relative w-full",
        !embedded && CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
        !embedded && "overflow-hidden p-5 sm:p-6",
        !embedded && movingNlCardMicroLiftClass,
        className
      )}
    >
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

function TipsPanel({
  title = "Key points",
  items,
  className,
  embedded = false,
}: {
  title?: string;
  items: readonly string[];
  className?: string;
  embedded?: boolean;
}) {
  return (
    <div
      className={cn(
        embedded
          ? "w-full"
          : cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass),
        className
      )}
    >
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

function SectionGuideBand({
  tips,
  tipsTitle,
  panel,
}: {
  tips?: readonly string[];
  tipsTitle?: string;
  panel?: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string };
}) {
  if (!tips?.length && !panel) return null;

  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/90 via-white to-copilot-bg-soft/40 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative flex flex-col gap-6">
        {tips?.length ? <TipsPanel title={tipsTitle} items={tips} embedded /> : null}
        {panel ? (
          <ProcessPanel
            {...panel}
            embedded
            rowsLayout={panel.rows.length >= 3 ? "wide" : "stack"}
            className={cn("mt-0", tips?.length && "border-t border-slate-200/80 pt-6")}
          />
        ) : null}
      </div>
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
  const icons = [WalletCards, BriefcaseBusiness, PiggyBank] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? WalletCards;
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

function BenefitComparisonPanel({
  eyebrow,
  items,
  tone = "default",
}: {
  eyebrow: string;
  items: readonly { title: string; body: string }[];
  tone?: "default" | "accent";
}) {
  const shell =
    tone === "accent"
      ? "border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/70 via-white to-slate-50/90 ring-copilot-primary/[0.08]"
      : "border-border/80 bg-surface-raised/95 ring-slate-900/[0.04]";
  return (
    <div className={cn("relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 shadow-sm ring-1 sm:p-6", shell, movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <ul className="mt-4 flex flex-1 flex-col gap-3">
        {items.map((item) => (
          <li key={item.title} className="rounded-xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.03]">
            <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </li>
        ))}
      </ul>
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

function BenefitsFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Read the package", body: "Ask for a written benefits summary alongside gross salary.", Icon: ReceiptText },
    { label: "Compare total value", body: "Pension, allowance and mobility can outweigh small base gaps.", Icon: WalletCards },
    { label: "Model net pay", body: "Benefits affect take-home — use calculators for orientation.", Icon: Calculator },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Total compensation</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Benefits are part of the real offer</h3>
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
      title="From benefits context to a clear decision"
      rows={[
        { label: "Negotiate", body: "Use the salary negotiation guide for total package discussions.", Icon: BriefcaseBusiness },
        { label: "Calculate", body: "Estimate take-home pay with the net salary calculator.", Icon: Calculator },
        { label: "Compare", body: "Benchmark against average salary and city cost guides.", Icon: TrendingUp },
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
        <SectionIntro title={title} fullWidth>
          {intro}
        </SectionIntro>

        <SectionGuideBand tips={tips} tipsTitle={tipsTitle} panel={panel} />

        {extra}
        <VisualFigure visual={visual} className="mt-0" />
      </div>
    </section>
  );
}

export function EmployeeBenefitsNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL("/netherlands/moving/working-in-the-netherlands/", baseUrl).toString() },
    { name: "Employee Benefits", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Employee benefits</span>
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
            <nav aria-label="Employee benefits guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Understanding Employee Benefits in the Netherlands" fullWidth>
                  <p>Dutch compensation packages often include far more than just salary. Employee benefits may include pension contributions, paid vacation, holiday allowance, sick leave, parental leave, remote work support, mobility budgets and bonuses.</p>
                  <p>Benefits vary significantly between employers, industries and contract types. This guide helps expats understand what is standard, what varies and what matters for long-term value — not legal advice or HR policy documentation.</p>
                </SectionIntro>
                <ConceptFlow />
                <VisualFigure visual={page.infographics.introFlow} className="mt-0" />
                <VisualFigure visual={page.infographics.offerReview} className="mt-0" />
                <ChecklistBlock title="When reviewing an offer" items={page.introChecklist} />
                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Standard benefits", body: "Holiday allowance, pension, leave and protections many employees encounter.", Icon: PiggyBank },
                    { label: "Employer variation", body: "Mobility, remote work, relocation and variable pay differ by company.", Icon: BriefcaseBusiness },
                    { label: "Total package", body: "Why benefits change the value of an offer beyond headline gross salary.", Icon: WalletCards },
                  ]}
                />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Dutch Employee Benefits at a Glance" fullWidth>
                  <p>Use these cards as a quick orientation before comparing job offers or preparing negotiation questions.</p>
                </SectionIntro>
                <SnapshotCards />
                <BenefitsFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.snapshot} className="mt-0" />
              </div>
            </section>

            <section id="mandatory-optional" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Mandatory vs Optional Benefits" fullWidth>
                  <p>Some employee protections and benefits are defined by Dutch labour law or collective agreements (CAO). Others vary by employer, industry, contract type and seniority.</p>
                  <p>Use the columns below to separate what is often legally framed from what you should still confirm in your written offer — neither list is a guarantee for your contract.</p>
                </SectionIntro>

                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <BenefitComparisonPanel eyebrow="Typically statutory / framework" items={page.statutoryBenefits} />
                  <BenefitComparisonPanel eyebrow="Typically employer-specific" items={page.optionalBenefits} tone="accent" />
                </div>

                <ProcessPanel
                  eyebrow="Contract check"
                  title="What to verify in writing"
                  rowsLayout="wide"
                  rows={[
                    { label: "CAO or sector rules", body: "Some industries set leave, pay scales or allowances above the legal minimum.", Icon: Landmark },
                    { label: "Contract type", body: "Permanent, fixed-term and agency contracts can carry different benefit wording.", Icon: FileText },
                    { label: "Employer policy", body: "Mobility, bonus and remote-work perks usually live in HR policy, not law.", Icon: BriefcaseBusiness },
                  ]}
                />
                <VisualFigure visual={page.infographics.mandatoryOptional} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="holiday-allowance"
              title="Holiday Allowance in the Netherlands"
              intro={
                <>
                  <p>Many Dutch employees receive vakantiegeld (holiday allowance) — commonly around 8% of gross salary. It is usually paid annually, though some employers include it monthly in payroll.</p>
                  <p>
                    Holiday allowance is an important part of total compensation. Read the{" "}
                    <Link href={GROSS_VS_NET_SALARY_PATH} className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>
                    {" "}and{" "}
                    <Link href={SALARY_NEGOTIATION_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Salary Negotiation guide</Link>
                    {" "}for package comparison context.
                  </p>
                </>
              }
              tips={page.holidayAllowanceTips}
              tipsTitle="Vakantiegeld checklist"
              visual={page.infographics.holidayAllowance}
              panel={{
                eyebrow: "Offer check",
                title: "Confirm vakantiegeld wording",
                rows: [
                  { label: "Included or separate?", body: "Is the quoted salary inclusive or exclusive of holiday allowance?", Icon: ReceiptText },
                  { label: "Payment timing", body: "Lump sum in May/June or spread monthly through payroll?", Icon: WalletCards },
                  { label: "Total package", body: "Add vakantiegeld when comparing two gross offers.", Icon: TrendingUp },
                ],
              }}
            />

            <SectionWithVisual
              id="vacation"
              title="Vacation Days and Paid Leave"
              intro={
                <>
                  <p>Dutch employees generally receive paid vacation days. Many employers offer statutory minimum leave plus additional company days. Entitlements can vary by contract, sector and collective agreements.</p>
                  <p>Part-time contracts scale leave proportionally, and unused-leave rules differ by employer — confirm both in writing before you compare offers.</p>
                </>
              }
              tips={page.vacationTips}
              tipsTitle="Leave basics"
              visual={page.infographics.vacation}
              panel={{
                eyebrow: "Contract review",
                title: "Leave questions to ask",
                rows: [
                  { label: "Total days", body: "Statutory minimum plus any extra company leave.", Icon: Users },
                  { label: "Part-time", body: "Leave scales with contracted hours.", Icon: BriefcaseBusiness },
                  { label: "Carry-over", body: "How unused leave is handled when leaving.", Icon: ReceiptText },
                ],
              }}
            />

            <SectionWithVisual
              id="pension"
              title="Pension Benefits in the Netherlands"
              intro={
                <>
                  <p>Many employers contribute toward employee pension schemes. Pension contributions can reduce monthly take-home salary while building long-term retirement savings.</p>
                  <p>For expats, portability, international retirement planning and expected stay duration may all matter when evaluating a Dutch pension offer. See the dedicated{" "}
                    <Link href="/netherlands/jobs/pension-netherlands-expats/" className="font-semibold text-link hover:text-link-hover">Pension in the Netherlands guide</Link>
                    {" "}for a full overview of AOW, employer schemes and portability.
                  </p>
                </>
              }
              tips={page.pensionTips}
              tipsTitle="Pension planning"
              visual={page.infographics.pension}
              panel={{
                eyebrow: "Long-term value",
                title: "Pension comparison checklist",
                rows: [
                  { label: "Employer share", body: "What percentage does the employer contribute?", Icon: PiggyBank },
                  { label: "Net impact", body: "Pension deductions appear on your payslip.", Icon: WalletCards },
                  { label: "Expat planning", body: "Consider portability if you may leave the Netherlands.", Icon: Globe2 },
                ],
              }}
            />

            <SectionWithVisual
              id="sick-leave"
              title="Sick Leave and Employee Protection"
              intro={
                <>
                  <p>The Netherlands has relatively strong employee protection systems around illness and reintegration. Employers and employees both have responsibilities during longer absences.</p>
                  <p>Reference{" "}
                    <a href="https://www.uwv.nl/" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">UWV</a>
                    {" "}and{" "}
                    <a href="https://www.government.nl/" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">Government.nl</a>
                    {" "}for official guidance — this guide does not interpret individual cases.
                  </p>
                </>
              }
              tips={page.sickLeaveTips}
              tipsTitle="Sick leave basics"
              visual={page.infographics.sickLeave}
              panel={{
                eyebrow: "Illness context",
                title: "What to clarify with HR",
                rows: [
                  { label: "Short-term", body: "How reporting and occupational health contact works.", Icon: HeartPulse },
                  { label: "Long-term", body: "Reintegration obligations for employer and employee.", Icon: ShieldCheck },
                  { label: "Income", body: "How sick pay is handled in your contract.", Icon: WalletCards },
                ],
                note: "Orientation only — not legal advice.",
              }}
            />

            <SectionWithVisual
              id="parental-leave"
              title="Parental Leave and Family Support"
              intro={<p>Employees may have access to maternity leave, partner leave and parental leave arrangements. Rules depend on employment status, timing and official regulations at the time of leave.</p>}
              tips={page.parentalLeaveTips}
              tipsTitle="Family leave basics"
              visual={page.infographics.parentalLeave}
              panel={{
                eyebrow: "Family planning",
                title: "Benefits for relocating families",
                rows: [
                  { label: "Leave types", body: "Maternity, partner and parental leave frameworks differ.", Icon: Users },
                  { label: "Employer top-up", body: "Some employers pay above statutory minimums.", Icon: PiggyBank },
                  { label: "Childcare costs", body: "Compare leave with childcare allowance context.", Icon: Building2 },
                ],
              }}
            />

            <SectionWithVisual
              id="remote-work"
              title="Remote Work and Hybrid Benefits"
              intro={<p>Many Dutch employers now offer hybrid work, remote flexibility, work-from-home allowances or office setup support. This varies strongly by industry and role.</p>}
              tips={page.remoteWorkTips}
              tipsTitle="Hybrid work checklist"
              visual={page.infographics.remoteWork}
              panel={{
                eyebrow: "Hybrid work",
                title: "Negotiation topics",
                rows: [
                  { label: "Fixed days", body: "Minimum office days vs full flexibility.", Icon: Laptop },
                  { label: "Allowances", body: "Home office budget or equipment support.", Icon: WalletCards },
                  { label: "Cross-border", body: "Remote from abroad may have tax implications.", Icon: Globe2 },
                ],
              }}
            />

            <SectionWithVisual
              id="mobility"
              title="Transport and Mobility Benefits"
              intro={<p>Employers may offer public transport reimbursement, NS business cards, bicycle plans, mileage reimbursement, mobility budgets or company cars in some sectors. Mobility support can significantly affect commuting costs.</p>}
              tips={page.mobilityTips}
              tipsTitle="Commute benefits"
              visual={page.infographics.mobility}
              panel={{
                eyebrow: "Commute economics",
                title: "Mobility items to compare",
                rows: [
                  { label: "Public transport", body: "NS business card or OV reimbursement.", Icon: TrainFront },
                  { label: "Cycling", body: "Bicycle lease plans are common in Dutch cities.", Icon: TrendingUp },
                  { label: "Tax treatment", body: "Company car vs reimbursement differ for net pay.", Icon: ReceiptText },
                ],
              }}
            />

            <SectionWithVisual
              id="relocation"
              title="Relocation Benefits for Expats"
              intro={
                <>
                  <p>International employers may provide relocation allowances, temporary accommodation, visa support, 30% ruling assistance, shipping support and partner support. Packages vary significantly by employer and seniority.</p>
                  <p>
                    See{" "}
                    <Link href={THIRTY_PERCENT_RULING_PATH} className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>
                    {" "}and{" "}
                    <Link href="/netherlands/services/relocation-services/" className="font-semibold text-link hover:text-link-hover">relocation services</Link>
                    {" "}for related planning.
                  </p>
                </>
              }
              tips={page.relocationTips}
              tipsTitle="Relocation package items"
              visual={page.infographics.relocation}
              panel={{
                eyebrow: "Expat packages",
                title: "Relocation checklist",
                rows: [
                  { label: "Housing", body: "Temporary accommodation or housing search support.", Icon: Building2 },
                  { label: "Visa", body: "Work permit and immigration support from employer.", Icon: Globe2 },
                  { label: "Tax setup", body: "30% ruling application assistance if relevant.", Icon: BadgePercent },
                ],
              }}
            />

            <SectionWithVisual
              id="bonus-equity"
              title="Bonuses and Equity Compensation"
              intro={<p>Some industries offer annual bonuses, performance bonuses, stock options, RSUs or profit-sharing. More common in tech, startups, finance and consulting.</p>}
              tips={page.bonusEquityTips}
              tipsTitle="Variable pay basics"
              visual={page.infographics.bonusEquity}
              panel={{
                eyebrow: "Variable pay",
                title: "Before valuing equity or bonus",
                rows: [
                  { label: "Vesting", body: "Understand schedule and clawback clauses.", Icon: TrendingUp },
                  { label: "Tax", body: "Variable pay may be taxed differently from base salary.", Icon: ReceiptText },
                  { label: "History", body: "Ask what was actually paid, not only target ranges.", Icon: BriefcaseBusiness },
                ],
              }}
            />

            <section id="industry" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Benefits Often Seen by Industry" fullWidth>
                  <p>Benefit structures vary strongly by sector and employer size — use industry context when comparing offers, not outdated copied figures.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

            <section id="benefits-vs-salary" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Why Benefits Matter Beyond Salary" fullWidth>
                  <p>Two job offers with identical gross salaries may feel very different once pension contribution, extra leave, remote work, mobility support and bonus structure are included.</p>
                  <p>
                    Use the{" "}
                    <Link href={SALARY_NEGOTIATION_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Salary Negotiation guide</Link>
                    {" "}and{" "}
                    <Link href={GROSS_VS_NET_SALARY_PATH} className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>
                    {" "}to compare total packages in writing.
                  </p>
                </SectionIntro>
                <SectionGuideBand
                  tips={page.benefitsVsSalaryTips}
                  tipsTitle="Why benefits change offer value"
                  panel={{
                    eyebrow: "Package compare",
                    title: "Line items to put side by side",
                    rows: [
                      { label: "Cash", body: "Base salary, bonus targets and signing payments.", Icon: WalletCards },
                      { label: "Recurring", body: "Pension, vakantiegeld, mobility and insurance-related perks.", Icon: PiggyBank },
                      { label: "Flexibility", body: "Remote work, extra leave and relocation support.", Icon: Globe2 },
                    ],
                  }}
                />
                <VisualFigure visual={page.infographics.benefitsVsSalary} className="mt-0" />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Questions Expats Often Have About Dutch Benefits" fullWidth>
                  <p>Quick orientation answers — verify specifics in your contract and with official sources.</p>
                </SectionIntro>
                <QuestionGrid items={page.expatQuestions} />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="tax-connection" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Benefits, Salary and Taxes" fullWidth>
                  <p>Some benefits affect taxable income and influence take-home salary. Others reduce living costs without changing gross pay. Model net pay alongside benefit value.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  {page.taxConnectionItems.map((item) => (
                    <Link key={item.href} href={item.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground group-hover:text-link">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link">Open guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
                    </Link>
                  ))}
                </div>
                <BenefitsFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.taxConnection} className="mt-0" />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro eyebrow="Calculator" title={page.calculatorToolCta.title} fullWidth>
                  <p>{page.calculatorToolCta.description}</p>
                  <p>{page.calculatorToolCta.supportingText}</p>
                </SectionIntro>

                <BenefitsFlowBand className="mt-0" />

                <ProcessPanel
                  eyebrow="Before calculating"
                  title="Prepare better inputs"
                  rowsLayout="wide"
                  rows={page.calculatorToolCta.prepItems.map((item, index) => ({
                    label: item.label,
                    body: item.body,
                    Icon: [FileText, PiggyBank, WalletCards][index] ?? FileText,
                  }))}
                  note={page.calculatorToolCta.disclaimer}
                />
                <VisualFigure visual={page.infographics.calculatorFlow} className="mt-0" />

                <div className="relative overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-8">
                  <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground">Model net pay after benefits</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                        Open the Dutch salary net calculator to estimate take-home pay alongside pension, holiday allowance and other package items.
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

            <section id="related-salary-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Salary & Work Guides" fullWidth>
                  <p>Connect benefits context to salary benchmarks, negotiation and tax planning across the Netherlands.</p>
                  <p>
                    Start with the{" "}
                    <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                    {" "}for the full salary and tax topic map.
                  </p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedSalaryGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.exploreNext} className="mt-0" />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Professional Services That May Help" fullWidth>
                  <p>Benefits packages often touch tax context, relocation timing and payroll questions. Use professionals for contract-specific advice — this guide is orientation only.</p>
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
                    { label: "Tax advisors", body: "Benefits, pension and cross-border income context.", Icon: ReceiptText },
                    { label: "Relocation", body: "When benefits include housing and move timing.", Icon: Globe2 },
                    { label: "Payroll", body: "Payslip items and contract benefit wording.", Icon: Landmark },
                  ]}
                />
                <VisualFigure visual={page.infographics.services} className="mt-0" />
                <EmployeeBenefitsRecommendedServices />
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
                  <p>These answers summarize common benefits questions for expats. Orientation only — not tax, payroll or legal advice.</p>
                </SectionIntro>
                <QuestionGrid items={page.faq} compact />
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="When in doubt, verify"
                  rowsLayout="wide"
                  rows={[
                    { label: "Written offer", body: "Compare contract terms against this orientation guide.", Icon: ReceiptText },
                    { label: "Official sources", body: "Check Government.nl, UWV and Rijksoverheid for current rules.", Icon: Landmark },
                    { label: "Net reality", body: "Model take-home pay before judging an offer.", Icon: Calculator },
                  ]}
                  note="Employee rights and benefit structures are governed through labour laws, collective agreements and employer-specific policies."
                />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>Employee rights and benefit structures in the Netherlands are governed through labour laws, collective agreements and employer-specific policies. Verify current rules through official sources.</p>
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
                    { label: "Government.nl", body: "Employment contracts, collective agreements and worker rights.", Icon: Landmark },
                    { label: "UWV", body: "Sick leave, reintegration and employee insurance context.", Icon: HeartPulse },
                    { label: "Belastingdienst", body: "Payroll tax and benefits with tax implications.", Icon: ReceiptText },
                  ]}
                  note="Employment and tax rules change over time. Always check publication date and whether guidance applies to your contract type."
                />
                <VisualFigure visual={page.infographics.officialSourcesMap} className="mt-0" />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect employee benefits to salary negotiation, tax planning and relocation across the Netherlands.</p>
                  <p>Most readers move from this page into net salary calculation, negotiation or broader tax guides.</p>
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
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Continue with salary negotiation, expat salary benchmarks, net pay calculators and tax guides.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
