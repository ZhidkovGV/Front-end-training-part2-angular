import {Component, Input, OnInit} from '@angular/core';
import {Point} from '../../interfaces/point.interface';

@Component({
  selector: 'app-conrtol-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit {
  @Input() lineData: Point[][];

  constructor() {
  }

  ngOnInit() {
  }

}
