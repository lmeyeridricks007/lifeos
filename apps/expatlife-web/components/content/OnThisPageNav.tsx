import Link from "next/link";
import { Section } from "@/components/ui/section";

const LINKS = [
  { label: "Your move in 3 stages", href: "#your-move-in-3-stages" },
  { label: "Who this guide is for", href: "#who-this-guide-is-for" },
  { label: "How to plan your move", href: "#how-to-plan-your-move" },
  { label: "Choose your situation", href: "#choose-your-situation" },
  { label: "Moving from your country", href: "#moving-from-your-country" },
  { label: "Planning tools", href: "#planning-tools" },
  { label: "Key relocation guides", href: "#key-relocation-guides" },
  { label: "Typical relocation timeline", href: "#typical-relocation-timeline" },
  { label: "Checklist at a glance", href: "#checklist-at-a-glance" },
  { label: "What to prepare before moving", href: "#what-to-prepare-before" },
  { label: "What to do after arriving", href: "#what-to-do-after-arrival" },
  { label: "Your first 90 days", href: "#your-first-90-days" },
  { label: "Cost of moving", href: "#cost-of-moving" },
  { label: "Frequently asked questions", href: "#faq" },
  { label: "Services expats often use", href: "#services-expats-use" },
] as const;

export function OnThisPageNav() {
  return (
    <Section id="on-this-page" title="On this page" className="py-4 md:py-6">
      <nav aria-label="Page sections">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
          {LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-brand-700 underline hover:text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
}
