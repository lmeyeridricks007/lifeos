import type { Metadata } from "next";
import { BankingHubView } from "@/src/components/money/banking-hub/BankingHubView";
import { bankingHubHeroImage, bankingHubPageModel } from "@/src/components/money/banking-hub/bankingHubPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate } = bankingHubPageModel;
const ogImageUrl = new URL(bankingHubHeroImage.src, baseUrl).toString();

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
        width: bankingHubHeroImage.width,
        height: bankingHubHeroImage.height,
        alt: bankingHubHeroImage.alt,
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

export default function NetherlandsMoneyBankingHubPage() {
  return (
    <>
      <WebPageJsonLd name={bankingHubPageModel.hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <BankingHubView />
    </>
  );
}
