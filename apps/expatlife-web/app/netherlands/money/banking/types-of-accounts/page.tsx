import type { Metadata } from "next";
import { TypesOfBankAccountsView } from "@/src/components/money/types-of-bank-accounts/TypesOfBankAccountsView";
import { typesOfBankAccountsPageModel } from "@/src/components/money/types-of-bank-accounts/typesOfBankAccountsPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, heroImage } = typesOfBankAccountsPageModel;
const ogImageUrl = new URL(heroImage.src, baseUrl).toString();

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: path },
  robots: { index: true, follow: true },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "article",
    locale: "en_NL",
    siteName: "ExpatCopilot",
    url: new URL(path, baseUrl).toString(),
    publishedTime: publishDate,
    modifiedTime: publishDate,
    images: [
      {
        url: ogImageUrl,
        width: heroImage.width,
        height: heroImage.height,
        alt: heroImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImageUrl],
  },
};

export const revalidate = CONTENT_REVALIDATE;

export default function TypesOfBankAccountsNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd
        name={typesOfBankAccountsPageModel.hero.pageTitle}
        description={seo.description}
        urlPath={path}
        datePublished={publishDate}
      />
      <TypesOfBankAccountsView />
    </>
  );
}
