import { journeyTimeline } from "../data/siteData";
import { SectionHeading } from "./About";
import { FiBriefcase } from "react-icons/fi";

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 sm:py-36 bg-[#0a0c12]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 04. EXPERIENCE &amp; MILESTONES"
          title="The Developer Journey"
          subtitle="Continuous learning, engineering discipline, and practical execution across the full development lifecycle."
        />

        <div className="relative mt-16 pl-6 sm:pl-10 before:absolute before:bottom-0 before:left-[11px] before:top-3 before:w-[2px] before:bg-gradient-to-b before:from-[#e11d48] before:via-[#fb7185]/40 before:to-transparent sm:before:left-[15px]">
          <div className="space-y-12">
            {journeyTimeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#07080b] bg-[#e11d48] shadow-[0_0_12px_rgba(225,29,72,0.8)] sm:-left-[35px] transition-transform group-hover:scale-125">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* Timeline Card */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#0d0f15]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#e11d48]/40 hover:bg-[#121520] hover:shadow-[0_10px_30px_-10px_rgba(225,29,72,0.15)] sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/[0.06] pb-4">
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#fb7185]">
                        {item.period}
                      </span>
                      <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                        <FiBriefcase className="text-[#e11d48] text-sm shrink-0" />
                        {item.role}
                      </h3>
                    </div>
                    <span className="inline-block w-fit rounded-lg border border-white/[0.08] bg-[#141724] px-3 py-1 font-mono text-xs text-[#94a3b8]">
                      {item.organization}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#94a3b8] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Card Banner */}
        <div className="mt-16 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#0d0f15] via-[#14121b] to-[#0d0f15] p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs text-[#fb7185] uppercase tracking-widest">
                Developer Ethos
              </p>
              <h4 className="mt-1 font-display text-xl font-bold text-white">
                "Simple code is resilient code."
              </h4>
              <p className="mt-2 text-sm text-[#94a3b8] max-w-xl">
                I avoid unnecessary complexity. Every schema, model, and component is designed for maintainability, speed, and real-world clarity.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#be123c] px-6 py-3 font-mono text-xs font-semibold text-white shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all hover:scale-105"
            >
              Start A Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
