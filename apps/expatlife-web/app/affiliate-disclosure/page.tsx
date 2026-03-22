import type { Metadata } from "next";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { affiliateDisclosurePage } from "@/src/data/trust/affiliate-disclosure";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";

export const metadata: Metadata = {
  title: affiliateDisclosurePage.seo.title,
  description: affiliateDisclosurePage.seo.description,
  alternates: { canonical: "/affiliate-disclosure/" },
};

export default function AffiliateDisclosurePage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Affiliate disclosure"
      title={affiliateDisclosurePage.hero.title}
      subtitle={affiliateDisclosurePage.hero.subtitle}
    >
      {affiliateDisclosurePage.sections.map((section) => (
        <section
          key={section.id}
          className="mb-10 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8"
        >
          <h2 className="text-xl font-semibold text-slate-900">
            {section.heading}
          </h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 text-slate-700 leading-relaxed">
              {p}
            </p>
          ))}
        </section>
      ))}

      <RelatedTrustLinks links={affiliateDisclosurePage.relatedLinks} heading="Related pages" />
    </TrustPageLayout>
  );
}
