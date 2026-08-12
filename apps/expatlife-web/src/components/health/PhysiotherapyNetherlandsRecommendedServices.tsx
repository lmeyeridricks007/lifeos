import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { cn } from "@/lib/cn";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  PHYSIOTHERAPY_NETHERLANDS_PATH,
  physiotherapyNetherlandsPage as page,
} from "./physiotherapyNetherlandsPageModel";

type PhysioPartnerCard = (typeof page.recommended.physioCards)[number];

function PartnerCard({ service }: { service: PhysioPartnerCard }) {
  const initials =
    service.name
      .split(/[\s-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || service.name.slice(0, 2).toUpperCase();

  const outbound = buildTrackedOutboundLink(service.url, {
    pagePath: PHYSIOTHERAPY_NETHERLANDS_PATH,
    partnerSlug: service.partnerSlug,
    linkText: "Visit provider",
    isAffiliate: service.isAffiliate,
  });

  return (
    <a
      {...trackedOutboundAnchorProps(outbound)}
      target="_blank"
      className={cn(
        "block rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass,
        "group hover:border-brand-strong/30"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft p-2 ring-1 ring-copilot-primary/10">
          <span className="text-xs font-bold text-brand-strong" aria-hidden>
            {initials}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-bold text-foreground">{service.name}</p>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
              {service.city}
            </span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{service.useFor}</p>
        </div>
      </div>
      <p className="mt-3 border-t border-slate-200/80 pt-3 text-xs text-foreground-muted">{service.priceRange}</p>
      <span className="mt-2 inline-block text-xs font-semibold text-link group-hover:text-link-hover">Visit provider →</span>
    </a>
  );
}

export function PhysiotherapyNetherlandsRecommendedServices() {
  const { recommended } = page;

  return (
    <div className="space-y-8">
      <div className="w-full">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Recommended physios</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">English-friendly physiotherapy partners</h3>
        <p className="mt-2 w-full max-w-none text-sm leading-relaxed text-foreground-muted">
          Start here when you want English-speaking discovery options. Confirm specialty, availability and whether the practice
          contracts with your insurer before you book. Indicative self-pay tariffs often land around €40–€55 per regular session
          (2026 orientation).
        </p>
        <div className="mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.physioCards.map((service) => (
            <PartnerCard key={service.partnerSlug} service={service} />
          ))}
        </div>
      </div>

      <div className="w-full space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Insurance cover</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">Compare supplementary physio packages</h3>
        <p className="mt-2 w-full max-w-none text-sm leading-relaxed text-foreground-muted">
          Most adult everyday physio sits in aanvullende cover. Compare session budgets (often around 6–52) before renewal season.
        </p>
        <MoveGuideAffiliateSupportBlock
          placementId={recommended.affiliatePlacementId}
          hidePlacementTitle
          browseLabel="Also useful for cover and providers: "
          categoryLinks={[...recommended.categoryLinks]}
        />
      </div>

      <AffiliateDisclosure variant="copilot" text={recommended.disclosure} />
    </div>
  );
}
