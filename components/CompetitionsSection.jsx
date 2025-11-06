import Section from "./Section";
import { competitions } from "../constants";

export default function CompetitionsSection() {
  return (
    <Section id="competitions" title="Competitions">
      <ul className="space-y-6">
        {competitions.map((c, i) => (
          <li key={i} className="rounded-xl border p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <a href={c.link} target="_blank" rel="noreferrer" className="font-semibold hover:underline">
                {c.title}
              </a>
              <span className="text-sm opacity-70">{c.date}</span>
            </div>
            <div className="mt-1 text-sm">{c.role}</div>
            {c.points?.length ? (
              <ul className="mt-3 list-disc pl-5 text-sm opacity-90">
                {c.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}