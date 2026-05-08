import type { APIRoute } from "astro";
import { workProjects } from "../lib/work-projects";
import { withBase } from "../lib/paths";

// Static sitemap for the portfolio. Listed pages are the durable, indexable
// routes for the static portfolio.
const SITE = "https://aishwarya2510.github.io";

const routes = [
  { path: "/", priority: "0.8" },
  { path: "/home", priority: "1.0" },
  { path: "/experience", priority: "0.9" },
  { path: "/about", priority: "0.9" },
  { path: "/connect", priority: "0.8" },
  ...workProjects.map((project) => ({ path: `/work/${project.slug}`, priority: "0.8" })),
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${new URL(withBase(r.path), SITE).href}</loc><lastmod>${lastmod}</lastmod><priority>${r.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
};
