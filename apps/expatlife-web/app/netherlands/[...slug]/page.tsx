import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
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
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { getSeoPublicOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

type Props = {
  params: Promise<{ slug: string[] }>;
};

function humanizeSegment(segment: string) {
  return segment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function comingSoonPathFromSlug(slug: string[]): string {
  const joined = slug.join("/");
  return joined.endsWith("/") ? `/netherlands/${joined}` : `/netherlands/${joined}/`;
}

/** Only handle guide routes when we have exactly one segment (e.g. /netherlands/bsn-registration/). */
function getGuideSlugFromParams(slug: string[]): string | null {
  if (slug.length !== 1) return null;
  const candidate = slug[0];
  return isGuideSlug(candidate) ? candidate : null;
}

export const revalidate = CONTENT_REVALIDATE;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guideSlug = getGuideSlugFromParams(slug);

  if (guideSlug) {
    return {
      title: String("Netherlands"),
      description: String("Guides and resources for moving to and living in the Netherlands."),
    };
  }

  const title = slug.map(humanizeSegment).join(" / ");
  const path = comingSoonPathFromSlug(slug);

  return buildSocialMetadata({
    title,
    description: "This section is planned and linked in the mega menu.",
    path,
    ogType: "website",
    publishGate: { publish: false },
  });
}

const STUB_HUB_REDIRECTS: Record<string, string> = {
  moving: "/netherlands/moving-to-the-netherlands/",
  "survival-guide": "/netherlands/living/survival-guide/",
};

export default async function NetherlandsCatchAllPage({ params }: Props) {
  const baseUrl = getSeoPublicOrigin();
  const { slug } = await params;

  if (slug.length === 1 && STUB_HUB_REDIRECTS[slug[0]]) {
    permanentRedirect(STUB_HUB_REDIRECTS[slug[0]]);
  }

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
    return humanizeSegment(segment);
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
          href: "/netherlands/moving-to-the-netherlands/",
          description: "Full relocation guide, checklist, and tools.",
        },
        {
          title: "Netherlands Survival Guide",
          href: "/netherlands/living/survival-guide/",
          description: "First-week priorities, apps, and daily-life setup.",
        },
        {
          title: "Tools",
          href: "/netherlands/moving/tools/",
          description: "Moving checklist, document readiness, arrival planner.",
        },
      ]}
    />
  );
}
