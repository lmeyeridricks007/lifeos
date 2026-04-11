import { moveWorkingNlRoutes as R } from "../../../working-in-the-netherlands/config/moveWorkingNl.content";

/** Canonical Working in NL Move guide — same as `moveWorkingNlRoutes.canonical` */
export const workingInNl = R.canonical;

export const moveLayoffsNlRoutes = {
  ...R,
  canonical: "/netherlands/moving/layoffs-netherlands/",
} as const;

export type MoveLayoffsNlRoutes = typeof moveLayoffsNlRoutes;
