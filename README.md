# 🌟 Angular Labs — Hands-on Exercises

Welcome! This workspace contains three small Angular labs designed for step‑by‑step learning: a beginner demo, a services-focused lab, and a student-management app that ties concepts together.

Quick links

- [Frt-Ng](Frt-Ng) — Beginner demo
- [Sec-Ng](Sec-Ng) — Services & DI examples
- [Student-Management](Student-Management) — Material + CRUD-style UI

Prerequisites

- Install Node.js (LTS) and npm
- Optionally install the Angular CLI globally: `npm install -g @angular/cli`

Global quick-start (per project)

From the workspace root, pick a project and run:

```bash
cd Frt-Ng
npm install
npm start
```

Repeat for `Sec-Ng` and `Student-Management`.

What each folder teaches

- Frt-Ng — Beginner playground
  - Focus: routing, component communication (parent → child, child → parent), simple templates and styles.
  - Notable folders: `src/app/about`, `src/app/home`, `src/app/parent`, `src/app/child`.
  - Extras: includes a `predeploy` and `deploy:gh` script for publishing to GitHub Pages.

- Sec-Ng — Services & patterns
  - Focus: creating and testing services, dependency injection, sharing data between components.
  - Notable folders: `src/app/services`, plus `child`/`parent` examples to consume services.

- Student-Management — Real-example app
  - Focus: Angular Material integration, components, pipes, services, a students list/detail flow.
  - Notable folders: `src/app/components`, `src/app/material`, `src/app/models`, `src/app/services`, `src/app/pipes`.
  - Live demo & screenshots: see [Student-Management/README.md](Student-Management/README.md) (add `https://student-management-iti.vercel.app/home` and place screenshots at `Student-Management/src/assets/screenshoot`)

Tips & next steps

- Use `npx ng serve --open` if you don't have the CLI installed globally.
- Inspect routing in `src/app/app-routing.module.ts` and module wiring in `src/app/app.module.ts` for each project.
- Want screenshots, live demos, or CI scripts? I can add them per project on request.

Per-project READMEs have been added with feature lists and key file links. Pick a project and I can expand its README with examples, screenshots, and guided exercises.

---

If you want a single command from the workspace root to boot all apps concurrently, I can add an npm workspace and a small script — tell me whether you'd like that.

