import type { Metadata } from "next";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { termsPage } from "@/src/data/legal/terms";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: termsPage.seo.title,
  description: termsPage.seo.description,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Terms"
      title={termsPage.hero.title}
      subtitle={termsPage.hero.subtitle}
      extraHeroContent={<LastUpdated date={termsPage.lastUpdated} />}
    >
      <div className="mb-10 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
        <p className="text-slate-700 leading-relaxed">{termsPage.intro}</p>
      </div>

      {termsPage.sections.map((section) => (
        <section
          key={section.id}
          className="mb-10 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8"
        >
          <h2 className="text-xl font-semibold text-slate-900">
            {section.heading}
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            {section.body}
          </p>
        </section>
      ))}

      <RelatedTrustLinks links={termsPage.relatedLinks} heading="Related" />
    </TrustPageLayout>
  );
}
