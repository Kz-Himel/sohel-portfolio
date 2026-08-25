import { skillGroups } from "../data/siteData";
import { SectionHeading } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/40 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="group border border-border bg-bg p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-text"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-accent/70 transition-transform group-hover:scale-125" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
