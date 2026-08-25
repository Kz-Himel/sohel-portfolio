# Sohel Rana — Portfolio

A modern, responsive personal portfolio built with **React**, **Tailwind CSS v4**, and a **Three.js** animated background (a slowly drifting node-graph representing connected full-stack systems).

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-first theme, see `src/index.css`)
- Three.js (`src/components/SceneBackground.jsx`)
- react-icons

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Editing your content

Everything you'll want to change lives in **`src/data/siteData.js`**:

- `profile` — name, title, tagline, about paragraphs, social URLs, email
- `navLinks` — navbar items
- `skillGroups` — skills grouped by category
- `projects` — project cards (name, description, tech, live/GitHub URLs)

Replace the placeholder URLs (`YOUR_FACEBOOK_URL`, etc.) with your real links, and set `profile.profileImage` to an image path to show a real photo in the About section (drop the image into `src/assets/`).

## Design tokens

Colors, fonts, and other design tokens are defined once in `src/index.css` under `@theme`. Change `--color-accent` there to re-theme the whole site with one edit.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SceneBackground.jsx   # Three.js animated background
├── data/
│   └── siteData.js           # all editable content
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

Works out of the box on **Vercel**, **Netlify**, or **GitHub Pages**:

- Build command: `npm run build`
- Output directory: `dist`

## Notes

- The contact form is frontend-only for now (no email is actually sent). Wire it up to a backend or a service like Formspree/EmailJS when you're ready.
- Background animation respects `prefers-reduced-motion`.
