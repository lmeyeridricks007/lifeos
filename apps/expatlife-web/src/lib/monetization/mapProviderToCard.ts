import type { MonetizationProvider } from "@/src/lib/monetization/types";
import type { ProviderCardProps } from "@/src/components/monetization/provider-card-types";

export function monetizationProviderToCardProps(provider: MonetizationProvider): ProviderCardProps {
  const href =
    provider.isAffiliate && provider.affiliateUrl.trim() !== ""
      ? provider.affiliateUrl
      : provider.directUrl;

  return {
    name: provider.name,
    logo: provider.logo,
    description: provider.shortDescription,
    tags: provider.tags,
    bestFor: provider.bestFor,
    priceHint: provider.priceHint,
    ctaLabel: provider.isAffiliate ? "View offer" : "Visit site",
    href,
    isAffiliate: provider.isAffiliate,
    disclosureText: provider.disclosureText,
    featured: false,
  };
}
