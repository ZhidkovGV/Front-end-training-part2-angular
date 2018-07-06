import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {Point} from '../../interfaces/point.interface';
import {Line} from '../../interfaces/line.interface';

@Component({
  selector: 'app-line-control',
  templateUrl: './line-control.component.html',
  styleUrls: ['./line-control.component.css']
})
export class LineControlComponent implements OnInit, AfterContentInit {
  @Input() lineParams: Line;

  constructor() {
  }
  lineVisibilityChanged(visibilityCheckbox: HTMLInputElement) {
    console.log(visibilityCheckbox.value)
  }
  colorChanged(colorPicker: HTMLInputElement) {
    console.log(colorPicker.value)
  }
  ngOnInit() {
  }

  ngAfterContentInit() {

  }

}
