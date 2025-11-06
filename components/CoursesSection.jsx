import Section from "./Section";
import { courses } from "../constants";

export default function CoursesSection() {
  return (
    <Section id="courses" title="Courses & Certificates">
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((c, i) => (
          <article key={i} className="rounded-xl border p-4">
            <header className="flex items-baseline justify-between">
              <h3 className="font-semibold">{c.name}</h3>
              <span className="text-sm opacity-70">{c.date}</span>
            </header>
            <div className="mt-1 text-sm opacity-90">{c.provider}</div>
            {c.skills?.length ? (
              <div className="mt-3 text-sm">
                <span className="opacity-70">Skills:</span>{" "}
                {c.skills.join(", ")}
              </div>
            ) : null}
            {c.link && (
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm underline"
              >
                View
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}