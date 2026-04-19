# Student-Management — Material + CRUD-style UI

Short: A small, practical app that ties Angular concepts together: components, services, pipes, and Angular Material.

Why open this

- Demonstrates a realistic app structure and UI patterns
- Useful examples of component composition, pipes, and service-driven data flows

Key folders and files

- `src/app/components` — Feature components (students list, table, details, add form)
- `src/app/material` — Angular Material module imports and theming
- `src/app/models/student.model.ts` — Student data shape
- `src/app/services/students.service.ts` — Data access and business logic
- `src/app/pipes/filter-students.pipe.ts` — Example of a custom pipe

Run locally

```bash
cd Student-Management
npm install
npm start
```

Notes

- Ideal for practicing: form validation, Material dialogs, and table filtering/sorting.
- Add a mock backend (JSON server) if you want to test CRUD flows without changing the app.

Live demo & screenshots

- Live demo: [https://student-management-iti.vercel.app/home](https://student-management-iti.vercel.app/home)

- Screenshots (place images under `src/assets/screenshoot` with these names):

	- `home.png` — app dashboard
	- `students.png` — students list view

	Example Markdown to display them:

	```md
	![Dashboard](src/assets/screenshoot/home.png)
	![Students list](src/assets/screenshoot/students.png)
	```

# Student Management (Simple)

A minimal Angular lab app to manage students — list, add, view, and delete.

Quick Start

1. Install dependencies:

```bash
npm install
```

2. Run the app (dev server):

```bash
npm start
```

Open http://localhost:4200

Commands

- `npm start` — start dev server
- `npm test` — run tests
- `npm run build` — production build

What it contains

- Simple student list with a filter
- Add-student dialog and student details view
- Confirmation dialog for deletes
- Uses Angular Material components

Key files

- `src/app/components/students` — main list page
- `src/app/components/add-student` — add form/dialog
- `src/app/components/student-details` — details view
- `src/app/services/students.service.ts` — data operations
- `src/app/models/student.model.ts` — student type

Notes for developers

- Add new components under `src/app/components` and wire routes in `app-routing.module.ts`.
- Styling lives in component CSS files and `src/styles.css`.
- Replace or extend `StudentsService` to connect to a backend API.

Need more?

If you want, I can add example screenshots, component docs, or CI instructions.

# StudentManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
