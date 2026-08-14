import portraitAsset from "@/assets/portrait-4x5.jpg.asset.json";

export function AboutSection() {
  return (
    <section id="about" className="pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-white/10 md:w-80">
              <img
                src={portraitAsset.url}
                alt="Portrait of Helene Strandt"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ich gestalte digitale Produkte mit Fokus auf klare Ideen, minimalistisches Design
              und durchdachte Details. In meiner Arbeit verbinde ich Ästhetik mit Funktion – immer
              mit dem Ziel, etwas Einfaches und Nachhaltiges zu schaffen. Aktuell suche ich neue
              Projekte und spannende Herausforderungen im Bereich Web, Design und digitale Produkte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
