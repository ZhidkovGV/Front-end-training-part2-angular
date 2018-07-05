import {Component, Input, OnInit, SimpleChanges, ViewChild, ElementRef, OnChanges, AfterContentInit, OnDestroy} from '@angular/core';
import {Point} from '../interfaces/point-interface';
import * as ResizeDetector from 'element-resize-detector';
import {scaleLinear} from 'd3-scale';
import {max, min} from 'd3-array';
import {Scales} from '../interfaces/scales-interface';

const elementResizeDetector = ResizeDetector();

@Component({
  selector: 'app-svg-draw-box',
  templateUrl: './svg-draw-box.component.html',
  styleUrls: ['./svg-draw-box.component.css']
})
export class SvgDrawBoxComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  @Input() lineData: Point[];
  @ViewChild('svgBox') svgBox: ElementRef;
  scales: Scales;
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
    this.scales.x = scaleLinear().domain(
      [min(data, (line) => min(line, (point: Point) => point.seconds)),
        max(data, (line: Point[]) => max(line, (point: Point) => point.seconds))]
    ).range([0, this.svgWidth]);
    this.scales.y = scaleLinear().domain(
      [min(data, (line) => min(line, (point) => point.val)),
        max(data, (line: Point[]) => max(line, (point) => point.val))]
    ).range([0, this.svgHeight]);

    console.log(this.svgWidth, this.svgHeight);
  }

}
