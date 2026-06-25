import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  Globe2,
  MessageCircle,
  Network,
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
  guidePremiumVisualAfterIntroClass,
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
  DUTCH_WORKPLACE_CULTURE_PATH,
  EMPLOYEE_RIGHTS_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
  dutchDirectnessAtWorkPage as page,
  type DirectnessLink,
  type MistakeFixRow,
  type TimelineStep,
} from "./dutchDirectnessAtWorkPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
const iconPool = [BriefcaseBusiness, Building2, Globe2, MessageCircle, Network, Users, Clock, ShieldCheck] as const;
const snapshotIcons = [MessageCircle, Users, Clock, BriefcaseBusiness] as const;
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
      <GuidePremiumVisualFigure
        visual={visual}
        tone={visualTone}
        className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")}
      />
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

function QuestionCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2", className)}>
      {page.expatQuestions.map((item) => (
        <article key={item.q} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
        </article>
      ))}
    </div>
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

function TimelineStepGrid({ steps }: { steps: readonly TimelineStep[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-brand/40 via-cyan-300/50 to-emerald-300/40 md:left-[1.375rem]" aria-hidden />
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={step.phase} className="relative flex gap-4 md:gap-5">
            <span
              className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-bg-soft to-white text-sm font-black text-brand-strong shadow-sm ring-2 ring-white"
              aria-hidden
            >
              {index + 1}
            </span>
            <article className={cn(cardClass, "min-w-0 flex-1")}>
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">Phase {index + 1}</p>
              <h3 className="mt-1 text-base font-bold text-foreground">{step.phase}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.detail}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

function MistakeFixTable({ title, rows }: { title: string; rows: readonly MistakeFixRow[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Fixes" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ mistake: row.mistake, fix: row.fix }))}
          columns={[
            { key: "mistake", label: "Mistake" },
            { key: "fix", label: "What to do instead" },
          ]}
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

function FeatureGrid({ items }: { items: ReadonlyArray<{ title: string; body: string }> }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={index} />
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

function MythCard({ myth, reality, iconIndex = 0 }: { myth: string; reality: string; iconIndex?: number }) {
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: DirectnessLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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

function SuccessStoryCard({ profile, challenge, outcome, iconIndex = 0 }: { profile: string; challenge: string; outcome: string; iconIndex?: number }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-base font-bold text-foreground">{profile}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted"><span className="font-semibold text-foreground">Challenge: </span>{challenge}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted"><span className="font-semibold text-foreground">Outcome: </span>{outcome}</p>
    </article>
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

const faqItems = page.faq.map((item, idx) => ({ id: `faq-${idx}`, title: item.q, content: item.a }));

export function DutchDirectnessAtWorkView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Jobs", item: new URL(JOBS_HUB_PATH, baseUrl).toString() },
          { name: "Dutch workplace culture", item: new URL(DUTCH_WORKPLACE_CULTURE_PATH, baseUrl).toString() },
          { name: "Dutch directness at work", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href={JOBS_HUB_PATH} className="hover:text-foreground">Jobs</Link>
                    <span aria-hidden>/</span>
                    <Link href={DUTCH_WORKPLACE_CULTURE_PATH} className="hover:text-foreground">Workplace culture</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Dutch directness at work</span>
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
                  {page.intro.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.intro}
            >
              <QuickAnswerBox />
              <BulletPanel title="What many expats notice first" items={page.intro.summaryPoints} />
              <QuestionCards />
              <OrientationFlowBand />
              <TimelineStepGrid steps={page.adaptationTimeline} />
              <GuideCrossLink
                href={DUTCH_WORKPLACE_CULTURE_PATH}
                title="Dutch workplace culture"
                description="Broad overview of communication, hierarchy, meetings and work-life balance."
                linkLabel="Open workplace culture guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              intro={
                <SectionIntro eyebrow="At a glance" title="Dutch Directness at a Glance" fullWidth>
                  <p>Six signals to orient yourself — then verify with your team.</p>
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <MilestoneStatGrid items={page.snapshotMilestones} />
              <FeatureGrid items={page.snapshotCards} />
              <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection id="cultural-context" tipsKey="culturalContext" intro={<SectionIntro eyebrow="Context" title={page.culturalContextHeading} fullWidth>{page.culturalContextParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.culturalContext}>
              <BulletPanel title="Why directness is often valued" items={page.culturalContextPoints} />
              <FeatureGrid items={page.culturalContextExamples} />
              <ChecklistBlock title="Questions to ask your manager" items={page.culturalContextAskManager} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection id="workplace-examples" tipsKey="workplaceExamples" intro={<SectionIntro eyebrow="Examples" title={page.workplaceExamplesHeading} fullWidth><p>{page.workplaceExamplesIntro}</p></SectionIntro>} visual={page.visuals.workplaceExamples}>
              <InfoTable rows={page.workplaceScenarios.map((r) => ({ situation: r.situation, expatMayThink: r.expatMayThink, dutchColleaguesOftenMean: r.dutchColleaguesOftenMean }))} columns={[{ key: "situation", label: "Scenario" }, { key: "expatMayThink", label: "Expat may think" }, { key: "dutchColleaguesOftenMean", label: "Dutch colleagues often mean" }]} />
              <InfoTable
                rows={page.workplaceResponseScripts.map((r) => ({ situation: r.situation, whatHappens: r.whatHappens, howToAdapt: r.howToAdapt }))}
                columns={[
                  { key: "situation", label: "When this happens" },
                  { key: "whatHappens", label: "What you may feel" },
                  { key: "howToAdapt", label: "Try saying" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="directness-vs-rudeness" tipsKey="directnessVsRudeness" intro={<SectionIntro eyebrow="Clarity" title={page.directnessVsRudenessHeading} fullWidth>{page.directnessVsRudenessParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.directnessVsRudeness}>
              <InfoTable rows={page.directnessVsRudenessRows.map((r) => ({ direct: r.directCommunication, attack: r.personalAttack }))} columns={[{ key: "direct", label: "Direct communication" }, { key: "attack", label: "Personal attack (not OK)" }]} />
              <ChecklistBlock title="How to tell the difference" items={page.directnessVsRudenessTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection id="feedback" tipsKey="feedback" intro={<SectionIntro eyebrow="Feedback" title={page.feedbackHeading} fullWidth>{page.feedbackParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.feedback}>
              <FeatureGrid items={page.feedbackTypes} />
              <ChecklistBlock title="Feedback tips" items={page.feedbackTips} columns={2} />
              <InfoTable
                rows={page.feedbackPhrases.map((r) => ({ situation: r.situation, whatHappens: r.whatHappens, howToAdapt: r.howToAdapt }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "whatHappens", label: "What happens" },
                  { key: "howToAdapt", label: "Useful response" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="meetings" tipsKey="meetings" intro={<SectionIntro eyebrow="Meetings" title={page.meetingsHeading} fullWidth>{page.meetingsParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.meetings}>
              <BulletPanel title="Why meetings may feel like debates" items={page.meetingsPoints} />
              <InfoTable
                rows={page.meetingsByType.map((r) => ({ type: r.type, purpose: r.purpose, expatTip: r.expatTip }))}
                columns={[
                  { key: "type", label: "Meeting type" },
                  { key: "purpose", label: "Purpose" },
                  { key: "expatTip", label: "Expat tip" },
                ]}
              />
              <ChecklistBlock title="Meeting participation checklist" items={page.meetingsChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection id="cultural-reactions" tipsKey="culturalReactions" intro={<SectionIntro eyebrow="Cross-cultural" title={page.culturalReactionsHeading} fullWidth><p>{page.culturalReactionsIntro}</p></SectionIntro>} visual={page.visuals.culturalReactions}>
              <InfoTable rows={page.culturalReactions.map((r) => ({ region: r.region, reaction: r.commonReaction, tip: r.adaptationTip }))} columns={[{ key: "region", label: "Background" }, { key: "reaction", label: "Common first reaction" }, { key: "tip", label: "Adaptation tip" }]} />
            </PremiumGuideSection>

            <PremiumGuideSection id="adaptation" tipsKey="adaptation" intro={<SectionIntro eyebrow="Adaptation" title={page.adaptationHeading} fullWidth>{page.adaptationParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.adaptation}>
              <ChecklistBlock title="Adapting successfully" items={page.adaptationChecklist} columns={2} />
              <InfoTable
                rows={page.adaptationScripts.map((r) => ({ situation: r.situation, whatHappens: r.whatHappens, howToAdapt: r.howToAdapt }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "whatHappens", label: "Context" },
                  { key: "howToAdapt", label: "Example phrase" },
                ]}
              />
              <TimelineStepGrid steps={page.adaptationTimeline} />
            </PremiumGuideSection>

            <PremiumGuideSection id="benefits" tipsKey="benefits" intro={<SectionIntro eyebrow="Advantages" title={page.benefitsHeading} fullWidth><p>Many expats grow to value clarity once norms are understood.</p></SectionIntro>} visual={page.visuals.benefits}>
              <FeatureGrid items={page.benefits} />
              <ChecklistBlock title="Benefits in practice" items={page.benefitsInPractice} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection id="challenges" tipsKey="challenges" intro={<SectionIntro eyebrow="Challenges" title={page.challengesHeading} fullWidth><p>Most friction is an adaptation gap — not a permanent mismatch.</p></SectionIntro>} visual={page.visuals.challenges}>
              <FeatureGrid items={page.challenges} />
              <MistakeFixTable title="Practical fixes for common directness challenges" rows={page.challengeFixRows} />
            </PremiumGuideSection>

            <PremiumGuideSection id="situations" tipsKey="situations" intro={<SectionIntro eyebrow="Scenarios" title={page.situationsHeading} fullWidth><p>Recognise the pattern so you can prepare a response.</p></SectionIntro>} visual={page.visuals.situations}>
              <FeatureGrid items={page.situationCards} />
              <InfoTable
                rows={page.situationDetailRows.map((r) => ({ situation: r.situation, whatHappens: r.whatHappens, howToAdapt: r.howToAdapt }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "whatHappens", label: "What happens" },
                  { key: "howToAdapt", label: "How to respond" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="expectations" tipsKey="expectations" intro={<SectionIntro eyebrow="Expectations" title={page.expectationsHeading} fullWidth>{page.expectationsParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.expectations}>
              <ChecklistBlock title="What many Dutch colleagues expect" items={page.expectations} columns={2} />
              <FeatureGrid items={page.expectationsExamples} />
              <ChecklistBlock title="Ask your manager in week one" items={page.expectationsAskManager} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection id="remote" tipsKey="remote" intro={<SectionIntro eyebrow="Digital" title={page.remoteHeading} fullWidth>{page.remoteParagraphs.map((p) => <p key={p}>{p}</p>)}</SectionIntro>} visual={page.visuals.remote}>
              <FeatureGrid items={page.remoteExamples} />
              <InfoTable
                rows={page.remoteTemplateRows.map((r) => ({ channel: r.channel, whenToUse: r.whenToUse, example: r.example }))}
                columns={[
                  { key: "channel", label: "Channel" },
                  { key: "whenToUse", label: "When to use" },
                  { key: "example", label: "Example format" },
                ]}
              />
              <ChecklistBlock title="Digital communication tips" items={page.remoteTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection id="myths" tipsKey="myths" intro={<SectionIntro eyebrow="Myths" title={page.mythsHeading} fullWidth><p>Balanced explanations — individuals and companies vary.</p></SectionIntro>} visual={page.visuals.myths}>
              <div className={guidePremiumCardGridClass(page.myths.length)}>
                {page.myths.map((item, idx) => (
                  <MythCard key={item.myth} myth={item.myth} reality={item.reality} iconIndex={idx} />
                ))}
              </div>
              <ChecklistBlock title="Replace myths with these questions" items={page.mythsVerificationTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection id="success-stories" tipsKey="successStories" intro={<SectionIntro eyebrow="Stories" title={page.successStoriesHeading} fullWidth><p>Adaptation is a learning curve — most professionals adjust within months.</p></SectionIntro>} visual={page.visuals.successStories}>
              <div className={guidePremiumCardGridClass(page.successStories.length)}>
                {page.successStories.map((story, idx) => (
                  <SuccessStoryCard key={story.profile} profile={story.profile} challenge={story.challenge} outcome={story.outcome} iconIndex={idx} />
                ))}
              </div>
              <ChecklistBlock title="Takeaways you can apply" items={page.successStoryTakeaways} columns={2} />
              <GuideCrossLink
                href={DUTCH_WORKPLACE_CULTURE_PATH}
                title="Dutch workplace culture"
                description="Return to the parent guide for hierarchy, balance and broader workplace norms."
                linkLabel="Open workplace culture guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection id="mistakes" tipsKey="mistakes" intro={<SectionIntro eyebrow="Avoid" title={page.mistakesHeading} fullWidth><p>Use as a weekly self-check during onboarding.</p></SectionIntro>} visual={page.visuals.mistakes}>
              <ChecklistBlock title="Mistakes to avoid" items={page.mistakes} columns={2} />
              <MistakeFixTable title="Practical fixes for common directness mistakes" rows={page.mistakeFixRows} />
            </PremiumGuideSection>

            <PremiumGuideSection id="faq" tipsKey="faq" intro={<SectionIntro eyebrow="FAQ" title="Frequently Asked Questions" fullWidth><p>Confirm specifics with colleagues — norms vary by company.</p></SectionIntro>} visual={page.visuals.faq}>
              <Accordion items={faqItems} />
              <BulletPanel title="After reading the FAQ" items={page.faqNextSteps} />
            </PremiumGuideSection>

            <PremiumGuideSection id="related-guides" tipsKey="relatedGuides" intro={<SectionIntro eyebrow="Career guides" title="Related Guides" fullWidth><p>Start with workplace culture overview, then deepen with contracts and rights.</p></SectionIntro>} visual={page.visuals.relatedGuides}>
              <TimelineStepGrid steps={page.relatedGuidesOrder} />
              <ChecklistBlock title="Suggested reading order" items={page.relatedGuidesReadingOrder} columns={2} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.relatedGuides.map((item, idx) => (
                  <LinkCard key={item.href} item={item} iconIndex={idx} />
                ))}
              </div>
              <GuideCrossLink
                href={EMPLOYEE_RIGHTS_NETHERLANDS_PATH}
                title="Employee rights in the Netherlands"
                description="Pair communication adaptation with leave, sick pay and workplace protections."
                linkLabel="Open employee rights guide"
              />
            </PremiumGuideSection>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10")}>
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Plan the Next Step" tone="onDark" fullWidth>
                  <p>Move from directness orientation into workplace culture, contracts, rights and community integration.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
                <div className={guidePremiumSectionDetailStackClass}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.exploreNextCards.map((item, idx) => (
                      <LinkCard key={item.href} item={item} iconIndex={idx} tone="onDark" />
                    ))}
                  </div>
                  <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="text-base font-bold tracking-tight text-white">Choose your next guide</h3>
                    <ul className="mt-4 grid gap-3">
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
                  <GuideCrossLink href={DUTCH_WORKPLACE_CULTURE_PATH} title="Dutch workplace culture" description="Return to the full workplace culture overview for hierarchy, balance and industry context." linkLabel="Open workplace culture guide" />
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
