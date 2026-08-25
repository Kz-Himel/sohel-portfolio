import { profile } from "../data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-accent animate-fade-up [animation-delay:0ms]">
          Hi, I'm
        </p>

        <h1 className="font-display text-5xl font-semibold tracking-tight text-text sm:text-6xl md:text-7xl animate-fade-up [animation-delay:80ms]">
          {profile.name}
        </h1>

        <p className="mt-5 font-display text-xl text-text-muted sm:text-2xl animate-fade-up [animation-delay:160ms]">
          {profile.title}
          <span className="mx-2 text-border">/</span>
          {profile.subtitle}
        </p>

        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-text-muted sm:text-base animate-fade-up [animation-delay:240ms]">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up [animation-delay:320ms]">
          <a
            href="#projects"
            className="w-full sm:w-auto border border-accent bg-accent px-7 py-3 text-center font-mono text-sm text-bg transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_theme(colors.accent)]"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-border px-7 py-3 text-center font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-widest text-text-muted/70 transition-colors hover:text-accent"
      >
        Scroll
      </a>
    </section>
  );
}
