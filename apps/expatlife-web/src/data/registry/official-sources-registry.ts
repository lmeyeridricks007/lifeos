import type { OfficialSourceRegistryRow, OfficialSourceServiceKey } from "./unified-registry-types";
import { banksOfficialSources } from "@/src/data/services/official-sources/banks";
import { healthInsuranceOfficialSources } from "@/src/data/services/official-sources/health-insurance";
import { highlySkilledMigrantSponsorsOfficialSources } from "@/src/data/services/official-sources/highly-skilled-migrant-sponsors";
import { housingPlatformsOfficialSources } from "@/src/data/services/official-sources/housing-platforms";
import { immigrationLawyersOfficialSources } from "@/src/data/services/official-sources/immigration-lawyers";
import { relocationAgenciesOfficialSources } from "@/src/data/services/official-sources/relocation-agencies";
import { relocationServicesOfficialSources } from "@/src/data/services/official-sources/relocation-services";
import { rentalAgenciesOfficialSources } from "@/src/data/services/official-sources/rental-agencies";
import { startupVisaAdvisorsOfficialSources } from "@/src/data/services/official-sources/startup-visa-advisors";
import { visaConsultantsOfficialSources } from "@/src/data/services/official-sources/visa-consultants";

type SourceBlock = {
  serviceKey: OfficialSourceServiceKey;
  sourcePage: string;
  /** Owning hub page (where OfficialSourcesList is rendered). */
  hubPage: string;
  sources: ReadonlyArray<{ label: string; url: string; category: string }>;
};

const BLOCKS: SourceBlock[] = [
  {
    serviceKey: "banks",
    sourcePage: "src/data/services/official-sources/banks.ts",
    hubPage: "app/netherlands/services/banks/page.tsx",
    sources: banksOfficialSources,
  },
  {
    serviceKey: "health-insurance",
    sourcePage: "src/data/services/official-sources/health-insurance.ts",
    hubPage: "app/netherlands/services/health-insurance/page.tsx",
    sources: healthInsuranceOfficialSources,
  },
  {
    serviceKey: "highly-skilled-migrant-sponsors",
    sourcePage: "src/data/services/official-sources/highly-skilled-migrant-sponsors.ts",
    hubPage: "app/netherlands/services/highly-skilled-migrant-sponsors/page.tsx",
    sources: highlySkilledMigrantSponsorsOfficialSources,
  },
  {
    serviceKey: "housing-platforms",
    sourcePage: "src/data/services/official-sources/housing-platforms.ts",
    hubPage: "app/netherlands/services/housing-platforms/page.tsx",
    sources: housingPlatformsOfficialSources,
  },
  {
    serviceKey: "immigration-lawyers",
    sourcePage: "src/data/services/official-sources/immigration-lawyers.ts",
    hubPage: "app/netherlands/services/immigration-lawyers/page.tsx",
    sources: immigrationLawyersOfficialSources,
  },
  {
    serviceKey: "relocation-agencies",
    sourcePage: "src/data/services/official-sources/relocation-agencies.ts",
    hubPage: "app/netherlands/services/relocation-agencies/page.tsx",
    sources: relocationAgenciesOfficialSources,
  },
  {
    serviceKey: "relocation-services",
    sourcePage: "src/data/services/official-sources/relocation-services.ts",
    hubPage: "app/netherlands/services/relocation-services/page.tsx",
    sources: relocationServicesOfficialSources,
  },
  {
    serviceKey: "rental-agencies",
    sourcePage: "src/data/services/official-sources/rental-agencies.ts",
    hubPage: "app/netherlands/services/rental-agencies/page.tsx",
    sources: rentalAgenciesOfficialSources,
  },
  {
    serviceKey: "startup-visa-advisors",
    sourcePage: "src/data/services/official-sources/startup-visa-advisors.ts",
    hubPage: "app/netherlands/services/startup-visa-advisors/page.tsx",
    sources: startupVisaAdvisorsOfficialSources,
  },
  {
    serviceKey: "visa-consultants",
    sourcePage: "src/data/services/official-sources/visa-consultants.ts",
    hubPage: "app/netherlands/services/visa-consultants/page.tsx",
    sources: visaConsultantsOfficialSources,
  },
];

/** One row per official link on Netherlands service hub pages. */
export function buildOfficialSourceRegistryRows(): OfficialSourceRegistryRow[] {
  const rows: OfficialSourceRegistryRow[] = [];
  for (const block of BLOCKS) {
    block.sources.forEach((s, index) => {
      rows.push({
        rowKind: "official-source",
        registryId: `official-source/${block.serviceKey}/${index}`,
        category: "official-source",
        sourcePage: `${block.sourcePage} → ${block.hubPage}`,
        surfaces: ["OfficialSourcesList"],
        serviceKey: block.serviceKey,
        label: s.label,
        url: s.url,
        officialCategory: s.category,
      });
    });
  }
  return rows;
}
