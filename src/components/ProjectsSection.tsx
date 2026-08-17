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
    preAnalysisPlanUrl: "https://drive.google.com/file/d/14qB0ErTVhaMDX_xp86jrMy-lnuBN-wSQ/view?usp=sharing",
    collaborations: [
      { label: "ACES", url: "https://www.acesecon.org/home" },
      { label: "CRC", url: "https://rationality-and-competition.de/" },
      { label: "CURDES", url: "https://curdes.bi/" },
      { label: "JHS", url: "https://www.joachim-herz-stiftung.de/en/" },
      { label: "LADEC", url: "https://www.ladec.bi/index.php?lang=fr" },
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
      { label: "GCRI-NY", url: "https://www.dwih-newyork.org/en/research-innovation/" },
    ],
  },
  {
    title: "Management Practices and Firm Performance During the Great Recession",
    coAuthors: "with Florian Englmaier,\u00A0Jose E. Galdon-Sanchez, Ricard Gil, & Michael Kaiser —\u00A0under review",
    abstract:
      "This paper empirically examines how management practices affect firm productivity over the business cycle. Using plant-level high-dimensional human resource policies survey data collected in Spain in 2006, we employ unsupervised machine learning to describe clusters of management practices (``management styles''). We establish a positive correlation between structured management and performance prior to the 2008 financial crisis. Interestingly, this correlation turns negative during the financial crisis and positive again in the economic recovery post-2013. Our evidence suggests firms with more structured management are more likely to have practices fostering culture and intangible investments. Through such investments, they focus in long-run profitability, prioritizing innovation over cost reduction, while having higher adjustment costs in the short-run through higher share of fixed assets and lower employee turnover.",
    draftUrl: "https://drive.google.com/file/d/1r8f-sTNmh5unMvE-s0ISY_ZXm9kwRZwD/view?usp=sharing",
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
                <p className="max-w-3xl leading-relaxed text-muted-foreground">
                  {paper.abstract}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
                {"preAnalysisPlanUrl" in paper && paper.preAnalysisPlanUrl && (
                  <a
                    href={paper.preAnalysisPlanUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Pre-Analysis Plan <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
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

              {paper.collaborations.length > 0 && (
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <p className="text-sm font-medium text-foreground">Partners & Funding:</p>
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
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
