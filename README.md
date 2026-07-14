# Aishwarya Portfolio

Astro portfolio for AI strategy, product management, experience, projects, personal notes, and a playful connect flow.

## What Is Inside

- `src/pages/home.astro` - project index page.
- `src/pages/experience.astro` - professional experience timeline.
- `src/pages/about.astro` - personal About page with photos and favorites.
- `src/pages/connect.astro` - interactive postcard/contact playground.
- `src/pages/work/` - individual project case-study pages.
- `allprojects/` - raw source material for rebuilding project pages.
- `public/images/` - public images, logos, posters, and project visuals.

## Requirements

- Node.js 20 or newer recommended.
- pnpm 10.x recommended. This repo declares `pnpm@10.33.0`.

Install pnpm if needed:

```bash
npm install -g pnpm
```

## Install

```bash
pnpm install
```

## Run The Local Dev Server

```bash
pnpm dev
```

Astro will print a local URL, usually:

```text
http://localhost:4321/portfolio_new/
```

Because this site uses the Astro `base` path `/portfolio_new`, include `/portfolio_new/` in local URLs.

To expose the dev server on your local network:

```bash
pnpm dev -- --host 0.0.0.0
```

## Build

```bash
pnpm build
```

Static output is written to:

```text
dist/
```

## Preview The Production Build

```bash
pnpm preview
```

Open the URL Astro prints, again using the `/portfolio_new/` base path.

## Validate

```bash
pnpm astro check
```

or:

```bash
pnpm lint
```

## Contact Form Setup

The Connect page uses Formspree when `PUBLIC_FORMSPREE_ENDPOINT` is configured.

Create a local `.env` file:

```bash
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-real-id
```

Without a real endpoint, the page still shows the interactive success animation, but it will not send a real message.

## Adding Project Source Material

Use `allprojects/` as the working folder for raw project material.

Suggested structure:

```text
allprojects/
  my-project/
    preview.html
    images/
    architecture-diagrams/
    raw-content/
```

After a project is designed, copy final public assets into:

```text
public/images/projects/my-project/
```

Then add or update the matching Astro page in:

```text
src/pages/work/my-project.astro
```

and add a card on:

```text
src/pages/home.astro
```

## Image Folders

- `public/images/me/` - About page personal photos.
- `public/images/books/` - About page book covers.
- `public/images/series/` - About page series posters.
- `public/images/movies/` - About page movie posters.
- `public/images/connectlogos/` - Direct channel logos.
- `public/images/experience/logos/` - company logos.
- `public/images/projects/` - project case-study assets.

## Server Feature Notes

The normal app runs with Astro's dev server using:

```bash
pnpm dev
```

There is also server-side visitor persistence code in `src/lib/visitor-server.ts`. It expects a Cloudflare D1 binding named `DB` and is intended for server-rendered/API-backed visitor gallery flows.

At the moment, the deployed portfolio is configured as a static Astro build. To fully enable D1-backed visitor persistence, add the appropriate Astro server adapter, restore or add API routes that call `src/lib/visitor-server.ts`, and bind a Cloudflare D1 database as `DB`.

The expected database tables include:

- `visitors`
- `reports`
- `counters`

## Useful Scripts

```bash
pnpm dev       # Start local development server
pnpm build     # Build static production output
pnpm preview   # Preview production build locally
pnpm check     # Run Astro diagnostics
pnpm lint      # Alias for Astro diagnostics
```

## Deployment

This project is configured with:

```js
site: "https://aishwarya2510.github.io";
base: "/portfolio_new";
```

That means generated links and assets are expected to live under:

```text
https://aishwarya2510.github.io/portfolio_new/
```

If deploying somewhere else, update `site` and `base` in `astro.config.mjs`.
