import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {map, mergeMap, startWith} from 'rxjs/operators';
import {ADD_LINE, ADD_NEW_LINE, UPDATE_POINTS} from '../actions';
import {ActionWithPayload} from '../../interfaces/action.interface';
import {CreateLineService} from '../../services/create-line.service';
import _ from 'lodash';
import {GetInitialColorService} from '../../services/get-initial-color.service';

@Injectable()
export class AddNewLine {
  constructor(private action$: Actions, private createLineService: CreateLineService, private colorService: GetInitialColorService) {
  }

  @Effect()
  newLine$ = this.action$.ofType(ADD_NEW_LINE).pipe(
    mergeMap((action: ActionWithPayload) => {
      const id = _.uniqueId();
      const color = this.colorService.getColor();
      return this.createLineService.createLine(action.payload, id).pipe(
        map(line => ({type: UPDATE_POINTS, payload: {points: line.points, id: line.id}})),
        startWith({type: ADD_LINE, payload: {id, points: [], color: color, shouldRender: true}})
      );
    })
  );
}
