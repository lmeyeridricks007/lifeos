import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoonPage } from "@/src/components/content/ComingSoonPage";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import {
  GuideHighIntentPostFaqMonetization,
  buildNetherlandsGuideAffiliateSlots,
  guideHasMonetizationAfterContent,
} from "@/src/components/monetization";
import { MoveClusterSelectiveSetupMonetization } from "@/src/components/monetization/MoveClusterSelectiveSetupMonetization";
import { shouldRenderSelectiveSetupMonetization } from "@/src/lib/monetization/moveClusterPostFaqPolicy";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import {
  isGuideSlug,
  isGuidePublishingVisibleBySlug,
  loadGuideBySlug,
} from "@/src/lib/guides/loadGuide";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const baseUrl = getSiteOrigin();

/** Only handle guide routes when we have exactly one segment (e.g. /netherlands/bsn-registration/). */
function getGuideSlugFromParams(slug: string[]): string | null {
  if (slug.length !== 1) return null;
  const candidate = slug[0];
  return isGuideSlug(candidate) ? candidate : null;
}

export const revalidate = CONTENT_REVALIDATE;

/** Static metadata only (plain strings) to avoid DataCloneError in Next.js metadata resolution. */
export const metadata: Metadata = {
  title: String("Netherlands"),
  description: String("Guides and resources for moving to and living in the Netherlands."),
};

export default async function NetherlandsCatchAllPage({ params }: Props) {
  const { slug } = await params;
  const guideSlug = getGuideSlugFromParams(slug);

  if (guideSlug) {
    if (!isGuidePublishingVisibleBySlug(guideSlug)) notFound();
    const data = loadGuideBySlug(guideSlug);
    if (!data) notFound();

    const placementIds = new Set<string>();
    for (const section of data.sections) {
      if (section.affiliatePlacementId) placementIds.add(section.affiliatePlacementId);
    }
    if (data.resourcesAffiliatePlacementId) {
      placementIds.add(data.resourcesAffiliatePlacementId);
    }

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

    const breadcrumbCrumbs = [
      { name: "Home", item: new URL("/", baseUrl).toString() },
      { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
      { name: "Moving to the Netherlands", item: new URL("/netherlands/moving-to-the-netherlands/", baseUrl).toString() },
      {
        name: data.breadcrumbLabel ?? data.title,
        item: new URL(data.path, baseUrl).toString(),
      },
    ];

    const dateModified = new Date().toISOString().slice(0, 10);

    // Ensure props are plain serializable (avoid DataCloneError when Next serializes RSC payload).
    const serializableData = JSON.parse(JSON.stringify(data));
    const serializableBlocks = JSON.parse(JSON.stringify(affiliateBlocks));
    const { contextualAffiliateAfterFirstSection, contextualAffiliateBeforeNextSteps } =
      buildNetherlandsGuideAffiliateSlots(guideSlug, data.path);

    return (
      <>
        <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
        <ArticleJsonLd
          headline={data.title}
          description={data.description}
          dateModified={dateModified}
          urlPath={data.path}
        />
        {data.faq?.length ? (
          <FaqPageJsonLd items={data.faq} />
        ) : null}
        <GuidePageTemplate
          data={serializableData}
          affiliateBlocks={serializableBlocks}
          canonicalUrl={new URL(data.path.startsWith("/") ? data.path : `/${data.path}`, baseUrl).toString()}
          postContentMonetization={
            guideHasMonetizationAfterContent(guideSlug) ? (
              <GuideHighIntentPostFaqMonetization slug={guideSlug} pageSlugPath={data.path} />
            ) : shouldRenderSelectiveSetupMonetization(guideSlug) ? (
              <MoveClusterSelectiveSetupMonetization slug={guideSlug} />
            ) : undefined
          }
          contextualAffiliateAfterFirstSection={contextualAffiliateAfterFirstSection}
          contextualAffiliateBeforeNextSteps={contextualAffiliateBeforeNextSteps}
        />
      </>
    );
  }

  function humanize(segment: string) {
    return segment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
  const title = slug.map(humanize).join(" / ");

  return (
    <ComingSoonPage
      title={title}
      description="This section is planned and linked in the mega menu."
      breadcrumbs={[
        { label: "Netherlands", href: "/netherlands" },
        ...slug.map((segment, index) => ({
          label: humanize(segment),
          href:
            index === slug.length - 1
              ? undefined
              : `/netherlands/${slug.slice(0, index + 1).join("/")}`,
        })),
      ]}
      suggestedLinks={[
        {
          title: "Moving to the Netherlands",
          href: "/netherlands/moving-to-the-netherlands",
          description: "Full relocation guide, checklist, and tools.",
        },
        {
          title: "Tools",
          href: "/netherlands/moving/tools",
          description: "Moving checklist, document readiness, arrival planner.",
        },
      ]}
    />
  );
}
