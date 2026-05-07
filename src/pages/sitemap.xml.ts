import type { APIRoute } from "astro";

// Static sitemap for the portfolio. Listed pages are the durable, indexable
// routes; /api, /admin, /onboarding, and per-visitor pages are excluded.
const SITE = "https://aishwarya-portfolio.com";

const routes = [
  { path: "/", priority: "0.8" },
  { path: "/home", priority: "1.0" },
  { path: "/experience", priority: "0.9" },
  { path: "/about", priority: "0.9" },
  { path: "/connect", priority: "0.8" },
  { path: "/work/lingofable", priority: "0.8" },
  { path: "/work/splunk", priority: "0.8" },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${SITE}${r.path}</loc><lastmod>${lastmod}</lastmod><priority>${r.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
};
