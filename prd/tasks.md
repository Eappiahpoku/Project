# ✅ StudyDock Website – Development Task List

A structured development checklist for building your Vue + TypeScript + Tailwind CSS website.

---

## 🏁 PHASE 1: Project Setup

- [ ] Initialize Vue 3 project with TypeScript using Vite
- [ ] Install and configure Tailwind CSS
- [ ] Set up folder structure: `components/`, `views/`, `Blog/`, `data/`
- [ ] Create router (`router/index.ts`) and configure routes

---

## ✍️ PHASE 2: Content & Layout Components

### `components/common/`

- [ ] `Navigation.vue` – Top nav with links to views
- [ ] `Footer.vue` – Site-wide footer with links and branding

### `components/layout/`

- [ ] `HeroSection.vue` – Catchy introduction to StudyDock
- [ ] `AboutSection.vue` – Preview of About page content
- [ ] `BlogSection.vue` – Preview of latest blog posts
- [ ] `AppSection.vue` – App icons linking to Vercel tools

---

## 🏗️ PHASE 3: Page Views (in `/views`)

- [ ] `HomeView.vue` – Assemble all homepage sections
  - Import: `Navigation`, `HeroSection`, `AboutSection`, `BlogSection`, `AppSection`, `Footer`
- [ ] `AboutView.vue` – Detail the story behind StudyDock
- [ ] `ContactView.vue` – Feedback form (name, email, message)
- [ ] `BlogView.vue` – List all blog previews
- [ ] `TipsView.vue` – General academic tips or FAQ

---

## 📰 PHASE 4: Blog Posts (`/Blog`)

- [ ] `Blog1View.vue` – Article: [Title]
- [ ] `Blog2View.vue` – Article: [Title]
- [ ] `Blog3View.vue` – Article: [Title]
- [ ] `Blog4View.vue` – Article: [Title]
- [ ] `Blog5View.vue` – Article: [Title]

---

## 🧠 PHASE 5: Data Integration

- [ ] `data/blogPosts.ts` – Blog metadata (title, summary, route)
- [ ] `data/appsList.ts` – Name, description, icon, and Vercel URL for tools

---

## 🧪 PHASE 6: Testing & Feedback

- [ ] Test all internal navigation (routes)
- [ ] Test all external app links (Vercel URLs)
- [ ] Mobile + Desktop responsiveness
- [ ] Ask 2–3 students for usability feedback
- [ ] Fix any bugs or visual issues

---

## 🚀 PHASE 7: Deployment & Finalization

- [ ] Push site to GitHub
- [ ] Connect GitHub repo to Vercel and deploy
- [ ] Test the production deployment
- [ ] Write final reflections and document ATL skill use

---

## 📘 Optional Enhancements

- [ ] Add animation with Framer Motion or Vue Transitions
- [ ] Add a loading spinner or progress bar
- [ ] Implement dark mode (Tailwind plugin)

---

## 🧩 Usage Guidelines

- **Primary** (`#2C7865`): Use for headers, active buttons, icons, nav highlights.
- **Accent** (`#A5D6A7`): For cards, section backgrounds, hover effects.
- **Background** (`#F9FAFB`): Keep content areas clean and minimal.
- **Text** (`#1F2937`): Use for all standard readable text.
- **Highlight** (`#FFC971`): Use for call-to-action buttons or important alerts.
- **Secondary Accent** (`#6EC1E4`): Good for subtle decorations, links, or tags.

--
