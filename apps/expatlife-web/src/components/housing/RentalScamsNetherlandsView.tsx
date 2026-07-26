import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Building2,
  Camera,
  CheckCircle2,
  Clock,
  Eye,
  ExternalLink,
  FileText,
  Globe2,
  Home,
  KeyRound,
  Lock,
  MapPin,
  Scale,
  Search,
  ShieldAlert,
  ShieldCheck,
  Siren,
  UserCheck,
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
import { HOUSING_HUB_PATH } from "./housingNetherlandsPageModel";
import {
  RENTAL_SCAMS_NETHERLANDS_PATH,
  rentalScamsNetherlandsPage as page,
  type HousingGuideLink,
  type MistakeCard as MistakeCardData,
  type ScamTypeCard,
  type TimelineStep,
} from "./rentalScamsNetherlandsPageModel";

const baseUrl = getSiteOrigin();

const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionClassOnDark = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  "relative isolate overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-white/10 sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);

const iconPool = [
  ShieldCheck,
  Search,
  Eye,
  FileText,
  Banknote,
  Siren,
  UserCheck,
  Lock,
  Building2,
  KeyRound,
  MapPin,
  Users,
  Globe2,
  Camera,
  Scale,
  Home,
  Clock,
] as const;
const snapshotIcons = [ShieldCheck, Clock, Eye, Banknote] as const;
const orientationIcons = [Search, Eye, FileText] as const;

const scenarioColumns = [
  { key: "situation", label: "Situation" },
  { key: "approach", label: "Approach" },
  { key: "firstStep", label: "First step" },
] as const;

const paymentColumns = [
  { key: "stage", label: "Stage" },
  { key: "safePractice", label: "Safe practice" },
  { key: "warningSign", label: "Warning sign" },
] as const;

const cityColumns = [
  { key: "city", label: "City" },
  { key: "marketPressure", label: "Market pressure" },
  { key: "whatToWatch", label: "What to watch for" },
  { key: "saferApproach", label: "Safer approach" },
] as const;

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
  sectionTone = "default",
  tipsKey,
}: {
  id: string;
  intro: ReactNode;
  introPanel?: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
  visualTone?: "default" | "onDark";
  sectionTone?: "default" | "onDark";
  tipsKey?: keyof typeof page.visualTextDetails;
}) {
  const onDark = sectionTone === "onDark";
  return (
    <section id={id} className={onDark ? sectionClassOnDark : sectionClass}>
      {onDark ? (
        <div
          className={cn("absolute inset-x-6 top-0 h-1.5 rounded-full sm:inset-x-8 lg:inset-x-10", movingNlSignatureGradientClass)}
          aria-hidden
        />
      ) : null}
      <div className={cn(guidePremiumIntroStackClass, onDark && "relative mt-2")}>
        {intro}
        {introPanel}
      </div>
      <GuidePremiumVisualFigure visual={visual} tone={visualTone} className={guidePremiumVisualSpacingClass} />
      <div className={guidePremiumSectionDetailStackClass}>
        {tipsKey ? <VisualTextDetails tipsKey={tipsKey} tone={onDark ? "onDark" : "default"} /> : null}
        {children}
      </div>
    </section>
  );
}

function VisualTextDetails({
  tipsKey,
  tone = "default",
}: {
  tipsKey: keyof typeof page.visualTextDetails;
  tone?: "default" | "onDark";
}) {
  const details = page.visualTextDetails[tipsKey];
  return <BulletPanel title={details.title} items={details.items} tone={tone} />;
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
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>
        {title}
      </h2>
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
          <div
            key={signal.label}
            className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm"
          >
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
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Safety flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves before any payment</h3>
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

function BulletPanel({
  title,
  items,
  tone = "default",
}: {
  title: string;
  items: readonly string[];
  tone?: "default" | "onDark";
}) {
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
      <ul className={cn("mt-4 grid gap-3", onDark ? undefined : "md:grid-cols-2")}>
        {items.map((item) => (
          <li
            key={item}
            className={cn("flex gap-3 text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}
          >
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1",
                onDark
                  ? "bg-white/10 text-cyan-200 ring-white/15"
                  : "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10"
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

function WarningPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-amber-200/80 bg-amber-50/80 p-5 shadow-sm ring-1 ring-amber-200/50",
        movingNlCardMicroLiftClass
      )}
      role="note"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-300" aria-hidden />
      <h3 className="flex items-center gap-2 text-base font-bold tracking-tight text-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-700" aria-hidden />
        {title}
      </h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-amber-950">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/70 text-amber-800 ring-1 ring-amber-200/70">
              <ShieldAlert className="h-3.5 w-3.5" aria-hidden />
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

function TipCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  return <FeatureCard title={title} body={body} iconIndex={iconIndex} />;
}

function MiniStatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <article className={cn(cardClass, "p-4 sm:p-5")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{label}</p>
      <p className="mt-2 text-xl font-black tracking-tight text-foreground">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{note}</p>
    </article>
  );
}

function MistakeCard({ card, index }: { card: MistakeCardData; index: number }) {
  const Icon = iconPool[index % iconPool.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
      <p className="mt-3 rounded-2xl bg-copilot-bg-soft/70 p-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-copilot-primary/10">
        <span className="font-bold text-foreground">Fix: </span>
        {card.tip}
      </p>
    </article>
  );
}

function ScamCard({ card, index }: { card: ScamTypeCard; index: number }) {
  const Icon = iconPool[index % iconPool.length];
  return (
    <article className={cn(cardClass, "p-5 sm:p-6")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Pattern {index + 1}</p>
          <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">{card.title}</h3>
          <p className="mt-1 text-sm font-semibold text-foreground">{card.summary}</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-copilot-bg-soft/60 p-4 ring-1 ring-copilot-primary/10">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">How it works</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.howItWorks}</p>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 ring-1 ring-amber-200/40">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-amber-900">
            <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
            Warning signs
          </p>
          <ul className="mt-3 space-y-2">
            {card.warningSigns.map((sign) => (
              <li key={sign} className="flex gap-2 text-sm leading-relaxed text-amber-950">
                <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700" aria-hidden />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 ring-1 ring-slate-900/[0.04]">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            How to avoid it
          </p>
          <ul className="mt-3 space-y-2">
            {card.howToAvoid.map((action) => (
              <li key={action} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Timeline({ steps, eyebrow }: { steps: readonly TimelineStep[]; eyebrow: string }) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => (
        <li key={step.phase} className="relative flex gap-4 pb-8 last:pb-0">
          {index < steps.length - 1 ? (
            <span
              className="absolute left-[1.125rem] top-10 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-brand/40 to-cyan-300/40"
              aria-hidden
            />
          ) : null}
          <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-bg-soft to-white text-xs font-bold text-brand-strong shadow-sm ring-2 ring-white">
            {step.phase}
          </span>
          <div className={cn(cardClass, "flex-1 p-4")}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">
              {eyebrow} {step.phase}
            </p>
            <h3 className="mt-1 text-base font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function DecisionTree() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Decision tree</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">{page.decisionTree.heading}</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{page.decisionTree.intro}</p>
        <ol className="mt-6 space-y-4">
          {page.decisionTree.steps.map((step) => (
            <li
              key={step.step}
              className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-copilot-bg-soft/50 p-4 shadow-sm ring-1 ring-slate-900/[0.03] sm:p-5"
            >
              <div className={cn("absolute inset-y-0 left-0 w-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-bg-soft to-white text-xs font-bold text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                  {step.step}
                </span>
                <p className="text-base font-bold leading-snug text-foreground">{step.question}</p>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-3 ring-1 ring-emerald-200/40">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-900">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                    Yes
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-950">{step.ifYes}</p>
                </div>
                <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3 ring-1 ring-amber-200/40">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-amber-900">
                    <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
                    No — or unsure
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-amber-950">{step.ifNo}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {page.decisionTree.outcomes.map((outcome, index) => {
          const Icon = index === 0 ? ShieldCheck : index === 1 ? Clock : ShieldAlert;
          return (
            <article key={outcome.label} className={cardClass}>
              <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h4 className="mt-4 text-base font-bold tracking-tight text-foreground">{outcome.label}</h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{outcome.detail}</p>
            </article>
          );
        })}
      </div>
      <p className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-slate-900/[0.04]">
        {page.decisionTree.note}
      </p>
    </div>
  );
}

function ChecklistBlock({
  title,
  items,
  columns = 1,
  className,
}: {
  title: string;
  items: readonly string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass,
        className
      )}
    >
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

function InfoTable({
  rows,
  columns,
}: {
  rows: Array<Record<string, ReactNode>>;
  columns: Array<{ key: string; label: string }>;
}) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-4 py-3 font-bold">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx}>
                {columns.map((column, cellIdx) => (
                  <td
                    key={column.key}
                    className={cn("px-4 py-4 text-foreground-muted", cellIdx === 0 && "font-semibold text-foreground")}
                  >
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

function LinkCard({
  item,
  iconIndex = 0,
  tone = "default",
}: {
  item: HousingGuideLink;
  iconIndex?: number;
  tone?: "default" | "onDark";
}) {
  const Icon = iconPool[iconIndex % iconPool.length];
  const isExternal = item.status === "external";
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1.5 rounded-t-2xl",
          isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200"
        )}
        aria-hidden
      />
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10",
          onDark && "from-white/10 to-white/5 text-cyan-200 ring-white/10"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? (
          <span
            className={cn(
              "ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]",
              onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500"
            )}
          >
            Coming soon
          </span>
        ) : null}
        {isExternal ? (
          <span
            className={cn(
              "ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]",
              onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500"
            )}
          >
            External
          </span>
        ) : null}
      </span>
      {item.description ? (
        <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
          {item.description}
        </span>
      ) : null}
      {isLive ? (
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
          Open {isExternal ? <ExternalLink className="h-3.5 w-3.5" aria-hidden /> : <ArrowRight className="h-3.5 w-3.5" aria-hidden />}
        </span>
      ) : null}
    </>
  );

  if (!isLive) {
    return (
      <article className={cn(cardClass, "opacity-90", onDark && "border-slate-700/80 bg-slate-900/40 ring-slate-600/30")}>
        {body}
      </article>
    );
  }

  const linkClass = cn(
    cardClass,
    "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
    onDark && "border-slate-700/80 bg-slate-900/40 ring-slate-600/30",
    transitionInteractive,
    activeBrightnessPress
  );

  if (isExternal) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {body}
      </a>
    );
  }

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
      className={cn(
        CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
        "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        movingNlCardMicroLiftClass,
        transitionInteractive,
        activeBrightnessPress
      )}
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
          "mt-4 inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand/20 bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:mt-0",
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

const faqAccordionItems = page.faq.map((item, index) => ({
  id: `faq-${index}`,
  title: item.q,
  content: item.a,
}));

export function RentalScamsNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Housing", item: new URL(HOUSING_HUB_PATH, baseUrl).toString() },
          { name: "Rental Scams", item: new URL(RENTAL_SCAMS_NETHERLANDS_PATH, baseUrl).toString() },
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
                    <Link href="/" className="hover:text-foreground">
                      Home
                    </Link>
                    <span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">
                      Netherlands
                    </Link>
                    <span aria-hidden>/</span>
                    <Link href={HOUSING_HUB_PATH} className="hover:text-foreground">
                      Housing
                    </Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">
                      Rental Scams
                    </span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    {page.hero.pageTitle}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {page.hero.chips.map((chip) => (
                      <span key={chip} className={cn(CITIES_FUNNEL_INFO_CHIP, "shadow-sm ring-1 ring-slate-900/[0.03]")}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>
                      {page.hero.primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>
                      {page.hero.secondaryCta.label}
                    </Link>
                  </div>
                  <p className="mt-5 max-w-3xl rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950 shadow-sm ring-1 ring-amber-200/40">
                    {page.hero.disclaimer}
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Page sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                    transitionInteractive,
                    activeBrightnessPress
                  )}
                >
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
                  {page.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.intro}
            >
              <QuickAnswerBox />
              <OrientationFlowBand />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              intro={
                <SectionIntro eyebrow="Snapshot" title="Six safety gates before you pay" fullWidth>
                  <p>
                    Read all six cards before responding to any listing with documents or money. Most fraud attempts fail at one
                    of these gates — which is exactly why they try to persuade you to skip one.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {page.snapshotSignals.map((signal) => (
                  <MiniStatCard key={signal.label} label={signal.label} value={signal.value} note={signal.note} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.snapshotCards.length)}>
                {page.snapshotCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="How to use this snapshot" items={page.snapshotTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="how-renting-works"
              tipsKey="howRentingWorks"
              intro={
                <SectionIntro eyebrow="Normal process" title={page.howRentingWorks.heading} fullWidth>
                  {page.howRentingWorks.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.howRentingWorks}
            >
              <Timeline steps={page.howRentingWorks.timeline} eyebrow="Step" />
              <BulletPanel title="Why the order protects you" items={page.howRentingWorks.orderTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="common-scams"
              tipsKey="commonScams"
              intro={
                <SectionIntro eyebrow="Scam types" title={page.commonScams.heading} fullWidth>
                  <p>{page.commonScams.intro}</p>
                </SectionIntro>
              }
              visual={page.visuals.commonScams}
            >
              <div className="grid gap-5 xl:grid-cols-2">
                {page.commonScams.cards.map((card, index) => (
                  <ScamCard key={card.title} card={card} index={index} />
                ))}
              </div>
              <BulletPanel title="Reading the patterns" items={page.commonScams.patternTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="red-flags"
              tipsKey="redFlags"
              intro={
                <SectionIntro eyebrow="Red flags" title={page.redFlags.heading} fullWidth>
                  {page.redFlags.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.redFlags}
            >
              <WarningPanel title="Stop and verify if you see any of these" items={page.redFlags.checklist} />
              <BulletPanel title="Red-flag discipline" items={page.redFlags.flagTips} />
              <DecisionTree />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="verify-landlord"
              tipsKey="verifyLandlord"
              intro={
                <SectionIntro eyebrow="Verification" title={page.verifyLandlord.heading} fullWidth>
                  {page.verifyLandlord.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.verifyLandlord}
            >
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.verifyLandlord.steps.map((step, index) => {
                  const Icon = iconPool[index % iconPool.length];
                  return (
                    <article key={step.step} className={cardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span>
                          <span className="block text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">
                            Step {step.step}
                          </span>
                          <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">{step.title}</h3>
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{step.detail}</p>
                      <ul className="mt-3 space-y-2">
                        {step.actions.map((action) => (
                          <li key={action} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
              <ChecklistBlock title="Questions worth asking in writing" items={page.verifyLandlord.questionsToAsk} columns={2} />
              <SectionIntro eyebrow="Examples" title="Verification in real situations" fullWidth />
              <InfoTable
                columns={[...scenarioColumns]}
                rows={page.verifyLandlord.scenarios.map((row) => ({
                  situation: row.situation,
                  approach: row.approach,
                  firstStep: row.firstStep,
                }))}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="safe-payments"
              tipsKey="safePayments"
              intro={
                <SectionIntro eyebrow="Payments" title={page.safePayments.heading} fullWidth>
                  {page.safePayments.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.safePayments}
            >
              <InfoTable
                columns={[...paymentColumns]}
                rows={page.safePayments.rows.map((row) => ({
                  stage: row.stage,
                  safePractice: row.safePractice,
                  warningSign: row.warningSign,
                }))}
              />
              <ChecklistBlock title="Safe payment habits" items={page.safePayments.safeHabits} columns={2} />
              <WarningPanel title="Never do these" items={page.safePayments.neverDo} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="viewing-safely"
              tipsKey="viewingSafely"
              intro={
                <SectionIntro eyebrow="Viewings" title={page.viewingSafely.heading} fullWidth>
                  {page.viewingSafely.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.viewingSafely}
            >
              <ChecklistBlock title="Viewing checklist" items={page.viewingSafely.checklist} columns={2} />
              <BulletPanel title="If you can only view by video" items={page.viewingSafely.videoWalkthroughTips} />
              <ChecklistBlock title="Questions to ask at the viewing" items={page.viewingSafely.questions} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="rental-contracts"
              tipsKey="rentalContracts"
              intro={
                <SectionIntro eyebrow="Contracts" title={page.rentalContracts.heading} fullWidth>
                  {page.rentalContracts.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.rentalContracts}
            >
              <ChecklistBlock title="What the agreement should contain" items={page.rentalContracts.mustHaveClauses} columns={2} />
              <WarningPanel title="Contract warning signs" items={page.rentalContracts.contractRedFlags} />
              <GuideCrossLink
                href={page.rentalContracts.relatedGuide.href}
                title={page.rentalContracts.relatedGuide.label}
                description={page.rentalContracts.relatedGuide.description ?? ""}
                linkLabel="Open contracts guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="trusted-platforms"
              tipsKey="trustedPlatforms"
              intro={
                <SectionIntro eyebrow="Platforms" title={page.trustedPlatforms.heading} fullWidth>
                  <p>{page.trustedPlatforms.intro}</p>
                </SectionIntro>
              }
              visual={page.visuals.trustedPlatforms}
            >
              <BulletPanel title="How to use platforms wisely" items={page.trustedPlatforms.usageTips} />
              <div className={guidePremiumCardGridClass(page.trustedPlatforms.platforms.length)}>
                {page.trustedPlatforms.platforms.map((platform, index) => {
                  const Icon = iconPool[index % iconPool.length];
                  return (
                    <article key={platform.name} className={cardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{platform.type}</p>
                      <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">{platform.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-foreground">{platform.audience}</p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{platform.note}</p>
                      {platform.website ? (
                        <a
                          href={platform.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-link hover:text-link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                        >
                          Visit site
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                        </a>
                      ) : null}
                    </article>
                  );
                })}
              </div>
              <p className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-slate-900/[0.04]">
                {page.trustedPlatforms.verificationReminder}
              </p>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="if-scammed"
              tipsKey="ifScammed"
              intro={
                <SectionIntro eyebrow="If it happens" title={page.ifScammed.heading} fullWidth>
                  {page.ifScammed.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.ifScammed}
            >
              <Timeline steps={page.ifScammed.timeline} eyebrow="Action" />
              <ChecklistBlock title="Evidence to save immediately" items={page.ifScammed.evidenceChecklist} columns={2} />
              <BulletPanel title="After you have reported" items={page.ifScammed.afterReportingTips} />
              <aside
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-emerald-200/80 bg-emerald-50/70 p-5 shadow-sm ring-1 ring-emerald-200/50",
                  movingNlCardMicroLiftClass
                )}
                role="note"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" aria-hidden />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-900">A note on blame</p>
                <p className="mt-3 text-sm leading-relaxed text-emerald-950">{page.ifScammed.reassurance}</p>
              </aside>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="student-expat"
              tipsKey="studentExpat"
              intro={
                <SectionIntro eyebrow="Students & expats" title={page.studentExpat.heading} fullWidth>
                  {page.studentExpat.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.studentExpat}
            >
              <div className={guidePremiumCardGridClass(page.studentExpat.riskFactors.length)}>
                {page.studentExpat.riskFactors.map((card, index) => (
                  <TipCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <ChecklistBlock title="How to close the gaps" items={page.studentExpat.protectionTips} columns={2} />
              <SectionIntro eyebrow="Examples" title="Common newcomer situations" fullWidth />
              <InfoTable
                columns={[...scenarioColumns]}
                rows={page.studentExpat.scenarios.map((row) => ({
                  situation: row.situation,
                  approach: row.approach,
                  firstStep: row.firstStep,
                }))}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="city-risk"
              tipsKey="cityRisk"
              intro={
                <SectionIntro eyebrow="By city" title={page.cityRisk.heading} fullWidth>
                  <p>{page.cityRisk.intro}</p>
                </SectionIntro>
              }
              visual={page.visuals.cityRisk}
            >
              <InfoTable
                columns={[...cityColumns]}
                rows={page.cityRisk.rows.map((row) => ({
                  city: row.city,
                  marketPressure: row.marketPressure,
                  whatToWatch: row.whatToWatch,
                  saferApproach: row.saferApproach,
                }))}
              />
              <BulletPanel title="City search discipline" items={page.cityRisk.cityTips} />
              <p className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-slate-900/[0.04]">
                {page.cityRisk.note}
              </p>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="safety-checklist"
              tipsKey="safetyChecklist"
              intro={
                <SectionIntro eyebrow="Checklist" title={page.safetyChecklist.heading} fullWidth>
                  <p>{page.safetyChecklist.intro}</p>
                </SectionIntro>
              }
              visual={page.visuals.safetyChecklist}
            >
              <ChecklistBlock title="Complete before any payment" items={page.safetyChecklist.checklist} columns={2} />
              <BulletPanel title="The final gate" items={page.safetyChecklist.finalGateTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              intro={
                <SectionIntro eyebrow="Mistakes" title={page.mistakes.heading} fullWidth>
                  <p>{page.mistakes.intro}</p>
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <div className={guidePremiumCardGridClass(page.mistakes.cards.length)}>
                {page.mistakes.cards.map((card, index) => (
                  <MistakeCard key={card.title} card={card} index={index} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              tipsKey="faq"
              intro={
                <SectionIntro eyebrow="FAQ" title="Frequently asked questions" fullWidth>
                  <p>
                    Quick answers for orientation. Confirm current reporting procedures with your bank, the police and official
                    consumer services before acting.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.faq}
            >
              <BulletPanel title="Quick reference" items={page.faqQuickReference} />
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              tipsKey="relatedGuides"
              intro={
                <SectionIntro eyebrow="Related" title="Related guides" fullWidth>
                  <p>
                    Scam awareness works best alongside contract knowledge, realistic budgets and a search plan that does not
                    force you to decide in one evening.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.relatedGuides}
            >
              <BulletPanel title="Read next by need" items={page.relatedGuidesTips} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.relatedGuides.map((item, index) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={index} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="housing-hub"
              tipsKey="housingHub"
              intro={
                <SectionIntro eyebrow="Housing hub" title="Explore the housing pillar" fullWidth>
                  <p>
                    Use the housing hub to sequence budget, search, contracts, deposits and registration around the safety checks
                    on this page.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.housingHub}
            >
              <BulletPanel title="Housing hub overview" items={page.housingHubTips} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.housingHubCards.map((item, index) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={index} />
                ))}
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
                  <p>
                    Pick the card matching whether you need contract detail, realistic budgets or a temporary base while you
                    verify listings safely.
                  </p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.exploreNextCards.length)}>
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
              <div id="sources" className="mt-8 space-y-6">
                <SectionIntro eyebrow="Trust" title="Official sources and reporting routes" tone="onDark" fullWidth>
                  <p>{page.officialSourcesNote}</p>
                </SectionIntro>
                <BulletPanel title="How to use these sources" items={page.sourceUsageTips} tone="onDark" />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
              </div>
            </PremiumGuideSection>
          </div>
        </Container>
      </main>
    </>
  );
}
