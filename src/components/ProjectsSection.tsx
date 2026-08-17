import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const papers = [
  {
    title: "Informal Justice and the State",
    coAuthors: "ongoing data collection in Burundi",
    abstract:
      "This paper examines how access to the state's justice institution affects citizens' incentives to monitor an existing communal justice institution—the Village Court. I conduct a field experiment in Burundi that exogenously corrects beliefs about the financial accessibility of state justice. Access to the state in future disputes makes social sanctions associated with speaking out to Village Court judges less punitive, thereby complementing incentives to monitor them. However, access to the state enables litigants to secure outcomes that community members might otherwise achieve through monitoring. Citizens may therefore refrain from speaking out, expecting litigants to rely on the state institution instead. Such substitution, particularly by citizens aligned with the state's jurisprudence, would undermine the state's efforts to build legal capacity. I further test whether the state can mitigate such a low-capacity trap by mobilizing financial resources from citizens. If citizens are unwilling to finance state justice, a pragmatic state may rationally refrain from duplicating services already provided by the Village Court, thereby nuancing the notion of state weakness.",
    draftUrl: "https://www.socialscienceregistry.org/trials/18022",
    draftLabel: "AEA Registration",
    collaborations: [
      { label: "CURDES", url: "https://curdes.bi/" },
      { label: "LADEC", url: "https://www.ladec.bi/index.php?lang=fr" },
      { label: "ACES", url: "https://www.acesecon.org/home" },
      { label: "CRC", url: "https://rationality-and-competition.de/" },
      { label: "JHS", url: "https://www.joachim-herz-stiftung.de/en/" },
      { label: "PPA", url: "https://www.predictive-people-analytics.net/" },
    ],
  },
  {
    title: "From Friends to Foes: Identity and Knowledge Exchange",
    coAuthors: "with Nadzeya Laurentsyeva —\u00A0under review",
    abstract:
      "Do identity concerns disrupt the exchange of ideas and, in turn, technological progress? This paper isolates the negative effect of identity-based polarization on user collaborations and the quality of open-source software on GitHub. We exploit the eruption of conflict between Russia and Ukraine in 2014, which induced a sharp deterioration in sentiment between Russians and Ukrainians while leaving access to GitHub's digital infrastructure intact. Conflict-induced identity concerns led to a decline in contributions between Russian and Ukrainian GitHub users, particularly when ethnic identity signals were salient. Projects that had relied on Russian-Ukrainian collaboration subsequently attract fewer contributions and lower downstream usage.",
    draftUrl: "https://drive.google.com/file/d/15PHz53e3O72AKL3LzAS619cAq7sEHWP3/view?usp=sharing",
    githubUrl: "#",
    collaborations: [
      { label: "bidt", url: "https://en.bidt.digital/" },
      { label: "DFG", url: "https://www.dfg.de/en" },
      { label: "LMU-NYU-RCP", url: "https://www.lmu.de/en/about-lmu/international-network/lmu-nyu-research-cooperation-program/" },
    ],
  },
  {
    title: "Management Practices and Firm Performance During the Great Recession",
    coAuthors: "with Florian Englmaier,\u00A0Jose E. Galdon-Sanchez, Ricard Gil, & Michael Kaiser —\u00A0under review",
    abstract:
      "Konzeption und Umsetzung eines Design-Systems. Skalierbare Komponenten, konsistente Tokens und barrierefreie Farbgebung.",
    draftUrl: "#",
    collaborations: [],
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
                className="self-start px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                Show/Hide abstract
              </button>

              {open[paper.title] && (
                <p className="max-w-3xl text-justify leading-relaxed text-muted-foreground">
                  {paper.abstract}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                <a
                  href={paper.draftUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                >
                  {"draftLabel" in paper ? (paper as any).draftLabel : "Draft"} <ArrowUpRight className="h-4 w-4" />
                </a>
                {"githubUrl" in paper && paper.githubUrl && (
                  <a
                    href={paper.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                  >
                    GitHub Repo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {paper.collaborations.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {link.label} <ArrowUpRight className="h-4 w-4" />
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
