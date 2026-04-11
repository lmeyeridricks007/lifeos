import type { ChangingJobsNlPageMeta } from "../../changing-jobs-netherlands/config/moveChangingJobsNl.types";
import {
  toGridCards,
  toJourneyBlocks,
  toPracticalLifeCards,
} from "../../changing-jobs-netherlands/config/changing-jobs/moveChangingJobsNl.config.types";
import type { MoveLayoffsContentBundle, MoveLayoffsPageFrameConfig } from "./moveLayoffsNl.content.model";
import { moveLayoffsPageFrame } from "./moveLayoffsPageFrame.config";
import { moveLayoffsFaq } from "./layoffs/moveLayoffsFaq.config";
import { moveLayoffsMisunderstandings, moveLayoffsMisunderstandingsRegion } from "./layoffs/moveLayoffsMisunderstandings.config";
import { moveLayoffsReferences } from "./layoffs/moveLayoffsReferences.config";
import { moveLayoffsRelatedToolsPack } from "./layoffs/moveLayoffsRelatedTools.config";
import { moveLayoffsNlRoutes } from "./layoffs/moveLayoffsNl.routes";
import { moveLayoffsSections } from "./layoffs/moveLayoffsSections.config";
import { moveLayoffsStartCards, moveLayoffsStartHereRegion } from "./layoffs/moveLayoffsStartCards.config";
import { moveLayoffsTips } from "./layoffs/moveLayoffsTips.config";

export { moveLayoffsPageFrame } from "./moveLayoffsPageFrame.config";

/** Single import surface for editors: all narrative + tools slices in one object. */
export const moveLayoffsContentBundle = {
  sections: moveLayoffsSections,
  startHere: { region: moveLayoffsStartHereRegion, cards: moveLayoffsStartCards },
  tips: moveLayoffsTips,
  misunderstandings: { region: moveLayoffsMisunderstandingsRegion, cards: moveLayoffsMisunderstandings },
  faq: moveLayoffsFaq,
  references: moveLayoffsReferences,
  relatedTools: moveLayoffsRelatedToolsPack,
} satisfies MoveLayoffsContentBundle;

function toPageMisunderstandings(bundle: MoveLayoffsContentBundle): ChangingJobsNlPageMeta["misunderstandings"] {
  return bundle.misunderstandings.cards.map((c) => ({
    id: c.id,
    title: c.title,
    body: c.body,
    ...(c.bestFor != null && c.bestFor !== "" ? { bestFor: c.bestFor } : {}),
    ...(c.internalLinks?.length ? { internalLinks: c.internalLinks } : {}),
  }));
}

/**
 * Merge page frame (hero, TOC, bridge) with content bundle (slices). Use for tests or alternate bundles.
 */
export function buildLayoffsNlPageMeta(
  frame: MoveLayoffsPageFrameConfig,
  bundle: MoveLayoffsContentBundle
): ChangingJobsNlPageMeta {
  const ROUTES = moveLayoffsNlRoutes;
  const sec = bundle.sections;
  const rt = bundle.relatedTools;
  const journeyAffects = toJourneyBlocks(sec.whatJobChangeAffects.blocks);
  const gridEmployment = toGridCards(sec.contracts.blocks);
  const gridPermits = toGridCards(sec.permits.blocks);
  const gridSalary = toGridCards(sec.salary.blocks);
  const gridEmployeeRights = toGridCards(sec.employeeRights.blocks);
  const gridExpatBenefits = toGridCards(sec.expatBenefits.blocks);
  const gridExpatWatchOuts = toGridCards(sec.expatWatchOuts.blocks);
  const gridExpatActions = toGridCards(sec.expatActions.blocks);

  return {
    canonicalPath: ROUTES.canonical,
    movePillarHubPath: ROUTES.hub,
    hero: {
      ...frame.hero,
      contextChips: [...frame.hero.contextChips],
      bullets: [...frame.hero.bullets],
    },
    atAGlance: { ...frame.atAGlance, cells: [...frame.atAGlance.cells] },
    reassurance: [...bundle.tips.reassurance],
    confidenceChecklist: [...bundle.tips.confidenceChecklist],
    reassuranceFooter: bundle.tips.reassuranceFooter,
    practicalTipCallouts: bundle.tips.practicalCallouts ?? [],
    pillarJourneyBridge: { ...frame.pillarJourneyBridge, links: [...frame.pillarJourneyBridge.links] },
    startHereRegion: bundle.startHere.region,
    startHereCards: bundle.startHere.cards,
    whatAffectsSection: {
      ...sec.whatJobChangeAffects,
      blocks: journeyAffects,
      stages: journeyAffects,
    },
    contractsSection: {
      ...sec.contracts,
      blocks: gridEmployment,
      cards: gridEmployment,
    },
    permitsSection: {
      ...sec.permits,
      blocks: gridPermits,
      cards: gridPermits,
    },
    salarySection: {
      ...sec.salary,
      blocks: gridSalary,
      cards: gridSalary,
    },
    employeeRightsSection: {
      ...sec.employeeRights,
      blocks: gridEmployeeRights,
      cards: gridEmployeeRights,
    },
    expatBenefitsSection: {
      ...sec.expatBenefits,
      blocks: gridExpatBenefits,
      cards: gridExpatBenefits,
    },
    expatWatchOutsSection: {
      ...sec.expatWatchOuts,
      blocks: gridExpatWatchOuts,
      cards: gridExpatWatchOuts,
    },
    expatActionsSection: {
      ...sec.expatActions,
      blocks: gridExpatActions,
      cards: gridExpatActions,
    },
    practicalLifeSection: {
      ...sec.practicalLife,
      cards: toPracticalLifeCards(sec.practicalLife.cards),
    },
    misunderstandingsRegion: bundle.misunderstandings.region,
    misunderstandings: toPageMisunderstandings(bundle),
    whatNextRegion: frame.whatNextRegion,
    progressionSteps: [...frame.progressionSteps],
    toolsRegion: rt.toolsRegion,
    toolsJourneySnapshot: { ...rt.toolsJourneySnapshot, steps: [...rt.toolsJourneySnapshot.steps] },
    explorePillarCards: [...rt.explorePillarCards],
    relatedTools: rt.relatedTools,
    continueMove: { ...rt.continueMove, cards: [...rt.continueMove.cards] },
    sectionNav: [...frame.sectionNav],
    deepLinks: frame.deepLinks,
    faq: bundle.faq,
    references: bundle.references,
  };
}

export const layoffsNlPageMeta = buildLayoffsNlPageMeta(moveLayoffsPageFrame, moveLayoffsContentBundle);

export type LayoffsNlPageMetaType = typeof layoffsNlPageMeta;
