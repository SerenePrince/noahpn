# noahpn

Portfolio of Noah Park-Nguyen — fullstack developer based in Ottawa. Covers case studies from professional work and personal projects built on my own time.

→ **[sereneprince.github.io/noahpn](https://sereneprince.github.io/noahpn/)**

## Design

Minimal but not flat. The goal was a site that gets out of the way and lets the content speak — cards for structure, colour only where it earns its place.

Three fonts: Libre Baskerville for headings, DM Sans for body text, DM Mono for labels and metadata. Colour palette built around a warm off-white surface with five semantic accent groups (green for Java, blue for JavaScript/React, teal for databases, purple for infrastructure, amber for tooling). Full dark mode via CSS custom properties — no JavaScript, no flicker.

Cards carry the layout. Dividers are rule-weight lines. Every interactive element uses one of two hover patterns: a colour shift for navigation controls, a slide-in underline for destination links. No other decorative motion.

## Stack

- React 19
- Vite 6
- Tailwind CSS v4
- Google Fonts — DM Sans (body), Libre Baskerville (headings), DM Mono (labels)

## Dev

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
npm run preview
```

Outputs to `dist/`. Base path is set to `/noahpn/` for GitHub Pages.