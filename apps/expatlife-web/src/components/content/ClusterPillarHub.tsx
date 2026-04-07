import Link from "next/link";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
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
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarGuideScenarioRegion,
  PillarGuideToolsSection,
  PillarJourneyStack,
  SectionBlock,
  StageCards,
  ToolCard,
} from "@/components/page/pillar-template";
import { getSiteOrigin } from "@/lib/site-origin";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import {
  movingNlPathPrimaryCtaClass,
  movingNlSectionH2StagesSignatureClass,
  movingNlSidebarSecondaryRowClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import type { ClusterPillarHubConfig } from "@/src/components/content/livingCulturePillarHubData";
import { getClusterPageByPath } from "@/src/lib/guides/livingCultureCluster";

function pillarHeroToEditorial(src: string, alt: string): EditorialHeroImage {
  return {
    src,
    alt: alt.trim() || "Hero image for this guide",
    priority: true,
  };
}

function clusterLinkPublishStatus(href: string) {
  return getClusterPageByPath(href)?.contentStatus;
}

function formatDisplayMonthYear(isoDate: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!m) return isoDate.trim() || "—";
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (Number.isNaN(d.getTime())) return isoDate.trim() || "—";
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

type Props = {
  config: ClusterPillarHubConfig;
};

export function ClusterPillarHub({ config }: Props) {
  const baseUrl = getSiteOrigin();
  const { jsonLd, breadcrumbs, pageHeader, atGlance, keySections, recommendedPaths, tools, nextSteps, faq } =
    config;

  const dateModified = new Date().toISOString().slice(0, 10);

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    ...breadcrumbs.map((b) => ({
      name: b.label,
      item: new URL(b.href, baseUrl).toString(),
    })),
  ];

  const canonicalUrl = new URL(jsonLd.canonicalPath, baseUrl).toString();

  const heroCtas = (
    <div className="flex flex-wrap gap-3">
      <Link href={pageHeader.primaryCta.href} className={cn(movingNlPathPrimaryCtaClass, "sm:w-auto")}>
        {pageHeader.primaryCta.label}
      </Link>
      {pageHeader.secondaryCtas.map((c) => (
        <Link key={c.href} href={c.href} className={movingNlSidebarSecondaryRowClass}>
          {c.label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={jsonLd.headline}
        description={jsonLd.description}
        dateModified={dateModified}
        urlPath={jsonLd.canonicalPath}
      />
      <FaqPageJsonLd items={faq.slice(0, 5).map((i) => ({ q: i.q, a: i.a }))} />

      <GuidePageTemplate
        scenarioBeforeKeySections={false}
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
              afterSubtitle={heroCtas}
              heroImage={pillarHeroToEditorial(pageHeader.heroImage, pageHeader.heroImageAlt)}
              shareUrl={canonicalUrl}
              pageId={jsonLd.canonicalPath}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <AtGlanceCard
              id="at-a-glance"
              who={atGlance.who}
              timeline={atGlance.timeline}
              steps={atGlance.steps}
              intro={atGlance.intro}
              footer={
                atGlance.footerLine ? (
                  <span>
                    Last updated {formatDisplayMonthYear(dateModified)}. {atGlance.footerLine}
                  </span>
                ) : (
                  <span>Last updated {formatDisplayMonthYear(dateModified)}.</span>
                )
              }
            />
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide">
            <PillarDarkStagesBand>
              <SectionBlock
                className="relative z-10"
                contentClassName="mt-8 sm:mt-9"
                id={keySections.sectionId}
                titleClassName={movingNlSectionH2StagesSignatureClass}
                tone="onDark"
                title={keySections.title}
                subtitle={keySections.subtitle}
              >
                <StageCards
                  variant="copilotDark"
                  stages={keySections.stages}
                  maxBulletsPerStage={3}
                  maxStages={6}
                  linkPublishStatus={clusterLinkPublishStatus}
                />
              </SectionBlock>
            </PillarDarkStagesBand>
          </PillarJourneyStack>
        }
        scenario={
          <PillarGuideScenarioRegion>
            <ChooseYourPath
              id={recommendedPaths.id}
              eyebrow={recommendedPaths.eyebrow}
              title={recommendedPaths.title}
              intro={recommendedPaths.intro}
              scenarios={recommendedPaths.scenarios}
            />
          </PillarGuideScenarioRegion>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id={tools.id}
            title={tools.title}
            subtitle={tools.subtitle}
          >
            {tools.items.map((t) => (
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
        nextSteps={
          <PillarGuideNextStepsRegion>
            <NextSteps
              id={nextSteps.id}
              compact
              variant="progression"
              movingHubPremium
              maxItems={nextSteps.maxItems}
              title={nextSteps.title}
              subtitle={nextSteps.subtitle}
              items={nextSteps.items}
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
