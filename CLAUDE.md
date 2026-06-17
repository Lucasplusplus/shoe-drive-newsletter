# Shoe Drive Newsletter App

A React web app for the **Shoes for The Homeless Youth Ambassadors Program** newsletter. It displays story accounts of youth-led shoe drives in different communities.

## About the Developer
- High school student learning React for the first time
- Cares a lot about clean, beautiful UI
- **Important:** Do not write or edit code unless explicitly asked. Explain concepts, let the user write the code, then review/correct what they wrote. This is a learning process.

## Tech Stack
- React 19 + Vite
- react-router-dom (for routing/navigation)
- Plain CSS (using CSS variables for theming, supports dark mode)
- No backend — data is currently hardcoded in `src/data/stories.js`

## Project Structure
```
src/
├── App.jsx               # Route definitions (/, /about, /stories/:id)
├── App.css               # Page layout styles (header, story grid, active nav)
├── index.css             # Global styles, CSS variables, dark mode
├── main.jsx              # Entry point, wraps app in BrowserRouter + StrictMode
├── components/
│   ├── Navbar.jsx        # Nav bar with NavLink to / and /about
│   ├── StoryCard.jsx     # Reusable card component with Read More toggle (useState)
│   └── StoryCard.css     # Card styles (hover animation, grid item layout)
├── pages/
│   ├── Home.jsx          # Homepage — header + story card grid
│   ├── About.jsx         # About the Program page (placeholder content)
│   └── StoryPage.jsx     # Individual story page, reads :id from URL via useParams
└── data/
    └── stories.js        # Placeholder story data (array of objects)
```

## Development Roadmap
- [x] Step 1 — Core data & static content (story cards, placeholder data)
- [x] Step 2 — Navigation & layout (React Router, navbar, story detail pages)
- [x] Step 3 — Core interactivity (useState Read More toggle, NavLink highlighting)
- [ ] Step 4 — Visual polish (styled navbar, story detail page, typography, hero section)
- [ ] Step 5 — Real data (replace placeholder stories with actual shoe-drive content)
- [ ] Step 6 — Responsiveness & accessibility pass
- [ ] Step 7 — Deployment (Vercel or Netlify)

## Key Concepts Covered So Far
- JSX and components
- Props and destructuring
- `.map()` for rendering lists
- `key` prop for list items
- CSS variables and theming
- React Router: `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`
- `useParams` hook for reading URL parameters
- `useState` hook for local component state
- Default vs named exports/imports
- JSX comment syntax `{/* */}`
- Template literals in JSX

## Running Locally
```
npm run dev
```
Then open http://localhost:5173/

## Notes
- CSS variables are defined in `index.css` — change colors there to update the whole app
- Dark mode is supported automatically via `prefers-color-scheme`
- Story cards have a hover lift animation (defined in `StoryCard.css`)
- The Read More toggle on cards may be removed during polish step
- The Back to Home link on StoryPage may be removed during polish step (navbar already has Home)
