import { X, Download, Mail, MapPin, Calendar } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const experience = [
  {
    role: "Senior Digital Designer",
    company: "Musteragentur GmbH",
    period: "2022 – heute",
    description:
      "Konzeption und Umsetzung von digitalen Produkten, Websites und Design-Systemen für verschiedene Kund:innen.",
  },
  {
    role: "UX / UI Designer",
    company: "Beispiel Startup",
    period: "2019 – 2022",
    description:
      "Verantwortlich für das Produkt-Design, User Research und die Entwicklung skalierbarer UI-Komponenten.",
  },
];

const education = [
  {
    degree: "B.A. Kommunikationsdesign",
    school: "Hochschule für Gestaltung",
    period: "2015 – 2019",
  },
];

export function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:items-center md:p-8">
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl md:max-h-[calc(100vh-4rem)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-title"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-card px-6 py-4">
          <h2 id="cv-title" className="text-xl font-medium">
            Lebenslauf
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Speichern</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto p-6 md:max-h-[calc(100vh-12rem)] md:p-10">
          <div className="mb-10">
            <h1 className="mb-2 text-3xl font-medium">Helene Strandt</h1>
            <p className="mb-4 text-lg text-muted-foreground">
              Digital Product Designer & Webentwicklerin
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-primary" />
                hello@helenestrandt.de
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                Berlin
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                2026
              </span>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Berufserfahrung
            </h3>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.role} className="border-l-2 border-primary/30 pl-4">
                  <div className="mb-1 flex flex-col justify-between sm:flex-row sm:items-center">
                    <h4 className="font-medium">{item.role}</h4>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="mb-2 text-sm text-primary">{item.company}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Ausbildung
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="border-l-2 border-primary/30 pl-4">
                  <div className="mb-1 flex flex-col justify-between sm:flex-row sm:items-center">
                    <h4 className="font-medium">{item.degree}</h4>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.school}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Sprachen
            </h3>
            <p className="text-sm text-muted-foreground">Deutsch (Muttersprache), Englisch (fließend)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
