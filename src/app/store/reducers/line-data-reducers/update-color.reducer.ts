import {ActionWithPayload} from '../../../interfaces/action.interface';
import {Line} from '../../../interfaces/line.interface';

export function updateColorReducer(state: Line[], action: ActionWithPayload) {
  const positionToChange = state.findIndex(line => line.id === action.payload.id);
  return state.map((line, index) => {
    if (index === positionToChange) {
      line.color = action.payload.color;
      return line;
    }
    return line;
  });
}
