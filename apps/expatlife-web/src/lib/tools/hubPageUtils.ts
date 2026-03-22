import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteOrigin } from "@/lib/site-origin";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { getToolsByCategory } from "@/src/lib/tools/getToolsByCategory";
import { loadToolCategories, loadToolRegistry, type ToolCategory, type ToolRecord } from "@/src/lib/tools/loadToolRegistry";

const SITE_URL = getSiteOrigin();

export function getCategoryByIdOr404(categoryId: string): ToolCategory {
  const category = loadToolCategories().find((item) => item.id === categoryId);
  if (!category) notFound();
  return category;
}

export function getCategoryHubData(categoryId: string): {
  category: ToolCategory;
  liveTools: ToolRecord[];
  comingSoonTools: ToolRecord[];
  relatedGuides: string[];
} {
  const category = getCategoryByIdOr404(categoryId);
  const liveTools = getToolsByCategory(categoryId, { status: "live" });
  const comingSoonTools = getToolsByCategory(categoryId, { status: "placeholder" });
  const relatedGuides = Array.from(
    new Set([
      ...(category.relatedGuides ?? []),
      ...liveTools.flatMap((tool) => tool.relatedGuides),
      ...comingSoonTools.flatMap((tool) => tool.relatedGuides),
    ])
  ).slice(0, 8);
  return { category, liveTools, comingSoonTools, relatedGuides };
}

export function getCategoryHubMetadata(categoryId: string): Metadata {
  const { category, liveTools, comingSoonTools } = getCategoryHubData(categoryId);
  const title = `${category.label} tools for expats in the Netherlands`;
  const description = `${category.description} ${liveTools.length} live tools and ${comingSoonTools.length} more coming soon.`;
  return buildSocialMetadata({
    title,
    description,
    path: category.route,
    ogType: "website",
  });
}

export function getCategoryHubJsonLd(categoryId: string) {
  const { category, liveTools, comingSoonTools } = getCategoryHubData(categoryId);
  const tools = [...liveTools, ...comingSoonTools];
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.label} tools`,
    description: category.description,
    url: new URL(category.route, SITE_URL).toString(),
    hasPart: tools.map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.title,
      url: new URL(tool.route, SITE_URL).toString(),
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Netherlands", item: new URL("/netherlands/", SITE_URL).toString() },
      { "@type": "ListItem", position: 2, name: "Tools", item: new URL("/netherlands/tools/", SITE_URL).toString() },
      { "@type": "ListItem", position: 3, name: category.label, item: new URL(category.route, SITE_URL).toString() },
    ],
  };

  return { collectionPage, breadcrumb };
}

export function getAllToolsHubMetadata(): Metadata {
  return buildSocialMetadata({
    title: "Netherlands tools hub",
    description:
      "Explore calculators, checklists, and planners for moving, money, work, housing, visas, and daily life in the Netherlands — by category.",
    path: "/netherlands/tools/",
    ogType: "website",
  });
}

export function getAllToolsHubJsonLd() {
  const categories = loadToolCategories();
  const tools = loadToolRegistry();
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Netherlands tools",
    description: "ExpatLife tools catalog for the Netherlands.",
    url: new URL("/netherlands/tools/", SITE_URL).toString(),
    hasPart: categories.map((category) => ({
      "@type": "CollectionPage",
      name: category.label,
      url: new URL(category.route, SITE_URL).toString(),
    })),
    mainEntity: tools.slice(0, 20).map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.title,
      url: new URL(tool.route, SITE_URL).toString(),
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Netherlands", item: new URL("/netherlands/", SITE_URL).toString() },
      { "@type": "ListItem", position: 2, name: "Tools", item: new URL("/netherlands/tools/", SITE_URL).toString() },
    ],
  };

  return { collectionPage, breadcrumb };
}
