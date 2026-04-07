/**
 * Deterministic Dutch vs English decimal parsing for payroll text (no locale detection heuristics beyond separators).
 */

const NBSP = /\u00a0/g;

export type ParsedNumericKind = "currency" | "percentage" | "count" | "ambiguous";

export type ParsedNumericToken = {
  raw: string;
  normalized: number | null;
  kind: ParsedNumericKind;
  sign: "positive" | "negative" | "unknown";
  /** Rough hint for debugging only. */
  localeGuess: "nl" | "en" | "ambiguous";
};

function stripNegation(t: string): { body: string; neg: boolean } {
  let s = t.replace(NBSP, " ").replace(/\s/g, "").trim();
  let neg = false;
  if (s.startsWith("(") && s.endsWith(")")) {
    neg = true;
    s = s.slice(1, -1).trim();
  }
  if (s.startsWith("-")) {
    neg = true;
    s = s.slice(1).trim();
  }
  if (s.endsWith("-")) {
    neg = true;
    s = s.slice(0, -1).trim();
  }
  s = s.replace(/€/g, "");
  return { body: s, neg };
}

/**
 * Parse a single money-like token (with optional thousands separators).
 */
export function parseDutchOrEnglishMoneyToken(raw: string): number | null {
  const { body, neg } = stripNegation(raw);
  if (!body) return null;

  const lastDot = body.lastIndexOf(".");
  const lastComma = body.lastIndexOf(",");

  let normalizedStr: string;

  // Trailing .XX or ,XX decides decimal separator (when both appear).
  if (lastDot !== -1 && lastComma !== -1) {
    if (lastDot > lastComma && /\.\d{1,2}$/.test(body)) {
      normalizedStr = body.replace(/,/g, "");
    } else if (lastComma > lastDot && /,\d{1,2}$/.test(body)) {
      const noThousands = body.includes(".") && /\d\.\d{3}/.test(body) ? body.replace(/\./g, "") : body.replace(/\s/g, "");
      normalizedStr = noThousands.replace(",", ".");
    } else {
      normalizedStr = body.replace(/,/g, ".");
    }
  } else if (lastComma !== -1 && /,\d{1,2}$/.test(body)) {
    const noThousands = body.includes(".") && /\d\.\d{3}/.test(body) ? body.replace(/\./g, "") : body.replace(/\s/g, "");
    normalizedStr = noThousands.replace(",", ".");
  } else if (lastDot !== -1 && /\.\d{1,2}$/.test(body)) {
    normalizedStr = body.replace(/,/g, "");
  } else if (lastComma !== -1) {
    normalizedStr = body.replace(/\./g, "").replace(",", ".");
  } else {
    normalizedStr = body.replace(/\./g, "");
  }

  const n = parseFloat(normalizedStr);
  if (!Number.isFinite(n)) return null;
  return neg ? -n : n;
}

export function parseDutchOrEnglishNumber(raw: string, kindHint?: ParsedNumericKind): ParsedNumericToken {
  const trimmed = raw.trim();
  const isPct = /%$/.test(trimmed.replace(/\s/g, ""));
  const core = trimmed.replace(/%$/, "").trim();
  const v = parseDutchOrEnglishMoneyToken(core);
  const sign =
    v == null ? "unknown" : v < 0 ? "negative" : v > 0 ? "positive" : ("unknown" as const);
  let kind: ParsedNumericKind = kindHint ?? "ambiguous";
  if (isPct) kind = "percentage";
  else if (kind === "ambiguous" && v != null && Math.abs(v) < 200 && /^\d{1,2}[.,]\d{1,2}$/.test(core.replace(/^-/, ""))) {
    kind = "count";
  } else if (kind === "ambiguous" && v != null) {
    kind = "currency";
  }
  return {
    raw: trimmed,
    normalized: v,
    kind,
    sign,
    localeGuess: "ambiguous",
  };
}
