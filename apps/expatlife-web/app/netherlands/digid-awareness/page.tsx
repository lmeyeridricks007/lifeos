import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { loadGuideBySlug } from "@/src/lib/guides/loadGuide";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const SLUG = "digid-awareness";

export const revalidate = 86400;

const metaTitle = "DigiD Netherlands Guide for Expats | What It Is and How to Activate It";
const metaDescription =
  "Learn how DigiD works in the Netherlands. This guide explains what DigiD is, how expats activate it after receiving a BSN, and which government services use DigiD.";

/** Static metadata only (plain strings) to avoid DataCloneError. */
export const metadata: Metadata = {
  title: String(metaTitle),
  description: String(metaDescription),
  alternates: { canonical: String("/netherlands/digid-awareness/") },
  openGraph: {
    title: String(metaTitle),
    description: String(metaDescription),
    url: "/netherlands/digid-awareness/",
  },
  twitter: {
    card: "summary_large_image",
    title: String(metaTitle),
    description: String(metaDescription),
  },
};

export default async function DigidAwarenessPage() {
  const data = loadGuideBySlug(SLUG);
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
      <GuidePageTemplate
        data={serializableData}
        affiliateBlocks={serializableBlocks}
        canonicalUrl={new URL(data.path.startsWith("/") ? data.path : `/${data.path}`, baseUrl).toString()}
      />
    </>
  );
}
