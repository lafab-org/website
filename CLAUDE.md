# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for La Fabrique, a French association. Built with [Eleventy](https://www.11ty.dev/) (SSG) and styled following the [CUBE CSS](https://cube.fyi/) methodology.

## Commands

```bash
npm start        # dev server with watch
npm run build    # production build
```

### Docker (optional)

```bash
docker compose up dev    # dev server at http://localhost:8080 (source mounted as volume)
docker compose up prod   # production build served by nginx at http://localhost:80
```

## Architecture

Eleventy generates static HTML from templates and content files. Output goes to `_site/`.

### CSS — CUBE CSS

Styles are organized in four layers:

- **Composition** — layout primitives (flow, cluster, stack, grid…). No cosmetic styles.
- **Utility** — single-purpose classes generated from a design token scale.
- **Block** — scoped component styles, named after the component (`.card`, `.nav`…).
- **Exception** — overrides using data attributes (`data-variant="inverted"`).

Avoid mixing concerns across layers: a composition class must never set colors, a block must never define layout for its siblings.

### Design tokens

All values (colors, spacing, type scale) are defined as CSS custom properties and consumed by utility classes and blocks. Do not hard-code values.
