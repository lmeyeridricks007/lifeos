#!/usr/bin/env python3
"""One-off slate/white → semantic token replacements for Phase 5 debt cleanup."""
from __future__ import annotations

import re
import sys
from pathlib import Path

# (pattern, repl) regex tuples applied in order
REPLACEMENTS: list[tuple[str, str]] = [
    (r"border-slate-200/90", "border-border/90"),
    (r"border-slate-200/80", "border-border/80"),
    (r"border-slate-100", "border-border/80"),
    (r"border-slate-200", "border-border"),
    (r"border-slate-300", "border-border-strong"),
    (r"hover:border-slate-300", "hover:border-border-strong"),
    (r"bg-slate-50/80", "bg-surface-muted/80"),
    (r"bg-slate-50/50", "bg-surface-muted/50"),
    (r"bg-slate-50", "bg-surface-muted"),
    (r"bg-slate-100", "bg-surface-muted"),
    (r"bg-slate-200/70", "bg-surface-muted/80"),
    (r"bg-slate-200/80", "bg-surface-muted/80"),
    (r"bg-slate-200", "bg-surface-muted"),
    (r"hover:bg-slate-800", "hover:bg-foreground/90"),
    (r"bg-slate-900", "bg-foreground"),
    (r"bg-slate-800", "bg-foreground"),
    (r"hover:bg-slate-100", "hover:bg-surface-subtle"),
    (r"hover:bg-slate-50", "hover:bg-surface-muted"),
    (r"text-slate-900", "text-foreground"),
    (r"text-slate-800", "text-foreground"),
    (r"text-slate-700", "text-foreground"),
    (r"text-slate-600", "text-foreground-muted"),
    (r"text-slate-500", "text-foreground-muted"),
    (r"text-slate-400", "text-foreground-faint"),
    (r"text-slate-300", "text-foreground-faint"),
    (r"from-slate-50", "from-surface-muted"),
    (r"to-white\b", "to-surface-raised"),
    (r"bg-gradient-to-b from-slate-50", "bg-gradient-to-b from-surface-muted"),
]


PALETTE: list[tuple[str, str]] = [
    (r"border-l-blue-500", "border-l-brand"),
    (r"border-l-teal-500", "border-l-accent"),
    (r"border-l-sky-500", "border-l-brand"),
    (r"border-l-emerald-500", "border-l-success"),
    (r"border-l-amber-500", "border-l-warning"),
    (r"border-l-violet-500", "border-l-info"),
    (r"border-blue-400", "border-brand/40"),
    (r"border-teal-400", "border-accent/40"),
    (r"border-amber-400", "border-warning-border/70"),
    (r"border-sky-200/80", "border-brand/25"),
    (r"border-sky-300", "border-brand/35"),
    (r"border-sky-100/50", "border-brand/15"),
    (r"border-amber-200/80", "border-warning-border/50"),
    (r"border-amber-200", "border-warning-border/60"),
    (r"border-amber-100", "border-warning-border/40"),
    (r"border-emerald-100", "border-success-border/50"),
    (r"border-emerald-200", "border-success-border/60"),
    (r"bg-blue-50/80", "bg-brand-muted/80"),
    (r"bg-blue-50/60", "bg-brand-muted/65"),
    (r"bg-blue-50/50", "bg-brand-muted/55"),
    (r"bg-blue-50/40", "bg-brand-muted/45"),
    (r"bg-blue-50", "bg-brand-muted/50"),
    (r"bg-teal-50/80", "bg-accent-muted/80"),
    (r"bg-teal-50/60", "bg-accent-muted/65"),
    (r"bg-teal-50/40", "bg-accent-muted/45"),
    (r"bg-teal-50", "bg-accent-muted/50"),
    (r"bg-sky-50/70", "bg-brand-muted/60"),
    (r"bg-sky-50/50", "bg-brand-muted/45"),
    (r"bg-sky-50/40", "bg-brand-muted/40"),
    (r"from-sky-50/70", "from-brand-muted/70"),
    (r"from-amber-50/90", "from-warning-muted/90"),
    (r"from-amber-50/80", "from-warning-muted/80"),
    (r"from-amber-50/50", "from-warning-muted/50"),
    (r"bg-amber-50/90", "bg-warning-muted/90"),
    (r"bg-amber-50/80", "bg-warning-muted/80"),
    (r"bg-amber-50/50", "bg-warning-muted/50"),
    (r"bg-amber-50", "bg-warning-muted/60"),
    (r"from-teal-50/60", "from-accent-muted/60"),
    (r"from-emerald-50/50", "from-success-muted/50"),
    (r"from-sky-50/50", "from-brand-muted/50"),
    (r"from-amber-50/50", "from-warning-muted/50"),
    (r"from-blue-50/90", "from-brand-muted/90"),
    (r"from-blue-50/50", "from-brand-muted/50"),
    (r"from-teal-50/90", "from-accent-muted/90"),
    (r"from-amber-50/90", "from-warning-muted/90"),
    (r"from-violet-50/90", "from-info-muted/90"),
    (r"from-violet-50/60", "from-info-muted/60"),
    (r"via-white", "via-surface-raised"),
    (r"ring-slate-100", "ring-border/30"),
    (r"ring-slate-100/80", "ring-border/25"),
    (r"ring-slate-100/60", "ring-border/20"),
    (r"ring-amber-100/50", "ring-warning-border/25"),
    (r"ring-sky-100/50", "ring-brand/15"),
    (r"divide-slate-100", "divide-border/80"),
    (r"bg-slate-400", "bg-foreground-faint"),
    (r"border-slate-900", "border-foreground"),
    (r"bg-sky-50/50", "bg-brand-muted/40"),
    (r"hover:bg-sky-50/50", "hover:bg-brand-muted/35"),
    (r"hover:border-sky-300", "hover:border-brand/30"),
    (r"text-blue-700", "text-brand-strong"),
    (r"text-blue-800", "text-brand-strong"),
    (r"text-blue-600", "text-brand"),
    (r"text-teal-700", "text-accent"),
    (r"text-sky-700", "text-brand-strong"),
    (r"text-sky-600", "text-brand"),
    (r"text-sky-500", "text-brand"),
    (r"text-sky-950", "text-foreground"),
    (r"text-amber-900", "text-warning"),
    (r"text-amber-800/90", "text-warning"),
    (r"text-amber-800", "text-warning"),
    (r"text-amber-700", "text-warning"),
    (r"text-emerald-900", "text-success"),
    (r"text-emerald-800/90", "text-success"),
    (r"text-emerald-700", "text-success"),
    (r"text-emerald-500", "text-success"),
    (r"text-violet-900", "text-foreground"),
    (r"bg-emerald-50/90", "bg-success-muted/90"),
    (r"bg-emerald-50/70", "bg-success-muted/70"),
    (r"bg-teal-100", "bg-accent-muted"),
    (r"text-teal-700", "text-accent"),
    (r"from-teal-50/80", "from-accent-muted/80"),
    (r"from-emerald-50/90", "from-success-muted/90"),
    (r"from-sky-50/90", "from-brand-muted/90"),
    (r"bg-sky-500/15", "bg-brand/15"),
    (r"bg-emerald-500/15", "bg-success/15"),
    (r"bg-amber-500/10", "bg-warning/12"),
    (r"bg-amber-400", "bg-warning"),
    (r"text-amber-500", "text-warning"),
    (r"bg-violet-600", "bg-info"),
    (r"bg-sky-600", "bg-brand-strong"),
    (r"bg-amber-600", "bg-warning"),
    (r"border-teal-200", "border-accent/30"),
    (r"bg-blue-100", "bg-brand-muted"),
    (r"text-blue-800", "text-brand-strong"),
    (r"to-teal-50/80", "to-accent-muted/80"),
    (r"to-slate-100/90", "to-surface-muted/90"),
]


def migrate_text(text: str) -> str:
    t = text
    t = re.sub(r"bg-white/(\d+)", r"bg-surface-raised/\1", t)
    t = re.sub(r"\bbg-white\b", "bg-surface-raised", t)
    for pat, repl in REPLACEMENTS:
        t = re.sub(pat, repl, t)
    for pat, repl in PALETTE:
        t = re.sub(pat, repl, t)
    t = re.sub(r"\brounded-2xl\b", "rounded-card", t)
    return t


def main() -> None:
    paths = [Path(p) for p in sys.argv[1:]]
    for path in paths:
        if not path.exists():
            print("skip missing", path)
            continue
        raw = path.read_text(encoding="utf-8")
        out = migrate_text(raw)
        path.write_text(out, encoding="utf-8")
        print("ok", path)


if __name__ == "__main__":
    main()
