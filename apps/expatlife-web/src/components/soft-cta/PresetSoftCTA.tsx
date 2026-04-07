import { SoftCTA, type SoftCTAVariant } from "@/src/components/monetization/SoftCTA";
import { type SoftCtaPresetId, getSoftCtaPresetProps } from "@/src/lib/soft-cta/presets";

export type PresetSoftCTAProps = {
  preset: SoftCtaPresetId;
  /** Overrides preset default (`inline` | `card` | `band`). */
  variant?: SoftCTAVariant;
  cityName?: string;
  contained?: boolean;
  className?: string;
};

export function PresetSoftCTA({ preset, variant, cityName, contained, className }: PresetSoftCTAProps) {
  const props = getSoftCtaPresetProps(preset, cityName ? { cityName } : undefined);
  return (
    <SoftCTA
      {...props}
      variant={variant ?? props.variant}
      contained={contained ?? props.contained ?? true}
      className={className}
    />
  );
}
