import {Component} from '@angular/core';
import {LinesDataService} from '../../services/lines-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(public data$Service: LinesDataService) {
  }

  addNewLine(intervalInput: HTMLInputElement) {
    this.data$Service.addLine(parseInt(intervalInput.value, 10) || 3000);
  }


}
