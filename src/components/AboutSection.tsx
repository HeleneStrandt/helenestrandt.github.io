export function AboutSection() {
  return (
    <section id="about" className="pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="relative aspect-square w-64 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-white/10 md:w-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-light text-primary/40 md:text-7xl">HS</span>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Hallo, ich bin
            </p>
            <h1 className="mb-6 text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Helene Strandt
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Ich gestalte digitale Produkte mit Fokus auf klare Ideen, minimalistisches Design
              und durchdachte Details. In meiner Arbeit verbinde ich Ästhetik mit Funktion – immer
              mit dem Ziel, etwas Einfaches und Nachhaltiges zu schaffen.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Aktuell suche ich neue Projekte und spannende Herausforderungen im Bereich Web,
              Design und digitale Produkte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
