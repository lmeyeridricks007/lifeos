import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";

type Props = {
  taxAdvisorCards: PageRecommendedProviderCard[];
  payrollCards: PageRecommendedProviderCard[];
  relocationCards: PageRecommendedProviderCard[];
  servicesHubHref: string;
};

function ProviderGrid({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: PageRecommendedProviderCard[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((service) => {
          const initials =
            service.name
              .split(/[\s-]+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((p) => p[0])
              .join("")
              .toUpperCase() || service.name.slice(0, 2).toUpperCase();
          return (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2 group-hover:bg-brand-50">
                  {service.logo ? (
                    <Image
                      src={service.logo.src}
                      alt={service.logo.alt}
                      width={80}
                      height={48}
                      className="h-10 w-auto max-w-[72px] object-contain"
                    />
                  ) : (
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-sm font-semibold text-slate-600"
                      aria-hidden
                    >
                      {initials}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{service.useFor}</p>
                </div>
              </div>
              <p className="mt-3 border-t border-slate-100 pt-3 text-xs font-medium text-slate-700">
                {service.priceRange ?? "Confirm fees and scope with the provider."}
              </p>
              <span className="mt-2 inline-block text-xs font-medium text-brand-600 group-hover:text-brand-700">
                Visit provider →
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function AffiliateSection({ taxAdvisorCards, payrollCards, relocationCards, servicesHubHref }: Props) {
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        <Link
          href={servicesHubHref}
          className="inline-flex min-h-10 items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
        >
          Browse services directory
        </Link>
        <a
          href="https://www.belastingdienst.nl/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-brand-300"
        >
          Official Belastingdienst →
        </a>
      </div>

      <ProviderGrid
        title="Tax advisors"
        subtitle="Independent firms help interpret offers, ruling paperwork, and annual returns."
        cards={taxAdvisorCards}
      />
      <ProviderGrid
        title="Payroll & relocation services"
        subtitle="Providers that often bundle payroll setup, employer support, and international moves."
        cards={payrollCards}
      />
      <ProviderGrid
        title="Relocation consultants"
        subtitle="Hands-on help when an offer depends on timing, housing, and family logistics."
        cards={relocationCards}
      />

      <AffiliateDisclosure
        variant="copilot"
        text="ExpatCopilot may earn a commission from some partners on other pages. Listings here are for planning convenience — editorial / registry-backed shortlists, not pay-to-rank. Always confirm suitability and pricing directly with any provider."
      />
    </div>
  );
}
