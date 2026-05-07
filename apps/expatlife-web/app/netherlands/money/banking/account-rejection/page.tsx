import type { Metadata } from "next";
import { AccountRejectionView } from "@/src/components/money/banking-account-rejection/AccountRejectionView";
import { accountRejectionPageModel, accountRejectionHeroImage } from "@/src/components/money/banking-account-rejection/accountRejectionPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate } = accountRejectionPageModel;
const ogImageUrl = new URL(accountRejectionHeroImage.src, baseUrl).toString();

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
    section: "Banking",
    tags: [...seo.keywords],
    images: [
      {
        url: ogImageUrl,
        width: accountRejectionHeroImage.width,
        height: accountRejectionHeroImage.height,
        alt: accountRejectionHeroImage.alt,
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

export default function BankingAccountRejectionNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={accountRejectionPageModel.hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <AccountRejectionView />
    </>
  );
}
