import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Point} from '../../interfaces/point-interface';
import {Scales} from '../../interfaces/scales-interface';
import {line} from 'd3-shape';
import {select} from 'd3-selection';

@Component({
  selector: '[app-line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit, OnChanges {
  @Input() line: Point[];
  @Input() scales: Scales;
  @ViewChild('line') linePath: ElementRef;
  lineFunction: Function = line()
    .x((point) => this.scales.x(point["seconds"]))
    .y((point) => this.scales.y(point['val']));
  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    select(this.linePath.nativeElement).style("stroke", this.line[0].color).attr("d", this.lineFunction(this.line as any))
  }
}
