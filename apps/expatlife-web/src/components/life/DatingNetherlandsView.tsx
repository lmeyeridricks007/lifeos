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
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
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
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import {
  COMMUNITY_BASICS_NETHERLANDS_PATH,
  datingNetherlandsPage as page,
  DATING_NETHERLANDS_PATH,
  DUTCH_SOCIAL_NORMS_PATH,
  LIFE_HUB_PATH,
  LANGUAGE_LEARNING_PATH,
  VOLUNTEERING_PATH,
  type LifeGuideLink,
  type MistakeCard,
  type OptionalOutboundLinkMeta,
  type ServiceRow,
} from "./datingNetherlandsPageModel";

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
const iconPool = [BriefcaseBusiness, Building2, Globe2, MessageCircle, Users, Clock, ShieldCheck, Home, Heart] as const;
const snapshotIcons = [Clock, MessageCircle, Users, Gift] as const;
const orientationIcons = [Globe2, MessageCircle, CheckCircle2] as const;

const serviceTableColumns = [
  { key: "name", label: "Name" },
  { key: "audience", label: "Audience" },
  { key: "ageRange", label: "Age" },
  { key: "typicalCost", label: "Typical cost" },
  { key: "cities", label: "Cities" },
  { key: "note", label: "Note" },
  { key: "try", label: "Try it" },
] as const;

function buildOutboundLink(meta: OptionalOutboundLinkMeta, fallbackLabel = "Visit site") {
  if (!meta.website || !meta.partnerSlug) return null;
  return buildTrackedOutboundLink(meta.website, {
    pagePath: DATING_NETHERLANDS_PATH,
    partnerSlug: meta.partnerSlug,
    linkText: meta.ctaLabel ?? fallbackLabel,
    isAffiliate: meta.isAffiliate ?? true,
  });
}

function OutboundLinkButton({
  meta,
  fallbackLabel = "Visit site",
  className,
}: {
  meta: OptionalOutboundLinkMeta;
  fallbackLabel?: string;
  className?: string;
}) {
  const outbound = buildOutboundLink(meta, fallbackLabel);
  if (!outbound) return null;

  return (
    <a
      {...trackedOutboundAnchorProps(outbound)}
      target="_blank"
      data-outbound-page-context="dating-netherlands"
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold text-link hover:text-link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        className
      )}
    >
      {meta.ctaLabel ?? fallbackLabel}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
    </a>
  );
}

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

function FeatureGrid({ items }: { items: ReadonlyArray<{ title: string; body: string } & OptionalOutboundLinkMeta> }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <article key={item.title} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          {item.website ? (
            <div className="mt-4 border-t border-slate-200/80 pt-4">
              <OutboundLinkButton meta={item} fallbackLabel="Try it" />
            </div>
          ) : null}
        </article>
      ))}
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

function LinkedServiceTable({
  rows,
  columns,
  fallbackLabel = "Visit site",
}: {
  rows: ReadonlyArray<ServiceRow>;
  columns: ReadonlyArray<{ key: string; label: string }>;
  fallbackLabel?: string;
}) {
  const tableRows = rows.map((row) => {
    const cells: Record<string, ReactNode> = {};
    for (const column of columns) {
      if (column.key === "try") {
        cells.try = row.website ? <OutboundLinkButton meta={row} fallbackLabel={fallbackLabel} /> : "—";
      } else {
        const value = row[column.key as keyof ServiceRow];
        cells[column.key] = typeof value === "string" ? value : "";
      }
    }
    return cells;
  });

  return <InfoTable rows={tableRows} columns={[...columns]} />;
}

function DatingAppCard({ app }: { app: (typeof page.datingApps)[number] }) {
  return (
    <article className={cn(cardClass, "flex h-full flex-col")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-bold tracking-tight text-foreground">{app.name}</h3>
        {app.featured ? <span className={CITIES_FUNNEL_INFO_CHIP}>Featured</span> : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{app.strengths}</p>
      <dl className="mt-4 grid gap-2 text-sm">
        <div><dt className="font-semibold text-foreground">Audience</dt><dd className="text-foreground-muted">{app.audience}</dd></div>
        <div><dt className="font-semibold text-foreground">Age</dt><dd className="text-foreground-muted">{app.ageRange}</dd></div>
        <div><dt className="font-semibold text-foreground">Pricing</dt><dd className="text-foreground-muted">{app.pricing}</dd></div>
        <div><dt className="font-semibold text-foreground">Best cities</dt><dd className="text-foreground-muted">{app.bestCities}</dd></div>
      </dl>
      <div className="mt-auto border-t border-slate-200/80 pt-4">
        <OutboundLinkButton meta={app} fallbackLabel="Try app" className={cn(secondaryCtaClass, "no-underline")} />
      </div>
    </article>
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

function FeaturedAside({ title, body, tips, ...linkMeta }: { title: string; body: string; tips: readonly string[] } & OptionalOutboundLinkMeta) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-copilot-bg-soft via-white to-cyan-50/50 p-5 ring-1 ring-copilot-primary/10",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
      <ul className="mt-4 space-y-2">
        {tips.map((tip) => (
          <li key={tip} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
      {linkMeta.website ? (
        <div className="mt-4 border-t border-brand/10 pt-4">
          <OutboundLinkButton meta={linkMeta} fallbackLabel="Try app" className={secondaryCtaClass} />
        </div>
      ) : null}
    </aside>
  );
}

function CityCardGrid() {
  return (
    <div className={guidePremiumCardGridClass(page.cityCards.length)}>
      {page.cityCards.map((city, index) => {
        const Icon = iconPool[index % iconPool.length];
        return (
          <Link
            key={city.city}
            href={city.href}
            className={cn(cardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", transitionInteractive, activeBrightnessPress)}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground group-hover:text-brand-strong">{city.city}</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="font-semibold text-foreground">International population</dt>
                <dd className="text-foreground-muted">{city.internationalPopulation}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Apps</dt>
                <dd className="text-foreground-muted">{city.apps}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Events</dt>
                <dd className="text-foreground-muted">{city.events}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Activities</dt>
                <dd className="text-foreground-muted">{city.activities}</dd>
              </div>
            </dl>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
              Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </Link>
        );
      })}
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

export function DatingNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Life in the Netherlands", item: new URL(LIFE_HUB_PATH, baseUrl).toString() },
          { name: "Dating in the Netherlands", item: new URL(DATING_NETHERLANDS_PATH, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Dating in the Netherlands</span>
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
              <div className="grid gap-4 md:grid-cols-2">
                <GuideCrossLink
                  href={COMMUNITY_BASICS_NETHERLANDS_PATH}
                  title="Community Basics"
                  description="Friends, neighbours, clubs and integration routes beyond dating apps."
                  linkLabel="Open Community Basics"
                />
                <GuideCrossLink
                  href={DUTCH_SOCIAL_NORMS_PATH}
                  title="Dutch Social Norms"
                  description="Everyday etiquette for dates, visits and meeting someone's friends."
                  linkLabel="Open Social Norms"
                />
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              intro={
                <SectionIntro eyebrow="At a glance" title="Dating in the Netherlands at a Glance" fullWidth>
                  <p>Six orientation signals — then pick two routes for your first month.</p>
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <MilestoneStatGrid items={page.snapshotMilestones} />
              <FeatureGrid items={page.snapshotCards} />
              <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="dutch-culture"
              tipsKey="dutchCulture"
              intro={
                <SectionIntro title={page.dutchCultureHeading}>
                  {page.dutchCultureParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.dutchCulture}
            >
              <InfoTable
                rows={page.dutchCultureTopics.map((r) => ({ topic: r.topic, detail: r.detail }))}
                columns={[
                  { key: "topic", label: "Topic" },
                  { key: "detail", label: "What to expect" },
                ]}
              />
              <InfoTable
                rows={page.dutchDatePhrases.map((r) => ({
                  situation: r.situation,
                  dutch: r.dutch,
                  english: r.english,
                  note: r.note,
                }))}
                columns={[
                  { key: "situation", label: "Situation" },
                  { key: "dutch", label: "Dutch phrase" },
                  { key: "english", label: "English" },
                  { key: "note", label: "Note" },
                ]}
              />
              <ChecklistBlock title="First-date etiquette checklist" items={page.firstDateEtiquetteChecklist} columns={2} />
              <div className="grid gap-4 md:grid-cols-2">
                {page.dutchCultureLinks.map((link) => (
                  <GuideCrossLink
                    key={link.href}
                    href={link.href}
                    title={link.label}
                    description={link.description ?? ""}
                    linkLabel="Open guide"
                  />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="dating-apps"
              tipsKey="datingApps"
              intro={
                <SectionIntro title={page.datingAppsHeading}>
                  <p>{page.datingAppsIntro}</p>
                </SectionIntro>
              }
              visual={page.visuals.datingApps}
            >
              <div className={guidePremiumCardGridClass(page.datingApps.length)}>
                {page.datingApps.map((app) => (
                  <DatingAppCard key={app.name} app={app} />
                ))}
              </div>
              <ChecklistBlock title="Profile setup checklist" items={page.appProfileChecklist} columns={2} />
              <div className="grid gap-4 lg:grid-cols-2">
                <FeaturedAside {...page.breezeFeatured} />
                <FeaturedAside {...page.innerCircleFeatured} />
              </div>
              <AffiliateDisclosure
                variant="copilot"
                text="Some app and event links may be affiliate or referral links with tracking parameters. Listings are editorial — not pay-to-rank. Always review each platform's terms, pricing and safety tools before signing up."
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="hidden-gems"
              tipsKey="hiddenGems"
              intro={
                <SectionIntro title={page.hiddenGemsHeading}>
                  {page.hiddenGemsParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.hiddenGems}
            >
              <FeatureGrid items={page.hiddenGems} />
              <ChecklistBlock title="How to find lesser-known routes" items={page.hiddenGemsSearchTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="singles-events"
              tipsKey="singlesEvents"
              intro={
                <SectionIntro title={page.singlesEventsHeading}>
                  <p>{page.singlesEventsIntro}</p>
                </SectionIntro>
              }
              visual={page.visuals.singlesEvents}
            >
              <LinkedServiceTable
                rows={page.singlesEvents}
                columns={[...serviceTableColumns]}
                fallbackLabel="Browse events"
              />
              <FeatureGrid items={page.eventTypeCards} />
              <ChecklistBlock title="After the event" items={page.singlesEventFollowUpChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="active-holidays"
              tipsKey="activeHolidays"
              intro={
                <SectionIntro title={page.activeHolidaysHeading}>
                  {page.activeHolidaysParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.activeHolidays}
            >
              <LinkedServiceTable rows={page.activeTrips} columns={[...serviceTableColumns]} fallbackLabel="Browse trips" />
              <BulletPanel title="Popular active holiday types" items={page.activeHolidayActivities} />
              <ChecklistBlock title="Before you book" items={page.activeHolidayBookingChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="hiking-groups"
              tipsKey="hikingGroups"
              intro={
                <SectionIntro title={page.hikingHeading}>
                  {page.hikingParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.hikingGroups}
            >
              <LinkedServiceTable rows={page.hikingGroups} columns={[...serviceTableColumns]} fallbackLabel="Find groups" />
              <ChecklistBlock title="What to bring on a group hike" items={page.hikingPackChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="sports-clubs"
              tipsKey="sportsClubs"
              intro={
                <SectionIntro title={page.sportsHeading}>
                  {page.sportsParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.sportsClubs}
            >
              <LinkedServiceTable rows={page.sports} columns={[...serviceTableColumns]} fallbackLabel="Find clubs" />
              <ChecklistBlock title="Try a club in five steps" items={page.sportsProeflesSteps} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="language-exchanges"
              tipsKey="languageExchanges"
              intro={
                <SectionIntro title={page.languageHeading}>
                  {page.languageParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.languageExchanges}
            >
              <LinkedServiceTable rows={page.languageExchanges} columns={[...serviceTableColumns]} fallbackLabel="Find groups" />
              <InfoTable
                rows={page.languageExchangeEtiquette.map((r) => ({ tip: r.tip, detail: r.detail }))}
                columns={[
                  { key: "tip", label: "Etiquette" },
                  { key: "detail", label: "Why it helps" },
                ]}
              />
              <GuideCrossLink
                href={LANGUAGE_LEARNING_PATH}
                title="Language Learning hub"
                description="Courses, municipal programs and structured Dutch routes beyond conversation tables."
                linkLabel="Open language hub"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="volunteering"
              tipsKey="volunteering"
              intro={
                <SectionIntro title={page.volunteeringHeading}>
                  {page.volunteeringParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.volunteering}
            >
              <LinkedServiceTable rows={page.volunteeringOptions} columns={[...serviceTableColumns]} fallbackLabel="Find roles" />
              <ChecklistBlock title="Start volunteering for social contact" items={page.volunteeringStarterChecklist} columns={2} />
              <GuideCrossLink
                href={VOLUNTEERING_PATH}
                title="Volunteering in the Netherlands"
                description="National portals, gemeente listings and weekly shift ideas when the full guide is live."
                linkLabel="Open volunteering guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="expat-communities"
              tipsKey="expatCommunities"
              intro={
                <SectionIntro title={page.expatHeading}>
                  {page.expatParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.expatCommunities}
            >
              <LinkedServiceTable rows={page.expatCommunities} columns={[...serviceTableColumns]} fallbackLabel="Join community" />
              <FeatureGrid items={page.expatBalanceCards} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="social-clubs"
              tipsKey="socialClubs"
              intro={
                <SectionIntro title={page.socialClubsHeading}>
                  {page.socialClubsParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.socialClubs}
            >
              <LinkedServiceTable rows={page.socialClubs} columns={[...serviceTableColumns]} fallbackLabel="Find clubs" />
              <ChecklistBlock title="Pick and stick with one club" items={page.socialClubPickTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="safety"
              tipsKey="safety"
              intro={
                <SectionIntro title={page.safetyHeading}>
                  {page.safetyParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.safety}
            >
              <ChecklistBlock title="Dating safety checklist" items={page.safetyChecklist} columns={2} />
              <InfoTable
                rows={page.safetyRedFlags.map((r) => ({ signal: r.signal, response: r.response }))}
                columns={[
                  { key: "signal", label: "Red flag" },
                  { key: "response", label: "What to do" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="lgbtq"
              tipsKey="lgbtq"
              intro={
                <SectionIntro title={page.lgbtqHeading}>
                  {page.lgbtqParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.lgbtq}
            >
              <LinkedServiceTable rows={page.lgbtqResources} columns={[...serviceTableColumns]} fallbackLabel="Try app" />
              <ChecklistBlock title="Inclusive dating safety" items={page.lgbtqSafetyChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="cities"
              tipsKey="cityComparison"
              intro={
                <SectionIntro title={page.citiesHeading}>
                  {page.citiesParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.cityComparison}
            >
              <CityCardGrid />
              <ChecklistBlock title="Choose your city strategy" items={page.cityStrategyChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              intro={
                <SectionIntro title={page.mistakesHeading}>
                  <p>Common strategy gaps — adjust channels before concluding dating is impossible here.</p>
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <SituationCardGrid items={page.mistakeCards} />
              <ChecklistBlock
                title={page.visualTextDetails.mistakes.title}
                items={page.visualTextDetails.mistakes.items}
                columns={2}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="meet-methods"
              tipsKey="meetMethods"
              intro={
                <SectionIntro title={page.meetMethodsHeading}>
                  <p>{page.meetMethodsIntro}</p>
                </SectionIntro>
              }
              visual={page.visuals.meetMethods}
            >
              <InfoTable
                rows={page.meetMethodScores.map((r) => ({
                  method: r.method,
                  ease: r.ease,
                  cost: r.cost,
                  meaningfulConnections: r.meaningfulConnections,
                  repeatInteraction: r.repeatInteraction,
                }))}
                columns={[
                  { key: "method", label: "Method" },
                  { key: "ease", label: "Ease" },
                  { key: "cost", label: "Cost" },
                  { key: "meaningfulConnections", label: "Meaningful connections" },
                  { key: "repeatInteraction", label: "Repeat interaction" },
                ]}
              />
              <InfoTable
                rows={page.meetMethodPairings.map((r) => ({
                  profile: r.profile,
                  primary: r.primary,
                  secondary: r.secondary,
                  why: r.why,
                }))}
                columns={[
                  { key: "profile", label: "If you are…" },
                  { key: "primary", label: "Start with" },
                  { key: "secondary", label: "Add within month 1" },
                  { key: "why", label: "Why this pair" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              tipsKey="faq"
              intro={
                <SectionIntro title="Frequently Asked Questions">
                  <p>Confirm app and event details locally — offerings change by season and city.</p>
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
                  <p>Continue from dating into community, social norms, language and city guides.</p>
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
                  <p>Move from dating orientation into community integration, social norms and language learning.</p>
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
                    {page.officialSources.map((source) => {
                      const outbound = buildTrackedOutboundLink(source.href, {
                        pagePath: DATING_NETHERLANDS_PATH,
                        partnerSlug: source.partnerSlug ?? source.label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                        linkText: "Open official source",
                        isAffiliate: source.isAffiliate ?? false,
                      });
                      return (
                        <a
                          key={source.label}
                          {...trackedOutboundAnchorProps(outbound)}
                          target="_blank"
                          data-outbound-page-context="dating-netherlands-official-sources"
                          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10 transition hover:bg-white/15"
                        >
                          <h3 className="text-base font-bold text-white">{source.label}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">{source.description}</p>
                          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                            Open official source
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                          </span>
                        </a>
                      );
                    })}
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
