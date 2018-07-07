import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Scales} from '../../interfaces/scales.interface';
import {line} from 'd3-shape';
import {Line} from '../../interfaces/line.interface';

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit{ // formnatting! why won't you listen to tslint?
  @Input() line: Line;
  @Input() scales: Scales;
  @ViewChild('line') linePath: ElementRef;  // private and public fields are usually separated by newline
  private lineFunction: Function = line()
    .x((point) => this.scales.x(point["seconds"] as any)) // TSLINT!
    .y((point) => this.scales.y(point['val'] as any));

  // why
  constructor() {
  }

  // why
  ngOnInit() {}

  getColor() {
    return this.line.color;
  } // methods are always separated by newline!
  getData() {
    return this.lineFunction(this.line.points as any) // TSLINT TSLINT TSLINT
  }
}
