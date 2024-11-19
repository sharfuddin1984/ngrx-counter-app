# Counter Component Documentation

## Overview
This component is an Angular counter that integrates with NgRx for state management and uses `localStorage` to persist the counter's value across sessions. It ensures the state is saved when updated and restored on application load.

![Counter Diagram](images/counter-img.png)


---

## Component: `MyCounterComponent`

### Purpose:
- Display and manage a counter with increment, decrement, and reset actions.
- Persist the counter value to `localStorage`.

### Key Features:
1. **Reactive State Management**:
   - The component uses `@ngrx/store` for managing state in a predictable way.
2. **LocalStorage Persistence**:
   - Saves the counter value to `localStorage` whenever it changes.
   - Restores the counter value from `localStorage` on app initialization.

### Code:
```typescript
import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnDestroy {
  count$: Observable<number>;
  private subscription: Subscription;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');

    this.subscription = this.store.select('count').subscribe((count) => {
      localStorage.setItem('counterValue', count.toString());
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}




