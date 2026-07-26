import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Bike,
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Heart,
  HeartHandshake,
  Home,
  Landmark,
  MapPin,
  ShieldCheck,
  Sun,
  TreePine,
  Users,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
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
import { GuidePremiumVisualFigure, type GuidePremiumVisual } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  guidePremiumCardGridClass,
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualSpacingClass,
} from "@/lib/ui/guide-premium-page-ui";
import {
  DAYCARE_NETHERLANDS_PATH,
  FAMILY_TOOLS_PATH,
  parentingNetherlandsPage as page,
  type ParentingLink,
} from "./parentingNetherlandsPageModel";

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
const cardIcons = [Baby, Users, Heart, BookOpen, Bike, TreePine, Sun, Globe2, Home, Landmark, HeartHandshake, ShieldCheck] as const;
const snapshotIcons = [Heart, Sun, BookOpen, ShieldCheck, Users, Home] as const;
const orientationIcons = [Calendar, MapPin, Globe2] as const;
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
  visual,
  children,
  visualTone = "default",
  tipsKey,
}: {
  id: string;
  intro: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
  visualTone?: "default" | "onDark";
  tipsKey?: keyof typeof page.visualTextDetails;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className={guidePremiumIntroStackClass}>{intro}</div>
      <GuidePremiumVisualFigure visual={visual} tone={visualTone} className={guidePremiumVisualSpacingClass} />
      <div className={guidePremiumSectionDetailStackClass}>
        {tipsKey ? <VisualTextDetails tipsKey={tipsKey} /> : null}
        {children}
      </div>
    </section>
  );
}

function VisualTextDetails({ tipsKey }: { tipsKey: keyof typeof page.visualTextDetails }) {
  const details = page.visualTextDetails[tipsKey];
  return <BulletPanel title={details.title} items={details.items} />;
}

function ParentingOrientationFlowBand({ className }: { className?: string }) {
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
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves for expat parents</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {page.introPlanningSteps.map((step, index) => {
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

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
  fullWidth = true,
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

function ChecklistBlock({ title, items, columns = 1, className }: { title: string; items: readonly string[]; columns?: 1 | 2; className?: string }) {
  return (
    <div className={cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
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

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
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

function InfoTable({ rows, columns }: { rows: Array<Record<string, string>>; columns: Array<{ key: string; label: string }> }) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] divide-y divide-slate-200 text-left text-sm">
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

function ScenarioTable({ title, rows, className }: { title: string; rows: ReadonlyArray<{ profile: string; scenario: string; whatToCheck: string }>; className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ profile: row.profile, scenario: row.scenario, whatToCheck: row.whatToCheck }))}
          columns={[
            { key: "profile", label: "Profile" },
            { key: "scenario", label: "Scenario" },
            { key: "whatToCheck", label: "What to check" },
          ]}
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
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

function PrincipleCard({ principle, index }: { principle: (typeof page.parentingPrinciples)[number]; index: number }) {
  const Icon = cardIcons[index % cardIcons.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold text-foreground">{principle.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{principle.body}</p>
      <p className="mt-3 rounded-xl border border-cyan-100 bg-cyan-50/60 px-3 py-2 text-sm leading-relaxed text-foreground-muted">
        <span className="font-semibold text-foreground">Nuance: </span>{principle.nuance}
      </p>
    </article>
  );
}

function MiniStatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <article className={cn(cardClass, "p-4 sm:p-5")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{label}</p>
      <p className="mt-2 text-2xl font-black tracking-tight text-foreground">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{note}</p>
    </article>
  );
}

function ChallengeCard({ card, index }: { card: (typeof page.expatChallenges)[number]; index: number }) {
  const Icon = cardIcons[index % cardIcons.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold text-foreground">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
      <p className="mt-3 rounded-2xl bg-copilot-bg-soft/70 p-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-copilot-primary/10">
        <span className="font-bold text-foreground">Tip: </span>{card.advice}
      </p>
    </article>
  );
}

function MistakeCard({ card, index }: { card: (typeof page.mistakeCards)[number]; index: number }) {
  const Icon = cardIcons[index % cardIcons.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold text-foreground">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
      <p className="mt-3 rounded-2xl bg-copilot-bg-soft/70 p-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-copilot-primary/10">
        <span className="font-bold text-foreground">Fix: </span>{card.advice}</p>
    </article>
  );
}

function CityComparisonCard({ city }: { city: (typeof page.cityComparison)[number] }) {
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-lg font-bold text-foreground">
        <Link href={city.href} className="hover:text-link">{city.city}</Link>
      </h3>
      <dl className="mt-4 space-y-2 text-sm">
        <div><dt className="font-semibold text-foreground">Schools</dt><dd className="text-foreground-muted">{city.schools}</dd></div>
        <div><dt className="font-semibold text-foreground">Parks</dt><dd className="text-foreground-muted">{city.parks}</dd></div>
        <div><dt className="font-semibold text-foreground">Sports</dt><dd className="text-foreground-muted">{city.sports}</dd></div>
        <div><dt className="font-semibold text-foreground">Family friendliness</dt><dd className="text-foreground-muted">{city.familyFriendliness}</dd></div>
        <div><dt className="font-semibold text-foreground">International community</dt><dd className="text-foreground-muted">{city.internationalCommunity}</dd></div>
      </dl>
    </article>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: ParentingLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10", onDark && "from-white/10 to-white/5 text-cyan-200 ring-white/10")}>
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}
      </span>
      {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
      {isLive ? (
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );
  if (!isLive) return <article className={cn(cardClass, "opacity-90", onDark && "border-slate-700/80 bg-slate-900/40 ring-slate-600/30")}>{body}</article>;
  const linkClass = cn(
    cardClass,
    "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
    onDark && "border-slate-700/80 bg-slate-900/40 ring-slate-600/30",
    transitionInteractive,
    activeBrightnessPress
  );
  return (
    <Link href={item.href} className={linkClass}>
      {body}
    </Link>
  );
}

function SourceLink({ source }: { source: { label: string; href: string; description: string } }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-link">
        <ShieldCheck className="h-4 w-4 text-brand-strong" aria-hidden />
        {source.label}
        <ExternalLink className="h-3.5 w-3.5 text-foreground-muted" aria-hidden />
      </span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">
        Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </a>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <div className={cn("absolute inset-x-0 top-0 z-10 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority unoptimized sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-white/10" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" aria-hidden />
    </figure>
  );
}

function HeroSignalStrip() {
  return (
    <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-3">
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {page.snapshotCards.map((card, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <div key={card.label} className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{card.label}</span>
                <span className="mt-1 block text-sm font-bold leading-snug text-foreground">{card.value}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-foreground-muted">{card.note}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ParentingNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Family", item: new URL(FAMILY_TOOLS_PATH, baseUrl).toString() },
    { name: "Parenting", item: new URL(page.path, baseUrl).toString() },
  ];
  const faqItems = page.faq.map((item, idx) => ({ id: `faq-${idx}`, title: item.q, content: item.a }));

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
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
                    <span className="text-foreground-muted">Family</span>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Parenting</span>
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
                  <p className="mt-5 max-w-3xl rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950 shadow-sm ring-1 ring-amber-200/40">
                    Practical orientation only — not medical, legal or parenting advice. Confirm healthcare, school and childcare details with official providers and your municipality.
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Parenting guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <PremiumGuideSection
              id="quick-answer"
              tipsKey="quickAnswer"
              visual={page.visuals.quickAnswer}
              intro={
                <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
                  {page.quickAnswer.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={cn(guidePremiumCardGridClass(page.quickAnswer.keyPoints.length))}>
                {page.quickAnswer.keyPoints.map((item, idx) => (
                  <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                ))}
              </div>
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
                <ParentingOrientationFlowBand />
                <BulletPanel title="What many parents appreciate in the Netherlands" items={page.quickAnswer.highlights} />
              </div>
              <ScenarioTable title="When parenting plans affect real relocation decisions" rows={page.quickAnswer.scenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="At a glance" title="Parenting in the Netherlands snapshot" fullWidth>
                  <p>Key pillars of family life for expat parents — from public services to outdoor culture and work-life balance.</p>
                </SectionIntro>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="parenting-philosophy"
              tipsKey="parentingPhilosophy"
              visual={page.visuals.parentingPhilosophy}
              intro={
                <SectionIntro eyebrow="Culture" title={page.parentingPhilosophy.heading} fullWidth>
                  {page.parentingPhilosophy.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.parentingPrinciples.length)}>
                {page.parentingPrinciples.map((principle, idx) => (
                  <PrincipleCard key={principle.title} principle={principle} index={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="family-life"
              tipsKey="familyLife"
              visual={page.visuals.familyLife}
              intro={
                <SectionIntro eyebrow="Daily life" title={page.familyLife.heading} fullWidth>
                  {page.familyLife.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.familyLife.activities.length)}>
                {page.familyLife.activities.map((activity, idx) => (
                  <FeatureCard key={activity.title} title={activity.title} body={activity.body} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="childcare"
              tipsKey="childcare"
              visual={page.visuals.childcare}
              intro={
                <SectionIntro eyebrow="Childcare" title={page.childcare.heading} fullWidth>
                  {page.childcare.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={cn(guidePremiumCardGridClass(page.childcare.options.length))}>
                {page.childcare.options.map((option, idx) => (
                  <FeatureCard key={option.title} title={option.title} body={option.body} iconIndex={idx} />
                ))}
              </div>
              <BulletPanel title="Waiting list tips for expat families" items={page.childcare.waitingListTips} />
              <div className={cn(guidePremiumCardGridClass(page.childcare.links.length))}>
                {page.childcare.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <Link href={DAYCARE_NETHERLANDS_PATH} className={cn(primaryCtaClass, "w-fit")}>
                Full daycare guide
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="education"
              tipsKey="education"
              visual={page.visuals.education}
              intro={
                <SectionIntro eyebrow="Schools" title={page.education.heading} fullWidth>
                  {page.education.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <InfoTable
                rows={page.education.decisionRows.map((r) => ({ path: r.path, bestFor: r.bestFor, tradeOff: r.tradeOff }))}
                columns={[
                  { key: "path", label: "School path" },
                  { key: "bestFor", label: "Best for" },
                  { key: "tradeOff", label: "Trade-off" },
                ]}
              />
              <BulletPanel title="Education essentials for expat families" items={page.education.points} />
              <div className={cn(guidePremiumCardGridClass(page.education.links.length))}>
                {page.education.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="healthcare"
              tipsKey="healthcare"
              visual={page.visuals.healthcare}
              intro={
                <SectionIntro eyebrow="Health" title={page.healthcare.heading} fullWidth>
                  {page.healthcare.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <BulletPanel title="Healthcare pathways for children" items={page.healthcare.points} />
              <div className={cn(guidePremiumCardGridClass(page.healthcare.links.length))}>
                {page.healthcare.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="sports"
              tipsKey="sportsActivities"
              visual={page.visuals.sportsActivities}
              intro={
                <SectionIntro eyebrow="Activities" title={page.sportsActivities.heading} fullWidth>
                  {page.sportsActivities.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={cn(guidePremiumCardGridClass(page.sportsActivities.sportCards.length))}>
                {page.sportsActivities.sportCards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <BulletPanel title="All popular sports and activities" items={page.sportsActivities.activities} />
              <BulletPanel title="Club enrolment tips" items={page.sportsActivities.enrolmentTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="outdoor-life"
              tipsKey="outdoorLife"
              visual={page.visuals.outdoorLife}
              intro={
                <SectionIntro eyebrow="Outdoor" title={page.outdoorLife.heading} fullWidth>
                  {page.outdoorLife.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <BulletPanel title="Outdoor play in Dutch family life" items={page.outdoorLife.points} />
              <BulletPanel title="Practical tips for your first season" items={page.outdoorLife.practicalTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="multilingual"
              tipsKey="multilingual"
              visual={page.visuals.multilingual}
              intro={
                <SectionIntro eyebrow="Language" title={page.multilingual.heading} fullWidth>
                  {page.multilingual.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <BulletPanel title="Raising multilingual children" items={page.multilingual.points} />
              <div className={cn(guidePremiumCardGridClass(page.multilingual.resources.length))}>
                {page.multilingual.resources.map((resource, idx) => (
                  <FeatureCard key={resource.title} title={resource.title} body={resource.body} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="moving"
              tipsKey="movingWithChildren"
              visual={page.visuals.movingWithChildren}
              intro={
                <SectionIntro eyebrow="Relocate" title={page.movingWithChildren.heading} fullWidth>
                  {page.movingWithChildren.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Moving with children checklist" items={page.movingWithChildren.checklist} columns={2} />
              <div className={cn(guidePremiumCardGridClass(page.movingWithChildren.links.length))}>
                {page.movingWithChildren.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="work-life"
              tipsKey="workLifeBalance"
              visual={page.visuals.workLifeBalance}
              intro={
                <SectionIntro eyebrow="Balance" title={page.workLifeBalance.heading} fullWidth>
                  {page.workLifeBalance.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <BulletPanel title="Work-life balance for parents" items={page.workLifeBalance.points} />
              <InfoTable
                rows={page.workLifeBalance.leaveOverview.map((row) => ({ type: row.type, detail: row.detail }))}
                columns={[
                  { key: "type", label: "Leave type" },
                  { key: "detail", label: "What to know" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="support"
              tipsKey="parentingSupport"
              visual={page.visuals.parentingSupport}
              intro={
                <SectionIntro eyebrow="Community" title={page.parentingSupport.heading} fullWidth>
                  {page.parentingSupport.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={cn(guidePremiumCardGridClass(page.parentingSupport.resources.length))}>
                {page.parentingSupport.resources.map((resource, idx) => (
                  <FeatureCard key={resource.title} title={resource.title} body={resource.body} iconIndex={idx} />
                ))}
              </div>
              <ChecklistBlock title="First month — build your support network" items={page.parentingSupport.firstMonthSteps} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="cities"
              tipsKey="cityComparison"
              visual={page.visuals.cityComparison}
              intro={
                <SectionIntro eyebrow="Compare" title="Family-friendly cities compared" fullWidth>
                  <p>City choice shapes schools, childcare waiting lists, outdoor lifestyle and international community — compare before you commit.</p>
                </SectionIntro>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.cityComparison.map((city) => <CityComparisonCard key={city.city} city={city} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="budget"
              tipsKey="familyBudget"
              visual={page.visuals.familyBudget}
              intro={
                <SectionIntro eyebrow="Budget" title={page.familyBudget.heading} fullWidth>
                  {page.familyBudget.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={cn(guidePremiumCardGridClass(page.familyBudget.items.length))}>
                {page.familyBudget.items.map((item, idx) => (
                  <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                ))}
              </div>
              <aside className={cn(cardClass, "p-5 sm:p-6")}>
                <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Example budget profile</p>
                <p className="mt-2 text-lg font-bold text-foreground">{page.familyBudget.budgetExample.profile}</p>
                <ul className="mt-4 space-y-2">
                  {page.familyBudget.budgetExample.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
              <div className={cn(guidePremiumCardGridClass(page.familyBudget.links.length))}>
                {page.familyBudget.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="challenges"
              tipsKey="expatChallenges"
              visual={page.visuals.expatChallenges}
              intro={
                <SectionIntro eyebrow="Expat life" title="Common expat parenting challenges" fullWidth>
                  <p>These challenges are predictable — address them early with local resources, schools and community networks.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.expatChallenges.length)}>
                {page.expatChallenges.map((card, idx) => <ChallengeCard key={card.title} card={card} index={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              tipsKey="checklist"
              visual={page.visuals.checklist}
              intro={
                <SectionIntro eyebrow="Checklist" title={page.checklist.heading} fullWidth>
                  <p>Work through this checklist in your first months after arrival.</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="First-year parenting checklist" items={page.checklist.items} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              visual={page.visuals.mistakes}
              intro={
                <SectionIntro eyebrow="Avoid" title="Common expat parenting mistakes" fullWidth>
                  <p>These patterns slow integration — plan around them from the start.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.mistakeCards.length)}>
                {page.mistakeCards.map((card, idx) => <MistakeCard key={card.title} card={card} index={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              tipsKey="faq"
              visual={page.visuals.faq}
              intro={
                <SectionIntro eyebrow="FAQ" title="Frequently asked questions" fullWidth>
                  <p>Orientation answers — confirm provider-specific details for your municipality and family situation.</p>
                </SectionIntro>
              }
            >
              <Accordion items={faqItems} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              tipsKey="relatedGuides"
              visual={page.visuals.relatedGuides}
              intro={
                <SectionIntro eyebrow="Family guides" title="Related guides for expat families" fullWidth>
                  <p>Connect parenting with childcare, schools, benefits and relocation content.</p>
                </SectionIntro>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.relatedGuides.map((item, idx) => <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="family-hub"
              tipsKey="familyHub"
              visual={page.visuals.familyHub}
              intro={
                <SectionIntro eyebrow="Family hub" title="Explore Family Life" fullWidth>
                  <p>This page is the parenting cornerstone — explore the full family cluster next.</p>
                </SectionIntro>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.familyHubCards.map((item, idx) => <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />)}
              </div>
            </PremiumGuideSection>

            <section
              id="explore-next"
              className={cn(
                CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
                "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10"
              )}
            >
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Plan the next step" tone="onDark">
                  <p>Continue with daycare, schools, child benefits and relocation guides.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={guidePremiumVisualSpacingClass} />
                <div className={guidePremiumSectionDetailStackClass}>
                  <div className={guidePremiumCardGridClass(page.exploreNextCards.length)}>
                    {page.exploreNextCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} tone="onDark" />)}
                  </div>
                  <SectionIntro eyebrow="Trust" title="Official sources" tone="onDark">
                    <p>{page.officialSourcesNote}</p>
                  </SectionIntro>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {page.officialSources.map((source) => <SourceLink key={source.href} source={source} />)}
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
