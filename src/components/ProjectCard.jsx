import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub, FiCheckCircle } from "react-icons/fi";

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0f15]/90 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e11d48]/50 hover:shadow-[0_15px_35px_-10px_rgba(225,29,72,0.25)]">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#11141e] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e11d48]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fb7185]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-2 font-mono text-[11px] text-[#94a3b8]">
            {project.id}.py
          </span>
        </div>

        <span className="rounded-full border border-[#e11d48]/30 bg-[#e11d48]/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#fb7185]">
          {project.category}
        </span>
      </div>

      {/* Main Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-white group-hover:text-[#fb7185] transition-colors">
            {project.name}
          </h3>
          {project.stats && (
            <span className="font-mono text-[10px] text-[#94a3b8] bg-[#161a26] px-2 py-0.5 rounded border border-white/[0.05]">
              {project.stats}
            </span>
          )}
        </div>

        <p className="mt-1 font-mono text-xs text-[#e11d48]">
          {project.tagline}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#94a3b8]">
          {project.description}
        </p>

        {/* Feature Highlights */}
        {project.highlights && (
          <div className="mt-4 grid grid-cols-2 gap-1.5 border-t border-white/[0.05] pt-3">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                <FiCheckCircle className="text-[#e11d48] text-[11px] shrink-0" />
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/[0.06] bg-[#141724] px-2.5 py-1 font-mono text-[11px] text-[#94a3b8] transition-colors group-hover:border-[#e11d48]/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Footnotes */}
        <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4 font-mono text-xs">
          <div className="flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-[#fb7185]"
            >
              <HiOutlineExternalLink size={15} />
              <span>Live Preview</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#94a3b8] transition-colors hover:text-white"
            >
              <FiGithub size={14} />
              <span>Source</span>
            </a>
          </div>

          {onSelect && (
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="text-[#fb7185] hover:text-white text-xs transition-colors"
            >
              Details →
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
