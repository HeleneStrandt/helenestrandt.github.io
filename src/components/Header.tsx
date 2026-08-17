import { useState } from "react";
import { Menu, X } from "lucide-react";
import cvAsset from "@/assets/CV.pdf.asset.json";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-medium tracking-tight text-foreground transition-colors hover:text-primary uppercase"
        >
          HELENE&nbsp;STRANDT
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={cvAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            CV
          </a>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={cvAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-full border border-primary/30 px-4 py-2 text-center text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
