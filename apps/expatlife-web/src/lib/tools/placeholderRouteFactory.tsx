import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getToolsByCategory } from "@/src/lib/tools/getToolsByCategory";
import { getToolBySlug } from "@/src/lib/tools/getToolBySlug";
import { ToolPlaceholderTemplate } from "@/src/components/tools/ToolPlaceholderTemplate";
import { getPlaceholderJsonLd, getPlaceholderToolData } from "@/src/lib/tools/placeholderPageUtils";

/** Use on all `[slug]` tool placeholder routes so incomplete tools are not indexed. */
export const placeholderToolRobots: NonNullable<Metadata["robots"]> = { index: false, follow: false };

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ToolPlaceholderTemplate tool={data.tool} relatedTools={data.relatedTools} />
    </>
  );
}
