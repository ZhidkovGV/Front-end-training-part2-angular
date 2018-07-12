import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {ADD_NEW_LINE} from '../../reducers/lineData.reducer';
import {GetInitialColorService} from '../../services/get-initial-color.service';
import {Line} from '../../interfaces/line.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private store: Store<Line[]>, private getColor: GetInitialColorService) {
  }

  addNewLine(intervalInput: HTMLInputElement) {
    this.store.dispatch({
      type: ADD_NEW_LINE, payload: {
        $interval: intervalInput.value || 3000,
        color: this.getColor.getColor()
      }
    });
  }


}
