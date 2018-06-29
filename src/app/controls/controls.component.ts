import { Component, OnInit } from '@angular/core';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  interval: number;
  provideIntervalInfo(interval: number) {
    this.interval = interval;
    console.log(this.interval)
  }
  constructor() { }

  ngOnInit() {
  }

}
