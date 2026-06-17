# Dev Log — Shoe Drive Newsletter App

## Quick Reference
- **Plan mode:** Shift + Tab (2x)
- **Ultrathink:** adds extra token budget for thinking process
- **Start dev server:** `npm run dev` in the terminal
- **Save to GitHub:** `git add .` → `git commit -m "message"` → `git push`

---

## 6/14/26 — 1 hr
- Imported `BrowserRouter` into `main.jsx` to conceptualize the idea of different pages in the app and allow further expansion
- Developed proper routing in `App.jsx` using `<Routes>` and `<Route>`
- Added an About page (`src/pages/About.jsx`)

## 6/15/26 — 1 hr
- Added a Navbar by creating `src/components/Navbar.jsx`, linking it to the other pages, and importing it into `App.jsx` (the main control center)
- Added story pages — clicking a story card navigates to a separate detail page using dynamic routing (`/stories/:id`)

## 6/16/26 — 30 min
- Added navigational features: return home link on story pages, active nav link color shift (`NavLink`), and a Read More toggle button for each story card (`useState`)
