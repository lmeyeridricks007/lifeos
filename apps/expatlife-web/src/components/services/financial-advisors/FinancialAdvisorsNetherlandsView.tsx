import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileText,
  Globe2,
  Home,
  Landmark,
  MapPin,
  MessageSquareText,
  PiggyBank,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
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
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  citiesFunnelHeroFigureClassName,
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  financialAdvisorsNetherlandsPage as page,
  type FinancialAdvisorLink,
  type FinancialAdvisorProvider,
} from "./financialAdvisorsNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const sectionVisualMtClass = "mt-8 w-full sm:mt-10";
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
const providerTypeClass =
  "rounded-full bg-copilot-bg-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong ring-1 ring-copilot-primary/10";
const cardIcons = [Calculator, Landmark, ClipboardList, FileText, ShieldCheck, PiggyBank, WalletCards, Globe2, Banknote, BriefcaseBusiness, Building2, Home] as const;
const snapshotIcons = [Globe2, BriefcaseBusiness, PiggyBank, Landmark, ShieldCheck, Banknote] as const;
const affiliateProviderData = loadPlacementWithProviders(
  "nl-services-financial-advisors-support-providers",
  "netherlands",
  undefined
);
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
  fullWidth = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  fullWidth?: boolean;
}) {
  const useColumnLayout = fullWidth && Children.count(children) > 1;
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p> : null}
      <h2 className={cn(movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 space-y-3 text-base leading-relaxed text-foreground-muted",
            useColumnLayout && "max-w-none lg:columns-2 lg:gap-x-10 [&>p]:break-inside-avoid"
          )}
        >
          {children}
        </div>
      ) : null}
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
      {page.snapshotCards.slice(0, 4).map((card, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <div
            key={card.label}
            className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm"
          >
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

function VisualFigure({ visual, className }: { visual: (typeof page.visuals)[keyof typeof page.visuals]; className?: string }) {
  return (
    <figure
      className={cn(
        "relative isolate w-full overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 shadow-expatos-xl ring-1 ring-slate-900/[0.05]",
        movingNlCardMicroLiftClass,
        className
      )}
    >
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-200/25 blur-3xl" aria-hidden />
      <div className="relative aspect-[4/3] w-full min-h-[280px] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft sm:min-h-[360px] lg:min-h-[480px] xl:min-h-[560px]">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1280px) 1400px, 100vw" className="object-contain p-1 drop-shadow-sm sm:p-2" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">
        {visual.caption}
      </figcaption>
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

function LinkCard({ item, iconIndex = 0 }: { item: FinancialAdvisorLink; iconIndex?: number }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  const isLive = item.status !== "comingSoon";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : "bg-slate-200")} aria-hidden />
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="mt-4 block text-sm font-bold text-foreground">
        {item.label}
        {!isLive ? (
          <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Coming soon</span>
        ) : null}
      </span>
      {item.description ? <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{item.description}</span> : null}
      {isLive ? (
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );
  if (!isLive) return <article className={cn(cardClass, "opacity-90")}>{body}</article>;
  return (
    <Link
      href={item.href}
      className={cn(
        cardClass,
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

function InfoTable({
  rows,
  columns,
}: {
  rows: Array<Record<string, string>>;
  columns: Array<{ key: string; label: string }>;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] divide-y divide-slate-200 text-left text-sm">
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

function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-xl">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="min-w-[920px] divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {["Advisor", "Cities Served", "Expat Focus", "Languages", "Online", "Focus Areas"].map((heading) => (
                <th key={heading} scope="col" className="px-4 py-3 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {page.comparisonTable.map((row) => (
              <tr key={row.advisor} className="align-top">
                <th scope="row" className="px-4 py-4 font-bold text-foreground">
                  {row.advisor}
                </th>
                <td className="px-4 py-4 text-foreground-muted">{row.citiesServed}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.expatFocus}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.languages}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.onlineConsultations}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.focusAreas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProviderCard({ provider }: { provider: FinancialAdvisorProvider }) {
  return (
    <article className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-expatos-xl ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{provider.city}</p>
          <h3 className="mt-2 text-xl font-black tracking-tight text-foreground">{provider.name}</h3>
        </div>
        <span className={providerTypeClass}>{provider.advisorType}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{provider.summary}</p>
      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Expat focus</p>
          <p className="mt-1 text-foreground-muted">{provider.expatFocus}</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Focus areas</p>
          <p className="mt-1 text-foreground-muted">{provider.focusAreas.join(" · ")}</p>
        </div>
      </div>
      <dl className="mt-4 grid gap-2 text-sm text-foreground-muted sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-foreground">Languages</dt>
          <dd>{provider.languages.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Cities served</dt>
          <dd>{provider.citiesServed.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Availability</dt>
          <dd>
            {provider.onlineConsultations ? "Online consultations available. " : ""}
            {provider.inPersonAvailability}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Verification note</dt>
          <dd>{provider.verificationNote}</dd>
        </div>
      </dl>
      <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-200/80 pt-4">
        <a href={provider.website} target="_blank" rel="noopener noreferrer" className={secondaryCtaClass}>
          Visit website <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}

function TopicList({ items }: { items: Array<{ topic: string; body?: string; note?: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <FeatureCard key={item.topic} title={item.topic} body={item.body ?? item.note ?? ""} iconIndex={index} />
      ))}
    </div>
  );
}

export function FinancialAdvisorsNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Financial Advisors", item: new URL(page.path, baseUrl).toString() },
  ];
  const faqItems = page.faqs.map((item, idx) => ({ id: `faq-${idx}`, title: item.q, content: item.a }));
  const showAffiliateProviders = Boolean(affiliateProviderData && affiliateProviderData.items.length > 0);
  const sectionNavItems = page.sectionNav.filter((item) => item.href !== "#affiliate-providers" || showAffiliateProviders);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-copilot-text-secondary">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="hover:text-copilot-text-primary">Home</Link></li>
              <li aria-hidden className="text-copilot-text-muted">/</li>
              <li><Link href="/netherlands/" className="hover:text-copilot-text-primary">Netherlands</Link></li>
              <li aria-hidden className="text-copilot-text-muted">/</li>
              <li><Link href="/netherlands/services/" className="hover:text-copilot-text-primary">Services</Link></li>
              <li aria-hidden className="text-copilot-text-muted">/</li>
              <li className="font-medium text-copilot-text-primary" aria-current="page">Financial Advisors</li>
            </ol>
          </nav>

          <section className={cn(siteHeroFramedShellClass, "overflow-hidden p-6 shadow-expatos-xl sm:p-8 lg:p-12")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_0.78fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">{page.hero.eyebrow}</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
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
                  <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>
                    {page.hero.secondaryCta.label}
                  </Link>
                </div>
                <p className="mt-5 max-w-3xl rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950 shadow-sm ring-1 ring-amber-200/40">
                  Provider inclusion is informational, not a recommendation. This page is not investment, tax or retirement advice — verify AFM credentials, fees and scope directly with providers.
                </p>
              </div>
              <HeroImage />
            </div>
          </section>
          <HeroSignalStrip />

          <nav
            className="sticky top-3 z-20 mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl"
            aria-label="Financial advisors guide sections"
          >
            {sectionNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
                  transitionInteractive,
                  activeBrightnessPress
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <SectionIntro eyebrow="Overview" title={page.intro.heading} fullWidth>
                {page.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2")}>
                {page.intro.reasons.map((item, idx) => (
                  <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                ))}
              </div>
              <div className="mt-6"><BulletPanel title="What financial advisors may help with" items={page.intro.advisorMayHelpWith} /></div>
              <div className="mt-6 flex flex-wrap gap-3">
                {page.intro.links.map((link) => (
                  <Link key={link.href} href={link.href} className={secondaryCtaClass}>{link.label}</Link>
                ))}
              </div>
              <VisualFigure visual={page.visuals.whyExpats} className={sectionVisualMtClass} />
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro eyebrow="At a glance" title="Financial Advisors at a Glance">
                <p>Practical orientation points before comparing providers or booking consultation calls.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
              </div>
              <div className="mt-6"><BulletPanel title="How to use this snapshot" items={page.snapshotUseTips} /></div>
              <VisualFigure visual={page.visuals.snapshot} className={sectionVisualMtClass} />
            </section>

            <section id="advisor-role" className={sectionClass}>
              <SectionIntro eyebrow="Advisor role" title="What Financial Advisors Typically Help With">
                <p>Scope varies by provider — some offer planning-only conversations, others also implement investments or refer tax and legal specialists. Confirm inclusions before you engage.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-4")}>
                {page.advisorServices.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <div className="mt-6">
                <InfoTable
                  rows={page.expatPlanningProfiles.map((row) => ({
                    profile: row.profile,
                    whatCanMatter: row.whatCanMatter,
                    exampleQuestion: row.exampleQuestion,
                  }))}
                  columns={[
                    { key: "profile", label: "Profile" },
                    { key: "whatCanMatter", label: "What can matter" },
                    { key: "exampleQuestion", label: "Example question" },
                  ]}
                />
              </div>
              <div className="mt-6"><BulletPanel title="How to use this section" items={page.advisorRoleUseTips} /></div>
              <VisualFigure visual={page.visuals.role} className={sectionVisualMtClass} />
            </section>

            <section id="advisor-models" className={sectionClass}>
              <SectionIntro eyebrow="Advisor models" title="Independent Planners, Boutiques and Wealth Management">
                <p>Different models compare different product sets, fee structures and minimum client profiles. Match the model to your assets, complexity and language needs.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4">
                {page.advisorTypeComparison.map((item) => (
                  <article key={item.type} className={cardClass}>
                    <h3 className="text-lg font-bold text-foreground">{item.type}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.scope}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                      <strong className="text-foreground">Useful when:</strong> {item.usefulWhen}
                    </p>
                    <ul className="mt-4 grid gap-2 text-sm text-foreground-muted">
                      {item.questions.map((question) => (
                        <li key={question} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                          {question}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="mt-6">
                <InfoTable
                  rows={page.feeExamples.map((row) => ({
                    item: row.item,
                    typicalRange: row.typicalRange,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "item", label: "Item" },
                    { key: "typicalRange", label: "Typical range" },
                    { key: "whatToConfirm", label: "What to confirm" },
                  ]}
                />
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <BulletPanel title="Financial advisor vs tax advisor" items={page.advisorVsTaxAdvisor} />
                <BulletPanel title="Compare models consistently" items={page.advisorModelsUseTips} />
              </div>
              <VisualFigure visual={page.visuals.advisorModels} className={sectionVisualMtClass} />
            </section>

            <section id="dutch-context" className={sectionClass}>
              <SectionIntro eyebrow="Dutch context" title="Financial Planning in the Netherlands">
                <p>Dutch pensions, tax boxes, housing costs and insurance premiums shape monthly cash flow differently from many home countries — planning should reflect local rules and your stay horizon.</p>
              </SectionIntro>
              <div className="mt-6"><TopicList items={page.dutchPlanningTopics} /></div>
              <div className="mt-6">
                <InfoTable
                  rows={page.dutchBudgetExamples.map((row) => ({
                    item: row.item,
                    example: row.example,
                    planningNote: row.planningNote,
                  }))}
                  columns={[
                    { key: "item", label: "Budget line" },
                    { key: "example", label: "Example figure" },
                    { key: "planningNote", label: "Why it matters in planning" },
                  ]}
                />
              </div>
              <div className="mt-6"><BulletPanel title="Prepare for Dutch-context planning" items={page.dutchContextUseTips} /></div>
              <VisualFigure visual={page.visuals.dutchContext} className={sectionVisualMtClass} />
            </section>

            <section id="pensions" className={sectionClass}>
              <SectionIntro eyebrow="Pensions" title="Dutch Pensions and Retirement Considerations">
                <p>
                  Employer schemes, AOW and private savings are often reviewed together. This section is informational — not pension advice. See our{" "}
                  <Link href="/netherlands/jobs/pension-netherlands-expats/" className="font-semibold text-link hover:text-link-hover">pension guide</Link>{" "}
                  for deeper context.
                </p>
              </SectionIntro>
              <div className="mt-6"><TopicList items={page.pensionTopics.map((t) => ({ topic: t.topic, body: t.note }))} /></div>
              <div className="mt-6">
                <InfoTable
                  rows={page.pensionExamples.map((row) => ({
                    profile: row.profile,
                    scenario: row.scenario,
                    planningQuestion: row.planningQuestion,
                    usefulRecord: row.usefulRecord,
                  }))}
                  columns={[
                    { key: "profile", label: "Profile" },
                    { key: "scenario", label: "Scenario" },
                    { key: "planningQuestion", label: "Planning question" },
                    { key: "usefulRecord", label: "Useful record" },
                  ]}
                />
              </div>
              <div className="mt-6"><BulletPanel title="Before a pension conversation" items={page.pensionUseTips} /></div>
              <VisualFigure visual={page.visuals.pensionsRetirement} className={sectionVisualMtClass} />
            </section>

            <section id="investing" className={sectionClass}>
              <SectionIntro eyebrow="Investing" title="Investments and Wealth Planning">
                <p>This page does not recommend investments. Use this section to understand discussion topics, then confirm regulatory scope, fees and independence with any advisor.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2")}>
                {page.investingTopics.map((item, idx) => <FeatureCard key={item.topic} title={item.topic} body={item.body} iconIndex={idx + 2} />)}
              </div>
              <div className="mt-6">
                <InfoTable
                  rows={page.investingScenarioExamples.map((row) => ({
                    profile: row.profile,
                    exampleFigure: row.exampleFigure,
                    issueToCheck: row.issueToCheck,
                    usefulRecord: row.usefulRecord,
                  }))}
                  columns={[
                    { key: "profile", label: "Profile" },
                    { key: "exampleFigure", label: "Example figure" },
                    { key: "issueToCheck", label: "Issue to check" },
                    { key: "usefulRecord", label: "Useful record" },
                  ]}
                />
              </div>
              <div className="mt-6"><BulletPanel title="Investment discussion checklist" items={page.investingUseTips} /></div>
              <VisualFigure visual={page.visuals.investingWealth} className={sectionVisualMtClass} />
            </section>

            <section id="property" className={sectionClass}>
              <SectionIntro eyebrow="Property" title="Buying Property and Financial Planning">
                <p>
                  Property timing should reflect relocation horizon and cash reserves, not just mortgage capacity. Connect with our{" "}
                  <Link href="/netherlands/services/mortgage-advisors/" className="font-semibold text-link hover:text-link-hover">mortgage advisors directory</Link>{" "}
                  and{" "}
                  <Link href="/netherlands/housing/buying-a-house-netherlands/" className="font-semibold text-link hover:text-link-hover">buying guide</Link>{" "}
                  for housing-specific steps.
                </p>
              </SectionIntro>
              <div className="mt-6"><TopicList items={page.propertyPlanningTopics} /></div>
              <div className="mt-6">
                <InfoTable
                  rows={page.propertyScenarioExamples.map((row) => ({
                    profile: row.profile,
                    scenario: row.scenario,
                    planningQuestion: row.planningQuestion,
                    usefulRecord: row.usefulRecord,
                  }))}
                  columns={[
                    { key: "profile", label: "Profile" },
                    { key: "scenario", label: "Scenario" },
                    { key: "planningQuestion", label: "Planning question" },
                    { key: "usefulRecord", label: "Useful record" },
                  ]}
                />
              </div>
              <div className="mt-6"><BulletPanel title="Property and planning checklist" items={page.propertyUseTips} /></div>
              <VisualFigure visual={page.visuals.propertyPlanning} className={sectionVisualMtClass} />
            </section>

            <section id="cross-border" className={sectionClass}>
              <SectionIntro eyebrow="Cross-border" title="International Financial Complexity">
                <p>List every country where you hold income, pensions or assets before shortlisting advisors. Cross-border files often need both planning and tax specialist support.</p>
              </SectionIntro>
              <div className="mt-6"><TopicList items={page.crossBorderTopics} /></div>
              <div className="mt-6">
                <InfoTable
                  rows={page.crossBorderScenarioExamples.map((row) => ({
                    profile: row.profile,
                    exampleConcern: row.exampleConcern,
                    practicalMove: row.practicalMove,
                  }))}
                  columns={[
                    { key: "profile", label: "Profile" },
                    { key: "exampleConcern", label: "Example concern" },
                    { key: "practicalMove", label: "Practical move" },
                  ]}
                />
              </div>
              <div className="mt-6"><BulletPanel title="Cross-border planning checklist" items={page.crossBorderUseTips} /></div>
              <VisualFigure visual={page.visuals.crossBorder} className={sectionVisualMtClass} />
            </section>

            <section id="challenges" className={sectionClass}>
              <SectionIntro eyebrow="Common challenges" title="Financial Challenges Expats Commonly Face">
                <p>Use these cards to identify where your situation may need specialist support — then ask advisors directly about relevant experience.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-4")}>
                {page.challengeCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <div className="mt-6"><BulletPanel title="Turn challenges into advisor questions" items={page.challengeUseTips} /></div>
              <div className="mt-8">
                <SectionIntro eyebrow="Avoidable mistakes" title="Common Mistakes When Choosing an Advisor" />
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.mistakeCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx + 3} />)}
                </div>
                <div className="mt-6"><BulletPanel title="Pre-engagement checklist" items={page.mistakeUseTips} /></div>
              </div>
              <div className="mt-8">
                <SectionIntro eyebrow="When to consider advice" title="When a Financial Advisor May Be Worth Considering" />
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <BulletPanel title="Advice triggers" items={page.adviceTriggers} />
                  <InfoTable
                    rows={page.advisorBriefExamples.map((row) => ({
                      situation: row.situation,
                      numbersToBring: row.numbersToBring,
                      documentsToBring: row.documentsToBring,
                    }))}
                    columns={[
                      { key: "situation", label: "Situation" },
                      { key: "numbersToBring", label: "Numbers to bring" },
                      { key: "documentsToBring", label: "Documents to bring" },
                    ]}
                  />
                </div>
              </div>
              <VisualFigure visual={page.visuals.challenges} className={sectionVisualMtClass} />
            </section>

            <section id="cities" className={sectionClass}>
              <SectionIntro eyebrow="City coverage" title="Financial Advisors Across the Netherlands">
                <p>Many advisors work online nationwide — compare both city experience and digital process quality.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {page.cityCards.map((city) => (
                  <Link
                    key={city.city}
                    href={city.href}
                    className="group rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card"
                  >
                    <span className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <MapPin className="h-4 w-4 text-brand-strong" aria-hidden />
                      {city.city}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{city.note}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6"><BulletPanel title="How city coverage affects shortlisting" items={page.cityUseTips} /></div>
              <VisualFigure visual={page.visuals.cityCoverage} className={sectionVisualMtClass} />
            </section>

            <section id="directory" className={sectionClass}>
              <SectionIntro eyebrow="Directory" title="Financial Advisors for Expats in the Netherlands">
                <p>This structured directory uses real companies and neutral descriptions. It does not rank providers or guarantee outcomes.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                {page.providers.map((provider) => <ProviderCard key={provider.slug} provider={provider} />)}
              </div>
              <div className="mt-6"><BulletPanel title="How to use the directory" items={page.directoryUseTips} /></div>
              <VisualFigure visual={page.visuals.directory} className={sectionVisualMtClass} />
            </section>

            <section id="comparison" className={sectionClass}>
              <SectionIntro eyebrow="Comparison table" title="Compare Financial Advisors">
                <p>Use this as a starting point for your shortlist — verify all details directly with each provider.</p>
              </SectionIntro>
              <div className={sectionStackClass}>
                <ComparisonTable />
              </div>
              <div className="mt-6"><BulletPanel title="Compare providers consistently" items={page.comparisonUseTips} /></div>
              <VisualFigure visual={page.visuals.comparisonMatrix} className={sectionVisualMtClass} />
            </section>

            {showAffiliateProviders && affiliateProviderData ? (
              <section id="affiliate-providers" className={sectionClass}>
                <SectionIntro eyebrow="Provider support" title="Affiliates and Providers That May Help">
                  <p>
                    Use these contact options after comparing the directory — financial planners and wealth managers first, then complementary banking and cross-border support where relevant. Verify scope, credentials and fees before sharing sensitive information.
                  </p>
                </SectionIntro>
                <div className="mt-6">
                  <AffiliateBlockView placement={affiliateProviderData.placement} items={affiliateProviderData.items} hidePlacementTitle />
                </div>
              </section>
            ) : null}

            <section id="questions" className={sectionClass}>
              <SectionIntro eyebrow="Advisor interview" title="Questions Expats Should Ask">
                <p>Strong answers reveal independence, fee structure, cross-border experience and regulatory credentials. Write responses down to compare providers side by side.</p>
              </SectionIntro>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {page.questionsToAsk.map((item) => (
                  <li key={item.q} className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-4 text-sm leading-relaxed text-foreground-muted">
                    <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
                    <span><strong className="text-foreground">{item.q}</strong> — {item.why}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <InfoTable
                  rows={page.documentChecklist.map((row) => ({ document: row.document, why: row.why }))}
                  columns={[
                    { key: "document", label: "Document" },
                    { key: "why", label: "Why it matters" },
                  ]}
                />
              </div>
              <div className="mt-6"><BulletPanel title="Turn questions into a shortlist" items={page.questionUseTips} /></div>
              <VisualFigure visual={page.visuals.questions} className={sectionVisualMtClass} />
            </section>

            <section id="related-financial" className={sectionClass}>
              <SectionIntro eyebrow="Financial guides" title="Related Financial Guides">
                <p>Financial planning connects to tax, pension, housing and cross-border income — read these guides to arrive at advisor calls with clearer questions.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.relatedFinancialGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <div className="mt-6"><BulletPanel title="Recommended reading order" items={page.relatedGuideUseTips} /></div>
              <VisualFigure visual={page.visuals.financialGuides} className={sectionVisualMtClass} />
            </section>

            <section id="lead-cta" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10")}>
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Provider discovery</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{page.leadCta.heading}</h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{page.leadCta.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={page.leadCta.primaryCta.href} className={primaryCtaClass}>{page.leadCta.primaryCta.label}</Link>
                  <Link
                    href={page.leadCta.secondaryCta.href}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {page.leadCta.secondaryCta.label}
                  </Link>
                </div>
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                <p className="text-sm font-bold text-white">Before you book</p>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-slate-300 sm:grid-cols-3">
                  <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Verify AFM credentials and advisory scope.</li>
                  <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Ask for fees, independence and conflicts in writing.</li>
                  <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Do not treat directory inclusion as a recommendation.</li>
                </ul>
              </div>
              <VisualFigure visual={page.visuals.leadCta} className={sectionVisualMtClass} />
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions">
                <p>Use these FAQ answers to identify what you still need to verify: advisor scope, fee structure, cross-border experience, regulation and whether your expat file needs specialist support.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "mt-6")}>
                <Accordion items={faqItems} />
              </div>
              <div className="mt-6"><BulletPanel title="How to use the FAQ safely" items={page.faqUseTips} /></div>
              <VisualFigure visual={page.visuals.faq} className={sectionVisualMtClass} />
            </section>

            <section id="sources" className={sectionClass}>
              <SectionIntro eyebrow="Trust" title="Regulation & Official Resources">
                <p>{page.sourcesDisclaimer}</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.officialSources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(cardClass, "group block")}
                  >
                    <span className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-brand-strong" aria-hidden />
                      <span className="font-bold text-foreground">{source.label}</span>
                      <ExternalLink className="h-4 w-4 text-foreground-muted transition group-hover:text-link" aria-hidden />
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
                  </a>
                ))}
              </div>
              <div className="mt-6"><BulletPanel title="Where to verify what" items={page.sourceVerificationTips} /></div>
              <VisualFigure visual={page.visuals.officialSources} className={sectionVisualMtClass} />
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Related guides" title="Continue Your Financial Research">
                <p>Use these guides to connect the provider decision to tax, pension, housing and city context.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.relatedGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <div className="mt-6"><BulletPanel title="Suggested research path" items={page.relatedGuidesUseTips} /></div>
              <VisualFigure visual={page.visuals.relatedGuides} className={sectionVisualMtClass} />
            </section>

            <section id="services-links" className={sectionClass}>
              <SectionIntro eyebrow="Services ecosystem" title="Related Services for Expats">
                <p>Financial advice is one part of a wider money and relocation ecosystem — choose the professional that matches your immediate question.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.servicesLinks.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <div className="mt-6"><BulletPanel title="Choose the right professional" items={page.serviceSelectionTips} /></div>
              <VisualFigure visual={page.visuals.servicesEcosystem} className={sectionVisualMtClass} />
            </section>

            <section id="explore-next" className={sectionClass}>
              <SectionIntro eyebrow="Explore next" title="Plan the Next Step">
                <p>Move from provider discovery into mortgage, pension, tax and property guides that shape long-term financial decisions.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <div className="mt-6"><BulletPanel title="Choose your next guide" items={page.exploreNextUseTips} /></div>
              <VisualFigure visual={page.visuals.exploreNext} className={sectionVisualMtClass} />
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
