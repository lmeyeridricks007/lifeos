"use client";

import Image from "next/image";
import Link from "next/link";
import { trackChildcareEstimator } from "@/lib/analytics/track";
import type { ChildcareRecommendedServiceGroup } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { cn } from "@/lib/cn";

const BASE = "/netherlands";

const INTERNAL_NEXT = [
  {
    href: `${BASE}/family/tools/`,
    label: "Family tools hub",
    body: "More calculators and planners for partners and children.",
  },
  {
    href: `${BASE}/moving-to-netherlands-with-kids/`,
    label: "Moving with kids",
    body: "Timing schools, childcare, and admin in one narrative.",
  },
  {
    href: `${BASE}/health-insurance-netherlands/`,
    label: "Health insurance",
    body: "Mandatory basic cover for most residents — compare before you arrive.",
  },
  {
    href: `${BASE}/open-bank-account-netherlands/`,
    label: "Open a Dutch bank account",
    body: "Pay rent and childcare from a local account when rules allow.",
  },
] as const;

type Props = { groups: ChildcareRecommendedServiceGroup[] };

export function ChildcareRecommendedServices({ groups }: Props) {
  return (
    <div className="rounded-2xl border-2 border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-6 shadow-expatos-md md:p-8">
      <h3 className="text-lg font-semibold text-copilot-text-primary">Official links & more providers</h3>
      <p className="mt-2 text-sm text-copilot-text-secondary">
        Use this block for Rijksoverheid / Belastingdienst context and additional registry-listed services. Above it, the same
        section includes childcare search directories, relocation firms that help with childcare and schools, and family banking
        or insurance picks — each in its own card group.
      </p>

      <div className="mt-6 rounded-xl border border-copilot-primary/10 bg-white/70 p-4 md:p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-copilot-primary">On ExpatCopilot</p>
        <p className="mt-1 text-sm text-copilot-text-secondary">
          Pair childcare numbers with guides and tools you already use for the rest of the move.
        </p>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {INTERNAL_NEXT.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg border border-copilot-primary/10 bg-copilot-bg-soft/50 px-3 py-2.5 text-sm transition hover:border-copilot-primary/25 hover:bg-copilot-bg-soft"
                onClick={() =>
                  trackChildcareEstimator("recommended_internal_clicked", {
                    href: item.href,
                    section: "recommended_services_internal",
                  })
                }
              >
                <span className="font-semibold text-copilot-primary">{item.label}</span>
                <span className="mt-0.5 block text-xs text-copilot-text-secondary">{item.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 space-y-10">
        {groups.map((group) => (
          <section key={group.title} aria-labelledby={`childcare-rec-${slugify(group.title)}`}>
            <h4 id={`childcare-rec-${slugify(group.title)}`} className="text-base font-semibold text-copilot-text-primary">
              {group.title}
            </h4>
            {group.description ? (
              <p className="mt-1.5 text-sm text-copilot-text-secondary">{group.description}</p>
            ) : null}
            <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {group.cards.map((service) => (
                <a
                  key={`${group.title}-${service.name}`}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex min-w-0 flex-col rounded-xl border border-copilot-primary/[0.1] bg-copilot-surface p-4 shadow-expatos-sm transition hover:border-copilot-primary/25 hover:shadow-expatos-md sm:p-5"
                  )}
                  onClick={() =>
                    trackChildcareEstimator("recommended_service_clicked", {
                      service_name: service.name,
                      destination_url: service.url,
                      section: "recommended_services",
                      group: group.title,
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
          </section>
        ))}
      </div>
    </div>
  );
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
