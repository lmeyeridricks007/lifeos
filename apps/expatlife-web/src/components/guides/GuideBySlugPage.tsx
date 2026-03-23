/**
 * Renders a full guide page by slug (JSON-LD + GuidePageTemplate).
 * Used by dedicated route pages that need static metadata; avoids duplicate logic.
 */

import { notFound } from "next/navigation";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd } from "@/lib/seo/jsonld";
import { isGuidePublishingVisibleBySlug, loadGuideBySlug } from "@/src/lib/guides/loadGuide";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();

export function GuideBySlugPage({ slug }: { slug: string }) {
  if (!isGuidePublishingVisibleBySlug(slug)) notFound();
  const data = loadGuideBySlug(slug);
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
    { name: "Moving", item: new URL("/netherlands/moving/", baseUrl).toString() },
    {
      name: data.breadcrumbLabel ?? data.title,
      item: new URL(data.path, baseUrl).toString(),
    },
  ];

  const dateModified = new Date().toISOString().slice(0, 10);
  const serializableData = JSON.parse(JSON.stringify(data));
  const serializableBlocks = JSON.parse(JSON.stringify(affiliateBlocks));

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={data.title}
        description={data.description}
        dateModified={dateModified}
        urlPath={data.path}
      />
      {data.faq?.length ? <FaqPageJsonLd items={data.faq} /> : null}
      {data.howToSteps?.length ? (
        <HowToJsonLd
          name={data.title}
          description={data.description}
          steps={data.howToSteps}
          urlPath={data.path}
        />
      ) : null}
      <GuidePageTemplate
        data={serializableData}
        affiliateBlocks={serializableBlocks}
        canonicalUrl={new URL(data.path.startsWith("/") ? data.path : `/${data.path}`, baseUrl).toString()}
      />
    </>
  );
}
