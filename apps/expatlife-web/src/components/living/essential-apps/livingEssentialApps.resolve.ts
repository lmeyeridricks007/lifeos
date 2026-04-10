import type { LivingQuickStartPhase } from "@/src/components/living/livingPillarContent";
import { livingAppsIcon } from "./livingEssentialApps.icons";
import type {
  LivingAppCardConfig,
  LivingAppCardResolved,
  LivingQuickStartPhaseConfig,
} from "./livingEssentialApps.types";

export function resolveLivingAppsQuickStart(phases: LivingQuickStartPhaseConfig[]): LivingQuickStartPhase[] {
  return phases.map(({ iconKey, ...rest }) => ({
    ...rest,
    icon: livingAppsIcon(iconKey),
  }));
}

export function resolveLivingAppCard(config: LivingAppCardConfig): LivingAppCardResolved {
  return {
    name: config.name,
    category: config.category,
    bestFor: config.bestFor,
    whyMatters: config.whyItMatters,
    whenInstall: config.installWhen,
    quickTip: config.quickTip,
    badge: config.badge,
    Icon: livingAppsIcon(config.iconKey),
    outbound: config.outbound,
    storeLinks: config.storeLinks,
  };
}

export function resolveLivingAppCards(configs: LivingAppCardConfig[]): LivingAppCardResolved[] {
  return configs.map(resolveLivingAppCard);
}
