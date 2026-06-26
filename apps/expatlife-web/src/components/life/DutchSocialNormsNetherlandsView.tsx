import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  Gift,
  Globe2,
  Home,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  guidePremiumCardGridClass,
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualSpacingClass,
} from "@/lib/ui/guide-premium-page-ui";
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
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  citiesFunnelHeroFigureClassName,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { GuidePremiumVisualFigure, type GuidePremiumVisual } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  COMMUNITY_BASICS_NETHERLANDS_PATH,
  dutchSocialNormsPage as page,
  LIFE_HUB_PATH,
  type LifeGuideLink,
  type MythCard,
  type SituationCard,
} from "./dutchSocialNormsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
const iconPool = [BriefcaseBusiness, Building2, Globe2, MessageCircle, Users, Clock, ShieldCheck, Home] as const;
const snapshotIcons = [Clock, MessageCircle, Users, Gift] as const;
const orientationIcons = [Globe2, MessageCircle, CheckCircle2] as const;

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

function PremiumGuideSection({
  id,
  intro,
  introPanel,
  visual,
  children,
  visualTone = "default",
  tipsKey,
}: {
  id: string;
  intro: ReactNode;
  introPanel?: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
  visualTone?: "default" | "onDark";
  tipsKey?: keyof typeof page.visualTextDetails;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className={guidePremiumIntroStackClass}>
        {intro}
        {introPanel}
      </div>
      <GuidePremiumVisualFigure visual={visual} tone={visualTone} className={guidePremiumVisualSpacingClass} />
      <div className={guidePremiumSectionDetailStackClass}>
        {tipsKey ? <SectionTipsPanel tipsKey={tipsKey} /> : null}
        {children}
      </div>
    </section>
  );
}

function SectionTipsPanel({ tipsKey }: { tipsKey: keyof typeof page.visualTextDetails }) {
  const details = page.visualTextDetails[tipsKey];
  return <BulletPanel title={details.title} items={details.items} />;
}

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
      {eyebrow ? (
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 space-y-3 text-base leading-relaxed",
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

function HeroSignalStrip() {
  return (
    <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {page.snapshotSignals.map((signal, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <div key={signal.label} className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{signal.label}</span>
                <span className="mt-1 block text-sm font-bold leading-snug text-foreground">{signal.value}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-foreground-muted">{signal.note}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <div className={cn("absolute inset-x-0 top-0 z-10 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <Image
        src={page.hero.image.src}
        alt={page.hero.image.alt}
        width={1600}
        height={900}
        priority
        unoptimized
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-white/10" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" aria-hidden />
    </figure>
  );
}

function QuickAnswerBox() {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-copilot-bg-soft via-white to-cyan-50/50 p-5 ring-1 ring-copilot-primary/10",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-sm font-bold text-foreground">{page.quickAnswer.summary}</p>
      <ul className="mt-4 space-y-2">
        {page.quickAnswer.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-2xl bg-white/80 p-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-slate-900/[0.04]">
        <span className="font-bold text-foreground">Tip: </span>
        {page.quickAnswer.note}
      </p>
    </aside>
  );
}

function OrientationFlowBand({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves in your first month</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {page.orientationFlowSteps.map((step, index) => {
            const Icon = orientationIcons[index % orientationIcons.length];
            return (
              <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{index + 1}.</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-300">{step}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function MilestoneStatGrid({ items }: { items: readonly { label: string; value: string; note: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.label} className={cn(cardClass, "p-4 sm:p-5")}>
          <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{item.label}</p>
          <p className="mt-2 text-xl font-black tracking-tight text-foreground">{item.value}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.note}</p>
        </article>
      ))}
    </div>
  );
}

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
    </article>
  );
}

function FeatureGrid({ items }: { items: ReadonlyArray<{ title: string; body: string }> }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={index} />
      ))}
    </div>
  );
}

function InfoTable({ rows, columns }: { rows: Array<Record<string, string>>; columns: Array<{ key: string; label: string }> }) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-4 py-3 font-bold">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx}>
                {columns.map((column, cellIdx) => (
                  <td key={column.key} className={cn("px-4 py-4 text-foreground-muted", cellIdx === 0 && "font-semibold text-foreground")}>
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SituationCardGrid({ items }: { items: readonly SituationCard[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => {
        const Icon = iconPool[index % iconPool.length];
        return (
          <article key={item.title} className={cardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
            <p className="mt-3 text-sm font-semibold text-brand-strong">{item.tip}</p>
          </article>
        );
      })}
    </div>
  );
}

function MythCardItem({ myth, reality, iconIndex = 0 }: { myth: string; reality: string; iconIndex?: number }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-foreground-muted">Myth</p>
      <h3 className="mt-1 text-base font-bold text-foreground">{myth}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{reality}</p>
    </article>
  );
}

function MythCardGrid({ items }: { items: readonly MythCard[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <MythCardItem key={item.myth} myth={item.myth} reality={item.reality} iconIndex={index} />
      ))}
    </div>
  );
}

function ChecklistBlock({
  title,
  items,
  columns = 1,
}: {
  title: string;
  items: readonly string[];
  columns?: 1 | 2;
}) {
  return (
    <div className={cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 gap-3", columns === 2 ? "grid md:grid-cols-2" : "space-y-3")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GuideCrossLink({
  href,
  title,
  description,
  linkLabel,
}: {
  href: string;
  title: string;
  description: string;
  linkLabel: string;
}) {
  return (
    <aside className={cn(cardClass, "flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-6")}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div>
        <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">{description}</p>
      </div>
      <Link
        href={href}
        className={cn(
          "mt-4 inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand/20 bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-strong sm:mt-0",
          transitionInteractive,
          activeBrightnessPress
        )}
      >
        {linkLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </aside>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: LifeGuideLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10")}>
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? (
          <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500")}>
            Coming soon
          </span>
        ) : null}
      </span>
      {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
      {isLive ? (
        <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );
  if (!isLive) {
    return <article className={cn(cardClass, onDark && "border-white/10 bg-white/10 text-white ring-white/10", "opacity-90")}>{body}</article>;
  }
  return (
    <Link
      href={item.href}
      className={cn(cardClass, onDark && "border-white/10 bg-white/10 ring-white/10", "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", transitionInteractive, activeBrightnessPress)}
    >
      {body}
    </Link>
  );
}

const faqAccordionItems = page.faq.map((item, index) => ({
  id: `faq-${index}`,
  title: item.q,
  content: item.a,
}));

export function DutchSocialNormsNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Life in the Netherlands", item: new URL(LIFE_HUB_PATH, baseUrl).toString() },
          { name: "Dutch Social Norms", item: new URL(page.path, baseUrl).toString() },
        ]}
      />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "overflow-hidden p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <Link href="/" className="hover:text-foreground">Home</Link>
                    <span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link>
                    <span aria-hidden>/</span>
                    <Link href={LIFE_HUB_PATH} className="hover:text-foreground">Life</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Dutch social norms</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {page.hero.chips.map((chip) => (
                      <span key={chip} className={cn(CITIES_FUNNEL_INFO_CHIP, "shadow-sm ring-1 ring-slate-900/[0.03]")}>{chip}</span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>
                      {page.hero.primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                  </div>
                  <p className="mt-5 max-w-3xl rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950 shadow-sm ring-1 ring-amber-200/40">{page.hero.disclaimer}</p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Page sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong", transitionInteractive, activeBrightnessPress)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <PremiumGuideSection
              id="intro"
              tipsKey="intro"
              intro={
                <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
                  {page.introParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.intro}
            >
              <QuickAnswerBox />
              <FeatureGrid items={page.introExpatQuestions} />
              <OrientationFlowBand />
              <GuideCrossLink
                href={COMMUNITY_BASICS_NETHERLANDS_PATH}
                title="Community Basics"
                description="Friends, neighbours, clubs and integration routes after social orientation."
                linkLabel="Open Community Basics"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              intro={
                <SectionIntro eyebrow="At a glance" title="Dutch Culture at a Glance" fullWidth>
                  <p>Six orientation signals — then verify with your neighbourhood and colleagues.</p>
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <MilestoneStatGrid items={page.snapshotMilestones} />
              <FeatureGrid items={page.snapshotCards} />
              <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="greetings"
              tipsKey="greetings"
              intro={<SectionIntro title={page.greetingsHeading}>{page.greetingsParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.greetings}
            >
              <InfoTable
                rows={page.greetingPhrases.map((r) => ({ situation: r.situation, dutch: r.dutch, english: r.english, note: r.note }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "dutch", label: "Dutch phrase" },
                  { key: "english", label: "English" },
                  { key: "note", label: "Note" },
                ]}
              />
              <InfoTable
                rows={page.greetingExamples.map((r) => ({ setting: r.setting, hello: r.hello, goodbye: r.goodbye, note: r.note }))}
                columns={[
                  { key: "setting", label: "Setting" },
                  { key: "hello", label: "Hello" },
                  { key: "goodbye", label: "Goodbye" },
                  { key: "note", label: "Note" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="punctuality"
              tipsKey="punctuality"
              intro={<SectionIntro title={page.punctualityHeading}>{page.punctualityParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.punctuality}
            >
              <InfoTable
                rows={page.punctualityExamples.map((r) => ({ situation: r.situation, expectation: r.expectation, tip: r.tip }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "expectation", label: "Expectation" },
                  { key: "tip", label: "Tip" },
                ]}
              />
              <ChecklistBlock title="Punctuality quick check" items={page.punctualityQuickCheck} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="invitations"
              tipsKey="invitations"
              intro={<SectionIntro title={page.invitationsHeading}>{page.invitationsParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.invitations}
            >
              <InfoTable
                rows={page.visitFlowSteps.map((r) => ({ step: r.step, detail: r.detail }))}
                columns={[
                  { key: "step", label: "Step" },
                  { key: "detail", label: "What to do" },
                ]}
              />
              <FeatureGrid items={page.giftIdeas} />
              <BulletPanel title="Visiting someone's home" items={page.invitationTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="birthdays"
              tipsKey="birthdays"
              intro={<SectionIntro title={page.birthdaysHeading}>{page.birthdaysParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.birthdays}
            >
              <InfoTable
                rows={page.birthdayPhrases.map((r) => ({ situation: r.situation, dutch: r.dutch, english: r.english, note: r.note }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "dutch", label: "Dutch phrase" },
                  { key: "english", label: "English" },
                  { key: "note", label: "Note" },
                ]}
              />
              <ChecklistBlock title="Office birthday checklist" items={page.officeBirthdayChecklist} columns={2} />
              <BulletPanel title="Birthday practical tips" items={page.birthdayTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="splitting-bill"
              tipsKey="splittingBill"
              intro={<SectionIntro title={page.splittingBillHeading}>{page.splittingBillParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.splittingBill}
            >
              <InfoTable
                rows={page.splittingBillExamples.map((r) => ({ context: r.context, practice: r.practice, note: r.note }))}
                columns={[
                  { key: "context", label: "Context" },
                  { key: "practice", label: "Common practice" },
                  { key: "note", label: "Note" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="direct-communication"
              tipsKey="directCommunication"
              intro={<SectionIntro title={page.directCommunicationHeading}>{page.directCommunicationParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.directCommunication}
            >
              <InfoTable
                rows={page.everydayDirectnessExamples.map((r) => ({ said: r.said, oftenMeans: r.oftenMeans, tryResponse: r.tryResponse }))}
                columns={[
                  { key: "said", label: "What you might hear" },
                  { key: "oftenMeans", label: "Often means" },
                  { key: "tryResponse", label: "Try responding" },
                ]}
              />
              <div className="grid gap-4 md:grid-cols-2">
                {page.directCommunicationLinks.map((link) => (
                  <GuideCrossLink key={link.href} href={link.href} title={link.label} description={link.description ?? ""} linkLabel="Open guide" />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="personal-space"
              tipsKey="personalSpace"
              intro={<SectionIntro title={page.personalSpaceHeading}>{page.personalSpaceParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.personalSpace}
            >
              <InfoTable
                rows={page.boundaryScripts.map((r) => ({ question: r.question, response: r.response, note: r.note }))}
                columns={[
                  { key: "question", label: "Sensitive question" },
                  { key: "response", label: "Polite response" },
                  { key: "note", label: "Note" },
                ]}
              />
              <BulletPanel title="Respecting boundaries" items={page.personalSpaceTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="neighbour-etiquette"
              tipsKey="neighbourEtiquette"
              intro={<SectionIntro title={page.neighbourHeading}>{page.neighbourParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.neighbourEtiquette}
            >
              <InfoTable
                rows={page.neighbourScenarios.map((r) => ({ situation: r.situation, action: r.action, note: r.note }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "action", label: "Helpful action" },
                  { key: "note", label: "Note" },
                ]}
              />
              <BulletPanel title="Neighbour etiquette" items={page.neighbourTips} />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.neighbourLinks.map((link) => (
                  <GuideCrossLink key={link.href} href={link.href} title={link.label} description={link.description ?? ""} linkLabel="Open guide" />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="cycling"
              tipsKey="cycling"
              intro={<SectionIntro title={page.cyclingHeading}>{page.cyclingParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.cycling}
            >
              <InfoTable
                rows={page.cyclingSituations.map((r) => ({ situation: r.situation, rule: r.rule, note: r.note }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "rule", label: "Rule / courtesy" },
                  { key: "note", label: "Note" },
                ]}
              />
              <BulletPanel title="Cycling courtesy" items={page.cyclingTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="public-transport"
              tipsKey="publicTransport"
              intro={<SectionIntro title={page.publicTransportHeading}>{page.publicTransportParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.publicTransport}
            >
              <InfoTable
                rows={page.publicTransportScenarios.map((r) => ({ scenario: r.scenario, behaviour: r.behaviour, note: r.note }))}
                columns={[
                  { key: "scenario", label: "Scenario" },
                  { key: "behaviour", label: "Expected behaviour" },
                  { key: "note", label: "Note" },
                ]}
              />
              <BulletPanel title="Public transport tips" items={page.publicTransportTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="contexts"
              tipsKey="workplaceVsSocial"
              intro={<SectionIntro title={page.contextsHeading}>{page.contextsParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.workplaceVsSocial}
            >
              <InfoTable
                rows={page.contextComparison.map((r) => ({
                  context: r.context,
                  greetings: r.greetings,
                  punctuality: r.punctuality,
                  directness: r.directness,
                  gifts: r.gifts,
                }))}
                columns={[
                  { key: "context", label: "Context" },
                  { key: "greetings", label: "Greetings" },
                  { key: "punctuality", label: "Punctuality" },
                  { key: "directness", label: "Directness" },
                  { key: "gifts", label: "Gifts" },
                ]}
              />
              <ChecklistBlock title="Mirror the setting" items={page.contextMirrorTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="social-events"
              tipsKey="socialEvents"
              intro={<SectionIntro title={page.socialEventsHeading}>{page.socialEventsParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>}
              visual={page.visuals.socialEvents}
            >
              <FeatureGrid items={page.socialEventExamples} />
              <ChecklistBlock title="Before you go" items={page.socialEventParticipationTips} columns={2} />
              <GuideCrossLink
                href={COMMUNITY_BASICS_NETHERLANDS_PATH}
                title="Community Basics"
                description="Making friends, clubs and integration routes after local events."
                linkLabel="Open Community Basics"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="situations"
              tipsKey="situations"
              intro={<SectionIntro title={page.situationsHeading}><p>Practical advice for everyday settings — observe locally before assuming intent.</p></SectionIntro>}
              visual={page.visuals.situations}
            >
              <SituationCardGrid items={page.situationCards} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              intro={<SectionIntro title={page.mistakesHeading}><p>Common adaptation gaps — not permanent mismatches.</p></SectionIntro>}
              visual={page.visuals.mistakes}
            >
              <SituationCardGrid items={page.mistakeCards} />
              <InfoTable
                rows={page.mistakeRecoveryScripts.map((r) => ({ mistake: r.mistake, fix: r.fix, note: r.note }))}
                columns={[
                  { key: "mistake", label: "Mistake" },
                  { key: "fix", label: "Recovery move" },
                  { key: "note", label: "Note" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="success-checklist"
              tipsKey="successChecklist"
              intro={<SectionIntro title="Feeling Comfortable Faster"><p>Work through over your first months — consistency beats perfection.</p></SectionIntro>}
              visual={page.visuals.successChecklist}
            >
              <ChecklistBlock title="Social success checklist" items={page.successChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="myths"
              tipsKey="myths"
              intro={<SectionIntro title="Common Misconceptions"><p>Balanced explanations — individuals and cities vary widely.</p></SectionIntro>}
              visual={page.visuals.myths}
            >
              <MythCardGrid items={page.myths} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              tipsKey="faq"
              intro={<SectionIntro title="Frequently Asked Questions"><p>Confirm specifics with neighbours and colleagues — norms vary by region.</p></SectionIntro>}
              visual={page.visuals.faq}
            >
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
              <BulletPanel title="After the FAQ" items={page.faqNextSteps} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              tipsKey="relatedGuides"
              intro={<SectionIntro title="Related Guides"><p>Continue from social norms into community, workplace and language guides.</p></SectionIntro>}
              visual={page.visuals.relatedGuides}
            >
              <BulletPanel title="Suggested reading order" items={page.relatedGuidesReadingOrder} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.relatedGuides.map((item, index) => (
                  <LinkCard key={item.label} item={item} iconIndex={index} />
                ))}
              </div>
            </PremiumGuideSection>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10")}>
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Plan the Next Step" tone="onDark" fullWidth>
                  <p>Move from social norms orientation into community integration, workplace culture and language learning.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={guidePremiumVisualSpacingClass} />
                <div className={guidePremiumSectionDetailStackClass}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {page.exploreNextCards.map((item, index) => (
                      <LinkCard key={item.label} item={item} iconIndex={index} tone="onDark" />
                    ))}
                  </div>
                  <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="text-base font-bold tracking-tight text-white">Choose your next guide</h3>
                    <ul className="mt-4 grid gap-3 md:grid-cols-2">
                      {page.exploreNextTips.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan-100 ring-1 ring-white/15">
                            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                  <div className="grid gap-4 md:grid-cols-2">
                    {page.officialSources.map((source) => (
                      <a
                        key={source.label}
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10 transition hover:bg-white/15"
                      >
                        <h3 className="text-base font-bold text-white">{source.label}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{source.description}</p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                          Open official source
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
