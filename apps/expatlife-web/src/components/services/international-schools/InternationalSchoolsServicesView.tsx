import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileText,
  Globe2,
  GraduationCap,
  Home,
  Landmark,
  MessageSquareText,
  School,
  ShieldCheck,
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
  internationalSchoolsServicesPage as page,
  type InternationalSchoolsLink,
  type InternationalSchoolProvider,
} from "./internationalSchoolsServicesPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const cardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass);
const providerTypeClass = "rounded-full bg-copilot-bg-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong ring-1 ring-copilot-primary/10";
const affiliateProviderData = loadPlacementWithProviders(
  page.affiliatePlacementId,
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
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p> : null}
      <h2 className={cn(movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? <div className="mt-3 space-y-3 text-base leading-relaxed text-foreground-muted">{children}</div> : null}
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

const sectionVisualMtClass = "mt-8 w-full sm:mt-10";

function VisualFigure({ visual, className }: { visual: (typeof page.visuals)[keyof typeof page.visuals]; className?: string }) {
  return (
    <figure className={cn("relative isolate w-full overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass, className)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-200/25 blur-3xl" aria-hidden />
      <div className="relative aspect-[4/3] w-full min-h-[280px] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft sm:min-h-[360px] lg:min-h-[480px] xl:min-h-[560px]">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1280px) 1400px, 100vw" className="object-contain p-1 drop-shadow-sm sm:p-2" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">{visual.caption}</figcaption>
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
  const icons = [GraduationCap, School, ClipboardList, FileText, Globe2, Home, Landmark, ShieldCheck] as const;
  const Icon = icons[iconIndex % icons.length];
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

function LinkCard({ item, iconIndex = 0 }: { item: InternationalSchoolsLink; iconIndex?: number }) {
  const icons = [GraduationCap, School, Home, FileText, Building2, Globe2] as const;
  const Icon = icons[iconIndex % icons.length];
  const isLive = item.status !== "comingSoon";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : "bg-slate-200")} aria-hidden />
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="mt-4 block text-sm font-bold text-foreground">
        {item.label}
        {!isLive ? <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Coming soon</span> : null}
      </span>
      {item.description ? <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{item.description}</span> : null}
      {isLive ? <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">Open <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span> : null}
    </>
  );
  if (!isLive) return <article className={cn(cardClass, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(cardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function ProviderCard({ provider }: { provider: InternationalSchoolProvider }) {
  return (
    <article className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-expatos-xl ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{provider.city}</p>
          <h3 className="mt-2 text-xl font-black tracking-tight text-foreground">{provider.name}</h3>
        </div>
        <span className={providerTypeClass}>{provider.providerType}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{provider.summary}</p>
      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Expat focus</p>
          <p className="mt-1 text-foreground-muted">{provider.expatFocus}</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Availability</p>
          <p className="mt-1 text-foreground-muted">{provider.remoteSupport ? "Online inquiry available. " : ""}{provider.inPersonAvailability}</p>
        </div>
      </div>
      <dl className="mt-4 grid gap-2 text-sm text-foreground-muted sm:grid-cols-2">
        <div><dt className="font-semibold text-foreground">Languages</dt><dd>{provider.languages.join(", ")}</dd></div>
        <div><dt className="font-semibold text-foreground">Cities served</dt><dd>{provider.citiesServed.join(", ")}</dd></div>
        <div><dt className="font-semibold text-foreground">Engagement type</dt><dd>{provider.engagementType}</dd></div>
        <div><dt className="font-semibold text-foreground">Verification note</dt><dd>{provider.verificationNote}</dd></div>
      </dl>
      <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-200/80 pt-4">
        <a href={provider.website} target="_blank" rel="noopener noreferrer" className={secondaryCtaClass}>
          Visit website <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
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
              {["Discovery path", "Cities Served", "Expat Focus", "Languages", "Access", "Provider Type"].map((heading) => (
                <th key={heading} scope="col" className="px-4 py-3 font-bold">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {page.comparisonTable.map((row) => (
              <tr key={row.advisor} className="align-top">
                <th scope="row" className="px-4 py-4 font-bold text-foreground">{row.advisor}</th>
                <td className="px-4 py-4 text-foreground-muted">{row.citiesServed}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.expatFocus}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.languages}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.onlineConsultations}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.advisorType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
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
            <tr>{columns.map((column) => <th key={column.key} scope="col" className="px-4 py-3 font-bold">{column.label}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx}>
                {columns.map((column, cellIdx) => (
                  <td key={column.key} className={cn("px-4 py-4 text-foreground-muted", cellIdx === 0 && "font-semibold text-foreground")}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function InternationalSchoolsServicesView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "International schools", item: new URL(page.path, baseUrl).toString() },
  ];
  const faqItems = page.faqs.map((item, idx) => ({ id: `faq-${idx}`, title: item.q, content: item.a }));
  const showAffiliateProviders = Boolean(affiliateProviderData && affiliateProviderData.items.length > 0);
  const sectionNavItems = page.sectionNav.filter(
    (item) => item.href !== "#affiliate-providers" || showAffiliateProviders
  );

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
              <li className="font-medium text-copilot-text-primary" aria-current="page">International schools</li>
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
                  <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>{page.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                  <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                </div>
                <p className="mt-5 max-w-3xl rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950 shadow-sm ring-1 ring-amber-200/40">
                  Provider inclusion is informational soft discovery — not a ranking. Always verify fees, waitlists, curriculum authorisation and admission rules directly with each school. This is not admissions or education advice.
                </p>
              </div>
              <HeroImage />
            </div>
          </section>

          <nav
            className="sticky top-3 z-20 mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl"
            aria-label="International schools directory sections"
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
                <SectionIntro eyebrow="Overview" title={page.intro.heading}>
                  {page.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <div className="mt-6 flex flex-wrap gap-3">
                  {page.intro.links.map((link) => <Link key={link.href} href={link.href} className={secondaryCtaClass}>{link.label}</Link>)}
                </div>
                <VisualFigure visual={page.visuals.intro} className={sectionVisualMtClass} />
              </section>

              <section id="differentiate" className={sectionClass}>
                <SectionIntro eyebrow="Provider types" title="International Schools Directory Is Not the Same As…">
                  <p>Start here so you do not use the wrong page. This directory compares schools as providers; the education guide explains how international schooling works; Dutch schools and daycare own their own paths.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {page.differentiateCards.map((card) => (
                    <Link key={card.title} href={card.href} className={cn(cardClass, "group block", transitionInteractive, activeBrightnessPress)}>
                      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
                        Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </span>
                    </Link>
                  ))}
                </div>
                <VisualFigure visual={page.visuals.differentiate} className={sectionVisualMtClass} />
              </section>

              <section id="snapshot" className={sectionClass}>
                <SectionIntro eyebrow="Snapshot" title="International School Providers at a Glance">
                  <p>These orientation points help you compare campuses before you request open days or pay deposits.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
                </div>
                <VisualFigure visual={page.visuals.snapshot} className={sectionVisualMtClass} />
              </section>

              <section id="curricula" className={sectionClass}>
                <SectionIntro eyebrow="Curricula" title="Curriculum Types Expats Compare">
                  <p>IB, British, American, European Schools and bilingual tracks solve different continuity problems. Match the track to your next move — not to a generic “best school” claim.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.curriculumCards.map((item, idx) => <FeatureCard key={item.title} {...item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.curricula} className={sectionVisualMtClass} />
              </section>

              <section id="fees" className={sectionClass}>
                <SectionIntro eyebrow="Fees" title="Fee Bands as Planning Orientation">
                  <p>Published fee figures change yearly. Use bands only to plan questions — then request a written first-year total from each school, including extras and employer package limits.</p>
                </SectionIntro>
                <div className="mt-6">
                  <InfoTable
                    rows={page.feeOrientation}
                    columns={[
                      { key: "band", label: "Band" },
                      { key: "whatItUsuallyCovers", label: "What it usually covers" },
                      { key: "planningNote", label: "Planning note" },
                    ]}
                  />
                </div>
                <VisualFigure visual={page.visuals.fees} className={sectionVisualMtClass} />
              </section>

              <section id="admission" className={sectionClass}>
                <SectionIntro eyebrow="Admission" title="Admission Timeline Orientation">
                  <p>Popular campuses fill by age group. Start inquiries early, prepare documents, and align housing with offer timing — especially for mid-year arrivals.</p>
                </SectionIntro>
                <div className="mt-6">
                  <InfoTable
                    rows={page.admissionTimeline}
                    columns={[
                      { key: "step", label: "Step" },
                      { key: "timing", label: "Timing" },
                      { key: "detail", label: "Detail" },
                    ]}
                  />
                </div>
                <VisualFigure visual={page.visuals.admission} className={sectionVisualMtClass} />
              </section>

              <section id="locations" className={sectionClass}>
                <SectionIntro eyebrow="Locations" title="City Clusters & Commute Reality">
                  <p>School choice and housing choice are linked. The Hague and Amsterdam have denser clusters; regional cities may have fewer campuses — verify before you accept a role outside major hubs.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.locationClusters.map((item, idx) => (
                    <FeatureCard key={item.city} title={item.city} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <VisualFigure visual={page.visuals.locations} className={sectionVisualMtClass} />
              </section>

              <section id="visit-checklist" className={sectionClass}>
                <SectionIntro eyebrow="Visit checklist" title="What to Check on School Visits">
                  <p>Bring the same questions to every open day. Marketing tours are useful — structured checklists are better for comparing providers fairly.</p>
                </SectionIntro>
                <div className="mt-6">
                  <InfoTable
                    rows={page.visitChecklist}
                    columns={[
                      { key: "item", label: "Check" },
                      { key: "why", label: "Why it matters" },
                    ]}
                  />
                </div>
                <VisualFigure visual={page.visuals.visitChecklist} className={sectionVisualMtClass} />
              </section>

              <section id="challenges" className={sectionClass}>
                <SectionIntro eyebrow="Common challenges" title="Challenges Expats Often Face">
                  <p>These friction points are common when shortlisting international schools — they are reasons to verify waitlists, fee extras and housing timing early.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-4")}>
                  {page.challengeCards.map((item, idx) => <FeatureCard key={item.title} {...item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.challenges} className={sectionVisualMtClass} />
              </section>

              <section id="directory" className={sectionClass}>
                <SectionIntro eyebrow="Directory" title="International School Discovery for Expats">
                  <p>This structured directory uses curriculum orientations, city clusters and public association sources. It does not rank schools, invent reviews or guarantee places or fees.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-5 xl:grid-cols-2">
                  {page.providers.map((provider) => <ProviderCard key={provider.slug} provider={provider} />)}
                </div>
                <VisualFigure visual={page.visuals.directory} className={sectionVisualMtClass} />
              </section>

              <section id="comparison" className={sectionClass}>
                <SectionIntro eyebrow="Comparison table" title="Compare Discovery Paths">
                  <p>Use this as a starting point for your shortlist. Curriculum focus, city coverage and verification sources can change, so confirm all details directly.</p>
                </SectionIntro>
                <div className={sectionStackClass}>
                  <ComparisonTable />
                </div>
                <VisualFigure visual={page.visuals.comparison} className={sectionVisualMtClass} />
              </section>

              {showAffiliateProviders && affiliateProviderData ? (
                <section id="affiliate-providers" className={sectionClass}>
                  <SectionIntro eyebrow="Related support" title="Housing and Relocation Support Near School Shortlists">
                    <p>
                      Soft discovery for housing and related support while you compare campuses — not a ranking of schools. Align commute and start dates before you sign a lease or pay a deposit.
                    </p>
                  </SectionIntro>
                  <div className="mt-6">
                    <AffiliateBlockView
                      placement={affiliateProviderData.placement}
                      items={affiliateProviderData.items}
                      hidePlacementTitle
                    />
                  </div>
                </section>
              ) : null}

              <section id="questions" className={sectionClass}>
                <SectionIntro eyebrow="School interview" title="Questions Expats Should Ask">
                  <p>Use these questions before applying or paying a deposit. The answers should help you understand waitlists, fee extras, language support and mid-year entry reality.</p>
                </SectionIntro>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {page.questionsToAsk.map((question) => (
                    <li key={question} className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-4 text-sm leading-relaxed text-foreground-muted">
                      <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
                <VisualFigure visual={page.visuals.questions} className={sectionVisualMtClass} />
              </section>

              <section id="related-education" className={sectionClass}>
                <SectionIntro eyebrow="Education guides" title="Related Education & Family Guides">
                  <p>Provider research should sit beside the system guide, Dutch schools, daycare and childcare allowance orientation.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.relatedEducationGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.relatedGuides} className={sectionVisualMtClass} />
              </section>

              <section id="lead-cta" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10")}>
                <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Provider discovery</p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{page.leadCta.heading}</h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{page.leadCta.body}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={page.leadCta.primaryCta.href} className={primaryCtaClass}>{page.leadCta.primaryCta.label}</Link>
                    <Link href={page.leadCta.secondaryCta.href} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">{page.leadCta.secondaryCta.label}</Link>
                  </div>
                </div>
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                  <p className="text-sm font-bold text-white">Before you apply</p>
                  <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-slate-300 sm:grid-cols-3">
                    <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Match curriculum to your next move.</li>
                    <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Ask for a written first-year cost total.</li>
                    <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Check waitlists by year group.</li>
                    <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Align housing with commute and start date.</li>
                    <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Do not treat directory inclusion as a recommendation.</li>
                  </ul>
                </div>
                <VisualFigure visual={page.visuals.leadCta} className={sectionVisualMtClass} />
              </section>

              <section id="faq" className={sectionClass}>
                <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions">
                  <p>Use these FAQ answers to identify what you still need to verify: curriculum fit, fees, waitlists, Dutch vs international paths and official sources.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "mt-6")}>
                  <Accordion items={faqItems} />
                </div>
                <VisualFigure visual={page.visuals.faq} className={sectionVisualMtClass} />
              </section>

              <section id="sources" className={sectionClass}>
                <SectionIntro eyebrow="Trust" title="Official Resources">
                  <p>Families should verify programme authorisation and public information before relying on marketing claims. Official sources help with system context — schools handle admissions.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {page.officialSources.map((source) => (
                    <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className={cn(cardClass, "group block")}>
                      <span className="flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 text-brand-strong" aria-hidden />
                        <span className="font-bold text-foreground">{source.label}</span>
                        <ExternalLink className="h-4 w-4 text-foreground-muted transition group-hover:text-link" aria-hidden />
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
                    </a>
                  ))}
                </div>
                <VisualFigure visual={page.visuals.officialSources} className={sectionVisualMtClass} />
              </section>

              <section id="related-guides" className={sectionClass}>
                <SectionIntro eyebrow="Related guides" title="Continue Your Family Education Research">
                  <p>Use these guides to connect school-provider discovery to system context, Dutch tracks, daycare and housing.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.relatedGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.relatedGuides} className={sectionVisualMtClass} />
              </section>

              <section id="services-links" className={sectionClass}>
                <SectionIntro eyebrow="Services ecosystem" title="Related Services for Family Setup">
                  <p>School shortlists often overlap with daycare providers, health insurance, rental agencies, estate agents and relocation support.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.servicesLinks.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.servicesEcosystem} className={sectionVisualMtClass} />
              </section>

              <section id="explore-next" className={sectionClass}>
                <SectionIntro eyebrow="Explore next" title="Plan the Next Step">
                  <p>Move from school-provider discovery into the guides and directories that shape housing, daycare and city choice.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.exploreNextCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.exploreNext} className={sectionVisualMtClass} />
              </section>

              <footer className="rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-4 text-sm leading-relaxed text-foreground-muted shadow-sm">
                Some links on this page may be affiliate or referral links. If you use them, we may earn a commission at no extra cost to you. Ordering reflects relevance to expat school-related housing and relocation timing — not pay-to-rank placement of schools. This is not a ranking of international schools, and not admissions, education or financial advice.
              </footer>
          </div>
        </Container>
      </main>
    </>
  );
}
