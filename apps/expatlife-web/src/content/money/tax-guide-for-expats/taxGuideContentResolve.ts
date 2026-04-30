import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import { taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import type {
  MoneyTaxGuideOfficialSourceKey,
  MoneyTaxGuideRelatedToolDef,
} from "./taxGuideContent.types";
import { MONEY_TAX_GUIDE_OFFICIAL_SOURCES } from "./taxGuideOfficialSourceRegistry";
import { resolveTaxGuideTool } from "./taxGuideToolRegistry";

export function resolveRelatedTools(defs: readonly MoneyTaxGuideRelatedToolDef[]): { href: string; label: string }[] {
  return defs.map((d) => {
    if (d.kind === "tool") {
      const r = resolveTaxGuideTool(d.key, d.label);
      return { href: r.href, label: r.label };
    }
    return { href: d.href, label: d.label };
  });
}

export function buildOfficialSourcesReferences(params: {
  sectionId: string;
  sectionTitle: string;
  disclaimer: string;
  /** Ordered groups: each link row references a registry key. */
  groups: readonly { id: string; title: string; keys: readonly MoneyTaxGuideOfficialSourceKey[] }[];
  internalLinks?: readonly { label: string; href: string }[];
}): MoveVisaResidencyReferences {
  const internal = params.internalLinks ?? [
    { label: "Taxes tools hub", href: taxGuideRoutes.taxesTools },
    { label: "Money & tax tools hub", href: taxGuideRoutes.moneyTools },
    { label: "Working in the Netherlands", href: taxGuideRoutes.workingNl },
  ];

  return {
    sectionId: params.sectionId,
    sectionTitle: params.sectionTitle,
    disclaimer: params.disclaimer,
    groups: [
      ...params.groups.map((g) => ({
        id: g.id,
        title: g.title,
        links: g.keys.map((k) => {
          const row = MONEY_TAX_GUIDE_OFFICIAL_SOURCES[k];
          return { type: "external" as const, label: row.label, href: row.href };
        }),
      })),
      {
        id: "internal-next",
        title: "Continue on ExpatCopilot",
        links: internal.map((l) => ({ type: "internal" as const, label: l.label, href: l.href })),
      },
    ],
  };
}
