"use client";

import Image from "next/image";
import Link from "next/link";
import { trackRentAffordabilityCalculator } from "@/lib/analytics/track";
import type {
  PageRecommendedProviderCard,
  RentAffordabilityServiceBundles,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";

function ServiceGrid({ title, cards }: { title: string; cards: PageRecommendedProviderCard[] }) {
  if (!cards.length) return null;
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-copilot-text-primary">{title}</h3>
      <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((service) => (
          <a
            key={service.name}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 flex-col rounded-xl border border-copilot-primary/[0.1] bg-copilot-surface p-4 shadow-expatos-sm transition hover:border-copilot-primary/25 hover:shadow-expatos-md sm:p-5"
            onClick={() =>
              trackRentAffordabilityCalculator("recommended_service_clicked", {
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

export function RentAffordabilityRecommendedSections({ bundles }: { bundles: RentAffordabilityServiceBundles }) {
  return (
    <div className="space-y-10">
      <p className="text-sm text-copilot-text-secondary">
        Editorial shortlists for common next steps after you size a budget: search, banking, insurance, and relocation help. Ordering reflects planning relevance, not pay-to-rank. Fees, eligibility, and suitability vary — confirm directly with each provider. Some ExpatCopilot pages may include affiliate or referral links; they do not change how this tool calculates your result.
      </p>
      <ServiceGrid title="1. Housing platforms & rental search" cards={bundles.housing} />
      <ServiceGrid title="2. Banks (salary deposits & rent payments)" cards={bundles.banks} />
      <ServiceGrid title="3. Health insurance" cards={bundles.health} />
      <ServiceGrid title="4. Relocation & rental support" cards={bundles.relocation} />
      <div className="rounded-xl border border-dashed border-copilot-primary/20 bg-copilot-bg-soft/60 p-4 md:p-5">
        <h3 className="text-sm font-semibold text-copilot-text-primary">5. Utilities & internet setup</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          This rent calculator&apos;s <strong>setup</strong> section already includes an internet and utilities activation buffer — use it alongside move-in cash planning. Comparison tooling for energy and broadband is easy to overfit, so we keep this grid as a placeholder until registry entries are curated like the other rows. For deeper provider context, read the{" "}
          <Link href="/netherlands/living/rental-market/" className="font-semibold text-copilot-primary hover:underline">
            rental market guide
          </Link>{" "}
          and{" "}
          <Link href="/netherlands/living/tools/utilities-services-comparison/" className="font-semibold text-copilot-primary hover:underline">
            utilities &amp; services comparison tool
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
