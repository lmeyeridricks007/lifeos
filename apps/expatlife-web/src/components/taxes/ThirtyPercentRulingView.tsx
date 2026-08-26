import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Globe2,
  Landmark,
  MapPin,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { THIRTY_PCT_RULES_2026 } from "@/src/lib/tools/thirty-percent-ruling/assumptions";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
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
import { thirtyPercentRulingPage as meta, type ThirtyPercentRulingLink } from "./thirtyPercentRulingPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8";
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
const mutedCardClass = cn(
  "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);

const linkIcons = [BadgePercent, ReceiptText, Globe2, PiggyBank, Calculator, FileText, BriefcaseBusiness, ShieldCheck] as const;
const scenarioIcons = [BriefcaseBusiness, Users, Landmark, FileCheck2, Calculator, Clock3, PiggyBank] as const;

function SectionIntro({ eyebrow, title, children, tone = "default" }: { eyebrow?: string; title: string; children?: React.ReactNode; tone?: "default" | "onDark" }) {
  const onDark = tone === "onDark";
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? <div className={cn("mt-3 space-y-3 text-base leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{children}</div> : null}
    </div>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image src={meta.hero.image.src} alt={meta.hero.image.alt} width={1600} height={900} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function InfographicFigure({ graphic }: { graphic: (typeof meta.infographics)[keyof typeof meta.infographics] }) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <Image src={graphic.src} alt={graphic.alt} width={1600} height={1000} sizes="(min-width: 1024px) 980px, 100vw" className="h-auto w-full object-cover" />
      <figcaption className="border-t border-slate-100 bg-slate-50/80 px-5 py-4 text-sm leading-relaxed text-foreground-muted">{graphic.caption}</figcaption>
    </figure>
  );
}

function ProcessPanel({ eyebrow, title, rows, note }: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string }) {
  return (
    <aside className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <div className="mt-5 grid gap-3">
        {rows.map(({ label, body, Icon }) => (
          <div key={label} className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{label}</span>
              <span className="mt-1 block text-sm leading-relaxed text-foreground-muted">{body}</span>
            </span>
          </div>
        ))}
      </div>
      {note ? <p className="mt-4 rounded-2xl bg-amber-50/80 p-4 text-sm leading-relaxed text-amber-950 ring-1 ring-amber-100">{note}</p> : null}
    </aside>
  );
}

function GuideLinkCard({ item, iconIndex = 0, tone = "default" }: { item: ThirtyPercentRulingLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = linkIcons[iconIndex % linkIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5");
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : isLive ? "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10" : "bg-slate-100 text-slate-500 ring-slate-200")}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span>
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {item.status === "comingSoon" ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-100" : isLive ? "text-link group-hover:text-link-hover" : "text-slate-500")}>
        {isLive ? "Open guide" : "Planned guide"} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </>
  );
  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function EligibilityVisual() {
  return (
    <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Eligibility lens</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Think in official conditions, not assumptions</h3>
        <div className="mt-5 grid gap-3">
          {meta.eligibilityChecks.map((check, index) => (
            <div key={check} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">{index + 1}</span>
              <span className="text-sm leading-relaxed text-slate-200">{check}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function ApplicationFlow() {
  const steps = [
    { label: "Agree", body: "Employer and employee agree the facility is relevant.", Icon: Users },
    { label: "Apply jointly", body: "The application is submitted to the tax authority.", Icon: FileText },
    { label: "Review", body: "Belastingdienst assesses the conditions.", Icon: ShieldCheck },
    { label: "Payroll", body: "If approved, payroll can be adjusted.", Icon: ReceiptText },
  ];
  return <ProcessPanel eyebrow="Application flow" title="From offer to payroll setup" rows={steps} note="Timing matters. Applications should be handled promptly after employment begins." />;
}

function BenefitLimitGrid() {
  const benefits = ["Potentially higher net income", "Relocation support", "Structured payroll treatment"];
  const limits = ["Eligibility requirements", "Employer involvement", "Duration limits", "Changing legislation", "Foreign asset considerations"];
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <article className={mutedCardClass}>
        <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
        <h3 className="text-lg font-bold text-foreground">Benefits</h3>
        <ul className="mt-4 space-y-3">
          {benefits.map((item) => <li key={item} className="flex gap-3 text-sm text-foreground-muted"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />{item}</li>)}
        </ul>
      </article>
      <article className={mutedCardClass}>
        <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-slate-200" aria-hidden />
        <h3 className="text-lg font-bold text-foreground">Limitations</h3>
        <ul className="mt-4 space-y-3">
          {limits.map((item) => <li key={item} className="flex gap-3 text-sm text-foreground-muted"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />{item}</li>)}
        </ul>
      </article>
    </div>
  );
}

function FaqUsePanel() {
  return (
    <ProcessPanel
      eyebrow="FAQ lens"
      title="Use answers as checkpoints"
      rows={[
        { label: "Eligibility is conditional", body: "The facility depends on official requirements, not expat status alone.", Icon: ShieldCheck },
        { label: "Employer role matters", body: "The employer must participate in application and payroll handling.", Icon: BriefcaseBusiness },
        { label: "Changes can affect planning", body: "Duration, foreign assets and employer changes deserve current-rule checks.", Icon: AlertTriangle },
      ]}
    />
  );
}

function SourceUsePanel() {
  return (
    <ProcessPanel
      eyebrow="Source habit"
      title="Verify before you rely on it"
      rows={[
        { label: "Current requirements", body: "Use official pages for thresholds, terminology and application details.", Icon: ShieldCheck },
        { label: "Timing context", body: "Entry date and transitional arrangements can change which rules matter.", Icon: Clock3 },
        { label: "No personal conclusion", body: "Official pages confirm rules; advisers can apply them to complex facts.", Icon: FileCheck2 },
      ]}
    />
  );
}

function RelatedGuidesPanel() {
  return (
    <ProcessPanel
      eyebrow="Next route"
      title="Connect the ruling to the move"
      rows={[
        { label: "Tax cluster", body: "Use the taxes hub and expat taxes guide for wider residency, return and asset context.", Icon: Globe2 },
        { label: "Relocation setup", body: "Moving, banking and services pages help with the practical side of arrival.", Icon: Users },
        { label: "Provider support", body: "Use services only when your facts need tax, payroll or immigration review.", Icon: CheckCircle2 },
      ]}
    />
  );
}

export function ThirtyPercentRulingView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL("/netherlands/taxes/", baseUrl).toString() },
    { name: "30% Ruling", item: new URL(meta.path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <Link href="/" className="hover:text-foreground">Home</Link><span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link><span aria-hidden>/</span>
                    <Link href="/netherlands/taxes/" className="hover:text-foreground">Taxes</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">30% ruling</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{meta.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{meta.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{meta.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{meta.hero.chips.map((chip) => <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>)}</div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={meta.hero.primaryCta.href} className={primaryCtaClass}>{meta.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                    <Link href={meta.hero.secondaryCta.href} className={secondaryCtaClass}>{meta.hero.secondaryCta.label}</Link>
                  </div>
                </div>
                <HeroImage />
              </div>
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="30 percent ruling guide sections" className="flex min-w-max gap-2">
              {meta.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="What Is the 30% Ruling?">
                  <p>The 30% ruling, also called the expat scheme, expatregeling or 30% facility, is a Dutch tax benefit available to some employees recruited from abroad.</p>
                  <p>Under official conditions, employers may provide part of compensation tax-free as reimbursement for extraterritorial costs associated with moving and working in the Netherlands.</p>
                  <p>Many expats still call it the 30% ruling, but official terminology has evolved. Employer involvement is required, and not everyone qualifies.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Naming"
                  title="Same topic, newer wording"
                  rows={[
                    { label: "Common name", body: "Many people still search for and say 30% ruling.", Icon: BadgePercent },
                    { label: "Official wording", body: "Government sources increasingly use expat scheme or 30% facility.", Icon: Landmark },
                    { label: "Practical meaning", body: "The core user question is still eligibility and payroll treatment.", Icon: ReceiptText },
                  ]}
                />
              </div>
            </section>

            <section id="at-a-glance" className={sectionClass}>
              <SectionIntro title="30% Ruling at a Glance" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.snapshotCards.map((card, index) => {
                  const Icon = linkIcons[index % linkIcons.length];
                  return (
                    <article key={card.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <div className="flex gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10"><Icon className="h-5 w-5" aria-hidden /></span>
                        <span><h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-strong">{card.title}</h3><p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p></span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section id="how-it-works" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="How the 30% Ruling Works">
                  <p>Under certain conditions, employers may provide a tax-free allowance to compensate for extraterritorial costs associated with relocating and working in the Netherlands.</p>
                  <p>Examples often connected with relocation include moving countries, travel costs, temporary housing complexity, maintaining ties abroad and higher living costs.</p>
                  <p>The facility is usually handled through payroll, employer participation is required, and approval is needed.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Payroll view"
                  title="What changes in practice"
                  rows={[
                    { label: "Employment setup", body: "The facility is tied to employee and employer participation.", Icon: BriefcaseBusiness },
                    { label: "Allowance treatment", body: "Part of compensation may be treated as tax-free reimbursement if approved.", Icon: BadgePercent },
                    { label: "Payroll handling", body: "The employer typically reflects the approved treatment through payroll.", Icon: ReceiptText },
                  ]}
                />
              </div>
              <div className="mt-7">
                <InfographicFigure graphic={meta.infographics.howItWorks} />
              </div>
            </section>

            <section id="eligibility" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Who May Be Eligible?">
                  <p>Common high-level conditions include being recruited from abroad, having specific expertise that is scarce in the Dutch labour market, meeting salary thresholds, employer application, and complying with distance requirements.</p>
                  <p>Exact requirements can change, salary thresholds are indexed, and some exceptions exist. Use official sources rather than relying on copied threshold numbers.</p>
                </SectionIntro>
                <EligibilityVisual />
              </div>
              <div className="mt-7">
                <InfographicFigure graphic={meta.infographics.eligibilityChecks} />
              </div>
            </section>

            <section id="150km-rule" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="The 150 Kilometre Requirement">
                  <p>One important eligibility condition involves where the employee lived before moving to the Netherlands. Residence history matters, and Dutch tax authorities assess this as part of eligibility.</p>
                  <p>Do not oversimplify edge cases. If your residence history is close to a boundary or non-standard, check official guidance and consider qualified advice.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Distance rule"
                  title="What to prepare"
                  rows={[
                    { label: "Address history", body: "Know where you lived before Dutch employment.", Icon: MapPin },
                    { label: "Move timing", body: "Timing around recruitment and relocation can matter.", Icon: Clock3 },
                    { label: "Official check", body: "Use Belastingdienst or Business.gov.nl guidance for details.", Icon: ShieldCheck },
                  ]}
                />
              </div>
            </section>

            <section id="salary" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Salary Thresholds and Expertise Requirements">
                  <p>Eligibility usually depends on taxable salary levels, expertise criteria, and age or education exceptions in some cases.</p>
                  <p>
                    For tax year 2026, Belastingdienst publishes indicative norms including €
                    {THIRTY_PCT_RULES_2026.thresholdStandardAnnual.toLocaleString("en-NL")}/year (standard) and €
                    {THIRTY_PCT_RULES_2026.thresholdUnder30MastersAnnual.toLocaleString("en-NL")}/year (under 30 with qualifying master&apos;s), with a salary cap of €
                    {THIRTY_PCT_RULES_2026.salaryCapAnnual.toLocaleString("en-NL")}/year for the facility calculation. Scientific researchers and specialist medical training exceptions may apply — verify role category on official guidance.
                  </p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Salary check"
                  title="2026 Belastingdienst reference norms"
                  rows={[
                    { label: "Standard norm (30+)", body: `€${THIRTY_PCT_RULES_2026.thresholdStandardAnnual.toLocaleString("en-NL")}/year taxable salary`, Icon: Calculator },
                    { label: "Under-30 master's norm", body: `€${THIRTY_PCT_RULES_2026.thresholdUnder30MastersAnnual.toLocaleString("en-NL")}/year`, Icon: FileCheck2 },
                    { label: "Facility cap", body: `€${THIRTY_PCT_RULES_2026.salaryCapAnnual.toLocaleString("en-NL")}/year (max untaxed €${THIRTY_PCT_RULES_2026.maxUntaxedFullYearAtCap.toLocaleString("en-NL")} at 30%)`, Icon: Landmark },
                  ]}
                  note="Always verify the current official threshold for your tax year and role category on Belastingdienst."
                />
              </div>
            </section>

            <section id="changes" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Recent Changes and Why Expats Should Stay Updated">
                  <p>The Dutch government has changed the structure of the expat scheme multiple times in recent years. For 2026 payroll the statutory rate remains 30% within published norms and caps.</p>
                  <p>
                    From 1 January 2027 the government has stated a reduction to 27% for most people who entered the scheme after 2023 — that rate is <strong>not yet in force</strong>. Partial foreign taxpayer status for Box 2 and Box 3 generally ended for 2025 returns, with transitional treatment only through 2026 for pre-2024 users.
                  </p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Change risk"
                  title="Why timing matters"
                  rows={[
                    { label: "Entry date", body: "Your start date can affect which rules apply.", Icon: Clock3 },
                    { label: "Transitional rules", body: "Existing users may be treated differently from new applicants.", Icon: FileText },
                    { label: "Future reforms", body: "Use official updates before making financial assumptions.", Icon: AlertTriangle },
                  ]}
                />
              </div>
              <div className="mt-7">
                <InfographicFigure graphic={meta.infographics.changesAndAssets} />
              </div>
            </section>

            <section id="foreign-assets" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Foreign Assets, Investments and the 30% Ruling">
                  <p>Historically, some expats using the 30% ruling could elect partial foreign taxpayer treatment for Box 2 and Box 3. Recent reforms changed this significantly.</p>
                  <p>Foreign investments may become relevant, tax treatment has evolved, and transitional rules may apply. This is an area where personal advice may be useful.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Asset review"
                  title="When the ruling touches wider tax questions"
                  rows={[
                    { label: "Box 2 and Box 3", body: "Foreign shareholdings, savings and investments can become relevant.", Icon: PiggyBank },
                    { label: "Transition timing", body: "Old and new rules may not affect every person the same way.", Icon: Clock3 },
                    { label: "Advice trigger", body: "Cross-border assets are a good moment to get scoped professional advice.", Icon: AlertTriangle },
                  ]}
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <GuideLinkCard item={{ label: "International Tax Considerations", href: "/netherlands/taxes/international-tax-expats/", status: "comingSoon", description: "Future guide for cross-border tax topics." }} iconIndex={2} />
                <GuideLinkCard item={{ label: "Box Tax System", href: "/netherlands/taxes/box-tax-system-netherlands/", status: "comingSoon", description: "Future guide for Box 1, Box 2 and Box 3." }} iconIndex={3} />
              </div>
            </section>

            <section id="application" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="How the Application Process Works">
                  <p>Generally, the employee and employer agree, the application is submitted jointly, the tax authority reviews it, an approval decision is issued, and payroll is adjusted if approved.</p>
                  <p>Timing matters, and applications should be submitted promptly after employment begins.</p>
                </SectionIntro>
                <ApplicationFlow />
              </div>
            </section>

            <section id="scenarios" className={sectionClass}>
              <SectionIntro title="Common 30% Ruling Scenarios">
                <p>These scenarios show when the ruling may become relevant and what to verify before assuming eligibility.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.scenarios.map((scenario, index) => {
                  const Icon = scenarioIcons[index % scenarioIcons.length];
                  const isLive = scenario.status === "live";
                  const content = (
                    <>
                      <div className={cn("absolute inset-x-0 top-0 h-1", isLive ? movingNlSignatureGradientClass : "bg-slate-200")} aria-hidden />
                      <div className="flex gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10"><Icon className="h-5 w-5" aria-hidden /></span>
                        <span><span className="text-sm font-bold text-foreground">{scenario.title}</span><span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{scenario.body}</span></span>
                      </div>
                    </>
                  );
                  return isLive ? <Link key={scenario.title} href={scenario.href} className={cn(mutedCardClass, "block", transitionInteractive, activeBrightnessPress)}>{content}</Link> : <article key={scenario.title} className={mutedCardClass}>{content}</article>;
                })}
              </div>
            </section>

            <section id="benefits-limitations" className={sectionClass}>
              <SectionIntro title="Benefits and Limitations of the 30% Ruling">
                <p>The ruling can be valuable, but it is not a universal expat benefit. Treat it as a structured facility with requirements, limits and changing rules.</p>
              </SectionIntro>
              <div className="mt-6"><BenefitLimitGrid /></div>
            </section>

            <section id="related-tax-topics" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Tax Topics Often Connected to the 30% Ruling">
                  <p>The 30% ruling rarely sits alone. It often connects to residency, payroll, income tax, annual returns, and foreign asset questions.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Topic map"
                  title="Where users usually go next"
                  rows={[
                    { label: "Payroll and income", body: "Understand how salary treatment, withholding and income tax fit together.", Icon: ReceiptText },
                    { label: "Residency and boxes", body: "Tax residency and Box 2 / Box 3 questions matter more for cross-border users.", Icon: Globe2 },
                    { label: "Annual filing", body: "Payroll treatment does not always remove annual return questions.", Icon: FileText },
                  ]}
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{meta.relatedTaxTopics.map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index} />)}</div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Professional Services That May Help">
                  <p>Some 30% ruling questions are practical payroll questions, while others overlap with immigration, relocation or cross-border tax planning. Service links use live or coming-soon states without fake ratings.</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Service fit"
                  title="Match the provider to the question"
                  rows={[
                    { label: "Eligibility and tax", body: "Tax advisors can help interpret complex tax facts.", Icon: Calculator },
                    { label: "Payroll setup", body: "Payroll specialists matter when employer administration is the bottleneck.", Icon: ReceiptText },
                    { label: "Visa overlap", body: "Immigration lawyers help when work authorization is also in scope.", Icon: ShieldCheck },
                  ]}
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{meta.serviceLinks.map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index} />)}</div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Frequently Asked Questions">
                  <p>These answers give a fast orientation before users move into official sources, employer conversations or professional advice.</p>
                </SectionIntro>
                <FaqUsePanel />
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {meta.faq.map((item) => (
                  <article key={item.q} className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="official-sources" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <div>
                  <SectionIntro title="Official Sources">
                    <p>Use official sources for current requirements, terminology, thresholds, changes and application details.</p>
                  </SectionIntro>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {meta.officialSources.map((source) => (
                      <li key={source.href}>
                        <a href={source.href} target="_blank" rel="noopener noreferrer" className={cn("group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white p-5 text-sm font-semibold text-foreground hover:border-brand/35 hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>
                          {source.label}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <SourceUsePanel />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
                <SectionIntro title="Related Guides">
                  <p>Use these links to move from the 30% facility into the wider tax, relocation, banking and service context around the move.</p>
                </SectionIntro>
                <RelatedGuidesPanel />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{meta.relatedGuides.map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index} />)}</div>
            </section>

            <section id="explore-next" className="scroll-mt-28 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8">
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Move from the 30% ruling into the wider tax cluster and professional support categories.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{meta.exploreNextCards.map((item, index) => <GuideLinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />)}</div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
