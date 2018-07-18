import {ActionWithPayload} from '../../../interfaces/action.interface';
import {Line} from '../../../interfaces/line.interface';

export function updateVisibilityReducer(state: Line[], action: ActionWithPayload) {
  const positionToChange = state.findIndex(line => line.id === action.payload.id);
  return state.map((line, index) => {
    if (index === positionToChange) {
      line.shouldRender = action.payload.shouldRender;
      return line;
    }
    return line;
  });
}
