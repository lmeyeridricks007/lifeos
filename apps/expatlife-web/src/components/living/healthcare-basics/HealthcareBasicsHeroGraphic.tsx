import { cn } from "@/lib/cn";

/**
 * Healthcare-in-daily-life collage for the Living pillar.
 * Keeps the same calm, framed editorial feel as the other Living hero graphics:
 * helpful chips, soft gradients, and a practical system map instead of dramatic care imagery.
 */
export function HealthcareBasicsHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[11.5rem] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-sky-50/75 via-white to-emerald-50/45 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:aspect-[16/11]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl sm:-right-16 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-14 -left-8 h-44 w-44 rounded-full bg-emerald-300/12 blur-3xl sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute left-[12%] top-8 h-px w-28 rotate-[-12deg] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent sm:top-10" />
      <div className="pointer-events-none absolute right-[16%] top-12 h-px w-24 rotate-12 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
          {[
            { k: "Insurance", hint: "Policy basics" },
            { k: "GP", hint: "First contact" },
            { k: "Pharmacy", hint: "Prescriptions" },
            { k: "Urgent", hint: "After hours" },
            { k: "112", hint: "Emergency" },
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
              <linearGradient id="health-panel" x1="18" y1="18" x2="384" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eff6ff" stopOpacity="0.92" />
                <stop offset="0.52" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#ecfdf5" stopOpacity="0.82" />
              </linearGradient>
              <linearGradient id="health-card-a" x1="40" y1="92" x2="144" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="#dbeafe" stopOpacity="0.8" />
                <stop offset="1" stopColor="#38bdf8" stopOpacity="0.14" />
              </linearGradient>
              <linearGradient id="health-card-b" x1="252" y1="92" x2="352" y2="154" gradientUnits="userSpaceOnUse">
                <stop stopColor="#dcfce7" stopOpacity="0.82" />
                <stop offset="1" stopColor="#34d399" stopOpacity="0.14" />
              </linearGradient>
            </defs>

            <rect x="14" y="16" width="372" height="236" rx="18" fill="url(#health-panel)" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.55" />

            <rect x="34" y="40" width="332" height="10" rx="3" fill="#e2e8f0" opacity="0.92" />
            <rect x="44" y="56" width="52" height="26" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <rect x="104" y="56" width="52" height="26" rx="6" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />
            <rect x="164" y="56" width="52" height="26" rx="6" fill="#ecfdf5" stroke="#86efac" strokeWidth="1" />
            <rect x="224" y="56" width="52" height="26" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />

            <g>
              <rect x="34" y="94" width="108" height="68" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="46" y="106" width="84" height="20" rx="7" fill="url(#health-card-a)" stroke="#38bdf8" strokeWidth="1" />
              <text x="88" y="119" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                INSURANCE
              </text>
              <path d="M58 140h60" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M58 150h40" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M114 138c0-7 5-12 12-12 7 0 12 5 12 12v4c0 10-7 16-12 19-5-3-12-9-12-19v-4Z" fill="#0ea5e9" fillOpacity="0.18" stroke="#0284c7" strokeWidth="1.2" />
            </g>

            <g strokeLinecap="round" strokeLinejoin="round">
              <rect x="144" y="88" width="116" height="76" rx="18" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <circle cx="178" cy="126" r="18" fill="#eff6ff" stroke="#38bdf8" strokeWidth="1.4" />
              <path d="M178 116v20M168 126h20" stroke="#0284c7" strokeWidth="2" />
              <path d="M214 114c10 0 18 8 18 18" stroke="#34d399" strokeWidth="2" />
              <path d="M232 132c0 10-8 18-18 18" stroke="#34d399" strokeWidth="2" />
              <path d="M214 150c-10 0-18-8-18-18" stroke="#34d399" strokeWidth="2" />
              <path d="M196 132c0-10 8-18 18-18" stroke="#34d399" strokeWidth="2" />
              <text x="202" y="158" textAnchor="middle" fill="#475569" fontSize="8.5" fontWeight="700" fontFamily="system-ui,sans-serif">
                GP FIRST CONTACT
              </text>
            </g>

            <g>
              <rect x="258" y="94" width="100" height="64" rx="16" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="270" y="106" width="76" height="20" rx="7" fill="url(#health-card-b)" stroke="#34d399" strokeWidth="1" />
              <text x="308" y="119" textAnchor="middle" fill="#047857" fontSize="9" fontWeight="800" fontFamily="system-ui,sans-serif">
                PHARMACY
              </text>
              <rect x="282" y="134" width="14" height="14" rx="3" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
              <path d="M289 137v8M285 141h8" stroke="#16a34a" strokeWidth="1.2" />
              <path d="M306 141h24" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            <g>
              <rect x="274" y="156" width="62" height="18" rx="9" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="282" y="161" width="8" height="8" rx="2" fill="#bfdbfe" />
              <path d="M294 165h14" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="318" cy="165" r="5.5" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
              <path d="M316 165h4M318 163v4" stroke="#16a34a" strokeWidth="1" />
            </g>

            <g>
              <rect x="42" y="188" width="92" height="32" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <text x="88" y="201" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                NORMAL GP
              </text>
              <text x="88" y="212" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif">
                NON-URGENT CARE
              </text>
            </g>

            <g>
              <rect x="152" y="188" width="104" height="32" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <circle cx="170" cy="204" r="5" fill="#fbbf24" fillOpacity="0.85" />
              <path d="M182 204h58" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
              <text x="210" y="216" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif">
                URGENT AFTER HOURS
              </text>
            </g>

            <g>
              <rect x="140" y="170" width="118" height="12" rx="6" fill="#ffffff" stroke="#dbeafe" strokeWidth="1" />
              <text x="199" y="178.5" textAnchor="middle" fill="#475569" fontSize="7.5" fontWeight="700" fontFamily="system-ui,sans-serif">
                CONTACTS + POLICY READY
              </text>
            </g>

            <g>
              <rect x="272" y="182" width="88" height="42" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <rect x="284" y="190" width="64" height="12" rx="6" fill="#fee2e2" stroke="#f87171" strokeWidth="1" />
              <text x="316" y="199" textAnchor="middle" fill="#b91c1c" fontSize="9" fontWeight="900" fontFamily="system-ui,sans-serif">
                112
              </text>
              <text x="316" y="215" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">
                TRUE EMERGENCY
              </text>
            </g>

            <path d="M88 172c16-10 34-12 54-6" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M204 168c16 0 30 4 46 14" stroke="#94a3b8" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M54 228H348" stroke="#e2e8f0" strokeWidth="1.2" />
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1.5 sm:text-[11px]">
          Insurance · GP · pharmacy · urgent care · emergency
        </p>
      </div>
    </div>
  );
}
