import {Component, Input, OnInit, SimpleChanges, ViewChild, ElementRef, OnChanges, AfterContentInit, OnDestroy} from '@angular/core';
import {Point} from '../interfaces/point-interface';
import * as ResizeDetector from 'element-resize-detector';
import {scaleLinear} from 'd3-scale';
import {max, min} from 'd3-array';
import {Scales} from '../interfaces/scales-interface';
import {AxisDomain, AxisScale} from 'd3-axis';

const elementResizeDetector = ResizeDetector();

@Component({
  selector: 'app-svg-draw-box',
  templateUrl: './svg-draw-box.component.html',
  styleUrls: ['./svg-draw-box.component.css']
})
export class SvgDrawBoxComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  @Input() lineData: Point[];
  @ViewChild('svgBox') svgBox: ElementRef;
  scales : Scales = {} as Scales;
  svgWidth: number;
  svgHeight: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.lineData) this.countScale(changes.lineData.currentValue);
  }

  ngAfterContentInit() {
    elementResizeDetector.listenTo(this.svgBox.nativeElement, (element) => {
      this.svgWidth = element.offsetWidth;
      this.svgHeight = element.offsetHeight;
    });
  }

  ngOnDestroy() {
    elementResizeDetector.removeAllListeners(this.svgBox.nativeElement);
  }

  countScale(data: Point[][]): void {
    const scales : Scales = {} as Scales;
    scales.x = scaleLinear().domain(
      [min(data, (line) => min(line, (point: Point) => point.seconds)),
        max(data, (line: Point[]) => max(line, (point: Point) => point.seconds))]
    ).range([0, this.svgWidth]);
    scales.y = scaleLinear().domain(
      [min(data, (line) => min(line, (point) => point.val)),
        max(data, (line: Point[]) => max(line, (point) => point.val))]
    ).range([0, this.svgHeight]);
    this.scales = scales;
    console.log(this.svgWidth, this.svgHeight);
  }

}
