import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {Point} from '../../interfaces/point-interface';

@Component({
  selector: 'app-line-control',
  templateUrl: './line-control.component.html',
  styleUrls: ['./line-control.component.css']
})
export class LineControlComponent implements OnInit, AfterContentInit {
  @Input() lineParams: Point;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {

  }

}