import {Component, Input, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Point} from '../point-interface';


@Component({
  selector: 'app-svg-draw-box',
  templateUrl: './svg-draw-box.component.html',
  styleUrls: ['./svg-draw-box.component.css']
})
export class SvgDrawBoxComponent implements OnInit {
  @Input() lineData: Point[];
  constructor() { }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.countScale(changes.lineData)
  }
  countScale(data) {

  }

}
