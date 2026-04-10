import { cn } from "@/lib/cn";

/**
 * Daily-life collage — Dutch street rhythm: shop, scan, tap, pickup, fiets — matches Living / Move hero language.
 */
export function DailyLifeHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[11.5rem] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-emerald-50/70 via-white to-orange-50/35 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:aspect-[16/11] sm:rounded-2xl",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full bg-copilot-primary/[0.07] blur-3xl sm:-right-14 sm:-top-16 sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-emerald-400/12 blur-3xl sm:h-44 sm:w-44" />
      <div className="pointer-events-none absolute left-[10%] top-8 h-px w-24 rotate-[-16deg] bg-gradient-to-r from-transparent via-emerald-400/45 to-transparent sm:top-10" />
      <div className="pointer-events-none absolute right-[16%] top-12 h-px w-20 rotate-12 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
      {/* subtle NL tricolour hint — thin, editorial, not a flag asset */}
      <div
        className="pointer-events-none absolute left-4 top-3 flex h-1 w-8 overflow-hidden rounded-full opacity-80 sm:left-5 sm:top-4 sm:h-1.5 sm:w-10"
        aria-hidden
      >
        <span className="h-full w-1/3 bg-[#AE1C28]" />
        <span className="h-full w-1/3 bg-white ring-1 ring-slate-200/60" />
        <span className="h-full w-1/3 bg-[#21468B]" />
      </div>

      <div className="relative flex h-full min-h-0 flex-col justify-between p-3 pt-5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center justify-end gap-1 sm:justify-start sm:gap-1.5 md:gap-2">
          {[
            { k: "Supermarket", hint: "Weekly shop + top-up" },
            { k: "Scan", hint: "Self-checkout" },
            { k: "Tap", hint: "PIN / contactless" },
            { k: "Pickup", hint: "Parcel locker / shop" },
            { k: "Fiets", hint: "Short trips by bike" },
          ].map(({ k, hint }) => (
            <span
              key={k}
              title={hint}
              className="rounded-full border border-slate-200/90 bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]"
            >
              {k}
            </span>
          ))}
        </div>

        <div className="relative mt-1 flex min-h-0 flex-1 items-center justify-center py-0.5 sm:mt-2 sm:py-2">
          <svg
            viewBox="0 0 400 260"
            className="h-full max-h-[9.5rem] w-auto max-w-full text-slate-800 sm:max-h-[min(100%,248px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ecodl-hero-panel" x1="24" y1="24" x2="376" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ecfdf5" stopOpacity="0.92" />
                <stop offset="0.45" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#fff7ed" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="ecodl-basket" x1="52" y1="118" x2="132" y2="188" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34d399" stopOpacity="0.38" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0.14" />
              </linearGradient>
              <linearGradient id="ecodl-parcel" x1="268" y1="124" x2="332" y2="196" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fb923c" stopOpacity="0.35" />
                <stop offset="1" stopColor="#ea580c" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            <rect x="16" y="20" width="368" height="132" rx="16" fill="url(#ecodl-hero-panel)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.45" />

            {/* canal-house silhouettes — background rhythm */}
            <g opacity="0.35" fill="#94a3b8">
              <path d="M28 98 L36 72 L44 72 L52 98 Z" />
              <rect x="30" y="98" width="20" height="22" rx="0" />
              <path d="M54 98 L62 68 L70 68 L78 98 Z" />
              <rect x="56" y="98" width="20" height="22" />
              <rect x="78" y="88" width="16" height="32" rx="1" />
            </g>

            {/* shelf */}
            <rect x="32" y="36" width="336" height="8" rx="2" fill="#e2e8f0" opacity="0.9" />
            <rect x="40" y="52" width="48" height="36" rx="4" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="96" y="52" width="48" height="36" rx="4" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="152" y="52" width="48" height="36" rx="4" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
            <circle cx="176" cy="70" r="8" fill="#f97316" opacity="0.35" />

            {/* basket */}
            <g stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M48 154l14-52h62l10 52z" fill="url(#ecodl-basket)" stroke="#059669" strokeWidth="1.5" />
              <path d="M56 118h68" stroke="#64748b" strokeWidth="1.5" opacity="0.6" />
              <path d="M62 128h20M62 138h32" stroke="#64748b" strokeWidth="1.2" opacity="0.45" />
            </g>

            {/* self-checkout */}
            <rect x="148" y="120" width="112" height="56" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.8" />
            <rect x="160" y="132" width="88" height="32" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
            <rect x="172" y="140" width="36" height="16" rx="3" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1" />
            <text x="190" y="152" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
              SCAN
            </text>
            <circle cx="232" cy="148" r="10" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
            <path d="M228 148h8M232 144v8" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />

            {/* contactless card */}
            <g transform="translate(188 96)">
              <rect x="0" y="0" width="52" height="34" rx="6" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="6" y="8" width="18" height="12" rx="2" fill="#fde68a" stroke="#d97706" strokeWidth="0.8" />
              <path
                d="M38 12c4 0 6 2 6 5"
                stroke="#10b981"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M36 16c6 0 10 3 10 8"
                stroke="#10b981"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                opacity="0.45"
              />
            </g>

            {/* parcel wall */}
            <rect x="276" y="108" width="88" height="72" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.6" />
            <rect x="286" y="118" width="68" height="22" rx="5" fill="url(#ecodl-parcel)" stroke="#ea580c" strokeWidth="1" />
            <text x="320" y="133" textAnchor="middle" fill="#9a3412" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.06em">
              PICKUP
            </text>
            <rect x="292" y="146" width="20" height="16" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.8" />
            <rect x="316" y="146" width="20" height="16" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.8" />
            <rect x="292" y="166" width="44" height="6" rx="2" fill="#cbd5e1" opacity="0.85" />

            {/* bike foreground */}
            <g transform="translate(32 72)" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="18" cy="52" r="12" fill="none" />
              <circle cx="46" cy="52" r="12" fill="none" />
              <path d="M18 52 L28 28 L40 28 L46 52 M28 28 L24 52" fill="none" />
            </g>
            {/* red bike lane accent */}
            <rect x="24" y="198" width="140" height="5" rx="1" fill="#fecaca" opacity="0.75" />

            {/* street / pavement */}
            <rect x="24" y="168" width="352" height="72" rx="12" fill="#f1f5f9" stroke="#e2e8f0" />
            <rect x="36" y="178" width="100" height="6" rx="2" fill="#d1fae5" opacity="0.7" />
            <rect x="190" y="178" width="90" height="6" rx="2" fill="#fef3c7" opacity="0.75" />
            <rect x="300" y="178" width="64" height="6" rx="2" fill="#e0e7ff" opacity="0.65" />
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1.5 sm:text-[11px]">
          Shop · scan · tap · pickup · fiets
        </p>
      </div>
    </div>
  );
}
