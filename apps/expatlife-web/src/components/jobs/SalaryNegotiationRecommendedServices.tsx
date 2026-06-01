import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import { getDutchSalaryNetRelocationConsultantCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { salaryNegotiationNetherlandsPage as page } from "./salaryNegotiationNetherlandsPageModel";

function RelocationProviderCard({ service }: { service: PageRecommendedProviderCard }) {
  const initials =
    service.name
      .split(/[\s-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || service.name.slice(0, 2).toUpperCase();
  const external = service.url.startsWith("http://") || service.url.startsWith("https://");

  const body = (
    <>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft p-2 ring-1 ring-copilot-primary/10">
          {service.logo ? (
            <Image
              src={service.logo.src}
              alt={service.logo.alt}
              width={72}
              height={40}
              className="h-8 w-auto max-w-[64px] object-contain"
            />
          ) : (
            <span className="text-xs font-bold text-brand-strong" aria-hidden>
              {initials}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-foreground">{service.name}</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{service.useFor}</p>
        </div>
      </div>
      <p className="mt-3 border-t border-slate-200/80 pt-3 text-xs text-foreground-muted">
        {service.priceRange ?? "Confirm scope and fees with the provider."}
      </p>
    </>
  );

  const shell = cn(
    "block rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]",
    movingNlCardMicroLiftClass
  );

  if (external) {
    return (
      <a href={service.url} target="_blank" rel="noopener noreferrer" className={cn(shell, "group hover:border-brand-strong/30")}>
        {body}
        <span className="mt-2 inline-block text-xs font-semibold text-link group-hover:text-link-hover">Visit provider →</span>
      </a>
    );
  }

  return (
    <Link href={service.url} className={cn(shell, "group hover:border-brand-strong/30")}>
      {body}
      <span className="mt-2 inline-block text-xs font-semibold text-link group-hover:text-link-hover">Open →</span>
    </Link>
  );
}

export function SalaryNegotiationRecommendedServices() {
  const relocationCards = getDutchSalaryNetRelocationConsultantCards().slice(0, 4);

  return (
    <div className="space-y-8">
      <MoveGuideAffiliateSupportBlock
        placementId={page.affiliatePlacementId}
        categoryLinks={[
          { href: "/netherlands/services/tax-advisors/", label: "Tax advisors directory" },
          { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
          { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
          { href: "/netherlands/services/", label: "Browse all services" },
        ]}
      />

      {relocationCards.length > 0 ? (
        <div className="w-full">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Relocation</p>
          <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">Relocation support alongside offer talks</h3>
          <p className="mt-2 w-full max-w-none text-sm leading-relaxed text-foreground-muted">
            Useful when relocation allowance, housing timing, or family logistics are part of the package — confirm scope and fees
            directly with each provider.
          </p>
          <div className="mt-4 grid w-full gap-4 sm:grid-cols-2">
            {relocationCards.map((service) => (
              <RelocationProviderCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      ) : null}

      <AffiliateDisclosure
        variant="copilot"
        text="ExpatCopilot may earn a commission from some partners on other pages. Listings here are for planning convenience — not pay-to-rank. Always confirm suitability, credentials and pricing with any provider."
      />
    </div>
  );
}
