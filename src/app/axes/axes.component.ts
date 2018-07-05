import { Component, OnInit, Input } from '@angular/core';
import {Scales} from '../interfaces/scales-interface';
import {Point} from '../interfaces/point-interface';

@Component({
  selector: 'app-axes',
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.css']
})
export class AxesComponent implements OnInit {
  @Input() scales: Scales;
  @Input() linesDaa: Point[][];
  constructor() { }

  ngOnInit() {
  }

}
