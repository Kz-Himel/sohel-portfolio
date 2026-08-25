import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      {/* terminal-style header bar */}
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-auto font-mono text-[11px] text-text-muted/60">
          {project.id}.py
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text">
          {project.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-border px-2 py-1 font-mono text-[11px] text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 border-t border-border pt-5 font-mono text-xs">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-text transition-colors hover:text-accent"
          >
            <HiOutlineExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-text transition-colors hover:text-accent"
          >
            <FiGithub size={13} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
