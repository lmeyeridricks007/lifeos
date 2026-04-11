/**
 * Resigning Job NL uses the same assembled page shape as Changing Jobs NL
 * (hero → journey → grids → practical life → tools/FAQ).
 */
export type { ChangingJobsNlPageMeta as ResigningJobNlPageMeta } from "../../changing-jobs-netherlands/config/moveChangingJobsNl.types";

/** Typed content configs live under `resigning-job/`; re-export for consumers outside the folder. */
export type * from "./resigning-job";
