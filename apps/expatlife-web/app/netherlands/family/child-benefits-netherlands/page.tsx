import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { ChildBenefitsNetherlandsView } from "@/src/components/family/ChildBenefitsNetherlandsView";
import { childBenefitsNetherlandsPage as page } from "@/src/components/family/childBenefitsNetherlandsPageModel";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate } = page;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: path },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "article",
    url: new URL(path, baseUrl).toString(),
    images: [{ url: hero.image.src, alt: hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [hero.image.src],
  },
};

export default function ChildBenefitsNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <HowToJsonLd
        name="How to apply for Dutch child benefits"
        description="Step-by-step orientation for expat families applying for Kinderbijslag and family toeslagen in the Netherlands."
        steps={page.apply.steps.map((step) => ({ name: step.name, text: step.text }))}
        urlPath={`${path}#apply`}
      />
      <ChildBenefitsNetherlandsView />
    </>
  );
}
