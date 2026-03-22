/**
 * BreadcrumbList structured data for tool and guide pages.
 */

import { getSiteOrigin } from "@/lib/site-origin";

const BASE_URL = getSiteOrigin();

export type BreadcrumbItem = { name: string; url: string };

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/** Standard breadcrumb for Netherlands moving tools: Home → Netherlands → Moving → Tools → [Tool Name]. */
export function getToolBreadcrumbItems(toolName: string, toolPath: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Moving to the Netherlands", url: "/netherlands/moving-to-the-netherlands/" },
    { name: "Tools", url: "/netherlands/moving/tools/" },
    { name: toolName, url: toolPath },
  ];
}
