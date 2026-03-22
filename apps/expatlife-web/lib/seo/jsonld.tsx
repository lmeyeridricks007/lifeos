import { getSiteOrigin } from "@/lib/site-origin";

type FaqItem = { q: string; a: string };

export function FaqPageJsonLd({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

const siteUrl = getSiteOrigin();

export function ArticleJsonLd({
  headline,
  description,
  dateModified,
  urlPath,
  author = "ExpatCopilot",
}: {
  headline: string;
  description: string;
  dateModified: string;
  urlPath: string;
  author?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: { "@type": "Organization", name: author },
    dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": new URL(urlPath, siteUrl).toString() },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export type HowToStepItem = { name: string; text?: string };

export function HowToJsonLd({
  name,
  description,
  steps,
  urlPath,
}: {
  name: string;
  description?: string;
  steps: HowToStepItem[];
  urlPath: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description: description ?? undefined,
    url: new URL(urlPath, siteUrl).toString(),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
