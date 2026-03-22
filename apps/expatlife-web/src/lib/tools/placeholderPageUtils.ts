import type { Metadata } from "next";
import { getSiteOrigin } from "@/lib/site-origin";
import { getToolBySlug } from "@/src/lib/tools/getToolBySlug";
import { getToolsByCategory } from "@/src/lib/tools/getToolsByCategory";
import { getToolCategoryById, type ToolRecord } from "@/src/lib/tools/loadToolRegistry";

const SITE_URL = getSiteOrigin();

export function getPlaceholderToolData(slug: string, categoryId: string): {
  tool: ToolRecord;
  relatedTools: ToolRecord[];
} | null {
  const tool = getToolBySlug(slug, { categoryId, includeAliases: true });
  if (!tool || tool.status !== "placeholder") return null;

  const relatedTools = tool.relatedTools
    .map((route) => getToolsByCategory(categoryId).find((candidate) => candidate.route === route))
    .filter((candidate): candidate is ToolRecord => Boolean(candidate))
    .slice(0, 4);

  return { tool, relatedTools };
}

export function getPlaceholderMetadata(slug: string, categoryId: string): Metadata {
  const tool = getToolBySlug(slug, { categoryId, includeAliases: true });
  if (!tool) {
    return {
      title: "Tool not found",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: tool.seo.title,
    description: tool.seo.description,
    keywords: tool.seo.keywords,
    alternates: { canonical: tool.route },
    openGraph: {
      title: tool.seo.title,
      description: tool.seo.description,
      url: tool.route,
    },
  };
}

export function getPlaceholderJsonLd(tool: ToolRecord) {
  const category = getToolCategoryById(tool.categoryId);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Netherlands", item: new URL("/netherlands/", SITE_URL).toString() },
      { "@type": "ListItem", position: 2, name: "Tools", item: new URL("/netherlands/tools/", SITE_URL).toString() },
      ...(category
        ? [{ "@type": "ListItem", position: 3, name: category.label, item: new URL(category.route, SITE_URL).toString() }]
        : []),
      { "@type": "ListItem", position: category ? 4 : 3, name: tool.title, item: new URL(tool.route, SITE_URL).toString() },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: tool.seo.title,
    description: tool.seo.description,
    url: new URL(tool.route, SITE_URL).toString(),
    breadcrumb,
  };

  return { breadcrumb, webPage };
}
