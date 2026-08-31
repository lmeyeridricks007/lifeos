export const EXAM_READINESS_CANONICAL = "/netherlands/integration/tools/inburgering-exam-readiness-checker/";

export const EXAM_READINESS_FAQ_ITEMS = [
  {
    id: "pass-prediction",
    question: "Does this tool predict whether I will pass?",
    answer:
      "No. It is a self-assessment checklist for module priorities. Only DUO exam results matter. Use current practice exams on inburgeren.nl.",
  },
  {
    id: "knm-2025",
    question: "Why does KNM mention July 2025?",
    answer:
      "KNM end terms and style were updated from 1 July 2025. Older third-party quizzes can be stale — prepare with current DUO practice materials.",
  },
  {
    id: "a2-vs-b1",
    question: "Should I aim for A2 or B1?",
    answer:
      "If you are Wi 2021 obligated on a B1-route, your PIP usually targets B1 (A2 step-down only after proven effort). For IND secure residence, evidence is often at least A2 or a Wi 2021 certificate / exemption — confirm on IND.",
  },
  {
    id: "quiz",
    question: "Is there an ExpatLife KNM quiz?",
    answer:
      "A practice quiz may appear later. For now, treat DUO practice exams as the source of truth — not third-party question banks.",
  },
];

export const EXAM_READINESS_OFFICIAL_SOURCES = [
  { label: "DUO — inburgeren.nl", href: "https://www.inburgeren.nl/en" },
  {
    label: "IND — Civic integration for a more secure residence permit",
    href: "https://ind.nl/en/living-in-the-netherlands-with-a-residence-permit/civic-integration-for-more-secure-residence-permit",
  },
];

export const EXAM_READINESS_RELATED_GUIDES = [
  {
    href: "/netherlands/integration/inburgering/",
    title: "Inburgering in the Netherlands",
    description: "Exam components, KNM 2025, DUO vs IND roles.",
  },
  {
    href: "/netherlands/citizenship/permanent-residence/",
    title: "Permanent residence in the Netherlands",
    description: "When civic integration evidence is needed for PR.",
  },
  {
    href: "/netherlands/culture/learning-dutch/",
    title: "Learning Dutch",
    description: "Language learning context alongside exam prep.",
  },
];

export const TARGET_LEVEL_OPTIONS = [
  { value: "b1_wi2021", label: "B1 (Wi 2021 obligation route)" },
  { value: "a2_secure_residence", label: "A2 / secure-residence evidence focus" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const MODULE_STATUS_OPTIONS = [
  { value: "not_started", label: "Not started" },
  { value: "practicing", label: "Practicing" },
  { value: "comfortable", label: "Comfortable (self-assessed)" },
  { value: "passed", label: "Passed / certificate in hand" },
  { value: "unsure", label: "Not sure" },
] as const;

export const PARTICIPATION_OPTIONS = [
  { value: "not_applicable", label: "Not applicable to my route" },
  { value: "not_started", label: "Not started" },
  { value: "in_progress", label: "In progress" },
  { value: "done", label: "Done" },
  { value: "unsure", label: "Not sure" },
] as const;

export const KNM_MATERIALS_OPTIONS = [
  { value: "yes_post_july_2025", label: "Using current post–July 2025 DUO materials" },
  { value: "older_materials", label: "Mostly older / third-party materials" },
  { value: "unsure", label: "Not sure" },
] as const;

export const BOOKING_WINDOW_OPTIONS = [
  { value: "already_booked", label: "Already booked" },
  { value: "within_3_months", label: "Hoping to book within ~3 months" },
  { value: "later", label: "Later / still planning" },
  { value: "unsure", label: "Not sure" },
] as const;
