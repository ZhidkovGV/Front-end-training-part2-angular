import {ActionWithPayload} from '../interfaces/action.interface';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD_LINE = 'ADD_LINE';
const initialState = [0];

export function counterReducer(state: number[] = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case ADD_LINE:
      return [...state, action.payload];
    case INCREMENT:
      return [...state, action.payload];

    case DECREMENT:
      return state.slice(0, state.length - 1);

    case RESET:
      return [0];

    default:
      return state;
  }
}
