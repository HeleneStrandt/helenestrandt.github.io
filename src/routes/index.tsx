import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Helene Strandt – Portfolio & CV" },
      { name: "description", content: "Minimalistisches Portfolio und Lebenslauf von Helene Strandt." },
      { property: "og:title", content: "Helene Strandt – Portfolio & CV" },
      { property: "og:description", content: "Minimalistisches Portfolio und Lebenslauf von Helene Strandt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
