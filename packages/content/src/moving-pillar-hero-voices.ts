import type { PillarSectionsJson } from "./types";

/**
 * Extension point: destination-specific **English** hero copy that borrows local tone
 * (e.g. Dutch directness / informal “you”) without switching site language.
 * Add new ids when more country hubs ship, then pass `heroVoiceId` from that hub’s loader.
 */
export const MOVING_PILLAR_HERO_VOICE_IDS = ["default", "nl-informal-en"] as const;

export type MovingPillarHeroVoiceId = (typeof MOVING_PILLAR_HERO_VOICE_IDS)[number];

export type MovingPillarPageHeaderVoiceLayer = Partial<
  Pick<PillarSectionsJson["pageHeader"], "eyebrow" | "title" | "subtitle">
>;

export const MOVING_PILLAR_HERO_VOICES: Record<MovingPillarHeroVoiceId, MovingPillarPageHeaderVoiceLayer> = {
  default: {},
  "nl-informal-en": {
    eyebrow: "Netherlands · Moving hub",
    title: "Your move to the Netherlands",
    subtitle:
      "In the Netherlands people say **jij** and get to the point—so we will too: prepare the practical stuff before you travel, show up at the **gemeente** with the right address paperwork, then line up your **BSN**, bank, and insurance in a calm first-month rhythm—**all in English**, step by step.",
  },
};

export function applyMovingPillarHeroVoice(
  pageHeader: PillarSectionsJson["pageHeader"],
  voiceId: MovingPillarHeroVoiceId
): PillarSectionsJson["pageHeader"] {
  const layer = MOVING_PILLAR_HERO_VOICES[voiceId];
  if (voiceId === "default" || !layer) return pageHeader;
  return {
    ...pageHeader,
    ...(layer.eyebrow != null && layer.eyebrow !== "" ? { eyebrow: layer.eyebrow } : {}),
    ...(layer.title != null && layer.title !== "" ? { title: layer.title } : {}),
    ...(layer.subtitle != null && layer.subtitle !== "" ? { subtitle: layer.subtitle } : {}),
  };
}
