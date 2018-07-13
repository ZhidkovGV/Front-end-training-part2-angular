import {Component, Input, OnInit, SimpleChanges, ViewChild, ElementRef, OnChanges, AfterContentInit, OnDestroy} from '@angular/core';
import {Point} from '../../interfaces/point.interface';
import * as ResizeDetector from 'element-resize-detector';
import {scaleLinear} from 'd3-scale';
import {max, min} from 'd3-array';
import {Scales} from '../../interfaces/scales.interface';
import {Line} from '../../interfaces/line.interface';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

const elementResizeDetector = ResizeDetector();

@Component({
  selector: 'app-svg-draw-box',
  templateUrl: './svg-draw-box.component.html',
  styleUrls: ['./svg-draw-box.component.css']
})
export class SvgDrawBoxComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild('svgBox') svgBox: ElementRef;
  scales: Scales;
  svgWidth: number;
  svgHeight: number;
  linesData: Line[];

  constructor(private store: Store<Line[]>) {
  }

  ngOnInit() {
    this.store.pipe(select('lineData')).pipe(switchMap((lines) => combineLatest(...lines))).subscribe((lines: Line[]) => {
      this.linesData = lines;
      this.countScale(lines);
    });
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

  countScale(data: Line[]): void {
    this.scales = {
      x: scaleLinear()
        .domain([min(data, (line) => min(line.points, (point) => point.time)),
          max(data, (line) => max(line.points, (point) => point.time))])
        .range([0, this.svgWidth]),
      y: scaleLinear()
        .domain([min(data, (line) => min(line.points, (point) => point.val)),
          max(data, (line) => max(line.points, (point) => point.val))])
        .range([0, this.svgHeight])
    };
  }

}
