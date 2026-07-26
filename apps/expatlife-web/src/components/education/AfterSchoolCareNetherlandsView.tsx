import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Globe2,
  HeartHandshake,
  Home,
  MapPin,
  PiggyBank,
  School,
  ShieldCheck,
  Users,
  WalletCards,
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
import { BsoProviderDirectory } from "./BsoProviderDirectory";
import {
  CHILDCARE_ALLOWANCE_PATH,
  DAYCARE_NETHERLANDS_PATH,
  EDUCATION_HUB_PATH,
  afterSchoolCareNetherlandsPage as page,
  type BsoLink,
  type BsoMistakeCard,
  type BsoTypeCard,
} from "./afterSchoolCareNetherlandsPageModel";

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
const cardIcons = [School, Clock, Bus, Users, MapPin, Globe2, Home, WalletCards, PiggyBank, FileText] as const;
const snapshotIcons = [Clock, School, PiggyBank, WalletCards, Users, Home] as const;
const orientationIcons = [Calendar, School, MapPin] as const;
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

const sectionClassOnDark = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  "relative isolate overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-white/10 sm:p-8 lg:p-10"
);

function PremiumGuideSection({
  id,
  intro,
  visual,
  children,
  visualTone = "default",
  sectionTone = "default",
  tipsKey,
}: {
  id: string;
  intro: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
  visualTone?: "default" | "onDark";
  sectionTone?: "default" | "onDark";
  tipsKey?: keyof typeof page.visualTextDetails;
}) {
  const onDark = sectionTone === "onDark";
  return (
    <section id={id} className={onDark ? sectionClassOnDark : sectionClass}>
      {onDark ? <div className={cn("absolute inset-x-6 top-0 h-1.5 rounded-full sm:inset-x-8 lg:inset-x-10", movingNlSignatureGradientClass)} aria-hidden /> : null}
      <div className={cn(guidePremiumIntroStackClass, onDark && "relative mt-2")}>{intro}</div>
      <GuidePremiumVisualFigure visual={visual} tone={visualTone} className={guidePremiumVisualSpacingClass} />
      <div className={guidePremiumSectionDetailStackClass}>
        {tipsKey ? <VisualTextDetails tipsKey={tipsKey} tone={onDark ? "onDark" : "default"} /> : null}
        {children}
      </div>
    </section>
  );
}

function VisualTextDetails({ tipsKey, tone = "default" }: { tipsKey: keyof typeof page.visualTextDetails; tone?: "default" | "onDark" }) {
  const details = page.visualTextDetails[tipsKey];
  return <BulletPanel title={details.title} items={details.items} tone={tone} />;
}

function BsoOrientationFlowBand({ className }: { className?: string }) {
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
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves before registering for BSO</h3>
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

function ScenarioTable({
  title,
  rows,
  className,
}: {
  title: string;
  rows: ReadonlyArray<{ profile: string; scenario: string; whatToCheck: string }>;
  className?: string;
}) {
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

function BulletPanel({ title, items, tone = "default" }: { title: string; items: readonly string[]; tone?: "default" | "onDark" }) {
  const onDark = tone === "onDark";
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl p-5 shadow-sm ring-1",
        onDark
          ? "border-white/10 bg-white/10 text-white ring-white/10"
          : "border border-slate-200/90 bg-white/95 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className={cn("text-base font-bold tracking-tight", onDark ? "text-white" : "text-foreground")}>{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className={cn("flex gap-3 text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1",
                onDark ? "bg-white/10 text-cyan-200 ring-white/15" : "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10"
              )}
            >
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

function CareTypeCard({ card, index }: { card: BsoTypeCard; index: number }) {
  const Icon = cardIcons[index % cardIcons.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold text-foreground">{card.title}</h3>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{card.dutchName}</p>
      <dl className="mt-3 space-y-2 text-sm text-foreground-muted">
        <div><dt className="font-semibold text-foreground">Hours</dt><dd>{card.hours}</dd></div>
        <div><dt className="font-semibold text-foreground">Who it suits</dt><dd>{card.users}</dd></div>
        <div><dt className="font-semibold text-foreground">Activities</dt><dd>{card.activities}</dd></div>
      </dl>
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
        <div><dt className="font-semibold text-foreground">Availability</dt><dd className="text-foreground-muted">{city.availability}</dd></div>
        <div><dt className="font-semibold text-foreground">English options</dt><dd className="text-foreground-muted">{city.englishOptions}</dd></div>
        <div><dt className="font-semibold text-foreground">Waiting lists</dt><dd className="text-foreground-muted">{city.waitingLists}</dd></div>
        <div><dt className="font-semibold text-foreground">International community</dt><dd className="text-foreground-muted">{city.internationalCommunity}</dd></div>
      </dl>
    </article>
  );
}

function MistakeCard({ card, index }: { card: BsoMistakeCard; index: number }) {
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
        <span className="font-bold text-foreground">Fix: </span>{card.advice}
      </p>
    </article>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: BsoLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
        {!isLive ? (
          <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500")}>
            Coming soon
          </span>
        ) : null}
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

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
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

function TimelineSteps() {
  return (
    <ol className="relative space-y-0">
      {page.dailyRoutine.steps.map((step, index) => (
        <li key={step.time} className="relative flex gap-4 pb-8 last:pb-0">
          {index < page.dailyRoutine.steps.length - 1 ? (
            <span className="absolute left-[1.125rem] top-10 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-brand/40 to-cyan-300/40" aria-hidden />
          ) : null}
          <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-bg-soft to-white text-xs font-bold text-brand-strong shadow-sm ring-2 ring-white">
            {step.time}
          </span>
          <div className={cn(cardClass, "flex-1 p-4")}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{step.time}</p>
            <h3 className="mt-1 text-base font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
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
      {page.snapshotCards.slice(0, 6).map((card, index) => {
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

export function AfterSchoolCareNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Education", item: new URL(EDUCATION_HUB_PATH, baseUrl).toString() },
    { name: "After-School Care", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href={EDUCATION_HUB_PATH} className="hover:text-foreground">Education</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">After-School Care</span>
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
                    Practical orientation only — not childcare advice. Availability, fees and allowance rules vary. We do not rank providers subjectively.
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="BSO guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <PremiumGuideSection
              id="quick-answer"
              tipsKey="intro"
              visual={page.visuals.intro}
              intro={
                <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
                  {page.quickAnswer.paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={cn(guidePremiumCardGridClass(page.quickAnswer.keyPoints.length))}>
                {page.quickAnswer.keyPoints.map((item, idx) => (
                  <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                ))}
              </div>
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
                <BsoOrientationFlowBand />
                <BulletPanel title="When families use BSO" items={page.quickAnswer.highlights} />
              </div>
              <ScenarioTable title="When BSO choice affects real family plans" rows={page.quickAnswer.scenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="At a glance" title="BSO snapshot for working parents" fullWidth>
                  <p>Compare care types before contacting providers — waiting lists and fees vary significantly by city and school partnership.</p>
                </SectionIntro>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
              </div>
              <BulletPanel title="How to use this snapshot" items={page.snapshotTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="what-is-bso"
              tipsKey="whatIsBso"
              visual={page.visuals.whatIsBso}
              intro={
                <SectionIntro eyebrow="Basics" title={page.whatIsBso.heading} fullWidth>
                  {page.whatIsBso.paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <BulletPanel title="BSO essentials" items={page.whatIsBso.points} />
              <InfoTable
                rows={page.whatIsBso.comparisonRows.map((r) => ({ factor: r.factor, detail: r.detail, planningNote: r.planningNote }))}
                columns={[
                  { key: "factor", label: "Factor" },
                  { key: "detail", label: "BSO vs daycare" },
                  { key: "planningNote", label: "Planning note" },
                ]}
              />
              <Link href={DAYCARE_NETHERLANDS_PATH} className={cn(secondaryCtaClass, "w-fit")}>
                Daycare guide (0–4 years)
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="types"
              tipsKey="careTypes"
              visual={page.visuals.careTypes}
              intro={
                <SectionIntro eyebrow="Options" title="Types of BSO and related care" fullWidth>
                  <p>Match care type to your work pattern, school calendar and child&apos;s age — not every location offers every option.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.careTypes.length)}>
                {page.careTypes.map((card, idx) => <CareTypeCard key={card.title} card={card} index={idx} />)}
              </div>
              <BulletPanel title="How to choose the right care type" items={page.careTypeSelectionTips} />
              <ScenarioTable title="Care type planning examples" rows={page.careTypeScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="daily-routine"
              tipsKey="dailyRoutine"
              visual={page.visuals.dailyRoutine}
              intro={
                <SectionIntro eyebrow="Routine" title={page.dailyRoutine.heading} fullWidth>
                  <p>{page.dailyRoutine.intro}</p>
                </SectionIntro>
              }
            >
              <TimelineSteps />
              <ChecklistBlock title="What to check on a BSO visit" items={page.dailyRoutine.visitChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="activities"
              tipsKey="activities"
              visual={page.visuals.activities}
              intro={
                <SectionIntro eyebrow="Play & learn" title="Activities at Dutch BSO" fullWidth>
                  <p>Programmes vary by provider, season and age group — ask about daily outdoor time and activity rotation during visits.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.activities.length)}>
                {page.activities.map((act, idx) => <FeatureCard key={act.title} title={act.title} body={act.body} iconIndex={idx} />)}
              </div>
              <BulletPanel title="Questions to ask about activities on a visit" items={page.activityVisitQuestions} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="directory"
              tipsKey="providersDirectory"
              visual={page.visuals.providersDirectory}
              intro={
                <SectionIntro eyebrow="Providers" title="BSO provider directory" fullWidth>
                  <p>National and regional providers for orientation — always confirm availability, LRK registration and school pickup lists directly.</p>
                </SectionIntro>
              }
            >
              <BulletPanel title="How to use this directory" items={page.directoryUsageTips} />
              <BsoProviderDirectory providers={page.providers} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="costs"
              tipsKey="costs"
              visual={page.visuals.costs}
              intro={
                <SectionIntro eyebrow="Budget" title={page.costs.heading} fullWidth>
                  {page.costs.paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <InfoTable
                rows={page.costs.rows.map((r) => ({ category: r.category, range: r.range, notes: r.notes }))}
                columns={[
                  { key: "category", label: "Cost type" },
                  { key: "range", label: "Indicative range" },
                  { key: "notes", label: "Notes" },
                ]}
              />
              <p className="text-sm leading-relaxed text-foreground-muted">{page.costs.disclaimer}</p>
              <ScenarioTable title="BSO cost planning examples" rows={page.costs.scenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="allowance"
              tipsKey="childcareAllowance"
              visual={page.visuals.childcareAllowance}
              intro={
                <SectionIntro eyebrow="Benefits" title={page.allowance.heading} fullWidth>
                  {page.allowance.paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <BulletPanel title="Allowance essentials for BSO" items={page.allowance.points} />
              <div className={cn(guidePremiumCardGridClass(page.allowance.links.length))}>
                {page.allowance.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <Link href={CHILDCARE_ALLOWANCE_PATH} className={cn(primaryCtaClass, "w-fit")}>
                Full childcare allowance guide
                <HeartHandshake className="h-4 w-4" aria-hidden />
              </Link>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="waiting-lists"
              tipsKey="waitingLists"
              visual={page.visuals.waitingLists}
              intro={
                <SectionIntro eyebrow="Timing" title={page.waitingLists.heading} fullWidth>
                  {page.waitingLists.paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <BulletPanel title="Waiting list planning tips" items={page.waitingLists.points} />
              <ScenarioTable title="Waiting list planning examples" rows={page.waitingLists.scenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="holiday-programmes"
              tipsKey="holidayProgrammes"
              visual={page.visuals.holidayProgrammes}
              intro={
                <SectionIntro eyebrow="School breaks" title={page.holidayProgrammes.heading} fullWidth>
                  {page.holidayProgrammes.paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.holidayProgrammes.programmes.length)}>
                {page.holidayProgrammes.programmes.map((prog, idx) => <FeatureCard key={prog.title} title={prog.title} body={prog.body} iconIndex={idx} />)}
              </div>
              <BulletPanel title="Holiday booking tips" items={page.holidayProgrammes.bookingTips} />
              <ScenarioTable title="Holiday care planning examples" rows={page.holidayProgrammes.scenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="choosing-bso"
              tipsKey="choosingBso"
              visual={page.visuals.choosingBso}
              intro={
                <SectionIntro eyebrow="Decide" title={page.choosingBso.heading} fullWidth>
                  {page.choosingBso.paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <InfoTable
                rows={page.choosingBso.matrix.map((r) => ({ factor: r.factor, question: r.question, example: r.example }))}
                columns={[
                  { key: "factor", label: "Factor" },
                  { key: "question", label: "Ask yourself" },
                  { key: "example", label: "Example" },
                ]}
              />
              <ChecklistBlock title="How to choose BSO — step by step" items={page.choosingBso.howToSteps.map((s) => `${s.name}: ${s.text}`)} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="transport"
              tipsKey="transport"
              visual={page.visuals.transport}
              intro={
                <SectionIntro eyebrow="Logistics" title={page.transport.heading} fullWidth>
                  {page.transport.paragraphs.map((p) => <p key={p.slice(0, 48)}>{p}</p>)}
                </SectionIntro>
              }
            >
              <BulletPanel title="Transport and pickup options" items={page.transport.points} />
              <BulletPanel title="Practical pickup tips" items={page.transportPracticalTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="city-comparison"
              tipsKey="cityComparison"
              visual={page.visuals.cityComparison}
              intro={
                <SectionIntro eyebrow="Cities" title="City comparison for BSO families" fullWidth>
                  <p>Waiting lists, English options and international communities differ by city — compare before finalising housing and school choice.</p>
                </SectionIntro>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.cityComparison.map((city) => <CityComparisonCard key={city.city} city={city} />)}
              </div>
              <BulletPanel title="Choosing a city for BSO planning" items={page.cityComparisonTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              tipsKey="checklist"
              visual={page.visuals.checklist}
              intro={
                <SectionIntro eyebrow="Checklist" title="Expat BSO planning checklist" fullWidth>
                  <p>Work through this list once your basisschool place and work hours are confirmed.</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Phase 1 — research (when school place confirmed)" items={page.checklistEarly} columns={2} />
              <ChecklistBlock title="Phase 2 — registration and visits" items={page.checklistRegistration} columns={2} />
              <ChecklistBlock title="Phase 3 — before the first BSO day" items={page.checklistPreStart} columns={2} />
              <ChecklistBlock title="Full BSO planning checklist" items={page.checklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              visual={page.visuals.mistakes}
              intro={
                <SectionIntro eyebrow="Avoid" title="Common BSO mistakes for expat families" fullWidth>
                  <p>These patterns cause stress when school starts — plan around them before September.</p>
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
                  <p>Orientation answers — confirm provider-specific rules and allowance entitlement on official sources.</p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Quick reference" items={page.faqQuickReference} />
              <Accordion items={faqItems} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              tipsKey="relatedGuides"
              visual={page.visuals.relatedGuides}
              intro={
                <SectionIntro eyebrow="Family guides" title="Related guides for relocating families" fullWidth>
                  <p>Connect BSO planning with daycare, schools, benefits and relocation content.</p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Read next by topic" items={page.relatedGuidesTips} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.relatedGuides.map((item, idx) => <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="education-hub"
              tipsKey="educationHub"
              visual={page.visuals.educationHub}
              intro={
                <SectionIntro eyebrow="Education hub" title="Explore Childcare & Education" fullWidth>
                  <p>This page is the BSO cornerstone — explore related education topics next.</p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Education cluster overview" items={page.educationHubTips} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.educationHubCards.map((item, idx) => <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />)}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="explore-next"
              tipsKey="exploreNext"
              visual={page.visuals.exploreNext}
              visualTone="onDark"
              sectionTone="onDark"
              intro={
                <SectionIntro eyebrow="Explore next" title="Plan the next step" tone="onDark" fullWidth>
                  <p>Continue planning with allowance, schools and family relocation guides.</p>
                </SectionIntro>
              }
            >
              <div className={cn(guidePremiumCardGridClass(page.exploreNextCards.length))}>
                {page.exploreNextCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} tone="onDark" />)}
              </div>
              <SectionIntro eyebrow="Trust" title="Official sources" tone="onDark" fullWidth>
                <p>{page.officialSourcesNote}</p>
              </SectionIntro>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.officialSources.map((source) => <SourceLink key={source.href} source={source} />)}
              </div>
            </PremiumGuideSection>
          </div>
        </Container>
      </main>
    </>
  );
}
