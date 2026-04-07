import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClusterTopicScaffold } from "@/src/components/content/ClusterTopicScaffold";
import { isContentHidden } from "@/src/lib/content/contentPublishStatus";
import {
  getClusterPageByPath,
  getClusterSlugsForStaticParams,
} from "@/src/lib/guides/livingCultureCluster";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { normalizeSitePath } from "@/src/data/site/route-registry";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getClusterSlugsForStaticParams("living").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = normalizeSitePath(`/netherlands/living/${slug}`);
  const entry = getClusterPageByPath(path);
  if (!entry || isContentHidden(entry.contentStatus)) return { title: "Living in the Netherlands" };
  return buildSocialMetadata({
    title: entry.title,
    description: entry.metaDescription,
    path: entry.path,
    ogType: "article",
  });
}

export default async function NetherlandsLivingTopicPage({ params }: Props) {
  const { slug } = await params;
  const path = normalizeSitePath(`/netherlands/living/${slug}`);
  const entry = getClusterPageByPath(path);
  if (!entry || entry.cluster !== "living" || entry.slug === "" || isContentHidden(entry.contentStatus))
    notFound();
  return <ClusterTopicScaffold entry={entry} />;
}
