import { profile } from "../data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center px-6 pt-24 pb-16 sm:pt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-10">
        {/* Content side */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Hi, I'm</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-text sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-xl text-text-muted sm:text-2xl">
            {profile.title}
            <span className="mx-2 text-border">/</span>
            {profile.subtitle}
          </p>
          <p className="mx-auto mt-6 max-w-lg text-balance text-sm leading-relaxed text-text-muted sm:text-base md:mx-0">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a href="#projects" className="w-full sm:w-auto border border-accent bg-accent px-7 py-3 text-center font-mono text-sm text-bg transition-transform hover:-translate-y-0.5">
              View My Projects
            </a>
            <a href="#contact" className="w-full sm:w-auto border border-border px-7 py-3 text-center font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent">
              Contact Me
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm md:max-w-none">
            <div className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 border-l border-t border-accent/50" />
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-accent/50" />
            <div className="relative h-full w-full overflow-hidden border border-border bg-surface">
              {profile.heroImage ? (
                <img src={profile.heroImage} alt={profile.name} className="h-full w-full object-cover grayscale-[15%]" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-text-muted/30">
                  <span className="font-display text-7xl">{profile.initials}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted/50">Add your photo</span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap border border-border bg-bg px-4 py-2 font-mono text-[11px] text-text-muted shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] md:left-6 md:translate-x-0">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
              Available for work
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-widest text-text-muted/70 transition-colors hover:text-accent">
        Scroll
      </a>
    </section>
  );
}