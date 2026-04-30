import type { InstructionalRaster } from "@/src/components/money/InstructionalRasterFigure";

const DIR = "/images/guides/early-setup-instructional-raster";

export type EarlySetupInstructionalFigure = {
  raster: InstructionalRaster;
  caption: string;
};

/** Early Setup cluster — JSON guides + DigiD (`GuidePageTemplate` via slug). */
const earlySetupInstructionalFigures = {
  "health-insurance-netherlands": {
    raster: {
      src: `${DIR}/nl-early-setup-health-insurance.webp`,
      alt: "Infographic overview of Dutch basic health insurance for newcomers: choosing a policy, payment window, and how it ties to registration.",
    },
    caption: "Basic vs aanvullend and payment rules change by year — use insurer sites and Zorgwijzer for live premiums.",
  },
  "municipality-registration-netherlands": {
    raster: {
      src: `${DIR}/nl-early-setup-municipality-registration.webp`,
      alt: "Infographic of Netherlands municipality registration: appointment, address registration, and receiving a BSN at the desk.",
    },
    caption: "BSN and registered address flow through gemeente registration — same desk visit in most municipalities.",
  },
  "bsn-registration": {
    raster: {
      src: `${DIR}/nl-early-setup-municipality-registration.webp`,
      alt: "Infographic focused on receiving a Dutch BSN during municipality registration and typical next steps for expats.",
    },
    caption: "You usually get your BSN when you register at the gemeente — use the municipality guide for appointment logistics and document lists.",
  },
  "register-address-netherlands": {
    raster: {
      src: `${DIR}/nl-early-setup-municipality-registration.webp`,
      alt: "Infographic of registering a residential address with a Dutch municipality and how it ties to BRP and BSN.",
    },
    caption: "Address registration is the gemeente appointment — bring housing proof; BSN follows in the same flow in most cases.",
  },
  "digid-awareness": {
    raster: {
      src: `${DIR}/nl-early-setup-digid.webp`,
      alt: "Infographic of activating DigiD in the Netherlands after BSN: application, activation letter, and secure login to government services.",
    },
    caption: "DigiD sits after BSN — activation is by mail; treat the letter like a small second onboarding project.",
  },
  "open-bank-account-netherlands": {
    raster: {
      src: `${DIR}/nl-early-setup-open-bank-account.webp`,
      alt: "Infographic of opening a Dutch bank account as an expat: documents, choosing a bank type, and everyday payments context.",
    },
    caption: "Proof packs differ by bank — align address proof and employment or study letters before you book an appointment.",
  },
  "shipping-household-goods-netherlands": {
    raster: {
      src: `${DIR}/nl-early-setup-shipping-household.webp`,
      alt: "Infographic of shipping household goods to the Netherlands: inventory, customs angles, insurance, and delivery timing.",
    },
    caption: "EU vs non-EU origin changes customs friction — line shipping dates with your lease start and lift access.",
  },
} as const satisfies Record<string, EarlySetupInstructionalFigure>;

export type EarlySetupInstructionalSlug = keyof typeof earlySetupInstructionalFigures;

export function getEarlySetupInstructionalFigure(slug: string): EarlySetupInstructionalFigure | undefined {
  return earlySetupInstructionalFigures[slug as EarlySetupInstructionalSlug];
}
