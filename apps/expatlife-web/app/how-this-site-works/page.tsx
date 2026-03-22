import type { Metadata } from "next";
import Link from "next/link";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { howThisSiteWorksPage } from "@/src/data/trust/how-this-site-works";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";

const relatedLinks = [
  { label: "Methodology", href: "/methodology/" },
  { label: "Sources", href: "/sources/" },
  { label: "Editorial policy", href: "/editorial-policy/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const metadata: Metadata = {
  title: howThisSiteWorksPage.seo.title,
  description: howThisSiteWorksPage.seo.description,
  alternates: { canonical: "/how-this-site-works/" },
};

export default function HowThisSiteWorksPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="How this site works"
      title={howThisSiteWorksPage.hero.title}
      subtitle={howThisSiteWorksPage.hero.subtitle}
    >
      {howThisSiteWorksPage.sections.map((section) => (
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
          {"cards" in section && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {(section as { cards: ReadonlyArray<{ title: string; body: string }> }).cards.map(
                (card, i) => (
                  <div
                    key={i}
                    className="rounded-xl border-l-4 border-brand-500 border border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-600 hover:shadow-md hover:bg-brand-50/20"
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
          {"steps" in section && (
            <div className="mt-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <ol className="list-decimal list-inside space-y-2 text-slate-700">
                {(section as { steps: readonly string[] }).steps.map((step, i) => (
                  <li key={i} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </section>
      ))}

      <section className="mb-10 rounded-2xl border-2 border-slate-200 bg-slate-50/50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">Where to Start</h2>
        <p className="mt-2 text-slate-700">
          Jump straight to the most useful pages:
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {howThisSiteWorksPage.startHereLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <RelatedTrustLinks links={relatedLinks} heading="Related pages" />
    </TrustPageLayout>
  );
}
