import { useState } from "react";
import { HiOutlineArrowNarrowRight, HiOutlineDownload } from "react-icons/hi";
import { SiPython, SiDjango, SiReact, SiPostgresql } from "react-icons/si";
import { profile, marqueeTech } from "../data/siteData";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:gap-16">
          
          {/* Left Text Column */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#e11d48]/30 bg-[#e11d48]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fb7185] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e11d48]"></span>
              </span>
              <span className="font-mono text-xs font-medium tracking-wider text-[#fb7185] uppercase">
                {profile.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-gradient-crimson relative inline-block">
                {profile.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 font-display text-xl font-medium sm:text-2xl lg:text-3xl text-[#94a3b8]">
              Architecting <span className="text-white font-semibold">Scalable Backends</span> &amp; Modern Web Systems.
            </p>

            {/* Tagline */}
            <p className="mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-[#94a3b8] sm:text-base lg:mx-0">
              {profile.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#be123c] px-7 py-3.5 font-mono text-sm font-semibold text-white shadow-[0_0_25px_rgba(225,29,72,0.45)] transition-all hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(225,29,72,0.7)]"
              >
                <span>Explore Work</span>
                <HiOutlineArrowNarrowRight className="text-lg transition-transform group-hover:translate-x-1.5" />
              </a>

              <a
                href="#contact"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-[#0d0f15]/80 px-7 py-3.5 font-mono text-sm font-medium text-white backdrop-blur-md transition-all hover:border-[#e11d48]/60 hover:bg-[#e11d48]/10 hover:text-[#fb7185]"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href="#about"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.08] px-5 py-3.5 font-mono text-xs text-[#94a3b8] hover:text-white transition-colors"
              >
                <HiOutlineDownload className="text-sm" />
                <span>Quick Bio</span>
              </a>
            </div>

            {/* Developer Stat Highlights */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-4">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    <span className="text-[#fb7185]">{stat.value}</span>
                  </span>
                  <span className="mt-1 font-mono text-[11px] sm:text-xs text-[#94a3b8] uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual / Portrait Column */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
              {/* Artistic Glow Backlight */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#e11d48]/40 via-[#fb7185]/20 to-transparent blur-2xl opacity-70" />

              {/* Geometric Corner Brackets */}
              <div className="pointer-events-none absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-[#e11d48]" />
              <div className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 border-r-2 border-t-2 border-[#fb7185]" />
              <div className="pointer-events-none absolute -left-2 -bottom-2 h-8 w-8 border-l-2 border-b-2 border-[#fb7185]" />
              <div className="pointer-events-none absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 border-[#e11d48]" />

              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0d0f15]/90 p-3 backdrop-blur-xl shadow-2xl">
                
                {/* Image Window */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#141722] to-[#0a0c12]">
                  {profile.heroImage ? (
                    <img
                      src={profile.heroImage}
                      alt={profile.name}
                      onLoad={() => setImgLoaded(true)}
                      className={`h-full w-full object-cover object-top transition-all duration-700 ${
                        imgLoaded ? "scale-100 blur-0" : "scale-105 blur-sm"
                      } hover:scale-105`}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                      <span className="font-display text-5xl font-bold text-[#e11d48]">
                        {profile.initials}
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay for Artistic Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent opacity-80" />

                  {/* Inside bottom caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-white/[0.1] bg-[#07080b]/75 p-2.5 backdrop-blur-md">
                    <div>
                      <p className="font-display text-xs font-semibold text-white">
                        {profile.name}
                      </p>
                      <p className="font-mono text-[10px] text-[#fb7185]">
                        Full-Stack Engineer
                      </p>
                    </div>
                    <span className="rounded-md bg-[#e11d48]/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#fb7185]">
                      Django + React
                    </span>
                  </div>
                </div>

                {/* Floating Tech Badges around frame */}
                <div className="absolute -left-4 top-10 flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#0d0f15]/95 px-3 py-2 shadow-xl backdrop-blur-md animate-float">
                  <SiPython className="text-[#e11d48] text-lg" />
                  <span className="font-mono text-xs font-semibold text-white">Python 3</span>
                </div>

                <div className="absolute -right-4 top-28 flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#0d0f15]/95 px-3 py-2 shadow-xl backdrop-blur-md animate-float [animation-delay:1.5s]">
                  <SiDjango className="text-[#fb7185] text-lg" />
                  <span className="font-mono text-xs font-semibold text-white">Django REST</span>
                </div>

                <div className="absolute -left-3 bottom-20 flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#0d0f15]/95 px-3 py-2 shadow-xl backdrop-blur-md animate-float [animation-delay:3s]">
                  <SiPostgresql className="text-[#336791] text-lg" />
                  <span className="font-mono text-xs font-semibold text-white">PostgreSQL</span>
                </div>

                <div className="absolute -right-3 bottom-12 flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#0d0f15]/95 px-3 py-2 shadow-xl backdrop-blur-md animate-float [animation-delay:4.5s]">
                  <SiReact className="text-[#61dafb] text-lg" />
                  <span className="font-mono text-xs font-semibold text-white">React.js</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Infinite Skills Marquee Ticker */}
      <div className="mt-16 w-full overflow-hidden border-y border-white/[0.06] bg-[#0d0f15]/60 py-3.5 backdrop-blur-sm">
        <div className="animate-marquee flex items-center gap-8 font-mono text-xs text-[#94a3b8] uppercase tracking-wider">
          {marqueeTech.concat(marqueeTech).map((tech, index) => (
            <div key={index} className="flex items-center gap-3 shrink-0">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e11d48]" />
              <span className="hover:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
