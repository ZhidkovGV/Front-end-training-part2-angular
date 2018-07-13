import {ActionWithPayload} from '../interfaces/action.interface';
import {Line} from '../interfaces/line.interface';
import {interval} from 'rxjs';
import {map, scan, share, startWith} from 'rxjs/operators';

export const ADD_NEW_LINE = 'ADD_NEW_LINE';
export const UPDATE_LINE = 'UPDATE_LINE';

const initialState = [];

export function lineDataReducer(state: Line[] = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case ADD_NEW_LINE:
      const newLine = interval(action.payload.$interval).pipe(
        startWith({} as Line),
        map(() => Math.random()),
        scan((acc, val: number) => {
          if (acc.points.length < 1) {
            acc.color = action.payload.color;
            acc.shouldRender = true;
            acc.id = state.length;
          }
          const time = (new Date()).getTime();
          const point = {val, time};
          acc.points = [...acc.points, point];
          return acc;
        }, {points: []} as Line),
        share()
      );
      return [...state, newLine];
    case UPDATE_LINE:
      const colorUpdatedLine = interval(action.payload.$interval).pipe(
        startWith({} as Line),
        map(() => Math.random()),
        scan((acc, val: number) => {
          if (acc.points.length < 1) {
            acc.color = action.payload.color;
            acc.shouldRender = action.payload.shouldRender;
            acc.id = action.payload.id;
            acc.points = action.payload.points;
          }
          const time = (new Date()).getTime();
          const point = {val, time};
          acc.points = [...acc.points, point];
          return acc;
        }, {points: []} as Line),
        share()
      );
      return [...state.slice(0, action.payload.id), colorUpdatedLine, ...state.slice(action.payload.id + 1)];
    default:
      return state;
  }
}
