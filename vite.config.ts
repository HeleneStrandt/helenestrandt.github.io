// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: set GITHUB_PAGES=true (and BASE_PATH=/<repo-name>/) in CI.
// Normal Lovable builds are unaffected.
const isGitHubPages = process.env["GITHUB_PAGES"] === "true";
const basePath = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  ...(isGitHubPages
    ? {
        vite: { base: basePath },
        nitro: { preset: "static" },
      }
    : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this. The static Pages build uses the default entry.
    ...(isGitHubPages ? {} : { server: { entry: "server" as const } }),
    ...(isGitHubPages
      ? { prerender: { enabled: true, crawlLinks: true }, spa: { enabled: true } }
      : {}),
  },
});
