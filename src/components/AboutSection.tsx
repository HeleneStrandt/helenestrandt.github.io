import portraitAsset from "@/assets/portrait-4x5.jpg.asset.json";

export function AboutSection() {
  return (
    <section id="about" className="pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 overflow-hidden rounded-2xl bg-muted ring-1 ring-border md:w-80">
              <img
                src={portraitAsset.url}
                alt="Portrait of Helene Strandt"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="whitespace-pre-line text-justify text-lg leading-relaxed text-muted-foreground">
              Hi! I am a PhD candidate in economics at the University of Munich.{"\n\n"}
              I design and run experiments on how fragile states can build capacity. My current fieldwork is based in Burundi.{"\n\n"}
              I also study how political disruptions affect cooperation and thereby innovation and firm performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
