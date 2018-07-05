import { Component, OnInit, Input } from '@angular/core';
import {Scales} from '../scales-interface';
import {Point} from '../point-interface';

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
