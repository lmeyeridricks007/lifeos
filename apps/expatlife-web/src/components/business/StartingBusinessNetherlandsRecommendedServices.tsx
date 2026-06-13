import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { cn } from "@/lib/cn";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import { getStartingBusinessNetherlandsSupportCardGroups } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import {
  ACCOUNTANTS_PATH,
  IMMIGRATION_LAWYERS_PATH,
  STARTING_BUSINESS_NETHERLANDS_PATH,
  TAX_ADVISORS_PATH,
  startingBusinessNetherlandsPage as page,
} from "./startingBusinessNetherlandsPageModel";

const categoryLinks = [
  { href: TAX_ADVISORS_PATH, label: "Tax advisors" },
  { href: ACCOUNTANTS_PATH, label: "Accountants" },
  { href: IMMIGRATION_LAWYERS_PATH, label: "Immigration lawyers" },
  { href: "/netherlands/services/business-consultants/", label: "Business consultants" },
  { href: "/netherlands/services/financial-advisors/", label: "Financial advisors" },
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
      pagePath: STARTING_BUSINESS_NETHERLANDS_PATH,
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

export function StartingBusinessTaxAffiliateSupport() {
  const { taxPayroll } = getStartingBusinessNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Tax & registration"
        title="Tax and accounting support during business setup"
        description="Useful when structure choice, BTW registration or first-year filings still need scoped professional help alongside Belastingdienst guidance — not tax advice."
        cards={taxPayroll}
      />
      <AffiliateDisclosure
        variant="copilot"
        text="Some links may be affiliate or referral links. Listings are for discovery only — not pay-to-rank and not tax advice. Confirm credentials and scope with any provider."
      />
    </div>
  );
}

export function StartingBusinessVisaAffiliateSupport() {
  const { visaPermits } = getStartingBusinessNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration support when residency affects your business plans"
        description="Useful when self-employment routes, startup permits or IND questions still need scoped professional help alongside official IND guidance — not immigration advice."
        cards={visaPermits}
      />
      <AffiliateDisclosure
        variant="copilot"
        text="Some links may be affiliate or referral links. Listings are for discovery only — not pay-to-rank and not immigration advice. Confirm credentials and scope with any provider."
      />
    </div>
  );
}

export function StartingBusinessNetherlandsRecommendedServices() {
  const { visaPermits, taxPayroll, relocation, setup } = getStartingBusinessNetherlandsSupportCardGroups();

  return (
    <div className="space-y-8">
      <MoveGuideAffiliateSupportBlock
        placementId={page.affiliatePlacementId}
        categoryLinks={[...categoryLinks]}
        browseLabel="Browse directories: "
      />
      <ProviderCardSection
        eyebrow="Tax & accounting"
        title="Compare tax advisors and accountants"
        description="Helpful when structure, BTW and first-year filings still feel unclear before you register at KvK."
        cards={taxPayroll}
      />
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Compare immigration lawyers and visa consultants"
        description="Useful when residency status or self-employment routes may constrain when and how you can operate."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Relocation"
        title="Relocation support when business setup overlaps with a move"
        description="Many founders line up housing, banking and family logistics alongside registration — confirm what you need independently."
        cards={relocation}
      />
      <ProviderCardSection
        eyebrow="Post-setup essentials"
        title="Banking, health insurance and business tools"
        description="Separate business finances, mandatory insurance and admin tools often follow KvK registration — scope and fees differ by provider."
        cards={setup}
      />
      <AffiliateDisclosure
        variant="copilot"
        text="ExpatCopilot may earn a commission from some partners. Listings here support business setup planning — not pay-to-rank placement and not legal, tax or immigration guarantees. Confirm scope, credentials and pricing with any provider."
      />
    </div>
  );
}
