import * as rs from "../src/lib/routes/routeStatus";

const { isGuideCardHrefLive, filterLiveInternalLinks, isRouteLive } = rs;

const residual = [
  "/netherlands/jobs/starting-consultancy-netherlands",
  "/netherlands/services/accountants",
  "/netherlands/services/business-consultants",
  "/netherlands/services/insurance-brokers",
  "/netherlands/services/recruitment-agencies",
  "/netherlands/services/career-coaches",
  "/netherlands/living/bike-sharing-netherlands",
  "/netherlands/services/insurance",
  "/netherlands/services/moving-companies",
  "/netherlands/services/removal-companies",
  "/netherlands/living/train-discounts-netherlands",
  "/netherlands/living/weekend-travel-netherlands",
  "/netherlands/living/trams-netherlands",
  "/netherlands/services/immigration-visas",
  "/netherlands/services/pet-relocation-companies",
  "/netherlands/services/daycare-providers",
  "/netherlands/living/museums-netherlands",
  "/netherlands/living/metro-netherlands",
  "/netherlands/living/regional-buses-netherlands",
  "/netherlands/living/cycling-netherlands",
  "/netherlands/services/notaries",
  "/netherlands/living/hiking-netherlands",
  "/netherlands/services/estate-agents",
  "/netherlands/services/documents-legal",
  "/netherlands/services/expat-tax-services",
  "/netherlands/services/compare-health-insurance",
  "/netherlands/services/international-schools",
  "/netherlands/living/weekend-trips-netherlands",
  "/netherlands/living/hidden-gems-netherlands",
  "/netherlands/jobs/networking-netherlands",
  "/netherlands/jobs/linkedin-netherlands",
  "/netherlands/services/banking-finance",
  "/netherlands/services/phone-providers",
  "/netherlands/services/internet-providers",
  "/netherlands/services/energy-providers",
  "/netherlands/services/storage-companies",
  "/netherlands/services/payroll-services",
].map((h) => h.replace(/\/$/, ""));
const residualSet = new Set(residual);

const models = [
  "../src/components/living/ovpay-netherlands/ovpayNetherlandsPageModel.ts",
  "../src/components/living/ns-trains-netherlands/nsTrainsNetherlandsPageModel.ts",
  "../src/components/jobs/freelancingNetherlandsPageModel.ts",
  "../src/components/business/zzpNetherlandsPageModel.ts",
  "../src/components/business/startingBusinessNetherlandsPageModel.ts",
  "../src/components/jobs/contractorVsEmployeeNetherlandsPageModel.ts",
  "../src/components/services/financial-advisors/financialAdvisorsNetherlandsPageModel.ts",
  "../src/components/health/healthInsuranceComparisonNetherlandsPageModel.ts",
  "../src/components/jobs/employeeRightsNetherlandsPageModel.ts",
  "../src/components/jobs/employmentContractNetherlandsPageModel.ts",
  "../src/components/jobs/noticePeriodNetherlandsPageModel.ts",
  "../src/components/jobs/probationPeriodNetherlandsPageModel.ts",
  "../src/components/jobs/findingJobsNetherlandsPageModel.ts",
  "../src/components/life/makingDutchFriendsPageModel.ts",
  "../src/components/family/family-activities-netherlands/familyActivitiesNetherlandsPageModel.ts",
  "../src/components/family/pets-netherlands/petsNetherlandsPageModel.ts",
  "../src/components/education/daycareNetherlandsPageModel.ts",
  "../src/components/taxes/taxesAfterMovingNetherlandsPageModel.ts",
  "../src/components/taxes/leavingNetherlandsTaxPageModel.ts",
];

function collectHrefs(
  obj: unknown,
  out: { href: string; status?: string }[] = [],
  depth = 0
): typeof out {
  if (!obj || depth > 8) return out;
  if (Array.isArray(obj)) {
    for (const item of obj) collectHrefs(item, out, depth + 1);
    return out;
  }
  if (typeof obj === "object") {
    const r = obj as Record<string, unknown>;
    if (typeof r.href === "string" && r.href.startsWith("/")) {
      out.push({
        href: r.href,
        status: typeof r.status === "string" ? r.status : undefined,
      });
    }
    for (const v of Object.values(r)) collectHrefs(v, out, depth + 1);
  }
  return out;
}

async function main() {
  let clickableResidual = 0;
  const bad: string[] = [];

  for (const path of models) {
    const mod = await import(path);
    for (const value of Object.values(mod)) {
      if (!value || typeof value !== "object") continue;
      const hrefs = collectHrefs(value);
      for (const item of hrefs) {
        const n = item.href.replace(/\/$/, "");
        if (!residualSet.has(n)) continue;
        if (isGuideCardHrefLive(item)) {
          clickableResidual++;
          bad.push(`${path} → ${item.href} status=${item.status}`);
        }
      }
    }
  }

  const dataFiles = [
    "../src/data/services/categories/banks.ts",
    "../src/data/services/categories/health-insurance.ts",
    "../src/data/services/categories/housing-platforms.ts",
    "../src/data/services/categories/mobile-connectivity.ts",
    "../src/data/services/categories/immigration-lawyers.ts",
    "../src/data/services/categories/visa-consultants.ts",
    "../src/data/services/categories/rental-agencies.ts",
    "../src/data/services/categories/relocation-services.ts",
    "../src/data/services/categories/relocation-agencies.ts",
  ];

  for (const path of dataFiles) {
    try {
      const mod = await import(path);
      for (const value of Object.values(mod)) {
        const data = value as { relatedCategories?: { href: string; label: string }[] };
        if (!data?.relatedCategories) continue;
        const live = filterLiveInternalLinks(data.relatedCategories);
        for (const l of live) {
          const n = l.href.replace(/\/$/, "");
          if (residualSet.has(n)) {
            clickableResidual++;
            bad.push(`${path} relatedCategories → ${l.href}`);
          }
        }
      }
    } catch (e) {
      console.log("data skip", path, (e as Error).message.slice(0, 120));
    }
  }

  console.log("clickable_residual", clickableResidual);
  for (const b of bad) console.log("BAD", b);
  console.log(
    "non_live_residual",
    residual.filter((h) => !isRouteLive(h)).length,
    "/",
    residual.length
  );
  if (clickableResidual > 0) process.exit(1);
}

void main();
