import { PresetSoftCTA } from "@/src/components/soft-cta/PresetSoftCTA";
import type { SoftCtaPresetId } from "@/src/lib/soft-cta/presets";
import { MonetizationTrustResourceLinks } from "./HowWeChooseMicrocopy";

type MoveClusterToolPostValueBlockProps = {
  preset: SoftCtaPresetId;
};

/**
 * Standard post-tool monetization for Netherlands move tools (after main UI, before FAQ / next steps).
 */
export function MoveClusterToolPostValueBlock({ preset }: MoveClusterToolPostValueBlockProps) {
  return (
    <div className="space-y-4">
      <PresetSoftCTA preset={preset} variant="inline" contained={false} />
      <MonetizationTrustResourceLinks className="max-w-3xl" />
    </div>
  );
}
