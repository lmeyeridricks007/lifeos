import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allGuides } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { Section } from "@/components/ui/section";
import { loadGuideBySlug } from "@/src/lib/guides/loadGuide";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

export const revalidate = 3600;

const baseUrl = getSiteOrigin();

function guideCanonicalUrl(path: string): string {
  return new URL(path.startsWith("/") ? path : `/${path}`, baseUrl).toString();
}

function getContentlayerGuide(slug: string) {
  return allGuides.find((guide) => guide.slug.endsWith(`/guides/${slug}`));
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
  // Prefer JSON guide (full template: quick answers, sidebar, affiliates, FAQ) when it exists.
  const data = loadGuideBySlug(slug);
  if (data) {
    return renderJsonGuide(slug, data);
  }
  const contentlayerGuide = getContentlayerGuide(slug);
  if (contentlayerGuide) {
    return (
      <Section eyebrow="Guide" title={contentlayerGuide.title} subtitle={contentlayerGuide.description}>
        <article className="prose max-w-3xl prose-slate">
          <Mdx code={contentlayerGuide.body.code} />
        </article>
      </Section>
    );
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
      <GuidePageTemplate
        data={serializableData}
        affiliateBlocks={serializableBlocks}
        canonicalUrl={guideCanonicalUrl(data.path)}
      />
    </>
  );
}
