import type { ReactNode } from "react";
import { AffiliateSection } from "@/src/components/monetization/AffiliateSection";
import { getRecommendationsForContext } from "@/src/lib/monetization/getRecommendationsForContext";
import {
  clampProvidersForPageType,
  DEFAULT_MONETIZATION_DISCLOSURE,
  monetizationProviderToCardProps,
} from "@/src/lib/monetization";
import type { MonetizationProvider } from "@/src/lib/monetization/types";
import type {
  ContextualAffiliateCategory,
  ContextualAffiliateConfig,
} from "@/src/lib/monetization/contextualAffiliatePlan";
import { NETHERLANDS_GUIDE_PAGE_MONETIZATION } from "@/src/lib/monetization/netherlandsGuideMonetizationRegistry";
import type { PageMonetizationMetadata } from "@/src/lib/monetization/pageMonetizationMetadata";
import { resolveNetherlandsGuideAffiliatePlan } from "@/src/lib/monetization/resolveNetherlandsGuideAffiliatePlan";

function topicForCategory(cat: ContextualAffiliateCategory): string {
  switch (cat) {
    case "banking":
      return "banks";
    case "insurance":
      return "health-insurance";
    case "housing":
      return "housing";
    case "utilities":
      return "utilities";
    case "recommended":
      return "relocation";
  }
}

function normalizePageSlug(path: string): string {
  return path.trim().replace(/^\/+|\/+$/g, "").toLowerCase();
}

function mergePoolsForCombined(
  categories: ContextualAffiliateCategory[],
  pageSlug: string,
  maxTotal: number
): MonetizationProvider[] {
  const seen = new Set<string>();
  const out: MonetizationProvider[] = [];
  for (const cat of categories) {
    const pool = getRecommendationsForContext({
      pageSlug,
      topic: topicForCategory(cat),
      limit: maxTotal,
    });
    for (const p of pool) {
      if (seen.has(p.id)) continue;
      seen.add(p.id);
      out.push(p);
      if (out.length >= maxTotal) return out;
    }
  }
  return out;
}

function providersForConfig(config: ContextualAffiliateConfig, pageSlug: string): MonetizationProvider[] {
  if (config.type === "combined") {
    return mergePoolsForCombined(config.categories, pageSlug, 12);
  }
  return getRecommendationsForContext({
    pageSlug,
    topic: topicForCategory(config.type),
    limit: 12,
  });
}

function labelForCategory(cat: ContextualAffiliateCategory): string {
  switch (cat) {
    case "banking":
      return "banking";
    case "insurance":
      return "health insurance";
    case "housing":
      return "housing";
    case "utilities":
      return "utilities and connectivity";
    case "recommended":
      return "relocation support";
  }
}

const COPY: Record<
  ContextualAffiliateCategory,
  { eyebrow: string; title: string; description: string }
> = {
  banking: {
    eyebrow: "Banking",
    title: "Expat-friendly bank options",
    description: "Accounts that tend to work smoothly for new arrivals—compare before you commit.",
  },
  insurance: {
    eyebrow: "Insurance",
    title: "Health cover for the Netherlands",
    description: "Shortlist of insurers and brokers expats often use to get compliant quickly.",
  },
  housing: {
    eyebrow: "Housing",
    title: "Search and rental platforms",
    description: "Ways to scan the market and line up viewings while you settle your paperwork.",
  },
  utilities: {
    eyebrow: "Utilities",
    title: "Internet, mobile, and energy",
    description: "Get connected—compare common providers for home setup after you arrive.",
  },
  recommended: {
    eyebrow: "Recommended",
    title: "Services for your Netherlands move",
    description: "Curated partners we surface on similar guides—shipping, relocation, and setup help.",
  },
};

function copyForConfig(config: ContextualAffiliateConfig): { eyebrow: string; title: string; description: string } {
  if (config.type !== "combined") {
    return COPY[config.type];
  }
  const labels = config.categories.map(labelForCategory);
  const joined =
    labels.length === 1
      ? labels[0]
      : labels.length === 2
        ? `${labels[0]} and ${labels[1]}`
        : `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
  return {
    eyebrow: "Curated partners",
    title: "Hand-picked for this guide",
    description: `Compare ${joined} options we recommend on Netherlands relocation content.`,
  };
}

export type ContextualAffiliateSectionProps = {
  config: ContextualAffiliateConfig;
  pageSlugPath: string;
  className?: string;
};

export function ContextualAffiliateSection({ config, pageSlugPath, className }: ContextualAffiliateSectionProps) {
  const pageSlug = normalizePageSlug(pageSlugPath);
  const raw = providersForConfig(config, pageSlug);
  const providers = clampProvidersForPageType("guide", raw);
  const items = providers.map(monetizationProviderToCardProps);
  const { eyebrow, title, description } = copyForConfig(config);

  return (
    <AffiliateSection
      className={className}
      eyebrow={eyebrow}
      title={title}
      description={description}
      items={items}
      disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
      cardVariant="expatCopilot"
      contained
    />
  );
}

function mergeGuidePageMonetization(
  slug: string,
  pageMonetization?: PageMonetizationMetadata
): PageMonetizationMetadata {
  return {
    ...(NETHERLANDS_GUIDE_PAGE_MONETIZATION[slug] ?? {}),
    ...(pageMonetization ?? {}),
  };
}

/**
 * Layout-driven `AffiliateSection` slots: merges `NETHERLANDS_GUIDE_PAGE_MONETIZATION[slug]`,
 * optional per-page `monetization` override, then path inference and defaults inside the resolver.
 */
export function buildNetherlandsGuideAffiliateSlots(
  slug: string,
  pageSlugPath: string,
  pageMonetization?: PageMonetizationMetadata
): {
  contextualAffiliateAfterFirstSection: ReactNode;
  contextualAffiliateBeforeNextSteps: ReactNode;
} {
  const merged = mergeGuidePageMonetization(slug, pageMonetization);
  const plan = resolveNetherlandsGuideAffiliatePlan(slug, pageSlugPath, merged);
  return {
    contextualAffiliateAfterFirstSection: plan.mid ? (
      <ContextualAffiliateSection config={plan.mid} pageSlugPath={pageSlugPath} className="!pt-0" />
    ) : null,
    contextualAffiliateBeforeNextSteps: plan.end ? (
      <ContextualAffiliateSection config={plan.end} pageSlugPath={pageSlugPath} />
    ) : null,
  };
}

/** @deprecated Use `buildNetherlandsGuideAffiliateSlots`. */
export const buildNetherlandsGuideContextualAffiliateSlots = buildNetherlandsGuideAffiliateSlots;
