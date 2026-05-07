import Link from "next/link";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";
import type { BankingScamResponseStep } from "@/src/data/banking/bankingSafety";
import { bankingScamResponseUrgencyLabel, resolveBankingSecurityOfficialLinks } from "@/src/data/banking/bankingSafety";

const URGENCY_CHIP_CLASS =
  "rounded-full border border-border/70 bg-surface-muted/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-foreground-muted";

/**
 * Ordered response steps with calm urgency labels — banking visual cards.
 */
export function ScamResponseSteps({
  steps,
  className,
  stepChipLabel = "Step",
}: {
  steps: readonly BankingScamResponseStep[];
  className?: string;
  stepChipLabel?: string;
}) {
  if (!steps.length) return null;

  return (
    <div className={cn("grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2", className)}>
      {steps.map((step, index) => {
        const official = resolveBankingSecurityOfficialLinks(step.officialSourceKeys);
        return (
          <article key={step.id} className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass, "min-w-0 max-w-full overflow-hidden")}>
            <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
            <div className={cn(BANKING_VISUAL_CARD_BODY_CLASS, "min-w-0")}>
              <div className="flex flex-wrap items-center gap-2">
                <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>{stepChipLabel}</span>
                <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
                <span className={URGENCY_CHIP_CLASS}>{bankingScamResponseUrgencyLabel(step.urgency)}</span>
              </div>
              <h3 className="mt-2 break-words text-base font-bold leading-snug tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-3 break-words text-sm leading-relaxed text-foreground-muted sm:leading-relaxed">{step.description}</p>
              {official.length > 0 ? (
                <div className="mt-4 border-t border-dashed border-border/60 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Official pointers</p>
                  <ul className="mt-2 space-y-1.5 text-xs">
                    {official.map((link) => (
                      <li key={link.href}>
                        {link.type === "external" ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-link underline-offset-2 hover:underline"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className="font-medium text-link hover:underline">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
