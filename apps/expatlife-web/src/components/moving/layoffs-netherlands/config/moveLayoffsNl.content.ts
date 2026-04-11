/**
 * Layoffs NL page meta: assembled from `moveLayoffsPageFrame` + `moveLayoffsContentBundle`.
 * Edit slices in `config/layoffs/` and shell in `moveLayoffsPageFrame.config.ts`.
 */
export { moveLayoffsNlRoutes } from "./layoffs/moveLayoffsNl.routes";
export {
  buildLayoffsNlPageMeta,
  layoffsNlPageMeta,
  moveLayoffsContentBundle,
  moveLayoffsPageFrame,
} from "./moveLayoffsNl.content.assemble";
export type { LayoffsNlPageMetaType } from "./moveLayoffsNl.content.assemble";
