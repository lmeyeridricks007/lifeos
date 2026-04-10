import {
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import type { LivingDailyLifeLinkKey } from "./livingDailyLife.types";

export const LIVING_DAILY_LIFE_INTERNAL_LINKS: Record<LivingDailyLifeLinkKey, string> = {
  survivalGuide: LIVING_SURVIVAL_GUIDE_PATH,
  cultureEtiquette: LIVING_CULTURE_ETIQUETTE_PATH,
  essentialApps: LIVING_ESSENTIAL_APPS_PATH,
  shoppingGroceries: LIVING_SHOPPING_GROCERIES_PATH,
  gettingAround: LIVING_GETTING_AROUND_PATH,
  paymentsBasics: "/netherlands/living/payments/",
  wasteRecycling: "/netherlands/living/waste-and-recycling/",
  costOfLiving: "/netherlands/money/tools/cost-of-living-calculator/",
  utilities: "/netherlands/living/tools/utilities-services-comparison/",
  childcare: "/netherlands/family/tools/childcare-cost-estimator/",
  healthcareAllowance: "/netherlands/taxes/tools/healthcare-allowance-estimator/",
  helpfulTools: "#helpful-tools",
  toolsHub: "/netherlands/tools/",
};
