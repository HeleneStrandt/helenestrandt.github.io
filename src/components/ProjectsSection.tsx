import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Projekt Alpha",
    description:
      "Eine minimalistische Web-App zur Visualisierung von Daten. Fokus auf klare Typografie, reduzierte Farben und intuitive Bedienung.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Projekt Beta",
    description:
      "Redesign und Entwicklung einer Landing Page für ein digitales Produkt. Ziel war eine schnelle Ladezeit und ein klares Nutzererlebnis.",
    tags: ["Design", "Next.js", "Figma"],
    link: "#",
  },
  {
    title: "Projekt Gamma",
    description:
      "Konzeption und Umsetzung eines Design-Systems. Skalierbare Komponenten, konsistente Tokens und barrierefreie Farbgebung.",
    tags: ["Design System", "UI", "Documentation"],
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Research</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mb-6 leading-relaxed text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
