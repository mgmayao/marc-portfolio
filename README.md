# Marc Gerald Mayao — Developer Portfolio

A modern, responsive developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- Next.js 15 — App Router, Metadata API for SEO
- TypeScript — strict mode
- Tailwind CSS — custom design tokens (brand gradient, glassmorphism, grid background)
- Framer Motion — scroll-triggered reveals, staggered hero animation, hover interactions
- next-themes — dark/light mode with system preference detection
- lucide-react — icon set

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata, theme provider
    page.tsx           # Composes all sections
    globals.css         # Tailwind layers + custom utilities (glass, gradient text, grid bg)
  components/
    layout/
      Navbar.tsx        # Sticky, scroll-aware navbar with mobile menu
      Footer.tsx
      ThemeProvider.tsx
      ThemeToggle.tsx
    sections/
      Hero.tsx
      About.tsx
      Experience.tsx    # Timeline + "Projects Delivered" cards
      Skills.tsx
      Projects.tsx      # Featured projects grid
      Contact.tsx       # Contact cards + client-side form (mailto)
    ui/
      Container.tsx
      SectionHeading.tsx
      Card.tsx          # Glassmorphism card w/ hover lift + gradient sheen
      Badge.tsx
  data/                 # All content lives here — edit these to update the site
    site.ts
    experience.ts
    projects.ts
    skills.ts
  lib/
    utils.ts            # cn() class-merging helper
  types/
    index.ts
```

## Editing content

All copy lives in `src/data/*.ts` — no need to touch components to update your bio, jobs, projects, or skills.

- `data/site.ts` — name, title, intro, about summary, contact details
- `data/experience.ts` — work history + delivered projects (timeline)
- `data/projects.ts` — featured project cards
- `data/skills.ts` — skill groups/badges

## Contact form

`Contact.tsx` currently opens the visitor's email client via a `mailto:` link on submit. To wire it to a real backend, swap the `handleSubmit` function for a call to a Next.js Route Handler, Formspree, Resend, or similar — the form UI and validation stay the same.

## Resume download

Place your PDF at `public/resume.pdf`. The Hero section's **Download Resume** button already points to `/Marc_Gerald_Mayao_Resume.pdf`.

## Deployment

Deploy directly to [Vercel](https://vercel.com/new) (recommended for Next.js) or any Node-compatible host:

```bash
npm run build
npm run start
```

## Customizing the theme

Design tokens live in `tailwind.config.ts`:
- `colors.brand` / `colors.accent` — the blue → violet → amber gradient
- `colors.ink` — neutral grays used for text/background in both modes
- `backgroundImage.brand-gradient` — the signature gradient used across CTAs, icons, and headings
- `boxShadow.glass` / `.glass` class in `globals.css` — glassmorphism card styling
