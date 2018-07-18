import {AfterContentInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as ResizeDetector from 'element-resize-detector';
import {Scales} from '../../interfaces/scales.interface';
import {Line} from '../../interfaces/line.interface';
import {select, Store} from '@ngrx/store';
import {COUNT_SCALES} from '../../store/actions';

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
    this.store.pipe(select('lineData')).subscribe((lines: Line[]) => {
      this.linesData = lines;
      this.countScale(lines);
    });
    this.store.pipe(select('scales')).subscribe((scales) => {
      this.scales = scales;
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

  countScale(lines: Line[]): void {
    this.store.dispatch({type: COUNT_SCALES, payload: {lines, svgHeight: this.svgHeight, svgWidth: this.svgWidth}});
  }

}
