import { Section } from "@/components/ui/section";
import { ToolInfographicBlock } from "@/src/components/tools/shared/ToolInfographicBlock";

const TIMELINE_IMAGE = "/images/infographics/moving-timeline-netherlands.png";
const TIMELINE_ALT =
  "Timeline showing the three stages of moving to the Netherlands: before you move (documents, visa, housing), after arrival (registration, BSN), and first 90 days (banking, insurance, DigiD, transport).";

const STAGES = [
  {
    title: "Before you move",
    description:
      "Prepare documents, visa/residence route, housing, travel, and your first address.",
  },
  {
    title: "After arrival",
    description:
      "Register your address, get your BSN, and sort the first essential admin steps.",
  },
  {
    title: "First 90 days",
    description:
      "Set up banking, insurance, DigiD, transport, and daily life routines.",
  },
] as const;

export function RelocationTimelineSection({
  id = "your-move-in-3-stages",
  contained = false,
}: {
  id?: string;
  /** When false, aligns with adjacent sections (e.g. Overview) that use contained={false}. */
  contained?: boolean;
}) {
  return (
    <Section
      id={id}
      contained={contained}
      className={!contained ? "pl-5" : undefined}
      title="Your move in 3 stages"
      subtitle="How the move usually unfolds — from preparation to your first months in the Netherlands."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {STAGES.map((stage, i) => (
          <div
            key={stage.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Stage {i + 1}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {stage.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{stage.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <ToolInfographicBlock
          src={TIMELINE_IMAGE}
          alt={TIMELINE_ALT}
          width={800}
          height={450}
        />
      </div>
    </Section>
  );
}
