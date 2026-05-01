"use client";

import Image from "next/image";
import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import { banks, bankAccountFeeTypeLabel, type Bank, type BankId } from "@/src/data/banking/banks";
import { getBankingProviderAffiliateCta } from "@/src/data/banking/bankingProviderAffiliateCtas";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
  bankingGuideCardPrimaryCtaClass,
  bankingGuideCardSecondaryLinkClass,
} from "@/components/banking/bankingPageUi";

function FeeLine({ label, text }: { label: string; text: string | undefined }) {
  if (!text?.trim()) return null;
  return (
    <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "min-w-0")}>
      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">{label}</p>
      <BoldParagraph text={text} className="mt-1.5 text-xs leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
    </div>
  );
}

function BankFeeCard({ bank, bestBanksHref, index }: { bank: Bank; bestBanksHref: string; index: number }) {
  const { feeModel: f } = bank;
  const logo = bank.logoSrc ? normalizeExternalProviderLogoSrc(bank.logoSrc) : null;
  const affiliateCta = getBankingProviderAffiliateCta(bank.id as BankId);

  return (
    <article
      className={cn(
        BANKING_VISUAL_CARD_SHELL_CLASS,
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
      <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
        <div className="flex items-start gap-3">
          {logo ? (
            <Image src={logo} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-2xl border border-border/60 bg-white object-contain p-1.5 ring-1 ring-border/20" />
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-dashed border-border bg-surface-muted text-xs font-bold text-foreground-muted ring-1 ring-border/20" aria-hidden>
              {bank.name.slice(0, 1)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>{bankAccountFeeTypeLabel(f.accountFeeType)}</span>
              <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">{bank.name}</h3>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border/65 bg-white/70 px-3 py-3 ring-1 ring-border/20">
          <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">Cost signal</p>
          <div className="mt-2 flex flex-wrap gap-1.5" aria-label={`${bank.name} fee pattern`}>
            <span className="rounded-full border border-border/70 bg-surface-raised/90 px-2.5 py-1 text-[11px] font-semibold leading-none text-foreground-muted">Overview</span>
            <span className="rounded-full border border-border/70 bg-surface-raised/90 px-2.5 py-1 text-[11px] font-semibold leading-none text-foreground-muted">Package</span>
            <span className="rounded-full border border-border/70 bg-surface-raised/90 px-2.5 py-1 text-[11px] font-semibold leading-none text-foreground-muted">Verify live</span>
          </div>
        </div>

        <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4")}>
          <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">Monthly (typical)</p>
          <BoldParagraph text={f.monthlyFeeDisplay} className="mt-1.5 text-sm leading-snug text-foreground [&_strong]:font-semibold" />
        </div>

        <div className="mt-3 grid gap-3">
          <FeeLine label="Cards" text={f.cardFeeDisplay} />
          <FeeLine label="International transfers" text={f.internationalTransferCostPattern} />
          <FeeLine label="FX" text={f.fxCostPattern} />
          <FeeLine label="ATM" text={f.atmCostPattern} />
          <FeeLine label="Premium / tiers" text={f.premiumPlanPattern} />
          <FeeLine label="Business / ZZP" text={f.businessAccountPattern} />
        </div>

        <p className="mt-3 text-[10px] text-foreground-faint">
          {f.sourceKey === "editorial-bank-shortlist" || f.sourceKey === "editorial-low-cost-guide"
            ? "Short list — not live pricing."
            : "Confirm all lines on the provider site."}
        </p>
        <div className="mt-auto flex flex-col gap-2 border-t border-border/45 pt-3 sm:flex-row sm:flex-wrap">
          {affiliateCta ? (
            <a
              href={affiliateCta.href}
              target="_blank"
              rel={affiliateCta.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
              data-monetization-link-mode={affiliateCta.isAffiliate ? "affiliate" : "direct"}
              data-monetization-provider-id={bank.id}
              className={bankingGuideCardPrimaryCtaClass}
            >
              {affiliateCta.label}
            </a>
          ) : null}
          <Link href={`${bestBanksHref}#${bank.id}`} className={bankingGuideCardSecondaryLinkClass}>
            Compare banks
          </Link>
        </div>
        {affiliateCta?.isAffiliate ? (
          <p className="mt-2 text-[10px] leading-snug text-foreground-faint">
            {affiliateCta.disclosure ?? "We may earn a commission if you sign up through this link."}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export type BankFeePatternCardsProps = {
  /** Defaults to shared `banks` shortlist. */
  banksList?: readonly Bank[];
  bestBanksHref?: string;
  className?: string;
};

/**
 * Compact fee-pattern cards from shared {@link banks} `feeModel` — complements affiliate placement blocks.
 */
export function BankFeePatternCards({
  banksList = banks,
  bestBanksHref = "/netherlands/money/banking/best-banks-expats/",
  className,
}: BankFeePatternCardsProps) {
  return (
    <div className={cn("mt-4 grid min-w-0 max-w-full gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {banksList.map((bank, index) => (
        <BankFeeCard key={bank.id} bank={bank} bestBanksHref={bestBanksHref} index={index} />
      ))}
    </div>
  );
}
