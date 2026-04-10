import { cn } from "@/lib/cn";

/**
 * Everyday-language collage for the Living pillar.
 * Uses the same framed editorial treatment as other Living hero graphics:
 * layered chips, phrase cards, speech cues, and everyday context instead of stock imagery.
 */
export function LanguageHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[10.5rem] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-sky-50/70 via-white to-emerald-50/45 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:aspect-[16/11]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-copilot-primary/[0.08] blur-3xl sm:-right-16 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-14 -left-8 h-40 w-40 rounded-full bg-emerald-400/12 blur-3xl sm:h-48 sm:w-48" />
      <div className="pointer-events-none absolute left-[10%] top-8 h-px w-28 rotate-[-15deg] bg-gradient-to-r from-transparent via-sky-400/45 to-transparent sm:top-10" />
      <div className="pointer-events-none absolute right-[18%] top-12 h-px w-24 rotate-10 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-3 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
          {[
            { k: "Dutch opener", hint: "Use a short Dutch opener" },
            { k: "Transport", hint: "Stations and stops" },
            { k: "Cafe", hint: "Short service moments" },
            { k: "Work", hint: "Clear polite phrases" },
            { k: "Neighbor", hint: "Small social goodwill" },
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
            className="h-full max-h-[9.35rem] w-auto max-w-full text-slate-800 sm:max-h-[min(100%,248px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ecolang-panel" x1="18" y1="16" x2="380" y2="232" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e0f2fe" stopOpacity="0.75" />
                <stop offset="0.42" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#ecfdf5" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="ecolang-card-a" x1="38" y1="64" x2="146" y2="146" gradientUnits="userSpaceOnUse">
                <stop stopColor="#bfdbfe" stopOpacity="0.48" />
                <stop offset="1" stopColor="#60a5fa" stopOpacity="0.18" />
              </linearGradient>
              <linearGradient id="ecolang-card-b" x1="236" y1="78" x2="336" y2="148" gradientUnits="userSpaceOnUse">
                <stop stopColor="#bbf7d0" stopOpacity="0.48" />
                <stop offset="1" stopColor="#22c55e" stopOpacity="0.14" />
              </linearGradient>
              <linearGradient id="ecolang-bubble" x1="132" y1="26" x2="216" y2="92" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fef3c7" stopOpacity="0.7" />
                <stop offset="1" stopColor="#f59e0b" stopOpacity="0.18" />
              </linearGradient>
            </defs>

            <rect x="14" y="16" width="372" height="236" rx="18" fill="url(#ecolang-panel)" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.55" />

            {/* soft city background */}
            <g opacity="0.28" fill="#94a3b8">
              <path d="M28 122 L38 88 L48 88 L58 122 Z" />
              <rect x="30" y="122" width="26" height="24" />
              <path d="M60 122 L70 82 L80 82 L90 122 Z" />
              <rect x="62" y="122" width="26" height="24" />
              <rect x="92" y="106" width="22" height="40" rx="1" />
            </g>

            {/* phrase card left */}
            <g>
              <rect x="34" y="70" width="112" height="74" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="44" y="82" width="92" height="20" rx="7" fill="url(#ecolang-card-a)" stroke="#60a5fa" strokeWidth="1" />
              <text x="90" y="95" textAnchor="middle" fill="#1d4ed8" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                SPREEKT U ENGELS?
              </text>
              <rect x="48" y="110" width="74" height="7" rx="3.5" fill="#cbd5e1" opacity="0.95" />
              <rect x="48" y="122" width="52" height="7" rx="3.5" fill="#e2e8f0" opacity="0.9" />
              <rect x="48" y="134" width="42" height="6" rx="3" fill="#e2e8f0" opacity="0.72" />
            </g>

            {/* speech bubble top */}
            <g>
              <rect x="128" y="26" width="92" height="44" rx="16" fill="url(#ecolang-bubble)" stroke="#d97706" strokeWidth="1" strokeOpacity="0.32" />
              <path d="M154 68 L148 80 L166 70" fill="#fde68a" fillOpacity="0.65" stroke="#d97706" strokeOpacity="0.32" />
              <text x="174" y="46" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.04em">
                HOI
              </text>
              <rect x="152" y="52" width="44" height="5" rx="2.5" fill="#f59e0b" opacity="0.28" />
            </g>

            {/* translation cue */}
            <g>
              <rect x="142" y="84" width="118" height="28" rx="12" fill="#ffffff" stroke="#0f172a" strokeWidth="1.2" />
              <rect x="150" y="90" width="24" height="16" rx="8" fill="#dbeafe" />
              <text x="162" y="101" textAnchor="middle" fill="#1d4ed8" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif">
                NL
              </text>
              <path d="M180 98h18" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 4" />
              <path d="M197 95l5 3-5 3" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="208" y="90" width="24" height="16" rx="8" fill="#dcfce7" />
              <text x="220" y="101" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif">
                EN
              </text>
              <rect x="238" y="94" width="12" height="4" rx="2" fill="#cbd5e1" />
            </g>

            {/* two people / conversation */}
            <g stroke="#0f172a" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="162" cy="124" r="16" fill="#fff" strokeWidth="1.8" />
              <path d="M146 158c5-10 12-16 24-16 10 0 18 6 22 16" strokeWidth="2" />
              <circle cx="224" cy="128" r="16" fill="#fff" strokeWidth="1.8" />
              <path d="M208 162c5-11 12-17 24-17 10 0 18 6 22 17" strokeWidth="2" />
              <path d="M152 120c3 3 6 4 10 4s7-1 10-4" strokeWidth="1.4" opacity="0.72" />
              <path d="M214 124c3 2 6 3 10 3s7-1 10-3" strokeWidth="1.4" opacity="0.72" />
            </g>

            {/* right phrase stack */}
            <g>
              <rect x="248" y="74" width="104" height="68" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="260" y="86" width="80" height="20" rx="7" fill="url(#ecolang-card-b)" stroke="#22c55e" strokeWidth="1" />
              <text x="300" y="99" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                DANK U WEL
              </text>
              <rect x="264" y="114" width="68" height="7" rx="3.5" fill="#cbd5e1" opacity="0.95" />
              <rect x="264" y="126" width="48" height="7" rx="3.5" fill="#e2e8f0" opacity="0.9" />
            </g>

            {/* context chips */}
            <g>
              <rect x="70" y="162" width="54" height="28" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="97" y="179" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                SHOP
              </text>

              <rect x="246" y="154" width="54" height="28" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="273" y="171" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                TRAIN
              </text>

              <rect x="308" y="154" width="54" height="28" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="335" y="171" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                CAFE
              </text>

              <rect x="308" y="186" width="54" height="24" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="335" y="201" textAnchor="middle" fill="#0f172a" fontSize="7.5" fontWeight="700" fontFamily="system-ui,sans-serif">
                WORK
              </text>
            </g>

            {/* little route / card cue */}
            <g>
              <rect x="120" y="176" width="118" height="28" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <circle cx="138" cy="190" r="4.5" fill="#60a5fa" />
              <circle cx="174" cy="190" r="4.5" fill="#f59e0b" />
              <circle cx="210" cy="190" r="4.5" fill="#22c55e" />
              <path d="M142 190h28M178 190h28" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 5" />
            </g>

            {/* street band */}
            <rect x="26" y="212" width="348" height="24" rx="10" fill="#f1f5f9" stroke="#e2e8f0" />
            <rect x="36" y="218" width="96" height="5" rx="2.5" fill="#fecaca" opacity="0.72" />
            <path d="M152 224h18M180 224h18M208 224h18" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.45" />
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1.5 sm:text-[11px]">
          Greeting first · ask simply · switch if needed
        </p>
      </div>
    </div>
  );
}
