import { ArrowUpRight } from "lucide-react";

export function PolicySection() {
  return (
    <section id="policy" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Policy</h2>
        </div>

        <article className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-medium">Zwischen Wunsch und Wirklichkeit: Unter- und Überbeschäftigung am deutschen Arbeitsmarkt</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              with Maximilian Blömer, Johanna Garnitz, Laura Gärtner, and Andreas Peichl — ifo Forschungsberichte 03/2021
            </p>
          </div>

          <a
            href="https://www.ifo.de/sites/default/files/docbase/docs/ifo_Forschungsberichte_119_Arbeitsmarkt.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 self-start px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Published Version <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
}
