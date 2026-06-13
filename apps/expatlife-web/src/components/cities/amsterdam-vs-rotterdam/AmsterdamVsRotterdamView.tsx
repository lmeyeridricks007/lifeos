import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Landmark,
  MapPin,
  Train,
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
import {
  CITIES_COMPARE_HUB_PATH,
  CITIES_HUB_PATH,
  amsterdamVsRotterdamPage as page,
  type AmsterdamVsRotterdamComparisonRow,
  type AmsterdamVsRotterdamLink,
  type AmsterdamVsRotterdamWorkedExampleRow,
} from "./amsterdamVsRotterdamPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const cardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass);
const cardIcons = [Globe2, Building2, MapPin, Landmark, Train, Users, WalletCards] as const;
const snapshotIcons = [Building2, WalletCards, Train, Users] as const;
const premiumVisualClass = guidePremiumVisualSpacingClass;
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

function SectionIntro({ eyebrow, title, children, fullWidth = false }: { eyebrow?: string; title: string; children?: ReactNode; fullWidth?: boolean }) {
  const useColumnLayout = fullWidth && Children.count(children) > 1;
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p> : null}
      <h2 className={cn(movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div className={cn("mt-3 space-y-3 text-base leading-relaxed text-foreground-muted", useColumnLayout && "max-w-none lg:columns-2 lg:gap-x-10 [&>p]:break-inside-avoid")}>
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
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority unoptimized sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-white/10" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" aria-hidden />
    </figure>
  );
}

function HeroSignalStrip() {
  return (
    <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {page.snapshotCards.map((card, index) => {
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

function CompareTable({ rows }: { rows: ReadonlyArray<AmsterdamVsRotterdamComparisonRow> }) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th scope="col" className="px-4 py-3 font-bold">Topic</th>
              <th scope="col" className="px-4 py-3 font-bold">Amsterdam</th>
              <th scope="col" className="px-4 py-3 font-bold">Rotterdam</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row.topic}>
                <td className="px-4 py-4 font-semibold text-foreground">{row.topic}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.amsterdam}</td>
                <td className="px-4 py-4 text-foreground-muted">{row.rotterdam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function WorkedExampleTable({ title, rows }: { title: string; rows: ReadonlyArray<AmsterdamVsRotterdamWorkedExampleRow> }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Worked examples" title={title} fullWidth />
      <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
        <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                {["Profile", "Key figures", "Example calculation", "What to confirm"].map((label) => (
                  <th key={label} scope="col" className="px-4 py-3 font-bold">{label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row.profile}>
                  <td className="px-4 py-4 font-semibold text-foreground">{row.profile}</td>
                  <td className="px-4 py-4 text-foreground-muted">{row.keyFigures}</td>
                  <td className="px-4 py-4 text-foreground-muted">{row.exampleMath}</td>
                  <td className="px-4 py-4 text-foreground-muted">{row.whatToConfirm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
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

function LinkCard({ item, iconIndex = 0 }: { item: AmsterdamVsRotterdamLink; iconIndex?: number }) {
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
        {!isLive ? <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Coming soon</span> : null}
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
    <Link href={item.href} className={cn(cardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function ChoicePanel({ title, items, accent }: { title: string; items: readonly string[]; accent: "amsterdam" | "rotterdam" }) {
  return (
    <div className={cn("rounded-2xl border p-5 shadow-sm ring-1", accent === "amsterdam" ? "border-cyan-200/80 bg-cyan-50/40 ring-cyan-100/60" : "border-emerald-200/80 bg-emerald-50/40 ring-emerald-100/60")}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className="mt-4 space-y-3">
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

function ComparisonSection({
  id,
  eyebrow,
  title,
  paragraphs,
  visual,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs?: readonly string[];
  visual: { src: string; alt: string; caption: string };
  children: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className={guidePremiumIntroStackClass}>
        <SectionIntro eyebrow={eyebrow} title={title} fullWidth>
          {paragraphs?.map((p) => <p key={p}>{p}</p>)}
        </SectionIntro>
      </div>
      <GuidePremiumVisualFigure visual={visual} className={premiumVisualClass} />
      <div className={guidePremiumSectionDetailStackClass}>{children}</div>
    </section>
  );
}

export function AmsterdamVsRotterdamView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL(CITIES_HUB_PATH, baseUrl).toString() },
    { name: "Compare cities", item: new URL(CITIES_COMPARE_HUB_PATH, baseUrl).toString() },
    { name: "Amsterdam vs Rotterdam", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href={CITIES_HUB_PATH} className="hover:text-foreground">Cities</Link>
                    <span aria-hidden>/</span>
                    <Link href={CITIES_COMPARE_HUB_PATH} className="hover:text-foreground">Compare</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Amsterdam vs Rotterdam</span>
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
                    Balanced orientation only — not a ranking. Rent bands and salary examples are planning ranges; verify listings and offers before relocating.
                  </p>
                  <HeroSignalStrip />
                </div>
                <HeroImage />
              </div>
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Amsterdam vs Rotterdam sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", transitionInteractive, activeBrightnessPress)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="quick-answer" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Quick answer" title={page.quickAnswerHeading} fullWidth>
                  {page.quickAnswerParagraphs.map((p) => <p key={p}>{p}</p>)}
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.quickAnswer} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 lg:grid-cols-2">
                  <ChoicePanel title="Choose Amsterdam if…" items={page.chooseAmsterdam} accent="amsterdam" />
                  <ChoicePanel title="Choose Rotterdam if…" items={page.chooseRotterdam} accent="rotterdam" />
                </div>
                <ChecklistBlock title="Where to go next in this guide" items={page.quickAnswerNextSteps} columns={1} />
                <p className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm text-foreground-muted">{page.dataNote}</p>
              </div>
            </section>

            <ComparisonSection id="snapshot" eyebrow="At a glance" title={page.snapshotHeading} paragraphs={page.snapshotParagraphs} visual={page.visuals.snapshot}>
              <CompareTable rows={page.snapshotComparisonRows} />
              <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
            </ComparisonSection>

            <ComparisonSection id="cost-of-living" eyebrow="Budget" title={page.costOfLivingHeading} paragraphs={page.costOfLivingParagraphs} visual={page.visuals.costOfLiving}>
              <CompareTable rows={page.costComparisonRows} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.budgetExamples.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <WorkedExampleTable title="Monthly budget — figure examples" rows={page.costWorkedExamples} />
            </ComparisonSection>

            <ComparisonSection id="housing" eyebrow="Housing" title={page.housingHeading} paragraphs={page.housingParagraphs} visual={page.visuals.housing}>
              <CompareTable rows={page.housingComparisonRows} />
              <WorkedExampleTable title="Housing — worked example" rows={page.housingWorkedExamples} />
              <ChecklistBlock title="Housing search checklist" items={page.housingChecklist} columns={2} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.housingGuideLinks.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </ComparisonSection>

            <ComparisonSection id="jobs" eyebrow="Careers" title={page.jobsHeading} paragraphs={page.jobsParagraphs} visual={page.visuals.jobs}>
              <CompareTable rows={page.jobsComparisonRows} />
              <WorkedExampleTable title="Jobs — sector examples" rows={page.jobsWorkedExamples} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.jobsGuideLinks.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </ComparisonSection>

            <ComparisonSection id="salary" eyebrow="Pay" title={page.salaryHeading} paragraphs={page.salaryParagraphs} visual={page.visuals.salary}>
              <CompareTable rows={page.salaryComparisonRows} />
              <WorkedExampleTable title="Salary vs rent — purchasing power examples" rows={page.salaryWorkedExamples} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.salaryGuideLinks.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </ComparisonSection>

            <ComparisonSection id="transport" eyebrow="Connectivity" title={page.transportHeading} paragraphs={page.transportParagraphs} visual={page.visuals.transport}>
              <CompareTable rows={page.transportComparisonRows} />
              <WorkedExampleTable title="Commute scenarios" rows={page.transportWorkedExamples} />
              <ChecklistBlock title="Transport planning checklist" items={page.transportChecklist} columns={2} />
            </ComparisonSection>

            <ComparisonSection id="lifestyle" eyebrow="Culture" title={page.lifestyleHeading} paragraphs={page.lifestyleParagraphs} visual={page.visuals.lifestyle}>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Amsterdam</p>
                  <div className="mt-4 grid gap-4">
                    {page.lifestyleAmsterdamCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Rotterdam</p>
                  <div className="mt-4 grid gap-4">
                    {page.lifestyleRotterdamCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx + 2} />)}
                  </div>
                </div>
              </div>
            </ComparisonSection>

            <ComparisonSection id="nightlife" eyebrow="Social life" title={page.nightlifeHeading} paragraphs={page.nightlifeParagraphs} visual={page.visuals.nightlife}>
              <CompareTable rows={page.nightlifeComparisonRows} />
              <ChecklistBlock title="Practical social life tips" items={page.nightlifeTips} columns={2} />
            </ComparisonSection>

            <ComparisonSection id="expat-community" eyebrow="Expat life" title={page.expatCommunityHeading} paragraphs={page.expatCommunityParagraphs} visual={page.visuals.expatCommunity}>
              <CompareTable rows={page.expatComparisonRows} />
              <ChecklistBlock title="First-month expat checklist" items={page.expatChecklist} columns={2} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.expatGuideLinks.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </ComparisonSection>

            <ComparisonSection id="families" eyebrow="Families" title={page.familiesHeading} paragraphs={page.familiesParagraphs} visual={page.visuals.families}>
              <CompareTable rows={page.familiesComparisonRows} />
              <WorkedExampleTable title="Family housing — worked example" rows={page.familyWorkedExamples} />
            </ComparisonSection>

            <ComparisonSection id="entrepreneurs" eyebrow="Startups" title={page.entrepreneursHeading} paragraphs={page.entrepreneursParagraphs} visual={page.visuals.entrepreneurs}>
              <CompareTable rows={page.entrepreneursComparisonRows} />
              <WorkedExampleTable title="Founder runway — worked example" rows={page.entrepreneursWorkedExamples} />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.entrepreneursGuideLinks.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
            </ComparisonSection>

            <ComparisonSection id="students" eyebrow="Students" title={page.studentsHeading} paragraphs={page.studentsParagraphs} visual={page.visuals.students}>
              <CompareTable rows={page.studentsComparisonRows} />
              <WorkedExampleTable title="Student budget — worked example" rows={page.studentWorkedExamples} />
              <ChecklistBlock title="Student housing checklist" items={page.studentChecklist} columns={2} />
            </ComparisonSection>

            <ComparisonSection id="weather" eyebrow="Outdoors" title={page.weatherHeading} paragraphs={page.weatherParagraphs} visual={page.visuals.weather}>
              <CompareTable rows={page.weatherComparisonRows} />
              <ChecklistBlock title="Outdoor lifestyle tips" items={page.weatherTips} columns={2} />
            </ComparisonSection>

            <ComparisonSection id="neighborhoods" eyebrow="Areas" title={page.neighborhoodsHeading} paragraphs={page.neighborhoodsParagraphs} visual={page.visuals.neighborhoods}>
              <div className="grid gap-4 sm:grid-cols-2">
                {page.neighborhoodCards.map((n, idx) => (
                  <article key={`${n.city}-${n.name}`} className={cardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{n.city} · {n.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted"><strong className="text-foreground">Vibe:</strong> {n.vibe}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted"><strong className="text-foreground">Best for:</strong> {n.audience}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted"><strong className="text-foreground">Cost:</strong> {n.cost}</p>
                  </article>
                ))}
              </div>
            </ComparisonSection>

            <ComparisonSection id="amsterdam-best-for" eyebrow="Amsterdam" title={page.amsterdamBestForHeading} paragraphs={page.amsterdamBestForParagraphs} visual={page.visuals.amsterdamBestFor}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.amsterdamBestForCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
            </ComparisonSection>

            <ComparisonSection id="rotterdam-best-for" eyebrow="Rotterdam" title={page.rotterdamBestForHeading} paragraphs={page.rotterdamBestForParagraphs} visual={page.visuals.rotterdamBestFor}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.rotterdamBestForCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx + 1} />)}
              </div>
            </ComparisonSection>

            <ComparisonSection id="decision-matrix" eyebrow="Decide" title={page.decisionMatrixHeading} paragraphs={page.decisionMatrixParagraphs} visual={page.visuals.decisionMatrix}>
              <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
                <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] divide-y divide-slate-200 text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                      <tr>
                        {["Persona", "Amsterdam", "Rotterdam", "Lean"].map((label) => (
                          <th key={label} scope="col" className="px-4 py-3 font-bold">{label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {page.decisionMatrixRows.map((row) => (
                        <tr key={row.persona}>
                          <td className="px-4 py-4 font-semibold text-foreground">{row.persona}</td>
                          <td className="px-4 py-4 text-foreground-muted">{row.amsterdam}</td>
                          <td className="px-4 py-4 text-foreground-muted">{row.rotterdam}</td>
                          <td className="px-4 py-4 font-medium text-brand-strong">{row.lean}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <ChecklistBlock title="How to use this matrix" items={page.decisionMatrixTips} columns={2} />
            </ComparisonSection>

            <section id="faq" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="FAQ" title="Amsterdam vs Rotterdam — common questions" fullWidth />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.faq} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <Accordion items={faqItems} />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Go deeper" title="Related guides" fullWidth />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.relatedGuides} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.relatedGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
              </div>
            </section>

            <section id="explore-next" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="More comparisons" title="Explore other city comparisons" fullWidth />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.exploreNext} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.exploreNextCards.map((item, idx) => <LinkCard key={`${item.label}-${idx}`} item={item} iconIndex={idx} />)}
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
