import {Scales} from '../../interfaces/scales.interface';
import {ActionWithPayload} from '../../interfaces/action.interface';
import {COUNT_SCALES} from '../actions';
import {scaleLinear} from 'd3-scale';
import {max, min} from 'd3-array';
import {Line} from '../../interfaces/line.interface';

const initialState = {} as Scales;

export function scalesCountReducer(state: Scales = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case COUNT_SCALES:
      return {
        x: scaleLinear()
          .domain([min(action.payload.lines as Line[], (line) => min(line.points, (point) => point.time)),
            max(action.payload.lines as Line[], (line) => max(line.points, (point) => point.time))])
          .range([0, action.payload.svgWidth]),
        y: scaleLinear()
          .domain([min(action.payload.lines as Line[], (line) => min(line.points, (point) => point.val)),
            max(action.payload.lines as Line[], (line) => max(line.points, (point) => point.val))])
          .range([0, action.payload.svgHeight])
      };
    default:
      return state;
  }
}
