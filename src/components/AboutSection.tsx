import { FileText, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/portrait-4x5.jpg";

export function AboutSection() {
  return (
    <section id="about" className="pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 overflow-hidden rounded-2xl bg-muted ring-1 ring-border md:w-80">
              <img
                src={portrait}
                alt="Portrait of Helene Strandt"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
              Hi! I am an economist at the Economics Department and the Center for Organizational Research and Evidence at the University of Munich.{"\n\n"}
              I design and run experiments on how fragile states can build capacity. My current fieldwork is based in Burundi.{"\n\n"}
              I also study how political disruptions reshape cooperative behavior and, in turn, affect open-source innovation and organizational performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/helene-strandt-235423131/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/HeleneStrandt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:helene.strandt@econ.lmu.de"
                className="inline-flex items-center gap-2 px-0 py-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
