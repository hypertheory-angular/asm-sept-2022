import { createReducer, on } from '@ngrx/store';
import { CounterEvents } from '../counter.actions';
export interface CountState {
  current: number;
}

const initialState: CountState = {
  current: 0,
};

export const reducer = createReducer(
  initialState,
  on(CounterEvents.incremented, incrementState),
  on(CounterEvents.decremented, (s, a) => ({ current: s.current - 1 }))
);

// Named function
function incrementState(state: CountState): CountState {
  return {
    current: state.current + 1,
  } as CountState;
}
