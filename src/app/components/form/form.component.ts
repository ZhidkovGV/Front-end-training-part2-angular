import {Component, OnInit} from '@angular/core';
import {Data$Service} from '../../services/data-$.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  emmitClick(intervalInput: HTMLInputElement) {
    this.data$Service.add$(parseInt(intervalInput.value) || 3000);
  }

  constructor(public data$Service: Data$Service) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
