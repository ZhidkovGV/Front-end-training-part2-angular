import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Point} from '../interfaces/point-interface';
import {Scales} from '../interfaces/scales-interface';

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input() line: Point[];
  @Input() scales: Scales;

  constructor() { }

  ngOnInit() {

  }

}
