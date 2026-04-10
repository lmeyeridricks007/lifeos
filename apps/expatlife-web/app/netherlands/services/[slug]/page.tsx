import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { PageHero, PillarGuideHeroRegion } from "@/components/page/pillar-template";
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

  const path = category.href.startsWith("/") ? category.href : `/${category.href}`;
  const shareUrl = new URL(path, baseUrl).toString();

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: category.name, item: shareUrl },
  ];

  const datePublished = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <WebPageJsonLd
        name={category.name}
        description={category.description}
        urlPath={path.endsWith("/") ? path : `${path}/`}
        datePublished={datePublished}
      />
      <div className="min-h-screen">
        <PillarGuideHeroRegion>
          <Container className="w-full max-w-screen-2xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-copilot-text-secondary">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-copilot-text-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-copilot-text-muted">
                  /
                </li>
                <li>
                  <Link href="/netherlands/" className="hover:text-copilot-text-primary">
                    Netherlands
                  </Link>
                </li>
                <li aria-hidden className="text-copilot-text-muted">
                  /
                </li>
                <li>
                  <Link href="/netherlands/services/" className="hover:text-copilot-text-primary">
                    Services
                  </Link>
                </li>
                <li aria-hidden className="text-copilot-text-muted">
                  /
                </li>
                <li className="font-medium text-copilot-text-primary" aria-current="page">
                  {category.name}
                </li>
              </ol>
            </nav>
            <PageHero
              movingPillarIdentity
              eyebrow="Netherlands · Services"
              title={category.name}
              subtitle={category.description}
              heroImage={null}
              shareUrl={shareUrl}
              pageId={path}
              afterSubtitle={
                <div className="mt-4 space-y-3">
                  {category.examples?.length ? (
                    <p className="text-sm text-copilot-text-secondary">e.g. {category.examples.join(", ")}</p>
                  ) : null}
                  <p className="text-sm text-copilot-text-muted">Best for: {category.bestForStage}</p>
                  <Link
                    href="/netherlands/services/"
                    className="inline-flex items-center rounded-xl border border-slate-900/12 bg-copilot-surface px-4 py-2 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/10 hover:bg-copilot-bg-soft"
                  >
                    ← Back to all services
                  </Link>
                  <p className="pt-3 text-sm leading-relaxed text-copilot-text-secondary">
                    Planning a move? Start with the{" "}
                    <Link href="/netherlands/moving-to-the-netherlands/" className="font-medium text-link hover:underline">
                      Netherlands moving hub
                    </Link>
                    , compare{" "}
                    <Link href="/netherlands/cities/" className="font-medium text-link hover:underline">
                      Dutch cities
                    </Link>
                    , read{" "}
                    <Link href="/netherlands/living/survival-guide/" className="font-medium text-link hover:underline">
                      the Netherlands Survival Guide
                    </Link>
                    , and browse{" "}
                    <Link href="/netherlands/tools/" className="font-medium text-link hover:underline">
                      free planning tools
                    </Link>
                    .
                  </p>
                  <p className="pt-2 text-xs text-copilot-text-muted">
                    Full provider comparisons and FAQs for this category live on the dedicated category URL when available
                    from the services hub.
                  </p>
                </div>
              }
            />
          </Container>
        </PillarGuideHeroRegion>
      </div>
    </>
  );
}
