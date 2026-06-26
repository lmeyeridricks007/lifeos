import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Cake,
  CheckCircle2,
  Clock,
  ExternalLink,
  Gift,
  Globe2,
  Heart,
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
  DUTCH_BIRTHDAY_TRADITIONS_PATH,
  DUTCH_CULTURE_PATH,
  DUTCH_HOLIDAYS_TRADITIONS_PATH,
  DUTCH_SOCIAL_NORMS_PATH,
  LANGUAGE_LEARNING_PATH,
  LIFE_HUB_PATH,
  dutchBirthdayTraditionsPage as page,
  type LifeGuideLink,
  type MistakeCard,
  type MythCard,
} from "./dutchBirthdayTraditionsPageModel";

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
const iconPool = [BriefcaseBusiness, Building2, Globe2, MessageCircle, Users, Clock, ShieldCheck, Home, Heart, Cake, Gift] as const;
const snapshotIcons = [Cake, Users, MessageCircle, Gift] as const;
const orientationIcons = [Globe2, MessageCircle, CheckCircle2] as const;

const foodTableColumns = [
  { key: "name", label: "Item" },
  { key: "category", label: "Category" },
  { key: "note", label: "What to expect" },
] as const;

const regionalColumns = [
  { key: "region", label: "Region" },
  { key: "style", label: "Style" },
  { key: "note", label: "Note" },
  { key: "expatTip", label: "Expat tip" },
] as const;

const phraseColumns = [
  { key: "dutch", label: "Dutch" },
  { key: "english", label: "English" },
  { key: "pronunciation", label: "Pronunciation" },
  { key: "situation", label: "When to use" },
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
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves before your first Dutch birthday</h3>
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

function SectionTable({
  title,
  description,
  rows,
  columns,
}: {
  title: string;
  description?: string;
  rows: Array<Record<string, string>>;
  columns: Array<{ key: string; label: string }>;
}) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
        {description ? <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{description}</p> : null}
      </div>
      <InfoTable rows={rows} columns={columns} />
    </div>
  );
}

function TopicsTable({ rows }: { rows: readonly { topic: string; detail: string }[] }) {
  return (
    <InfoTable
      rows={rows.map((r) => ({ topic: r.topic, detail: r.detail }))}
      columns={[
        { key: "topic", label: "Topic" },
        { key: "detail", label: "What to expect" },
      ]}
    />
  );
}

function SituationCardGrid({ items }: { items: readonly MistakeCard[] }) {
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

function MythCardGrid({ items }: { items: readonly MythCard[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => {
        const Icon = iconPool[index % iconPool.length];
        return (
          <article key={item.myth} className={cardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-foreground-muted">Myth</p>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">{item.myth}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{item.reality}</p>
          </article>
        );
      })}
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

export function DutchBirthdayTraditionsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Life in the Netherlands", item: new URL(LIFE_HUB_PATH, baseUrl).toString() },
          { name: "Dutch culture", item: new URL(DUTCH_CULTURE_PATH, baseUrl).toString() },
          { name: "Dutch Birthday Traditions", item: new URL(DUTCH_BIRTHDAY_TRADITIONS_PATH, baseUrl).toString() },
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
                    <Link href={DUTCH_CULTURE_PATH} className="hover:text-foreground">Dutch culture</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Dutch Birthday Traditions</span>
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
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
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
              <div className="grid gap-4 md:grid-cols-2">
                <GuideCrossLink
                  href={DUTCH_SOCIAL_NORMS_PATH}
                  title="Dutch Social Norms"
                  description="Everyday etiquette for visits, greetings and gift exchanges beyond birthdays."
                  linkLabel="Open Social Norms"
                />
                <GuideCrossLink
                  href={DUTCH_HOLIDAYS_TRADITIONS_PATH}
                  title="Dutch Holidays & Traditions"
                  description="Annual calendar, King's Day, Sinterklaas and Christmas beyond birthday gatherings."
                  linkLabel="Open Holidays Guide"
                />
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              intro={
                <SectionIntro eyebrow="At a glance" title="Dutch Birthdays at a Glance" fullWidth>
                  <p>Six orientation signals — then read the circle party and congratulations sections before your first invitation.</p>
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <MilestoneStatGrid items={page.snapshotMilestones} />
              <FeatureGrid items={page.snapshotCards} />
              <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="unique-tradition"
              tipsKey="uniqueTradition"
              intro={
                <SectionIntro title={page.uniqueTraditionHeading} fullWidth>
                  {page.uniqueTraditionParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.uniqueTradition}
            >
              <FeatureGrid items={page.traditions} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="circle-party"
              tipsKey="circleParty"
              intro={
                <SectionIntro eyebrow="Featured" title={page.circlePartyHeading} fullWidth>
                  {page.circlePartyParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.circleParty}
            >
              <TopicsTable rows={page.circlePartyTopics} />
              <ChecklistBlock title="Circle party practical tips" items={page.circlePartyTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="congratulations"
              tipsKey="congratulations"
              intro={
                <SectionIntro title={page.congratulationsHeading} fullWidth>
                  {page.congratulationsParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.congratulations}
            >
              <SectionTable
                title="Example greetings"
                description="Use these as templates — always add the person's name."
                rows={page.congratulationExamples.map((r) => ({
                  person: r.person,
                  dutch: r.dutch,
                  english: r.english,
                  note: r.note,
                }))}
                columns={[
                  { key: "person", label: "Who" },
                  { key: "dutch", label: "Dutch" },
                  { key: "english", label: "English" },
                  { key: "note", label: "Note" },
                ]}
              />
              <ChecklistBlock title="Congratulations tips" items={page.congratulationsTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="gifts"
              tipsKey="gifts"
              intro={
                <SectionIntro title={page.giftsHeading} fullWidth>
                  {page.giftsParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.gifts}
            >
              <TopicsTable rows={page.giftTopics} />
              <ChecklistBlock title="Gift etiquette tips" items={page.giftTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="food"
              tipsKey="food"
              intro={
                <SectionIntro title={page.foodHeading} fullWidth>
                  {page.foodParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.food}
            >
              <SectionTable
                title="What is usually served"
                rows={page.foodCards.map((food) => ({
                  name: food.name,
                  category: food.category,
                  note: food.note,
                }))}
                columns={[...foodTableColumns]}
              />
              <ChecklistBlock title="Food tips for guests" items={page.foodTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="children"
              tipsKey="children"
              intro={
                <SectionIntro title={page.childrenHeading} fullWidth>
                  {page.childrenParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.children}
            >
              <TopicsTable rows={page.childrenTopics} />
              <ChecklistBlock title="Children's birthday tips" items={page.childrenTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="work"
              tipsKey="work"
              intro={
                <SectionIntro title={page.workHeading} fullWidth>
                  {page.workParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.work}
            >
              <TopicsTable rows={page.workTopics} />
              <ChecklistBlock title="Office birthday checklist" items={page.workChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="school"
              tipsKey="school"
              intro={
                <SectionIntro title={page.schoolHeading} fullWidth>
                  {page.schoolParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.school}
            >
              <TopicsTable rows={page.schoolTopics} />
              <ChecklistBlock title="School birthday tips" items={page.schoolTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="calendars"
              tipsKey="calendars"
              intro={
                <SectionIntro title={page.calendarsHeading} fullWidth>
                  {page.calendarsParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.calendars}
            >
              <TopicsTable rows={page.calendarTopics} />
              <ChecklistBlock title="Birthday calendar customs" items={page.calendarTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="modern"
              tipsKey="modern"
              intro={
                <SectionIntro title={page.modernHeading} fullWidth>
                  {page.modernParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.modern}
            >
              <TopicsTable rows={page.modernTopics} />
              <ChecklistBlock title="Modern birthday tips" items={page.modernTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="regional"
              tipsKey="regional"
              intro={
                <SectionIntro title={page.regionalHeading} fullWidth>
                  {page.regionalParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.regional}
            >
              <SectionTable
                title="Regional differences"
                description="Traditions vary — observe locally rather than assuming one national format."
                rows={page.regionalRows.map((r) => ({ ...r }))}
                columns={[...regionalColumns]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="expat-guide"
              tipsKey="expatGuide"
              intro={
                <SectionIntro title={page.expatGuideHeading} fullWidth>
                  {page.expatGuideParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.expatGuide}
            >
              <ChecklistBlock title="Expat survival checklist" items={page.expatChecklist} columns={2} />
              <GuideCrossLink
                href={COMMUNITY_BASICS_NETHERLANDS_PATH}
                title="Community Basics"
                description="Build the friendships and neighbour ties that lead to birthday invitations."
                linkLabel="Open Community Basics"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              intro={
                <SectionIntro title="Common Mistakes">
                  <p>Small etiquette gaps are easy to fix once you know the local rhythm — most Dutch hosts are patient with newcomers.</p>
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <SituationCardGrid items={page.mistakeCards} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="myths"
              tipsKey="myths"
              intro={
                <SectionIntro title="Common Misconceptions">
                  <p>Balanced explanations — Dutch birthday culture is more varied than social media memes suggest.</p>
                </SectionIntro>
              }
              visual={page.visuals.myths}
            >
              <MythCardGrid items={page.myths} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="phrases"
              tipsKey="phrases"
              intro={
                <SectionIntro title="Useful Dutch Birthday Phrases">
                  <p>A few Dutch phrases go a long way at parties and in the office — practice pronunciation before your first celebration.</p>
                </SectionIntro>
              }
              visual={page.visuals.phrases}
            >
              <SectionTable
                title="Birthday phrases"
                description="Add the person's name for warmth — mirror cheek kisses or handshakes from the birthday person."
                rows={page.phrases.map((p) => ({
                  dutch: p.dutch,
                  english: p.english,
                  pronunciation: p.pronunciation ?? "",
                  situation: p.situation ?? "",
                }))}
                columns={[...phraseColumns]}
              />
              <GuideCrossLink
                href={LANGUAGE_LEARNING_PATH}
                title="Learning Dutch"
                description="Courses, apps and municipal programmes to build confidence beyond birthday phrases."
                linkLabel="Open Learning Dutch"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              tipsKey="faq"
              intro={
                <SectionIntro title="Frequently Asked Questions">
                  <p>Confirm specifics with hosts and colleagues — families and regions celebrate differently.</p>
                </SectionIntro>
              }
              visual={page.visuals.faq}
            >
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
              <BulletPanel title="After the FAQ" items={page.faqNextSteps} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              tipsKey="relatedGuides"
              intro={
                <SectionIntro title="Related Guides">
                  <p>Continue from birthdays into culture, social norms, holidays and community guides.</p>
                </SectionIntro>
              }
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
                  <p>Move from birthday etiquette into social norms, community integration and language learning.</p>
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
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
