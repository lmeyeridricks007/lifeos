import type { Metadata } from "next";
import { pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { OfficialFiguresView } from "@/src/components/official-figures/OfficialFiguresView";
import {
  OFFICIAL_FIGURES_AS_OF_LABEL,
  OFFICIAL_FIGURES_LAST_REVIEWED,
  OFFICIAL_FIGURES_PATH,
  OFFICIAL_FIGURES_TAX_YEAR,
} from "@/src/components/official-figures/officialFigures2026";

export const revalidate = CONTENT_REVALIDATE;

const title = `Netherlands official figures ${OFFICIAL_FIGURES_TAX_YEAR}`;
const description =
  "Dated 2026 citation table: HSM salary floors, IND fees, 30% ruling norms and salary cap, adult minimum wage, eigen risico and typical basic health premium — with official source URLs. Not a calculator.";

export const metadata: Metadata = {
  title: pageMetadataTitle(title),
  description,
  keywords: [
    "netherlands official figures 2026",
    "hsm salary threshold 2026",
    "ind fees 2026",
    "30 percent ruling threshold 2026",
    "minimum wage netherlands 2026",
    "eigen risico 2026",
  ],
  alternates: { canonical: OFFICIAL_FIGURES_PATH },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title,
    description,
    type: "article",
    url: new URL(OFFICIAL_FIGURES_PATH, getSiteOrigin()).toString(),
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function OfficialFiguresPage() {
  const baseUrl = getSiteOrigin();
  return (
    <>
      <WebPageJsonLd
        name={title}
        description={description}
        urlPath={OFFICIAL_FIGURES_PATH}
        datePublished="2026-08-30"
      />
      <ArticleJsonLd
        headline={title}
        description={`${description} ${OFFICIAL_FIGURES_AS_OF_LABEL}. Last reviewed ${OFFICIAL_FIGURES_LAST_REVIEWED}.`}
        dateModified="2026-08-30"
        urlPath={OFFICIAL_FIGURES_PATH}
      />
      <OfficialFiguresView />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: title,
            description,
            url: new URL(OFFICIAL_FIGURES_PATH, baseUrl).toString(),
            creator: { "@type": "Organization", name: "ExpatCopilot" },
            temporalCoverage: "2026",
            dateModified: "2026-08-30",
            license: "https://www.expatcopilot.com/disclaimer/",
            isAccessibleForFree: true,
          }),
        }}
      />
    </>
  );
}
