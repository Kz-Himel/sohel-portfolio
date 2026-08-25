import { profile } from "../data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center px-6 pt-24 pb-16 sm:pt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1.4fr_0.6fr] md:gap-12">
        {/* ---- Content side ---- */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent animate-fade-up [animation-delay:0ms]">
            Hi, I'm
          </p>

          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-text sm:text-6xl animate-fade-up [animation-delay:80ms]">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-xl text-text-muted sm:text-2xl animate-fade-up [animation-delay:160ms]">
            {profile.title}
            <span className="mx-2 text-border">/</span>
            {profile.subtitle}
          </p>

          <p className="mx-auto mt-6 max-w-lg text-balance text-sm leading-relaxed text-text-muted sm:text-base md:mx-0 animate-fade-up [animation-delay:240ms]">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start animate-fade-up [animation-delay:320ms]">
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

        {/* ---- Image side ---- */}
        <div className="order-1 md:order-2 animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-square w-28 sm:w-36 md:w-full md:max-w-[190px] lg:max-w-[220px]">
            {/* accent corner frame — signature detail, echoes the card corner dots */}
            <div className="pointer-events-none absolute -left-1.5 -top-1.5 h-6 w-6 border-l border-t border-accent/50 sm:h-8 sm:w-8" />
            <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-6 w-6 border-b border-r border-accent/50 sm:h-8 sm:w-8" />

            <div className="relative h-full w-full overflow-hidden border border-border bg-surface">
              {profile.heroImage ? (
                <img
                  src={profile.heroImage}
                  alt={profile.name}
                  className="h-full w-full object-cover grayscale-[15%]"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-text-muted/30">
                  <span className="font-display text-xl sm:text-2xl">
                    {profile.initials}
                  </span>
                </div>
              )}
            </div>

            {/* floating status chip */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap border border-border bg-bg px-2.5 py-1 font-mono text-[9px] text-text-muted shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] sm:-bottom-3.5 sm:px-3 sm:text-[10px] md:left-3 md:translate-x-0">
              <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-accent align-middle" />
              Available for work
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-widest text-text-muted/70 transition-colors hover:text-accent"
      >
        Scroll
      </a>
    </section>
  );
}