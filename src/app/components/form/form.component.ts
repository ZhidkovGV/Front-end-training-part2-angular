import {Component} from '@angular/core';
import {LinesDataService} from '../../services/lines-data.service';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ADD_LINE} from '../../reducers/lineData.reducer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  count$: Observable<number[]>;

  constructor(public linesDataService: LinesDataService, private store: Store<number>) {
    this.count$ = store.pipe(select('lineData'));
  }

  addNewLine(intervalInput: HTMLInputElement) {
    this.linesDataService.addLine(parseInt(intervalInput.value, 10) || 3000);
    this.store.dispatch({type: ADD_LINE, payload: intervalInput.value || 3000});
  }


}
