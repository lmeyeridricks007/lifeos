import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Home,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { transitionSurface } from "@/lib/ui/interaction";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { bankingGuideTertiaryLinkClass } from "@/components/banking/bankingPageUi";

export type BankingWorkaroundCardItem = {
  id: string;
  title: string;
  whenItHelps: string;
  watchOuts: readonly string[];
  relatedLinks?: readonly string[];
};

export type BankingWorkaroundLinkEntry = { href: string; label: string };

const DEFAULT_RESOLVE_LINKS = (): readonly BankingWorkaroundLinkEntry[] => [];

function iconForWorkaroundId(id: string): LucideIcon {
  switch (id) {
    case "foreign-sepa":
      return Globe2;
    case "digital-route":
      return Building2;
    case "employer-payroll":
      return BriefcaseBusiness;
    case "landlord-alts":
      return Home;
    case "transfer-oneoff":
      return ArrowLeftRight;
    case "cash-card-buffer":
      return Wallet;
    default:
      return Globe2;
  }
}

const chipClass =
  "inline-flex w-fit rounded-full border border-slate-200/90 bg-copilot-bg-soft/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-copilot-text-muted ring-1 ring-slate-900/[0.04]";

/**
 * Short-term workaround options — elevated cards with icons; tertiary links only.
 */
export function BankingWorkaroundCards({
  items,
  className,
  chipLabel = "Option",
  resolveLinkEntries = DEFAULT_RESOLVE_LINKS,
}: {
  items: readonly BankingWorkaroundCardItem[];
  className?: string;
  chipLabel?: string;
  resolveLinkEntries?: (relatedLinks: readonly string[] | undefined) => readonly BankingWorkaroundLinkEntry[];
}) {
  if (!items.length) return null;

  return (
    <div
      className={cn(
        "grid w-full min-w-0 grid-cols-1 gap-4 overflow-x-hidden sm:grid-cols-2 sm:gap-5 lg:gap-6 xl:grid-cols-3",
        className
      )}
      role="list"
    >
      {items.map((s) => {
        const links = resolveLinkEntries(s.relatedLinks);
        const Icon = iconForWorkaroundId(s.id);
        return (
          <article
            key={s.id}
            role="listitem"
            className={cn(
              "relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border-0",
              transitionSurface,
              "bg-gradient-to-b from-white via-copilot-bg-soft/35 to-copilot-bg-light/60 shadow-expatos-md ring-1 ring-copilot-primary/[0.1]",
              movingNlCardShadowHoverClass,
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("h-1 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
              <div className="flex gap-3.5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-primary/14 via-white to-copilot-accent/10 text-copilot-primary shadow-sm ring-1 ring-copilot-primary/12"
                  aria-hidden
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={chipClass}>{chipLabel}</span>
                  <h3 className="mt-2 text-balance text-sm font-semibold leading-snug tracking-tight text-copilot-text-primary sm:text-[0.9375rem]">
                    {s.title}
                  </h3>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-sky-200/85 bg-sky-50/95 px-3.5 py-3 ring-1 ring-sky-900/[0.05] sm:px-4 sm:py-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-900">When it may help</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{s.whenItHelps}</p>
              </div>

              {s.watchOuts.length > 0 ? (
                <div className="mt-3 rounded-xl border border-slate-200/90 bg-gradient-to-b from-slate-50/95 to-copilot-bg-soft/40 px-3.5 py-3 ring-1 ring-slate-900/[0.05] sm:px-4 sm:py-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">Watch-outs</p>
                  <ul className="mt-2 space-y-2" role="list">
                    {s.watchOuts.map((w) => (
                      <li key={w} className="flex gap-2.5 text-sm leading-snug text-slate-700">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-primary/55"
                          aria-hidden
                        />
                        <span className="min-w-0 break-words">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {links.length > 0 ? (
                <div className="mt-auto flex min-h-0 flex-1 flex-col justify-end border-t border-dashed border-copilot-primary/15 pt-4">
                  <div className="flex flex-col gap-2.5">
                    {links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={cn(
                          bankingGuideTertiaryLinkClass,
                          "text-xs font-medium sm:text-sm"
                        )}
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
