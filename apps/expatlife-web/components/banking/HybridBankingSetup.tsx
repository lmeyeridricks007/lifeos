import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export type HybridBankingSetupProps = {
  /** Left pillar label (e.g. Dutch / traditional account). */
  traditionalAccountLabel: string;
  /** Right pillar label (e.g. digital bank account). */
  digitalAccountLabel: string;
  /** Short line under the traditional pillar title. */
  traditionalAccountHint: string;
  /** Short line under the digital pillar title. */
  digitalAccountHint: string;
  /** Heading above the traditional use-case list in the middle band. */
  traditionalUsesHeading: string;
  /** Heading above the digital use-case list in the middle band. */
  digitalUsesHeading: string;
  traditionalItems: readonly string[];
  digitalItems: readonly string[];
  className?: string;
};

function TraditionalPillarVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[200px]", className)} aria-hidden>
      <svg viewBox="0 0 200 140" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hyb-trad-roof" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#64748b" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <rect x="28" y="52" width="144" height="72" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x="40" y="64" width="20" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" />
        <rect x="66" y="64" width="20" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" />
        <rect x="92" y="64" width="20" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" />
        <rect x="118" y="64" width="20" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" />
        <rect x="40" y="86" width="20" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" />
        <rect x="66" y="86" width="44" height="14" rx="2" fill="#ccfbf1" stroke="#14b8a6" strokeOpacity="0.5" />
        <rect x="118" y="86" width="42" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" />
        <path d="M100 52 L100 28 L124 16 L148 28 L148 52 Z" fill="url(#hyb-trad-roof)" stroke="#94a3b8" strokeWidth="1.2" />
        <rect x="52" y="112" width="96" height="8" rx="2" fill="#e2e8f0" />
      </svg>
    </div>
  );
}

function DigitalPillarVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[200px]", className)} aria-hidden>
      <svg viewBox="0 0 200 140" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hyb-dig-screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <rect x="44" y="12" width="112" height="116" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <rect x="52" y="22" width="96" height="88" rx="8" fill="url(#hyb-dig-screen)" />
        <rect x="62" y="34" width="56" height="6" rx="2" fill="#38bdf8" fillOpacity="0.35" />
        <rect x="62" y="46" width="76" height="4" rx="1" fill="#94a3b8" fillOpacity="0.35" />
        <rect x="62" y="56" width="76" height="4" rx="1" fill="#94a3b8" fillOpacity="0.22" />
        <rect x="62" y="72" width="76" height="28" rx="6" fill="#fff" fillOpacity="0.08" stroke="#475569" strokeWidth="0.8" />
        <circle cx="100" cy="118" r="5" fill="#334155" stroke="#475569" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

const pillarCard =
  "relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5";

const listItem = "flex gap-2.5 text-sm leading-snug text-foreground-muted";

/**
 * Visual explainer: **Dutch / traditional** on the left, **digital** on the right, **use-case split** in the centre.
 * Mobile: stacked **traditional → split → digital**; `lg`: three-column row.
 */
export function HybridBankingSetup({
  traditionalAccountLabel,
  digitalAccountLabel,
  traditionalAccountHint,
  digitalAccountHint,
  traditionalUsesHeading,
  digitalUsesHeading,
  traditionalItems,
  digitalItems,
  className,
}: HybridBankingSetupProps) {
  const middle = (
    <div
      className={cn(
        "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-muted/30 shadow-card ring-1 ring-border/10",
        movingNlCardMicroLiftClass
      )}
      role="region"
      aria-label="Typical split of banking tasks between Dutch and digital accounts"
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="grid flex-1 grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:items-stretch">
        <div className="flex flex-col p-4 sm:p-5 sm:min-h-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800/90">{traditionalUsesHeading}</p>
          <ul className="mt-3 space-y-2.5" role="list">
            {traditionalItems.map((item) => (
              <li key={item} className={listItem}>
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col p-4 sm:p-5 sm:min-h-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-sky-800/90">{digitalUsesHeading}</p>
          <ul className="mt-3 space-y-2.5" role="list">
            {digitalItems.map((item) => (
              <li key={item} className={listItem}>
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" strokeWidth={2.5} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const traditionalPillar = (
    <div className={cn(pillarCard, movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-700/80 via-teal-600/70 to-slate-400/50")} aria-hidden />
      <TraditionalPillarVisual className="mb-3 shrink-0" />
      <h3 className="text-center text-sm font-bold text-foreground">{traditionalAccountLabel}</h3>
      <p className="mt-2 text-center text-xs leading-relaxed text-foreground-muted">{traditionalAccountHint}</p>
    </div>
  );

  const digitalPillar = (
    <div className={cn(pillarCard, movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-400/50 via-sky-600/70 to-sky-500/80")} aria-hidden />
      <DigitalPillarVisual className="mb-3 shrink-0" />
      <h3 className="text-center text-sm font-bold text-foreground">{digitalAccountLabel}</h3>
      <p className="mt-2 text-center text-xs leading-relaxed text-foreground-muted">{digitalAccountHint}</p>
    </div>
  );

  return (
    <div className={cn("mt-6", className)}>
      {/* Mobile / tablet: narrative stack */}
      <div className="flex flex-col gap-5 lg:hidden">
        {traditionalPillar}
        {middle}
        {digitalPillar}
      </div>

      {/* Desktop: traditional | split | digital */}
      <div className="hidden gap-5 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-6">
        <div className="flex lg:col-span-3">{traditionalPillar}</div>
        <div className="flex min-h-[260px] lg:col-span-6">{middle}</div>
        <div className="flex lg:col-span-3">{digitalPillar}</div>
      </div>
    </div>
  );
}
