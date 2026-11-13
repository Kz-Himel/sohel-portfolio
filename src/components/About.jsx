import { useState } from "react";
import { FiServer, FiCode, FiDatabase, FiShield, FiCopy, FiCheck } from "react-icons/fi";
import { profile, coreServices, developerCodeSnippet } from "../data/siteData";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(developerCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const serviceIcons = {
    server: <FiServer className="text-xl text-[#e11d48]" />,
    code: <FiCode className="text-xl text-[#fb7185]" />,
    database: <FiDatabase className="text-xl text-[#e11d48]" />,
    shield: <FiShield className="text-xl text-[#fb7185]" />,
  };

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 01. ABOUT ME"
          title="Bridging Robust Backend Logic With Fluid Interfaces"
          subtitle="A passionate developer driven by clean architecture, database integrity, and high-performance web applications."
        />

        {/* 2-Column Content Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          
          {/* Bio Story & Developer Code Box */}
          <div className="space-y-6">
            <div className="space-y-4 text-balance text-base leading-relaxed text-[#94a3b8] sm:text-lg">
              {profile.about.map((paragraph, i) => (
                <p key={i} className="text-[#94a3b8]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Principles Strip */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-[#0d0f15]/80 p-4">
                <span className="font-mono text-xs text-[#fb7185]">01 / Architecture</span>
                <p className="mt-1 font-display text-sm font-semibold text-white">Clean &amp; Modular Code</p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0d0f15]/80 p-4">
                <span className="font-mono text-xs text-[#e11d48]">02 / Reliability</span>
                <p className="mt-1 font-display text-sm font-semibold text-white">Tested &amp; Secure APIs</p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0d0f15]/80 p-4">
                <span className="font-mono text-xs text-[#fb7185]">03 / Performance</span>
                <p className="mt-1 font-display text-sm font-semibold text-white">Optimized Queries</p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#0d0f15]/80 p-4">
                <span className="font-mono text-xs text-[#e11d48]">04 / Design</span>
                <p className="mt-1 font-display text-sm font-semibold text-white">Artistic &amp; Responsive</p>
              </div>
            </div>

            {/* Interactive Code Terminal */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a0c12] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0f121a] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#e11d48]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#fb7185]/60" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="ml-2 font-mono text-xs text-[#94a3b8]">views.py</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#141722] px-2.5 py-1 font-mono text-[11px] text-[#94a3b8] hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-[#fb7185]" />
                      <span className="text-[#fb7185]">Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-[#f8fafc]/90">
                <code>
                  {developerCodeSnippet}
                </code>
              </pre>
            </div>
          </div>

          {/* Core Services / Capabilities Pillar Cards */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-[#e11d48]">✦</span> What I Bring To The Table
            </h3>

            <div className="grid gap-4">
              {coreServices.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0d0f15]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#e11d48]/50 hover:bg-[#121520] hover:shadow-[0_10px_30px_-10px_rgba(225,29,72,0.25)] hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-[#141722] group-hover:border-[#e11d48]/50 group-hover:bg-[#e11d48]/10 transition-colors">
                      {serviceIcons[service.icon]}
                    </div>
                    <div>
                      <h4 className="font-display text-base font-semibold text-white group-hover:text-[#fb7185] transition-colors">
                        {service.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Prompt */}
            <div className="mt-6 rounded-2xl border border-[#e11d48]/30 bg-gradient-to-r from-[#e11d48]/10 to-transparent p-5 backdrop-blur-md">
              <p className="font-display text-sm font-semibold text-white">
                Interested in collaborating on a project?
              </p>
              <p className="mt-1 text-xs text-[#94a3b8]">
                Open for Django backend roles, REST API contracts, or full-stack web builds.
              </p>
              <a
                href="#contact"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#fb7185] hover:text-white transition-colors"
              >
                <span>Drop a line</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#e11d48]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-sm leading-relaxed text-[#94a3b8] sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
