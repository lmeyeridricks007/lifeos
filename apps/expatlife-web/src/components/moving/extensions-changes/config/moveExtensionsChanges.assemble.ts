import type { MoveResidencePermitRouteCard } from "../../residence-permits/config/moveResidencePermits.types";
import type { MoveVisaResidencyMisunderstanding } from "../../visas-residency/config/moveVisaResidency.types";
import type { ExtensionsChangesPageMeta } from "./moveExtensionsChanges.types";
import type {
  MoveExtensionsChangesCategoryBlock,
  MoveExtensionsChangesLifecycleLifeCard,
  MoveExtensionsChangesSituationCard,
} from "./moveExtensionsChanges.contentTypes";
import { moveExtensionsChangesCards } from "./moveExtensionsChangesCards.config";
import { moveExtensionsChangesLifecycle } from "./moveExtensionsChangesLifecycle.config";
import { moveExtensionsChangesMisunderstandings } from "./moveExtensionsChangesMisunderstandings.config";
import { moveExtensionsChangesFaq } from "./moveExtensionsChangesFaq.config";
import { moveExtensionsChangesReferences } from "./moveExtensionsChangesReferences.config";
import { moveExtensionsChangesRelatedTools } from "./moveExtensionsChangesRelatedTools.config";
import { moveExtensionsChangesRoutes as R } from "./moveExtensionsChanges.routes";
import { moveExtensionsChangesSections } from "./moveExtensionsChangesSections.config";
import { moveExtensionsChangesShell } from "./moveExtensionsChanges.shell.config";
import { moveExtensionsChangesTips } from "./moveExtensionsChangesTips.config";

function toSituationRouteCard(c: MoveExtensionsChangesSituationCard): MoveResidencePermitRouteCard {
  return {
    id: c.id,
    visualKey: c.visualKey,
    title: c.title,
    intro: c.intro,
    bestFor: c.whoItAffects,
    keyPoints: c.keyPoints.length > 0 ? [...c.keyPoints] : undefined,
    whatMattersNext: c.whatMattersNext,
    chips: [...c.routeTags],
    nextStep: {
      ctaLabel: c.primaryLink.ctaLabel,
      href: c.primaryLink.href,
      ...(c.primaryLink.linkId ? { linkId: c.primaryLink.linkId } : {}),
    },
  };
}

function toOtherContextBlock(b: MoveExtensionsChangesCategoryBlock) {
  return {
    id: b.id,
    letter: b.letter,
    title: b.title,
    intro: b.intro,
    keyPoints: b.keyPoints.length > 0 ? [...b.keyPoints] : undefined,
    bestFor: b.whoItAffects,
    whatMattersNext: b.whatMattersNext,
    nextLinks: b.relatedLinks.map(({ label, href }) => ({ label, href })),
  };
}

function toMisunderstandingRow(m: (typeof moveExtensionsChangesMisunderstandings)[number]): MoveVisaResidencyMisunderstanding {
  return { id: m.id, title: m.title, body: m.body };
}

/** Composes slice configs into the single page meta object consumed by the view. */
export const moveExtensionsChangesPageMeta: ExtensionsChangesPageMeta = {
  canonicalPath: R.canonical,
  movePillarHubPath: R.hub,
  visasResidencyPath: R.visasResidency,
  residencePermitsPath: R.residencePermits,

  ...moveExtensionsChangesShell,

  startHereRegion: moveExtensionsChangesTips.startHere.region,
  startHereCards: moveExtensionsChangesTips.startHere.cards.map((c) => ({
    id: c.id,
    iconKey: c.iconKey,
    title: c.title,
    intro: c.intro,
    keyPoints: [...c.keyPoints],
  })),

  tips: [...moveExtensionsChangesTips.reassurance],

  workSection: moveExtensionsChangesSections.work,
  otherContextsRegion: {
    ...moveExtensionsChangesSections.otherContexts,
    blocks: moveExtensionsChangesSections.otherContexts.blocks.map(toOtherContextBlock),
  },

  timingRegion: moveExtensionsChangesLifecycle.timing,
  lifeImpactRegion: {
    ...moveExtensionsChangesLifecycle.lifeImpact,
    cards: moveExtensionsChangesLifecycle.lifeImpact.cards.map((c: MoveExtensionsChangesLifecycleLifeCard) => ({
      id: c.id,
      title: c.title,
      intro: c.intro,
      ...(c.keyPoints != null && c.keyPoints.length > 0 ? { keyPoints: [...c.keyPoints] } : {}),
      links: c.relatedLinks.map(({ label, href }) => ({ label, href })),
    })),
  },

  situationCards: moveExtensionsChangesCards.map(toSituationRouteCard),

  misunderstandings: moveExtensionsChangesMisunderstandings.map(toMisunderstandingRow),

  faq: [...moveExtensionsChangesFaq],
  references: moveExtensionsChangesReferences,
  relatedTools: moveExtensionsChangesRelatedTools,
};
