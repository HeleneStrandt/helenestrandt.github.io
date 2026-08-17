export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Helene Strandt
        </p>
        <a
          href="mailto:helene.strandt@econ.lmu.de"
          className="text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          helene.strandt@econ.lmu.de
        </a>
      </div>
    </footer>
  );
}
