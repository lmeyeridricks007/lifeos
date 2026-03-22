/**
 * Runtime-filtered quick links (server-only usage). Import this from RSC pages, not from client components.
 */

import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";
import { QUICK_LINK_DEFINITIONS, RECOVERY_LINK_DEFINITIONS } from "./quickLinkData";

export function getLiveSearchQuickLinks() {
  return filterLiveInternalLinks(QUICK_LINK_DEFINITIONS);
}

export function getLiveSearchRecoveryLinks() {
  return filterLiveInternalLinks(RECOVERY_LINK_DEFINITIONS);
}
