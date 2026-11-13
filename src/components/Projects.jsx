import { useState } from "react";
import { HiOutlineExternalLink, HiX } from "react-icons/hi";
import { FiGithub, FiCheckCircle } from "react-icons/fi";
import { projects, profile } from "../data/siteData";
import { SectionHeading } from "./About";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full Stack", "Backend"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="// 03. FEATURED WORK"
            title="Selected Systems &amp; Engineering Projects"
            subtitle="Real-world production builds demonstrating Python, Django, database schema design, and seamless user experiences."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-xl px-4 py-2 font-mono text-xs transition-all ${
                  activeFilter === cat
                    ? "bg-[#e11d48] text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]"
                    : "border border-white/[0.08] bg-[#0d0f15] text-[#94a3b8] hover:border-[#e11d48]/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* GitHub Footnote Box */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#0d0f15]/80 p-6 sm:flex-row sm:px-8 backdrop-blur-md">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#141724] text-white">
              <FiGithub size={20} />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-white">
                Looking for more open-source experiments &amp; code repositories?
              </p>
              <p className="font-mono text-xs text-[#94a3b8]">
                Explore scripts, database migrations, and utilities on GitHub.
              </p>
            </div>
          </div>

          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#e11d48]/50 bg-[#e11d48]/10 px-5 py-2.5 font-mono text-xs font-semibold text-[#fb7185] transition-all hover:bg-[#e11d48] hover:text-white"
          >
            <span>Visit GitHub</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl border border-white/[0.12] bg-[#0a0c12] p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-[#141724] text-[#94a3b8] hover:text-white"
            >
              <HiX size={20} />
            </button>

            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#fb7185]">
              {selectedProject.category} Project
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              {selectedProject.name}
            </h3>
            <p className="mt-1 font-mono text-xs text-[#e11d48]">
              {selectedProject.tagline}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#94a3b8]">
              {selectedProject.description}
            </p>

            <div className="mt-6 border-t border-white/[0.08] pt-4">
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white">
                Technical Highlights
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {selectedProject.highlights?.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#94a3b8]">
                    <FiCheckCircle className="text-[#e11d48]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-white/[0.08] pt-4">
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white">
                Technologies Used
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/[0.08] bg-[#141724] px-2.5 py-1 font-mono text-xs text-[#94a3b8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#be123c] px-5 py-2.5 font-mono text-xs font-semibold text-white shadow-lg"
              >
                <HiOutlineExternalLink size={16} />
                <span>Launch Demo</span>
              </a>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#141724] px-5 py-2.5 font-mono text-xs font-medium text-white hover:border-[#e11d48]"
              >
                <FiGithub size={15} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
