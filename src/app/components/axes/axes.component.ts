import {Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef} from '@angular/core';
import {Scales} from '../../interfaces/scales.interface';
import {axisBottom, axisLeft} from 'd3-axis';
import {select} from 'd3-selection';

@Component({
  selector: '[app-axes]',
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.css']
})
export class AxesComponent implements OnInit, OnChanges {
  @Input() scales: Scales;
  @ViewChild('xAxis') xAxisGroup: ElementRef;
  @ViewChild('yAxis') yAxisGroup: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    const xAxis = axisBottom(changes.scales.currentValue.x).ticks(5);
    const yAxis = axisLeft(changes.scales.currentValue.y).ticks(4);
    select(this.xAxisGroup.nativeElement).call(xAxis);
    select(this.yAxisGroup.nativeElement).call(yAxis);
  }

}
