import { PresetSoftCTA } from "@/src/components/soft-cta/PresetSoftCTA";
import { MonetizationTrustResourceLinks } from "./HowWeChooseMicrocopy";

/**
 * Post-FAQ soft layer for origin-country moving guides (awareness / planning intent).
 * Match FAQ / section shells (`px-4 sm:px-6`) — do not cap with `max-w-2xl` or the CTA reads
 * narrow vs the accordion and “useful services” band below.
 */
export function MoveClusterOriginCountryPostFaq() {
  return (
    <div className="w-full min-w-0 px-4 sm:px-6">
      <PresetSoftCTA preset="movingChecklistAndRelocationCost" variant="inline" contained={false} />
      <MonetizationTrustResourceLinks className="mt-4" />
    </div>
  );
}
