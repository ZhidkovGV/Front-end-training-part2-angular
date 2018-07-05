import {Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef} from '@angular/core';
import {Scales} from '../interfaces/scales-interface';
import {axisBottom, axisLeft} from 'd3-axis';
import {select} from 'd3-selection';

@Component({
  selector: '[app-axes]',
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.css']
})
export class AxesComponent implements OnInit, OnChanges {
  @Input() scales: Scales;
  @ViewChild('xAxis') xAxis: ElementRef;
  @ViewChild('yAxis') yAxis: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges(chages: SimpleChanges) {
    const xAxis = axisBottom(chages.scales.currentValue.x).ticks(5);
    const yAxis = axisLeft(chages.scales.currentValue.y).ticks(4);
    console.log(this.xAxis.nativeElement, this.yAxis.nativeElement,select(this.xAxis.nativeElement));
    select(this.xAxis.nativeElement).attr("transform", "translate(0,0)").call(xAxis);
    select(this.yAxis.nativeElement).attr("transform", "translate(0,0)").call(yAxis);
  }

}
