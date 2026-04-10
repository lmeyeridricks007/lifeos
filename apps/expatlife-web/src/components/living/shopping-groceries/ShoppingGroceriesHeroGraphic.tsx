import { cn } from "@/lib/cn";

/**
 * Shopping-and-groceries collage for the Living pillar.
 * Keeps the same framed editorial treatment as other Living hero graphics:
 * soft gradients, practical chips, and everyday Dutch city rhythm instead of retail-ad styling.
 */
export function ShoppingGroceriesHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[10.25rem] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/35 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:aspect-[16/11]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl sm:-right-16 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-14 -left-8 h-44 w-44 rounded-full bg-amber-300/12 blur-3xl sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute left-[10%] top-8 h-px w-28 rotate-[-15deg] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent sm:top-10" />
      <div className="pointer-events-none absolute right-[18%] top-12 h-px w-24 rotate-12 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
          {[
            { k: "Basket", hint: "Everyday shop" },
            { k: "Scan", hint: "Self-checkout" },
            { k: "Bonus", hint: "App and offers" },
            { k: "Home", hint: "Household basics" },
            { k: "Delivery", hint: "When useful" },
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

        <div className="relative mt-1 flex min-h-0 flex-1 items-center justify-center py-0.5 sm:mt-3 sm:py-2">
          <svg
            viewBox="0 0 400 268"
            className="h-full max-h-[9.25rem] w-auto max-w-full text-slate-800 sm:max-h-[min(100%,248px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="shopping-panel" x1="18" y1="18" x2="384" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ecfdf5" stopOpacity="0.88" />
                <stop offset="0.48" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#fff7ed" stopOpacity="0.78" />
              </linearGradient>
              <linearGradient id="shopping-card-a" x1="32" y1="84" x2="144" y2="166" gradientUnits="userSpaceOnUse">
                <stop stopColor="#d1fae5" stopOpacity="0.72" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0.14" />
              </linearGradient>
              <linearGradient id="shopping-card-b" x1="250" y1="84" x2="352" y2="156" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fef3c7" stopOpacity="0.75" />
                <stop offset="1" stopColor="#f59e0b" stopOpacity="0.16" />
              </linearGradient>
            </defs>

            <rect x="14" y="16" width="372" height="236" rx="18" fill="url(#shopping-panel)" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.55" />

            <g opacity="0.35" fill="#94a3b8">
              <path d="M36 92 L44 68 L52 68 L60 92 Z" />
              <rect x="38" y="92" width="20" height="24" />
              <path d="M62 92 L70 64 L78 64 L86 92 Z" />
              <rect x="64" y="92" width="20" height="24" />
              <rect x="88" y="82" width="16" height="34" rx="1" />
            </g>

            <rect x="34" y="40" width="332" height="10" rx="3" fill="#e2e8f0" opacity="0.92" />
            <rect x="46" y="56" width="42" height="30" rx="5" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="96" y="56" width="42" height="30" rx="5" fill="#fff" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="146" y="56" width="42" height="30" rx="5" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
            <rect x="196" y="56" width="42" height="30" rx="5" fill="#fff7ed" stroke="#fdba74" strokeWidth="1" />

            <g>
              <rect x="34" y="104" width="112" height="74" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="46" y="116" width="88" height="20" rx="7" fill="url(#shopping-card-a)" stroke="#10b981" strokeWidth="1" />
              <text x="90" y="129" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                WEEKLY SHOP
              </text>
              <path d="M56 150h62" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M56 160h44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="118" cy="156" r="7" fill="#34d399" opacity="0.28" />
              <circle cx="60" cy="150" r="5" fill="#f59e0b" fillOpacity="0.5" />
              <circle cx="74" cy="150" r="5" fill="#10b981" fillOpacity="0.38" />
              <rect x="84" y="145" width="10" height="10" rx="3" fill="#93c5fd" fillOpacity="0.55" />
            </g>

            <g strokeLinecap="round" strokeLinejoin="round">
              <path d="M158 180 L170 126 H236 L248 180 Z" fill="#ecfdf5" fillOpacity="0.65" stroke="#059669" strokeWidth="1.6" />
              <path d="M170 126 L184 104" stroke="#0f172a" strokeWidth="2" />
              <path d="M222 126 L210 104" stroke="#0f172a" strokeWidth="2" />
              <path d="M174 144 H230" stroke="#64748b" strokeWidth="1.4" opacity="0.6" />
              <path d="M178 156 H224" stroke="#64748b" strokeWidth="1.2" opacity="0.45" />
              <circle cx="186" cy="167" r="6" fill="#fcd34d" fillOpacity="0.65" />
              <path d="M205 162 h12 v12 h-12z" fill="#bfdbfe" fillOpacity="0.75" />
            </g>

            <g>
              <rect x="248" y="84" width="108" height="66" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="260" y="96" width="84" height="20" rx="7" fill="url(#shopping-card-b)" stroke="#f59e0b" strokeWidth="1" />
              <text x="302" y="109" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                BONUS + APP
              </text>
              <rect x="266" y="126" width="36" height="10" rx="3" fill="#e2e8f0" />
              <rect x="308" y="124" width="24" height="14" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
            </g>

            <g>
              <rect x="146" y="94" width="112" height="62" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="160" y="106" width="84" height="26" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="170" y="113" width="30" height="12" rx="3" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1" />
              <text x="185" y="122" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif">
                SCAN
              </text>
              <circle cx="224" cy="119" r="9" fill="#ecfdf5" stroke="#16a34a" strokeWidth="1.4" />
              <path d="M220 119h8M224 115v8" stroke="#16a34a" strokeWidth="1.3" />
              <path d="M162 142 h80" stroke="#e2e8f0" strokeWidth="1.2" strokeDasharray="4 4" />
            </g>

            <g>
              <rect x="38" y="190" width="84" height="30" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="80" y="209" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                TOP-UP SHOP
              </text>

              <rect x="142" y="198" width="106" height="28" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <circle cx="160" cy="212" r="4.5" fill="#10b981" />
              <circle cx="195" cy="212" r="4.5" fill="#f59e0b" />
              <circle cx="230" cy="212" r="4.5" fill="#94a3b8" />
              <path d="M164 212 H190 M199 212 H225" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 5" />

              <rect x="266" y="188" width="94" height="36" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <path d="M286 204 H334" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M300 196 l6 8 l8 -10" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <text x="313" y="217" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                DELIVERY SLOT
              </text>
            </g>

            <g>
              <rect x="286" y="154" width="52" height="18" rx="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="294" y="159" width="8" height="8" rx="2" fill="#c7d2fe" />
              <path d="M306 163 h20" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
            </g>

            <path d="M284 160 C300 150 322 150 338 160" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.75" />
            <path d="M54 228 H348" stroke="#e2e8f0" strokeWidth="1.2" />
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1.5 sm:text-[11px]">
          Weekly shop · self-scan · top-up · home basics
        </p>
      </div>
    </div>
  );
}
