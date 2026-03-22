import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Landmark,
  Scale,
  FileCheck,
  Home,
  Key,
  Package,
  MapPin,
  Building2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { ServiceCategoryCard } from "@/src/lib/services-hub/types";
import { isRouteLive } from "@/src/lib/routes/routeStatus";

const SLUG_TO_ICON: Record<string, LucideIcon> = {
  "health-insurance": Heart,
  banks: Landmark,
  "immigration-lawyers": Scale,
  "visa-consultants": FileCheck,
  "highly-skilled-migrant-sponsors": Building2,
  "startup-visa-advisors": Rocket,
  "housing-platforms": Home,
  "rental-agencies": Key,
  "relocation-agencies": Package,
  "relocation-services": MapPin,
};

function getIconForSlug(slug: string): LucideIcon {
  return SLUG_TO_ICON[slug] ?? Package;
}

export function ServiceCategoryCardsGrid({ categories }: { categories: ServiceCategoryCard[] }) {
  const visible = categories.filter((c) => isRouteLive(c.href));
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((cat) => {
        const Icon = getIconForSlug(cat.slug);
        return (
          <Link
            key={cat.slug}
            href={cat.href}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{cat.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
            {cat.examples?.length ? (
              <p className="mt-3 text-xs text-slate-500">
                e.g. {cat.examples.slice(0, 3).join(", ")}
              </p>
            ) : null}
            <p className="mt-2 text-xs font-medium text-slate-500">
              Best for: {cat.bestForStage}
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-700 group-hover:text-brand-800">
              Explore category
              <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
