### News Website Front-End (Prothom Alo–style)

#### Project Setup Process Step By Step

```bash
// Clone this repository
git clone https://github.com/rakeebhasan09/NewsPortal.git

// You need to enter the folder.
cd NewsPortal

// Install Pakeges
npm install

// Run Application
npm run dev
```

---

#### Folder structure

**Root Level**

public/ → Static files like images, favicon, index.html, etc.

src/ → Main source code of the React project

.gitignore → Files/folders to ignore in Git

package.json → Project dependencies and scripts

package-lock.json → Exact versions of installed dependencies

README.md → Project documentation

vite.config.js → Vite configuration file

**Inside src/**

assets/ → Folder to store images, icons, and other static assets.

components/ → Reusable UI components

cards/ → Card components

Footer/ → Footer component(s)

Layouts/ → Layout-related components

FeaturedNews.jsx → Featured news component

LeftSide.jsx → Left sidebar component

RightSide.jsx → Right sidebar component

pages/ → Page-level components for routing

home/ → Home page components

NewsDetails/ → Components for individual news detail pages

routes/ → Route management components (possibly React Router setup)

index.css → Global styles

main.jsx → React app entry point

---

#### Key features

-   Category wise dynamic menu item.
-   Category wise news filtering system.
-   Dynamic news details page.
-   Validated newsletter registration form.

---

Live Link: https://startupmindtechnology.netlify.app/
