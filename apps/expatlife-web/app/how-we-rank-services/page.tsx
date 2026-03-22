import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { howWeRankServicesPage } from "@/src/data/trust/how-we-rank-services";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";

export const metadata: Metadata = {
  title: howWeRankServicesPage.seo.title,
  description: howWeRankServicesPage.seo.description,
  alternates: { canonical: "/how-we-rank-services/" },
};

type SectionItem = { title: string; body: string };

export default function HowWeRankServicesPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="How we rank services"
      title={howWeRankServicesPage.hero.title}
      subtitle={howWeRankServicesPage.hero.subtitle}
    >
      {howWeRankServicesPage.sections.map((section) => (
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
          {"intro" in section && section.intro && !("factors" in section) && (
            <p className="mt-3 text-slate-700 leading-relaxed">
              {(section as { intro: string }).intro}
            </p>
          )}
          {"items" in section && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {(section as { items: ReadonlyArray<SectionItem> }).items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border-l-4 border-brand-500 border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          )}
          {"factors" in section && (
            <>
              {"intro" in section && section.intro && (
                <p className="mt-3 text-slate-700 leading-relaxed">
                  {(section as { intro: string }).intro}
                </p>
              )}
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {(section as { factors: readonly string[] }).factors.map((f, i) => (
                  <div
                    key={i}
                    className="flex gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                  >
                    <span
                      className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                      aria-hidden
                    />
                    {f}
                  </div>
                ))}
              </div>
            </>
          )}
          {"link" in section && section.link && (
            <p className="mt-3">
              <Link
                href={section.link.href}
                className="font-medium text-brand-600 hover:text-brand-700 underline"
              >
                {section.link.label}
              </Link>
            </p>
          )}
        </section>
      ))}

      <RelatedTrustLinks links={howWeRankServicesPage.relatedLinks} heading="Related pages" />
    </TrustPageLayout>
  );
}
