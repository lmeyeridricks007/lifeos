export { compareJobOffers } from "./engine";
export type * from "./types";
export { defaultFormState, emptyOffer, BALANCED_PRIORITIES } from "./defaults";
export {
  buildJobOfferComparisonExportHtml,
  downloadJobOfferComparisonHtml,
  openPrintJobOfferComparisonSummary,
  type JobOfferComparisonExportPayload,
} from "./export";
export {
  encodeJobOfferComparisonParam,
  decodeJobOfferComparisonParam,
  saveJobOfferComparisonToStorage,
  loadJobOfferComparisonFromStorage,
  clearJobOfferComparisonStorage,
  sanitizeJobOfferComparisonState,
} from "./urlState";
