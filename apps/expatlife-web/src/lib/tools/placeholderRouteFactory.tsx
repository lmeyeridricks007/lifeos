import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getSiteOrigin } from "@/lib/site-origin";
import { getToolsByCategory } from "@/src/lib/tools/getToolsByCategory";
import { getToolBySlug } from "@/src/lib/tools/getToolBySlug";
import { ToolPlaceholderTemplate } from "@/src/components/tools/ToolPlaceholderTemplate";
import {
  buildPlaceholderToolShareMetadata,
  getPlaceholderJsonLd,
  getPlaceholderToolData,
} from "@/src/lib/tools/placeholderPageUtils";

/** Use on all `[slug]` tool placeholder routes so incomplete tools are not indexed. */
export const placeholderToolRobots: NonNullable<Metadata["robots"]> = { index: false, follow: false };

export async function generatePlaceholderToolPageMetadata(
  categoryId: string,
  params: Promise<{ slug: string }>
): Promise<Metadata> {
  const { slug } = await params;
  return buildPlaceholderToolShareMetadata(slug, categoryId);
}

export function getPlaceholderStaticParams(categoryId: string) {
  return getToolsByCategory(categoryId, { status: "placeholder" }).map((tool) => ({ slug: tool.slug }));
}

export function renderPlaceholderPage(categoryId: string, slug: string) {
  const tool = getToolBySlug(slug, { categoryId, includeAliases: true });
  if (!tool) notFound();

  // Keep live routes canonical and avoid duplicate pages from aliases.
  if (tool.status === "live") redirect(tool.route);

  const data = getPlaceholderToolData(slug, categoryId);
  if (!data) notFound();

  const { webPage, breadcrumb } = getPlaceholderJsonLd(data.tool);
  const base = getSiteOrigin();
  const shareUrl = new URL(data.tool.route, base).toString();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ToolPlaceholderTemplate
        tool={data.tool}
        relatedTools={data.relatedTools}
        shareUrl={shareUrl}
        pageId={data.tool.route}
      />
    </>
  );
}
