// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://meganyap.me",
  output: "static",
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
