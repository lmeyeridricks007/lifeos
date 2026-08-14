import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe2,
  Network,
  Search,
  ShieldCheck,
  UserRound,
  Users,
  type LucideIcon,
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
import { GuidePremiumVisualFigure } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualSpacingClass,
} from "@/lib/ui/guide-premium-page-ui";
import { RemoteWorkNetherlandsRecommendedServices } from "./RemoteWorkNetherlandsRecommendedServices";
import {
  REMOTE_WORK_NETHERLANDS_PATH,
  CV_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  JOBS_HUB_PATH,
  LINKEDIN_NETHERLANDS_PATH,
  remoteWorkNetherlandsPage as page,
  type RemoteWorkNetherlandsLink,
} from "./remoteWorkNetherlandsPageModel";

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
const cardIcons = [Network, Users, BriefcaseBusiness, FileText, Search, UserRound, Globe2, ShieldCheck] as const;
const snapshotIcons = [Users, Network, BriefcaseBusiness, FileText, Search, Globe2] as const;
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
      {page.snapshotCards.slice(0, 4).map((card, index) => {
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
              </span>
            </div>
          </div>
        );
      })}
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
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
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

function ScenarioTable({ title, rows }: { title: string; rows: ReadonlyArray<{ situation: string; approach: string; firstStep: string }> }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ situation: row.situation, approach: row.approach, firstStep: row.firstStep }))}
          columns={[
            { key: "situation", label: "Situation" },
            { key: "approach", label: "Approach" },
            { key: "firstStep", label: "First step" },
          ]}
        />
      </div>
    </div>
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  const external = source.href.startsWith("http");
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-link">
        <ShieldCheck className="h-4 w-4 text-brand-strong" aria-hidden />
        {source.label}
        {external ? <ExternalLink className="h-3.5 w-3.5 text-foreground-muted" aria-hidden /> : null}
      </span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">
        Open {external ? "source" : "guide"} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </>
  );
  const className = cn(
    CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
    "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    movingNlCardMicroLiftClass,
    transitionInteractive,
    activeBrightnessPress
  );
  if (external) {
    return (
      <a href={source.href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }
  return (
    <Link href={source.href} className={className}>
      {body}
    </Link>
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

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = cardIcons[iconIndex % cardIcons.length] as LucideIcon;
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: RemoteWorkNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
          onDark ? "bg-white/10 text-cyan-100 ring-white/15" : "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10"
        )}
      >
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
      className={cn(
        cardClass,
        onDark && "border-white/10 bg-white/10 ring-white/10",
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      {body}
    </Link>
  );
}

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3">
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

function MistakeCard({ item, index }: { item: (typeof page.mistakes)[number]; index: number }) {
  const Icon = cardIcons[index % cardIcons.length];
  return (
    <article className={mutedCardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-base font-bold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          <p className="mt-3 text-sm font-semibold text-brand-strong">{item.advice}</p>
        </div>
      </div>
    </article>
  );
}

function GuideLinkAside({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{description}</p>
      <Link href={href} className={cn(secondaryCtaClass, "mt-5")}>
        {linkLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </aside>
  );
}

export function RemoteWorkNetherlandsView() {
  const faqItems = page.faq.map((item) => ({
    id: item.q,
    title: item.q,
    content: <p className="text-sm leading-relaxed text-foreground-muted">{item.a}</p>,
  }));

  return (
    <div className={sitePageCanvasClass}>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: `${baseUrl}/` },
          { name: "Netherlands", item: `${baseUrl}/netherlands/` },
          { name: "Jobs", item: `${baseUrl}${JOBS_HUB_PATH}` },
          { name: "Remote Work Netherlands", item: `${baseUrl}${REMOTE_WORK_NETHERLANDS_PATH}` },
        ]}
      />
      <Container className={siteGuideColumnPadYClass}>
        <div className="mx-auto w-full max-w-6xl">
          <section className={cn(siteHeroFramedShellClass, "relative overflow-hidden")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-foreground-muted">
                    <Link href="/netherlands/" className="hover:text-foreground">
                      Netherlands
                    </Link>
                    <span aria-hidden>/</span>
                    <Link href={JOBS_HUB_PATH} className="hover:text-foreground">
                      Jobs
                    </Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">
                      Remote work
                    </span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
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
                    This guide is practical orientation only — not career, immigration or recruitment advice. Remote work and hiring norms vary by employer and sector. Some links on this page may be affiliate or referral links.
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Remote work guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
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
            <section id="intro" className={sectionClass}>
              <SectionIntro eyebrow="Overview" title={page.intro.heading} fullWidth>
                {page.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.intro} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.intro.keyPoints.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Three orientation moves before you accept remote terms" items={page.introPlanningSteps} columns={2} />
                <div className="grid gap-4 sm:grid-cols-3">
                  <GuideLinkAside
                    title="LinkedIn Netherlands"
                    description="Platform profile and messaging tactics — complementary to offline networking."
                    href={LINKEDIN_NETHERLANDS_PATH}
                    linkLabel="Open LinkedIn Guide"
                  />
                  <GuideLinkAside
                    title="Finding jobs"
                    description="Multi-channel strategy beyond relationships alone."
                    href={FINDING_JOBS_NETHERLANDS_PATH}
                    linkLabel="Open Finding Jobs"
                  />
                  <GuideLinkAside
                    title="CV Netherlands"
                    description="Localise the CV document warm intros will point to."
                    href={CV_NETHERLANDS_PATH}
                    linkLabel="Open CV Guide"
                  />
                </div>
                <ScenarioTable title="When networking priorities change" rows={page.intro.scenarios} />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro eyebrow="At a glance" title="Remote Work Netherlands Snapshot">
                <p>Practical orientation on communities, events, referrals, Dutch-direct tone, follow-up and LinkedIn as one channel.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.snapshot} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.snapshotCards.map((card) => (
                    <MiniStatCard key={card.label} {...card} />
                  ))}
                </div>
                <ChecklistBlock title="Three moves after this snapshot" items={page.snapshotNextSteps} columns={2} />
              </div>
            </section>

            <section id="communities" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Remote vs hybrid" title={page.communitiesHeading} fullWidth>
                  {page.communitiesParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
                <BulletPanel title="Format principles" items={page.communitiesPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.communities} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.communitiesRows.map((row) => ({ section: row.section, include: row.include, tip: row.tip }))}
                  columns={[
                    { key: "section", label: "Work format" },
                    { key: "include", label: "What to look for" },
                    { key: "tip", label: "Tip" },
                  ]}
                />
                <ChecklistBlock title="Remote/hybrid checklist" items={page.communitiesChecklist} columns={2} />
              </div>
            </section>

            <section id="events" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Employer expectations" title={page.eventsHeading} fullWidth>
                  {page.eventsParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
                <BulletPanel title="Expectation principles" items={page.eventsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.events} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.eventsCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <BulletPanel title="Expectation tips" items={page.eventsTips} />
              </div>
            </section>

            <section id="referrals" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Working from abroad" title={page.referralsHeading} fullWidth>
                  {page.referralsParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
                <BulletPanel title="Caution principles" items={page.referralsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.referrals} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ScenarioTable title="Referral and intro scenarios" rows={page.referralsRows} />
                <BulletPanel title="Referral tips" items={page.referralsTips} />
              </div>
            </section>

            <section id="directness" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Tone" title={page.directnessHeading} fullWidth>
                  {page.directnessParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
                <BulletPanel title="Dutch-direct outreach principles" items={page.directnessPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.directness} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.directnessRows.map((row) => ({ topic: row.topic, dutchNorm: row.dutchNorm, tip: row.tip }))}
                  columns={[
                    { key: "topic", label: "Topic" },
                    { key: "dutchNorm", label: "Dutch-leaning norm" },
                    { key: "tip", label: "Tip" },
                  ]}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <GuideLinkAside
                    title="Home-office habits at Work"
                    description="Communication norms that shape networking outreach and conversations."
                    href="/netherlands/jobs/dutch-directness-at-work/"
                    linkLabel="Open Directness Guide"
                  />
                  <GuideLinkAside
                    title="Dutch Workplace Culture"
                    description="How Dutch teams collaborate — useful context for networking tone."
                    href="/netherlands/jobs/dutch-workplace-culture/"
                    linkLabel="Open Workplace Culture"
                  />
                </div>
              </div>
            </section>

            <section id="linkedin-channel" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Platform layer" title={page.linkedinChannelHeading} fullWidth>
                  {page.linkedinChannelParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
                <BulletPanel title="LinkedIn as one channel" items={page.linkedinChannelPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.linkedinChannel} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.linkedinChannelCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <GuideLinkAside
                  title="Need LinkedIn profile tactics?"
                  description="Headline, About, Open to Work, Easy Apply and recruiter messaging live on the LinkedIn Netherlands guide."
                  href={LINKEDIN_NETHERLANDS_PATH}
                  linkLabel="Open LinkedIn Netherlands"
                />
              </div>
            </section>

            <section id="habits" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="System" title={page.habitsHeading} fullWidth>
                  {page.habitsParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </SectionIntro>
                <BulletPanel title="Habit principles" items={page.habitsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.habits} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.habitsRows.map((row) => ({ section: row.section, include: row.include, tip: row.tip }))}
                  columns={[
                    { key: "section", label: "Cadence" },
                    { key: "include", label: "Include" },
                    { key: "tip", label: "Tip" },
                  ]}
                />
                <ChecklistBlock title="Weekly habit checklist" items={page.habitsChecklist} columns={2} />
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <SectionIntro eyebrow="Pitfalls" title={page.mistakesHeading}>
                <p>Fixing these habits improves trust — it still does not guarantee interviews or offers.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.mistakes} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.mistakes.map((item, index) => (
                    <MistakeCard key={item.title} item={item} index={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="checklist" className={sectionClass}>
              <SectionIntro eyebrow="How to" title={page.checklistHeading}>
                <p>{page.checklistIntro}</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.checklist} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ol className="grid gap-4 sm:grid-cols-2">
                  {page.howTo.steps.map((step, index) => (
                    <li key={step.name} className={cn(cardClass, "list-none")}>
                      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Step {index + 1}</p>
                      <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">{step.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.text}</p>
                    </li>
                  ))}
                </ol>
                <ChecklistBlock title="Remote work package checklist" items={page.applicationChecklist} columns={2} />
              </div>
            </section>

            <section id="scenarios" className={sectionClass}>
              <SectionIntro eyebrow="Scenarios" title={page.scenariosHeading}>
                <p>Your outreach emphasis changes depending on how you enter the Dutch labour market.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.scenarios} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ScenarioTable title="Expat networking scenarios" rows={page.scenarios} />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Career cluster" title="Related Guides">
                <p>Connect networking habits to LinkedIn tactics, finding jobs, CV, cover letters, interviews, salary negotiation and workplace culture.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.relatedGuides} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.relatedGuides.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Suggested reading order" items={page.relatedGuideReadingOrder} columns={2} />
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {page.hubCards.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Which related guide when" rows={page.relatedGuideScenarios} />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <SectionIntro eyebrow="Professional support" title="Providers That May Help">
                <p>
                  Career, relocation, immigration and tax support may help with specific steps — this page does not rank networking coaches,
                  meetup apps or communities. Some links may be affiliate or referral links.
                </p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.services} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {page.serviceCategories.map((item, idx) => (
                    <LinkCard
                      key={`${item.href}-${item.label}`}
                      item={{ label: item.label, href: item.href, description: item.description, status: item.status ?? "live" }}
                      iconIndex={idx}
                    />
                  ))}
                </div>
                <BulletPanel title="When professional support may help" items={page.servicesWhenToUse} />
                <ScenarioTable title="When expats typically seek support" rows={page.serviceScenarios} />
                <RemoteWorkNetherlandsRecommendedServices />
                <p className="text-sm leading-relaxed text-foreground-muted">{page.servicesNote}</p>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions">
                <p>These answers help you decide what to do next — events, LinkedIn balance, intro asks, follow-ups and sponsorship honesty.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.faq} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <Accordion items={faqItems} />
                <BulletPanel title="After reading the FAQ" items={page.faqNextSteps} />
              </div>
            </section>

            <section id="official-sources" className={sectionClass}>
              <SectionIntro eyebrow="Trust" title="Official Sources">
                <p>{page.officialSourcesNote}</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.officialSources} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
                <BulletPanel title="Where to verify what" items={page.sourceVerificationTips} />
              </div>
            </section>

            <section
              id="explore-next"
              className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10")}
            >
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Explore Next" tone="onDark">
                  <p>Move from networking habits into LinkedIn tactics, channels, CV polish, interviews, offer talks and workplace culture.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={guidePremiumVisualSpacingClass} />
                <div className={guidePremiumSectionDetailStackClass}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.exploreNextCards.map((item, idx) => (
                      <LinkCard key={item.href} item={item} iconIndex={idx} tone="onDark" />
                    ))}
                  </div>
                  <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="text-base font-bold tracking-tight text-white">Choose your next guide</h3>
                    <ul className="mt-4 space-y-3">
                      {page.exploreNextTips.map((tip) => (
                        <li key={tip} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={LINKEDIN_NETHERLANDS_PATH} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white">
                      LinkedIn Netherlands guide <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
