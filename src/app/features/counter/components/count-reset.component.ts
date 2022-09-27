import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterEvents } from '../state/counter.actions';

@Component({
  selector: 'app-counter-reset',
  template: `<button (click)="reset()" class="btn btn-success">Reset</button>`,
})
export class CountResetComponent {
  constructor(private store: Store) {}

  reset() {
    this.store.dispatch(CounterEvents.reset());
  }
}
