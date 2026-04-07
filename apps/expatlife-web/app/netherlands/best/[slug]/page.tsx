import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd } from "@/lib/seo/jsonld";
import { BestProvidersPageTemplate } from "@/src/components/monetization/BestProvidersPageTemplate";
import {
  BEST_PROVIDERS_PAGE_SLUGS,
  isBestProvidersSlug,
  loadBestProvidersPage,
} from "@/src/data/monetization/best-pages";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BEST_PROVIDERS_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = loadBestProvidersPage(slug);
  if (!content) return { title: "Not found" };
  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: { canonical: content.path },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "article",
      url: new URL(content.path, baseUrl).toString(),
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
    },
  };
}

export default async function BestProvidersPage({ params }: Props) {
  const { slug } = await params;
  if (!isBestProvidersSlug(slug)) notFound();
  const content = loadBestProvidersPage(slug);
  if (!content) notFound();

  const shareUrl = new URL(content.path.startsWith("/") ? content.path : `/${content.path}`, baseUrl).toString();
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Best providers", item: new URL("/netherlands/best/", baseUrl).toString() },
    { name: content.hero.title, item: shareUrl },
  ];
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={content.hero.title}
        description={content.seo.description}
        dateModified={dateModified}
        urlPath={content.path}
      />
      <BestProvidersPageTemplate content={content} shareUrl={shareUrl} />
    </>
  );
}
