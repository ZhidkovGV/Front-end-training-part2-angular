import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_NEW_LINE } from '../../store/actions';
import { Line } from '../../interfaces/line.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private store: Store<Line[]>) {
  }

  addNewLine(intervalInput: HTMLInputElement) {
      this.store.dispatch({
      type: ADD_NEW_LINE, payload: {
        inputValue: intervalInput.value,
      }
    });
  }

}
