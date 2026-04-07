"use client";

import Image from "next/image";
import { trackCostOfLivingCalculator } from "@/lib/analytics/track";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";

type CostOfLivingAffiliateSectionProps = {
  cards: PageRecommendedProviderCard[];
};

/**
 * Recommended services grid aligned with relocation / salary tools (registry-sourced cards).
 */
export function CostOfLivingAffiliateSection({ cards }: CostOfLivingAffiliateSectionProps) {
  return (
    <div className="rounded-2xl border-2 border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-6 shadow-expatos-md md:p-8">
      <p className="mb-5 text-sm text-copilot-text-secondary">
        Common options expats compare once they have a rough monthly range — useful for setup, not a substitute for quotes. Some service pages may include affiliate or referral links in the future; ordering here follows planning relevance, not pay-to-rank. Confirm fit, fees, and scope directly with each provider.
      </p>
      <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {cards.map((service) => (
          <a
            key={service.name}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 flex-col rounded-xl border border-copilot-primary/[0.1] bg-copilot-surface p-4 shadow-expatos-sm transition hover:border-copilot-primary/25 hover:shadow-expatos-md sm:p-5"
            onClick={() =>
              trackCostOfLivingCalculator("recommended_service_clicked", {
                service_name: service.name,
                destination_url: service.url,
                section: "recommended_services",
              })
            }
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft p-2 group-hover:bg-copilot-bg-soft/80">
                {service.logo ? (
                  <Image
                    src={service.logo.src}
                    alt={service.logo.alt}
                    width={48}
                    height={48}
                    sizes="48px"
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="text-xs font-semibold text-copilot-text-secondary" aria-hidden>
                    {service.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-copilot-text-primary group-hover:text-copilot-primary">{service.name}</p>
                <p className="mt-0.5 text-sm text-copilot-text-secondary">{service.useFor}</p>
              </div>
            </div>
            <p className="mt-3 border-t border-copilot-primary/[0.08] pt-3 text-sm font-medium text-copilot-text-primary">
              {service.priceRange ?? "Check provider for current pricing."}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
