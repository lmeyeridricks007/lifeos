import type { Metadata } from "next";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { CookieSettingsLink } from "@/src/components/cookies/CookieSettingsLink";
import { cookiesPage } from "@/src/data/legal/cookies";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";
import { LastUpdated } from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
  title: cookiesPage.seo.title,
  description: cookiesPage.seo.description,
  alternates: { canonical: "/cookies/" },
};

export default function CookiesPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Cookies"
      title={cookiesPage.hero.title}
      subtitle={cookiesPage.hero.subtitle}
      extraHeroContent={<LastUpdated date={cookiesPage.lastUpdated} />}
    >
      <div className="mb-10 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
        <p className="text-slate-700 leading-relaxed">{cookiesPage.intro}</p>
      </div>

      {cookiesPage.sections.map((section) => (
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
          {section.id === "manage" && (
            <p className="mt-3">
              <CookieSettingsLink className="inline-block font-medium text-brand-600 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded">
                Cookie settings
              </CookieSettingsLink>
            </p>
          )}
        </section>
      ))}

      <RelatedTrustLinks links={cookiesPage.relatedLinks} heading="Related" />
    </TrustPageLayout>
  );
}
