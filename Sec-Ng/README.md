# Sec-Ng — Services & Patterns Lab

Short: Exercises that focus on Angular services, dependency injection, and sharing state between components.

Why open this

- Shows how to create and register services
- Demonstrates using a service to share data and logic across components

Key folders and files

- `src/app/services` — Service implementations and specs
- `src/app/parent` / `src/app/child` — Consumer components for the services
- `package.json` — standard `start`, `build`, `test` scripts

Run locally

```bash
cd Sec-Ng
npm install
npm start
```

Notes

- Use this project to practice writing unit tests for services and mocking dependencies.
- Check `src/app/services/services.service.spec.ts` for test examples.
# DataService (Sec-Ng)

Tiny documentation for the DataService used in the Sec-Ng demo app.

## Purpose

DataService provides a simple in-memory list of Person items as an RxJS observable and helpers to add items and clear the list. It's provided in the root injector so any component can subscribe or modify the shared data.

## Public API

- `readonly data$`: `Observable<Person[]>` — stream of current items.
- `addItem(item: Person)`: `void` — append an item to the list.
- `clear()`: `void` — remove all items (emits `[]`).

## Person type

```ts
interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
}
```

## Usage example (component)

Inject the service and interact with it. The template can use the `async` pipe to display `data$`.

```ts
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({ /* ... */ })
export class ParentComponent {
  data$ = this.dataService.data$;

  constructor(private dataService: DataService) {}

  addSample() {
    this.dataService.addItem({ id: Date.now(), name: 'Alice', age: 30, email: 'a@a.com' });
  }

  clearAll() {
    this.dataService.clear();
  }
}
```

Template snippet:

```html
<button (click)="addSample()">Add</button>
<button (click)="clearAll()">Clear</button>

<table>
  <tr *ngFor="let p of data$ | async">
    <td>{{p.id}}</td>
    <td>{{p.name}}</td>
  </tr>
</table>
```

## Notes

- `DataService` uses a `BehaviorSubject` so subscribers always receive the latest array on subscription.
- This is an in-memory store and not persisted; restart or reload clears the data unless you add persistence.
- The service is `providedIn: 'root'` so the same instance is shared across the app.

## Testing

You can test components by mocking `DataService` or injecting the real service and using `fakeAsync`/`tick` to assert emissions from `data$`.
