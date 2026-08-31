import { DEFAULT_EXAM_READINESS_INPUT, type ExamReadinessInput } from "./types";

const STORAGE_KEY = "expatlife-inburgering-exam-readiness-inputs-v1";

const TARGET = new Set(["a2_secure_residence", "b1_wi2021", "unsure"]);
const MODULE = new Set(["not_started", "practicing", "comfortable", "passed", "unsure"]);
const PARTICIPATION = new Set(["not_applicable", "not_started", "in_progress", "done", "unsure"]);
const KNM_MATERIALS = new Set(["yes_post_july_2025", "older_materials", "unsure"]);
const BOOKING = new Set(["within_3_months", "later", "already_booked", "unsure"]);

function pick<T extends string>(value: string | null | undefined, allowed: Set<string>, fallback: T): T {
  if (value && allowed.has(value)) return value as T;
  return fallback;
}

export function sanitizeExamReadinessInput(partial: Partial<ExamReadinessInput>): ExamReadinessInput {
  const base = { ...DEFAULT_EXAM_READINESS_INPUT, ...partial };
  return {
    targetLevel: pick(base.targetLevel, TARGET, DEFAULT_EXAM_READINESS_INPUT.targetLevel),
    reading: pick(base.reading, MODULE, DEFAULT_EXAM_READINESS_INPUT.reading),
    writing: pick(base.writing, MODULE, DEFAULT_EXAM_READINESS_INPUT.writing),
    speaking: pick(base.speaking, MODULE, DEFAULT_EXAM_READINESS_INPUT.speaking),
    listening: pick(base.listening, MODULE, DEFAULT_EXAM_READINESS_INPUT.listening),
    knm: pick(base.knm, MODULE, DEFAULT_EXAM_READINESS_INPUT.knm),
    participationModules: pick(base.participationModules, PARTICIPATION, DEFAULT_EXAM_READINESS_INPUT.participationModules),
    knmMaterials: pick(base.knmMaterials, KNM_MATERIALS, DEFAULT_EXAM_READINESS_INPUT.knmMaterials),
    bookingWindow: pick(base.bookingWindow, BOOKING, DEFAULT_EXAM_READINESS_INPUT.bookingWindow),
  };
}

export function examReadinessToSearchParams(input: ExamReadinessInput): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set("level", input.targetLevel);
  sp.set("reading", input.reading);
  sp.set("writing", input.writing);
  sp.set("speaking", input.speaking);
  sp.set("listening", input.listening);
  sp.set("knm", input.knm);
  sp.set("participation", input.participationModules);
  sp.set("knmMaterials", input.knmMaterials);
  sp.set("booking", input.bookingWindow);
  return sp;
}

export function hasExamReadinessUrlParams(sp: URLSearchParams): boolean {
  return ["level", "reading", "writing", "speaking", "listening", "knm", "participation", "knmMaterials", "booking"].some(
    (k) => sp.has(k)
  );
}

export function parseExamReadinessSearchParams(sp: URLSearchParams): Partial<ExamReadinessInput> {
  return sanitizeExamReadinessInput({
    targetLevel: pick(sp.get("level"), TARGET, DEFAULT_EXAM_READINESS_INPUT.targetLevel),
    reading: pick(sp.get("reading"), MODULE, DEFAULT_EXAM_READINESS_INPUT.reading),
    writing: pick(sp.get("writing"), MODULE, DEFAULT_EXAM_READINESS_INPUT.writing),
    speaking: pick(sp.get("speaking"), MODULE, DEFAULT_EXAM_READINESS_INPUT.speaking),
    listening: pick(sp.get("listening"), MODULE, DEFAULT_EXAM_READINESS_INPUT.listening),
    knm: pick(sp.get("knm"), MODULE, DEFAULT_EXAM_READINESS_INPUT.knm),
    participationModules: pick(sp.get("participation"), PARTICIPATION, DEFAULT_EXAM_READINESS_INPUT.participationModules),
    knmMaterials: pick(sp.get("knmMaterials"), KNM_MATERIALS, DEFAULT_EXAM_READINESS_INPUT.knmMaterials),
    bookingWindow: pick(sp.get("booking"), BOOKING, DEFAULT_EXAM_READINESS_INPUT.bookingWindow),
  });
}

export function saveExamReadinessToStorage(input: ExamReadinessInput): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {
    /* ignore */
  }
}

export function loadExamReadinessFromStorage(): Partial<ExamReadinessInput> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return sanitizeExamReadinessInput(JSON.parse(raw) as Partial<ExamReadinessInput>);
  } catch {
    return null;
  }
}
