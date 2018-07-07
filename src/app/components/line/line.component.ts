import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Scales} from '../../interfaces/scales.interface';
import {line} from 'd3-shape';
import {Line} from '../../interfaces/line.interface';
import {Point} from '../../interfaces/point.interface';

@Component({
  selector: '[app-line]', // selected as attribute because of svg. svg don't render custom elements and their content
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  @Input() line: Line;
  @Input() scales: Scales;
  @ViewChild('line') linePath: ElementRef;

  private lineFunction: Function = line()
    .x((point) => this.scales.x(point['seconds'])) // TSLINT!
    .y((point) => this.scales.y(point['val']));

  getColor() {
    return this.line.color;
  }

  getData() {
    return this.lineFunction(this.line.points); // TSLINT TSLINT TSLINT
  }
}
