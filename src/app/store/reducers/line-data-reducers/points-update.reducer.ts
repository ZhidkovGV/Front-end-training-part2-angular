import {ActionWithPayload} from '../../interfaces/action.interface';
import {Line} from '../../interfaces/line.interface';

const initialState = [];

export function updatePointsReducer(state: Line[] = initialState, action: ActionWithPayload) {
      const positionToChange = state.findIndex(line => line.id === action.payload.id);
      console.log(state.map((line, index) => {
        return index === positionToChange ? action.payload : line;
      }));
      return state.map((line, index) => {
        return index === positionToChange ? action.payload : line;
      });
}
