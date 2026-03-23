import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { editorialPolicyPage } from "@/src/data/trust/editorial-policy";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
export const metadata: Metadata = {
  title: editorialPolicyPage.seo.title,
  description: editorialPolicyPage.seo.description,
  alternates: { canonical: "/editorial-policy/" },
};

export default function EditorialPolicyPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Editorial policy"
      title={editorialPolicyPage.hero.title}
      subtitle={editorialPolicyPage.hero.subtitle}
    >
      {editorialPolicyPage.sections.map((section) => (
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
          {"items" in section && (
            <ul className="mt-3 space-y-2 text-slate-700">
              {(section as { items: readonly string[] }).items.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
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

      <RelatedTrustLinks links={editorialPolicyPage.relatedLinks} heading="Related pages" />
    </TrustPageLayout>
  );
}
