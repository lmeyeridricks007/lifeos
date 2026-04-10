/**
 * Curated shortcuts for search UI. Keep hrefs aligned with `route-registry` / LIVE_PATHS.
 * Server routes call `getLiveSearchQuickLinks()` to filter at runtime so dead links never ship from `/search`.
 * Mobile overlay uses this static list directly (same entries; rare mismatch if a route is demoted—update here).
 */

import type { InternalLink } from "@/src/lib/routes/routeStatus";

export const QUICK_LINK_DEFINITIONS: InternalLink[] = [
  { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/" },
  { label: "Moving from your country", href: "/netherlands/moving-to-netherlands-from/" },
  { label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist/" },
  { label: "Relocation cost estimator", href: "/netherlands/moving/tools/relocation-cost-estimator/" },
  { label: "Documents needed", href: "/netherlands/documents-needed-to-move-netherlands/" },
  { label: "First 30 days", href: "/netherlands/first-30-days-netherlands/" },
  { label: "First 90 days", href: "/netherlands/first-90-days-netherlands/" },
  { label: "BSN registration", href: "/netherlands/bsn-registration/" },
  { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
  { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
  { label: "All tools", href: "/netherlands/tools/" },
  { label: "Services hub", href: "/netherlands/services/" },
  { label: "Cities hub", href: "/netherlands/cities/" },
  { label: "Netherlands Survival Guide", href: "/netherlands/living/survival-guide/" },
  { label: "Getting around in the Netherlands", href: "/netherlands/living/getting-around/" },
  { label: "Essential apps for the Netherlands", href: "/netherlands/living/apps/" },
  { label: "Daily life basics (Netherlands)", href: "/netherlands/living/daily-life/" },
  { label: "Shopping & groceries in the Netherlands", href: "/netherlands/living/shopping-groceries/" },
  { label: "Healthcare Basics in the Netherlands", href: "/netherlands/living/healthcare-basics/" },
  { label: "Emergencies & Safety in the Netherlands", href: "/netherlands/living/emergencies-safety/" },
  { label: "Language & phrases for life in the Netherlands", href: "/netherlands/living/language/" },
  { label: "Weather & seasons in the Netherlands", href: "/netherlands/living/weather/" },
  { label: "Dutch Culture & Etiquette", href: "/netherlands/living/culture-etiquette/" },
  { label: "Culture in the Netherlands", href: "/netherlands/culture/" },
];

export const RECOVERY_LINK_DEFINITIONS: InternalLink[] = [
  { label: "Explore services", href: "/netherlands/services/" },
  { label: "Explore cities", href: "/netherlands/cities/" },
  { label: "Netherlands overview", href: "/netherlands/" },
  { label: "Moving guide", href: "/netherlands/moving-to-the-netherlands/" },
  { label: "Visa checker", href: "/netherlands/visa-checker/" },
];
