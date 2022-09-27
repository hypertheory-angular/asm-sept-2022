import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  current = 0;
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch({ type: 'The user clicked increment' });
  }

  decrement() {
    this.store.dispatch({ type: 'The user clicked decrement' });
  }
}
