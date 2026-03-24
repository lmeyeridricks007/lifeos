import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cloneSafeMetadata } from "@/lib/metadata";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { headers } from "next/headers";
import { DEV_SIMULATE_LIVE_HEADER } from "@/src/lib/publishing/devSimulateLive";
import { isOriginCountryGuidePubliclyVisible } from "@/src/lib/countries/originCountryPublishing";
import { buildCountryPageModel } from "@/src/lib/countries/buildCountryPageModel";
import { countryModelToGuideData } from "@/src/lib/countries/countryModelToGuideData";
import { getCountryBySlug, getCountryStaticParams } from "@/src/lib/countries/getCountryBySlug";
import { loadTemplateData } from "@/src/lib/countries/loadCountries";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();

function hasPublicAsset(relativePath: string): boolean {
  return existsSync(path.join(process.cwd(), "public", relativePath.replace(/^\//, "")));
}

function getModel(countrySlug: string) {
  const country = getCountryBySlug(countrySlug);
  if (!country) return null;
  return buildCountryPageModel(country, loadTemplateData());
}

export function generateStaticParams() {
  return getCountryStaticParams();
}

const FALLBACK_META = {
  title: "Moving to the Netherlands from your country",
  description: "Practical planning guidance for moving to the Netherlands.",
} as const;

/** Precomputed static metadata per country so Next.js never clones non-serializable values (avoids "Cannot clone object of unsupported type"). */
function buildStaticMetadataMap(): Record<string, Metadata> {
  const map: Record<string, Metadata> = {};
  for (const { country: slug } of getCountryStaticParams()) {
    const model = getModel(slug);
    if (!model) continue;
    const canonicalPath =
      model.seo.canonicalPath.startsWith("/") ? model.seo.canonicalPath : `/${model.seo.canonicalPath}`;
    const kw = model.seo.keywords?.length
      ? model.seo.keywords.map(String).join(", ")
      : undefined;
    const raw = {
      title: String(model.seo.title),
      description: String(model.seo.description),
      ...(kw ? { keywords: kw } : {}),
      alternates: { canonical: canonicalPath },
      openGraph: {
        title: String(model.seo.title),
        description: String(model.seo.description),
        type: "article" as const,
        url: canonicalPath,
      },
      twitter: {
        card: "summary_large_image" as const,
        title: String(model.seo.title),
        description: String(model.seo.description),
      },
    };
    map[slug] = cloneSafeMetadata(raw);
  }
  return map;
}

const STATIC_METADATA_BY_COUNTRY = buildStaticMetadataMap();

/** Return only precomputed plain-object metadata so metadata is static and clone-safe. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }> | { country: string };
}): Promise<Metadata> {
  const countrySlug =
    typeof params === "object" && "then" in params ? (await params).country : params.country;
  const meta = STATIC_METADATA_BY_COUNTRY[countrySlug];
  if (meta) return meta;
  return cloneSafeMetadata({ title: FALLBACK_META.title, description: FALLBACK_META.description });
}

export default async function CountryRoutePage({
  params,
}: {
  params: Promise<{ country: string }> | { country: string };
}) {
  const countrySlug =
    typeof params === "object" && "then" in params ? (await params).country : params.country;

  const enforcePublishDates = headers().get(DEV_SIMULATE_LIVE_HEADER) === "1";
  if (!isOriginCountryGuidePubliclyVisible(countrySlug, new Date(), { enforcePublishDates })) {
    notFound();
  }

  const model = getModel(countrySlug);
  if (!model) notFound();

  const countryHeroWebp = `/images/countries/${model.slug}-to-netherlands-hero.webp`;
  const countryHeroPng = `/images/countries/${model.slug}-to-netherlands-hero.png`;
  const defaultHeroPath = "/images/countries/netherlands-relocation-planning-hero.png";
  const heroImageSrc = hasPublicAsset(countryHeroWebp)
    ? countryHeroWebp
    : hasPublicAsset(countryHeroPng)
      ? countryHeroPng
      : hasPublicAsset(defaultHeroPath)
        ? defaultHeroPath
        : undefined;

  const data = countryModelToGuideData(model, { heroImageSrc, baseUrl });

  const placementId = model.affiliate.placementId;
  const affiliateResult = loadPlacementWithProviders(placementId, "netherlands", model.slug);
  const affiliateBlocks: Record<
    string,
    {
      placement: NonNullable<typeof affiliateResult>["placement"];
      items: NonNullable<typeof affiliateResult>["items"];
    }
  > = {};
  if (affiliateResult != null) {
    affiliateBlocks[placementId] = { placement: affiliateResult.placement, items: affiliateResult.items };
  }

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Moving", item: new URL("/netherlands/moving/", baseUrl).toString() },
    {
      name: data.breadcrumbLabel ?? data.title,
      item: new URL(data.path, baseUrl).toString(),
    },
  ];

  const canonicalUrl = new URL(data.path.startsWith("/") ? data.path : `/${data.path}`, baseUrl).toString();
  const serializableData = JSON.parse(JSON.stringify(data));
  const serializableBlocks = JSON.parse(JSON.stringify(affiliateBlocks));
  const datePublished =
    typeof serializableData.publishDate === "string" ? serializableData.publishDate : undefined;

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <WebPageJsonLd
        name={data.metaTitle ?? data.title}
        description={data.description}
        urlPath={data.path}
        datePublished={datePublished}
      />
      <ArticleJsonLd
        headline={data.title}
        description={data.description}
        dateModified={datePublished ?? new Date().toISOString().slice(0, 10)}
        urlPath={data.path}
      />
      {data.faq?.length ? <FaqPageJsonLd items={data.faq} /> : null}
      <GuidePageTemplate
        data={serializableData}
        affiliateBlocks={serializableBlocks}
        canonicalUrl={canonicalUrl}
      />
    </>
  );
}
