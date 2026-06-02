// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://aishwarya2510.github.io",
  base: "/portfolio_new",
  redirects: {
    "/lingofable": { status: 301, destination: "/work/lingofable" },
    "/splunk-case-study": { status: 301, destination: "/work/splunk" },
    "/microsoft-copilot": {
      status: 301,
      destination: "https://www.behance.net/gallery/229681695/Microsoft-x-DCC-SP25",
    },
    "/play": { status: 301, destination: "/home" },
    "/cu-reviews": { status: 301, destination: "/home" },
    "/gcal-wrapped": { status: 301, destination: "/home" },
  },
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
