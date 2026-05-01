import Image from "next/image";
import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import {
  bankCostPositioningLabel,
  bankLowCostFeeModelSummary,
  bankLowCostWatchOutsList,
  type Bank,
  type BankId,
} from "@/src/data/banking/banks";
import { getBankingProviderAffiliateCta } from "@/src/data/banking/bankingProviderAffiliateCtas";
import {
  movingNlCardMicroLiftClass,
  movingNlGuideShortlistDetailPanelClass,
  movingNlGuideShortlistChipClass,
  movingNlGuideShortlistIndexChipClass,
  movingNlSignatureGradientClass,
  movingNlToolInlineCtaClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
  bankingGuideCardPrimaryCtaClass,
  bankingGuideCardSecondaryLinkClass,
  bankingGuideCardSoftCtaClass,
} from "@/components/banking/bankingPageUi";
import { withPartnerReferralUtms, utmContentFromPath } from "@/lib/analytics/referral-utm";

export type ShortlistCardVisualVariant = "banking" | "moving";

function providerTypeLabel(bank: Bank): string {
  if (bank.bankType === "hybrid-support") return "Digital / companion";
  return bank.type === "traditional" ? "Traditional" : "Digital";
}

export type LowCostBankCardTitleBlockProps = {
  bank: Bank;
  index: number;
  chipLabel?: string;
  /** `"moving"` matches Move pillar guide chips (e.g. international transfers guide). */
  visualVariant?: ShortlistCardVisualVariant;
};

/** Logo, shortlist chip, index, name, and cost band — used as accordion trigger content. */
export function LowCostBankCardTitleBlock({
  bank,
  index,
  chipLabel = "Low-cost shortlist",
  visualVariant = "banking",
}: LowCostBankCardTitleBlockProps) {
  const lc = bank.lowCost;
  const logo = bank.logoSrc ? normalizeExternalProviderLogoSrc(bank.logoSrc) : null;
  const chipClass = visualVariant === "moving" ? movingNlGuideShortlistChipClass : BANKING_VISUAL_CARD_CHIP_CLASS;
  const indexClass = visualVariant === "moving" ? movingNlGuideShortlistIndexChipClass : BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS;
  const logoRing =
    visualVariant === "moving"
      ? "border border-copilot-primary/10 bg-white ring-1 ring-copilot-primary/[0.08]"
      : "border border-border/60 bg-white ring-1 ring-border/20";

  return (
    <div className="flex w-full min-w-0 items-start gap-3">
      {logo ? (
        <Image src={logo} alt="" width={48} height={48} className={cn("h-12 w-12 shrink-0 rounded-2xl object-contain p-1.5", logoRing)} />
      ) : (
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-dashed text-xs font-bold ring-1",
            visualVariant === "moving"
              ? "border-copilot-primary/20 bg-copilot-bg-soft text-copilot-text-muted ring-copilot-primary/[0.08]"
              : "border-border bg-surface-muted text-foreground-muted ring-border/20"
          )}
          aria-hidden
        >
          {bank.name.slice(0, 1)}
        </div>
      )}
      <div className="min-w-0 flex-1 text-left">
        <div className="flex flex-wrap items-center gap-2">
          <span className={chipClass}>{chipLabel}</span>
          <span className={indexClass}>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p
          className={cn(
            "mt-2 max-w-full text-pretty break-words text-base font-bold leading-snug tracking-tight [overflow-wrap:anywhere]",
            visualVariant === "moving" ? "text-copilot-text-primary" : "text-foreground"
          )}
        >
          {bank.name}
        </p>
        {lc ? (
          <p
            className={cn(
              "mt-1 text-[10px] font-medium uppercase tracking-wide",
              visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-muted"
            )}
          >
            {bankCostPositioningLabel(lc.costPositioning)}
          </p>
        ) : null}
        {lc?.hasFreeTier ? (
          <p className={cn("mt-1 text-[10px]", visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-faint")}>
            Often marketed with a free or basic tier — confirm rules on the official site.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export type LowCostBankCardDetailsProps = {
  bank: Bank;
  bestBanksHref: string;
  utmContent: string;
  visualVariant?: ShortlistCardVisualVariant;
};

function detailPanelClass(visualVariant: ShortlistCardVisualVariant) {
  return visualVariant === "moving" ? movingNlGuideShortlistDetailPanelClass : BANKING_VISUAL_CARD_PANEL_CLASS;
}

/** Type, fee model, best for, watch-outs, note, and CTAs — accordion panel body or lower half of a full card. */
export function LowCostBankCardDetails({ bank, bestBanksHref, utmContent, visualVariant = "banking" }: LowCostBankCardDetailsProps) {
  const f = bank.feeModel;
  const lc = bank.lowCost;
  const affiliateCta = getBankingProviderAffiliateCta(bank.id as BankId);
  const outboundHref = affiliateCta ? withPartnerReferralUtms(affiliateCta.href, { partnerSlug: bank.id, utmContent }) : null;
  const watchList = bankLowCostWatchOutsList(bank);
  const costModelLine = bankLowCostFeeModelSummary(bank);
  const panel = detailPanelClass(visualVariant);
  const labelMuted = visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-muted";
  const bodyMuted = visualVariant === "moving" ? "text-copilot-text-secondary" : "text-foreground-muted";
  const bodyStrong = visualVariant === "moving" ? "text-copilot-text-primary" : "text-foreground";
  const marker = visualVariant === "moving" ? "marker:text-copilot-primary" : "marker:text-brand";
  const primaryCtaClass = visualVariant === "moving" ? movingNlToolInlineCtaClass : bankingGuideCardPrimaryCtaClass;
  const secondaryCtaClass =
    visualVariant === "moving"
      ? "inline-flex min-h-[40px] items-center justify-center rounded-xl border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-xs font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] transition hover:border-copilot-primary/25 hover:bg-copilot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/40 focus-visible:ring-offset-2"
      : bankingGuideCardSecondaryLinkClass;
  const softCtaClass =
    visualVariant === "moving"
      ? "inline-flex min-h-[40px] items-center justify-center rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/80 px-3 py-2 text-xs font-semibold text-copilot-text-primary shadow-expatos-sm transition hover:bg-copilot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/35 focus-visible:ring-offset-2"
      : bankingGuideCardSoftCtaClass;

  return (
    <div className="flex min-h-0 min-w-0 flex-col">
      <div className={cn(panel, "mt-0")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>Type</p>
        <p className={cn("mt-1.5 text-sm font-medium", bodyStrong)}>{providerTypeLabel(bank)}</p>
      </div>

      <div className={cn(panel, "mt-3")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>Fee model</p>
        <p className={cn("mt-1.5 text-sm", bodyMuted)}>{costModelLine}</p>
        {lc?.pricingCaveat ? (
          <p className={cn("mt-1.5 text-xs leading-snug", visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-faint")}>
            {lc.pricingCaveat}
          </p>
        ) : null}
      </div>

      <div className={cn(panel, "mt-3")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>Best for</p>
        {lc?.bestLowCostUseCases?.length ? (
          <ul className={cn("mt-1.5 list-disc space-y-1 pl-3.5 text-sm leading-snug", bodyMuted, marker)} role="list">
            {lc.bestLowCostUseCases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        ) : (
          <BoldParagraph text={bank.bestFor} className={cn("mt-1.5 text-sm leading-snug", bodyMuted)} />
        )}
      </div>

      <div className="mt-3 rounded-xl border border-amber-200/70 bg-amber-50/45 p-3 ring-1 ring-amber-100/40">
        <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-amber-900/80">Cost watch-outs</p>
        <ul className={cn("mt-1.5 list-disc space-y-1 pl-3.5 text-sm leading-relaxed", bodyMuted, marker)} role="list">
          {watchList.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </div>

      <p className={cn("mt-3 text-[10px]", visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-faint")}>
        {f.sourceKey === "editorial-bank-shortlist" || f.sourceKey === "editorial-low-cost-guide"
          ? "Short list — check current pricing on each provider’s official site."
          : "Confirm all lines on the provider site."}
        {lc?.lastPricingChecked ? ` Last reviewed: ${lc.lastPricingChecked}.` : ""}
      </p>

      <div
        className={cn(
          "mt-4 flex min-w-0 flex-col gap-2 border-t pt-3 sm:flex-row sm:flex-wrap",
          visualVariant === "moving" ? "border-copilot-primary/[0.08]" : "border-border/45"
        )}
      >
        {outboundHref && affiliateCta ? (
          <a
            href={outboundHref}
            target="_blank"
            rel={affiliateCta.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
            className={primaryCtaClass}
            data-outbound-link-type="provider"
            data-outbound-partner-slug={bank.id}
            data-outbound-link-text="Check provider pricing"
            data-outbound-page-context="cheapest-accounts-shortlist"
          >
            Check provider pricing
          </a>
        ) : (
          <Link href={bestBanksHref} className={softCtaClass}>
            Explore provider
          </Link>
        )}
        <Link href={`${bestBanksHref}#${bank.id}`} className={secondaryCtaClass}>
          Compare banks
        </Link>
      </div>
      {affiliateCta?.isAffiliate ? (
        <p className={cn("mt-2 text-[10px] leading-snug", visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-faint")}>
          {affiliateCta.disclosure}
        </p>
      ) : null}
    </div>
  );
}

export type LowCostBankCardProps = {
  bank: Bank;
  index: number;
  bestBanksHref: string;
  utmContent: string;
  chipLabel?: string;
};

/** Full grid tile: gradient shell + title + details (legacy / non-accordion layouts). */
export function LowCostBankCard({ bank, index, bestBanksHref, utmContent, chipLabel = "Low-cost shortlist" }: LowCostBankCardProps) {
  return (
    <article className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass, "min-w-0 max-w-full")}>
      <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
      <div className={cn(BANKING_VISUAL_CARD_BODY_CLASS, "flex min-h-0 min-w-0 flex-col")}>
        <LowCostBankCardTitleBlock bank={bank} index={index} chipLabel={chipLabel} />
        <LowCostBankCardDetails bank={bank} bestBanksHref={bestBanksHref} utmContent={utmContent} />
      </div>
    </article>
  );
}

export type LowCostBankCardGridProps = {
  banks: readonly Bank[];
  bestBanksHref?: string;
  utmReferrerPath: string;
  /** 0-based index printed on the first card (use when banks are not the first tiles in a parent grid). */
  startIndex?: number;
  chipLabel?: string;
};

/**
 * Renders only bank tiles (fragment). Parent supplies the responsive grid and any non-bank tiles (e.g. Wise).
 */
export function LowCostBankCardGrid({ banks, bestBanksHref = "/netherlands/money/banking/best-banks-expats/", utmReferrerPath, startIndex = 0, chipLabel }: LowCostBankCardGridProps) {
  const utmContent = utmContentFromPath(utmReferrerPath);
  return (
    <>
      {banks.map((bank, i) => (
        <LowCostBankCard key={bank.id} bank={bank} index={startIndex + i} bestBanksHref={bestBanksHref} utmContent={utmContent} chipLabel={chipLabel} />
      ))}
    </>
  );
}
