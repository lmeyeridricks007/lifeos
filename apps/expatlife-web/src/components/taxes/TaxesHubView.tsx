import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Building2,
  Calculator,
  ClipboardCheck,
  FileText,
  Globe2,
  Landmark,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
import { taxesHubPage as meta, type TaxesHubLink } from "./taxesHubPageModel";

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

const topicIcons = [ReceiptText, BadgePercent, Landmark, PiggyBank, Calculator, BriefcaseBusiness, FileText, ShieldCheck] as const;

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>
        {title}
      </h2>
      {children ? <div className={cn("mt-3 space-y-3 text-base leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{children}</div> : null}
    </div>
  );
}

function LiveOrSoonCard({
  item,
  iconIndex = 0,
  tone = "default",
}: {
  item: TaxesHubLink;
  iconIndex?: number;
  tone?: "default" | "onDark";
}) {
  const Icon = topicIcons[iconIndex % topicIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const cardShellClass = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5");
  const inner = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1",
            onDark
              ? "bg-white/10 text-cyan-100 ring-white/15"
              : isLive
                ? "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10"
                : "bg-slate-100 text-slate-500 ring-slate-200"
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="flex flex-wrap items-center gap-2">
            <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
            {!isLive ? (
              <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>
                Coming soon
              </span>
            ) : null}
          </span>
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-100" : isLive ? "text-link group-hover:text-link-hover" : "text-slate-500")}>
        {isLive ? "Open guide" : "Planned guide"} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </>
  );

  if (!isLive) {
    return <article className={cn(cardShellClass, "opacity-90")}>{inner}</article>;
  }

  return (
    <Link
      href={item.href}
      className={cn(
        cardShellClass,
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
        onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas",
        movingNlCardMicroLiftClass,
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      {inner}
    </Link>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image
        src={meta.hero.image.src}
        alt={meta.hero.image.alt}
        width={1600}
        height={900}
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function InfographicFigure({
  image,
}: {
  image: { src: string; alt: string; caption: string };
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-card ring-1 ring-slate-900/[0.04]">
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={900}
        sizes="(min-width: 1280px) 1180px, calc(100vw - 32px)"
        className="aspect-[16/9] h-auto w-full object-cover"
      />
      <figcaption className="border-t border-border bg-surface-muted/50 px-5 py-4 text-sm leading-relaxed text-foreground-muted">
        {image.caption}
      </figcaption>
    </figure>
  );
}

function BoxSystemVisual() {
  const boxes = [
    { label: "Box 1", body: "Work and primary income" },
    { label: "Box 2", body: "Substantial interest / shareholding" },
    { label: "Box 3", body: "Savings and investments" },
  ];
  return (
    <div className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Simple model</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">Different income types sit in different boxes</h3>
      <div className="mt-5 grid gap-3">
        {boxes.map((box) => (
          <div key={box.label} className="rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm">
            <p className="text-sm font-bold text-brand-strong">{box.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{box.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-2xl bg-blue-50/80 p-4 text-sm leading-relaxed text-blue-950/80">
        This hub avoids rates and personalised conclusions. Use it to understand the structure, then confirm your facts with official sources or a qualified adviser.
      </p>
    </div>
  );
}

function StatusPanel() {
  return (
    <aside className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Start with your status</p>
      <div className="mt-4 grid gap-3">
        {["Employee on payroll", "30% ruling candidate", "Freelancer or ZZP", "Cross-border / remote worker"].map((label) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
            <span className="h-2.5 w-2.5 rounded-full bg-brand" aria-hidden />
            <span className="text-sm font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function ProcessVisual({
  eyebrow,
  title,
  rows,
  note,
}: {
  eyebrow: string;
  title: string;
  rows: Array<{ label: string; body: string; Icon: LucideIcon }>;
  note?: string;
}) {
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
      {note ? (
        <p className="mt-4 rounded-2xl bg-amber-50/80 p-4 text-sm leading-relaxed text-amber-950 ring-1 ring-amber-100">
          {note}
        </p>
      ) : null}
    </aside>
  );
}

function ThirtyRulingVisual() {
  return (
    <ProcessVisual
      eyebrow="30% ruling flow"
      title="Understand the dependency chain"
      rows={[
        { label: "Employer setup", body: "The ruling is normally handled through employer and payroll processes.", Icon: Building2 },
        { label: "Eligibility facts", body: "Salary, recruitment, timing and personal facts all matter.", Icon: ClipboardCheck },
        { label: "Payroll effect", body: "Do not rely on net-pay assumptions until the setup is confirmed.", Icon: BadgePercent },
      ]}
      note="Eligibility depends on individual circumstances and rules can change. Treat this as orientation, not a conclusion."
    />
  );
}

function FreelancerVisual() {
  return (
    <ProcessVisual
      eyebrow="ZZP rhythm"
      title="Freelancers manage more moving parts"
      rows={[
        { label: "Invoice and records", body: "Keep income, expenses and client paperwork organised from day one.", Icon: ReceiptText },
        { label: "VAT cycle", body: "Many freelancers need to think about VAT returns separately from income tax.", Icon: Calculator },
        { label: "Annual income tax", body: "Your annual return pulls the business and personal picture together.", Icon: FileText },
      ]}
      note="This hub avoids thresholds, deductions and rate claims. Confirm your setup with official sources or an accountant."
    />
  );
}

function InternationalTaxVisual() {
  return (
    <ProcessVisual
      eyebrow="Expat complexity"
      title="Topics to flag before you file"
      rows={[
        { label: "Residency and move date", body: "Your timeline can affect which tax year questions matter.", Icon: Globe2 },
        { label: "Foreign income or assets", body: "Keep records before deciding how they should be reported.", Icon: PiggyBank },
        { label: "Treaty or remote work questions", body: "Discuss specifics with a qualified adviser if relevant.", Icon: AlertTriangle },
      ]}
      note="Do not use a general hub page to decide country-specific treaty positions or legal conclusions."
    />
  );
}

function ServicesFitVisual() {
  return (
    <ProcessVisual
      eyebrow="Choosing help"
      title="Match the provider to the problem"
      rows={[
        { label: "One-off return", body: "A tax adviser or accountant may help with annual filing questions.", Icon: FileText },
        { label: "Freelance admin", body: "Bookkeeping or accounting tools may fit invoices, VAT and records.", Icon: ReceiptText },
        { label: "Business payroll", body: "Payroll providers or business services fit employer-side administration.", Icon: BriefcaseBusiness },
      ]}
      note="Compare scope and qualifications. Do not assume every provider handles cross-border or complex expat situations."
    />
  );
}

export function TaxesHubView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL(meta.path, baseUrl).toString() },
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
                    <Link href="/" className="hover:text-foreground">Home</Link>
                    <span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Taxes</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{meta.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{meta.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{meta.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {meta.hero.chips.map((chip) => <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>)}
                  </div>
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
            <nav aria-label="Tax guide sections" className="flex min-w-max gap-2">
              {meta.sectionNav.map((item) => (
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
            <section id="how-taxes-work" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,0.75fr)]">
                <SectionIntro title="How Taxes Work in the Netherlands">
                  <p>The Netherlands has a structured but sometimes complex tax system. Most residents pay income tax through payroll withholding, annual tax returns, or both.</p>
                  <p>Expats often encounter topics like the 30% ruling, tax residency, Box 1 / Box 2 / Box 3 taxes, payroll deductions, international income and freelance or ZZP taxes.</p>
                  <p>Understanding the basics early can help you avoid confusion later, especially when you move mid-year, start freelancing, change employer or receive letters from Belastingdienst.</p>
                </SectionIntro>
                <StatusPanel />
              </div>
            </section>

            <section id="at-a-glance" className={sectionClass}>
              <SectionIntro title="Dutch Taxes at a Glance" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.snapshotCards.map((card) => (
                  <article key={card.title} className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass)}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-strong">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="tax-topics" className={sectionClass}>
              <SectionIntro title="Main Tax Topics Expats Should Understand">
                <p>Use these cards as the tax cluster map. Live cards open detailed guides; planned cards show the future page structure without sending you to a broken page.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {meta.taxTopics.map((topic, index) => <LiveOrSoonCard key={topic.href} item={topic} iconIndex={index} />)}
              </div>
            </section>

            <section id="system-explained" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)]">
                <SectionIntro title="The Dutch Tax System Explained Simply">
                  <p>The Netherlands uses a box system. Different types of income and assets are treated differently, so a payslip, savings account and company shareholding do not all sit in the same bucket.</p>
                  <p>Most employees have tax withheld automatically through payroll. Freelancers and business owners usually manage more of the process themselves, including VAT, invoices and records.</p>
                  <p>Many people still file an annual tax return even when payroll taxes were withheld, especially when their situation changed during the year.</p>
                </SectionIntro>
                <BoxSystemVisual />
              </div>
              <div className="mt-7">
                <InfographicFigure image={meta.infographics.boxSystem} />
              </div>
            </section>

            <section id="thirty-ruling" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)]">
                <div>
                  <SectionIntro title="The 30% Ruling for Expats">
                    <p>The 30% ruling is a Dutch tax advantage available to some highly skilled international workers. It is designed to help offset relocation and expat-related costs.</p>
                    <p>It has eligibility requirements and is usually arranged through an employer and payroll setup. Eligibility depends on individual circumstances, and rules can change.</p>
                  </SectionIntro>
                  <div className="mt-6">
                    <LiveOrSoonCard item={{ label: "Open the 30% ruling guide", href: "/netherlands/money/taxes/30-percent-ruling/", status: "live", description: "Read the dedicated guide before relying on any net-pay estimate." }} iconIndex={1} />
                  </div>
                </div>
                <ThirtyRulingVisual />
              </div>
            </section>

            <section id="employees" className={sectionClass}>
              <SectionIntro title="Taxes for Employees in the Netherlands">
                <p>Employees usually see payroll withholding, salary deductions and social contributions handled through the employer. That does not always remove personal responsibility: annual tax returns, partner situations, moving dates and international income can still matter.</p>
              </SectionIntro>
              <div className="mt-7">
                <InfographicFigure image={meta.infographics.employeeFreelancerFlow} />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <LiveOrSoonCard item={{ label: "Payroll tax", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "live", description: "Guide to loonheffing, salary deductions and Dutch payroll withholding." }} iconIndex={4} />
                <LiveOrSoonCard item={{ label: "Tax returns", href: "/netherlands/money/tax-return-netherlands/", status: "live", description: "Annual filing orientation for expats." }} iconIndex={7} />
              </div>
            </section>

            <section id="freelancers" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)]">
                <div>
                  <SectionIntro title="Taxes for Freelancers and Entrepreneurs">
                    <p>Freelancers and entrepreneurs usually need to think about VAT obligations, invoicing, quarterly VAT returns, income tax responsibilities and bookkeeping. Good records matter because the tax process is less automatic than employee payroll.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {["VAT (BTW)", "Freelancers & ZZP Taxes", "Business Taxes"].map((label, index) => {
                      const topic = meta.taxTopics.find((item) => item.label === label);
                      return topic ? <LiveOrSoonCard key={topic.href} item={topic} iconIndex={index + 5} /> : null;
                    })}
                  </div>
                </div>
                <FreelancerVisual />
              </div>
            </section>

            <section id="international-tax" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)]">
                <SectionIntro title="International and Expat Tax Considerations">
                  <p>Expats may need to understand tax residency, foreign income, investments abroad, moving countries mid-year, double taxation treaties and expat payroll structures.</p>
                  <p>These are topics to understand and discuss with a qualified advisor if relevant. This hub does not provide country-specific treaty advice or legal conclusions.</p>
                </SectionIntro>
                <InternationalTaxVisual />
              </div>
            </section>

            <section id="tax-return" className={sectionClass}>
              <SectionIntro title="Annual Tax Returns in the Netherlands">
                <p>Many residents file annual tax returns. Common expat reasons include moving mid-year, mortgage deductions, 30% ruling questions, foreign income, freelance income and partner or family situations.</p>
              </SectionIntro>
              <div className="mt-7">
                <InfographicFigure image={meta.infographics.taxReturnTriggers} />
              </div>
              <div className="mt-6">
                <LiveOrSoonCard item={{ label: "Open the tax return guide", href: "/netherlands/money/tax-return-netherlands/", status: "live", description: "Understand what the annual return does and how to prepare." }} iconIndex={7} />
              </div>
            </section>

            <section id="common-questions" className={sectionClass}>
              <SectionIntro title="Common Questions Expats Have About Dutch Taxes" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {meta.faqCards.map((item, index) => <LiveOrSoonCard key={`${item.label}-${item.href}`} item={item} iconIndex={index} />)}
              </div>
            </section>

            <section id="tax-services" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)]">
                <div>
                  <SectionIntro title="Tax and Financial Services That May Help">
                    <p>Use provider categories to understand what kind of help exists. Confirm scope, qualifications, pricing and official eligibility on provider or government sites.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {meta.serviceLinks.map((item, index) => <LiveOrSoonCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                  <div className="mt-6">
                    <Link href="/netherlands/services/" className={primaryCtaClass}>Open services hub<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                  </div>
                </div>
                <ServicesFitVisual />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro title="Related Guides for Expats in the Netherlands" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.relatedGuides.map((item) => <LiveOrSoonCard key={item.href} item={{ ...item, status: "live" }} />)}
              </div>
            </section>

            <section id="official-sources" className={sectionClass}>
              <SectionIntro title="Official Dutch Tax Sources" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {meta.officialSources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group flex items-center justify-between gap-3 rounded-2xl border border-border bg-white p-5 text-sm font-semibold text-foreground hover:border-brand/35 hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
                        transitionInteractive,
                        activeBrightnessPress
                      )}
                    >
                      {source.label}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="explore-next" className="scroll-mt-28 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8">
              <SectionIntro title="Explore More Netherlands Financial & Expat Guides" tone="onDark">
                <p>Move from overview to the guides and service categories that match your situation.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {meta.exploreNextCards.map((item, index) => <LiveOrSoonCard key={item.href} item={item} iconIndex={index} tone="onDark" />)}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
