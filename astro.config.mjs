// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://aishwarya2510.github.io",
  base: "/portfolio_new",
  output: "static",
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
