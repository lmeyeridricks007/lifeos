import type { Metadata } from "next";
import { pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { HospitalsNetherlandsView } from "@/src/components/health/HospitalsNetherlandsView";
import { hospitalsNetherlandsPage as page } from "@/src/components/health/hospitalsNetherlandsPageModel";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate } = page;

export const metadata: Metadata = {
  title: pageMetadataTitle(seo.title),
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

function MedicalWebPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: hero.pageTitle,
    description: seo.description,
    url: new URL(path, baseUrl).toString(),
    datePublished: publishDate,
    isPartOf: {
      "@type": "WebSite",
      name: "ExpatLife",
      url: baseUrl,
    },
    about: {
      "@type": "MedicalSpecialty",
      name: "Hospital Care / Secondary Care",
      description:
        "Orientation for expats on hospital care in the Netherlands — GP referrals, hospital types, outpatient clinics (polikliniek), admissions (opname), medical specialists, university medical centres, emergency departments (SEH), costs and patient rights.",
    },
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Expats living in or relocating to the Netherlands",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function HospitalsNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <MedicalWebPageJsonLd />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <HowToJsonLd
        name={page.howToSchema.name}
        description={page.howToSchema.description}
        steps={page.howItWorks.howToSteps.map((step) => ({ name: step.name, text: step.text }))}
        urlPath={`${path}${page.howToSchema.anchor}`}
      />
      <HospitalsNetherlandsView />
    </>
  );
}
