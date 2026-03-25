import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapidePlugin from 'starlight-theme-rapide';

export default defineConfig({
  site: "https://kgkswapan.github.io",
  base: "/narramap-docs",
  integrations: [
    starlight({
      title: "Welcome Project Docs",
      description: "Guides, release notes, and workflows for Welcome Project users.",
      plugins: [starlightThemeRapidePlugin()],
      customCss: ['./src/styles/dochub.css'],
      components: {
        Footer: './src/components/DocHubFooter.astro',
      },
      sidebar: [
      {
        label: "Getting started",
        collapsed: false,
        items: [
        { label: "Getting started", slug: "getting-started" },
        { label: "Overview", slug: "getting-started/overview" },
        { label: "Prerequisites", slug: "getting-started/prerequisites" },
        { label: "Create your first project", slug: "getting-started/create-your-first-project" },
        {
          label: "Daily workflow",
          collapsed: false,
          items: [
          { label: "Daily workflow", slug: "getting-started/daily-workflow" },
          { label: "Mapping stories", slug: "getting-started/daily-workflow/mapping-stories" },
          { label: "Planning a release", slug: "getting-started/daily-workflow/planning-a-release" },
          { label: "Collaboration tips", slug: "getting-started/daily-workflow/collaboration-tips" }
          ],
        }
        ],
      }
      ],
    }),
  ],
});
