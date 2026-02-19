# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Charity & fundraiser website template built with **Next.js 15.5.5** (App Router), **React 19**, **TypeScript**, and **React Bootstrap**. All content is static/hardcoded — no CMS, API, database, or auth.

## Commands

```bash
npm run dev      # Dev server with Turbopack
npm run build    # Production build with Turbopack
npm run start    # Start production server
```

No test runner or linter is configured.

## Path Aliases (tsconfig.json)

```
@/*        → ./src/*
@layout/*  → ./src/layout/*
@css/*     → ./public/assets/css/*
```

## Architecture

### Routing & Pages

Next.js App Router with file-based routing (`src/app/[page]/page.tsx`). Four home page variants exist at `/`, `/index-2`, `/index-3`, `/index-4`. Detail pages (e.g. `/causes-details`, `/event-details`) are currently static, not dynamic routes.

### Page Composition Pattern

Every page wraps its sections in `DanboxLayout`, which selects header/footer variants and initializes global utilities (scroll animations, video popup, lightbox):

```tsx
<DanboxLayout header={1} footer={1}>
  <HeroSlider1 />
  <About1 />
  <Service1 />
</DanboxLayout>
```

### Component Variants

Most components export numbered variants (`About1`, `About2`, `About3`, `About4`) — each is a self-contained section with its own embedded data and layout. Named exports are used, not default exports.

### Styling

Multi-layer system: Bootstrap 5 via React Bootstrap, custom SCSS source in `public/assets/scss/` compiled to `public/assets/css/main.css`, Animate.css for animations, and inline styles for background images. Fonts (DM Sans, Chelsea Market) configured via `next/font` in the root layout with CSS variables `--font-dm-sans` and `--font-chelsea_market`.

### Animations

- **WOW.js**: Scroll-triggered animations via `className="wow fadeInUp"` + `data-wow-delay`. Initialized in `scrollAnimation()` hook (`src/utility/index.ts`). WOW.js is a side-effect module loaded with `require("wowjs")` — the constructor lives on `window.WOW`, not as a module export.
- **Swiper**: Carousel configs defined in `src/utility/sliderProps.ts` with custom animation callbacks.
- **CountUp**: Counter animations triggered by IntersectionObserver.

### State Management

Local React hooks only (`useState`, `useRef`, `useEffect`). No global state library.

## Key Files

- `src/layout/DanboxLayout.tsx` — Main page wrapper (client component), controls header/footer variant selection
- `src/layout/Header.tsx` — 4 header variants with mobile nav state
- `src/layout/Footer.tsx` — 4 footer variants
- `src/utility/index.ts` — Custom hooks: `useStickyHeader()`, `useScrollTop()`, `scrollAnimation()`
- `src/utility/sliderProps.ts` — All Swiper carousel configurations
- `src/app/layout.tsx` — Root layout with global CSS imports and font setup
