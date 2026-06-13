import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { cn } from "@/lib/cn";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  getContractorVsEmployeeNetherlandsSupportCardGroups,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import {
  ACCOUNTANTS_PATH,
  BUSINESS_CONSULTANTS_PATH,
  CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
  FINANCIAL_ADVISORS_PATH,
  IMMIGRATION_LAWYERS_PATH,
  MORTGAGE_ADVISORS_PATH,
  TAX_ADVISORS_PATH,
  contractorVsEmployeeNetherlandsPage as page,
} from "./contractorVsEmployeeNetherlandsPageModel";

const categoryLinks = [
  { href: FINANCIAL_ADVISORS_PATH, label: "Financial advisors" },
  { href: TAX_ADVISORS_PATH, label: "Tax advisors" },
  { href: ACCOUNTANTS_PATH, label: "Accountants" },
  { href: MORTGAGE_ADVISORS_PATH, label: "Mortgage advisors" },
  { href: BUSINESS_CONSULTANTS_PATH, label: "Business consultants" },
  { href: IMMIGRATION_LAWYERS_PATH, label: "Immigration lawyers" },
  { href: "/netherlands/services/", label: "Browse all services" },
];

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
      pagePath: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
      partnerSlug: service.partnerSlug,
      linkText: "Visit provider",
      isAffiliate: true,
    });
    return (
      <a {...trackedOutboundAnchorProps(outbound)} target="_blank" className={cn(shell, "group hover:border-brand-strong/30")}>
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
      text="Some links may be affiliate or referral links. Listings are for discovery only — not pay-to-rank. Confirm credentials and scope with any provider."
    />
  );
}

export function ContractorVsEmployeeTaxAffiliateSupport() {
  const { taxPayroll } = getContractorVsEmployeeNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Tax & accounting"
        title="Tax advisors when structure comparison gets complex"
        description="Useful for employment vs contractor net comparisons, cross-border clients and classification questions — verify Belastingdienst rules independently."
        cards={taxPayroll}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function ContractorVsEmployeeVisaAffiliateSupport() {
  const { visaPermits } = getContractorVsEmployeeNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration support when permits constrain structure choice"
        description="Permit rules may limit contractor activity — use qualified help for IND timing, not everyday offer comparisons."
        cards={visaPermits}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function ContractorVsEmployeeNetherlandsRecommendedServices() {
  const { visaPermits, taxPayroll, relocation, setup } = getContractorVsEmployeeNetherlandsSupportCardGroups();

  return (
    <div className="mt-8 space-y-8">
      <MoveGuideAffiliateSupportBlock placementId={page.affiliatePlacementId} categoryLinks={categoryLinks} />
      <ProviderCardSection
        eyebrow="Tax & accounting"
        title="Tax advisors and accountants for structure decisions"
        description="Core support for comparing employment packages with contractor income, BTW and cross-border context."
        cards={taxPayroll}
      />
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration lawyers when permits affect route choice"
        description="Route changes, side contractor activity and permit restrictions alongside employment offers."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Relocation"
        title="Relocation services aligned with work structure timing"
        description="Moves that depend on offer type, housing search and arrival planning."
        cards={relocation}
      />
      <ProviderCardSection
        eyebrow="Post-move setup"
        title="Banking, health insurance and housing during transitions"
        description="Many professionals coordinate accounts and insurance around structure changes."
        cards={setup}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}
