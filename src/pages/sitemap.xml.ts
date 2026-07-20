import type { APIRoute } from "astro";

// Static sitemap for the portfolio. Listed pages are the durable, indexable
// routes; /api, /admin, /onboarding, and per-visitor pages are excluded.
const SITE = "https://aishwarya2510.github.io";
const BASE = "/portfolio_new";

const routes = [
  { path: "/", priority: "0.8" },
  { path: "/home/", priority: "1.0" },
  { path: "/experience/", priority: "0.9" },
  { path: "/about/", priority: "0.9" },
  { path: "/connect/", priority: "0.8" },
  { path: "/not-instagram/", priority: "0.2" },
  { path: "/work/agent-maestro/", priority: "0.9" },
  { path: "/work/ai-valueops/", priority: "0.9" },
  { path: "/work/ai-pilot-to-scale/", priority: "0.9" },
  { path: "/work/ai-operating-discipline/", priority: "0.9" },
  { path: "/work/spotify-feature-breakdown/", priority: "0.9" },
  { path: "/work/duolingo-growth-experiment/", priority: "0.9" },
  { path: "/work/notion-onboarding-audit/", priority: "0.9" },
  { path: "/work/linkedin-prd/", priority: "0.9" },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${SITE}${BASE}${r.path}</loc><lastmod>${lastmod}</lastmod><priority>${r.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
};
