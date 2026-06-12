import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { cn } from "@/lib/cn";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  getEmployeeRightsNetherlandsSupportCardGroups,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import {
  CAREER_COACHES_PATH,
  EMPLOYEE_RIGHTS_NETHERLANDS_PATH,
  IMMIGRATION_LAWYERS_PATH,
  employeeRightsNetherlandsPage as page,
} from "./employeeRightsNetherlandsPageModel";

const categoryLinks = [
  { href: IMMIGRATION_LAWYERS_PATH, label: "Immigration lawyers" },
  { href: CAREER_COACHES_PATH, label: "Career coaches" },
  { href: "/netherlands/services/recruitment-agencies/", label: "Recruitment agencies" },
  { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
  { href: "/netherlands/services/tax-advisors/", label: "Tax advisors" },
  { href: "/netherlands/services/health-insurance/", label: "Health insurance" },
  { href: "/netherlands/services/", label: "Browse all services" },
] ;

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
      pagePath: EMPLOYEE_RIGHTS_NETHERLANDS_PATH,
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
      text="Some links may be affiliate or referral links. Listings are for discovery only — not pay-to-rank and not legal, employment or immigration advice. Confirm credentials and scope with any provider."
    />
  );
}

export function EmployeeRightsContractAffiliateSupport() {
  const { visaPermits } = getEmployeeRightsNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Contract & permit review"
        title="Immigration lawyers when contract terms affect permits"
        description="Useful when salary, role title or sponsor duties in your contract need scoped review — verify IND rules independently."
        cards={visaPermits}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function EmployeeRightsHsmAffiliateSupport() {
  const { visaPermits } = getEmployeeRightsNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration support for sponsored employees"
        description="Workplace rights and permit rules are separate topics — use qualified help for IND timing, not for everyday HR questions."
        cards={visaPermits}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function EmployeeRightsNetherlandsRecommendedServices() {
  const { visaPermits, taxPayroll, relocation, setup } = getEmployeeRightsNetherlandsSupportCardGroups();

  return (
    <div className="mt-8 space-y-8">
      <MoveGuideAffiliateSupportBlock placementId={page.affiliatePlacementId} categoryLinks={categoryLinks} />
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration lawyers and visa consultants"
        description="When employment contract terms, sponsor changes or permit renewals need scoped review alongside workplace rights questions."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Tax advisors during employment changes"
        description="Helpful when sick leave, parental leave or job changes affect payroll, benefits or partial-year filing."
        cards={taxPayroll}
      />
      <ProviderCardSection
        eyebrow="Relocation"
        title="Relocation services aligned with employment timing"
        description="Family moves that depend on contract start dates, leave planning or international transitions."
        cards={relocation}
      />
      <ProviderCardSection
        eyebrow="Post-move setup"
        title="Banking, health insurance and housing during transitions"
        description="Many international hires coordinate accounts and insurance around employment changes — confirm scope with providers."
        cards={setup}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}
