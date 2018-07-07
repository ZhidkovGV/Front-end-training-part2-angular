import {Component, OnInit} from '@angular/core';
import {Data$Service} from '../../services/data-$.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // <!--SPELLCHECK!!!-->
  emmitClick(intervalInput: HTMLInputElement) {
    this.data$Service.add$(parseInt(intervalInput.value) || 3000); // radix param in parseInt. read why you need it
  }

  constructor(public data$Service: Data$Service) {
  }

  // why
  ngOnInit() {
  }

  // why
  ngOnDestroy() {

  }

}
