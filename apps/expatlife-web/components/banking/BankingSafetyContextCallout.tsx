import Link from "next/link";
import { cn } from "@/lib/cn";
import { bankingGuideTertiaryLinkClass } from "@/components/banking/bankingPageUi";
import { BANKING_SECURITY_PATH } from "@/src/data/banking/bankingSafety";

const VARIANTS = {
  paymentRequests: {
    href: `${BANKING_SECURITY_PATH}#payment-requests` as const,
    title: "Payment link safety",
    body: "Betaalverzoek and payment links are normal in the Netherlands—scammers copy them. Our Banking safety guide shows simple checks before you tap pay.",
    cta: "Read Banking safety & fraud",
  },
  internationalTransfers: {
    href: `${BANKING_SECURITY_PATH}#intl-transfer-safety` as const,
    title: "Before you send a large amount",
    body: "Rush stories and sudden IBAN changes are common pressure tricks. The same guide walks through transfer checks and slower, safer habits.",
    cta: "Transfer safety in Banking safety & fraud",
  },
  securityFeaturesCompare: {
    href: `${BANKING_SECURITY_PATH}#features-to-compare` as const,
    title: "Safety next to scores or fees",
    body: "Our editorial scores are not a security grade. On each bank’s real site, compare card freeze, alerts, and app controls—the safety guide lists what to look for.",
    cta: "Safety habits & feature checklist",
  },
} as const;

export type BankingSafetyContextCalloutVariant = keyof typeof VARIANTS;

/**
 * Single-purpose aside linking to Banking safety — use once per page to avoid noisy repeats.
 */
export function BankingSafetyContextCallout({
  variant,
  className,
  /** Use on Moving-copilot–styled pages (e.g. international transfers) so type colours match. */
  tone = "default",
}: {
  variant: BankingSafetyContextCalloutVariant;
  className?: string;
  tone?: "default" | "copilot";
}) {
  const v = VARIANTS[variant];
  const onCopilot = tone === "copilot";
  return (
    <aside
      className={cn(
        "max-w-3xl rounded-xl border p-4 text-sm leading-snug shadow-sm sm:p-5",
        onCopilot
          ? "border-copilot-primary/12 bg-white/85 text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]"
          : "border-border/55 bg-slate-50/90 text-foreground-muted ring-1 ring-border/40",
        className
      )}
      aria-label={v.title}
    >
      <p className={cn("text-xs font-bold uppercase tracking-[0.12em]", onCopilot ? "text-copilot-text-muted" : "text-foreground-muted")}>
        {v.title}
      </p>
      <p className={cn("mt-2", onCopilot ? "text-copilot-text-secondary" : "text-foreground-muted")}>{v.body}</p>
      <p className="mt-3">
        <Link href={v.href} className={cn(bankingGuideTertiaryLinkClass, "inline-flex min-h-[44px] items-center font-semibold")}>
          {v.cta} →
        </Link>
      </p>
    </aside>
  );
}
