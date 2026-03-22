/**
 * FAQPage structured data for tool and guide pages.
 */

export type FaqItem = { question: string; answer: string };

export function buildFaqSchema(items: FaqItem[]): object | null {
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
