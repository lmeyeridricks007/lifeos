import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Bike,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Home,
  PiggyBank,
  ShieldCheck,
  ShoppingCart,
  Train,
  Users,
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
import {
  MONEY_HUB_PATH,
  MONTHLY_BUDGET_NETHERLANDS_PATH,
  SAVING_MONEY_NETHERLANDS_PATH,
  savingMoneyNetherlandsPage as page,
  type MistakeCard as MistakeCardData,
  type SavingMoneyLink,
} from "./savingMoneyNetherlandsPageModel";

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
  Home,
  ShieldCheck,
  ShoppingCart,
  Bike,
  Users,
  Calculator,
  Wallet,
  Building2,
  PiggyBank,
  Train,
  Banknote,
  ClipboardList,
] as const;
const snapshotIcons = [Home, ShoppingCart, Bike, PiggyBank] as const;
const orientationIcons = [Home, Wallet, PiggyBank, Banknote] as const;

const scenarioColumns = [
  { key: "situation", label: "Situation" },
  { key: "approach", label: "How it works here" },
  { key: "firstStep", label: "First step" },
] as const;

const leverColumns = [
  { key: "lever", label: "Lever" },
  { key: "indicativeImpact", label: "Indicative 2026 impact" },
  { key: "tip", label: "Practical tip" },
] as const;

const impactColumns = [
  { key: "habit", label: "Habit" },
  { key: "roughMonthly", label: "Rough monthly (planning)" },
  { key: "note", label: "Note" },
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

function Timeline({
  steps,
  eyebrow,
}: {
  steps: ReadonlyArray<{ phase: string; title: string; detail: string }>;
  eyebrow: string;
}) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => (
        <li key={`${step.phase}-${step.title}`} className="relative flex gap-4 pb-8 last:pb-0">
          {index < steps.length - 1 ? (
            <span
              className="absolute left-[1.125rem] top-10 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-brand/40 to-cyan-300/40"
              aria-hidden
            />
          ) : null}
          <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-bg-soft to-white text-xs font-bold text-brand-strong shadow-sm ring-2 ring-white">
            {step.phase.length > 2 ? index + 1 : step.phase}
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: SavingMoneyLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
        "relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Four habits for saving in the Netherlands</h3>
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

export function SavingMoneyNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: new URL("/", baseUrl).toString() },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Money", item: new URL(MONEY_HUB_PATH, baseUrl).toString() },
          { name: "Saving money", item: new URL(SAVING_MONEY_NETHERLANDS_PATH, baseUrl).toString() },
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
                    <Link href={MONEY_HUB_PATH} className="hover:text-foreground">
                      Money
                    </Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">
                      Saving money
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
              <ChecklistBlock title="Saving planning file — keep these together" items={page.safetyFileChecklist} columns={2} />
              <ScenarioTable title="Where newcomers usually start" rows={page.introScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Snapshot" title="Saving money at a glance" fullWidth>
                  <p>
                    Six cards summarise the levers: housing habits, food and dining, bike + OV, subscriptions, fees and a first
                    buffer. Deeper sections expand each with indicative 2026 planning impacts.
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
              id="levers"
              tipsKey="levers"
              visual={page.visuals.levers}
              intro={
                <SectionIntro eyebrow="Map" title={page.levers.heading} fullWidth>
                  <p>{page.levers.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Lever list" items={page.levers.bullets} columns={2} />
              <InfoTable
                columns={leverColumns}
                rows={page.levers.indicativeRows.map((row) => ({
                  lever: row.lever,
                  indicativeImpact: row.indicativeImpact,
                  tip: row.tip,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.levers.cards.length)}>
                {page.levers.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.levers.crossLinks.length)}>
                {page.levers.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="housing"
              tipsKey="housing"
              visual={page.visuals.housing}
              intro={
                <SectionIntro eyebrow="Housing" title={page.housing.heading} fullWidth>
                  <p>{page.housing.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Housing habits" items={page.housing.bullets} columns={2} />
              <InfoTable
                columns={impactColumns}
                rows={page.housing.impactRows.map((row) => ({
                  habit: row.habit,
                  roughMonthly: row.roughMonthly,
                  note: row.note,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.housing.cards.length)}>
                {page.housing.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.housing.crossLinks.length)}>
                {page.housing.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="groceries"
              tipsKey="groceries"
              visual={page.visuals.groceries}
              intro={
                <SectionIntro eyebrow="Groceries" title={page.groceries.heading} fullWidth>
                  <p>{page.groceries.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Grocery habits" items={page.groceries.bullets} columns={2} />
              <InfoTable
                columns={impactColumns}
                rows={page.groceries.impactRows.map((row) => ({
                  habit: row.habit,
                  roughMonthly: row.roughMonthly,
                  note: row.note,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.groceries.cards.length)}>
                {page.groceries.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.groceries.crossLinks.length)}>
                {page.groceries.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="transport"
              tipsKey="transport"
              visual={page.visuals.transport}
              intro={
                <SectionIntro eyebrow="Transport" title={page.transport.heading} fullWidth>
                  <p>{page.transport.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Transport habits" items={page.transport.bullets} columns={2} />
              <InfoTable
                columns={impactColumns}
                rows={page.transport.impactRows.map((row) => ({
                  habit: row.habit,
                  roughMonthly: row.roughMonthly,
                  note: row.note,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.transport.cards.length)}>
                {page.transport.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="subscriptions"
              tipsKey="subscriptions"
              visual={page.visuals.subscriptions}
              intro={
                <SectionIntro eyebrow="Subscriptions" title={page.subscriptions.heading} fullWidth>
                  <p>{page.subscriptions.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Audit steps" items={page.subscriptions.bullets} columns={2} />
              <InfoTable
                columns={impactColumns}
                rows={page.subscriptions.impactRows.map((row) => ({
                  habit: row.habit,
                  roughMonthly: row.roughMonthly,
                  note: row.note,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.subscriptions.cards.length)}>
                {page.subscriptions.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="banking"
              tipsKey="banking"
              visual={page.visuals.banking}
              intro={
                <SectionIntro eyebrow="Banking" title={page.banking.heading} fullWidth>
                  <p>{page.banking.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Fee habits" items={page.banking.bullets} columns={2} />
              <div className={guidePremiumCardGridClass(page.banking.cards.length)}>
                {page.banking.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.banking.crossLinks.length)}>
                {page.banking.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="energy"
              tipsKey="energy"
              visual={page.visuals.energy}
              intro={
                <SectionIntro eyebrow="Energy" title={page.energy.heading} fullWidth>
                  <p>{page.energy.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Energy habits" items={page.energy.bullets} columns={2} />
              <InfoTable
                columns={impactColumns}
                rows={page.energy.impactRows.map((row) => ({
                  habit: row.habit,
                  roughMonthly: row.roughMonthly,
                  note: row.note,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.energy.cards.length)}>
                {page.energy.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.energy.crossLinks.length)}>
                {page.energy.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="dining"
              tipsKey="dining"
              visual={page.visuals.dining}
              intro={
                <SectionIntro eyebrow="Dining" title={page.dining.heading} fullWidth>
                  <p>{page.dining.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Dining habits" items={page.dining.bullets} columns={2} />
              <InfoTable
                columns={impactColumns}
                rows={page.dining.impactRows.map((row) => ({
                  habit: row.habit,
                  roughMonthly: row.roughMonthly,
                  note: row.note,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.dining.cards.length)}>
                {page.dining.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="buffer"
              tipsKey="buffer"
              visual={page.visuals.buffer}
              intro={
                <SectionIntro eyebrow="Buffer" title={page.buffer.heading} fullWidth>
                  <p>{page.buffer.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Buffer principles" items={page.buffer.bullets} columns={2} />
              <Timeline steps={page.buffer.steps} eyebrow="Step" />
              <div className={guidePremiumCardGridClass(page.buffer.cards.length)}>
                {page.buffer.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.buffer.crossLinks.length)}>
                {page.buffer.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
              <div className="rounded-3xl border border-brand/15 bg-gradient-to-br from-copilot-bg-soft via-white to-cyan-50/50 p-5 ring-1 ring-copilot-primary/10">
                <p className="text-sm font-bold text-foreground">Need the category template first?</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Name the buffer line on the monthly budget sibling, then return here for cut levers and buffer milestones.
                </p>
                <Link href={MONTHLY_BUDGET_NETHERLANDS_PATH} className={cn(primaryCtaClass, "mt-5")}>
                  Open monthly budget guide
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="spaarrekening"
              tipsKey="spaarrekening"
              visual={page.visuals.spaarrekening}
              intro={
                <SectionIntro eyebrow="Spaarrekening" title={page.spaarrekening.heading} fullWidth>
                  <p>{page.spaarrekening.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Orientation points" items={page.spaarrekening.bullets} columns={2} />
              <div className={guidePremiumCardGridClass(page.spaarrekening.cards.length)}>
                {page.spaarrekening.cards.map((card, idx) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.spaarrekening.crossLinks.length)}>
                {page.spaarrekening.crossLinks.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="scenarios"
              tipsKey="scenarios"
              visual={page.visuals.scenarios}
              intro={
                <SectionIntro eyebrow="Situations" title={page.scenarios.heading} fullWidth>
                  <p>{page.scenarios.lead}</p>
                </SectionIntro>
              }
            >
              <ScenarioTable title="Saving stories" rows={page.scenarios.rows} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              visual={page.visuals.mistakes}
              intro={
                <SectionIntro eyebrow="Avoid" title={page.mistakes.heading} fullWidth>
                  <p>These patterns create avoidable friction — big levers and a named buffer beat random tip lists.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.mistakes.cards.length)}>
                {page.mistakes.cards.map((card, idx) => (
                  <MistakeCard key={card.title} card={card} index={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              tipsKey="checklist"
              visual={page.visuals.checklist}
              intro={
                <SectionIntro eyebrow="Ready to save" title={page.checklist.heading} fullWidth>
                  <p>{page.checklist.lead}</p>
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Saving readiness checklist" items={page.checklist.items} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="howto"
              tipsKey="buffer"
              visual={page.visuals.buffer}
              intro={
                <SectionIntro eyebrow="How-to" title={page.howTo.heading} fullWidth>
                  <p>{page.howTo.lead}</p>
                </SectionIntro>
              }
            >
              <ol className="space-y-4">
                {page.howTo.steps.map((step, index) => (
                  <li key={step.name} className={cn(cardClass, "p-5")}>
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
                  <p>Short answers for the searches expats ask most often about saving money, buffers and spaarrekening orientation in the Netherlands.</p>
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
                <SectionIntro eyebrow="Related" title="Related money & living guides" fullWidth>
                  <p>Cluster siblings, the calculator, housing, groceries and banking plumbing that sit beside saving levers.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.relatedGuides.length)}>
                {page.relatedGuides.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
              <SectionIntro eyebrow="Banking" title={page.bankingLinks.heading} fullWidth>
                <p>{page.bankingLinks.lead}</p>
              </SectionIntro>
              <div className={guidePremiumCardGridClass(page.bankingLinks.items.length)}>
                {page.bankingLinks.items.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="money-hub"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Hub" title="Money hub and cluster cards" fullWidth>
                  <p>Return to the Money hub or jump to cost of living, monthly budget, the calculator and banking guides.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.hubCards.length)}>
                {page.hubCards.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="explore-next"
              tipsKey="scenarios"
              visual={page.visuals.scenarios}
              visualTone="onDark"
              sectionTone="onDark"
              intro={
                <SectionIntro eyebrow="Explore next" title="Pick your next money step" tone="onDark" fullWidth>
                  <p>Lock the budget template, read cost drivers, model estimates, or park surplus calmly later.</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.exploreNext.length)}>
                {page.exploreNext.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} tone="onDark" />
                ))}
              </div>
              <div id="sources" className="mt-8 space-y-6">
                <SectionIntro eyebrow="Trust" title="Official sources" tone="onDark" fullWidth>
                  <p>Confirm live prices and rules with landlords, providers and official sources — bands on this page are planning orientation only.</p>
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
