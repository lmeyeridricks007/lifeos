import type { Metadata } from "next";
import { pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { DayTripsNetherlandsView } from "@/src/components/living/day-trips-netherlands/DayTripsNetherlandsView";
import { dayTripsNetherlandsPage as page } from "@/src/components/living/day-trips-netherlands/dayTripsNetherlandsPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate } = page;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: seo.title,
    description: seo.description,
    path,
    ogType: "article",
    imagePath: hero.image.src,
    publishGate: { publish: true, publishDate },
  }),
  keywords: [...seo.keywords],
});

export default function DayTripsNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <HowToJsonLd
        name={page.howToSchema.name}
        description={page.howToSchema.description}
        steps={page.howTo.steps.map((step) => ({ name: step.name, text: step.text }))}
        urlPath={`${path}${page.howToSchema.anchor}`}
      />
      <DayTripsNetherlandsView />
    </>
  );
}
