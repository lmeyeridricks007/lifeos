import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  buildAboutPageSchema,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  getBaseUrl,
} from "@/src/lib/seo/schema";
import { aboutPage } from "@/src/data/site/about";

const path = "/about/";

/*
 * INTERNAL LINKING: Footer and homepage should link to /about/.
 * Contact and legal pages (privacy, terms, disclaimer) can cross-link back to /about/ where sensible.
 * Services hub may reference /about/ or editorial methodology in future.
 */

export const metadata: Metadata = {
  title: aboutPage.seo.title,
  description: aboutPage.seo.description,
  keywords: [...aboutPage.seo.keywords],
  alternates: { canonical: path },
  openGraph: {
    title: aboutPage.seo.title,
    description: aboutPage.seo.description,
    type: "website",
    url: `${getBaseUrl()}${path}`,
  },
  twitter: {
    card: "summary_large_image",
    title: aboutPage.seo.title,
    description: aboutPage.seo.description,
  },
};

export default function AboutPage() {
  const baseUrl = getBaseUrl();
  const aboutPageSchema = buildAboutPageSchema({
    name: aboutPage.hero.title,
    description: aboutPage.seo.description,
    path,
    organizationSchema: buildOrganizationSchema(),
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: `${baseUrl}/` },
    { name: "About", item: `${baseUrl}${path}` },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={aboutPageSchema} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-brand-50/30 to-white py-10 sm:py-14 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_-20%,rgba(59,130,246,0.08),transparent)] pointer-events-none" aria-hidden />
          <Container className="relative">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-slate-900">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-slate-400">
                  /
                </li>
                <li className="font-medium text-slate-900" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
            {aboutPage.hero.eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {aboutPage.hero.eyebrow}
              </p>
            ) : null}
            <h1 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {aboutPage.hero.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              {aboutPage.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={aboutPage.hero.primaryCta.href}
                className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                {aboutPage.hero.primaryCta.label}
                <span className="ml-1" aria-hidden>→</span>
              </Link>
              <Link
                href={aboutPage.hero.secondaryCta.href}
                className="inline-flex items-center rounded-lg border-2 border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-brand-200 hover:bg-brand-50/50"
              >
                {aboutPage.hero.secondaryCta.label}
              </Link>
            </div>
          </Container>
        </section>

        <Section contained={false} className="py-10 md:py-14">
          <Container>
            <div className="max-w-6xl">
            {/* Intro */}
            <section className="space-y-6 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.intro.heading}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {aboutPage.intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* What you'll find here */}
            <section className="mt-14 space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.whatItDoes.heading}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {aboutPage.whatItDoes.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex flex-col rounded-xl border-l-4 border-brand-500 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-600 hover:shadow-md hover:bg-brand-50/20"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="mt-3 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                      Explore →
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Who it's for */}
            <section className="mt-14 space-y-6 rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.audience.heading}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {aboutPage.audience.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* What makes this different */}
            <section className="mt-14 space-y-6 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.differentiators.heading}
              </h2>
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                {aboutPage.differentiators.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            {/* How we approach content */}
            <section className="mt-14 space-y-6 rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.contentApproach.heading}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {aboutPage.contentApproach.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* What we don't replace */}
            <section className="mt-14 space-y-6 rounded-2xl border border-amber-100 bg-amber-50/40 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.whatWeDontDo.heading}
              </h2>
              <ul className="space-y-2 text-slate-700 leading-relaxed">
                {aboutPage.whatWeDontDo.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            {/* Principles */}
            <section className="mt-14 space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.principles.heading}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {aboutPage.principles.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-100 hover:ring-brand-200 transition"
                  >
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Netherlands first */}
            <section className="mt-14 space-y-6 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.netherlandsFirst.heading}
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {aboutPage.netherlandsFirst.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-14 space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.cta.heading}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {aboutPage.cta.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex flex-col rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md hover:bg-brand-50/30"
                  >
                    <span className="font-semibold text-slate-900">{link.label}</span>
                    <span className="mt-1 text-sm text-slate-600">{link.description}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Trust links */}
            <section className="mt-14 space-y-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {aboutPage.trustLinks.heading}
              </h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {aboutPage.trustLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-slate-700 hover:text-slate-900 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
