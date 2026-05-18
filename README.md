# noahpn

Portfolio of Noah Park-Nguyen — fullstack developer based in Ottawa. Case studies from professional placements, personal projects, and a full breakdown of the dev setup.

→ **[sereneprince.github.io/noahpn](https://sereneprince.github.io/noahpn/)**

## Design

Minimal but not flat. The goal was a site that gets out of the way and lets the content speak — cards for structure, colour only where it earns its place.

Three fonts: Libre Baskerville for headings, DM Sans for body text, DM Mono for labels and metadata. Colour palette built around a warm off-white surface with five semantic accent groups (green for Java, blue for JavaScript/React, teal for databases, purple for infrastructure, amber for tooling). Full dark mode via CSS custom properties — no JavaScript, no flicker.

Cards carry the layout. Dividers are rule-weight lines. Every interactive element uses one of two hover patterns: a colour shift for navigation controls, a slide-in underline for destination links. No other decorative motion. The full tech stack lives behind a full-screen overlay — toggled by React state, with focus management, scroll lock, and escape-to-close.

## Stack

- React 19
- Vite 8
- Tailwind CSS v4
- Google Fonts — DM Sans (body), Libre Baskerville (headings), DM Mono (labels)

## Dev

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build    # compile to dist/
npm run preview  # local preview of the build
npm run deploy   # build + push to gh-pages branch
```

Outputs to `dist/`. Base path is set to `/noahpn/` for GitHub Pages.
