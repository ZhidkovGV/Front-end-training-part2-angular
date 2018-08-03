import {ActionWithPayload} from '../../../interfaces/action.interface';
import {Line} from '../../../interfaces/line.interface';

export function addLineReducer(state: Line[], action: ActionWithPayload) {
  return [...state, action.payload];
}
