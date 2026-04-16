# Portfolio (Next.js)

Personal portfolio built with [Next.js](https://nextjs.org/) (App Router), React, Tailwind CSS v4, and [shadcn/ui](https://ui.shadcn.com/).

## Scripts

- `npm run dev` — start the dev server (Turbopack is the default bundler in Next.js 15+)
- `npm run dev:webpack` — same as `dev`, but forces Webpack if Turbopack HMR or CSS feels flaky locally
- `npm run build` — production build
- `npm run start` — run the production server locally
- `npm run lint` — ESLint (Next core-web-vitals + TypeScript)

Design tokens and theme live in `src/app/globals.css`.

## Local dev: page looks unstyled (HTML only)

Global layout and Tailwind all come from `src/app/globals.css`. If that pipeline fails or HMR serves a bad chunk, the browser shows default fonts and huge inline SVGs until the next good compile.

1. Check the terminal running `dev` for PostCSS / Tailwind “Failed to compile” or errors pointing at `globals.css`.
2. In the browser, DevTools → Network → filter **CSS** — confirm the app stylesheet returns **200** and a normal-sized body (not empty).
3. Try a **hard refresh** (e.g. Cmd+Shift+R). If that fixes it, it was likely a transient HMR or half-saved file state.
4. If it still looks broken, stop the dev server, run `rm -rf .next`, then `npm run dev` again (or try `npm run dev:webpack`).
5. After editing `globals.css`, run **`npm run build`** once; Webpack will fail loudly on CSS syntax issues.
