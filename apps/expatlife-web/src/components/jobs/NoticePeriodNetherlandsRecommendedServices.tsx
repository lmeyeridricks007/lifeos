import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { cn } from "@/lib/cn";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  getEmploymentContractMortgageAdvisorCards,
  getNoticePeriodNetherlandsSupportCardGroups,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";
import type { PageRecommendedProviderCard } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import {
  CAREER_COACHES_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
  NOTICE_PERIOD_NETHERLANDS_PATH,
  RECRUITMENT_AGENCIES_PATH,
  noticePeriodNetherlandsPage as page,
} from "./noticePeriodNetherlandsPageModel";

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
      pagePath: NOTICE_PERIOD_NETHERLANDS_PATH,
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

export function NoticePeriodTransitionAffiliateSupport() {
  const { setup, relocation } = getNoticePeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-6">
      <ProviderCardSection
        eyebrow="Relocation"
        title="Relocation support when notice overlaps with a move"
        description="Useful when employment end dates, family logistics or international moves need planning alongside notice timing."
        cards={relocation}
      />
      <ProviderCardSection
        eyebrow="Post-exit setup"
        title="Housing, health insurance and banking during transitions"
        description="Many international hires coordinate accounts, insurance and housing around job changes — scope and fees differ by provider."
        cards={setup}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function NoticePeriodTaxAffiliateSupport() {
  const { taxPayroll } = getNoticePeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Compare expat tax support during job transitions"
        description="Helpful when final payslips, partial-year filing or cross-border income need scoped support — not employment law advice."
        cards={taxPayroll}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function NoticePeriodHsmAffiliateSupport() {
  const { visaPermits } = getNoticePeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Immigration support when employment transitions affect permits"
        description="Useful when sponsor changes, notice timing or permit continuity need scoped help — verify IND rules independently."
        cards={visaPermits}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function NoticePeriodMortgageAffiliateSupport() {
  const mortgageCards = getEmploymentContractMortgageAdvisorCards();

  return (
    <div className="mt-6 space-y-4">
      <ProviderCardSection
        eyebrow="Mortgage advisers"
        title="Compare mortgage advisers when career transitions affect borrowing plans"
        description="Lenders may review employment continuity during job changes — confirm requirements with a licensed adviser."
        cards={mortgageCards}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function NoticePeriodJobChangeAffiliateSupport() {
  const { visaPermits, taxPayroll } = getNoticePeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Planning your next role</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">Align notice timing with job search and permit questions</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
          Share contract-based availability with recruiters — not home-country assumptions. Use our{" "}
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
        title="Immigration support when changing employers"
        description="Useful when notice end dates, sponsor switches or permit timing need scoped help — not immigration advice."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Tax support when employment ends or changes"
        description="Helpful when final payslips or partial-year filing need a second opinion during transitions."
        cards={taxPayroll}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function NoticePeriodResignationAffiliateSupport() {
  const { visaPermits, taxPayroll } = getNoticePeriodNetherlandsSupportCardGroups();

  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">If notice timing feels urgent</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">Plan resignation alongside permit and payroll questions</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
          Resigning or serving notice can affect visa continuity, final payslips and your next job search. Use our{" "}
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
        title="Immigration support when notice affects permits"
        description="Useful when sponsor changes, notice end dates or permit continuity still need scoped help — verify outcomes with IND or qualified advisers."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Tax support when employment ends on notice"
        description="Helpful when final payslips, partial-year filing or cross-border income need a second opinion — not as employment law advice."
        cards={taxPayroll}
      />
      <SectionAffiliateDisclosure />
    </div>
  );
}

export function NoticePeriodNetherlandsRecommendedServices() {
  const { visaPermits, taxPayroll, relocation, setup } = getNoticePeriodNetherlandsSupportCardGroups();

  return (
    <div className="space-y-8">
      <MoveGuideAffiliateSupportBlock
        placementId={page.affiliatePlacementId}
        categoryLinks={[...categoryLinks]}
        browseLabel="Browse directories: "
      />
      <ProviderCardSection
        eyebrow="Tax & payroll"
        title="Expat tax support during job transitions"
        description="Many international hires compare final payslips, ruling context and cross-border income during employment changes."
        cards={taxPayroll}
      />
      <ProviderCardSection
        eyebrow="Visa & permits"
        title="Compare immigration lawyers and visa consultants"
        description="Useful when notice timing or employer changes may affect permit planning — verify scope with any provider."
        cards={visaPermits}
      />
      <ProviderCardSection
        eyebrow="Relocation"
        title="Relocation support when leaving or changing roles"
        description="Useful when notice end dates overlap with family moves or international relocation — confirm scope and fees."
        cards={relocation}
      />
      <ProviderCardSection
        eyebrow="Mortgage advisers"
        title="Mortgage discovery when employment is changing"
        description="Lenders may review income continuity during transitions — compare advisers before assuming borrowing capacity."
        cards={getEmploymentContractMortgageAdvisorCards()}
      />
      <ProviderCardSection
        eyebrow="Post-transition setup"
        title="Banking, health insurance and housing search"
        description="Many international hires line up accounts, mandatory insurance and housing around job changes."
        cards={setup}
      />
      <AffiliateDisclosure
        variant="copilot"
        text="ExpatCopilot may earn a commission from some partners. Listings here support career-transition planning — not pay-to-rank placement and not legal or immigration guarantees."
      />
    </div>
  );
}
