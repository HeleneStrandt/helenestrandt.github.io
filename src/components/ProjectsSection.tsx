import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const papers = [
  {
    title: "Projekt Alpha",
    coAuthors: "with Anna Müller & Clara Schmidt",
    abstract:
      "Eine minimalistische Web-App zur Visualisierung von Daten. Fokus auf klare Typografie, reduzierte Farben und intuitive Bedienung.",
    draftUrl: "#",
    collaborations: [
      { label: "University X", url: "#" },
      { label: "Lab Y", url: "#" },
    ],
  },
  {
    title: "Projekt Beta",
    coAuthors: "with Laura Weber",
    abstract:
      "Redesign und Entwicklung einer Landing Page für ein digitales Produkt. Ziel war eine schnelle Ladezeit und ein klares Nutzererlebnis.",
    draftUrl: "#",
    collaborations: [
      { label: "Institute Z", url: "#" },
      { label: "Research Group A", url: "#" },
    ],
  },
  {
    title: "Projekt Gamma",
    coAuthors: "with Nora Klein & Pia Hoffmann",
    abstract:
      "Konzeption und Umsetzung eines Design-Systems. Skalierbare Komponenten, konsistente Tokens und barrierefreie Farbgebung.",
    draftUrl: "#",
    collaborations: [
      { label: "Design Collective", url: "#" },
      { label: "Open Source Project", url: "#" },
    ],
  },
];

export function ProjectsSection() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggleAbstract = (title: string) => {
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Research</h2>
        </div>

        <div className="flex flex-col gap-16">
          {papers.map((paper) => (
            <article key={paper.title} className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-medium">{paper.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{paper.coAuthors}</p>
              </div>

              <button
                type="button"
                onClick={() => toggleAbstract(paper.title)}
                aria-expanded={!!open[paper.title]}
                className="self-start rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {open[paper.title] ? "Hide abstract" : "Show abstract"}
              </button>

              {open[paper.title] && (
                <p className="max-w-3xl leading-relaxed text-muted-foreground">
                  {paper.abstract}
                </p>
              )}

              <a
                href={paper.draftUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 self-start rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Draft <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="flex flex-wrap gap-2">
                {paper.collaborations.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
