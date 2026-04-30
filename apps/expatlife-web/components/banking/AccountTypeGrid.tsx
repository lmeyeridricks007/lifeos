import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";
import type { BankingAccountTypeDefinition } from "@/src/data/banking/accountTypes";

const labelClass = "text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted";

/**
 * Responsive grid of Dutch banking account types — same card shell as other banking guides.
 */
export function AccountTypeGrid({
  accountTypes,
  className,
}: {
  accountTypes: readonly BankingAccountTypeDefinition[];
  className?: string;
}) {
  return (
    <div
      className={cn("grid min-w-0 max-w-full gap-2.5 overflow-x-hidden sm:grid-cols-2 sm:gap-3 lg:grid-cols-2 lg:gap-4", className)}
      role="list"
    >
      {accountTypes.map((t, index) => (
        <article
          key={t.id}
          role="listitem"
          className={cn(
            BANKING_VISUAL_CARD_SHELL_CLASS,
            "min-w-0 break-words",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
          <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Account type</span>
              <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-2 text-balance text-base font-bold leading-snug tracking-tight text-foreground">{t.name}</h3>
            <p className="mt-1 text-xs font-medium text-foreground-muted">{t.dutchName}</p>
            <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4")}>
              <p className={labelClass}>What it is</p>
              <BoldParagraph
                text={t.plainEnglish}
                className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </div>
            <div className="mt-3 grid gap-3">
              <div className="rounded-xl border border-sky-200/70 bg-sky-50/50 p-3 ring-1 ring-sky-100/40">
                <p className={cn(labelClass, "text-sky-900/80")}>Best for</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm text-foreground-muted marker:text-brand">
                  {t.bestFor.map((line) => (
                    <li key={line}>
                      <BoldInline text={line} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200/70 bg-amber-50/45 p-3 ring-1 ring-amber-100/40">
                <p className={cn(labelClass, "text-amber-900/85")}>Watch-outs</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm text-foreground-muted marker:text-amber-700/80">
                  {t.watchOuts.map((line) => (
                    <li key={line}>
                      <BoldInline text={line} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
