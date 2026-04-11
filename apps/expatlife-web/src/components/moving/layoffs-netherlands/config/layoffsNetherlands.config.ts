export type * from "./moveLayoffsNl.types";
export type {
  LayoffsNlStartIconKey,
  MoveLayoffsContentBlockFields,
  MoveLayoffsContentBundle,
  MoveLayoffsFaqConfig,
  MoveLayoffsMisunderstandingCardConfig,
  MoveLayoffsPageFrameConfig,
  MoveLayoffsPracticalTipCalloutConfig,
  MoveLayoffsReferencesConfig,
  MoveLayoffsRelatedToolsPack,
  MoveLayoffsSectionsConfig,
  MoveLayoffsStartCardConfig,
  MoveLayoffsTipsConfig,
} from "./moveLayoffsNl.content.model";
export {
  buildLayoffsNlPageMeta,
  layoffsNlPageMeta,
  moveLayoffsContentBundle,
  moveLayoffsPageFrame,
  moveLayoffsNlRoutes,
} from "./moveLayoffsNl.content";
export type { LayoffsNlPageMetaType } from "./moveLayoffsNl.content";

/** Named content configs — prefer editing files under `config/layoffs/`; assembly in `moveLayoffsNl.content.assemble.ts`. */
export {
  moveLayoffsContinueMove,
  moveLayoffsExplorePillarCards,
  moveLayoffsFaq,
  moveLayoffsMisunderstandings,
  moveLayoffsMisunderstandingsRegion,
  moveLayoffsReferences,
  moveLayoffsRelatedTools,
  moveLayoffsRelatedToolsPack,
  moveLayoffsSections,
  moveLayoffsStartCards,
  moveLayoffsStartHereRegion,
  moveLayoffsTips,
  moveLayoffsToolsJourneySnapshot,
  moveLayoffsToolsRegion,
  workingInNl,
} from "./layoffs";
