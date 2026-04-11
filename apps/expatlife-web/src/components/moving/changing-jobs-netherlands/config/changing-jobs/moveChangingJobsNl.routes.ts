import { moveWorkingNlRoutes as R } from "../../../working-in-the-netherlands/config/moveWorkingNl.content";

/** Canonical Working in NL Move guide — same as `moveWorkingNlRoutes.canonical` */
export const workingInNl = R.canonical;

export const moveChangingJobsNlRoutes = {
  ...R,
  canonical: "/netherlands/moving/changing-jobs-netherlands/",
} as const;

export type MoveChangingJobsNlRoutes = typeof moveChangingJobsNlRoutes;
