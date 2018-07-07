import {Component, ElementRef, Input, OnChanges, ViewChild} from '@angular/core';
import {Scales} from '../../interfaces/scales.interface';
import {axisBottom, axisLeft} from 'd3-axis';
import {select} from 'd3-selection';

@Component({
  selector: '[app-axes]', // same as LineComponent. must select as attribute 'cause svg cant draw custom elements and nested content
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.css']
})
export class AxesComponent implements OnChanges {
  @Input() scales: Scales;
  @ViewChild('xAxis') xAxisGroup: ElementRef;
  @ViewChild('yAxis') yAxisGroup: ElementRef;

  ngOnChanges() {
    const xAxis = axisBottom(this.scales.x).ticks(5);
    const yAxis = axisLeft(this.scales.y).ticks(4);
    select(this.xAxisGroup.nativeElement).call(xAxis);
    select(this.yAxisGroup.nativeElement).call(yAxis);
  }

}
