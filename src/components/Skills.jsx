import { useState } from "react";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiGit,
  SiDocker,
  SiPostman,
  SiLinux,
} from "react-icons/si";
import { SectionHeading } from "./About";
import { skillCategories } from "../data/siteData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const iconMap = {
    Python: <SiPython className="text-[#e11d48]" />,
    Django: <SiDjango className="text-[#fb7185]" />,
    "Django REST Framework": <SiDjango className="text-[#e11d48]" />,
    FastAPI: <SiFastapi className="text-[#05998b]" />,
    "JavaScript (ES6+)": <SiJavascript className="text-[#f7df1e]" />,
    "React.js": <SiReact className="text-[#61dafb]" />,
    "HTML5 / Semantic Web": <SiHtml5 className="text-[#e34f26]" />,
    "CSS3 / Tailwind CSS": <SiTailwindcss className="text-[#38bdf8]" />,
    PostgreSQL: <SiPostgresql className="text-[#336791]" />,
    MySQL: <SiMysql className="text-[#00758f]" />,
    SQLite: <SiSqlite className="text-[#003b57]" />,
    Redis: <SiRedis className="text-[#dc382d]" />,
    "Git & GitHub": <SiGit className="text-[#f05032]" />,
    Postman: <SiPostman className="text-[#ff6c37]" />,
    Docker: <SiDocker className="text-[#2496ed]" />,
    "Linux / Nginx": <SiLinux className="text-[#fcc624]" />,
  };

  const tabs = ["All", ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-[#0a0c12]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 02. TECHNICAL SKILLS"
          title="Engineered With Modern Tools &amp; Proven Stacks"
          subtitle="A comprehensive toolkit refined to develop resilient, secure, and production-ready applications."
        />

        {/* Tab Filters */}
        <div className="mt-12 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 font-mono text-xs transition-all ${
                activeTab === tab
                  ? "bg-[#e11d48] text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]"
                  : "border border-white/[0.08] bg-[#0d0f15] text-[#94a3b8] hover:border-[#e11d48]/40 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/[0.08] bg-[#0d0f15]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#e11d48]/40 hover:shadow-[0_10px_30px_-10px_rgba(225,29,72,0.15)]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <h3 className="font-display text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e11d48]" />
                  {group.category}
                </h3>
                <span className="font-mono text-xs text-[#94a3b8]">
                  {group.skills.length} Technologies
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 font-medium text-white">
                        <span className="text-base">{iconMap[skill.name] || "•"}</span>
                        {skill.name}
                      </span>
                      <span className="rounded-md border border-white/[0.08] bg-[#141722] px-2 py-0.5 font-mono text-[10px] text-[#fb7185]">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Progress Bar with Crimson Gradient */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#141722]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#e11d48] to-[#fb7185] transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
