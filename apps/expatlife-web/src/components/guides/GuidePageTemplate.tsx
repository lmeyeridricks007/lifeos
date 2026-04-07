import Link from "next/link";
import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import type {
  GuideData,
  GuideSection,
  GuideSectionService,
  GuideSectionServiceResolved,
  GuideBankComparison,
  GuideInsurerComparison,
  GuideDocumentTranslationCountryExample,
  GuideDocumentTranslationDocumentType,
  GuideDocumentTranslationCostItem,
  GuideDocumentTranslationTranslatorResource,
  GuideSalaryComparisonExample,
  GuideSalaryComparisonBarMarker,
  GuideToolCta,
} from "@/src/lib/guides/types";
import { Container } from "@/components/ui/container";
import { CardLink } from "@/components/ui/card-link";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import { AffiliateCompactList } from "@/src/components/affiliates/AffiliateCompactList";
import type { AffiliatePlacement, AffiliateProvider } from "@/src/lib/affiliates/types";
import { ExampleScenarioCards } from "@/src/components/guides/ExampleScenarioCards";
import { guideHasMonetizationAfterContent } from "@/src/lib/guides/monetizationGuideSlugs";
import { MoveGuideSignatureDark } from "@/src/components/guides/MoveGuideSignatureDark";
import { buildMoveGuideSignatureModel } from "@/src/lib/guides/buildMoveGuideSignatureModel";
import { ContentActionBar } from "@/src/components/content/ContentActionBar";
import { PillarTOC } from "@/components/content/PillarTOC";
import { GuideKeySections, GuidePageRoot, GuideScenario, GuideToolsRegion } from "@/components/page-families";
import {
  AtGlanceCard,
  FAQBlock,
  MoveGuideSectionPanel,
  NextSteps,
  PageHero,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarGuideToolsSection,
  PillarMainStack,
  SectionBlock,
  ToolCard,
} from "@/components/page/pillar-template";
import { cn } from "@/lib/cn";
import { resolveGuideSectionServices } from "@/src/lib/guides/resolveGuideSectionServices";
import { GuideBodyParagraphs } from "@/src/components/guides/GuideBodyParagraphs";
import { guideCtaBandClass, guidePrimaryCtaClass, guideSecondaryCtaClass, toolMainSurfaceClass } from "@/lib/ui/page-family";
import {
  movingNlCardMicroLiftClass,
  movingNlPathwaysBackdropClass,
  movingNlSectionH2Class,
  movingNlShellPathwaysClass,
  movingNlSignatureGradientClass,
  movingNlSidebarLinkChevronClass,
  movingNlSidebarLinkRowClass,
  movingNlSidebarModuleAccentClass,
  movingNlSidebarModuleClass,
  movingNlSidebarModuleTitleClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { resolvePreFaqPresetForGuide } from "@/src/lib/soft-cta/mapping";
import { PresetSoftCTA } from "@/src/components/soft-cta/PresetSoftCTA";
import type { MonetizationPageType } from "@/src/lib/monetization/pageTypePolicy";
import { getMonetizationPolicy } from "@/src/lib/monetization/pageTypePolicy";

/** Slugs that support "Download PDF" (checklist-style guides). */
const CHECKLIST_PDF_SLUGS = ["moving-checklist-netherlands", "documents-needed-to-move-netherlands"] as const;

/** Drop tool CTAs whose href already appears in featured tools so the main column does not repeat the same tools. */
function toolCtasDedupedAgainstFeatured(
  toolCtas: GuideData["toolCtas"] | undefined,
  featuredTools: GuideData["featuredTools"] | undefined
): NonNullable<GuideData["toolCtas"]> {
  const featuredHrefs = new Set((featuredTools ?? []).map((t) => t.href));
  return toolCtas?.filter((cta) => !featuredHrefs.has(cta.href)) ?? [];
}

const CONTEXTUAL_TOOLS_MAX = 4;

function guideHasAtGlance(data: GuideData): boolean {
  const qa = data.quickAnswers ?? [];
  const prog = data.progressionStages ?? [];
  const hasTitle = Boolean(data.quickAnswersTitle?.trim());
  return hasTitle || qa.length > 0 || prog.length >= 3;
}

function buildContextualToolCards(
  data: GuideData,
  toolCtasDeduped: GuideToolCta[]
): Array<{ href: string; title: string; description: string; key?: string }> {
  const seen = new Set<string>();
  const out: Array<{ href: string; title: string; description: string; key?: string }> = [];
  const push = (href: string, title: string, description: string, key?: string) => {
    if (!href || seen.has(href) || out.length >= CONTEXTUAL_TOOLS_MAX) return;
    seen.add(href);
    out.push({
      href,
      title,
      description: description.trim() || "Practical planning tool for your Netherlands move.",
      key,
    });
  };
  for (const t of data.featuredTools ?? []) {
    push(t.href, t.label, t.description ?? "");
  }
  for (const t of toolCtasDeduped) {
    push(t.href, t.label, t.description ?? "", t.key);
  }
  return out;
}

export type GuidePageTemplateProps = {
  data: GuideData;
  /** Pre-loaded affiliate blocks by placement id (from loadPlacementWithProviders). */
  affiliateBlocks?: Record<
    string,
    {
      placement: AffiliatePlacement;
      items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
    }
  >;
  /** Full canonical URL for share/copy. */
  canonicalUrl?: string;
  /**
   * Phase 6 monetization: rendered after FAQ, before legacy “useful services” affiliate strip.
   * Use for curated RecommendationBlock / AffiliateSection + SoftCTA on high-intent guides only.
   */
  postContentMonetization?: ReactNode;
  /**
   * Soft CTA immediately before the FAQ. Omit to auto-pick a preset from slug/path (moving JSON guides, visa routes).
   * Pass `null` to suppress.
   */
  preFaqSoftCta?: ReactNode | null;
  /**
   * Drives which monetization surfaces are allowed (default `guide`). Use `pillar` only when this template renders a pillar-style page.
   */
  monetizationPageType?: MonetizationPageType;
  /** Contextual `AffiliateSection` after the first main body section (when policy allows). */
  contextualAffiliateAfterFirstSection?: ReactNode;
  /** Contextual `AffiliateSection` before related guides / end CTA (when policy allows). */
  contextualAffiliateBeforeNextSteps?: ReactNode;
};

/** Shared card-styled block for section services (Week 2, Week 3, etc.). Same layout and styling everywhere. */
function GuideSectionServicesCards({ services }: { services: GuideSectionService[] }) {
  if (!services.length) return null;
  const resolved: GuideSectionServiceResolved[] = resolveGuideSectionServices(services);
  return (
    <div
      className={cn(
        "relative mt-6 overflow-hidden rounded-card border border-border bg-gradient-to-br from-surface-muted/80 to-brand-muted/20 p-6 shadow-card ring-1 ring-border/15 md:p-8",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-gradient-to-b before:from-brand before:to-accent before:opacity-90"
      )}
    >
      <div className="relative pl-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">Services often used in this step</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {resolved.map((s, i) => {
            const parts = s.name.split(/[\s-]+/).filter(Boolean);
            const initials =
              parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : s.name.slice(0, 2).toUpperCase();
            return (
              <article
                key={i}
                className="rounded-card border border-border bg-surface-raised p-5 shadow-card transition-shadow duration-150 hover:shadow-card-hover sm:p-6"
              >
                <div className="flex gap-4">
                  {s.logo?.src ? (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface-raised">
                      <Image
                        src={s.logo.src}
                        alt={s.logo.alt || s.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain p-1"
                        unoptimized={!s.logo.src.startsWith("/")}
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-muted text-foreground-muted font-semibold text-xs"
                      aria-hidden
                    >
                      {initials}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-foreground">{s.name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{s.description}</p>
                    {s.indicativeCost ? (
                      <p className="mt-1 text-xs text-foreground-faint">{s.indicativeCost}</p>
                    ) : null}
                    {s.reason ? (
                      <p className="mt-1 text-xs text-foreground-faint">{s.reason}</p>
                    ) : null}
                    <div className="mt-4">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-lg border border-border bg-surface-raised px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors duration-150 hover:border-border-strong hover:bg-surface-muted"
                      >
                        View {s.name}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-foreground-muted">
          Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
}

/** Bank comparison cards: overview, features, pros, cons, typical costs, website link, logo. */
function GuideSectionBankComparisons({
  id,
  heading,
  body,
  bankComparisons,
}: {
  id: string;
  heading: string;
  body?: string[];
  bankComparisons: GuideBankComparison[];
}) {
  const typeLabel: Record<GuideBankComparison["type"], string> = {
    traditional: "Traditional bank",
    digital: "Digital bank",
    platform: "Financial platform",
  };
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className={movingNlSectionH2Class}>
        {heading}
      </h2>
      <GuideBodyParagraphs body={body} />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {bankComparisons.map((bank) => (
          <article
            key={bank.name}
            className="flex flex-col rounded-card border border-border bg-surface-raised p-5 shadow-card transition hover:shadow-card-hover motion-reduce:hover:shadow-card sm:p-6"
          >
            <div className="flex items-start gap-4">
              {bank.logo?.src ? (
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-surface-raised p-1">
                  <Image
                    src={bank.logo.src}
                    alt={bank.logo.alt || bank.name}
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain"
                    unoptimized={!bank.logo.src.startsWith("/")}
                  />
                </div>
              ) : null}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-foreground">{bank.name}</h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-foreground-muted">
                  {typeLabel[bank.type]}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-foreground leading-relaxed">{bank.overview}</p>
            {bank.typicalCosts ? (
              <p className="mt-2 text-sm font-medium text-foreground">Typical costs: {bank.typicalCosts}</p>
            ) : null}
            {bank.features?.length ? (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">Features</p>
                <ul className="mt-1.5 space-y-1 text-sm text-foreground">
                  {bank.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-success" aria-hidden>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {bank.pros?.length ? (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">Pros</p>
                <ul className="mt-1.5 space-y-1 text-sm text-foreground">
                  {bank.pros.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-success" aria-hidden>+</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {bank.cons?.length ? (
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">Cons</p>
                <ul className="mt-1.5 space-y-1 text-sm text-foreground-muted">
                  {bank.cons.map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-warning" aria-hidden>−</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-4 pt-4 border-t border-border/80">
              <a
                href={bank.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-border bg-surface-muted px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
              >
                Visit {bank.name}
                <span className="ml-1" aria-hidden>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-foreground-muted">
        Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}

/** Health insurer directory cards: overview, features, costs, expat note, website link, logo. */
function GuideSectionInsurerComparisons({
  id,
  heading,
  body,
  insurerComparisons,
}: {
  id: string;
  heading: string;
  body?: string[];
  insurerComparisons: GuideInsurerComparison[];
}) {
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className={movingNlSectionH2Class}>
        {heading}
      </h2>
      <GuideBodyParagraphs body={body} />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {insurerComparisons.map((insurer) => (
          <article
            key={insurer.name}
            className={cn(
              "flex flex-col overflow-hidden rounded-card border border-border/80 bg-surface-raised shadow-card",
              "transition hover:border-border-strong hover:shadow-card-hover motion-reduce:hover:shadow-card"
            )}
          >
            {/* Card header: logo + name + parent */}
            <div className="flex items-center gap-4 p-5 pb-3 sm:p-6 sm:pb-4">
              {insurer.logo?.src ? (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-card border border-border/80 bg-surface-muted/80 p-2">
                  <Image
                    src={insurer.logo.src}
                    alt={insurer.logo.alt || insurer.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                    unoptimized={!insurer.logo.src.startsWith("/")}
                  />
                </div>
              ) : (
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-card border border-border bg-surface-muted text-foreground-muted text-sm font-bold"
                  aria-hidden
                >
                  {insurer.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{insurer.name}</h3>
                {insurer.parentGroup ? (
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    {insurer.parentGroup}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Body: overview + expat note */}
            <div className="px-5 sm:px-6">
              <p className="text-sm leading-relaxed text-foreground">{insurer.overview}</p>
              {insurer.expatNote ? (
                <p className="mt-2.5 rounded-lg bg-surface-muted/80 px-3 py-2 text-sm italic leading-snug text-foreground-muted">
                  {insurer.expatNote}
                </p>
              ) : null}
            </div>

            {/* Cost band */}
            {insurer.typicalCosts ? (
              <div className="mx-5 mt-4 sm:mx-6">
                <div className="rounded-card border border-success-border/50 bg-success-muted/70 px-4 py-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-success">
                    Typical costs
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-success">{insurer.typicalCosts}</p>
                </div>
              </div>
            ) : null}

            {/* Features / pros / cons */}
            {(insurer.features?.length || insurer.pros?.length || insurer.cons?.length) ? (
              <div className="mt-4 space-y-3 px-5 sm:px-6">
                {insurer.features?.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">Features</p>
                    <ul className="mt-1.5 space-y-1 text-sm text-foreground">
                      {insurer.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-success" aria-hidden>✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {insurer.pros?.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">Pros</p>
                    <ul className="mt-1.5 space-y-1 text-sm text-foreground">
                      {insurer.pros.map((p, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-success" aria-hidden>+</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {insurer.cons?.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">Cons</p>
                    <ul className="mt-1.5 space-y-1 text-sm text-foreground-muted">
                      {insurer.cons.map((c, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-warning" aria-hidden>−</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-2 border-t border-border/80 bg-surface-muted/50 px-5 py-4 sm:px-6">
              <a
                href={insurer.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-canvas shadow-sm transition hover:bg-foreground/90"
              >
                Visit {insurer.name}
                <span className="ml-1.5 text-foreground-faint" aria-hidden>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-foreground-muted">
        Some links may be affiliate links. If you use them, we may earn a commission at no extra cost to you.
      </p>
    </div>
  );
}

/** Visual timeline for priority checklists (e.g. first priorities after arrival). */
function GuideSectionNumberedSteps({
  id,
  heading,
  body,
  steps,
  callout,
  ctaBlock,
  links,
}: {
  id: string;
  heading: string;
  body?: string[];
  steps: string[];
  callout?: GuideSection["callout"];
  ctaBlock?: GuideSection["ctaBlock"];
  links?: GuideSection["links"];
}) {
  return (
    <div className="w-full space-y-6">
      <h2
        id={id}
        className={movingNlSectionH2Class}
      >
        {heading}
      </h2>
      <GuideBodyParagraphs body={body} />
      <div className="relative">
        {/* Vertical timeline track - muted */}
        <div
          className="absolute left-[22px] top-6 bottom-12 w-0.5 rounded-full bg-surface-muted/80"
          aria-hidden
        />
        <ol className="list-none space-y-0">
          {steps.map((step, index) => {
            const accents = [
              "border-l-brand bg-brand-muted/80",
              "border-l-accent bg-accent-muted/80",
              "border-l-warning bg-warning-muted/80",
              "border-l-brand bg-brand-muted/80",
            ] as const;
            const nodeAccents = [
              "border-brand/40 bg-brand-muted/50 text-brand-strong",
              "border-accent/40 bg-accent-muted/50 text-accent",
              "border-warning-border/70 bg-warning-muted/60 text-warning",
              "border-brand/40 bg-brand-muted/50 text-brand-strong",
            ] as const;
            const acc = accents[index % accents.length];
            const nodeAcc = nodeAccents[index % nodeAccents.length];
            return (
              <li
                key={index}
                className="relative flex items-stretch gap-5 pb-6 last:pb-0"
              >
                {/* Timeline node - muted accent */}
                <span
                  className={cn(
                    "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold shadow-sm ring-4 ring-canvas",
                    nodeAcc
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                {/* Step card - same palette as quick-answer cards */}
                <div
                  className={cn(
                    "min-w-0 flex-1 rounded-card border border-border/80 border-l-4 py-3.5 px-4 shadow-card transition hover:shadow-card-hover motion-reduce:hover:shadow-card",
                    acc
                  )}
                >
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {step}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      {callout ? (
        <InfoBox
          variant={
            callout.type === "warning" ? "warn" : callout.type === "tip" ? "success" : "info"
          }
          title={callout.title}
        >
          <p>{callout.text}</p>
        </InfoBox>
      ) : null}
      {ctaBlock ? (
        <div className="mt-6 rounded-card border border-border bg-surface-muted p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-foreground">{ctaBlock.title}</h3>
          <p className="mt-2 text-sm text-foreground">{ctaBlock.supportingText}</p>
          <div className="mt-4">
            <Link
              href={ctaBlock.primaryHref}
              className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-canvas hover:bg-foreground/90"
            >
              {ctaBlock.primaryLabel}
              <span aria-hidden className="ml-1">→</span>
            </Link>
          </div>
        </div>
      ) : null}
      {links?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/80 pt-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-link hover:text-link-hover underline">
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** Three-phase timeline (Before move / Arrival week / First 90 days) for country guide sections. */
function GuideSectionTimeline({
  id,
  heading,
  body,
  stages,
}: {
  id: string;
  heading: string;
  body?: string[];
  stages: { beforeMove: string[]; arrivalWeek: string[]; first90Days: string[] };
}) {
  const phases = [
    { key: "before" as const, label: "Before move", items: stages.beforeMove, accent: "border-l-brand bg-brand-muted/45" },
    { key: "arrival" as const, label: "Arrival week", items: stages.arrivalWeek, accent: "border-l-accent bg-accent-muted/45" },
    { key: "first90" as const, label: "First 90 days", items: stages.first90Days, accent: "border-l-warning bg-warning-muted/40" },
  ];
  return (
    <div className="w-full space-y-6">
      <h2
        id={id}
        className={movingNlSectionH2Class}
      >
        {heading}
      </h2>
      <GuideBodyParagraphs body={body} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase, index) => (
          <article
            key={phase.key}
            className={cn(
              "relative rounded-card border border-border/80 p-5 shadow-card",
              "border-l-4",
              phase.accent
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-canvas"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-foreground">{phase.label}</h3>
            </div>
            <ul className="mt-4 space-y-2 pl-0">
              {phase.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-faint" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

/** Visa and route awareness section with colored cards per route type. */
function GuideSectionVisaRoutes({
  section,
}: {
  section: GuideSection & { visaRoutes: { commonRoutes: string[]; notes: string[] }; callout?: GuideSection["callout"]; links?: GuideSection["links"] };
}) {
  const { id, heading, body, visaRoutes, callout, links } = section;
  const accents = [
    "border-l-brand bg-brand-muted/65",
    "border-l-accent bg-accent-muted/65",
    "border-l-warning bg-warning-muted/60",
    "border-l-info bg-info-muted/60",
  ] as const;
  const routeItems = visaRoutes.commonRoutes.map((s) => {
    const dash = s.indexOf(" — ");
    if (dash >= 0) {
      return { name: s.slice(0, dash).trim(), description: s.slice(dash + 3).trim() };
    }
    return { name: s, description: "" };
  });
  const calloutVariant = callout?.type === "warning" ? "warn" : callout?.type === "tip" ? "success" : "info";

  return (
    <div className="w-full space-y-6">
      <h2 id={id} className={movingNlSectionH2Class}>
        {heading}
      </h2>
      <GuideBodyParagraphs body={body} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routeItems.map((item, i) => (
          <article
            key={item.name}
            className={cn(
                  "rounded-card border border-border/80 p-4 shadow-card",
              "border-l-4",
              accents[i % accents.length]
            )}
          >
            <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
            {item.description ? (
              <p className="mt-1.5 text-sm text-foreground leading-relaxed">{item.description}</p>
            ) : null}
          </article>
        ))}
      </div>
      {visaRoutes.notes?.length ? (
        <ul className="space-y-1 text-sm text-foreground-muted">
          {visaRoutes.notes.map((note) => (
            <li key={note} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-faint" aria-hidden />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {callout ? (
        <InfoBox variant={calloutVariant} title={callout.title}>
          <p>{callout.text}</p>
          {callout.href ? (
            <p className="mt-2">
              <a
                href={callout.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-strong underline hover:text-link-hover"
              >
                {callout.linkLabel ?? "View source"}
              </a>
            </p>
          ) : null}
        </InfoBox>
      ) : null}
      {links?.length ? (
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/80 pt-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-link hover:text-link-hover underline">
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** Country-specific translation/legalisation workflow examples (document translation guide). */
function GuideSectionCountryExamples({
  id,
  heading,
  body,
  examples,
  disclaimer,
}: {
  id: string;
  heading: string;
  body?: string[];
  examples: GuideDocumentTranslationCountryExample[];
  disclaimer: string;
}) {
  const accents = [
    "border-l-brand bg-brand-muted/65",
    "border-l-accent bg-accent-muted/65",
    "border-l-warning bg-warning-muted/60",
    "border-l-info bg-info-muted/60",
  ] as const;
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className={movingNlSectionH2Class}>
        {heading}
      </h2>
      <GuideBodyParagraphs body={body} />
      <div className="grid gap-6 sm:grid-cols-2">
        {examples.map((ex, i) => (
          <article
            key={ex.countryCode}
            className={cn(
              "rounded-card border border-border/80 p-5 shadow-card",
              "border-l-4",
              accents[i % accents.length]
            )}
          >
            <h3 className="text-lg font-semibold text-foreground">{ex.country}</h3>
            <p className="mt-2 text-sm text-foreground leading-relaxed">{ex.summary}</p>
            {ex.note ? (
              <p className="mt-2 text-xs text-foreground-muted">{ex.note}</p>
            ) : null}
            <ul className="mt-3 space-y-1.5 text-sm text-foreground">
              {ex.workflow.map((step, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground-faint" aria-hidden />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <a
                href={ex.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-link hover:text-link-hover underline"
              >
                Official steps for {ex.country}
                <span aria-hidden> →</span>
              </a>
            </p>
          </article>
        ))}
      </div>
      <p className="rounded-lg border border-warning-border/60 bg-warning-muted/80 px-4 py-3 text-sm text-warning">
        {disclaimer}
      </p>
    </div>
  );
}

/** Document types that often need translation (document translation guide). */
function GuideSectionDocumentTypes({
  id,
  heading,
  body,
  documentTypes,
}: {
  id: string;
  heading: string;
  body?: string[];
  documentTypes: GuideDocumentTranslationDocumentType[];
}) {
  const cardAccents = [
    "border-l-brand bg-gradient-to-br from-brand-muted/90 to-surface-raised",
    "border-l-accent bg-gradient-to-br from-accent-muted/90 to-surface-raised",
    "border-l-warning bg-gradient-to-br from-warning-muted/90 to-surface-raised",
    "border-l-info bg-gradient-to-br from-info-muted/90 to-surface-raised",
  ] as const;
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className={movingNlSectionH2Class}>
        {heading}
      </h2>
      <GuideBodyParagraphs body={body} />
      <ul className="grid gap-5 sm:grid-cols-2">
        {documentTypes.map((doc, index) => (
          <li
            key={doc.id}
            className={cn(
              "flex flex-col rounded-card border border-border/90 border-l-4 p-5 shadow-card transition hover:shadow-card-hover motion-reduce:hover:shadow-card",
              cardAccents[index % cardAccents.length]
            )}
          >
            <h3 className="text-base font-semibold text-foreground">{doc.label}</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {doc.whereUsed.map((use) => (
                <span
                  key={use}
                  className="rounded-md bg-surface-muted/80 px-2 py-0.5 text-xs font-medium text-foreground"
                >
                  {use}
                </span>
              ))}
            </div>
            {doc.legalisationRelevant ? (
              <p className="mt-3 flex items-center gap-1.5 text-xs text-foreground-muted">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-warning" aria-hidden />
                Legalisation may also apply
              </p>
            ) : null}
            {doc.relatedGuideHref && doc.relatedGuideLabel ? (
              <Link
                href={doc.relatedGuideHref}
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-surface-muted hover:border-border-strong"
              >
                {doc.relatedGuideLabel}
                <span className="text-foreground-faint" aria-hidden>→</span>
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Sworn translator resources / agencies (document translation guide). */
function GuideSectionTranslatorResources({
  resources,
}: {
  resources: GuideDocumentTranslationTranslatorResource[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((r) => {
        const initials = r.name
          .split(/[\s/]+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((w) => w[0])
          .join("")
          .toUpperCase() || "?";
        return (
          <article
            key={r.id}
            className={cn(
              "flex flex-col rounded-card border border-border/90 bg-surface-raised p-5 shadow-card transition hover:shadow-card-hover motion-reduce:hover:shadow-card",
              r.isOfficialRegister && "border-l-4 border-l-brand bg-gradient-to-br from-brand-muted/50 to-surface-raised"
            )}
          >
            <div className="flex items-start gap-4">
              {r.logo?.src ? (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-card border border-border/80 bg-surface-raised">
                  <Image
                    src={r.logo.src}
                    alt={r.logo.alt}
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain p-1"
                    unoptimized={!r.logo.src.startsWith("/")}
                  />
                </div>
              ) : (
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-card text-sm font-bold",
                    r.isOfficialRegister
                      ? "border border-brand/25 bg-brand-muted/50 text-brand-strong"
                      : "border border-border bg-surface-muted text-foreground-muted"
                  )}
                  aria-hidden
                >
                  {initials}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-foreground">{r.name}</h3>
                {r.isOfficialRegister ? (
                  <span className="mt-0.5 inline-block text-xs font-medium uppercase tracking-wide text-brand">
                    Official register
                  </span>
                ) : null}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground">{r.description}</p>
            {r.costNote ? (
              <p className="mt-2 rounded-lg bg-surface-muted px-3 py-2 text-xs font-medium text-foreground">
                {r.costNote}
              </p>
            ) : null}
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-surface-muted hover:border-border-strong"
            >
              Visit website
              <span className="text-foreground-faint" aria-hidden>→</span>
            </a>
          </article>
        );
      })}
    </div>
  );
}

/** Cost and timing ranges (document translation guide). */
function GuideSectionTranslationCosts({
  id,
  heading,
  body,
  costRanges,
  timing,
  disclaimer,
}: {
  id: string;
  heading: string;
  body?: string[];
  costRanges: GuideDocumentTranslationCostItem[];
  timing?: Array<{ label: string; range: string }>;
  disclaimer?: string;
}) {
  return (
    <div className="w-full space-y-6">
      <h2 id={id} className={movingNlSectionH2Class}>
        {heading}
      </h2>
      <GuideBodyParagraphs body={body} />
      <ContentTable headers={["Item", "Indicative range", "Note"]} minWidth="360px">
        {costRanges.map((row) => (
          <ContentTableRow key={row.id}>
            <ContentTableCell emphasis>{row.label}</ContentTableCell>
            <ContentTableCell>{row.range}</ContentTableCell>
            <ContentTableCell>{row.note ?? "—"}</ContentTableCell>
          </ContentTableRow>
        ))}
      </ContentTable>
      {timing?.length ? (
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
            Turnaround
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {timing.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-card border border-border/90 p-4",
                  i === 0
                    ? "border-l-4 border-l-accent bg-gradient-to-br from-accent-muted/80 to-surface-raised"
                    : "border-l-4 border-l-warning bg-gradient-to-br from-warning-muted/80 to-surface-raised"
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                  {t.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">{t.range}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {disclaimer ? (
        <div className="rounded-card border border-border bg-surface-muted/80 px-4 py-4">
          <p className="text-sm text-foreground leading-relaxed">{disclaimer}</p>
        </div>
      ) : null}
    </div>
  );
}

/** Maps JSON guide quick answers + progression into the moving-pillar AtGlanceCard. */
function guideJsonAtGlanceBlock(data: GuideData): ReactNode | null {
  const qa = data.quickAnswers ?? [];
  const prog = data.progressionStages ?? [];
  const hasTitle = Boolean(data.quickAnswersTitle?.trim());
  const hasQuick = qa.length > 0;
  const hasProg = prog.length >= 3;
  if (!hasTitle && !hasQuick && !hasProg) return null;

  const timelineRx = /time|timeline|duration|how long|when\b|processing|weeks|months|days/i;
  const timelineItem = qa.find((q) => timelineRx.test(q.label));
  const timelineFromOther = qa.find((q) => q !== timelineItem && q.value?.trim())?.value.trim();
  const timeline =
    timelineItem?.value?.trim() ||
    timelineFromOther ||
    "Timing depends on your route, employer, and housing market.";

  const whoPool = timelineItem ? qa.filter((q) => q !== timelineItem) : qa;
  let who = whoPool.slice(0, 4).map((q) => `${q.label}: ${q.value}`);
  if (!who.length && prog.length) {
    who = prog.slice(0, 4).map((s) => s.label);
  }
  if (!who.length && (data.hero.badges?.length ?? 0) > 0) {
    who = (data.hero.badges ?? []).slice(0, 4);
  }
  if (!who.length) {
    who = ["General Netherlands relocation guide"];
  }

  let steps: string[] = [];
  if (prog.length >= 3) {
    steps = prog.slice(0, 3).map((s) => {
      const d = s.description?.trim();
      if (!d) return s.label;
      return `${s.label} — ${d}`;
    });
  } else if (qa.length) {
    steps = qa.slice(0, 3).map((q) => `${q.label}: ${q.value}`);
  }

  return (
    <PillarGuideAtGlanceRegion>
      <AtGlanceCard
        id="at-a-glance"
        eyebrow="ExpatOS summary"
        heading={data.quickAnswersTitle?.trim() || "At a glance"}
        intro="Who this is for, realistic timing, and the first moves that matter—before you scroll."
        who={who}
        timeline={timeline}
        steps={steps}
        footer={data.lastUpdated ? <span>Last updated {data.lastUpdated}</span> : undefined}
      />
    </PillarGuideAtGlanceRegion>
  );
}

const salaryEurFormatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function formatSalaryEur(value: number): string {
  return salaryEurFormatter.format(value);
}

const markerBarByVariant: Record<GuideSalaryComparisonBarMarker["variant"], string> = {
  violet: "bg-info",
  sky: "bg-brand-strong",
  amber: "bg-warning",
};

const badgeToneStyles = {
  positive: "border-success-border/60 bg-success-muted/90 text-success",
  negative: "border-danger/30 bg-danger-muted/90 text-danger",
  neutral: "border-border bg-surface-muted text-foreground",
} as const;

const markerLabelClasses: Record<GuideSalaryComparisonBarMarker["variant"], string> = {
  violet: "text-foreground",
  sky: "text-foreground",
  amber: "text-warning",
};

function SalaryComparisonBar({
  salaryEur,
  barMaxEur,
  markers,
}: {
  salaryEur: number;
  barMaxEur: number;
  markers: GuideSalaryComparisonBarMarker[];
}) {
  const max = Math.max(barMaxEur, salaryEur, ...markers.map((m) => m.amountEur));
  const pct = (v: number) => `${Math.min(100, Math.max(0, (v / max) * 100))}%`;

  return (
    <div className="mt-4 space-y-3">
      <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">Salary vs typical IND floors (illustrative)</p>
      <div
        className="rounded-card border border-border bg-gradient-to-b from-surface-muted to-surface-muted/90 p-4 shadow-inner"
        role="img"
        aria-label={`Gross salary ${formatSalaryEur(salaryEur)} compared to threshold markers up to ${formatSalaryEur(max)}`}
      >
        <div className="relative mx-auto mt-2 h-9 w-full max-w-2xl">
          <div className="absolute bottom-2 left-0 right-0 h-2.5 rounded-full bg-surface-muted/90 shadow-sm">
            {markers.map((m, i) => (
              <span
                key={i}
                className={`absolute top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full shadow-sm ring-2 ring-canvas ${markerBarByVariant[m.variant]}`}
                style={{ left: pct(m.amountEur), marginLeft: "-1px" }}
                title={`${m.label}: ${formatSalaryEur(m.amountEur)}`}
              />
            ))}
            <span
              className="absolute top-1/2 z-10 flex h-6 min-w-[2.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border-2 border-foreground bg-surface-raised px-1.5 text-[10px] font-bold leading-none text-foreground shadow-card sm:text-xs"
              style={{ left: pct(salaryEur) }}
            >
              You
            </span>
          </div>
        </div>
        <div className="mx-auto mt-1 flex max-w-2xl justify-between text-[10px] font-medium tabular-nums text-foreground-muted sm:text-xs">
          <span>€0</span>
          <span>Scale max {formatSalaryEur(max)}</span>
        </div>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-foreground-muted">
        <li className="font-medium text-foreground">
          Your offer: <span className="tabular-nums text-foreground">{formatSalaryEur(salaryEur)}</span> / month
        </li>
        {markers.map((m, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span
              className={`inline-block h-2 w-2 shrink-0 rounded-full ring-2 ring-canvas ${markerBarByVariant[m.variant]}`}
              aria-hidden
            />
            <span className={markerLabelClasses[m.variant]}>
              {m.label}: <span className="tabular-nums font-medium text-foreground">{formatSalaryEur(m.amountEur)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GuideSalaryComparisonExamples({ examples }: { examples: GuideSalaryComparisonExample[] }) {
  return (
    <div className="mt-8 grid gap-6">
      {examples.map((ex, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-card border border-border/90 bg-surface-raised shadow-card ring-1 ring-border/30"
        >
          <div className="flex flex-col gap-1 border-b border-border/80 bg-surface-muted/80 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Example {index + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{ex.title}</h3>
              <p className="mt-1 text-sm text-foreground-muted">{ex.profile}</p>
            </div>
          </div>
          <div className="px-5 py-5">
            {ex.visualization.type === "bar" ? (
              <SalaryComparisonBar
                salaryEur={ex.visualization.salaryEur}
                barMaxEur={ex.visualization.barMaxEur}
                markers={ex.visualization.markers}
              />
            ) : (
              <div className="mt-1 space-y-3">
                <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                  Reduced gross floors (context-specific only)
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                {ex.visualization.columns.map((col, ci) => (
                  <div
                    key={ci}
                    className="rounded-card border border-warning-border/40 bg-gradient-to-br from-warning-muted/90 to-surface-raised p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-warning">{col.title}</p>
                    <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">{col.amount}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{col.note}</p>
                  </div>
                ))}
                </div>
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {ex.badges.map((b, bi) => (
                <div
                  key={bi}
                  className={`inline-flex max-w-full flex-col rounded-lg border px-3 py-2 text-sm shadow-sm ${badgeToneStyles[b.tone]}`}
                >
                  <span className="font-semibold">{b.route}</span>
                  {b.caption ? <span className="mt-0.5 text-xs opacity-90">{b.caption}</span> : null}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground">{ex.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionContent({
  section,
  affiliateBlock,
}: {
  section: GuideSection;
  affiliateBlock?: {
    placement: AffiliatePlacement;
    items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
  };
}) {
  const calloutVariant =
    section.callout?.type === "warning"
      ? "warn"
      : section.callout?.type === "tip"
        ? "success"
        : "info";

  return (
    <div className="w-full space-y-6">
      <h2
        id={section.id}
        className={movingNlSectionH2Class}
      >
        {section.heading}
      </h2>
      <GuideBodyParagraphs body={section.body} />
      {section.salaryComparisonExamples?.length ? (
        <GuideSalaryComparisonExamples examples={section.salaryComparisonExamples} />
      ) : null}
      {section.bullets?.length ? (
        <ul className="grid list-none gap-3 p-0 sm:grid-cols-2">
          {section.bullets.map((bullet, i) => {
            const accents = [
              "border-l-copilot-primary/50 bg-copilot-bg-soft/85",
              "border-l-copilot-accent/55 bg-copilot-bg-light/90",
              "border-l-blue-500/45 bg-copilot-bg-soft/75",
            ] as const;
            return (
              <li
                key={i}
                className={cn(
                  "rounded-xl border-0 py-3.5 pl-4 pr-3 text-sm leading-relaxed text-copilot-text-secondary shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] border-l-4 md:text-base",
                  accents[i % accents.length]
                )}
              >
                {bullet}
              </li>
            );
          })}
        </ul>
      ) : null}
      {section.table?.headers?.length && section.table.rows?.length ? (
        <ContentTable headers={section.table.headers} minWidth="360px">
          {section.table.rows.map((row, ri) => (
            <ContentTableRow key={ri}>
              {row.map((cell, ci) => {
                const isLinkColumn =
                  section.tableLinkColumnIndex !== undefined &&
                  ci === section.tableLinkColumnIndex &&
                  section.tableLinkUrl;
                return (
                  <ContentTableCell key={ci} emphasis={ci === 0}>
                    {isLinkColumn ? (
                      <a
                        href={section.tableLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-link hover:text-link-hover underline"
                      >
                        {cell}
                        <span aria-hidden>→</span>
                      </a>
                    ) : (
                      cell
                    )}
                  </ContentTableCell>
                );
              })}
            </ContentTableRow>
          ))}
        </ContentTable>
      ) : null}
      {section.summaryBox ? (
        <div className="rounded-card border-2 border-warning-border/60 bg-warning-muted/80 p-4 sm:p-5">
          <p className="text-sm font-semibold text-warning">{section.summaryBox.title}</p>
          <p className="mt-1 text-lg font-medium text-warning">{section.summaryBox.value}</p>
          {section.summaryBox.note ? (
            <p className="mt-2 text-sm text-warning">{section.summaryBox.note}</p>
          ) : null}
        </div>
      ) : null}
      {section.image?.src ? (
        <figure className="space-y-2">
          <div className="overflow-hidden rounded-card border border-border bg-surface-muted">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={800}
              height={450}
              className="w-full object-cover object-center"
              unoptimized={!section.image.src.startsWith("/")}
            />
          </div>
          {section.image.caption ? (
            <figcaption className="text-sm text-copilot-text-muted">{section.image.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}
      {section.callout ? (
        <InfoBox
          variant={calloutVariant}
          title={section.callout.title}
        >
          <p>{section.callout.text}</p>
          {section.callout.href ? (
            <p className="mt-2">
              <a
                href={section.callout.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-strong underline hover:text-link-hover"
              >
                {section.callout.linkLabel ?? "View source"}
              </a>
            </p>
          ) : null}
        </InfoBox>
      ) : null}
      {section.ctaBlock ? (
        <div className="mt-6 rounded-card border-2 border-border bg-surface-muted p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-foreground">{section.ctaBlock.title}</h3>
          <p className="mt-2 text-sm text-foreground">{section.ctaBlock.supportingText}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {section.ctaBlock.primaryHref.startsWith("http") ? (
              <a
                href={section.ctaBlock.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-canvas hover:bg-foreground/90"
              >
                {section.ctaBlock.primaryLabel}
                <span aria-hidden className="ml-1">→</span>
              </a>
            ) : (
              <Link
                href={section.ctaBlock.primaryHref}
                className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-canvas hover:bg-foreground/90"
              >
                {section.ctaBlock.primaryLabel}
                <span aria-hidden className="ml-1">→</span>
              </Link>
            )}
            {section.ctaBlock.secondaryLabel && section.ctaBlock.secondaryHref ? (
              section.ctaBlock.secondaryHref.startsWith("http") ? (
                <a
                  href={section.ctaBlock.secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-border-strong bg-surface-raised px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-muted"
                >
                  {section.ctaBlock.secondaryLabel}
                </a>
              ) : (
                <Link
                  href={section.ctaBlock.secondaryHref}
                  className="inline-flex items-center rounded-lg border border-border-strong bg-surface-raised px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-muted"
                >
                  {section.ctaBlock.secondaryLabel}
                </Link>
              )
            ) : null}
          </div>
        </div>
      ) : null}
      {section.internalCta ? (
        <div className="pt-2">
          <Link
            href={section.internalCta.href}
            className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-canvas hover:bg-foreground/90"
          >
            {section.internalCta.label}
          </Link>
        </div>
      ) : null}
      {section.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/80 pt-4">
          {section.links.map((link, i) => (
            <Link key={i} href={link.href} className="text-sm font-medium text-link hover:text-link-hover underline">
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
      {section.personaExample ? (
        <div className="rounded-card border border-danger/30 border-l-4 border-l-danger bg-danger-muted/70 p-4">
          <p className="text-sm font-semibold text-danger">
            {section.personaExample.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-danger">
            {section.personaExample.text}
          </p>
        </div>
      ) : null}
      {affiliateBlock && affiliateBlock.items.length > 0 ? (
        <div className="pt-4">
          <AffiliateBlockView
            placement={affiliateBlock.placement}
            items={affiliateBlock.items}
          />
        </div>
      ) : null}
      {section.services?.length ? (
        <GuideSectionServicesCards services={section.services} />
      ) : null}
    </div>
  );
}

function GuideSidebar({
  data,
  affiliateBlocks,
  toolCtasForSidebar,
  showStartHere = true,
}: {
  data: GuideData;
  affiliateBlocks?: GuidePageTemplateProps["affiliateBlocks"];
  /** Tools to surface in the rail (same set as the main contextual tools strip when capped). */
  toolCtasForSidebar: GuideToolCta[];
  /** Hide when the page already shows a premium at-a-glance summary (avoids redundant “Start here”). */
  showStartHere?: boolean;
}) {
  const { internalLinks } = data;
  const resourcesBlock = data.resourcesAffiliatePlacementId
    ? affiliateBlocks?.[data.resourcesAffiliatePlacementId]
    : null;
  const showMainUsefulServicesSection = Boolean(
    data.resourcesAffiliatePlacementId &&
      affiliateBlocks?.[data.resourcesAffiliatePlacementId]?.items.length
  );

  const startLinks = data.sidebarStartLinks?.length
    ? data.sidebarStartLinks
    : [
        { label: internalLinks.hub.label, href: internalLinks.hub.href },
        { label: internalLinks.pillar.label, href: internalLinks.pillar.href },
      ];

  return (
    <aside className="min-w-0 space-y-6">
      {showStartHere ? (
        <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
          <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
          <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Start here</p>
          <ul className="relative z-[2] mt-4 space-y-2">
            {startLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={movingNlSidebarLinkRowClass}>
                  <span className="min-w-0">{link.label}</span>
                  <span className={movingNlSidebarLinkChevronClass} aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {toolCtasForSidebar.length ? (
        <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
          <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
          <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Tools</p>
          <ul className="relative z-[2] mt-4 space-y-2">
            {toolCtasForSidebar.map((cta) => (
              <li key={cta.key ?? cta.href}>
                <Link href={cta.href} className={movingNlSidebarLinkRowClass}>
                  <span className="min-w-0 truncate">{cta.label}</span>
                  <span className={movingNlSidebarLinkChevronClass} aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {resourcesBlock && resourcesBlock.items.length > 0 && !showMainUsefulServicesSection ? (
        <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
          <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
          <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Useful services</p>
          <h3 className="relative z-[2] mt-2 text-sm font-semibold text-copilot-text-primary">
            {resourcesBlock.placement.title}
          </h3>
          {resourcesBlock.placement.intro ? (
            <p className="relative z-[2] mt-1.5 text-xs leading-relaxed text-copilot-text-secondary">
              {resourcesBlock.placement.intro}
            </p>
          ) : null}
          <div className="relative z-[2] mt-4">
            <AffiliateCompactList
              variant="copilot"
              items={resourcesBlock.items.map((i) => ({ provider: i.provider, reason: i.reason }))}
            />
          </div>
          <p className="relative z-[2] mt-4 text-[10px] leading-snug text-copilot-text-muted">
            {resourcesBlock.placement.disclosure}
          </p>
        </div>
      ) : null}
    </aside>
  );
}

export function GuidePageTemplate({
  data,
  affiliateBlocks = {},
  canonicalUrl,
  postContentMonetization,
  preFaqSoftCta,
  monetizationPageType = "guide",
  contextualAffiliateAfterFirstSection,
  contextualAffiliateBeforeNextSteps,
}: GuidePageTemplateProps) {
  const toolCtasDeduped = toolCtasDedupedAgainstFeatured(data.toolCtas, data.featuredTools);
  const contextualTools = buildContextualToolCards(data, toolCtasDeduped);
  const moveSignature = buildMoveGuideSignatureModel(data);

  const shareUrl = canonicalUrl ?? "";
  const pageId = data.path || data.slug;
  const showActionBar = Boolean(shareUrl);
  const monetizationPolicy = getMonetizationPolicy(monetizationPageType);
  const autoPreFaqPreset =
    preFaqSoftCta === undefined && monetizationPolicy.surfaces.preFaqSoftCta
      ? resolvePreFaqPresetForGuide(data.slug, data.path)
      : null;
  const resolvedPreFaqSoftCta =
    preFaqSoftCta !== undefined ? preFaqSoftCta : autoPreFaqPreset ? <PresetSoftCTA preset={autoPreFaqPreset} /> : null;
  const showPreFaqSoftCta =
    resolvedPreFaqSoftCta != null && (Boolean(data.faq?.length) || preFaqSoftCta !== undefined);

  return (
    <GuidePageRoot>
      <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
        <PillarGuideHeroRegion>
          <PageHero
            movingPillarIdentity
            heroTitleDensity="tight"
            eyebrowBandClassName={sitePillarFramedHeroTopBandClass}
            contentGutterClassName={sitePillarFramedHeroGutterXClass}
            eyebrow={data.hero?.eyebrow ?? "Guide"}
            title={data.title}
            subtitle={data.subtitle ?? data.description}
            heroImage={
              data.hero?.image
                ? {
                    src: data.hero.image.src,
                    alt: data.hero.image.alt,
                    caption: data.hero.image.caption,
                    priority: data.hero.image.priority,
                  }
                : null
            }
            shareUrl={shareUrl}
            pageId={pageId}
            afterSubtitle={
              data.hero?.badges?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.hero.badges.map((badge, i) => (
                    <span
                      key={`badge-${i}-${String(badge).slice(0, 20)}`}
                      className="rounded-full border border-border/60 bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-foreground-muted"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : undefined
            }
            pdfDownload={
              CHECKLIST_PDF_SLUGS.includes(data.slug as (typeof CHECKLIST_PDF_SLUGS)[number])
                ? {
                    href: `/api/checklist-pdf/${data.slug}`,
                    filename:
                      data.slug === "moving-checklist-netherlands"
                        ? "moving-checklist-netherlands.pdf"
                        : "documents-needed-to-move-netherlands.pdf",
                  }
                : undefined
            }
          />
          {data.heroCta ? (
            <div className={cn("relative mt-5 overflow-hidden sm:mt-6", movingNlShellPathwaysClass)}>
              <div className={movingNlPathwaysBackdropClass} aria-hidden />
              <div className="relative z-[2]">
                <h2 className="text-xl font-bold text-copilot-text-primary">{data.heroCta.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary sm:text-base">
                  {data.heroCta.supportingText}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link href={data.heroCta.primaryCtaHref} className={guidePrimaryCtaClass}>
                    {data.heroCta.primaryCtaLabel}
                    {!String(data.heroCta.primaryCtaLabel).trim().endsWith("→") ? (
                      <span aria-hidden className="ml-1">→</span>
                    ) : null}
                  </Link>
                  {data.heroCta.secondaryCtas?.length
                    ? data.heroCta.secondaryCtas.map((cta) => (
                        <Link key={cta.href} href={cta.href} className={guideSecondaryCtaClass}>
                          {cta.label}
                        </Link>
                      ))
                    : data.heroCta.secondaryCtaHref && data.heroCta.secondaryCtaLabel
                      ? (
                        <Link href={data.heroCta.secondaryCtaHref} className={guideSecondaryCtaClass}>
                          {data.heroCta.secondaryCtaLabel}
                        </Link>
                      )
                      : null}
                </div>
                {data.heroCta.supportingLinks?.length ? (
                  <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-copilot-text-secondary">
                    {data.heroCta.supportingLinks.map((link, i) => (
                      <span key={link.href} className="flex items-center gap-x-3">
                        {i > 0 ? <span className="text-copilot-primary/35" aria-hidden>·</span> : null}
                        <Link
                          href={link.href}
                          className="font-semibold text-copilot-primary transition-colors hover:text-copilot-primary-strong hover:underline"
                        >
                          {link.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                ) : null}
                {!data.heroCta.supportingLinks?.length && data.heroCta.tertiaryCtaHref && data.heroCta.tertiaryCtaLabel ? (
                  <p className="mt-4">
                    <Link
                      href={data.heroCta.tertiaryCtaHref}
                      className="text-sm font-semibold text-copilot-primary transition-colors hover:text-copilot-primary-strong hover:underline"
                    >
                      {data.heroCta.tertiaryCtaLabel}
                    </Link>
                  </p>
                ) : null}
                {!data.heroCta.supportingLinks?.length && data.heroCta.helperLinkHref && data.heroCta.helperLinkLabel ? (
                  <p className="mt-2">
                    <Link
                      href={data.heroCta.helperLinkHref}
                      className="text-sm font-semibold text-copilot-primary transition-colors hover:text-copilot-primary-strong hover:underline"
                    >
                      {data.heroCta.helperLinkLabel}
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </PillarGuideHeroRegion>

        <div className="py-6 md:py-8">
          <PillarMainStack className="mt-2 space-y-4 sm:mt-3 sm:space-y-5 md:space-y-6">
          {guideJsonAtGlanceBlock(data)}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(360px,1fr)]">
            <main className="min-w-0 w-full">
              {/* Sidebar on mobile: compact block near top */}
              <div className="mb-8 lg:hidden">
                <GuideSidebar
                  data={data}
                  affiliateBlocks={affiliateBlocks}
                  toolCtasForSidebar={contextualTools.map((t) => ({
                    key: t.key,
                    href: t.href,
                    label: t.title,
                    description: t.description,
                  }))}
                  showStartHere={!guideHasAtGlance(data)}
                />
              </div>

              {moveSignature ? (
                <div className="mb-8 w-full lg:mb-10">
                  <MoveGuideSignatureDark model={moveSignature} />
                </div>
              ) : null}

              <article className="w-full max-w-full">
                <GuideKeySections>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {data.sections.map((section, sectionIndex) => (
                  <Fragment key={section.id}>
                  <section aria-labelledby={section.id} className="min-w-0 space-y-4 sm:space-y-5">
                    <MoveGuideSectionPanel>
                    {section.id === "visa-route" && section.visaRoutes ? (
                      <GuideSectionVisaRoutes
                        section={
                          section as GuideSection & {
                            visaRoutes: { commonRoutes: string[]; notes: string[] };
                            callout?: GuideSection["callout"];
                            links?: GuideSection["links"];
                          }
                        }
                      />
                    ) : section.id === "timeline" && section.timelineStages ? (
                      <GuideSectionTimeline
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        stages={section.timelineStages}
                      />
                    ) : section.steps?.length ? (
                      <GuideSectionNumberedSteps
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        steps={section.steps}
                        callout={section.callout}
                        ctaBlock={section.ctaBlock}
                        links={section.links}
                      />
                    ) : section.insurerComparisons?.length ? (
                      <GuideSectionInsurerComparisons
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        insurerComparisons={section.insurerComparisons}
                      />
                    ) : section.bankComparisons?.length ? (
                      <GuideSectionBankComparisons
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        bankComparisons={section.bankComparisons}
                      />
                    ) : section.id === "example-budgets" && data.exampleBudgets?.length ? (
                      <>
                        <h2
                          id={section.id}
                          className={movingNlSectionH2Class}
                        >
                          {section.heading}
                        </h2>
                        <p className="mt-4 text-foreground">
                          The following are illustrative example budgets for planning only. Your actual relocation costs will depend on your situation.
                        </p>
                        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {data.exampleBudgets.map((budget, i) => (
                            <li key={i} className="flex flex-col rounded-card border border-border bg-surface-raised p-5 shadow-card">
                              <h3 className="text-base font-semibold text-foreground">{budget.title}</h3>
                              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground">
                                {budget.items.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                              <p className="mt-4 text-sm font-semibold text-foreground">Estimated total: {budget.totalRange}</p>
                              {budget.note ? (
                                <p className="mt-2 text-xs text-foreground-muted">{budget.note}</p>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : section.id === "country-examples" && data.documentLegalizationCountryExamples?.length ? (
                      <GuideSectionCountryExamples
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        examples={data.documentLegalizationCountryExamples}
                        disclaimer="These are examples only. Always check the official Netherlands Worldwide page for the country that issued your document."
                      />
                    ) : section.id === "country-examples" && data.documentTranslationCountryExamples?.length ? (
                      <GuideSectionCountryExamples
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        examples={data.documentTranslationCountryExamples}
                        disclaimer="These are examples only. Always check the country-specific legalisation page for the country that issued your document."
                      />
                    ) : section.id === "document-types" && data.documentTranslationDocumentTypes?.length ? (
                      <GuideSectionDocumentTypes
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        documentTypes={data.documentTranslationDocumentTypes}
                      />
                    ) : section.id === "find-translator" && data.documentTranslationTranslatorResources?.length ? (
                      <div className="w-full space-y-6">
                        <h2 id={section.id} className={movingNlSectionH2Class}>
                          {section.heading}
                        </h2>
                        <GuideBodyParagraphs body={section.body} />
                        {section.bullets?.length ? (
                          <ul className="list-inside list-disc space-y-1 text-foreground">
                            {section.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                        <GuideSectionTranslatorResources resources={data.documentTranslationTranslatorResources} />
                        <p className="text-xs text-foreground-muted">
                          Included for reference. Verify current services and pricing on each provider&apos;s website.
                        </p>
                        {section.links?.length ? (
                          <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/80 pt-4">
                            {section.links.map((link) => (
                              <Link key={link.href} href={link.href} className="text-sm font-medium text-link hover:text-link-hover underline">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : section.id === "costs" && data.documentTranslationCostRanges?.length ? (
                      <GuideSectionTranslationCosts
                        id={section.id}
                        heading={section.heading}
                        body={section.body}
                        costRanges={data.documentTranslationCostRanges}
                        timing={data.documentTranslationTiming}
                        disclaimer={data.documentTranslationCostDisclaimer}
                      />
                    ) : (
                      <SectionContent
                        section={section}
                        affiliateBlock={
                          section.affiliatePlacementId
                            ? affiliateBlocks[section.affiliatePlacementId]
                            : undefined
                        }
                      />
                    )}
                    </MoveGuideSectionPanel>
                    {data.midPageCta &&
                      data.midPageCtaAfterSectionId === section.id ? (
                      <div className={cn("mt-8 w-full", toolMainSurfaceClass)}>
                        {data.midPageCta.badge ? (
                          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                            {data.midPageCta.badge}
                          </p>
                        ) : null}
                        <h2 className="mt-2 text-xl font-semibold text-foreground">{data.midPageCta.title}</h2>
                        <p className="mt-2 text-foreground-muted">{data.midPageCta.description}</p>
                        <Link href={data.midPageCta.ctaHref} className={cn("mt-5 inline-flex", guidePrimaryCtaClass)}>
                          {data.midPageCta.ctaLabel}
                          {!String(data.midPageCta.ctaLabel).trim().endsWith("→") ? (
                            <span aria-hidden className="ml-1">→</span>
                          ) : null}
                        </Link>
                      </div>
                    ) : null}
                  </section>
                  {sectionIndex === 0 &&
                  monetizationPolicy.surfaces.affiliateSection &&
                  contextualAffiliateAfterFirstSection ? (
                    <div className="mt-6 w-full max-w-full scroll-mt-24">{contextualAffiliateAfterFirstSection}</div>
                  ) : null}
                  </Fragment>
                ))}
                </div>
                </GuideKeySections>
              </article>

              <div className="mt-6 flex w-full flex-col gap-5 md:gap-6">
              {data.midPageCta && !data.midPageCtaAfterSectionId ? (
                <div className={cn("w-full", toolMainSurfaceClass)}>
                  {data.midPageCta.badge ? (
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                      {data.midPageCta.badge}
                    </p>
                  ) : null}
                  <h2 className="mt-2 text-xl font-semibold text-foreground">{data.midPageCta.title}</h2>
                  <p className="mt-2 text-foreground-muted">{data.midPageCta.description}</p>
                  <Link href={data.midPageCta.ctaHref} className={cn("mt-5 inline-flex", guidePrimaryCtaClass)}>
                    {data.midPageCta.ctaLabel}
                    {!String(data.midPageCta.ctaLabel).trim().endsWith("→") ? (
                      <span aria-hidden className="ml-1">→</span>
                    ) : null}
                  </Link>
                </div>
              ) : null}

              {contextualTools.length || data.toolsCtaBand ? (
                <div className="flex w-full flex-col gap-4 md:gap-5">
                  {contextualTools.length ? (
                    <PillarGuideToolsSection
                      id="tools"
                      title="Helpful tools"
                      subtitle={
                        data.toolsSectionIntro ??
                        "Use these tools at the right moment in your move—the same utility cards as the main Move hub."
                      }
                      compact
                      className="w-full scroll-mt-24"
                    >
                      {contextualTools.map((t) => (
                        <ToolCard
                          key={t.key ?? t.href}
                          title={t.title}
                          description={t.description}
                          href={t.href}
                          ctaLabel="Open"
                          compact
                        />
                      ))}
                    </PillarGuideToolsSection>
                  ) : null}

                  {data.toolsCtaBand ? (
                    <GuideToolsRegion>
                      <div className={cn("relative w-full overflow-hidden", movingNlShellPathwaysClass)}>
                        <div className={movingNlPathwaysBackdropClass} aria-hidden />
                        <div className={cn("relative z-[2]", guideCtaBandClass)}>
                          <h2 className="text-xl font-bold text-copilot-text-primary">{data.toolsCtaBand.title}</h2>
                          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary sm:text-base">
                            {data.toolsCtaBand.body}
                          </p>
                          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                            <Link href={data.toolsCtaBand.primaryHref} className={guidePrimaryCtaClass}>
                              {data.toolsCtaBand.primaryLabel}
                              {!String(data.toolsCtaBand.primaryLabel).trim().endsWith("→") ? (
                                <span aria-hidden className="ml-1">→</span>
                              ) : null}
                            </Link>
                            {data.toolsCtaBand.secondaryHref && data.toolsCtaBand.secondaryLabel ? (
                              <Link href={data.toolsCtaBand.secondaryHref} className={guideSecondaryCtaClass}>
                                {data.toolsCtaBand.secondaryLabel}
                              </Link>
                            ) : null}
                            {data.toolsCtaBand.tertiaryHref && data.toolsCtaBand.tertiaryLabel ? (
                              <Link href={data.toolsCtaBand.tertiaryHref} className={guideSecondaryCtaClass}>
                                {data.toolsCtaBand.tertiaryLabel}
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </GuideToolsRegion>
                  ) : null}
                </div>
              ) : null}

              {data.exampleScenarios?.length ? (
                <GuideScenario>
                  <SectionBlock
                    id="example-scenarios"
                    title={data.scenariosSectionTitle ?? "Example scenarios"}
                    subtitle={data.scenariosSectionIntro}
                    compact
                    className="w-full scroll-mt-24"
                  >
                    <ExampleScenarioCards items={data.exampleScenarios} />
                  </SectionBlock>
                </GuideScenario>
              ) : null}

              {(showActionBar || CHECKLIST_PDF_SLUGS.includes(data.slug as (typeof CHECKLIST_PDF_SLUGS)[number])) ? (
                <div className="w-full">
                  <ContentActionBar
                    url={shareUrl}
                    title={data.title}
                    pageId={pageId}
                    variant="bottom"
                    pdfDownload={
                      CHECKLIST_PDF_SLUGS.includes(data.slug as (typeof CHECKLIST_PDF_SLUGS)[number])
                        ? {
                            href: `/api/checklist-pdf/${data.slug}`,
                            filename:
                              data.slug === "moving-checklist-netherlands"
                                ? "moving-checklist-netherlands.pdf"
                                : "documents-needed-to-move-netherlands.pdf",
                          }
                        : undefined
                    }
                    className="mb-4"
                  />
                </div>
              ) : null}
              {showPreFaqSoftCta ? resolvedPreFaqSoftCta : null}
              {data.faq?.length ? (
                <PillarGuideFaqRegion>
                  <FAQBlock id="faq" eyebrow="Support" title="FAQ" items={data.faq} maxItems={20} />
                </PillarGuideFaqRegion>
              ) : null}

              {(monetizationPolicy.surfaces.recommendationBlock ||
                monetizationPolicy.surfaces.bestProvidersMiniList ||
                monetizationPolicy.surfaces.affiliateSection) &&
              postContentMonetization
                ? postContentMonetization
                : null}

              {monetizationPolicy.surfaces.postFaqLegacyUsefulServices &&
              data.resourcesAffiliatePlacementId &&
              affiliateBlocks[data.resourcesAffiliatePlacementId]?.items.length &&
              !guideHasMonetizationAfterContent(data.slug) ? (
                <section
                  id="useful-services"
                  className="w-full scroll-mt-24"
                  aria-labelledby={data.servicesSectionTitle ? "useful-services-heading" : undefined}
                >
                  <MoveGuideSectionPanel>
                    {data.servicesSectionTitle ? (
                      <h2 id="useful-services-heading" className={movingNlSectionH2Class}>
                        {data.servicesSectionTitle}
                      </h2>
                    ) : null}
                    {data.servicesIntro ? (
                      <p className="mb-3 max-w-3xl text-sm text-copilot-text-secondary md:text-base">{data.servicesIntro}</p>
                    ) : null}
                    <AffiliateBlockView
                      placement={affiliateBlocks[data.resourcesAffiliatePlacementId].placement}
                      items={affiliateBlocks[data.resourcesAffiliatePlacementId].items}
                    />
                  </MoveGuideSectionPanel>
                </section>
              ) : null}

              {monetizationPolicy.surfaces.affiliateSection && contextualAffiliateBeforeNextSteps ? (
                <div className="mt-8 w-full scroll-mt-24">{contextualAffiliateBeforeNextSteps}</div>
              ) : null}

              {data.internalLinks?.related?.length || data.endCta || data.exploreNextCards?.length ? (
                <PillarGuideNextStepsRegion>
                  <div className="flex w-full flex-col gap-5 md:gap-6">
                  {data.internalLinks?.related?.length ? (
                    <>
                      <NextSteps
                        id="related-guides"
                        compact
                        variant="progression"
                        movingHubPremium
                        title={data.relatedGuidesSectionTitle ?? "Related guides"}
                        subtitle="Continue with guides that match where you are in your move."
                        items={data.internalLinks.related.slice(0, 3).map((link) => ({
                          label: link.label,
                          href: link.href,
                          description: "Practical next read for your Netherlands relocation.",
                        }))}
                      />
                      {data.internalLinks.related.length > 3 ? (
                        <SectionBlock id="related-guides-more" title="More related guides" compact className="w-full scroll-mt-24">
                          <div className="grid w-full gap-3 sm:grid-cols-2">
                            {data.internalLinks.related.slice(3).map((link) => (
                              <CardLink
                                key={link.href}
                                href={link.href}
                                title={link.label}
                                description="Keep planning your Netherlands move."
                              />
                            ))}
                          </div>
                        </SectionBlock>
                      ) : null}
                    </>
                  ) : null}

                  {data.endCta ? (
                    <div className={cn("relative w-full overflow-hidden", movingNlShellPathwaysClass)}>
                      <div className={movingNlPathwaysBackdropClass} aria-hidden />
                      <div className={cn("relative z-[2]", guideCtaBandClass)}>
                        <h2 className="text-xl font-bold text-copilot-text-primary">{data.endCta.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary sm:text-base">
                          {data.endCta.supportingText}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                          <Link href={data.endCta.ctaHref} className={guidePrimaryCtaClass}>
                            {data.endCta.ctaLabel}
                            {!String(data.endCta.ctaLabel).trim().endsWith("→") ? (
                              <span aria-hidden className="ml-1">→</span>
                            ) : null}
                          </Link>
                          {data.endCta.secondaryCtaLabel && data.endCta.secondaryCtaHref ? (
                            <Link href={data.endCta.secondaryCtaHref} className={guideSecondaryCtaClass}>
                              {data.endCta.secondaryCtaLabel}
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {data.exploreNextCards?.length ? (
                    <SectionBlock
                      id="explore-next"
                      title="Plan your move further"
                      compact
                      className="w-full scroll-mt-24"
                    >
                      <div className="mt-2 grid w-full gap-5 sm:grid-cols-2">
                        {data.exploreNextCards.map((card) => (
                          <CardLink
                            key={card.ctaHref}
                            href={card.ctaHref}
                            title={card.title}
                            description={card.description}
                            badge="Next step"
                          />
                        ))}
                      </div>
                    </SectionBlock>
                  ) : null}
                  </div>
                </PillarGuideNextStepsRegion>
              ) : null}

              {data.disclosure ? (
                <p className="border-t border-border pt-5 text-xs leading-relaxed text-foreground-faint">{data.disclosure}</p>
              ) : null}
              {data.lastUpdated ? (
                <p className="mt-2 text-xs text-foreground-faint">{data.lastUpdated}</p>
              ) : null}
              </div>
            </main>

            <aside
              className="hidden w-full lg:block"
              aria-label="Page navigation and tools"
            >
              <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-8 py-1">
                {data.tocItems?.length ? (
                  <PillarTOC items={data.tocItems} tone="support" />
                ) : null}
                <GuideSidebar
                  data={data}
                  affiliateBlocks={affiliateBlocks}
                  toolCtasForSidebar={contextualTools.map((t) => ({
                    key: t.key,
                    href: t.href,
                    label: t.title,
                    description: t.description,
                  }))}
                  showStartHere={!guideHasAtGlance(data)}
                />
              </div>
            </aside>
          </div>
          </PillarMainStack>
        </div>
      </Container>
    </GuidePageRoot>
  );
}
