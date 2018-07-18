import {ActionWithPayload} from '../../interfaces/action.interface';
import {Line} from '../../interfaces/line.interface';
import {ADD_LINE, UPDATE_COLOR, UPDATE_POINTS, UPDATE_VISIBILITY} from '../actions';
import {updatePointsReducer} from './line-data-reducers/points-update.reducer';
import {addLineReducer} from './line-data-reducers/add-line.reducer';
import {updateColorReducer} from './line-data-reducers/update-color.reducer';
import {updateVisibilityReducer} from './line-data-reducers/update-visibility.reducer';

const initialState = [];

export function lineDataReducer(state: Line[] = initialState, action: ActionWithPayload) {
  switch (action.type) {
    case ADD_LINE:
      return addLineReducer(state, action);
    case UPDATE_POINTS:
      return updatePointsReducer(state, action);
    case UPDATE_COLOR:
      return updateColorReducer(state, action);
    case UPDATE_VISIBILITY:
      return updateVisibilityReducer(state, action);
    default:
      return state;
  }
}
