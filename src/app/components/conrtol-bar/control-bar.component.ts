import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Point} from '../../interfaces/point.interface';

@Component({
  selector: 'app-conrtol-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit, OnChanges {
  @Input() lineData: Point[][];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
