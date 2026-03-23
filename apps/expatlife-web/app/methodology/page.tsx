import type { Metadata } from "next";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { methodologyPage } from "@/src/data/trust/methodology";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
export const metadata: Metadata = {
  title: methodologyPage.seo.title,
  description: methodologyPage.seo.description,
  alternates: { canonical: "/methodology/" },
};

export default function MethodologyPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Methodology"
      title={methodologyPage.hero.title}
      subtitle={methodologyPage.hero.subtitle}
    >
      {methodologyPage.sections.map((section) => (
        <section
          key={section.id}
          className="mb-10 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8"
        >
          <h2 className="text-xl font-semibold text-slate-900">
            {section.heading}
          </h2>
          {"paragraphs" in section &&
            section.paragraphs.map((p, i) => (
              <p key={i} className="mt-3 text-slate-700 leading-relaxed">
                {p}
              </p>
            ))}
          {"intro" in section && section.intro && (
            <p className="mt-3 text-slate-700 leading-relaxed">
              {(section as { intro: string }).intro}
            </p>
          )}
          {"cards" in section && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {(section as { cards: ReadonlyArray<{ title: string; body: string }> }).cards.map(
                (card, i) => (
                  <div
                    key={i}
                    className="rounded-xl border-l-4 border-brand-500 border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <h3 className="font-semibold text-slate-900">{card.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </section>
      ))}

      <RelatedTrustLinks links={methodologyPage.relatedLinks} heading="Related pages" />
    </TrustPageLayout>
  );
}
