import Link from "next/link";
import { cn } from "@/lib/cn";

const BASE = "/netherlands";

const CARDS = [
  {
    key: "payslip" as const,
    title: "Decode a Dutch payslip",
    description: "Paste text or a text-based PDF to explain bruto/netto, loonheffing, vakantiegeld, and pension lines.",
    href: `${BASE}/work/tools/payslip-decoder/`,
  },
  {
    key: "net" as const,
    title: "Estimate your Dutch net salary",
    description: "Indicative gross-to-net with optional 30% ruling on taxable wages — not payroll tables.",
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
  },
  {
    key: "30ruling" as const,
    title: "Check 30% ruling eligibility",
    description: "Norms, recruitment, and distance self-checks before you assume the facility on payroll.",
    href: `${BASE}/taxes/tools/30-ruling-calculator/`,
  },
];

export type PayrollPlanningToolTrioHighlight = (typeof CARDS)[number]["key"];

type PayrollPlanningToolTrioProps = {
  /** Subtly emphasizes one card for the current page context. */
  highlight?: PayrollPlanningToolTrioHighlight;
  className?: string;
};

/**
 * Three-way cross-link between payslip decoder, net salary calculator, and 30% ruling tool.
 * Uses Moving NL / ExpatCopilot copilot surface tokens.
 */
export function PayrollPlanningToolTrio({ highlight, className }: PayrollPlanningToolTrioProps) {
  return (
    <section
      className={cn("space-y-4", className)}
      aria-labelledby="payroll-planning-tool-trio-heading"
    >
      <h2
        id="payroll-planning-tool-trio-heading"
        className="text-lg font-semibold tracking-tight text-copilot-text-primary sm:text-xl"
      >
        Payroll planning tools
      </h2>
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        Same tool chrome across the Netherlands cluster — jump between salary, ruling, and payslip reading without losing context.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <Link
            key={c.key}
            href={c.href}
            className={cn(
              "group rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.1] transition hover:ring-copilot-primary/22 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/30 sm:p-5",
              highlight === c.key && "ring-2 ring-copilot-primary/35"
            )}
          >
            <p className="text-sm font-semibold text-copilot-text-primary group-hover:text-copilot-primary">{c.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{c.description}</p>
            <p className="mt-3 text-xs font-semibold text-copilot-primary">Open tool →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
