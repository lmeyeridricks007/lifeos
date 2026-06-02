import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  FileText,
  Globe2,
  Landmark,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
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
import { PensionNetherlandsExpatsRecommendedServices } from "./PensionNetherlandsExpatsRecommendedServices";
import {
  pensionNetherlandsExpatsPage as page,
  type PensionNetherlandsExpatsLink,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
  GROSS_VS_NET_SALARY_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  PAYROLL_TAX_NETHERLANDS_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  TAXES_HUB_PATH,
} from "./pensionNetherlandsExpatsPageModel";

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
const linkIcons = [BriefcaseBusiness, PiggyBank, ReceiptText, Globe2, ShieldCheck, Calculator, TrendingUp, Users] as const;
const snapshotIcons = [Landmark, PiggyBank, ReceiptText, Globe2, ShieldCheck, TrendingUp] as const;
const pillarIcons = [Landmark, Building2, WalletCards] as const;

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
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1600}
        height={900}
        sizes="(min-width: 1024px) 980px, 100vw"
        className="h-auto w-full bg-slate-50"
      />
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">{visual.caption}</figcaption>
    </figure>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: PensionNetherlandsExpatsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
  const icons = [Landmark, BriefcaseBusiness, PiggyBank] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Landmark;
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

function PillarCards() {
  return (
    <div className="grid w-full gap-4 md:grid-cols-3">
      {page.pensionPillars.map((pillar, index) => {
        const Icon = pillarIcons[index] ?? Landmark;
        return (
          <article key={pillar.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">Pillar {index + 1}</p>
            <h3 className="mt-2 text-base font-bold text-foreground">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{pillar.body}</p>
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

function PensionFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Read your scheme", body: "Ask HR for pension fund details alongside your gross salary offer.", Icon: FileText },
    { label: "Model net pay", body: "Pension deductions affect take-home — use calculators for orientation.", Icon: Calculator },
    { label: "Plan for the long term", body: "Consider expected stay duration and portability before you relocate.", Icon: Globe2 },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Long-term planning</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Pension is part of total compensation</h3>
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
      title="From pension context to a clear decision"
      rows={[
        { label: "Benefits", body: "See the full employee benefits guide for package context.", Icon: PiggyBank },
        { label: "Calculate", body: "Estimate take-home pay with the net salary calculator.", Icon: Calculator },
        { label: "Negotiate", body: "Use the salary negotiation guide for total package discussions.", Icon: BriefcaseBusiness },
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
      <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
        <div className="flex min-w-0 flex-col gap-6">
          <SectionIntro title={title} fullWidth>
            {intro}
          </SectionIntro>
          <SectionGuideBand tips={tips} tipsTitle={tipsTitle} panel={panel} />
          {extra}
          <VisualFigure visual={visual} className="lg:hidden" />
        </div>
        <VisualFigure visual={visual} className="hidden lg:block lg:sticky lg:top-24" />
      </div>
    </section>
  );
}

export function PensionNetherlandsExpatsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL("/netherlands/moving/working-in-the-netherlands/", baseUrl).toString() },
    { name: "Pension Guide", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Pension guide</span>
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
            <nav aria-label="Pension guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How the Dutch Pension System Works" fullWidth>
                  <p>The Netherlands has a multi-part pension system designed to support income during retirement. Many employees build retirement income through state pension, employer pension schemes and personal savings or private pensions.</p>
                  <p>Expats often encounter pension deductions for the first time on Dutch payslips and may wonder what they are paying for, whether they will receive benefits later and what happens if they leave the Netherlands.</p>
                  <p>
                    This guide explains concepts clearly — orientation only, not financial, investment or tax advice. For broader package context, see the{" "}
                    <Link href={EMPLOYEE_BENEFITS_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Employee Benefits guide</Link>
                    {" "}and use the{" "}
                    <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">net salary calculator</Link>
                    {" "}to model take-home pay after deductions.
                  </p>
                </SectionIntro>
                <ConceptFlow />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-start">
                  <VisualFigure visual={page.infographics.introFlow} />
                  <VisualFigure visual={page.infographics.offerReview} />
                </div>
                <ChecklistBlock title="When reviewing a Dutch job offer" items={page.introChecklist} />
                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "State pension", body: "How AOW works and why eligibility is not one-size-fits-all.", Icon: Landmark },
                    { label: "Employer schemes", body: "Workplace pensions, contributions and sector funds.", Icon: Building2 },
                    { label: "Expat planning", body: "Portability, payslip deductions and long-term relocation context.", Icon: Globe2 },
                  ]}
                  note="Pension rules and individual outcomes vary significantly. Always verify with official sources and your pension provider."
                />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="Dutch Pension System at a Glance" fullWidth>
                    <p>Use these cards as quick orientation before comparing job offers or planning a long-term move to the Netherlands.</p>
                    <p>Each part of the system plays a different role — state pension builds through residency, employer schemes depend on your job and private savings are optional.</p>
                  </SectionIntro>
                  <SnapshotCards />
                  <TipsPanel title="What expats should know first" items={page.snapshotTips} />
                  <PensionFlowBand />
                  <VisualFigure visual={page.infographics.snapshot} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.snapshot} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="pillars" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="The Three Main Parts of the Dutch Pension System" fullWidth>
                    <p>The Dutch retirement framework is often described as a three-pillar model. Not everyone participates equally in all three parts — your situation depends on residency, employment, age and personal choices.</p>
                    <p>Use the columns below to separate what is typically state-framed from what varies by employer, sector and personal planning — neither list is a guarantee for your situation.</p>
                  </SectionIntro>
                  <PillarCards />
                  <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                    <BenefitComparisonPanel eyebrow="Typically state / framework" items={page.frameworkParticipation} />
                    <BenefitComparisonPanel eyebrow="Typically employer / variable" items={page.variableParticipation} tone="accent" />
                  </div>
                  <ProcessPanel
                    eyebrow="Contract check"
                    title="What to verify in writing"
                    rowsLayout="wide"
                    rows={[
                      { label: "Pension fund", body: "Which fund administers the scheme and where to find documentation.", Icon: Building2 },
                      { label: "Contribution rates", body: "Employee and employer percentages — they affect net pay and long-term value.", Icon: PiggyBank },
                      { label: "Portability", body: "Ask about preserved rights and transfer options if you may leave the Netherlands.", Icon: Globe2 },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.pillars} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.pillars} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <SectionWithVisual
              id="aow"
              title="What Is AOW?"
              intro={
                <>
                  <p>AOW (Algemene Ouderdomswet) is the Dutch state pension system, administered by the SVB. People generally build AOW entitlement gradually while living or working in the Netherlands.</p>
                  <p>
                    The amount received depends on years insured, residency and work history — eligibility rules are more complex than a simple yes or no. Verify your personal situation through{" "}
                    <a href="https://www.svb.nl/en" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">SVB</a>
                    {" "}and{" "}
                    <a href="https://www.government.nl/topics/pensions" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">Government.nl</a>
                    {" "}guidance.
                  </p>
                </>
              }
              tips={page.aowTips}
              tipsTitle="AOW basics"
              visual={page.infographics.aow}
              extra={
                <ChecklistBlock
                  title="AOW orientation checks"
                  items={[
                    "Confirm how long you expect to live or work in the Netherlands.",
                    "Check whether your residency and work history may count toward insured years.",
                    "Use SVB online tools for personal orientation — not a guarantee of entitlement.",
                    "Do not assume full AOW from a short expat assignment.",
                  ]}
                />
              }
              panel={{
                eyebrow: "Important",
                title: "Do not oversimplify eligibility",
                rows: [
                  { label: "Insured years", body: "Entitlement builds through years covered by Dutch social insurance.", Icon: ShieldCheck },
                  { label: "Partial rights", body: "Expats arriving later may build partial rather than full AOW.", Icon: Globe2 },
                  { label: "Personal check", body: "Use SVB tools to understand your specific situation.", Icon: FileText },
                ],
                note: "Orientation only — not a guarantee of AOW eligibility or amount.",
              }}
            />

            <SectionWithVisual
              id="employer-pension"
              title="Employer Pension Schemes"
              intro={
                <>
                  <p>Many Dutch employers offer pension schemes where employers and employees may both contribute. Common features include monthly payroll deductions, employer contributions, sector pension funds and retirement savings accumulation.</p>
                  <p>Pension setups vary significantly by employer and industry. Read your contract and pension fund documentation — this guide does not interpret individual schemes.</p>
                </>
              }
              tips={page.employerPensionTips}
              tipsTitle="Employer pension checklist"
              visual={page.infographics.employer}
              extra={
                <ChecklistBlock
                  title="Questions to ask HR about your scheme"
                  items={[
                    "Which pension fund administers the scheme — company fund or sector fund?",
                    "What are the employee and employer contribution percentages?",
                    "Is there a vesting period before employer contributions are fully yours?",
                    "Where can you find the pension summary and annual statement?",
                  ]}
                />
              }
              panel={{
                eyebrow: "Contract review",
                title: "Questions to ask HR",
                rows: [
                  { label: "Contribution rates", body: "What percentage does the employer and employee each contribute?", Icon: PiggyBank },
                  { label: "Pension fund", body: "Which fund administers the scheme — company or sector?", Icon: Building2 },
                  { label: "Vesting", body: "When do you fully own employer contributions?", Icon: ShieldCheck },
                ],
              }}
            />

            <SectionWithVisual
              id="deductions"
              title="Why Pension Is Deducted From Salary"
              intro={
                <>
                  <p>Many expats notice pension deductions on Dutch payslips for the first time. Pension contributions can reduce take-home pay while building retirement savings.</p>
                  <p>
                    Connect pension deductions to the{" "}
                    <Link href={PAYROLL_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Payroll Tax guide</Link>
                    {", "}
                    <Link href={GROSS_VS_NET_SALARY_PATH} className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>
                    {" "}and{" "}
                    <Link href={NET_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Net Salary guide</Link>
                    {" "}for full payslip context.
                  </p>
                </>
              }
              tips={page.deductionTips}
              tipsTitle="Payslip deductions"
              visual={page.infographics.deductions}
              extra={<ChecklistBlock title="Payslip review checklist" items={page.deductionChecklist} />}
              panel={{
                eyebrow: "Net pay impact",
                title: "What to look for on your payslip",
                rows: [
                  { label: "Employee share", body: "Deducted from gross salary each month.", Icon: ReceiptText },
                  { label: "Employer share", body: "May not appear as a deduction but adds to your pension.", Icon: PiggyBank },
                  { label: "Total effect", body: "Model net pay with pension included when comparing offers.", Icon: Calculator },
                ],
              }}
            />

            <SectionWithVisual
              id="leaving"
              title="What Happens to Your Pension if You Move Abroad?"
              intro={
                <>
                  <p>Many expats leave the Netherlands before retirement age. Depending on the pension arrangement, pension rights may remain preserved, international transfer options may exist and retirement payments may still be possible later.</p>
                  <p>Rules vary by pension provider, country, bilateral agreements and residency situation. Contact your pension fund directly — do not assume guaranteed portability.</p>
                </>
              }
              tips={page.leavingTips}
              tipsTitle="Moving abroad"
              visual={page.infographics.leaving}
              extra={<ChecklistBlock title="Before you leave the Netherlands" items={page.leavingChecklist} />}
              panel={{
                eyebrow: "Portability",
                title: "Factors that affect outcomes",
                rows: [
                  { label: "Pension provider", body: "Each fund has its own transfer and preservation rules.", Icon: Building2 },
                  { label: "Destination country", body: "Bilateral agreements and EU rules may apply.", Icon: Globe2 },
                  { label: "Stay duration", body: "Short stays may build limited but preserved rights.", Icon: Users },
                ],
                note: "No guaranteed portability outcome — verify with your pension fund and qualified advisers.",
              }}
            />

            <SectionWithVisual
              id="expat-employees"
              title="Pensions for International Employees"
              intro={
                <>
                  <p>Many expats arrive through highly skilled migrant programmes, multinational companies or international transfers. Employer pension participation is common in these roles.</p>
                  <p>Some expats focus heavily on salary while overlooking employer pension contributions, long-term value and retirement savings. Compare total compensation, not headline gross pay alone.</p>
                </>
              }
              tips={page.expatEmployeeTips}
              tipsTitle="Expat pension context"
              visual={page.infographics.expatEmployees}
              extra={
                <ProcessPanel
                  eyebrow="Offer comparison"
                  title="Three numbers to compare across offers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Gross salary", body: "Headline monthly or annual figure before deductions.", Icon: WalletCards },
                    { label: "Employer pension %", body: "Employer contribution rate — often the hidden value in Dutch packages.", Icon: PiggyBank },
                    { label: "Expected stay", body: "Short stays may change how much you value portability vs accumulation.", Icon: Globe2 },
                  ]}
                />
              }
              panel={{
                eyebrow: "Total package",
                title: "Beyond headline salary",
                rows: [
                  { label: "Employer matching", body: "Employer pension contributions add significant long-term value.", Icon: PiggyBank },
                  { label: "Expected stay", body: "Short vs long-term stay affects how you value pension.", Icon: Globe2 },
                  { label: "Offer comparison", body: "Put pension side by side when evaluating relocation offers.", Icon: BriefcaseBusiness },
                ],
              }}
            />

            <SectionWithVisual
              id="private-pension"
              title="Private Pensions and Additional Retirement Planning"
              intro={
                <>
                  <p>Some residents also use personal pension products, investment accounts or additional savings alongside mandatory schemes. Financial planning needs differ significantly by age, family situation and expected stay duration.</p>
                  <p>This guide does not provide investment recommendations or product comparisons. Consult a qualified financial adviser for personal retirement planning beyond employer schemes.</p>
                </>
              }
              tips={page.privatePensionTips}
              tipsTitle="Private savings context"
              visual={page.infographics.private}
              extra={
                <ChecklistBlock
                  title="When private savings may be worth exploring"
                  items={[
                    "You expect a long stay and want to supplement employer pension beyond mandatory schemes.",
                    "Your employer pension is minimal or absent — common in some startups and smaller employers.",
                    "You have cross-border income or assets that need coordinated planning with a qualified adviser.",
                    "You want orientation on voluntary products — this guide does not recommend specific investments.",
                  ]}
                  columns={1}
                />
              }
              panel={{
                eyebrow: "Not investment advice",
                title: "Personal planning varies",
                rows: [
                  { label: "Voluntary", body: "Private pension participation is optional for most residents.", Icon: WalletCards },
                  { label: "Individual needs", body: "Age, family and stay duration all affect planning priorities.", Icon: Users },
                  { label: "Professional help", body: "Use qualified advisers for product-specific questions.", Icon: ShieldCheck },
                ],
                note: "This guide is orientation only — not financial or investment advice.",
              }}
            />

            <section id="industry" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="How Pension Schemes Differ by Industry" fullWidth>
                    <p>Contribution levels and pension structures vary strongly by sector and employer size. Use industry context when comparing offers — not outdated copied figures.</p>
                    <p>Larger corporate employers often have established sector funds; startups and hospitality may offer lighter supplementary schemes.</p>
                  </SectionIntro>
                  <TipsPanel title="Industry comparison tips" items={page.industryTips} />
                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {page.industryCards.map((industry) => (
                      <article key={industry.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{industry.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{industry.body}</p>
                      </article>
                    ))}
                  </div>
                  <VisualFigure visual={page.infographics.industry} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.industry} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="pension-vs-salary" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="Why Pension Matters Beyond Salary" fullWidth>
                    <p>Two offers with identical salaries may have very different long-term value depending on pension contributions, employer matching and retirement plans.</p>
                    <p>
                      Use the{" "}
                      <Link href={SALARY_NEGOTIATION_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Salary Negotiation guide</Link>
                      {" "}and{" "}
                      <Link href={EMPLOYEE_BENEFITS_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Employee Benefits guide</Link>
                      {" "}to compare total packages in writing.
                    </p>
                  </SectionIntro>
                  <SectionGuideBand
                    tips={page.pensionVsSalaryTips}
                    tipsTitle="Why pension changes offer value"
                    panel={{
                      eyebrow: "Package compare",
                      title: "Line items to put side by side",
                      rows: [
                        { label: "Base salary", body: "Headline gross figure before deductions.", Icon: WalletCards },
                        { label: "Pension", body: "Employee and employer contribution percentages.", Icon: PiggyBank },
                        { label: "Long-term", body: "Model cumulative value over your expected stay.", Icon: TrendingUp },
                      ],
                    }}
                  />
                  <VisualFigure visual={page.infographics.vsSalary} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.vsSalary} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="Questions Expats Often Have About Dutch Pensions" fullWidth>
                    <p>Quick orientation answers — verify specifics in your contract, with your pension fund and through official sources.</p>
                  </SectionIntro>
                  <QuestionGrid items={page.expatQuestions} />
                </div>
                <VisualFigure visual={page.infographics.questions} className="lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="salary-benefits" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="Pensions, Salary and Employee Benefits" fullWidth>
                    <p>Pensions are often an important part of Dutch compensation packages. They affect net salary, long-term savings and total compensation value.</p>
                    <p>Pension sits alongside holiday allowance, payroll tax and other benefits — read the linked guides below to understand how they connect on your payslip and in negotiation.</p>
                  </SectionIntro>
                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {page.salaryBenefitsItems.map((item) => (
                      <Link key={item.href} href={item.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground group-hover:text-link">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link">Open guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
                      </Link>
                    ))}
                  </div>
                  <VisualFigure visual={page.infographics.salaryConnection} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.salaryConnection} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
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
                      Icon: [FileText, PiggyBank, WalletCards][index] ?? FileText,
                    }))}
                    note={page.calculatorToolCta.disclaimer}
                  />
                  <div className="relative overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-8">
                    <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground">Model net pay after pension deductions</h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                          Open the Dutch salary net calculator to estimate take-home pay alongside pension contributions and payroll tax.
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
                  <VisualFigure visual={page.infographics.calculatorFlow} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.calculatorFlow} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="related-salary-guides" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="Related Salary & Benefits Guides" fullWidth>
                    <p>Connect pension context to salary benchmarks, employee benefits and tax planning across the Netherlands.</p>
                    <p>
                      Start with the{" "}
                      <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                      {" "}for the full salary and tax topic map, then use the guides below for specific payslip and negotiation questions.
                    </p>
                  </SectionIntro>
                  <TipsPanel title="How to use these guides together" items={page.relatedSalaryGuideTips} />
                  <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {page.relatedSalaryGuides.map((item, index) => (
                      <LinkCard key={item.href} item={item} iconIndex={index} />
                    ))}
                  </div>
                  <RelatedGuidesVisualPanel />
                  <VisualFigure visual={page.infographics.exploreNext} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.exploreNext} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                  <div className="flex min-w-0 flex-col gap-6">
                    <SectionIntro title="Professional Services That May Help" fullWidth>
                      <p>Pension questions often touch tax context, payroll wording and long-term relocation planning. Use professionals for contract-specific advice — this guide is orientation only.</p>
                    </SectionIntro>
                    <div className="grid w-full gap-4 sm:grid-cols-2">
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
                        { label: "Tax advisors", body: "Pension contributions and cross-border income context.", Icon: ReceiptText },
                        { label: "Payroll specialists", body: "Payslip pension lines and contract wording.", Icon: Landmark },
                        { label: "Relocation", body: "Long-term stay planning when portability matters.", Icon: Globe2 },
                      ]}
                    />
                    <VisualFigure visual={page.infographics.services} className="lg:hidden" />
                  </div>
                  <VisualFigure visual={page.infographics.services} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
                <PensionNetherlandsExpatsRecommendedServices />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.services.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="Frequently Asked Questions" fullWidth>
                    <p>These answers summarize common pension questions for expats. Orientation only — not financial, investment or tax advice.</p>
                    <p>If you are reviewing a job offer or planning a move, work through the quick checks below before relying on general answers.</p>
                  </SectionIntro>
                  <ChecklistBlock title="Quick checks before you decide" items={page.faqQuickChecks} />
                  <QuestionGrid items={page.faq} compact />
                  <ProcessPanel
                    eyebrow="Rule of thumb"
                    title="When in doubt, verify"
                    rowsLayout="wide"
                    rows={[
                      { label: "Pension fund", body: "Contact your scheme administrator for portability and contribution details.", Icon: Building2 },
                      { label: "Official sources", body: "Check Government.nl, SVB and Belastingdienst for current rules.", Icon: Landmark },
                      { label: "Net reality", body: "Model take-home pay before judging an offer.", Icon: Calculator },
                    ]}
                    note="The Dutch pension system combines state pension, employer pension schemes and private retirement planning options."
                  />
                  <VisualFigure visual={page.infographics.questions} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.questions} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro title="Official Sources" fullWidth>
                    <p>The Dutch pension system combines state pension, employer pension schemes and private retirement planning options. Verify current rules through official sources.</p>
                  </SectionIntro>
                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {page.officialSources.map((source) => (
                      <SourceLink key={source.href} source={source} />
                    ))}
                  </div>
                  <ProcessPanel
                    eyebrow="Source hierarchy"
                    title="What the sources support"
                    rowsLayout="wide"
                    rows={[
                      { label: "Government.nl & SVB", body: "State pension AOW and general pension framework.", Icon: Landmark },
                      { label: "Belastingdienst", body: "Payroll tax and pension contribution tax context.", Icon: ReceiptText },
                      { label: "AFM", body: "Regulation of pension providers and financial products.", Icon: ShieldCheck },
                    ]}
                    note="Pension rules change over time. Always check publication date and whether guidance applies to your situation."
                  />
                  <VisualFigure visual={page.infographics.officialSourcesMap} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.officialSourcesMap} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect pension planning to salary negotiation, employee benefits, tax guides and relocation across the Netherlands.</p>
                  <p>Most readers move from this page into net salary calculation, employee benefits or broader tax and relocation guides.</p>
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
                <p>Continue with employee benefits, expat salary benchmarks, net pay calculators and payroll tax guides.</p>
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
