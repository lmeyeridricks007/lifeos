import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileCheck2,
  IdCard,
  MapPin,
  Scale,
  ShieldCheck,
  Timer,
  TrainFront,
  Wallet,
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
import { BankingRecommendedOptionsSection } from "@/components/banking/BankingRecommendedOptionsSection";
import { LIVING_PILLAR_ROOT_PATH } from "@/src/components/living/livingPillarContent";
import {
  CAR_INSURANCE_NETHERLANDS_PATH,
  carInsuranceNetherlandsPage as page,
  type DrivingLink,
  type MistakeCard as MistakeCardData,
} from "./carInsuranceNetherlandsPageModel";

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

const iconPool = [IdCard, FileCheck2, Car, ClipboardList, Scale, Wallet, MapPin, Timer, ShieldCheck, TrainFront] as const;
const snapshotIcons = [IdCard, FileCheck2, ClipboardList, Wallet] as const;
const orientationIcons = [IdCard, Scale, ClipboardList, Wallet] as const;

const scenarioColumns = [
  { key: "situation", label: "Situation" },
  { key: "approach", label: "How it works here" },
  { key: "firstStep", label: "First step" },
] as const;

const compareColumns = [
  { key: "topic", label: "Topic" },
  { key: "whatToCheck", label: "What to check" },
  { key: "tip", label: "Tip" },
] as const;

const costColumns = [
  { key: "category", label: "Category" },
  { key: "range", label: "Orientation" },
  { key: "notes", label: "Notes" },
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
      {onDark ? (
        <div
          className={cn("absolute inset-x-6 top-0 h-1.5 rounded-full sm:inset-x-8 lg:inset-x-10", movingNlSignatureGradientClass)}
          aria-hidden
        />
      ) : null}
      <div className={cn(guidePremiumIntroStackClass, onDark && "relative mt-2")}>{intro}</div>
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
  columns: ReadonlyArray<{ key: string; label: string }>;
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

function ScenarioTable({
  title,
  rows,
}: {
  title: string;
  rows: ReadonlyArray<{ situation: string; approach: string; firstStep: string }>;
}) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          columns={scenarioColumns}
          rows={rows.map((row) => ({ situation: row.situation, approach: row.approach, firstStep: row.firstStep }))}
        />
      </div>
    </div>
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
        {card.advice}
      </p>
    </article>
  );
}

function LinkCard({
  item,
  iconIndex = 0,
  tone = "default",
}: {
  item: DrivingLink;
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
          "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
          onDark
            ? "bg-white/10 text-cyan-100 ring-white/15"
            : "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10"
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
      </span>
      {item.description ? (
        <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
          {item.description}
        </span>
      ) : null}
      {isLive ? (
        <span
          className={cn(
            "mt-4 inline-flex items-center gap-1 text-xs font-semibold",
            onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover"
          )}
        >
          Open {isExternal ? <ExternalLink className="h-3.5 w-3.5" aria-hidden /> : <ArrowRight className="h-3.5 w-3.5" aria-hidden />}
        </span>
      ) : null}
    </>
  );

  if (!isLive) {
    return (
      <article className={cn(cardClass, "opacity-90", onDark && "border-white/10 bg-white/10 text-white ring-white/10")}>
        {body}
      </article>
    );
  }

  const linkClass = cn(
    cardClass,
    "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
    onDark
      ? "border-white/10 bg-white/10 ring-white/10 focus-visible:ring-offset-slate-950"
      : "focus-visible:ring-offset-canvas",
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

function SourceLink({
  source,
  tone = "default",
}: {
  source: { label: string; href: string; description: string };
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
        onDark
          ? "rounded-3xl border border-white/10 bg-white/10 text-white shadow-sm ring-1 ring-white/10 focus-visible:ring-offset-slate-950"
          : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "focus-visible:ring-offset-canvas"),
        movingNlCardMicroLiftClass,
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span
        className={cn(
          "flex items-center gap-2 text-sm font-bold",
          onDark ? "text-white group-hover:text-cyan-200" : "text-foreground group-hover:text-link"
        )}
      >
        <ShieldCheck className={cn("h-4 w-4", onDark ? "text-cyan-200" : "text-brand-strong")} aria-hidden />
        {source.label}
        <ExternalLink className={cn("h-3.5 w-3.5", onDark ? "text-slate-400" : "text-foreground-muted")} aria-hidden />
      </span>
      <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
        {source.description}
      </span>
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link")}>
        Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </a>
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
        "relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-white/10 sm:p-6",
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Four habits for car insurance</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

const faqAccordionItems = page.faq.map((item, index) => ({
  id: `faq-${index}`,
  title: item.q,
  content: item.a,
}));

export function CarInsuranceNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: new URL("/", baseUrl).toString() },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Living", item: new URL(LIVING_PILLAR_ROOT_PATH, baseUrl).toString() },
          { name: "Car insurance", item: new URL(CAR_INSURANCE_NETHERLANDS_PATH, baseUrl).toString() },
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
                    <Link href={LIVING_PILLAR_ROOT_PATH} className="hover:text-foreground">
                      Living
                    </Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">
                      Car insurance
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
              id="quick-answer"
              tipsKey="intro"
              visual={page.visuals.intro}
              intro={
                <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
                  {page.introParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <QuickAnswerBox />
              <OrientationFlowBand />
              <BulletPanel title="What this overview is for" items={page.introHighlights} />
              <ChecklistBlock title="Policy file checklist" items={page.policyFileChecklist} columns={2} />
              <ScenarioTable title="Common starting situations" rows={page.introScenarios} />
              <BulletPanel title="Snapshot tips" items={page.snapshotTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Snapshot" title="Car insurance at a glance" fullWidth>
                  <p>
                    Six cards cover why insurance is mandatory, cover levels, what to compare, cost bands, registration
                    timing and quote comparison — deeper sections expand each theme without personal insurance advice.
                  </p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.snapshotSignals.length)}>
                {page.snapshotSignals.map((signal) => (
                  <MiniStatCard key={signal.label} label={signal.label} value={signal.value} note={signal.note} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.snapshotCards.length)}>
                {page.snapshotCards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mandatory"
              tipsKey="mandatory"
              visual={page.visuals.mandatory}
              intro={
                <SectionIntro eyebrow="Baseline" title={page.mandatory.heading} fullWidth>
                  <p>{page.mandatory.intro}</p>
                  {page.mandatory.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={compareColumns}
                rows={page.mandatory.rows.map((row) => ({
                  topic: row.topic,
                  whatToCheck: row.whatToCheck,
                  tip: row.tip,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.mandatory.cards.length)}>
                {page.mandatory.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.mandatory.crossLinks.length)}>
                {page.mandatory.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="cover"
              tipsKey="cover"
              visual={page.visuals.cover}
              intro={
                <SectionIntro eyebrow="Cover" title={page.cover.heading} fullWidth>
                  <p>{page.cover.intro}</p>
                  {page.cover.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={compareColumns}
                rows={page.cover.rows.map((row) => ({
                  topic: row.topic,
                  whatToCheck: row.whatToCheck,
                  tip: row.tip,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.cover.cards.length)}>
                {page.cover.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.cover.crossLinks.length)}>
                {page.cover.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="compare"
              tipsKey="compare"
              visual={page.visuals.compare}
              intro={
                <SectionIntro eyebrow="Compare" title={page.compare.heading} fullWidth>
                  <p>{page.compare.intro}</p>
                  {page.compare.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={compareColumns}
                rows={page.compare.rows.map((row) => ({
                  topic: row.topic,
                  whatToCheck: row.whatToCheck,
                  tip: row.tip,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.compare.cards.length)}>
                {page.compare.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="costs"
              tipsKey="costs"
              visual={page.visuals.costs}
              intro={
                <SectionIntro eyebrow="Budget" title={page.costs.heading} fullWidth>
                  <p>{page.costs.intro}</p>
                  {page.costs.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={costColumns}
                rows={page.costs.rows.map((row) => ({
                  category: row.category,
                  range: row.range,
                  notes: row.notes,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.costs.cards.length)}>
                {page.costs.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.costs.crossLinks.length)}>
                {page.costs.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="registration"
              tipsKey="registration"
              visual={page.visuals.registration}
              intro={
                <SectionIntro eyebrow="Timing" title={page.registration.heading} fullWidth>
                  <p>{page.registration.intro}</p>
                  {page.registration.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.registration.steps.length)}>
                {page.registration.steps.map((step, idx) => (
                  <FeatureCard
                    key={step.phase}
                    title={step.phase}
                    body={`${step.timing} — ${step.detail}`}
                    iconIndex={idx}
                  />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.registration.cards.length)}>
                {page.registration.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.registration.crossLinks.length)}>
                {page.registration.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <section id={page.recommendedOptions.sectionId} className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro
                  eyebrow={page.recommendedOptions.eyebrow}
                  title={page.recommendedOptions.title}
                  fullWidth
                >
                  <p>{page.recommendedOptions.subtitle}</p>
                </SectionIntro>
              </div>
              <div className={guidePremiumSectionDetailStackClass}>
                <BankingRecommendedOptionsSection
                  placementId={page.recommendedOptions.placementId}
                  analyticsPageContext={page.recommendedOptions.analyticsPageContext}
                  boundaryNote={page.recommendedOptions.boundaryNote}
                  categoryLinks={[...page.recommendedOptions.categoryLinks]}
                  browseLabel={page.recommendedOptions.browseLabel}
                  utmReferrerPath={CAR_INSURANCE_NETHERLANDS_PATH}
                  surfaceTone="muted"
                />
              </div>
            </section>

            <PremiumGuideSection
              id="scenarios"
              tipsKey="scenarios"
              visual={page.visuals.scenarios}
              intro={
                <SectionIntro eyebrow="Scenarios" title={page.scenarios.heading} fullWidth>
                  <p>{page.scenarios.intro}</p>
                </SectionIntro>
              }
            >
              <ScenarioTable title="Match your situation" rows={page.scenarios.rows} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              visual={page.visuals.mistakes}
              intro={
                <SectionIntro eyebrow="Avoid" title="Common car-insurance mistakes" fullWidth>
                  <p>
                    These patterns create avoidable stress — driving uninsured after transfer, comparing premiums only,
                    or treating road tax as cover. Live quotes and policy wording beat forum folklore.
                  </p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.mistakes.length)}>
                {page.mistakes.map((card, idx) => (
                  <MistakeCard key={card.title} card={card} index={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              tipsKey="checklist"
              visual={page.visuals.checklist}
              intro={
                <SectionIntro eyebrow="Ready" title={page.checklist.heading} fullWidth>
                  <p>{page.checklist.intro}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Car insurance readiness checklist" items={page.checklist.items} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="howto"
              tipsKey="intro"
              visual={page.visuals.intro}
              intro={
                <SectionIntro eyebrow="How-to" title={page.howTo.heading} fullWidth>
                  <p>Five orientation steps for expats arranging Dutch car insurance around registration day.</p>
                </SectionIntro>
              }
            >
              <ol className="space-y-4">
                {page.howTo.steps.map((step, index) => (
                  <li key={step.name} className={cn(cardClass, "list-none p-5")}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Step {index + 1}</p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">{step.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
            </PremiumGuideSection>

            <section id="faq" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="FAQ" title="Frequently asked questions" fullWidth>
                  <p>Short answers for the searches expats ask most often about car insurance in the Netherlands.</p>
                </SectionIntro>
              </div>
              <div className={guidePremiumSectionDetailStackClass}>
                <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
              </div>
            </section>

            <PremiumGuideSection
              id="related-guides"
              tipsKey="intro"
              visual={page.visuals.intro}
              intro={
                <SectionIntro eyebrow="Related" title="Related living and practical guides" fullWidth>
                  <p>
                    Buying a car covers purchase and RDW transfer. Road tax covers MRB. Driving licence exchange covers
                    drive rights. Getting around and parking deepen mobility and curb-side admin.
                  </p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Link tips" items={page.relatedGuidesTips} />
              <div className={guidePremiumCardGridClass(page.relatedGuides.length)}>
                {page.relatedGuides.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="driving-hub"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Hub" title="Driving cluster hub" fullWidth>
                  <p>
                    Stay inside the driving cluster — car insurance, buying a car, road tax, licence exchange, getting
                    around and parking.
                  </p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Hub tips" items={page.drivingHubTips} />
              <div className={guidePremiumCardGridClass(page.drivingHubCards.length)}>
                {page.drivingHubCards.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="explore-next"
              tipsKey="costs"
              visual={page.visuals.costs}
              visualTone="onDark"
              sectionTone="onDark"
              intro={
                <SectionIntro eyebrow="Explore next" title="Pick your next practical step" tone="onDark" fullWidth>
                  <p>Continue to buying a car, road tax, parking permits or getting around.</p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Explore tips" items={page.exploreNextTips} tone="onDark" />
              <div className={guidePremiumCardGridClass(page.exploreNextCards.length)}>
                {page.exploreNextCards.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} tone="onDark" />
                ))}
              </div>
              <div id="sources" className="mt-8 space-y-6">
                <SectionIntro eyebrow="Trust" title="Official sources" tone="onDark" fullWidth>
                  <p>Confirm registration and related official rules with RDW and government portals — these sources are orientation only.</p>
                </SectionIntro>
                <div className={guidePremiumCardGridClass(page.officialSources.length)}>
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} tone="onDark" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{page.disclosure}</p>
              </div>
            </PremiumGuideSection>
          </div>
        </Container>
      </main>
    </>
  );
}
