import { profile } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="mt-14 grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
          <div className="mx-auto w-56 md:mx-0 md:w-full">
            <div className="aspect-square w-full border border-border bg-surface">
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-display text-6xl text-text-muted/30">
                  {profile.initials}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-balance text-base leading-relaxed text-text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
