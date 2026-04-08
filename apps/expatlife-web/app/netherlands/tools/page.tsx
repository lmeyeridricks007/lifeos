import { AllToolsHubTemplate } from "@/src/components/tools/AllToolsHubTemplate";
import { getFeaturedTools } from "@/src/lib/tools/getFeaturedTools";
import { loadToolCategories } from "@/src/lib/tools/loadToolRegistry";
import { getAllToolsHubJsonLd, getAllToolsHubMetadata } from "@/src/lib/tools/hubPageUtils";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = getAllToolsHubMetadata();

export default function NetherlandsToolsHubPage() {
  const categories = loadToolCategories().filter((c) => c?.id && c?.route);
  const featuredTools = getFeaturedTools([
    "moving-checklist",
    "arrival-planner",
    "first-90-days",
    "document-readiness",
    "expat-cost-of-living-calculator",
    "dutch-salary-net-calculator",
    "thirty-percent-ruling-calculator",
    "double-tax-awareness-tool",
    "netherlands-city-comparison-tool",
    "payslip-decoder",
    "job-offer-comparison-tool",
  ]).filter((t) => t?.id && t?.route);
  const { collectionPage, breadcrumb } = getAllToolsHubJsonLd();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AllToolsHubTemplate categories={categories} featuredTools={featuredTools} />
    </>
  );
}
