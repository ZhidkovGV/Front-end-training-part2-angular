import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Point} from '../../interfaces/point.interface';
import {Line} from '../../interfaces/line.interface';

@Component({
  selector: 'app-conrtol-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit, OnChanges {
  @Input() linesData: Line[];

  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }

}
