import Image from "next/image";
import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import {
  LowCostBankCardDetails,
  LowCostBankCardTitleBlock,
  type ShortlistCardVisualVariant,
} from "@/components/banking/LowCostBankCardGrid";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/cn";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import { getBankById, type Bank } from "@/src/data/banking/banks";
import {
  BANKING_LOW_COST_SHORTLIST_ENTRIES,
  wiseTransferCompanionLowCostProfile,
  type BankingLowCostShortlistEntry,
} from "@/src/data/banking/bankingLowCostShortlist";
import {
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  bankingGuideCardPrimaryCtaClass,
  bankingGuideCardSecondaryLinkClass,
} from "@/components/banking/bankingPageUi";
import {
  movingNlGuideShortlistChipClass,
  movingNlGuideShortlistDetailPanelClass,
  movingNlGuideShortlistIndexChipClass,
  movingNlToolInlineCtaClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import wiseProvider from "@/src/content/affiliates/providers/wise.json";
import { withPartnerReferralUtms, utmContentFromPath } from "@/lib/analytics/referral-utm";

/** When entries are N banks followed by Wise, render banks via {@link LowCostBankCardGrid} for a single source of truth. */
function banksThenWiseTail(entries: readonly BankingLowCostShortlistEntry[]): Bank[] | null {
  if (entries.length === 0) return null;
  const last = entries[entries.length - 1];
  if (last.kind !== "wise-transfer") return null;
  const head = entries.slice(0, -1);
  if (!head.every((e): e is Extract<BankingLowCostShortlistEntry, { kind: "bank" }> => e.kind === "bank")) return null;
  const banks = head.map((e) => getBankById(e.id)).filter((b): b is Bank => Boolean(b));
  if (banks.length !== head.length) return null;
  return banks;
}

function WiseTransferTitleBlock({
  index,
  visualVariant = "banking",
  chipLabel = "Low-cost shortlist",
}: {
  index: number;
  visualVariant?: ShortlistCardVisualVariant;
  chipLabel?: string;
}) {
  const p = wiseProvider;
  const logo = normalizeExternalProviderLogoSrc(p.logo.src);
  const chipClass = visualVariant === "moving" ? movingNlGuideShortlistChipClass : BANKING_VISUAL_CARD_CHIP_CLASS;
  const indexClass = visualVariant === "moving" ? movingNlGuideShortlistIndexChipClass : BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS;
  const logoRing =
    visualVariant === "moving"
      ? "border border-copilot-primary/10 bg-white ring-1 ring-copilot-primary/[0.08]"
      : "border border-border/60 bg-white ring-1 ring-border/20";

  return (
    <div className="flex w-full min-w-0 items-start gap-3">
      <Image
        src={logo}
        alt=""
        width={48}
        height={48}
        className={cn("h-12 w-12 shrink-0 rounded-2xl object-contain p-1.5", logoRing)}
      />
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
          {p.name}
        </p>
        <p
          className={cn(
            "mt-1 text-[10px] font-medium uppercase tracking-wide",
            visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-muted"
          )}
        >
          International transfers
        </p>
      </div>
    </div>
  );
}

function WiseTransferDetails({
  bestBanksHref,
  utmContent,
  visualVariant = "banking",
}: {
  bestBanksHref: string;
  utmContent: string;
  visualVariant?: ShortlistCardVisualVariant;
}) {
  const p = wiseProvider;
  const profile = wiseTransferCompanionLowCostProfile;
  const href = withPartnerReferralUtms(p.cta.href, { partnerSlug: p.id, utmContent });
  const panel = visualVariant === "moving" ? movingNlGuideShortlistDetailPanelClass : BANKING_VISUAL_CARD_PANEL_CLASS;
  const labelMuted = visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-muted";
  const bodyMuted = visualVariant === "moving" ? "text-copilot-text-secondary" : "text-foreground-muted";
  const bodyStrong = visualVariant === "moving" ? "text-copilot-text-primary" : "text-foreground";
  const primaryCtaClass = visualVariant === "moving" ? movingNlToolInlineCtaClass : bankingGuideCardPrimaryCtaClass;
  const secondaryCtaClass =
    visualVariant === "moving"
      ? "inline-flex min-h-[40px] items-center justify-center rounded-xl border border-copilot-primary/15 bg-copilot-surface px-3 py-2 text-xs font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] transition hover:border-copilot-primary/25 hover:bg-copilot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/40 focus-visible:ring-offset-2"
      : bankingGuideCardSecondaryLinkClass;

  return (
    <div className="flex min-h-0 min-w-0 flex-col">
      <div className={cn(panel, "mt-0")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>Type</p>
        <p className={cn("mt-1.5 text-sm font-medium", bodyStrong)}>{profile.typeLabel}</p>
      </div>

      <div className={cn(panel, "mt-3")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>Cost model</p>
        <p className={cn("mt-1.5 text-sm", bodyMuted)}>{profile.feeModelSummary}</p>
      </div>

      <div className={cn(panel, "mt-3")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>Best for</p>
        <BoldParagraph text={profile.bestForMarkdown} className={cn("mt-1.5 text-sm leading-snug", bodyMuted)} />
      </div>

      <div className="mt-3 rounded-xl border border-amber-200/70 bg-amber-50/45 p-3 ring-1 ring-amber-100/40">
        <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-amber-900/80">Cost watch-outs</p>
        <BoldParagraph text={profile.costWatchOutsMarkdown} className={cn("mt-1.5 text-sm leading-relaxed", bodyMuted)} />
      </div>

      <div className={cn(panel, "mt-3")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>Local banking fit</p>
        <p className={cn("mt-1.5 text-sm leading-snug", bodyMuted)}>{profile.localFit}</p>
      </div>

      <div className={cn(panel, "mt-3")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>International fit</p>
        <p className={cn("mt-1.5 text-sm leading-snug", bodyMuted)}>{profile.internationalFit}</p>
      </div>

      <div className={cn(panel, "mt-3")}>
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.13em]", labelMuted)}>Not ideal if</p>
        <BoldParagraph text={profile.notIdealMarkdown} className={cn("mt-1.5 text-sm leading-snug", bodyMuted)} />
      </div>

      <p className={cn("mt-3 text-[10px]", visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-faint")}>
        {profile.feeModelSummary} — not a live quote here.
      </p>

      <div
        className={cn(
          "mt-4 flex flex-col gap-2 border-t pt-3 sm:flex-row sm:flex-wrap",
          visualVariant === "moving" ? "border-copilot-primary/[0.08]" : "border-border/45"
        )}
      >
        <a
          href={href}
          target="_blank"
          rel={p.cta.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
          className={primaryCtaClass}
          data-outbound-link-type="provider"
          data-outbound-partner-slug={p.id}
          data-outbound-link-text="Check provider pricing"
          data-outbound-page-context="cheapest-accounts-shortlist"
        >
          Check provider pricing
        </a>
        <Link href={`${bestBanksHref}#comparison`} className={secondaryCtaClass}>
          Compare banks
        </Link>
      </div>
      {p.cta.isAffiliate ? (
        <p className={cn("mt-2 text-[10px] leading-snug", visualVariant === "moving" ? "text-copilot-text-muted" : "text-foreground-faint")}>
          {p.disclosure}
        </p>
      ) : null}
    </div>
  );
}

export type LowCostBankingShortlistCardsProps = {
  /** Defaults to shared {@link BANKING_LOW_COST_SHORTLIST_ENTRIES}. */
  entries?: readonly BankingLowCostShortlistEntry[];
  /** Chip on each bank accordion title (default: low-cost shortlist). */
  titleChipLabel?: string;
  bestBanksHref?: string;
  utmReferrerPath: string;
  className?: string;
  /** Use Move pillar guide surfaces (international transfers guide); default keeps banking chrome. */
  visualVariant?: ShortlistCardVisualVariant;
};

/** Low-cost shortlist — reads {@link Bank.lowCost} + shared entry order; no live price guarantees. */
export function LowCostBankingShortlistCards({
  entries = BANKING_LOW_COST_SHORTLIST_ENTRIES,
  titleChipLabel = "Low-cost shortlist",
  bestBanksHref = "/netherlands/money/banking/best-banks-expats/",
  utmReferrerPath,
  className,
  visualVariant = "banking",
}: LowCostBankingShortlistCardsProps) {
  const utmContent = utmContentFromPath(utmReferrerPath);
  const banksOrdered = banksThenWiseTail(entries);

  if (banksOrdered !== null) {
    const bankItems = banksOrdered.map((bank, i) => ({
      id: bank.id,
      title: <LowCostBankCardTitleBlock bank={bank} index={i} chipLabel={titleChipLabel} visualVariant={visualVariant} />,
      content: <LowCostBankCardDetails bank={bank} bestBanksHref={bestBanksHref} utmContent={utmContent} visualVariant={visualVariant} />,
    }));
    const wiseIndex = banksOrdered.length;
    const wiseItem = {
      id: "wise-transfer",
      title: <WiseTransferTitleBlock index={wiseIndex} visualVariant={visualVariant} chipLabel={titleChipLabel} />,
      content: <WiseTransferDetails bestBanksHref={bestBanksHref} utmContent={utmContent} visualVariant={visualVariant} />,
    };
    const accordionItems = bankItems.length > 0 ? [...bankItems, wiseItem] : [wiseItem];
    const initialOpenId = accordionItems[0]?.id;

    return (
      <Accordion
        items={accordionItems}
        allowMultiple
        initialOpenId={initialOpenId}
        density="comfortable"
        tone="copilot"
        className={cn("mt-4 min-w-0 max-w-full", className)}
      />
    );
  }

  const accordionItems = entries.map((entry, index) => {
    if (entry.kind === "wise-transfer") {
      return {
        id: "wise-transfer",
        title: <WiseTransferTitleBlock index={index} visualVariant={visualVariant} chipLabel={titleChipLabel} />,
        content: <WiseTransferDetails bestBanksHref={bestBanksHref} utmContent={utmContent} visualVariant={visualVariant} />,
      };
    }
    const bank = getBankById(entry.id);
    if (!bank) return null;
    return {
      id: bank.id,
      title: <LowCostBankCardTitleBlock bank={bank} index={index} chipLabel={titleChipLabel} visualVariant={visualVariant} />,
      content: <LowCostBankCardDetails bank={bank} bestBanksHref={bestBanksHref} utmContent={utmContent} visualVariant={visualVariant} />,
    };
  });

  const filtered = accordionItems.filter((x): x is NonNullable<typeof x> => x != null);
  const initialOpenId = filtered[0]?.id;

  return (
    <Accordion
      items={filtered}
      allowMultiple
      initialOpenId={initialOpenId}
      density="comfortable"
      tone="copilot"
      className={cn("mt-4 min-w-0 max-w-full", className)}
    />
  );
}
