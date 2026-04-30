import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Banknote,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  Globe2,
  Hash,
  Landmark,
  Link2,
  Send,
  Smartphone,
  Store,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

const shell = cn(
  "relative overflow-hidden rounded-2xl border border-border/55 bg-gradient-to-b from-surface-muted/35 via-surface-muted/15 to-canvas/40 p-4 ring-1 ring-border/10 sm:p-5"
);

const node = cn(
  "flex min-w-0 flex-col items-center gap-2 rounded-xl border border-border/70 bg-surface-raised/95 px-3 py-3 text-center shadow-sm ring-1 ring-border/8 sm:px-4 sm:py-3.5"
);

const nodeIcon = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-strong/20 bg-brand/10 text-brand-strong";

const arrow = "hidden shrink-0 text-brand sm:block";

function FigCaption({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mt-3 text-center text-xs leading-snug text-foreground-muted sm:text-sm", className)}>{children}</p>;
}

/** Four rails aligned with the signature band — quick visual map. */
export function PaymentRailsOverviewInfographic({ className }: { className?: string }) {
  return (
    <figure className={cn(shell, "mt-5 sm:mt-6", className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Visual map</figcaption>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-foreground-muted">
        Most day-to-day money touches at least one of these four rails — the sections below unpack each one.
      </p>
      <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
        <div className={node}>
          <span className={nodeIcon} aria-hidden>
            <Hash className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold text-foreground">IBAN</span>
          <span className="text-[11px] leading-snug text-foreground-muted">Forms, salary, mandates</span>
        </div>
        <ArrowRight className={cn(arrow, "mx-auto rotate-90 sm:mx-0 sm:rotate-0")} aria-hidden />
        <div className={node}>
          <span className={nodeIcon} aria-hidden>
            <Store className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold text-foreground">iDEAL</span>
          <span className="text-[11px] leading-snug text-foreground-muted">Checkout in your bank app</span>
        </div>
        <ArrowRight className={cn(arrow, "mx-auto rotate-90 sm:mx-0 sm:rotate-0")} aria-hidden />
        <div className={node}>
          <span className={nodeIcon} aria-hidden>
            <Send className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold text-foreground">SEPA &amp; mandates</span>
          <span className="text-[11px] leading-snug text-foreground-muted">Transfers &amp; automatic pulls</span>
        </div>
        <ArrowRight className={cn(arrow, "mx-auto rotate-90 sm:mx-0 sm:rotate-0")} aria-hidden />
        <div className={node}>
          <span className={nodeIcon} aria-hidden>
            <CreditCard className="h-5 w-5" />
          </span>
          <span className="text-xs font-semibold text-foreground">Cards</span>
          <span className="text-[11px] leading-snug text-foreground-muted">Shops, tap, backup</span>
        </div>
      </div>
      <FigCaption>Education only — labels on your live bank screen can differ.</FigCaption>
    </figure>
  );
}

/** IBAN vs card number — which box forms usually want. */
export function IbanVsCardInfographic({ className }: { className?: string }) {
  return (
    <figure className={cn(shell, className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">On forms</figcaption>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="flex flex-col items-center rounded-xl border border-brand-strong/25 bg-brand/[0.07] px-4 py-4 text-center ring-1 ring-brand-strong/15">
          <Hash className="h-8 w-8 text-brand-strong" aria-hidden />
          <p className="mt-2 text-sm font-semibold text-foreground">IBAN</p>
          <p className="mt-1 text-xs leading-relaxed text-foreground-muted">Rent, salary, utilities, many mandates — bank transfers use this account identifier.</p>
        </div>
        <div className="flex flex-col items-center rounded-xl border border-border/80 bg-surface-raised px-4 py-4 text-center ring-1 ring-border/10">
          <CreditCard className="h-8 w-8 text-foreground-muted" aria-hidden />
          <p className="mt-2 text-sm font-semibold text-foreground">Card number</p>
          <p className="mt-1 text-xs leading-relaxed text-foreground-muted">In shops or when a site truly runs card rails — not the same field as IBAN.</p>
        </div>
      </div>
      <FigCaption>When in doubt, read the field label literally — Dutch forms are usually explicit.</FigCaption>
    </figure>
  );
}

/** Typical iDEAL path: merchant → scheme choice → bank approval. */
export function IdealCheckoutInfographic({ className }: { className?: string }) {
  return (
    <figure className={cn(shell, className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">iDEAL flow (simplified)</figcaption>
      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
        <div className={cn(node, "w-full max-w-xs sm:w-auto")}>
          <Store className="h-6 w-6 text-brand" aria-hidden />
          <span className="text-xs font-semibold text-foreground">Merchant / portal</span>
        </div>
        <ArrowRight className="text-brand sm:shrink-0" aria-hidden />
        <div className={cn(node, "w-full max-w-xs sm:w-auto")}>
          <span className="text-xs font-semibold text-foreground">Choose iDEAL</span>
          <span className="text-[11px] text-foreground-muted">On the checkout screen</span>
        </div>
        <ArrowRight className="text-brand sm:shrink-0" aria-hidden />
        <div className={cn(node, "w-full max-w-xs sm:w-auto")}>
          <Landmark className="h-6 w-6 text-brand" aria-hidden />
          <span className="text-xs font-semibold text-foreground">Your bank</span>
          <span className="text-[11px] text-foreground-muted">Approve in app or online</span>
        </div>
        <ArrowRight className="text-brand sm:shrink-0" aria-hidden />
        <div className={cn(node, "w-full max-w-xs border-emerald-200/80 bg-emerald-50/50 sm:w-auto")}>
          <CheckCircle2 className="h-6 w-6 text-emerald-700" aria-hidden />
          <span className="text-xs font-semibold text-foreground">Payment sent</span>
        </div>
      </div>
      <FigCaption>You rarely type card details on the shop site for iDEAL — the bank holds the sensitive step.</FigCaption>
    </figure>
  );
}

/** Mandate + pull mental model alongside SEPA push transfers. */
export function DirectDebitVisualInfographic({ className }: { className?: string }) {
  return (
    <figure className={cn(shell, className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Two recurring patterns</figcaption>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-sky-200/80 bg-sky-50/40 p-4 ring-1 ring-sky-100/60">
          <div className="flex items-center gap-2 text-sky-950">
            <Send className="h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm font-semibold">You push (transfer)</p>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">You start the payment to a known IBAN — typical for rent you send yourself.</p>
        </div>
        <div className="rounded-xl border border-amber-200/85 bg-amber-50/45 p-4 ring-1 ring-amber-100/50">
          <div className="flex items-center gap-2 text-amber-950">
            <CalendarClock className="h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm font-semibold">They pull (mandate)</p>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">After you approve a mandate, a supplier can debit on a schedule — utilities and subscriptions.</p>
        </div>
      </div>
      <FigCaption>Mandates deserve occasional review in your banking app — especially after moving or switching providers.</FigCaption>
    </figure>
  );
}

/** Betaalverzoek / payment request mental model. */
export function BetaalverzoekFlowInfographic({ className }: { className?: string }) {
  return (
    <figure className={cn(shell, className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Payment request</figcaption>
      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <div className={cn(node, "max-w-sm flex-row gap-3 sm:flex-col")}>
          <Smartphone className="h-7 w-7 text-brand" aria-hidden />
          <div className="text-left sm:text-center">
            <p className="text-sm font-semibold text-foreground">Someone shares a link or in-app request</p>
            <p className="mt-1 text-xs text-foreground-muted">Same trust rules as any payment instruction.</p>
          </div>
        </div>
        <ArrowRight className="rotate-90 text-brand sm:rotate-0" aria-hidden />
        <div className={cn(node, "max-w-sm flex-row gap-3 sm:flex-col")}>
          <Link2 className="h-7 w-7 text-brand" aria-hidden />
          <div className="text-left sm:text-center">
            <p className="text-sm font-semibold text-foreground">You open it in a channel you expect</p>
            <p className="mt-1 text-xs text-foreground-muted">Known chat, email, or bank app — not random cold links.</p>
          </div>
        </div>
        <ArrowRight className="rotate-90 text-brand sm:rotate-0" aria-hidden />
        <div className={cn(node, "max-w-sm flex-row gap-3 border-emerald-200/80 bg-emerald-50/40 sm:flex-col")}>
          <Wallet className="h-7 w-7 text-emerald-800" aria-hidden />
          <div className="text-left sm:text-center">
            <p className="text-sm font-semibold text-foreground">Approve like other bank-led payments</p>
            <p className="mt-1 text-xs text-foreground-muted">Amount and recipient should match the story you were given.</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

/** Cross-border: local account vs corridor tools (conceptual). */
export function InternationalPaymentsVisualInfographic({ className }: { className?: string }) {
  return (
    <figure className={cn(shell, className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Corridors (conceptual)</figcaption>
      <div className="mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
        <div className={cn(node, "flex-1 sm:max-w-[220px]")}>
          <Landmark className="h-6 w-6 text-brand" aria-hidden />
          <p className="text-sm font-semibold text-foreground">Dutch everyday account</p>
          <p className="text-xs text-foreground-muted">iDEAL, local debit, many SEPA pulls</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-foreground-muted">
          <Globe2 className="h-8 w-8 text-brand" aria-hidden />
          <span className="text-[10px] font-bold uppercase tracking-[0.12em]">Non-euro or non-SEPA</span>
        </div>
        <div className={cn(node, "flex-1 sm:max-w-[220px]")}>
          <Banknote className="h-6 w-6 text-brand" aria-hidden />
          <p className="text-sm font-semibold text-foreground">Bank or specialist app</p>
          <p className="text-xs text-foreground-muted">Compare what arrives, not only headline fees</p>
        </div>
      </div>
      <FigCaption>Many people stack a Dutch account for daily life with another path for specific corridors.</FigCaption>
    </figure>
  );
}

/** Decorative strip before the concept reference grid. */
export function PaymentMethodsReferenceStripInfographic({ className }: { className?: string }) {
  return (
    <figure className={cn(shell, className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Reference grid preview</figcaption>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-foreground-muted">
        The expandable cards below mirror these buckets — open “Optional longer read” only when you need the longer definitions.
      </p>
      <div
        className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-foreground-muted"
        aria-hidden
      >
        {["IBAN", "iDEAL", "SEPA", "Incasso", "Pinpas", "Betaalverzoek", "FX"].map((label) => (
          <span
            key={label}
            className="rounded-full border border-border/70 bg-surface-raised px-3 py-1.5 shadow-sm ring-1 ring-border/10"
          >
            {label}
          </span>
        ))}
      </div>
    </figure>
  );
}

export type HowPaymentsWorkEditorialFigure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

/** Small photoreal breaks — pairs with in-page SVG-style infographics. */
export function HowPaymentsWorkEditorialFigureGrid({
  figures,
  className,
}: {
  figures: readonly HowPaymentsWorkEditorialFigure[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {figures.map((f) => (
        <figure
          key={f.src}
          className="overflow-hidden rounded-2xl border border-border/55 bg-surface-raised/80 shadow-card ring-1 ring-border/10"
        >
          <div className="relative aspect-[3/2] w-full bg-surface-muted">
            <Image
              src={f.src}
              alt={f.alt}
              width={f.width}
              height={f.height}
              className="h-full w-full object-cover object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <figcaption className="border-t border-border/40 px-3 py-2.5 text-xs leading-snug text-foreground-muted sm:px-4 sm:py-3 sm:text-sm">
            {f.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Debit / wallet tap at terminal — complements the cards deep dive. */
export function ShopContactlessTapInfographic({ className }: { className?: string }) {
  return (
    <figure className={cn(shell, className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <figcaption className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
        In many shops
      </figcaption>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-foreground-muted">
        Debit-led spend: chip, PIN, or contactless from your current account — limits and prompts vary by terminal and bank.
      </p>
      <div className="mt-5 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
        <div className="relative flex h-24 w-36 items-center justify-center rounded-xl border border-border/70 bg-gradient-to-br from-surface-raised to-surface-muted shadow-inner ring-1 ring-border/10">
          <CreditCard className="h-10 w-10 text-brand-strong" aria-hidden />
          <span className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/20 opacity-60" />
            <span className="relative inline-flex h-7 w-7 rounded-full border-2 border-brand-strong/35 bg-brand/10" />
          </span>
        </div>
        <div className="flex items-center gap-2 text-brand-strong" aria-hidden>
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-strong/50 sm:w-12" />
          <span className="text-xs font-bold uppercase tracking-[0.14em]">Tap</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-strong/50 sm:w-12" />
        </div>
        <div className="flex h-28 w-32 flex-col items-center justify-end rounded-xl border border-border/70 bg-surface-raised pb-3 shadow-card ring-1 ring-border/10">
          <Store className="mb-2 h-8 w-8 text-foreground-muted" aria-hidden />
          <div className="h-12 w-20 rounded-md border-2 border-dashed border-brand-strong/30 bg-brand/[0.06]" />
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-wide text-foreground-muted">Terminal</span>
        </div>
      </div>
      <FigCaption>Credit cards still help for some travel and deposits — shop acceptance is situational.</FigCaption>
    </figure>
  );
}
