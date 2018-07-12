import {ActionWithPayload} from '../interfaces/action.interface';
import {Line} from '../interfaces/line.interface';
import {interval} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';
import _ from 'lodash';

export const ADD_NEW_LINE = 'ADD_NEW_LINE';
export const UPDATE_LINE_COLOR = 'UPDATE_LINE_COLOR';
export const UPDATE_LINE_VISIBILITY = 'UPDATE_LINE_VISIBILITY';
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
            acc.id = _.uniqueId('doggy');
          }
          const time = (new Date()).getTime();
          const point = {val, time};
          acc.points.push(point);
          return acc;
        }, {points: []} as Line)
      );
      return [...state, newLine];
    case UPDATE_LINE_COLOR:
      return state;
    case UPDATE_LINE_VISIBILITY:
      return state;
    default:
      return state;
  }
}
