# FirstNg (Angular demo)

A small Angular 16 demo app showcasing a simple profile UI and parent-child communication between components. Built with Bootstrap and Font Awesome for quick styling and icons.

**Features:**
- Simple responsive profile card (in `AppComponent`)
- Parent-child interaction example (`ParentComponent` + `ChildComponent`)
- Basic pages/components: `HomeComponent`, `AboutComponent`

**Tech stack:**
- Angular 16
- TypeScript
- Bootstrap 5
- Font Awesome

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm start
# or
ng serve
```

Open http://localhost:4200/ in your browser.

## Scripts

- `npm start` / `ng serve` — run dev server
- `npm run build` — build production bundle
- `npm run test` — run unit tests
- `npm run predeploy` — build for production (used before GH Pages deploy)
- `npm run deploy:gh` — deploy `dist/first-ng` to GitHub Pages (requires `angular-cli-ghpages`)

## Project structure (important files)

- `src/app/app.module.ts` — module declarations (App, Home, About, Parent, Child)
- `src/app/app-routing.module.ts` — routing (currently empty)
- `src/app/app.component.html` — main UI and inclusion of `<app-parent>`
- `src/app/parent` — parent component demonstrating event binding and receiving values
- `src/app/child` — child component emitting `valueChange` events
- `src/assets` — contains `Avatar-1.png` and other static assets

## Parent ↔ Child example

The `ChildComponent` exposes an `@Output() valueChange: EventEmitter<string>` and emits input text via `onInput(...)`. `ParentComponent` listens with `(valueChange)="onChildValue($event)"` and displays the received value. See:

- [src/app/child/child.component.ts](src/app/child/child.component.ts#L1)
- [src/app/parent/parent.component.ts](src/app/parent/parent.component.ts#L1)

## Notes

- Routing is currently not configured (empty `routes` array). Add routes in `src/app/app-routing.module.ts` if needed.
- Bootstrap & Font Awesome are added in `package.json` — ensure your global styles import them if you change configuration.

## Next steps / Suggestions

- Add route links and navigation to `AppRoutingModule`.
- Add unit tests for components if required.
- Configure CI to run `npm test` and deploy step for GH Pages.

---
If you want, I can:
- add route examples and a navbar,
- or deploy this to GitHub Pages and update `homepage`/`baseHref` settings. Which would you like next?
