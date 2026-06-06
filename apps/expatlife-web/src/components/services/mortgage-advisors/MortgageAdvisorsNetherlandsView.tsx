import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
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
  mortgageAdvisorsNetherlandsPage as page,
  type MortgageAdvisorLink,
  type MortgageAdvisorProvider,
} from "./mortgageAdvisorsNetherlandsPageModel";

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
  "nl-services-mortgage-advisors-support-providers",
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
  const icons = [Calculator, Landmark, ClipboardList, FileText, ShieldCheck, Home, WalletCards, Globe2] as const;
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

function LinkCard({ item, iconIndex = 0 }: { item: MortgageAdvisorLink; iconIndex?: number }) {
  const icons = [Home, Landmark, WalletCards, FileText, Building2, Globe2] as const;
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

function ProviderCard({ provider }: { provider: MortgageAdvisorProvider }) {
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
          <p className="mt-1 text-foreground-muted">{provider.expatSpecialization}</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Availability</p>
          <p className="mt-1 text-foreground-muted">{provider.onlineConsultations ? "Online consultations available. " : ""}{provider.inPersonAvailability}</p>
        </div>
      </div>
      <dl className="mt-4 grid gap-2 text-sm text-foreground-muted sm:grid-cols-2">
        <div><dt className="font-semibold text-foreground">Languages</dt><dd>{provider.languages.join(", ")}</dd></div>
        <div><dt className="font-semibold text-foreground">Cities served</dt><dd>{provider.citiesServed.join(", ")}</dd></div>
        <div><dt className="font-semibold text-foreground">Consultation type</dt><dd>{provider.consultationType}</dd></div>
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
              {["Advisor", "Cities Served", "Expat Focus", "Languages", "Online", "Independent / Broker Type"].map((heading) => (
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

export function MortgageAdvisorsNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Mortgage Advisors", item: new URL(page.path, baseUrl).toString() },
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
              <li className="font-medium text-copilot-text-primary" aria-current="page">Mortgage Advisors</li>
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
                  Provider inclusion is informational, not a recommendation. Always verify AFM/Wft status, fees, lender scope and advisory agreements directly with the provider.
                </p>
              </div>
              <HeroImage />
            </div>
          </section>

          <nav
            className="sticky top-3 z-20 mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl"
            aria-label="Mortgage advisors guide sections"
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
                <VisualFigure visual={page.visuals.role} className={sectionVisualMtClass} />
              </section>

              <section id="snapshot" className={sectionClass}>
                <SectionIntro eyebrow="Snapshot" title="Mortgage Advisors at a Glance">
                  <p>These are practical orientation points to understand before comparing providers or booking consultation calls.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
                </div>
                <VisualFigure visual={page.visuals.snapshot} className={sectionVisualMtClass} />
              </section>

              <section id="advisor-role" className={sectionClass}>
                <SectionIntro eyebrow="Advisor role" title="What Mortgage Advisors Actually Help With">
                  <p>The exact scope varies by provider, so confirm what is included before you sign. The common pattern is budget clarity, lender comparison, document preparation and application coordination.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.advisorServices.map((item, idx) => <FeatureCard key={item.title} {...item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.advisorServices} className={sectionVisualMtClass} />
              </section>

              <section id="independent-vs-bank" className={sectionClass}>
                <SectionIntro eyebrow="Advisor models" title="Independent vs Bank-Linked Advisors">
                  <p>Independent and bank-linked advisors can both be useful, but they do not compare the same set of options. Ask explicitly how many lenders are compared and how conflicts are disclosed.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-4">
                  {page.advisorTypeComparison.map((item) => (
                    <article key={item.type} className={cardClass}>
                      <h3 className="text-lg font-bold text-foreground">{item.type}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.scope}</p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground-muted"><strong className="text-foreground">Useful when:</strong> {item.usefulWhen}</p>
                      <ul className="mt-4 grid gap-2 text-sm text-foreground-muted">
                        {item.questions.map((question) => <li key={question} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />{question}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
                <VisualFigure visual={page.visuals.independentVsBank} className={sectionVisualMtClass} />
              </section>

              <section id="expat-mortgages" className={sectionClass}>
                <SectionIntro eyebrow="Expat mortgage files" title="Mortgages for Expats and Highly Skilled Migrants">
                  <p>Many expats successfully obtain Dutch mortgages. Approval depends on income, contract, residence, debts, property value and lender policy. The advisor&apos;s value is often in matching the file to lenders that can assess it properly.</p>
                </SectionIntro>
                <div className="mt-6">
                  <InfoTable
                    rows={page.expatMortgageProfiles}
                    columns={[
                      { key: "profile", label: "Profile" },
                      { key: "whatCanMatter", label: "What can matter" },
                      { key: "exampleQuestion", label: "Example question" },
                    ]}
                  />
                </div>
                <VisualFigure visual={page.visuals.expatEligibility} className={sectionVisualMtClass} />
              </section>

              <section id="fees" className={sectionClass}>
                <SectionIntro eyebrow="Costs" title="Mortgage Advisor Costs">
                  <p>Mortgage advisors may charge fixed fees, paid consultations or package-based advice and mediation. Avoid relying on old price snippets: confirm current pricing, what is included and when payment is due.</p>
                </SectionIntro>
                <div className="mt-6">
                  <InfoTable
                    rows={page.feeExamples}
                    columns={[
                      { key: "item", label: "Cost item" },
                      { key: "typicalRange", label: "Typical range" },
                      { key: "whatToConfirm", label: "What to confirm" },
                    ]}
                  />
                </div>
                <VisualFigure visual={page.visuals.fees} className={sectionVisualMtClass} />
              </section>

              <section id="documents" className={sectionClass}>
                <SectionIntro eyebrow="Documents" title="Documents Mortgage Advisors Commonly Request">
                  <p>Requirements vary by lender and personal situation. Preparing a clean file early can reduce avoidable delays once you start bidding.</p>
                </SectionIntro>
                <div className="mt-6">
                  <InfoTable
                    rows={page.documentChecklist}
                    columns={[
                      { key: "document", label: "Document" },
                      { key: "why", label: "Why it matters" },
                    ]}
                  />
                </div>
                <VisualFigure visual={page.visuals.documents} className={sectionVisualMtClass} />
              </section>

              <section id="challenges" className={sectionClass}>
                <SectionIntro eyebrow="Common challenges" title="Challenges Expats Often Face">
                  <p>These are common reasons expats ask for professional support. They do not automatically mean a mortgage is impossible, but they can affect the lender path and documentation strategy.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-4")}>
                  {page.challengeCards.map((item, idx) => <FeatureCard key={item.title} {...item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.challenges} className={sectionVisualMtClass} />
              </section>

              <section id="cities" className={sectionClass}>
                <SectionIntro eyebrow="City coverage" title="Mortgage Advisors Across the Netherlands">
                  <p>Local advisors may understand regional housing markets, expat communities and price pressure. At the same time, many mortgage advisors work online nationwide, so compare both city experience and digital process quality.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {page.cityCards.map((city) => (
                    <Link key={city.city} href={city.href} className="group rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card">
                      <span className="flex items-center gap-2 text-sm font-bold text-foreground"><MapPin className="h-4 w-4 text-brand-strong" aria-hidden />{city.city}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{city.note}</span>
                    </Link>
                  ))}
                </div>
                <VisualFigure visual={page.visuals.cityCoverage} className={sectionVisualMtClass} />
              </section>

              <section id="directory" className={sectionClass}>
                <SectionIntro eyebrow="Directory" title="Mortgage Advisors for Expats in the Netherlands">
                  <p>This structured directory uses real companies and neutral descriptions. It does not rank providers, invent reviews or guarantee mortgage outcomes.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-5 xl:grid-cols-2">
                  {page.providers.map((provider) => <ProviderCard key={provider.slug} provider={provider} />)}
                </div>
                <VisualFigure visual={page.visuals.directory} className={sectionVisualMtClass} />
              </section>

              <section id="comparison" className={sectionClass}>
                <SectionIntro eyebrow="Comparison table" title="Compare Mortgage Advisors">
                  <p>Use this as a starting point for your shortlist. Provider coverage, language support, fees and lender panels can change, so verify all details directly.</p>
                </SectionIntro>
                <div className={sectionStackClass}>
                  <ComparisonTable />
                </div>
                <VisualFigure visual={page.visuals.comparisonMatrix} className={sectionVisualMtClass} />
              </section>

              {showAffiliateProviders ? (
                <section id="affiliate-providers" className={sectionClass}>
                  <SectionIntro eyebrow="Provider support" title="Affiliates and Providers That May Help">
                    <p>
                      Use these contact options after comparing the directory. Some are advisor-led services and some are bank-side checks, so compare scope, credentials, fees and lender access before sharing documents.
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
                <SectionIntro eyebrow="Advisor interview" title="Questions Expats Should Ask">
                  <p>Use these questions before choosing a provider. The answers should help you understand whether the advisor can handle your specific file.</p>
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

              <section id="related-housing" className={sectionClass}>
                <SectionIntro eyebrow="Housing guides" title="Related Housing Guides">
                  <p>Mortgage-advisor research should sit inside the broader buying decision: budget, bidding, taxes, city choice and whether buying is right for your relocation horizon.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.relatedHousingGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.housingGuides} className={sectionVisualMtClass} />
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
                  <p className="text-sm font-bold text-white">Before you book</p>
                  <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-slate-300 sm:grid-cols-3">
                    <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Verify AFM/Wft status and advisor credentials.</li>
                    <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Ask for fees, scope and lender panel in writing.</li>
                    <li className="flex gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden />Do not treat directory inclusion as a recommendation.</li>
                  </ul>
                </div>
                <VisualFigure visual={page.visuals.leadCta} className={sectionVisualMtClass} />
              </section>

              <section id="faq" className={sectionClass}>
                <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions">
                  <p>Use these FAQ answers to identify what you still need to verify: advisor scope, lender panel, fee timing, document requirements, regulation and whether your expat file needs specialist support.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "mt-6")}>
                  <Accordion items={faqItems} />
                </div>
                <VisualFigure visual={page.visuals.faq} className={sectionVisualMtClass} />
              </section>

              <section id="sources" className={sectionClass}>
                <SectionIntro eyebrow="Trust" title="Regulation & Official Resources">
                  <p>Consumers should verify advisor credentials and understand advisory agreements before proceeding. Official sources help you check the regulatory context rather than relying on marketing claims.</p>
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
                <SectionIntro eyebrow="Related guides" title="Continue Your Housing Research">
                  <p>Use these guides to connect the provider decision to affordability, buying strategy, tax context and city choice.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.relatedGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.relatedGuides} className={sectionVisualMtClass} />
              </section>

              <section id="services-links" className={sectionClass}>
                <SectionIntro eyebrow="Services ecosystem" title="Related Services for Home Buyers">
                  <p>Mortgage advice often overlaps with banking, tax questions, real estate agents and broader financial planning.</p>
                </SectionIntro>
                <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.servicesLinks.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.servicesEcosystem} className={sectionVisualMtClass} />
              </section>

              <section id="explore-next" className={sectionClass}>
                <SectionIntro eyebrow="Explore next" title="Plan the Next Step">
                  <p>Move from provider discovery into the decision guides that shape your budget, city choice and buying timeline.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.exploreNextCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <VisualFigure visual={page.visuals.exploreNext} className={sectionVisualMtClass} />
              </section>
          </div>
        </Container>
      </main>
    </>
  );
}
