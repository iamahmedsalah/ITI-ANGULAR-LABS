# Angular Labs (workspace)

This workspace contains three small Angular lab projects used for learning and exercises.

Prerequisites:
- Install Node.js and npm
- (Optional) Install the Angular CLI: `npm install -g @angular/cli`

Projects:

- **Frt-Ng**: [Frt-Ng](Frt-Ng) — A beginner Angular lab demonstrating routing, basic components, and parent/child communication. Key folders: `src/app/about`, `src/app/home`, `src/app/parent`, `src/app/child`.
  - Run:
    - `cd Frt-Ng`
    - `npm install`
    - `npm start` (runs `ng serve`)
  - Build / deploy:
    - `npm run build`
    - For GitHub Pages: `npm run predeploy` then `npm run deploy:gh` (project includes `angular-cli-ghpages`).

- **Sec-Ng**: [Sec-Ng](Sec-Ng) — A second lab focusing on services and dependency injection plus component examples. Key folder: `src/app/services` and `src/app/child`, `src/app/parent`.
  - Run:
    - `cd Sec-Ng`
    - `npm install`
    - `npm start`

- **Student-Management**: [Student-Management](Student-Management) — A more complete app demonstrating components, Angular Material integration, pipes, services, and a simple students management UI. Key folders: `src/app/components`, `src/app/material`, `src/app/models`, `src/app/services`, `src/app/pipes`.
  - Run:
    - `cd Student-Management`
    - `npm install`
    - `npm start`

Notes and tips:
- Each project is a standalone Angular app. Run `npm install` inside the project folder before `npm start`.
- If you prefer the Angular CLI directly: from a project folder run `npx ng serve --open`.
- To inspect routing or module wiring, see the project's `src/app/app-routing.module.ts` and `src/app/app.module.ts` files.

If you'd like, I can:
- Add example screenshots for each app
- Add per-project README files with more detailed walkthroughs and important file links
- Create npm workspace scripts to run multiple projects from the repo root

Tell me which of the above you'd like next.
