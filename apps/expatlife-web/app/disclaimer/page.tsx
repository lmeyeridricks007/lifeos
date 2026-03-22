import type { Metadata } from "next";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { disclaimerPage } from "@/src/data/legal/disclaimer";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: disclaimerPage.seo.title,
  description: disclaimerPage.seo.description,
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Disclaimer"
      title={disclaimerPage.hero.title}
      subtitle={disclaimerPage.hero.subtitle}
      extraHeroContent={<LastUpdated date={disclaimerPage.lastUpdated} />}
    >
      <div className="mb-10 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
        <p className="text-slate-700 leading-relaxed">{disclaimerPage.summary}</p>
      </div>

      {disclaimerPage.sections.map((section) => (
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

      <RelatedTrustLinks links={disclaimerPage.relatedLinks} heading="Related" />
    </TrustPageLayout>
  );
}
