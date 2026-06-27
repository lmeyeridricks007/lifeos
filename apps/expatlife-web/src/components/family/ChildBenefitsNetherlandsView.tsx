import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe2,
  HeartHandshake,
  Home,
  Landmark,
  PiggyBank,
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
import { GuidePremiumVisualFigure } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  guidePremiumCardGridClass,
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualAfterIntroClass,
} from "@/lib/ui/guide-premium-page-ui";
import {
  CHILDCARE_ALLOWANCE_PATH,
  FAMILY_TOOLS_PATH,
  childBenefitsNetherlandsPage as page,
  type ChildBenefitsLink,
} from "./childBenefitsNetherlandsPageModel";

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
const cardIcons = [Baby, Users, WalletCards, PiggyBank, FileText, Globe2, Home, Landmark, HeartHandshake, ShieldCheck] as const;
const snapshotIcons = [Baby, WalletCards, PiggyBank, Landmark, FileText, ShieldCheck] as const;
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

function QualifyCard({ card, index }: { card: (typeof page.whoQualifies.cards)[number]; index: number }) {
  const Icon = cardIcons[index % cardIcons.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold text-foreground">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
      <p className="mt-3 rounded-xl border border-cyan-100 bg-cyan-50/60 px-3 py-2 text-sm leading-relaxed text-foreground-muted">
        <span className="font-semibold text-foreground">Expat note: </span>{card.expatNote}
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
      <p className="mt-3 text-sm font-semibold leading-relaxed text-brand-strong">{card.advice}</p>
    </article>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: ChildBenefitsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : "bg-slate-200")} aria-hidden />
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Coming soon</span> : null}
      </span>
      {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
      {isLive ? (
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );
  if (!isLive) return <article className={cn(cardClass, "opacity-90")}>{body}</article>;
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
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative block overflow-hidden p-5", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-link">
        <ShieldCheck className="h-4 w-4 text-brand-strong" aria-hidden />
        {source.label}
        <ExternalLink className="h-3.5 w-3.5 text-foreground-muted" aria-hidden />
      </span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
    </a>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <div className={cn("absolute inset-x-0 top-0 z-10 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority unoptimized sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-white/10" aria-hidden />
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
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ChildBenefitsNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Family", item: new URL(FAMILY_TOOLS_PATH, baseUrl).toString() },
    { name: "Child Benefits", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Child benefits</span>
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
                    Practical orientation only — not financial or legal advice. Eligibility and amounts are determined by SVB and Belastingdienst. Use official calculators and portals.
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Child benefits guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong", transitionInteractive, activeBrightnessPress)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="quick-answer" className={sectionClass}>
              <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
                {page.quickAnswer.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <div className={guidePremiumSectionDetailStackClass}>
                <div className={cn(guidePremiumCardGridClass(page.quickAnswer.keyPoints.length))}>
                  {page.quickAnswer.keyPoints.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
                  <ChecklistBlock title="Three orientation moves before applying" items={page.introPlanningSteps} columns={2} />
                  <BulletPanel title="Dutch family benefits at a glance" items={page.quickAnswer.benefitSummary} />
                </div>
                <ScenarioTable title="When child benefits affect real relocation plans" rows={page.quickAnswer.scenarios} />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro eyebrow="At a glance" title="Dutch child benefits snapshot" fullWidth>
                <p>Compare administrators and application channels before you apply — Kinderbijslag and toeslagen use different portals.</p>
              </SectionIntro>
              <div className={cn(guidePremiumSectionDetailStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
              </div>
            </section>

            <section id="understanding" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="System" title={page.understanding.heading} fullWidth>
                  {page.understanding.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.understanding} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.understanding.comparisonRows.map((r) => ({
                    benefit: r.benefit,
                    purpose: r.purpose,
                    adminOrg: r.adminOrg,
                    paymentFrequency: r.paymentFrequency,
                    eligibilityBasis: r.eligibilityBasis,
                  }))}
                  columns={[
                    { key: "benefit", label: "Benefit" },
                    { key: "purpose", label: "Purpose" },
                    { key: "adminOrg", label: "Administrator" },
                    { key: "paymentFrequency", label: "Payment rhythm" },
                    { key: "eligibilityBasis", label: "Eligibility basis" },
                  ]}
                />
              </div>
            </section>

            <section id="kinderbijslag" className={sectionClass}>
              <SectionIntro eyebrow="SVB" title={page.kinderbijslag.heading} fullWidth>
                {page.kinderbijslag.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.kinderbijslag} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <BulletPanel title="Kinderbijslag essentials" items={page.kinderbijslag.points} />
                <div className="grid gap-4 md:grid-cols-2">
                  {page.kinderbijslag.links.map((source) => <SourceLink key={source.href} source={source} />)}
                </div>
              </div>
            </section>

            <section id="child-budget" className={sectionClass}>
              <SectionIntro eyebrow="Toeslagen" title={page.childBudget.heading} fullWidth>
                {page.childBudget.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.childBudget} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <BulletPanel title="Kindgebonden Budget essentials" items={page.childBudget.points} />
                <div className="grid gap-4 md:grid-cols-2">
                  {page.childBudget.links.map((source) => <SourceLink key={source.href} source={source} />)}
                </div>
              </div>
            </section>

            <section id="childcare-allowance" className={sectionClass}>
              <SectionIntro eyebrow="Childcare" title={page.childcareAllowance.heading} fullWidth>
                {page.childcareAllowance.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.childcareAllowance} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <BulletPanel title="Childcare allowance essentials" items={page.childcareAllowance.points} />
                <div className={cn(guidePremiumCardGridClass(page.childcareAllowance.links.length))}>
                  {page.childcareAllowance.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <Link href={CHILDCARE_ALLOWANCE_PATH} className={cn(primaryCtaClass, "w-fit")}>
                  Full childcare allowance guide
                  <HeartHandshake className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </section>

            <section id="other-support" className={sectionClass}>
              <SectionIntro eyebrow="Beyond core benefits" title={page.otherSupport.heading} fullWidth>
                {page.otherSupport.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <div className={guidePremiumSectionDetailStackClass}>
                <div className={cn(guidePremiumCardGridClass(page.otherSupport.cards.length))}>
                  {page.otherSupport.cards.map((card, idx) => <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={idx} />)}
                </div>
                <div className={cn(guidePremiumCardGridClass(page.otherSupport.links.length))}>
                  {page.otherSupport.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
              </div>
            </section>

            <section id="who-qualifies" className={sectionClass}>
              <SectionIntro eyebrow="Eligibility" title={page.whoQualifies.heading} fullWidth>
                {page.whoQualifies.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <div className={cn(guidePremiumSectionDetailStackClass, guidePremiumCardGridClass(page.whoQualifies.cards.length))}>
                {page.whoQualifies.cards.map((card, idx) => <QualifyCard key={card.title} card={card} index={idx} />)}
              </div>
            </section>

            <section id="apply" className={sectionClass}>
              <SectionIntro eyebrow="Process" title={page.apply.heading} fullWidth>
                {page.apply.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.howToApply} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.apply.steps.map((s) => ({ step: s.name, action: s.text, tip: s.tip }))}
                  columns={[
                    { key: "step", label: "Step" },
                    { key: "action", label: "What to do" },
                    { key: "tip", label: "Practical tip" },
                  ]}
                />
                <div className={cn(guidePremiumCardGridClass(page.apply.links.length))}>
                  {page.apply.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
              </div>
            </section>

            <section id="payments" className={sectionClass}>
              <SectionIntro eyebrow="Timing" title={page.payments.heading} fullWidth>
                {page.payments.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.paymentSchedules} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <BulletPanel title="Payment schedule orientation" items={page.payments.points} />
              </div>
            </section>

            <section id="scenarios" className={sectionClass}>
              <SectionIntro eyebrow="Profiles" title={page.scenarios.heading} fullWidth>
                {page.scenarios.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.familyScenarios} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ScenarioTable title="Family benefit planning examples" rows={page.scenarios.rows} />
              </div>
            </section>

            <section id="moving-to" className={sectionClass}>
              <SectionIntro eyebrow="Arrival" title={page.movingTo.heading} fullWidth>
                {page.movingTo.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.movingTo} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <BulletPanel title="Arrival planning points" items={page.movingTo.points} />
                <ChecklistBlock title="Moving to NL benefits checklist" items={page.movingTo.checklist} columns={2} />
                <div className={cn(guidePremiumCardGridClass(page.movingTo.links.length))}>
                  {page.movingTo.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
              </div>
            </section>

            <section id="moving-away" className={sectionClass}>
              <SectionIntro eyebrow="Departure" title={page.movingAway.heading} fullWidth>
                {page.movingAway.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.movingAway} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <BulletPanel title="Departure planning points" items={page.movingAway.points} />
                <div className={cn(guidePremiumCardGridClass(page.movingAway.links.length))}>
                  {page.movingAway.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
              </div>
            </section>

            <section id="expat-questions" className={sectionClass}>
              <SectionIntro eyebrow="Orientation" title={page.expatQuestions.heading} fullWidth>
                {page.expatQuestions.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.expatQuestions} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <Accordion items={page.expatQuestions.questions.map((item, idx) => ({ id: `expat-q-${idx}`, title: item.q, content: item.a }))} />
              </div>
            </section>

            <section id="checklist" className={sectionClass}>
              <SectionIntro eyebrow="Checklist" title={page.checklist.heading} fullWidth>
                <p>Work through these lists from arrival planning through ongoing updates.</p>
              </SectionIntro>
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Before registration" items={page.checklist.early} columns={2} />
                <ChecklistBlock title="Application phase" items={page.checklist.apply} columns={2} />
                <ChecklistBlock title="Ongoing updates" items={page.checklist.ongoing} columns={2} />
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <SectionIntro eyebrow="Avoid" title="Common child benefit mistakes" fullWidth>
                <p>These patterns cause repayments and missed support for expat families — plan around them early.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.commonMistakes} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={cn(guidePremiumSectionDetailStackClass, guidePremiumCardGridClass(page.mistakeCards.length))}>
                {page.mistakeCards.map((card, idx) => <MistakeCard key={card.title} card={card} index={idx} />)}
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently asked questions" fullWidth>
                <p>Orientation answers — confirm entitlement on SVB and Belastingdienst for your household.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.faq} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={guidePremiumSectionDetailStackClass}>
                <Accordion items={faqItems} />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Family guides" title="Related guides for relocating families" fullWidth>
                <p>Connect child benefits with childcare, schools and relocation content.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.relatedGuides} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={cn(guidePremiumSectionDetailStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.relatedGuides.map((item, idx) => <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />)}
              </div>
            </section>

            <section id="family-hub" className={sectionClass}>
              <SectionIntro eyebrow="Family hub" title="Explore family tools and guides" fullWidth>
                <p>This page is the child benefits cornerstone — explore related family topics next.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.familyHub} className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
              <div className={cn(guidePremiumSectionDetailStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.familyHubCards.map((item, idx) => <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />)}
              </div>
            </section>

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
                  <p>Continue with childcare allowance detail, daycare search and family relocation guides.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8")} />
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
