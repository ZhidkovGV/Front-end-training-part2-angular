import {Component, Input, OnInit, SimpleChanges, ViewChild, ElementRef, OnChanges} from '@angular/core';
import {Point} from '../point-interface';
import * as ResizeDetector from 'element-resize-detector';
import {scaleLinear} from 'd3-scale';
import {max, min} from 'd3-array';
import {AreaRadial} from 'd3-shape';

const elementResizeDetector = ResizeDetector();

@Component({
  selector: 'app-svg-draw-box',
  templateUrl: './svg-draw-box.component.html',
  styleUrls: ['./svg-draw-box.component.css']
})
export class SvgDrawBoxComponent implements OnInit, OnChanges {
  @Input() lineData: Point[];
  @ViewChild('svgBox') svgBox: ElementRef;
  xScale: Function;
  yScale: Function;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.lineData) this.countScale(changes.lineData.currentValue);
  }

  countScale(data: Point[][]): void {
    const svgWidth: number = parseInt(window.getComputedStyle(this.svgBox.nativeElement).width);
    const svgHeight: number = parseInt(window.getComputedStyle(this.svgBox.nativeElement).height);

    this.xScale = scaleLinear().domain(
        [min(data, (line: Array<Point>) => min(line, (point: Point) => point.seconds)),
        max(data, (line : Point[]) => max(line, (point: Point) => point.seconds))]
    ).range([0, svgWidth]);
    this.yScale = scaleLinear().domain(
      [min(data, (line: Array<Point>) => min(line, (point: Point) => point.val)),
        max(data, (line : Point[]) => max(line, (point: Point) => point.val))]
    ).range([0, svgHeight]);

    console.log(this.xScale);
  }

}
