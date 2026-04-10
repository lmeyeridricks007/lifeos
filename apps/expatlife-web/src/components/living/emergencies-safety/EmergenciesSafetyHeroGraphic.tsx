import { cn } from "@/lib/cn";

/**
 * Calm emergency-readiness collage for the Living pillar.
 * Keeps the same framed editorial feel as other Living hero graphics:
 * practical chips, soft gradients, and a simple system map instead of alarmist imagery.
 */
export function EmergenciesSafetyHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[12rem] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-sky-50/75 via-white to-amber-50/45 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:aspect-[16/11]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl sm:-right-16 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-14 -left-8 h-44 w-44 rounded-full bg-amber-300/12 blur-3xl sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute left-[10%] top-8 h-px w-28 rotate-[-12deg] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent sm:top-10" />
      <div className="pointer-events-none absolute right-[18%] top-12 h-px w-24 rotate-12 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
          {[
            { k: "112", hint: "Emergency" },
            { k: "Urgent", hint: "Quick action" },
            { k: "GP", hint: "Normal route" },
            { k: "Transport", hint: "Daily awareness" },
            { k: "Home", hint: "Preparedness" },
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
              <linearGradient id="safety-panel" x1="18" y1="18" x2="384" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eff6ff" stopOpacity="0.92" />
                <stop offset="0.52" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#fffbeb" stopOpacity="0.82" />
              </linearGradient>
              <linearGradient id="safety-card-a" x1="40" y1="90" x2="146" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fee2e2" stopOpacity="0.78" />
                <stop offset="1" stopColor="#f59e0b" stopOpacity="0.14" />
              </linearGradient>
              <linearGradient id="safety-card-b" x1="256" y1="90" x2="352" y2="154" gradientUnits="userSpaceOnUse">
                <stop stopColor="#dbeafe" stopOpacity="0.82" />
                <stop offset="1" stopColor="#38bdf8" stopOpacity="0.14" />
              </linearGradient>
            </defs>

            <rect x="14" y="16" width="372" height="236" rx="18" fill="url(#safety-panel)" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.55" />

            <rect x="34" y="40" width="332" height="10" rx="3" fill="#e2e8f0" opacity="0.92" />
            <rect x="44" y="56" width="58" height="26" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="110" y="56" width="58" height="26" rx="6" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />
            <rect x="176" y="56" width="58" height="26" rx="6" fill="#fffbeb" stroke="#fcd34d" strokeWidth="1" />
            <rect x="242" y="56" width="58" height="26" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="308" y="56" width="42" height="26" rx="6" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />

            <g>
              <rect x="34" y="92" width="108" height="72" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="46" y="104" width="84" height="22" rx="7" fill="url(#safety-card-a)" stroke="#fb7185" strokeWidth="1" />
              <text x="88" y="118" textAnchor="middle" fill="#b91c1c" fontSize="10" fontWeight="900" fontFamily="system-ui,sans-serif">
                112
              </text>
              <path d="M58 140h58" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M58 150h42" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="122" cy="144" r="10" fill="#fee2e2" stroke="#f87171" strokeWidth="1.2" />
              <path d="M122 139v10M117 144h10" stroke="#dc2626" strokeWidth="1.4" strokeLinecap="round" />
            </g>

            <g strokeLinecap="round" strokeLinejoin="round">
              <rect x="144" y="86" width="118" height="80" rx="18" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="158" y="100" width="90" height="20" rx="10" fill="#eff6ff" stroke="#38bdf8" strokeWidth="1" />
              <text x="203" y="113" textAnchor="middle" fill="#0369a1" fontSize="8.5" fontWeight="800" fontFamily="system-ui,sans-serif">
                URGENT VS NON-URGENT
              </text>
              <rect x="158" y="130" width="30" height="18" rx="9" fill="#fee2e2" />
              <rect x="192" y="130" width="34" height="18" rx="9" fill="#fef3c7" />
              <rect x="230" y="130" width="22" height="18" rx="9" fill="#dcfce7" />
              <text x="173" y="142.5" textAnchor="middle" fill="#b91c1c" fontSize="7" fontWeight="800" fontFamily="system-ui,sans-serif">
                112
              </text>
              <text x="209" y="142.5" textAnchor="middle" fill="#92400e" fontSize="7" fontWeight="800" fontFamily="system-ui,sans-serif">
                URGENT
              </text>
              <text x="241" y="142.5" textAnchor="middle" fill="#166534" fontSize="7" fontWeight="800" fontFamily="system-ui,sans-serif">
                GP
              </text>
              <text x="203" y="158" textAnchor="middle" fill="#475569" fontSize="8.5" fontWeight="700" fontFamily="system-ui,sans-serif">
                KNOW THE FIRST STEP
              </text>
            </g>

            <g>
              <rect x="266" y="94" width="92" height="64" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="278" y="106" width="68" height="20" rx="7" fill="url(#safety-card-b)" stroke="#38bdf8" strokeWidth="1" />
              <text x="312" y="119" textAnchor="middle" fill="#0369a1" fontSize="8.5" fontWeight="800" fontFamily="system-ui,sans-serif">
                LOCATION READY
              </text>
              <path d="M300 136c0-7 5-12 12-12 7 0 12 5 12 12v3c0 10-7 16-12 19-5-3-12-9-12-19v-3Z" fill="#dbeafe" stroke="#0284c7" strokeWidth="1.2" />
              <circle cx="312" cy="136" r="4" fill="#0284c7" />
            </g>

            <g>
              <rect x="304" y="170" width="46" height="12" rx="6" fill="#ffffff" stroke="#dbeafe" strokeWidth="1" />
              <text x="327" y="178.5" textAnchor="middle" fill="#475569" fontSize="7.2" fontWeight="700" fontFamily="system-ui,sans-serif">
                ADDRESS READY
              </text>
            </g>

            <g>
              <rect x="42" y="186" width="98" height="34" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="91" y="199" textAnchor="middle" fill="#475569" fontSize="7.5" fontWeight="700" fontFamily="system-ui,sans-serif">
                DAILY SAFETY
              </text>
              <path d="M70 207l10-8 12 8 10-8" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="80" cy="208" r="2.6" fill="#0f172a" />
              <circle cx="102" cy="208" r="2.6" fill="#0f172a" />
            </g>

            <g>
              <rect x="150" y="186" width="108" height="34" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="204" y="199" textAnchor="middle" fill="#475569" fontSize="7.5" fontWeight="700" fontFamily="system-ui,sans-serif">
                PHONE + WALLET + KEYS
              </text>
              <rect x="174" y="205" width="18" height="8" rx="2" fill="#bfdbfe" />
              <rect x="198" y="204" width="16" height="10" rx="2" fill="#fde68a" />
              <circle cx="226" cy="209" r="5" stroke="#0f172a" strokeWidth="1.2" />
            </g>

            <g>
              <rect x="270" y="182" width="90" height="40" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="315" y="196" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                CALM PREPARATION
              </text>
              <path d="M292 210h46" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M292 202h28" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            <path d="M88 170c18-10 36-12 54-7" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M208 170c14 0 28 5 44 12" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M54 228H348" stroke="#e2e8f0" strokeWidth="1.2" />
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1.5 sm:text-[11px]">
          112 · urgent help · location ready · everyday safety
        </p>
      </div>
    </div>
  );
}
