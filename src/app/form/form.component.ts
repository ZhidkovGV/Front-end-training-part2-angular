import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() addNew$: EventEmitter<number> = new EventEmitter();

  emmitClick(intervalInput :HTMLInputElement) {
    this.addNew$.emit(parseInt(intervalInput.value))
  }
  constructor() { }

  ngOnInit() {
  }

}
