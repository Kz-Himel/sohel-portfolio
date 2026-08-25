import { projects } from "../data/siteData";
import { SectionHeading } from "./About";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
