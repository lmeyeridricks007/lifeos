"use client";

import Image from "next/image";
import { trackUtilitiesServicesComparison } from "@/lib/analytics/track";
import type { PageRecommendedProviderCard, UtilitiesServicesServiceGroup } from "@/src/lib/recommended-services/pageRegistryRecommendations";

function ServiceGrid({ title, description, cards }: { title: string; description?: string; cards: PageRecommendedProviderCard[] }) {
  if (!cards.length) return null;
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-copilot-text-primary">{title}</h3>
      {description ? <p className="text-sm text-copilot-text-secondary">{description}</p> : null}
      <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((service) => (
          <a
            key={service.name}
            href={service.url}
            target={/^https?:\/\//i.test(service.url) ? "_blank" : undefined}
            rel={/^https?:\/\//i.test(service.url) ? "noopener noreferrer" : undefined}
            className="group flex min-w-0 flex-col rounded-xl border border-copilot-primary/[0.1] bg-copilot-surface p-4 shadow-expatos-sm transition hover:border-copilot-primary/25 hover:shadow-expatos-md sm:p-5"
            onClick={() =>
              trackUtilitiesServicesComparison("recommended_service_clicked", {
                service_name: service.name,
                destination_url: service.url,
                section: "recommended_services",
              })
            }
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft p-2">
                {service.logo ? (
                  <Image
                    src={service.logo.src}
                    alt={service.logo.alt}
                    width={44}
                    height={44}
                    sizes="44px"
                    className="h-7 w-auto object-contain"
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
            <p className="mt-2 border-t border-copilot-primary/[0.08] pt-2 text-xs font-medium text-copilot-text-primary">
              {service.priceRange ?? "Check provider for current pricing."}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export function UtilitiesServicesRecommendedSections({ groups }: { groups: UtilitiesServicesServiceGroup[] }) {
  return (
    <div className="space-y-10">
      <p className="text-sm text-copilot-text-secondary">
        Named Dutch retailers, comparison sites, and official portals for energy, water, internet and TV, insulation and subsidies, home
        insurance, and mobile. Ordering can shift slightly when your saved calculator inputs suggest bundled rent or extra telecom
        cover—this is not pay-to-rank. Confirm every price and contract on the provider’s own site; some links may be affiliate or
        referral-based and do not affect this tool’s estimates.
      </p>
      {groups.map((g) => (
        <ServiceGrid key={g.title} title={g.title} description={g.description} cards={g.cards} />
      ))}
    </div>
  );
}
