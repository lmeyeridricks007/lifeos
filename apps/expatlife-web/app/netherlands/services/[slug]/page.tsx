import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { NETHERLANDS_SERVICES_CATEGORIES } from "@/src/data/services/categories";
import { getSiteOrigin } from "@/lib/site-origin";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
const baseUrl = getSiteOrigin();

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return NETHERLANDS_SERVICES_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = NETHERLANDS_SERVICES_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Service Category | ExpatCopilot" };
  const title = `${category.name} for Expats in the Netherlands`;
  return buildSocialMetadata({
    title,
    description: category.description,
    path: category.href,
    ogType: "website",
  });
}

export default async function NetherlandsServiceCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = NETHERLANDS_SERVICES_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: category.name, item: new URL(category.href, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <div className="min-h-screen bg-slate-50">
        <Container className="py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
              <li aria-hidden className="text-slate-400">/</li>
              <li><Link href="/netherlands/" className="hover:text-slate-900">Netherlands</Link></li>
              <li aria-hidden className="text-slate-400">/</li>
              <li><Link href="/netherlands/services/" className="hover:text-slate-900">Services</Link></li>
              <li aria-hidden className="text-slate-400">/</li>
              <li className="font-medium text-slate-900" aria-current="page">{category.name}</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{category.name}</h1>
          <p className="mt-4 text-slate-700 leading-relaxed">{category.description}</p>
          {category.examples?.length ? (
            <p className="mt-2 text-sm text-slate-600">e.g. {category.examples.join(", ")}</p>
          ) : null}
          <p className="mt-2 text-sm text-slate-500">Best for: {category.bestForStage}</p>
          <div className="mt-8">
            <Link
              href="/netherlands/services/"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ← Back to all services
            </Link>
          </div>
          {/* Category page content (provider comparisons, guides, FAQs) can be added here. */}
        </Container>
      </div>
    </>
  );
}
