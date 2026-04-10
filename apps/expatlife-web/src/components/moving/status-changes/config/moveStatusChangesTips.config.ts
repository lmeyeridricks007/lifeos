import type { MoveStatusChangesTipCallout } from "./moveStatusChanges.types";

export const moveStatusChangesTips = {
  reassurance: [
    {
      id: "orientation-first",
      visualKey: "continuity",
      title: "You do not need to solve the whole case in one sitting.",
      body:
        "Use this page to understand the **broad status-change logic** first: **what changed**, **why it may matter**, and **which guide or tool comes next**. Once the shape is clear, confirm the important details with **official sources** or qualified help.",
    },
  ] satisfies readonly MoveStatusChangesTipCallout[],
};
