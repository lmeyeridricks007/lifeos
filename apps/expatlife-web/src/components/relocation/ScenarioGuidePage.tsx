/**
 * Server-rendered scenario guide page: breadcrumbs, JSON-LD, and template.
 * Used by each /netherlands/[scenario-slug]/ page.
 */

import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { ScenarioGuideTemplate } from "./ScenarioGuideTemplate";
import { getScenarioGuideBySlug } from "@/src/content/netherlands/scenario-guides";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();

type ScenarioGuidePageProps = {
  slug: string;
};

export function ScenarioGuidePage({ slug }: ScenarioGuidePageProps) {
  const content = getScenarioGuideBySlug(slug);
  if (!content) notFound();

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    {
      name: "Moving to the Netherlands",
      item: new URL("/netherlands/moving-to-the-netherlands/", baseUrl).toString(),
    },
    {
      name: content.h1,
      item: new URL(content.path, baseUrl).toString(),
    },
  ];

  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={content.seo.title}
        description={content.seo.description}
        dateModified={dateModified}
        urlPath={content.path}
      />
      {content.faq.length > 0 ? (
        <FaqPageJsonLd
          items={content.faq.map((item) => ({ q: item.q, a: item.a }))}
        />
      ) : null}
      <ScenarioGuideTemplate content={content} />
    </>
  );
}
