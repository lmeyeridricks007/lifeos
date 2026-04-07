import type { NlFlagshipPillarContent } from "@expatlife/content";
import { resolveLinkFromRegistry, resolveReadingOrder } from "@expatlife/content";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import type { ResolvedScenario } from "@/components/content/PillarScenarioCards";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
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
import { movingNlSectionH2StagesSignatureClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";

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
  scenarios: NlFlagshipPillarContent["scenarios"],
  linkRegistry: NlFlagshipPillarContent["linkRegistry"]
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

export type NetherlandsFlagshipPillarPageProps = {
  content: NlFlagshipPillarContent;
  baseUrl: string;
};

/**
 * Thin-template pillar layout shared by topic flagships (housing, taxes, work).
 * Mirrors `/netherlands/moving-to-the-netherlands` assembly without the moving-only link registry keys.
 */
export function NetherlandsFlagshipPillarPage({ content, baseUrl }: NetherlandsFlagshipPillarPageProps) {
  const {
    meta,
    scenarios,
    faq,
    linkRegistry,
    timelineStages,
    toolsStrip,
    sections,
    nextSteps,
    stagesTitle,
  } = content;
  const resolvedScenarios = resolveScenarios(scenarios, linkRegistry);

  const breadcrumbCrumbs = meta.breadcrumbs.map((b) => ({
    name: b.label,
    item: new URL(b.href.startsWith("/") ? b.href : `/${b.href}`, baseUrl).toString(),
  }));

  const canonicalUrl = new URL(meta.canonicalPath.startsWith("/") ? meta.canonicalPath : `/${meta.canonicalPath}`, baseUrl).toString();
  const { pageHeader, overview, whoThisGuideFor } = sections;
  const stepSummary = sections.stepByStepSummary;
  const practicalEssentials = sections.practicalEssentials;
  const scenarioPathsIntro = sections.scenarioPaths?.intro ?? "";
  const helpfulTools = toolsStrip.slice(0, 3);
  const bandTitle = stagesTitle ?? "Your move in 3 stages";

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
              heroImage={pillarHeroToEditorial(pageHeader.heroImage, pageHeader.heroImageAlt)}
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
              timeline="Varies by city, employer timing, and your permit or contract path."
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
            subtitle="Shortcuts into calculators, planners, and hubs for this topic."
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
                id="topic-stages"
                titleClassName={movingNlSectionH2StagesSignatureClass}
                tone="onDark"
                title={bandTitle}
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
              items={nextSteps.slice(0, 3).map((item) => ({
                label: item.label,
                href: item.href,
                description: item.description,
              }))}
            />
          </PillarGuideNextStepsRegion>
        }
        faq={
          <PillarGuideFaqRegion>
            <FAQBlock id="faq" items={faq} maxItems={5} />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
