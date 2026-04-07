import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allGuides, type Guide } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { GuidePageTemplate as ThinGuidePageTemplate } from "@/components/page/page-templates";
import {
  MoveGuideSectionPanel,
  PageHero,
  PillarGuideHeroRegion,
  PillarJourneyStack,
} from "@/components/page/pillar-template";
import { ArticleBody } from "@/components/page-families";
import { EDITORIAL_HERO_PLACEHOLDER } from "@/src/lib/content/editorialTypes";
import { isGuidePublishingVisibleBySlug, loadGuideBySlug } from "@/src/lib/guides/loadGuide";
import { isPubliclyVisible } from "@/src/lib/publishing/isPubliclyVisible";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { GuidePageTemplate as JsonGuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import {
  GuideHighIntentPostFaqMonetization,
  buildNetherlandsGuideAffiliateSlots,
  guideHasMonetizationAfterContent,
} from "@/src/components/monetization";
import { MoveClusterSelectiveSetupMonetization } from "@/src/components/monetization/MoveClusterSelectiveSetupMonetization";
import { shouldRenderSelectiveSetupMonetization } from "@/src/lib/monetization/moveClusterPostFaqPolicy";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();

function guideCanonicalUrl(path: string): string {
  return new URL(path.startsWith("/") ? path : `/${path}`, baseUrl).toString();
}

function getContentlayerGuide(slug: string) {
  return allGuides.find((guide) => guide.slug.endsWith(`/guides/${slug}`));
}

/** Contentlayer MDX guides: article-family layout (hero, summary, body only — no guide tools/scenario blocks). */
function renderContentlayerMdxArticle(slug: string, guide: Guide) {
  const urlPath = `/netherlands/moving/guides/${slug}`;
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Moving", item: new URL("/netherlands/moving", baseUrl).toString() },
    { name: guide.title, item: new URL(urlPath, baseUrl).toString() },
  ];
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={guide.title}
        description={guide.description}
        dateModified={dateModified}
        urlPath={urlPath}
      />
      <ThinGuidePageTemplate
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
              eyebrow="Netherlands · Moving guide"
              title={guide.title}
              subtitle={guide.description}
              heroImage={EDITORIAL_HERO_PLACEHOLDER}
              shareUrl={guideCanonicalUrl(urlPath)}
              pageId={urlPath}
              afterSubtitle={
                guide.readingTime ? (
                  <p className="text-sm text-copilot-text-secondary">{guide.readingTime} read</p>
                ) : undefined
              }
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide">
            <MoveGuideSectionPanel>
              <ArticleBody className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-headings:text-copilot-text-primary prose-p:text-copilot-text-secondary prose-li:marker:text-copilot-primary/50 prose-a:text-copilot-primary prose-a:font-semibold">
                <Mdx code={guide.body.code} />
              </ArticleBody>
            </MoveGuideSectionPanel>
          </PillarJourneyStack>
        }
      />
    </>
  );
}

/** Static metadata to avoid DataCloneError (no async generateMetadata). */
export const metadata: Metadata = {
  title: String("Moving guides"),
  description: String(
    "Practical guides for moving to the Netherlands. BSN, registration, DigiD, checklist, timeline, and more."
  ),
};

type Params = { params: Promise<{ slug: string }> | { slug: string } };

export default async function MovingGuidePage({ params }: Params) {
  const slug = typeof params === "object" && "then" in params ? (await params).slug : params.slug;
  if (!isGuidePublishingVisibleBySlug(slug)) notFound();
  // Prefer JSON guide (full template: quick answers, sidebar, affiliates, FAQ) when it exists.
  const data = loadGuideBySlug(slug);
  if (data) {
    return renderJsonGuide(slug, data);
  }
  const contentlayerGuide = getContentlayerGuide(slug);
  if (contentlayerGuide) {
    if (!isPubliclyVisible(contentlayerGuide.publish !== false, contentlayerGuide.publishDate, new Date())) {
      notFound();
    }
    return renderContentlayerMdxArticle(slug, contentlayerGuide);
  }
  notFound();
}

function renderJsonGuide(
  slug: string,
  data: NonNullable<ReturnType<typeof loadGuideBySlug>>
) {

  const placementIds = new Set<string>();
  for (const section of data.sections) {
    if (section.affiliatePlacementId) placementIds.add(section.affiliatePlacementId);
  }
  if (data.resourcesAffiliatePlacementId) placementIds.add(data.resourcesAffiliatePlacementId);
  const affiliateBlocks: Record<
    string,
    {
      placement: NonNullable<ReturnType<typeof loadPlacementWithProviders>>["placement"];
      items: NonNullable<ReturnType<typeof loadPlacementWithProviders>>["items"];
    }
  > = {};
  for (const id of Array.from(placementIds)) {
    const result = loadPlacementWithProviders(id, "netherlands", undefined);
    if (result != null) affiliateBlocks[id] = { placement: result.placement, items: result.items };
  }

  // Ensure props are plain serializable (avoid DataCloneError when Next serializes RSC payload).
  const serializableData = JSON.parse(JSON.stringify(data)) as typeof data;
  const serializableBlocks = JSON.parse(JSON.stringify(affiliateBlocks)) as typeof affiliateBlocks;
  const { contextualAffiliateAfterFirstSection, contextualAffiliateBeforeNextSteps } =
    buildNetherlandsGuideAffiliateSlots(slug, data.path);

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Moving", item: new URL("/netherlands/moving", baseUrl).toString() },
    { name: data.title, item: new URL(`/netherlands/moving/guides/${slug}`, baseUrl).toString() },
  ];
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={data.title}
        description={data.description}
        dateModified={dateModified}
        urlPath={`/netherlands/moving/guides/${slug}`}
      />
      {data.faq?.length ? <FaqPageJsonLd items={data.faq} /> : null}
      <JsonGuidePageTemplate
        data={serializableData}
        affiliateBlocks={serializableBlocks}
        canonicalUrl={guideCanonicalUrl(data.path)}
        postContentMonetization={
          guideHasMonetizationAfterContent(slug) ? (
            <GuideHighIntentPostFaqMonetization slug={slug} pageSlugPath={data.path} />
          ) : shouldRenderSelectiveSetupMonetization(slug) ? (
            <MoveClusterSelectiveSetupMonetization slug={slug} />
          ) : undefined
        }
        contextualAffiliateAfterFirstSection={contextualAffiliateAfterFirstSection}
        contextualAffiliateBeforeNextSteps={contextualAffiliateBeforeNextSteps}
      />
    </>
  );
}
