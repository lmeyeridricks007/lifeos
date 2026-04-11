import { moveWorkingNlRoutes as R } from "../../../working-in-the-netherlands/config/moveWorkingNl.content";

export const workingInNl = R.canonical;
export const changingJobsNl = R.changingJobs;

export const moveResigningJobNlRoutes = {
  ...R,
  canonical: "/netherlands/moving/resigning-job-netherlands/",
} as const;

export type MoveResigningJobNlRoutes = typeof moveResigningJobNlRoutes;
