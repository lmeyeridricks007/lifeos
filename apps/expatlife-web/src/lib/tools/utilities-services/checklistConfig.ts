export type { UtilitiesChecklistTemplate } from "./config/utilitiesChecklistTemplates.config";
export { utilitiesChecklistTemplates } from "./config/utilitiesChecklistTemplates.config";

export type { UtilitiesScenarioPreset } from "./config/utilitiesScenarioPresets.config";
export {
  utilitiesScenarioPresets,
  utilitiesScenarioPresets as utilitiesWorkedExamplePresets,
} from "./config/utilitiesScenarioPresets.config";

/** @deprecated Use `UtilitiesScenarioPreset` — name kept for existing imports */
export type UtilitiesWorkedExamplePreset = import("./config/utilitiesScenarioPresets.config").UtilitiesScenarioPreset;
