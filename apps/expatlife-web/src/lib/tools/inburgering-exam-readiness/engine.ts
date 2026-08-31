import type {
  ExamReadinessBand,
  ExamReadinessChecklistItem,
  ExamReadinessInput,
  ExamReadinessNextStep,
  ExamReadinessResult,
  ModuleStatus,
} from "./types";

const DUO = "https://www.inburgeren.nl/en";
const IND_SECURE =
  "https://ind.nl/en/living-in-the-netherlands-with-a-residence-permit/civic-integration-for-more-secure-residence-permit";

const LANGUAGE_KEYS = ["reading", "writing", "speaking", "listening"] as const;

function moduleLabel(key: (typeof LANGUAGE_KEYS)[number] | "knm"): string {
  if (key === "knm") return "KNM (Knowledge of Dutch Society)";
  return key.charAt(0).toUpperCase() + key.slice(1);
}

function isWeak(status: ModuleStatus): boolean {
  return status === "not_started" || status === "practicing" || status === "unsure";
}

function isStrong(status: ModuleStatus): boolean {
  return status === "comfortable" || status === "passed";
}

function buildChecklist(input: ExamReadinessInput): ExamReadinessChecklistItem[] {
  const items: ExamReadinessChecklistItem[] = [];

  if (input.targetLevel === "b1_wi2021") {
    items.push({
      id: "level-b1",
      label: "Targeting B1 (Wi 2021-style route)",
      status: "info",
      detail:
        "Wi 2021 B1-route language exams are typically at B1. Confirm your gemeente PIP — A2 step-down is not automatic at the start.",
    });
  } else if (input.targetLevel === "a2_secure_residence") {
    items.push({
      id: "level-a2",
      label: "Targeting A2-level evidence (secure residence / older framing)",
      status: "info",
      detail:
        "IND often accepts civic integration at least at A2 for more secure residence. If you are Wi 2021 obligated, your PIP may still point to B1 — do not mix goals.",
    });
  } else {
    items.push({
      id: "level-unsure",
      label: "Target exam level not chosen",
      status: "watch",
      detail:
        "Clarify whether you are following a Wi 2021 obligation route (often B1) or collecting IND secure-residence evidence (often ≥ A2 / Wi 2021 certificate).",
    });
  }

  for (const key of LANGUAGE_KEYS) {
    const status = input[key];
    items.push({
      id: `lang-${key}`,
      label: moduleLabel(key),
      status: status === "passed" || status === "comfortable" ? "strength" : status === "not_started" ? "gap" : "watch",
      detail:
        status === "passed"
          ? "Marked as passed — keep the diploma / result ready for IND or DUO files."
          : status === "comfortable"
            ? "Self-assessed as comfortable — still verify with current DUO practice exams before booking."
            : status === "practicing"
              ? "In practice — schedule regular DUO-style practice and book when consistently above your comfort bar."
              : status === "not_started"
                ? "Not started — prioritise this module in your study plan."
                : "Status unsure — take a current DUO practice set to baseline.",
    });
  }

  {
    const status = input.knm;
    items.push({
      id: "knm",
      label: moduleLabel("knm"),
      status: status === "passed" || status === "comfortable" ? "strength" : status === "not_started" ? "gap" : "watch",
      detail:
        "KNM content and style were updated from 1 July 2025. Use current DUO practice materials — older third-party quizzes can be stale.",
    });
  }

  if (input.knmMaterials === "older_materials") {
    items.push({
      id: "knm-materials-old",
      label: "KNM prep may rely on older materials",
      status: "gap",
      detail: "Refresh with post–1 July 2025 DUO practice exams on inburgeren.nl before you book.",
    });
  } else if (input.knmMaterials === "yes_post_july_2025") {
    items.push({
      id: "knm-materials-current",
      label: "Using current (post–July 2025) KNM materials",
      status: "strength",
      detail: "Keep practicing with official DUO sets closer to the exam date.",
    });
  }

  if (input.participationModules === "not_started" || input.participationModules === "in_progress") {
    items.push({
      id: "participation",
      label: "Participation / labour-market modules (PVT / MAP-style)",
      status: "watch",
      detail:
        "Wi 2021 routes may include participation modules. Confirm what your PIP requires — do not assume every cohort needs the same package.",
    });
  } else if (input.participationModules === "done") {
    items.push({
      id: "participation-done",
      label: "Participation modules marked done",
      status: "strength",
      detail: "Keep certificates with your DUO / gemeente file.",
    });
  } else if (input.participationModules === "not_applicable") {
    items.push({
      id: "participation-na",
      label: "Participation modules not applicable (as entered)",
      status: "info",
      detail: "Still confirm against your PIP or IND evidence list so nothing is missing.",
    });
  }

  if (input.bookingWindow === "already_booked") {
    items.push({
      id: "booked",
      label: "Exam date already booked",
      status: "info",
      detail: "Focus remaining study hours on weakest modules and current DUO practice sets.",
    });
  } else if (input.bookingWindow === "within_3_months") {
    items.push({
      id: "soon",
      label: "Booking window within ~3 months",
      status: "watch",
      detail: "Prioritise weak modules now; book only when practice results are stable.",
    });
  }

  return items;
}

function priorityModules(input: ExamReadinessInput): string[] {
  const priorities: string[] = [];
  for (const key of LANGUAGE_KEYS) {
    if (isWeak(input[key])) priorities.push(moduleLabel(key));
  }
  if (isWeak(input.knm) || input.knmMaterials === "older_materials") {
    priorities.push(moduleLabel("knm"));
  }
  if (input.participationModules === "not_started" || input.participationModules === "in_progress") {
    priorities.push("Participation modules (confirm PIP)");
  }
  return priorities;
}

function pickBand(input: ExamReadinessInput, escalate: boolean): ExamReadinessBand {
  if (input.knmMaterials === "older_materials" && (input.knm === "comfortable" || input.knm === "practicing")) {
    return "refresh_knm_materials";
  }

  const language = LANGUAGE_KEYS.map((k) => input[k]);
  const strongCount = language.filter(isStrong).length + (isStrong(input.knm) ? 1 : 0);
  const notStartedCount =
    language.filter((s) => s === "not_started").length + (input.knm === "not_started" ? 1 : 0);

  if (strongCount >= 4 && input.knmMaterials !== "older_materials" && input.targetLevel !== "unsure") {
    return "ready_to_book_verify";
  }
  if (notStartedCount >= 3) return "early_prep";
  if (escalate) return "needs_careful_review";
  if (priorityModules(input).length > 0) return "prioritize_weak_modules";
  return "needs_careful_review";
}

function bandCopy(band: ExamReadinessBand): Pick<ExamReadinessResult, "headline" | "summary" | "confidenceNote"> {
  switch (band) {
    case "ready_to_book_verify":
      return {
        headline: "Likely ready to verify with DUO practice, then book",
        summary:
          "Your self-assessment looks strong across most modules. Confirm with current DUO practice exams (especially KNM after July 2025) before you lock a date. This is not a pass prediction.",
        confidenceNote: "Self-reported readiness only — DUO results decide.",
      };
    case "prioritize_weak_modules":
      return {
        headline: "Prioritise weaker modules before booking",
        summary:
          "Some components still need practice. Focus study time on the priority list below, use official DUO practice sets, and book when those modules feel consistently comfortable.",
        confidenceNote: "Orientation checklist — not an official readiness score.",
      };
    case "early_prep":
      return {
        headline: "Early prep — build a module-by-module plan",
        summary:
          "Several modules are not started yet. Clarify your target level (B1 obligation vs A2 / secure-residence evidence), then sequence language skills and KNM with realistic weekly hours.",
        confidenceNote: "Start with the inburgering guide and DUO — not third-party quizzes as truth.",
      };
    case "refresh_knm_materials":
      return {
        headline: "Refresh KNM materials before you rely on old prep",
        summary:
          "You flagged older KNM materials. From 1 July 2025 the exam uses revised end terms. Switch to current DUO practice on inburgeren.nl even if language modules feel strong.",
        confidenceNote: "Stale third-party quizzes are a common failure mode.",
      };
    case "needs_careful_review":
      return {
        headline: "Clarify level and baselines before you book",
        summary:
          "Too many unknowns remain (target level, module status, or materials). Pause booking until you know which exam package applies and you have recent DUO practice baselines.",
        confidenceNote: "This tool does not invent pass scores or official questions.",
      };
  }
}

function buildNextSteps(band: ExamReadinessBand, input: ExamReadinessInput): ExamReadinessNextStep[] {
  const steps: ExamReadinessNextStep[] = [
    { id: "duo", label: "DUO — inburgeren.nl (practice & booking)", href: DUO, external: true },
    {
      id: "ind-secure",
      label: "IND — Civic integration for secure residence",
      href: IND_SECURE,
      external: true,
    },
    {
      id: "inburgering-guide",
      label: "ExpatLife inburgering guide",
      href: "/netherlands/integration/inburgering/",
    },
    {
      id: "requirement-checker",
      label: "Integration requirement checker",
      href: "/netherlands/integration/tools/integration-requirement-checker/",
    },
  ];

  if (input.targetLevel === "a2_secure_residence" || band === "ready_to_book_verify") {
    steps.push({
      id: "pr-guide",
      label: "Permanent residence guide",
      href: "/netherlands/citizenship/permanent-residence/",
    });
  }

  return steps;
}

export function calculateExamReadiness(input: ExamReadinessInput): ExamReadinessResult {
  const checklist = buildChecklist(input);
  const priorities = priorityModules(input);

  const escalateReasons: string[] = [];
  if (input.targetLevel === "unsure") {
    escalateReasons.push("Target level (B1 obligation vs A2 / secure-residence evidence) is unclear.");
  }
  if (input.knmMaterials === "older_materials") {
    escalateReasons.push("KNM prep may be based on pre–July 2025 materials.");
  }
  if (LANGUAGE_KEYS.every((k) => input[k] === "unsure") && input.knm === "unsure") {
    escalateReasons.push("All module statuses are unsure — take DUO practice baselines first.");
  }

  const escalate = escalateReasons.length > 0;
  const band = pickBand(input, escalate);
  const copy = bandCopy(band);

  return {
    band,
    ...copy,
    checklist,
    priorityModules: priorities,
    nextSteps: buildNextSteps(band, input),
    escalate,
    escalateReasons,
  };
}
