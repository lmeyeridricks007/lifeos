import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { cn } from "@/lib/cn";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  getEmploymentContractMortgageAdvisorCards,
  getProbationPeriodNetherlandsSupportCardGroups,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import {
  CAREER_COACHES_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  PROBATION_PERIOD_NETHERLANDS_PATH,
  RECRUITMENT_AGENCIES_PATH,
  probationPeriodNetherlandsPage as page,
} from "./probationPeriodNetherlandsPageModel";

const categoryLinks = [
  { href: "/netherlands/services/tax-advisors/", label: "Tax advisors" },
  { href: "/netherlands/services/mortgage-advisors/", label: "Mortgage advisors" },
  { href: "/netherlands/services/financial-advisors/", label: "Financial advisors" },
  { href: CAREER_COACHES_PATH, label: "Career coaches" },
  { href: RECRUITMENT_AGENCIES_PATH, label: "Recruitment agencies" },
  { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
  { href: "/netherlands/services/visa-consultants/", label: "Visa consultants" },
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
      pagePath: PROBATION_PERIOD_NETHERLANDS_PATH,
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
      text="Some links may be affiliate or referral links. Listings are for discovery only — not pay-to-rank and not legal, tax or immigration advice. Confirm credentials and scope with any provider."
    />
  );
}

export function ProbationPeriodOnboardingSetupAffiliateSupport() {
  const { setup, relocation } = getProbationPeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-6">
      <ProviderCardSection
        eyebrow="Post-start setup"
        title="Banking, health insurance and housing during onboarding"
        description="Many international hires line up accounts, mandatory insurance and housing in parallel with proeftijd — scope and fees differ by provider."
        cards={setup}
      />
      <ProviderCardSection
        eyebrow="Relocation"
        title="Relocation support when probation overlaps with a move"
        description="Useful when start dates, family logistics or temporary housing still need planning alongside early employment."
        cards={relocation}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function ProbationPeriodTaxAffiliateSupport() {
  const { taxPayroll } = getProbationPeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Compare expat tax support during contract and payroll onboarding"
        description="Helpful when gross pay, 30% ruling eligibility, relocation allowances or cross-border income make take-home modelling harder during proeftijd."
        cards={taxPayroll}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function ProbationPeriodHsmAffiliateSupport() {
  const { visaPermits } = getProbationPeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration support when employment stability matters during probation"
        description="Useful when sponsored routes, recognised employers or permit timing intersect with early employment — not as employment law advice."
        cards={visaPermits}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function ProbationPeriodMortgageAffiliateSupport() {
  const mortgageCards = getEmploymentContractMortgageAdvisorCards();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Mortgage advisers"
        title="Compare mortgage advisers before you assume probation supports borrowing"
        description="Lenders may treat proeftijd, contract duration and visa status differently — confirm requirements with a licensed adviser rather than relying on the offer letter alone."
        cards={mortgageCards}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function ProbationPeriodEarlyExitAffiliateSupport() {
  const { visaPermits, taxPayroll } = getProbationPeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">If the role is not working out</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">Plan your next move alongside permit and payroll questions</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
          Early exit during proeftijd can affect visa continuity, tax filing and your next job search. Use our{" "}
          <Link href={FINDING_JOBS_NETHERLANDS_PATH} className="font-semibold text-link hover:underline">
            finding jobs in the Netherlands guide
          </Link>{" "}
          for search strategy, and browse{" "}
          <Link href={CAREER_COACHES_PATH} className="font-semibold text-link hover:underline">
            career coaches
          </Link>{" "}
          or{" "}
          <Link href={RECRUITMENT_AGENCIES_PATH} className="font-semibold text-link hover:underline">
            recruitment agencies
          </Link>{" "}
          when you want scoped professional help.
        </p>
      </div>
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration support if employment ends during proeftijd"
        description="Useful when permit continuity, recognised sponsor rules or notice timing still need scoped help — verify outcomes with IND or qualified advisers."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Tax support when leaving during probation"
        description="Helpful when final payslips, partial-year filing or cross-border income need a second opinion — not as employment law advice."
        cards={taxPayroll}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function ProbationPeriodNetherlandsRecommendedServices() {
  const { visaPermits, taxPayroll, relocation, setup } = getProbationPeriodNetherlandsSupportCardGroups();

  return (
    <div className="space-y-8">
      <MoveGuideAffiliateSupportBlock
        placementId={page.affiliatePlacementId}
        categoryLinks={[...categoryLinks]}
        browseLabel="Browse directories: "
      />
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Expat tax support during early employment"
        description="Many international hires compare gross contract lines, ruling eligibility and payroll setup during onboarding — not as employment law advice."
        cards={taxPayroll}
      />
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Compare immigration lawyers and visa consultants"
        description="Useful when employment continuity or contract terms may matter for permit planning — verify scope with any provider."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Relocation"
        title="Relocation support during onboarding"
        description="Useful when probation overlaps with family move logistics — confirm scope and fees directly with each provider."
        cards={relocation}
      />
      <ProviderCardSection
        eyebrow="Mortgage advisers"
        title="Mortgage discovery when probation affects borrowing plans"
        description="Lenders may view proeftijd and contract type differently — compare advisers before assuming your role supports a mortgage."
        cards={getEmploymentContractMortgageAdvisorCards()}
      />
      <ProviderCardSection
        eyebrow="Post-start setup"
        title="Banking, health insurance and housing search"
        description="Many international hires line up accounts, mandatory insurance and housing in parallel with probation — scope and fees differ by provider."
        cards={setup}
      />
      <AffiliateDisclosure
        variant="copilot"
        text="ExpatCopilot may earn a commission from some partners. Listings here support onboarding planning — not pay-to-rank placement and not legal or immigration guarantees."
      />
    </div>
  );
}
