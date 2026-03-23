import type { Metadata } from "next";
import { Suspense } from "react";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { contactPage } from "@/src/data/site/contact";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { RelatedTrustLinks } from "@/src/components/legal/RelatedTrustLinks";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
export const metadata: Metadata = {
  title: contactPage.seo.title,
  description: contactPage.seo.description,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <TrustPageLayout
      breadcrumbLabel="Contact"
      title={contactPage.hero.title}
      subtitle={contactPage.hero.subtitle}
    >
      <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 space-y-4 text-slate-700">
        {contactPage.intro.paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>
        <p className="mt-1 text-sm text-slate-600">
          We’ll get back to you as soon as we can. For urgent official matters, use the relevant authority.
        </p>
        <div className="mt-6">
          <Suspense fallback={<div className="min-h-[280px] rounded-lg border border-slate-200 bg-slate-50/80" aria-busy />}>
            <ContactForm topics={contactPage.topics} />
          </Suspense>
        </div>
      </div>

      <section className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          {contactPage.whatToContact.heading}
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          {contactPage.whatToContact.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-slate-700">
        <p>{contactPage.note}</p>
      </div>

      <RelatedTrustLinks links={contactPage.relatedLinks} heading="Related" />
    </TrustPageLayout>
  );
}
