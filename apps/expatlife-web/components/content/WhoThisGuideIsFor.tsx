import { Section } from "@/components/ui/section";

const AUDIENCES = [
  "People moving to the Netherlands for work",
  "Expats relocating with a partner or family",
  "EU and non-EU nationals",
  "People planning their first move to Europe",
  "People preparing documents, housing, and arrival admin",
] as const;

export function WhoThisGuideIsFor() {
  return (
    <Section id="who-this-guide-is-for" title="Who this guide is for">
      <ul className="flex flex-wrap gap-2">
        {AUDIENCES.map((item) => (
          <li key={item}>
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
