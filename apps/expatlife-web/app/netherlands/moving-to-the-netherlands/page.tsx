import type { Metadata } from "next";
import Link from "next/link";
import {
  getNlMovingPillarContent,
  resolveLinkFromRegistry,
  resolveReadingOrder,
} from "@expatlife/content";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import type { ResolvedScenario } from "@/components/content/PillarScenarioCards";
import { GuidePageTemplate } from "@/components/page/page-templates";
import {
  AtGlanceCard,
  ChooseYourPath,
  FAQBlock,
  NextSteps,
  PageHero,
  PillarDarkStagesBand,
  PillarEssentialsSurface,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarGuideScenarioRegion,
  PillarGuideToolsSection,
  PillarJourneyStack,
  PracticalEssentials,
  SectionBlock,
  StageCards,
  ToolCard,
} from "@/components/page/pillar-template";
import { getSiteOrigin } from "@/lib/site-origin";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { movingNlSectionH2StagesSignatureClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { PresetSoftCTA } from "@/src/components/soft-cta/PresetSoftCTA";
import { PillarMovingHubMonetization } from "@/src/components/monetization/PillarMovingHubMonetization";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();

function pillarHeroToEditorial(
  raw: string | null | undefined,
  alt?: string | null | undefined
): EditorialHeroImage | null {
  if (raw == null || raw === "") return null;
  const trimmed = alt?.trim();
  return {
    src: raw,
    alt: trimmed && trimmed.length > 0 ? trimmed : "Hero image for this guide",
    priority: true,
  };
}

function formatDisplayMonthYear(isoDate: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!m) return isoDate.trim() || "—";
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (Number.isNaN(d.getTime())) return isoDate.trim() || "—";
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function resolveScenarios(
  scenarios: Array<{
    id: string;
    chips?: string[];
    personaTitle: string;
    whatMatters: string[];
    readingOrder: string[];
    startTool: { key: string; prefill?: Record<string, string> };
    unknownsToConfirm: string[];
  }>,
  linkRegistry: Parameters<typeof resolveReadingOrder>[0]
): ResolvedScenario[] {
  return scenarios.map((s) => {
    const startToolLink =
      s.startTool?.key != null && s.startTool.key !== ""
        ? resolveLinkFromRegistry(linkRegistry, s.startTool.key) ?? null
        : null;
    return {
      id: s.id,
      chips: s.chips,
      personaTitle: s.personaTitle,
      whatMatters: s.whatMatters,
      readingOrderLinks: resolveReadingOrder(linkRegistry, s.readingOrder),
      startToolLink,
      unknownsToConfirm: s.unknownsToConfirm,
    };
  });
}

export const metadata: Metadata = buildSocialMetadata({
  title: "Moving to the Netherlands: checklist, timeline, and what to prepare",
  description:
    "Planning to move to the Netherlands? Learn what to prepare before you move, what to do after arrival, and how to settle in during your first 90 days. Includes practical guides, tools, and checklists.",
  path: "/netherlands/moving-to-the-netherlands/",
  ogType: "article",
});

type PageProps = { searchParams?: Promise<{ from?: string }> | { from?: string } };

export default async function MovingToNetherlandsPillarPage(_props: PageProps) {
  /** Hero uses `nl-informal-en` by default (see `getNlMovingPillarContent` in `@expatlife/content`). */
  const content = await getNlMovingPillarContent();
  const {
    meta,
    scenarios,
    faq,
    linkRegistry,
    timelineStages,
    toolsStrip,
    sections,
  } = content;
  const resolvedScenarios = resolveScenarios(scenarios, linkRegistry);

  const breadcrumbCrumbs = meta.breadcrumbs.map((b) => ({
    name: b.label,
    item: new URL(b.href, baseUrl).toString(),
  }));

  const canonicalUrl = new URL(meta.canonicalPath, baseUrl).toString();
  const { pageHeader, overview, whoThisGuideFor } = sections;
  const heroSubtitleMarkdown = pageHeader.subtitle.includes("**");
  const stepSummary = sections.stepByStepSummary;
  const practicalEssentials = sections.practicalEssentials;
  const scenarioPathsIntro = sections.scenarioPaths?.intro ?? "";

  const hub = resolveLinkFromRegistry(linkRegistry, "hub");
  const bsn = resolveLinkFromRegistry(linkRegistry, "bsn");
  const compareVisas = resolveLinkFromRegistry(linkRegistry, "compare_visas");
  const visasOrientation = resolveLinkFromRegistry(linkRegistry, "visas_residency_orientation");
  const residencePermitsGuide = resolveLinkFromRegistry(linkRegistry, "residence_permits_guide");
  const extensionsChangesGuide = resolveLinkFromRegistry(linkRegistry, "extensions_changes_guide");

  /** Contextual tools (moving + utilities + first payslip literacy); capped to avoid crowding the band. */
  const helpfulTools = toolsStrip.slice(0, 5);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={meta.seo.title}
        description={meta.seo.description}
        dateModified={meta.lastUpdated}
        urlPath={meta.canonicalPath}
      />
      <FaqPageJsonLd items={faq.slice(0, 5).map((i) => ({ q: i.q, a: i.a }))} />

      <GuidePageTemplate
        scenarioBeforeKeySections
        mainStackClassName="mt-2 space-y-4 sm:mt-3 sm:space-y-5 md:space-y-6"
        wrapContent={(inner) => (
          <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>{inner}</Container>
        )}
        hero={
          <PillarGuideHeroRegion>
            <PageHero
              movingPillarIdentity
              heroTitleDensity="tight"
              eyebrowBandClassName={sitePillarFramedHeroTopBandClass}
              contentGutterClassName={sitePillarFramedHeroGutterXClass}
              eyebrow={pageHeader.eyebrow}
              title={pageHeader.title}
              subtitle={pageHeader.subtitle}
              subtitleMarkdown={heroSubtitleMarkdown}
              heroImage={pillarHeroToEditorial(pageHeader.heroImage, pageHeader.heroImageAlt)}
              afterSubtitle={
                <>
                  {visasOrientation ? (
                    <p className="max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
                      Not sure which <strong className="font-semibold text-copilot-text-primary">permit or residence route</strong> fits? Start with{" "}
                      <Link
                        href={visasOrientation.href}
                        className="font-semibold text-copilot-primary underline-offset-2 hover:text-copilot-primary-strong hover:underline"
                      >
                        {visasOrientation.title}
                      </Link>
                      {compareVisas ? (
                        <>
                          {" "}
                          — then open{" "}
                          <Link
                            href={compareVisas.href}
                            className="font-semibold text-copilot-primary underline-offset-2 hover:text-copilot-primary-strong hover:underline"
                          >
                            {compareVisas.title}
                          </Link>{" "}
                          when you want a side-by-side comparison.
                        </>
                      ) : null}
                    </p>
                  ) : null}
                  {residencePermitsGuide ? (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
                      For <strong className="font-semibold text-copilot-text-primary">permit purpose, renewal, and life after approval</strong>, read{" "}
                      <Link
                        href={residencePermitsGuide.href}
                        className="font-semibold text-copilot-primary underline-offset-2 hover:text-copilot-primary-strong hover:underline"
                      >
                        {residencePermitsGuide.title}
                      </Link>
                      —same Move pillar, focused on how residence permits work in practice.
                    </p>
                  ) : null}
                  {extensionsChangesGuide ? (
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
                      Already in the Netherlands or planning{" "}
                      <strong className="font-semibold text-copilot-text-primary">renewals, job changes, or other life shifts</strong>? Use{" "}
                      <Link
                        href={extensionsChangesGuide.href}
                        className="font-semibold text-copilot-primary underline-offset-2 hover:text-copilot-primary-strong hover:underline"
                      >
                        {extensionsChangesGuide.title}
                      </Link>{" "}
                      to connect permit timing with practical next steps across the Move, Work, Money, and Living guides.
                    </p>
                  ) : null}
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
                    If your main question is whether the{" "}
                    <strong className="font-semibold text-copilot-text-primary">basis of your stay may be changing</strong>, open{" "}
                    <Link
                      href="/netherlands/moving/status-changes/"
                      className="font-semibold text-copilot-primary underline-offset-2 hover:text-copilot-primary-strong hover:underline"
                    >
                      Status changes in the Netherlands
                    </Link>{" "}
                    for the practical guide to work, study, family, and self-employment route shifts.
                  </p>
                </>
              }
              shareUrl={canonicalUrl}
              pageId={meta.canonicalPath}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <AtGlanceCard
              id="at-a-glance"
              who={whoThisGuideFor.audiences ?? []}
              timeline="Varies by visa route, housing market, and employer timing."
              steps={stepSummary?.steps?.slice(0, 3) ?? []}
              footer={
                <span>
                  Last updated {formatDisplayMonthYear(meta.lastUpdated)}. {overview.disclaimerItems[0] ?? ""}
                </span>
              }
            />
          </PillarGuideAtGlanceRegion>
        }
        scenario={
          <PillarGuideScenarioRegion>
            <ChooseYourPath intro={scenarioPathsIntro} scenarios={resolvedScenarios} />
          </PillarGuideScenarioRegion>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="helpful-tools"
            title="Helpful tools"
            subtitle="Checklist, documents, household utilities planning, first payslip literacy, and first weeks after landing."
          >
            {helpfulTools.map((t) => (
              <ToolCard
                key={t.href}
                title={t.title}
                description={t.description}
                href={t.href}
                ctaLabel="Open"
                compact
              />
            ))}
          </PillarGuideToolsSection>
        }
        keySections={
          <PillarJourneyStack variant="guide">
            <PillarDarkStagesBand>
              <SectionBlock
                className="relative z-10"
                contentClassName="mt-8 sm:mt-9"
                id="move-stages"
                titleClassName={movingNlSectionH2StagesSignatureClass}
                tone="onDark"
                title="Your move in 3 stages"
                subtitle={overview.overviewParagraph}
              >
                <StageCards variant="copilotDark" stages={timelineStages} maxBulletsPerStage={3} />
              </SectionBlock>
            </PillarDarkStagesBand>

            {practicalEssentials ? (
              <PillarEssentialsSurface>
                <SectionBlock className="pt-0" id="essentials" title="Practical essentials" subtitle={practicalEssentials.intro}>
                  <PracticalEssentials
                    documents={practicalEssentials.documents}
                    banking={practicalEssentials.banking}
                    housing={practicalEssentials.housing}
                    linkRegistry={linkRegistry}
                  />
                </SectionBlock>
              </PillarEssentialsSurface>
            ) : null}
          </PillarJourneyStack>
        }
        nextSteps={
          <PillarGuideNextStepsRegion>
            <NextSteps
              id="next-steps"
              compact
              variant="progression"
              movingHubPremium
              maxItems={6}
              items={[
                ...(visasOrientation
                  ? [
                      {
                        label: visasOrientation.title,
                        href: visasOrientation.href,
                        description: "Map work, study, family, and ZZP routes before you dive into forms.",
                      },
                    ]
                  : []),
                ...(residencePermitsGuide
                  ? [
                      {
                        label: residencePermitsGuide.title,
                        href: residencePermitsGuide.href,
                        description: "Permit purpose, renewal, and practical life after approval—next to the route overview.",
                      },
                    ]
                  : []),
                ...(extensionsChangesGuide
                  ? [
                      {
                        label: extensionsChangesGuide.title,
                        href: extensionsChangesGuide.href,
                        description: "After arrival: expiries, job and family changes, and how they meet Work, Money, and Living tools.",
                      },
                    ]
                  : []),
                {
                  label: "Status changes in the Netherlands",
                  href: "/netherlands/moving/status-changes/",
                  description: "Orientation for work, study, family, and self-employment shifts that may change the basis of stay.",
                },
                ...(hub
                  ? [{ label: hub.title, href: hub.href, description: "Full Move pillar: scenarios, stages, tools, and FAQs." }]
                  : []),
                ...(bsn
                  ? [{ label: bsn.title, href: bsn.href, description: "Address registration and your citizen number." }]
                  : []),
                ...(compareVisas
                  ? [
                      {
                        label: compareVisas.title,
                        href: compareVisas.href,
                        description: "Match a permit type to your situation.",
                      },
                    ]
                  : [
                      {
                        label: "Compare visa routes",
                        href: "/netherlands/visa/compare-visas",
                        description: "Match a permit type to your situation.",
                      },
                    ]),
              ]}
            />
          </PillarGuideNextStepsRegion>
        }
        faq={
          <PillarGuideFaqRegion>
            <div className="space-y-6 sm:space-y-8">
              <PresetSoftCTA preset="movingChecklistAndFirst90" />
              <FAQBlock id="faq" items={faq} maxItems={5} />
            </div>
          </PillarGuideFaqRegion>
        }
        afterFaq={<PillarMovingHubMonetization />}
      />
    </>
  );
}
