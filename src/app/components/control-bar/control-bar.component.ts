import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Point} from '../../interfaces/point.interface'; // unused import. always optimise imports before commit
import {Line} from '../../interfaces/line.interface';

// this component is pretty useless, and i would get rid of it.
// But it's ok, no harm done, except potential questions on the purpose of it's existence on code review
@Component({
  selector: 'app-conrtol-bar', // spellcheck!!!
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit, OnChanges {
  @Input() linesData: Line[];

  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }

}