import Link from "next/link";
import {
  MessageCircle,
  Home,
  Package,
  Users,
  FileCheck,
  MapPin,
  Banknote,
  Clock,
  Scale,
  FileText,
  Compass,
  ClipboardList,
  Rocket,
  GitBranch,
  Search,
  Building2,
  Languages,
  CreditCard,
  Globe,
  Smartphone,
  CircleDollarSign,
  Shield,
  HandCoins,
  Receipt,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { CostCard } from "@/src/lib/service-category/types";

const ID_TO_ICON: Record<string, LucideIcon> = {
  // Exact IDs first so each cost card type gets a unique icon
  "initial-consultation": MessageCircle,
  "fixed-fee-application": FileCheck,
  hourly: Clock,
  "objection-appeal": Scale,
  "document-review": FileText,
  "route-assessment": Compass,
  "document-checklist-package": ClipboardList,
  "family-migration-support": Users,
  "startup-route-support": Rocket,
  "multi-step-coordination": GitBranch,
  // HSM sponsor / costs page
  "directory-access": Search,
  "employer-process": Building2,
  "translation-legalization": Languages,
  "relocation-support": Package,
  "legal-advice": Scale,
  // Banks cost cards – unique icon per feature
  "monthly-fee": CircleDollarSign,
  "debit-card": CreditCard,
  international: Globe,
  "app-vs-branch": Smartphone,
  "joint-account": Users,
  // Health insurance cost cards
  premium: Banknote,
  excess: Shield,
  additional: Package,
  zorgtoeslag: HandCoins,
  // Housing platforms cost cards
  "browse-access": Search,
  "subscription-fee": CreditCard,
  "booking-service-fee": Receipt,
  "agent-landlord-fees": Users,
  "furnished-short-stay-premium": TrendingUp,
  // Rental agencies cost cards
  "search-service-fee": Search,
  "tenant-side-fee": Scale,
  "furnished-expat-support": Home,
  "relocation-rental-package": Package,
  "contract-move-in": FileCheck,
  // Fallbacks / generic
  consultation: MessageCircle,
  "home-finding": Home,
  home: Home,
  "full-package": Package,
  package: Package,
  "family-school": Users,
  family: Users,
  school: Users,
  "immigration-housing": FileCheck,
  immigration: FileCheck,
  "settling-in": MapPin,
  settling: MapPin,
};

function getIconForCard(id: string): LucideIcon {
  const lower = id.toLowerCase();
  for (const [key, icon] of Object.entries(ID_TO_ICON)) {
    if (lower.includes(key.replace(/-/g, "")) || lower.includes(key)) return icon;
  }
  return Banknote;
}

/** Per-card color themes: left accent, icon container, fee pill */
const CARD_THEMES: Record<string, { accent: string; icon: string; pill: string }> = {
  "initial-consultation": { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" },
  "route-assessment": { accent: "from-emerald-500 to-emerald-400", icon: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  "document-checklist-package": { accent: "from-violet-500 to-violet-400", icon: "bg-violet-50 text-violet-600", pill: "bg-violet-50 border-violet-200 text-violet-800" },
  "family-migration-support": { accent: "from-amber-500 to-amber-400", icon: "bg-amber-50 text-amber-600", pill: "bg-amber-50 border-amber-200 text-amber-800" },
  "startup-route-support": { accent: "from-sky-500 to-sky-400", icon: "bg-sky-50 text-sky-600", pill: "bg-sky-50 border-sky-200 text-sky-800" },
  "multi-step-coordination": { accent: "from-slate-600 to-slate-500", icon: "bg-slate-100 text-slate-600", pill: "bg-slate-100 border-slate-200 text-slate-800" },
  "fixed-fee-application": { accent: "from-emerald-500 to-emerald-400", icon: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  hourly: { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" },
  "objection-appeal": { accent: "from-amber-500 to-amber-400", icon: "bg-amber-50 text-amber-600", pill: "bg-amber-50 border-amber-200 text-amber-800" },
  "document-review": { accent: "from-violet-500 to-violet-400", icon: "bg-violet-50 text-violet-600", pill: "bg-violet-50 border-violet-200 text-violet-800" },
  "home-finding": { accent: "from-sky-500 to-sky-400", icon: "bg-sky-50 text-sky-600", pill: "bg-sky-50 border-sky-200 text-sky-800" },
  "full-package": { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" },
  "family-school": { accent: "from-amber-500 to-amber-400", icon: "bg-amber-50 text-amber-600", pill: "bg-amber-50 border-amber-200 text-amber-800" },
  "immigration-housing-bundle": { accent: "from-violet-500 to-violet-400", icon: "bg-violet-50 text-violet-600", pill: "bg-violet-50 border-violet-200 text-violet-800" },
  "settling-in": { accent: "from-emerald-500 to-emerald-400", icon: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  // HSM sponsor / costs page
  "directory-access": { accent: "from-emerald-500 to-emerald-400", icon: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  "employer-process": { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" },
  "translation-legalization": { accent: "from-violet-500 to-violet-400", icon: "bg-violet-50 text-violet-600", pill: "bg-violet-50 border-violet-200 text-violet-800" },
  "relocation-support": { accent: "from-sky-500 to-sky-400", icon: "bg-sky-50 text-sky-600", pill: "bg-sky-50 border-sky-200 text-sky-800" },
  "legal-advice": { accent: "from-amber-500 to-amber-400", icon: "bg-amber-50 text-amber-600", pill: "bg-amber-50 border-amber-200 text-amber-800" },
  // Banks cost cards
  "monthly-fee": { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" },
  "debit-card": { accent: "from-emerald-500 to-emerald-400", icon: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  international: { accent: "from-violet-500 to-violet-400", icon: "bg-violet-50 text-violet-600", pill: "bg-violet-50 border-violet-200 text-violet-800" },
  "app-vs-branch": { accent: "from-sky-500 to-sky-400", icon: "bg-sky-50 text-sky-600", pill: "bg-sky-50 border-sky-200 text-sky-800" },
  "joint-account": { accent: "from-amber-500 to-amber-400", icon: "bg-amber-50 text-amber-600", pill: "bg-amber-50 border-amber-200 text-amber-800" },
  // Health insurance cost cards
  premium: { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" },
  excess: { accent: "from-slate-600 to-slate-500", icon: "bg-slate-100 text-slate-600", pill: "bg-slate-100 border-slate-200 text-slate-800" },
  additional: { accent: "from-violet-500 to-violet-400", icon: "bg-violet-50 text-violet-600", pill: "bg-violet-50 border-violet-200 text-violet-800" },
  zorgtoeslag: { accent: "from-emerald-500 to-emerald-400", icon: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  // Housing platforms cost cards
  "browse-access": { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" },
  "subscription-fee": { accent: "from-violet-500 to-violet-400", icon: "bg-violet-50 text-violet-600", pill: "bg-violet-50 border-violet-200 text-violet-800" },
  "booking-service-fee": { accent: "from-amber-500 to-amber-400", icon: "bg-amber-50 text-amber-600", pill: "bg-amber-50 border-amber-200 text-amber-800" },
  "agent-landlord-fees": { accent: "from-slate-600 to-slate-500", icon: "bg-slate-100 text-slate-600", pill: "bg-slate-100 border-slate-200 text-slate-800" },
  "furnished-short-stay-premium": { accent: "from-emerald-500 to-emerald-400", icon: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  // Rental agencies cost cards
  "search-service-fee": { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" },
  "tenant-side-fee": { accent: "from-violet-500 to-violet-400", icon: "bg-violet-50 text-violet-600", pill: "bg-violet-50 border-violet-200 text-violet-800" },
  "furnished-expat-support": { accent: "from-amber-500 to-amber-400", icon: "bg-amber-50 text-amber-600", pill: "bg-amber-50 border-amber-200 text-amber-800" },
  "relocation-rental-package": { accent: "from-emerald-500 to-emerald-400", icon: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  "contract-move-in": { accent: "from-sky-500 to-sky-400", icon: "bg-sky-50 text-sky-600", pill: "bg-sky-50 border-sky-200 text-sky-800" },
};

const DEFAULT_THEME = { accent: "from-brand-500 to-brand-400", icon: "bg-brand-50 text-brand-600", pill: "bg-brand-50 border-brand-200 text-brand-800" };

function getTheme(id: string) {
  const lower = id.toLowerCase();
  for (const [key, theme] of Object.entries(CARD_THEMES)) {
    if (lower.includes(key.replace(/-/g, "")) || lower === key) return theme;
  }
  return DEFAULT_THEME;
}

export function CostBreakdownCards({ cards }: { cards: CostCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => {
        const Icon = getIconForCard(card.id);
        const theme = getTheme(card.id);
        return (
          <article
            key={card.id}
            className="relative flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition hover:shadow-md hover:border-slate-300"
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.accent}`} aria-hidden />
            <div className="p-4 pl-5">
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${theme.icon}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                  <div className={`mt-2 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 ${theme.pill}`}>
                    <Banknote className="h-3.5 w-3.5 opacity-80" aria-hidden />
                    <span className="text-sm font-semibold">{card.value}</span>
                  </div>
                </div>
              </div>
              {card.note ? (
                <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {card.note}
                </p>
              ) : null}
              {card.disclaimer ? (
                <p className="mt-1.5 text-xs text-slate-500">{card.disclaimer}</p>
              ) : null}
              {card.link ? (
                <Link
                  href={card.link.href}
                  className="mt-3 inline-flex items-center text-sm font-medium text-brand-700 hover:text-brand-800 underline"
                >
                  {card.link.label}
                </Link>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
