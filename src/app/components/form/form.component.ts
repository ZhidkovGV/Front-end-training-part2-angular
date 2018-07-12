import {Component} from '@angular/core';
import {LinesDataService} from '../../services/lines-data.service';
import {select, Store} from '@ngrx/store';
import {ADD_NEW_LINE} from '../../reducers/lineData.reducer';
import {GetInitialColorService} from '../../services/get-initial-color.service';
import {Line} from '../../interfaces/line.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(public linesDataService: LinesDataService, private store: Store<Line[]>, private getColor: GetInitialColorService) {
    this.store.pipe(select('lineData')).subscribe((val) => {
      val.forEach((item) => {
        item.subscribe((value) => console.log(value));
      });
    });
  }

  addNewLine(intervalInput: HTMLInputElement) {
    this.linesDataService.addLine(parseInt(intervalInput.value, 10) || 3000);
    this.store.dispatch({
      type: ADD_NEW_LINE, payload: {
        $interval: intervalInput.value || 3000,
        color: this.getColor.getColor()
      }
    });
  }


}
