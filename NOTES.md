# Project notes

## Brief

A landing page for offering therapy sessions and coaching sessions to private clients.

- **Design source:** imported from claude.ai/design, project `c37d0a93-1c72-446e-a79f-4f152591265b`, file `Therapy Landing Page.dc.html` (via the DesignSync/claude_design tool).
- **Stack:** Astro + TypeScript (strict), Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file — theme tokens live in `src/styles/global.css`'s `@theme` block), ESLint (flat config, typescript-eslint + eslint-plugin-astro), Prettier (+ prettier-plugin-astro, prettier-plugin-tailwindcss), pnpm.
- **Styling:** Tailwind utility classes only — no component-scoped `<style>` blocks. Repeated patterns (eyebrow label, section heading, max-width container) are factored into small Astro components (`Eyebrow.astro`, `SectionHeading.astro`, `Container.astro`) rather than duplicated class strings, per the DRY/reuse-components rules in CLAUDE.md. Per-item dynamic colors (service card tint/icon colors) stay as inline `style` attributes since Tailwind can't generate utilities for runtime data values.
- **Hosting:** GitHub Pages, built and deployed via GitHub Actions (`.github/workflows/deploy.yml`).

## Placeholder content — needs real values before going live

The imported design ships with fictional example content ("Margaret Aldous", "Wren & Hollow",
`margaret@wrenandhollow.com`, `(828) 555-0148`, `calendly.com/example`, Asheville NC). This was
carried over as-is into `src/data/site.ts` rather than guessed at or invented. Before this site
is used for a real client, replace:

- `siteConfig` in `src/data/site.ts` (business name, practitioner name, credential, location,
  email, phone, scheduler URL)
- The two `ImagePlaceholder` slots (hero portrait, about photo) with real photography
- `services`, `processSteps`, `pricingPlans` in the same file, if the real offering differs
- All copy in `src/i18n/messages.json` (both `en` and `de`) if the offering or tone changes

## i18n (English + German)

- All user-facing copy lives in `src/i18n/messages.json`, keyed as `{locale}.{section}.{key}`.
  `src/data/site.ts` holds only locale-independent structural data (ids, prices, colors, contact
  info) — text that used to live there (service/plan/step titles & descriptions) moved into the
  message dictionary, keyed by each item's `id`.
- This is a static GitHub Pages site with no server, so there's no `Accept-Language` header to
  read — language selection is entirely client-side:
  - The server always renders **German** (`DEFAULT_LOCALE` in `src/i18n/config.ts`) into the
    initial HTML, so the page is fully readable with JS disabled.
  - Every translatable element carries a `data-i18n="path.key"` attribute (and `data-i18n-params`
    for interpolated values). `LanguageSwitcher.astro`'s client script walks `[data-i18n]` on load,
    picks a locale (`localStorage` → `navigator.languages` → German fallback), and re-translates
    the DOM in place if it differs from German.
  - The switcher buttons in the header call the same re-translation function and persist the
    choice to `localStorage`.
- Adding a third locale: add the locale code to `SUPPORTED_LOCALES` in `src/i18n/config.ts` and a
  matching top-level key in `messages.json` with every key the `en`/`de` objects have (there's no
  build-time check that all three stay in sync — a missing key throws at render time via `t()`).

## GitHub Pages deployment

- Astro's static output (`output: "static"`, the default) needs no adapter to serve from GitHub
  Pages — the Actions workflow builds to `dist/` and publishes it directly.
- This repo is `jaytee943/landing-page`, not `jaytee943.github.io`, so it deploys as a **project
  site**: `https://jaytee943.github.io/landing-page/`. `astro.config.mjs` sets `site` + `base`
  accordingly.
- GitHub Pages does not support private repositories on the free plan. The repo was **made
  public** (with confirmation) to unblock this — see git/GitHub history around 2026-07-15 if that
  decision needs revisiting. Pages source is set to "GitHub Actions" in repo settings.
- Switching to a custom domain later: drop `base` from `astro.config.mjs`, add a `public/CNAME`
  file, and update DNS.

## Tracking

Work is tracked as GitHub issue [#1](https://github.com/jaytee943/landing-page/issues/1) with
sub-issues #2–#6, all added to the `landing-page` GitHub Project board.
