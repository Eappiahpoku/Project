# 📘 MYP Personal Project - Study Techniques Hub PRD

## 🔖 Project Title

Exploring Study Techniques for Academic Success

## 🎯 Learning Goal

To research and present effective, science-backed study techniques in an engaging, easy-to-navigate multi-page website that links to custom-built productivity tools.

## 🌐 Global Context

**Scientific and Technical Innovation** — since the study techniques and productivity tools stem from cognitive science, behavioral psychology, and technical design.

## 🧑‍🎓 Target Audience

Students from primary through tertiary education looking to optimize their study habits with science-based methods and interactive tools.

---

## 🌍 Product Description

### Main Site (Vue + TypeScript + Tailwind CSS)

- Home page hub linking to:
  - Blog posts about study strategies
  - Interactive apps (on separate URLs via Vercel)
  - Overview of some key tips
- Clean, minimalist design using soft pastel colors
- Fully responsive and optimized for mobile and desktop

### Standalone Apps (separate projects on Vercel)

- Pomodoro Timer
- Flashcard Generator
- Focus Mode
- Goal Tracker
- Study Scheduler
- Habit Tracker
- Distraction Tips Page
- Markdown Note App

## 🧭 Website Structure (Pages)

| Page       | Route        | Description                                              |
|------------|--------------|----------------------------------------------------------|
| Home       | `/`          | Displays all major sections & links to standalone tools |
| Study Tips | `/tips`| Some tips to help with learning                     |
| Blog       | `/blog`      | Study strategies & how to use them |
| About      | `/about`     | Why this project matters, your story                    |
| Contact    | `/contact`   | Feedback form                                           |

---

## 🎨 Study Skills Website Color Palette

A calm, focused, and modern palette optimized for academic engagement and digital well-being.

| Purpose               | Color Name         | HEX Code   | Preview |
|-----------------------|--------------------|------------|---------|
| ✅ Primary            | Teal Green         | `#2C7865`  | ![#2C7865](https://via.placeholder.com/15/2C7865/000000?text=+) |
| 🎯 Accent             | Mint Green         | `#A5D6A7`  | ![#A5D6A7](https://via.placeholder.com/15/A5D6A7/000000?text=+) |
| 💭 Background         | Off-White          | `#F9FAFB`  | ![#F9FAFB](https://via.placeholder.com/15/F9FAFB/000000?text=+) |
| 📝 Text (Primary)     | Slate Gray         | `#1F2937`  | ![#1F2937](https://via.placeholder.com/15/1F2937/000000?text=+) |
| 💡 Secondary Accent   | Sky Blue           | `#6EC1E4`  | ![#6EC1E4](https://via.placeholder.com/15/6EC1E4/000000?text=+) |
| 🔆 Highlight / CTA    | Pastel Orange      | `#FFC971`  | ![#FFC971](https://via.placeholder.com/15/FFC971/000000?text=+) |

---

## Component and File Structure

/studydock  
├── public/  
│ └── favicon.ico  
├── src/  
│ ├── assets/ # Images, icons, etc.  
│ ├── components/  
│ │ ├── common/  
│ │ │ ├── Navigation.vue # Top navigation bar  
│ │ │ └── Footer.vue # Footer  
│ │ └── layout/  
│ │ ├── HeroSection.vue # Home intro section  
│ │ ├── AboutSection.vue # Home preview of About  
│ │ ├── BlogSection.vue # Home preview of Blogs  
│ │ └── AppSection.vue # Home preview of external apps  
│ ├── views/ # Route views  
│ │ ├── HomeView.vue # Main homepage (assembles all sections)  
│ │ ├── AboutView.vue # Full About page  
│ │ ├── ContactView.vue # Contact / Feedback form  
│ │ ├── BlogView.vue # Blog post list page  
│ │ └── TipsView.vue # General study tips page  
│ | ├── Blog/ # Individual blog post pages  
│ │     ├── Blog1View.vue  
│ │     ├── Blog2View.vue  
│ │     ├── Blog3View.vue  
│ │     ├── Blog4View.vue  
│ │     └── Blog5View.vue  
│ ├── router/  
│ │ └── index.ts # Vue Router setup  
│ ├── App.vue  
│ └── main.ts  
├── tailwind.config.js  
├── tsconfig.json  
├── vite.config.ts  
└── package.json
