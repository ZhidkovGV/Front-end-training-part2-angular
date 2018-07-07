import {Component, OnInit, Input} from '@angular/core';
import {Point} from '../../interfaces/point.interface';
import {Line} from '../../interfaces/line.interface';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Input() linesData: Line[];

  constructor() {
  }

  ngOnInit() {
  }

}
