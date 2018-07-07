import {Component, Input, OnInit, SimpleChanges, ViewChild, ElementRef, OnChanges, AfterContentInit, OnDestroy} from '@angular/core';
import {Point} from '../../interfaces/point.interface';
import * as ResizeDetector from 'element-resize-detector';
import {scaleLinear} from 'd3-scale';
import {max, min} from 'd3-array';
import {Scales} from '../../interfaces/scales.interface';
import {Line} from '../../interfaces/line.interface';

const elementResizeDetector = ResizeDetector();

@Component({
  selector: 'app-svg-draw-box',
  templateUrl: './svg-draw-box.component.html',
  styleUrls: ['./svg-draw-box.component.css']
})
export class SvgDrawBoxComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {
  @Input() linesData: Line[];
  @ViewChild('svgBox') svgBox: ElementRef;
  scales: Scales;
  svgWidth: number;
  svgHeight: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.linesData) {
      this.countScale(changes.linesData.currentValue[0].points);
    }
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

  countScale(data: Point[]): void {
    this.scales = {
      x: scaleLinear()
        .domain([min(data, (point) => point.seconds), max(data, (point) => point.seconds)])
        .range([0, this.svgWidth]),
      y: scaleLinear()
        .domain([min(data, (point) => point.val), max(data, (point) => point.val)])
        .range([0, this.svgHeight])
    };
  }

}
