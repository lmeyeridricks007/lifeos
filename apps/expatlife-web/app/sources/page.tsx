import type { Metadata } from "next";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { sourcesPage } from "@/src/data/trust/sources";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";

export const metadata: Metadata = {
  title: sourcesPage.seo.title,
  description: sourcesPage.seo.description,
  alternates: { canonical: "/sources/" },
};

type SourceItem = { name: string; href?: string; description: string };

export default function SourcesPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Sources"
      title={sourcesPage.hero.title}
      subtitle={sourcesPage.hero.subtitle}
    >
      {sourcesPage.sections.map((section) => (
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
          {"groups" in section && (
            <div className="mt-4 space-y-3">
              {(section as unknown as { groups: Array<{ title: string; description: string }> }).groups.map(
                (g, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <h3 className="font-semibold text-slate-900">{g.title}</h3>
                    <p className="mt-1 text-sm text-slate-700">{g.description}</p>
                  </div>
                )
              )}
            </div>
          )}
          {"intro" in section && section.intro && (
            <p className="mt-3 text-slate-700 leading-relaxed">
              {(section as { intro: string }).intro}
            </p>
          )}
          {"sources" in section && (
            <ul className="mt-4 space-y-3">
              {((section as unknown as { sources: SourceItem[] }).sources).map((s, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
                >
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-brand-600 hover:text-brand-700 hover:underline"
                    >
                      {s.name}
                    </a>
                  ) : (
                    <span className="font-medium text-slate-900">{s.name}</span>
                  )}
                  <p className="mt-0.5 text-sm text-slate-600">{s.description}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <RelatedTrustLinks links={sourcesPage.relatedLinks} heading="Related pages" />
    </TrustPageLayout>
  );
}
