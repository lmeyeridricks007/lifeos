import type { InstructionalRaster } from "@/src/components/money/InstructionalRasterFigure";

const DIR = "/images/guides/living-start-here-instructional-raster";

export type LivingStartHereInstructionalFigure = {
  raster: InstructionalRaster;
  caption: string;
};

const livingStartHereInstructionalFigures = {
  "survival-guide": {
    raster: {
      src: `${DIR}/nl-living-start-survival-guide.webp`,
      alt: "Infographic hub diagram for Netherlands living: a central anchor with transport, shopping, health, and phone icons connected as a first-week map.",
    },
    caption: "Treat this hub as a map—open one sibling guide at a time instead of trying to memorize every Dutch default before you arrive.",
  },
  "essential-apps": {
    raster: {
      src: `${DIR}/nl-living-start-essential-apps.webp`,
      alt: "Infographic install order for essential Netherlands apps: numbered flow from transit to bank, groceries, and chat, with phone context.",
    },
    caption: "Install order beats download volume—get OV and bank flows reliable before you stack more supermarket and delivery apps.",
  },
  "daily-life": {
    raster: {
      src: `${DIR}/nl-living-start-daily-life.webp`,
      alt: "Infographic of daily-life rhythms: shop, parcel locker, stairs, and recycling connected in a simple horizontal flow with a time cue.",
    },
    caption: "Most friction is rhythm, not rules—lock groceries, parcels, and building habits first; gemeente depth can follow.",
  },
  "payments-basics": {
    raster: {
      src: `${DIR}/nl-living-start-payments-basics.webp`,
      alt: "Infographic of Netherlands payment habits: tap-to-pay path, bank-app confirmation, and rent or subscription loops as simple diagrams.",
    },
    caption: "Living-level defaults first—when wording gets technical, jump to the full Money walkthrough for rails and screenshots.",
  },
  "how-payments-work": {
    raster: {
      src: `${DIR}/nl-living-start-how-payments-work.webp`,
      alt: "Infographic contrasting checkout-style payments with recurring bank debits using cart, bank, and calendar icons in two lanes.",
    },
    caption: "Same habits as locals, different rails—use this page when you need step-by-step flows, not just “bring a debit card.”",
  },
  "shopping-groceries": {
    raster: {
      src: `${DIR}/nl-living-start-shopping-groceries.webp`,
      alt: "Infographic of supermarket shopping: aisle, self-scan handset, basket with staples, delivery truck, and a clock cue for opening hours.",
    },
    caption: "Store apps and Sunday rhythms matter as much as price—skim chains once, then pick one routine and stop re-optimizing weekly.",
  },
  "healthcare-basics": {
    raster: {
      src: `${DIR}/nl-living-start-healthcare-basics.webp`,
      alt: "Infographic care routing triangle linking basic insurance, GP access, and pharmacy with a dashed branch for urgent-care decisions.",
    },
    caption: "Insurance plus a registered huisarts is the spine—everything else routes faster once those two boxes are real.",
  },
  "emergencies-safety": {
    raster: {
      src: `${DIR}/nl-living-start-emergencies-safety.webp`,
      alt: "Infographic emergency triage columns for life-threatening calls, GP-urgent care, and police-style non-emergency help with decision arrows.",
    },
    caption: "Memorize 112 vs GP-post triage once—then keep IDs and insurance cards where housemates can find them without panic.",
  },
  "culture-etiquette": {
    raster: {
      src: `${DIR}/nl-living-start-culture-etiquette.webp`,
      alt: "Infographic of social tone: contrasting speech bubbles, handshake and calendar cues, and a neighbor window for everyday etiquette context.",
    },
    caption: "Culture reads easier after logistics work—pair this page with daily-life and apps so advice always maps to real errands.",
  },
  "getting-around": {
    raster: {
      src: `${DIR}/nl-living-start-getting-around.webp`,
      alt: "Infographic of multimodal travel: train on rails, tap-in tap-out gates, and bicycle last-mile linked along one commute path.",
    },
    caption: "One card discipline and one backup route matter more than memorizing every operator—let apps handle disruption detail.",
  },
  "language": {
    raster: {
      src: `${DIR}/nl-living-start-language.webp`,
      alt: "Infographic of practical language layering: listen–speak–use at the shop with abstract phrase cards instead of long vocabulary lists.",
    },
    caption: "Ten high-repeat phrases beat fifty rare ones—anchor on shops, stations, and neighbors before you chase perfect grammar.",
  },
  "weather": {
    raster: {
      src: `${DIR}/nl-living-start-weather.webp`,
      alt: "Infographic of dressing for Dutch weather: layered clothing stack, wind and umbrella cues, sun behind cloud, and a seasonal arc.",
    },
    caption: "Layers and a believable commute plan beat checking radar hourly—make bad weather operationally boring.",
  },
} as const satisfies Record<string, LivingStartHereInstructionalFigure>;

export type LivingStartHereInstructionalKey = keyof typeof livingStartHereInstructionalFigures;

export function getLivingStartHereInstructionalFigure(
  key: string
): LivingStartHereInstructionalFigure | undefined {
  return livingStartHereInstructionalFigures[key as LivingStartHereInstructionalKey];
}
