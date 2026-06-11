import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { cn } from "@/lib/cn";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  getEmploymentContractMortgageAdvisorCards,
  getEmploymentContractNetherlandsSupportCardGroups,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import {
  EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
  employmentContractNetherlandsPage as page,
} from "./employmentContractNetherlandsPageModel";

const categoryLinks = [
  { href: "/netherlands/services/tax-advisors/", label: "Tax advisors" },
  { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
  { href: "/netherlands/services/visa-consultants/", label: "Visa consultants" },
  { href: "/netherlands/services/financial-advisors/", label: "Financial advisors" },
  { href: "/netherlands/services/mortgage-advisors/", label: "Mortgage advisors" },
  { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
  { href: "/netherlands/services/housing-platforms/", label: "Housing platforms" },
  { href: "/netherlands/services/", label: "Browse all services" },
] as const;

function RecommendedProviderCard({ service }: { service: PageRecommendedProviderCard }) {
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
            <Image src={service.logo.src} alt={service.logo.alt} width={72} height={40} className="h-8 w-auto max-w-[64px] object-contain" />
          ) : (
            <span className="text-xs font-bold text-brand-strong" aria-hidden>{initials}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-foreground">{service.name}</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{service.useFor}</p>
        </div>
      </div>
      <p className="mt-3 border-t border-slate-200/80 pt-3 text-xs text-foreground-muted">{service.priceRange ?? "Confirm scope and fees with the provider."}</p>
    </>
  );

  const shell = cn("block rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass);

  if (external) {
    const outbound = buildTrackedOutboundLink(service.url, {
      pagePath: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
      partnerSlug: service.partnerSlug,
      linkText: "Visit provider",
      isAffiliate: true,
    });
    return (
      <a
        {...trackedOutboundAnchorProps(outbound)}
        target="_blank"
        className={cn(shell, "group hover:border-brand-strong/30")}
      >
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

function ProviderCardSection({
  eyebrow,
  title,
  description,
  cards,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cards: PageRecommendedProviderCard[];
}) {
  if (cards.length === 0) return null;

  return (
    <div className="w-full">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 w-full max-w-none text-sm leading-relaxed text-foreground-muted">{description}</p>
      <div className="mt-4 grid w-full gap-4 sm:grid-cols-2">
        {cards.map((service) => (
          <RecommendedProviderCard key={`${service.name}-${service.url}`} service={service} />
        ))}
      </div>
    </div>
  );
}

function SectionAffiliateDisclosure() {
  return (
    <AffiliateDisclosure
      variant="copilot"
      text="Some links may be affiliate or referral links. Listings are for discovery only — not pay-to-rank and not legal, tax or immigration advice. Confirm credentials and scope with any provider."
    />
  );
}

export function EmploymentContractHsmAffiliateSupport() {
  const { visaPermits } = getEmploymentContractNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration support when sponsorship is in your contract"
        description="Useful when salary thresholds, recognised sponsors or permit timing still need scoped professional help alongside official IND guidance — not as contract legal advice."
        cards={visaPermits}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function EmploymentContractSalaryTaxAffiliateSupport() {
  const { taxPayroll } = getEmploymentContractNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Compare expat tax support while reviewing salary lines"
        description="Helpful when gross pay, 30% ruling eligibility, relocation allowances or cross-border income make take-home modelling harder than the headline figure."
        cards={taxPayroll}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function EmploymentContractMortgageAffiliateSupport() {
  const mortgageCards = getEmploymentContractMortgageAdvisorCards();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Mortgage advisers"
        title="Compare mortgage advisers before you assume your contract supports borrowing"
        description="Lenders may treat probation, contract duration and visa status differently — confirm requirements with a licensed adviser rather than relying on the offer letter alone."
        cards={mortgageCards}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function EmploymentContractNetherlandsRecommendedServices() {
  const { visaPermits, taxPayroll, relocation, setup } = getEmploymentContractNetherlandsSupportCardGroups();

  return (
    <div className="space-y-8">
      <MoveGuideAffiliateSupportBlock
        placementId={page.affiliatePlacementId}
        categoryLinks={[...categoryLinks]}
        browseLabel="Browse directories: "
      />
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Compare immigration lawyers and visa consultants"
        description="Helpful when sponsorship clauses, recognised employers or permit timing still feel unclear before you sign."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Expat tax support for contract and salary review"
        description="Many international hires compare gross lines, ruling eligibility and relocation allowances with scoped tax help — not as contract legal advice."
        cards={taxPayroll}
      />
      <ProviderCardSection
        eyebrow="Relocation"
        title="Relocation support when a signed contract leads to a move"
        description="Useful once city, start date and family logistics need planning alongside your new role — confirm what your employer covers."
        cards={relocation}
      />
      <ProviderCardSection
        eyebrow="Post-sign setup"
        title="Banking, health insurance and housing search"
        description="Many international hires line up accounts, mandatory insurance and housing in parallel with contract signing — scope and fees differ by provider."
        cards={setup}
      />
      <AffiliateDisclosure
        variant="copilot"
        text="ExpatCopilot may earn a commission from some partners. Listings here support contract planning — not pay-to-rank placement and not legal or immigration guarantees. Confirm scope, credentials and pricing with any provider."
      />
    </div>
  );
}
