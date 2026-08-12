import Link from "next/link";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { cn } from "@/lib/cn";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";
import { movingNlCardMicroLiftClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  MATERNITY_CARE_NETHERLANDS_PATH,
  maternityCareNetherlandsPage as page,
} from "./maternityCareNetherlandsPageModel";

type MaternityPartnerCard = (typeof page.recommended.supportCards)[number];

function PartnerCard({ service }: { service: MaternityPartnerCard }) {
  const initials =
    service.name
      .split(/[\s-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || service.name.slice(0, 2).toUpperCase();

  const outbound = buildTrackedOutboundLink(service.url, {
    pagePath: MATERNITY_CARE_NETHERLANDS_PATH,
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

export function MaternityCareNetherlandsRecommendedServices() {
  const { recommended } = page;

  return (
    <div className="space-y-8">
      <div className="w-full">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Recommended support</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">Insurance comparison & post-birth planning</h3>
        <p className="mt-2 w-full max-w-none text-sm leading-relaxed text-foreground-muted">
          Start here for package comparison and childcare discovery. Midwife and kraamzorg agency registration still happens
          via your local maternity pathway — we do not rank clinical providers. Indicative 2026 kraamzorg own contribution is
          about €5.70 per hour.
        </p>
        <div className="mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.supportCards.map((service) => (
            <PartnerCard key={service.partnerSlug} service={service} />
          ))}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-foreground-muted">
        Also useful:{" "}
        {recommended.categoryLinks.map((link, index) => (
          <span key={link.href}>
            {index > 0 ? <span aria-hidden> · </span> : null}
            <Link href={link.href} className="font-semibold text-link hover:underline">
              {link.label}
            </Link>
          </span>
        ))}
      </p>

      <AffiliateDisclosure variant="copilot" text={recommended.disclosure} />
    </div>
  );
}
