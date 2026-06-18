import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ExternalLink,
  Globe,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Users,
  UserPlus,
  Trophy,
  Sparkles,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualAfterIntroClass,
} from "@/lib/ui/guide-premium-page-ui";
import {
  siteHeroFramedShellClass,
  siteHeroGlowPrimaryClass,
  siteHeroGlowSecondaryClass,
  siteHeroTopAccentClass,
  sitePageCanvasClass,
} from "@/lib/ui/site-shell-identity";
import {
  movingNlCardMicroLiftClass,
  movingNlSectionH2Class,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  citiesFunnelHeroFigureClassName,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { GuidePremiumVisualFigure, type GuidePremiumVisual } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  communityBasicsNetherlandsPage as page,
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_LANGUAGE_PATH,
  SURVIVAL_GUIDE_PATH,
  type CityCommunityCard,
  type ChecklistItem,
  type LifeGuideLink,
} from "./communityBasicsNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
const visualAfterIntroClass = cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8");

function PremiumGuideSection({
  id,
  intro,
  visual,
  children,
}: {
  id: string;
  intro: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className={guidePremiumIntroStackClass}>{intro}</div>
      <GuidePremiumVisualFigure visual={visual} className={visualAfterIntroClass} />
      <div className={guidePremiumSectionDetailStackClass}>{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="w-full max-w-none">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p> : null}
      <h2 className={cn(movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground-muted">{children}</div> : null}
    </div>
  );
}

function ExampleTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: readonly string[];
  rows: readonly Record<string, string>[];
}) {
  return (
    <div className={cn(cardClass, "overflow-hidden p-0")}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="border-b border-slate-200/80 px-5 py-4">
        <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/80">
              {columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-bold text-foreground">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="border-b border-slate-100 last:border-0">
                {columns.map((column) => (
                  <td key={column} className="px-4 py-3 leading-relaxed text-foreground-muted">{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TimelinePhaseCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {page.integrationTimeline.map((phase) => (
        <article key={phase.phase} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">{phase.phase}</p>
          <ul className="mt-4 space-y-3">
            {phase.tasks.map((task) => (
              <li key={task} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function ExternalResourceGrid({
  items,
}: {
  items: Array<{ name: string; description: string; href: string; eyebrow?: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          {item.eyebrow ? (
            <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">{item.eyebrow}</p>
          ) : null}
          <h3 className={cn("text-base font-bold text-foreground", item.eyebrow ? "mt-2" : undefined)}>{item.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
            Open resource
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </span>
        </a>
      ))}
    </div>
  );
}

function ChallengeCopingGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {page.challengeCoping.map((item) => (
        <article key={item.challenge} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">Challenge</p>
          <h3 className="mt-2 text-base font-bold text-foreground">{item.challenge}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          <p className="mt-3 rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/70 p-3 text-sm leading-relaxed text-foreground-muted">
            <span className="font-bold text-foreground">Try: </span>
            {item.coping}
          </p>
        </article>
      ))}
    </div>
  );
}

function LinkOrPlanned({ item, className }: { item: LifeGuideLink; className?: string }) {
  const isLive = item.status !== "comingSoon";
  const content = (
    <div className="flex h-full flex-col">
      <span className="block text-base font-black leading-snug tracking-tight text-foreground">{item.label}</span>
      {item.description ? <span className="mt-2 block text-sm font-normal leading-relaxed text-foreground-muted">{item.description}</span> : null}
      <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-copilot-bg-soft px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong ring-1 ring-copilot-primary/10">
        {isLive ? "Open guide" : "Planned guide"}
        {isLive ? <ArrowRight className="h-3.5 w-3.5" aria-hidden /> : null}
      </span>
    </div>
  );

  if (!isLive) {
    return (
      <article className={cn(cardClass, "bg-slate-50/85 opacity-90", className)}>
        <div className="absolute inset-x-0 top-0 h-1 bg-slate-200" aria-hidden />
        {content}
      </article>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        cardClass,
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        transitionInteractive,
        activeBrightnessPress,
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {content}
    </Link>
  );
}

function Hero() {
  return (
    <section className={cn("relative overflow-hidden", siteHeroFramedShellClass)}>
      <div className={siteHeroTopAccentClass} aria-hidden />
      <div className={siteHeroGlowPrimaryClass} aria-hidden />
      <div className={siteHeroGlowSecondaryClass} aria-hidden />
      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr),minmax(420px,0.95fr)]">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-foreground-muted">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-foreground">Home</Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={page.hubPath} className="hover:text-foreground">Life in the Netherlands</Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-semibold text-foreground" aria-current="page">Community Basics</li>
              </ol>
            </nav>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={page.hero.primaryCta.href}
                className={cn(
                  "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-card hover:bg-brand-strong",
                  transitionInteractive,
                  activeBrightnessPress
                )}
              >
                {page.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={page.hero.secondaryCta.href}
                className={cn(
                  "inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-foreground shadow-sm hover:bg-slate-50",
                  transitionInteractive,
                  activeBrightnessPress
                )}
              >
                {page.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <figure className={citiesFunnelHeroFigureClassName()}>
            <div className={cn("absolute inset-x-0 top-0 z-10 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <Image
              src={page.hero.image.src}
              alt={page.hero.image.alt}
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-white/10" aria-hidden />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" aria-hidden />
          </figure>
        </div>
      </Container>
    </section>
  );
}

function SectionNav() {
  return (
    <div className="sticky top-0 z-20 border-y border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <Container>
        <nav aria-label="Community basics page sections" className="flex gap-2 overflow-x-auto py-3">
          {page.sectionNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-foreground-muted hover:border-brand/30 hover:text-brand-strong"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}

function TipCardGrid({ items, icon: Icon = Users }: { items: Array<{ title: string; body: string }>; icon?: typeof Users }) {
  const xlColumnClass = items.length >= 6 ? "xl:grid-cols-3" : "xl:grid-cols-4";
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", xlColumnClass)}>
      {items.map((item) => (
        <article key={item.title} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function VisualTextDetails({ details }: { details: { title: string; items: readonly string[] } }) {
  return (
    <aside className="rounded-3xl border border-slate-200/90 bg-slate-50/85 p-5 ring-1 ring-slate-900/[0.03]">
      <h3 className="text-base font-black tracking-tight text-foreground">{details.title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {details.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
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
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function SnapshotGrid({ items }: { items: Array<{ title: string; body: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Sparkles className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function CityCommunityCardGrid({ items }: { items: CityCommunityCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Link key={item.city} href={item.href} className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <MapPin className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-black tracking-tight text-foreground">{item.city}</h3>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.internationalPopulation}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.communityVibe}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.socialOpportunities}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
            Open city guide
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  );
}

function MythCardGrid({ items }: { items: ReadonlyArray<{ readonly myth: string; readonly reality: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.myth} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-strong">Myth</p>
          <h3 className="mt-2 text-base font-bold text-foreground">{item.myth}</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{item.reality}</p>
        </article>
      ))}
    </div>
  );
}

function ChecklistDetailGrid({ items }: { items: readonly ChecklistItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.task} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.timing}</p>
              <h3 className="mt-1 text-base font-bold text-foreground">{item.task}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.detail}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function LinkCardGrid({ items }: { items: LifeGuideLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <LinkOrPlanned key={item.label} item={item} />
      ))}
    </div>
  );
}

export function CommunityBasicsNetherlandsView() {
  const faqAccordionItems = page.faq.map((item, index) => ({ id: `faq-${index}`, title: item.q, content: item.a }));

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Life in the Netherlands", item: new URL(page.hubPath, baseUrl).toString() },
          { name: "Community Basics in the Netherlands", item: new URL(page.path, baseUrl).toString() },
        ]}
      />
      <div className={sitePageCanvasClass}>
        <Hero />
        <SectionNav />
        <Container className="py-12 sm:py-16">
          <main className="space-y-8">
            <section id="intro" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading}>
                  {page.quickAnswer.summaryPoints.map((point) => <p key={point}>{point}</p>)}
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.intro} className={visualAfterIntroClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <VisualTextDetails details={page.visualTextDetails.intro} />
                <TimelinePhaseCards />
                <div className="space-y-6">
                  <SectionIntro eyebrow="At a glance" title="Community Life at a Glance">
                    <p>Six pillars shape everyday social life in the Netherlands — use the visual below to choose one or two routes for your first months.</p>
                  </SectionIntro>
                  <GuidePremiumVisualFigure visual={page.visuals.snapshot} />
                  <SnapshotGrid items={page.snapshotCards} />
                  <BulletPanel title="How to use this snapshot" items={page.snapshotUseTips} />
                </div>
                <Link
                  href={SURVIVAL_GUIDE_PATH}
                  className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
                >
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <Building2 className="h-5 w-5 text-brand-strong" aria-hidden />
                  <h3 className="mt-3 text-lg font-black tracking-tight text-foreground">Netherlands Survival Guide</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    Continue into day-one through month-one Living guides for transport, apps, payments and first-week sequencing alongside community settling.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                    Open survival guide
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </div>
            </section>

            <PremiumGuideSection
              id="culture"
              intro={
                <SectionIntro title={page.culture.heading}>
                  {page.culture.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.culture}
            >
              <VisualTextDetails details={page.visualTextDetails.culture} />
              <TipCardGrid items={page.cultureDrivers} icon={Building2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="making-friends"
              intro={
                <SectionIntro title={page.makingFriends.heading}>
                  {page.makingFriends.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.makingFriends}
            >
              <VisualTextDetails details={page.visualTextDetails.makingFriends} />
              <ExampleTable
                title="Friendship routes — examples and first steps"
                columns={["Route", "Example", "First step"]}
                rows={page.makingFriendsScenarios.map((row) => ({
                  Route: row.route,
                  Example: row.example,
                  "First step": row.firstStep,
                }))}
              />
              <TipCardGrid items={page.makingFriendsCards} icon={UserPlus} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="communication"
              intro={
                <SectionIntro title={page.communication.heading}>
                  {page.communication.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.communication}
            >
              <VisualTextDetails details={page.visualTextDetails.communication} />
              <ExampleTable
                title="What you might hear — and what it often means"
                columns={["What's said", "Practical meaning"]}
                rows={page.communicationExamples.map((row) => ({
                  "What's said": row.said,
                  "Practical meaning": row.practicalMeaning,
                }))}
              />
              <BulletPanel title="Practical communication tips" items={page.communicationTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="neighborhood"
              intro={
                <SectionIntro title={page.neighborhood.heading}>
                  {page.neighborhood.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.neighborhood}
            >
              <VisualTextDetails details={page.visualTextDetails.neighborhood} />
              <BulletPanel title="Neighborhood orientation" items={page.neighborhoodTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="clubs"
              intro={
                <SectionIntro title={page.clubs.heading}>
                  {page.clubs.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.clubs}
            >
              <VisualTextDetails details={page.visualTextDetails.clubs} />
              <TipCardGrid items={page.clubActivities} icon={Trophy} />
              <BulletPanel title="How to join a club" items={page.clubJoiningSteps} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="volunteering"
              intro={
                <SectionIntro title={page.volunteering.heading}>
                  {page.volunteering.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.volunteering}
            >
              <VisualTextDetails details={page.visualTextDetails.volunteering} />
              <TipCardGrid items={page.volunteeringExamples} icon={Heart} />
              <ExternalResourceGrid items={page.volunteerResources} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="events"
              intro={
                <SectionIntro title={page.events.heading}>
                  {page.events.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.events}
            >
              <VisualTextDetails details={page.visualTextDetails.events} />
              <TipCardGrid items={page.eventExamples} icon={Calendar} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="expat-networks"
              intro={
                <SectionIntro title={page.expatNetworks.heading}>
                  {page.expatNetworks.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.expatNetworks}
            >
              <VisualTextDetails details={page.visualTextDetails.expatNetworks} />
              <TipCardGrid items={page.expatNetworkTypes} icon={Globe} />
              <ExternalResourceGrid
                items={page.expatHubExamples.map((hub) => ({
                  eyebrow: hub.city,
                  name: hub.name,
                  description: hub.description,
                  href: hub.href,
                }))}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="families"
              intro={
                <SectionIntro title={page.families.heading}>
                  {page.families.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.families}
            >
              <VisualTextDetails details={page.visualTextDetails.families} />
              <TipCardGrid items={page.familyCommunityRoutes} icon={Home} />
              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  href={LIVING_CULTURE_ETIQUETTE_PATH}
                  className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
                >
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <h3 className="text-base font-bold text-foreground">Culture & Etiquette (Living)</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    Directness, invitations, public etiquette and neighbor norms that shape family social life.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                    Open guide
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
                <Link
                  href={LIVING_LANGUAGE_PATH}
                  className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
                >
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <h3 className="text-base font-bold text-foreground">Language & Phrases (Living)</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    Practical Dutch phrases for school gates, shops and neighborhood conversations.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                    Open guide
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="students"
              intro={
                <SectionIntro title={page.students.heading}>
                  {page.students.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.students}
            >
              <VisualTextDetails details={page.visualTextDetails.students} />
              <TipCardGrid items={page.studentRoutes} icon={Users} />
              <Link
                href={LIVING_LANGUAGE_PATH}
                className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                <h3 className="text-base font-bold text-foreground">Language & Phrases (Living)</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Starter Dutch for campus life, housing communities and local club sign-up conversations.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                  Open guide
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="digital"
              intro={
                <SectionIntro title={page.digital.heading}>
                  {page.digital.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.digital}
            >
              <VisualTextDetails details={page.visualTextDetails.digital} />
              <TipCardGrid items={page.digitalPlatforms} icon={MessageCircle} />
              <BulletPanel title="How to use online communities well" items={page.digitalUseTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="cities"
              intro={
                <SectionIntro title="Community Life Across Dutch Cities">
                  <p>International population, neighborhood vibe and club culture differ by city — explore city guides for deeper local context.</p>
                </SectionIntro>
              }
              visual={page.visuals.cities}
            >
              <VisualTextDetails details={page.visualTextDetails.cities} />
              <CityCommunityCardGrid items={page.cityCommunityCards} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="challenges"
              intro={
                <SectionIntro title={page.challenges.heading}>
                  {page.challenges.paragraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              }
              visual={page.visuals.challenges}
            >
              <VisualTextDetails details={page.visualTextDetails.challenges} />
              <TipCardGrid items={page.challengeCards} icon={Users} />
              <ChallengeCopingGrid />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              intro={
                <SectionIntro title="Community Integration Checklist">
                  <p>Use this checklist after your first month — consistency matters more than checking every box in week one.</p>
                </SectionIntro>
              }
              visual={page.visuals.checklist}
            >
              <VisualTextDetails details={page.visualTextDetails.checklist} />
              <ChecklistDetailGrid items={page.integrationChecklistItems} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="myths"
              intro={
                <SectionIntro title="Community Myths">
                  <p>Balanced explanations for common assumptions newcomers hear about Dutch social life.</p>
                </SectionIntro>
              }
              visual={page.visuals.myths}
            >
              <VisualTextDetails details={page.visualTextDetails.myths} />
              <MythCardGrid items={page.myths} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              intro={
                <SectionIntro title="Community Basics FAQ">
                  <p>Quick answers for orientation — pair with official sources and your local gemeente for program details.</p>
                </SectionIntro>
              }
              visual={page.visuals.faq}
            >
              <VisualTextDetails details={page.visualTextDetails.faq} />
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="sources"
              intro={
                <SectionIntro title="Official Resources">
                  <p>Community resources, integration programs and local activities vary by municipality. Always verify current information with official sources.</p>
                </SectionIntro>
              }
              visual={page.visuals.sources}
            >
              <VisualTextDetails details={page.visualTextDetails.sources} />
              <BulletPanel title="How to use these resources" items={page.sourceUsageTips} />
              <p className="text-sm leading-relaxed text-foreground-muted">{page.sourcesDisclaimer}</p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.officialSources.map((source) => (
                  <a
                    key={source.label}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(cardClass, "block", transitionInteractive, activeBrightnessPress)}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-lg font-black text-foreground">{source.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{source.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-strong">
                      Open official source
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </a>
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              intro={
                <SectionIntro title="Related Guides">
                  <p>Continue from community basics into relocation, cities, language, culture and family settling guides.</p>
                </SectionIntro>
              }
              visual={page.visuals.relatedGuides}
            >
              <VisualTextDetails details={page.visualTextDetails.relatedGuides} />
              <LinkCardGrid items={page.relatedGuides} />
            </PremiumGuideSection>

            <section
              id="explore-next"
              className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-slate-950 p-6 text-white shadow-card ring-1 ring-white/10 sm:p-8 lg:p-10"
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Explore next</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-white">Keep Building Your Life in the Netherlands</h2>
                <p className="mt-4 max-w-5xl text-base leading-relaxed text-cyan-50/86">
                  Move from community orientation into culture, language, family life, city choice and volunteering paths.
                </p>
                <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {page.exploreNextCards.map((item) => (
                    <LinkOrPlanned key={item.label} item={item} className="bg-white/95" />
                  ))}
                </div>
              </div>
            </section>
          </main>
        </Container>
      </div>
    </>
  );
}
