import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Point} from '../../interfaces/point-interface';
import {Scales} from '../../interfaces/scales-interface';
import {line} from 'd3-shape';

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit{
  @Input() line: Point[];
  @Input() scales: Scales;
  @ViewChild('line') linePath: ElementRef;
  private lineFunction: Function = line()
    .x((point) => this.scales.x(point["seconds"]))
    .y((point) => this.scales.y(point['val']));
  constructor() {
  }

  ngOnInit() {}

  getColor() {
    console.log(this.line);
    return this.line[0].color;
  }
  getData() {
    return this.lineFunction(this.line as any)
  }
}
