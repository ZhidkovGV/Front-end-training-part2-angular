import {Component, OnInit} from '@angular/core';
import {Line} from '../../interfaces/line.interface';
import {select, Store} from '@ngrx/store';


@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit {
  linesData: Line[];

  constructor(private store: Store<Line[]>) {
  }

  ngOnInit() {
    this.store.pipe(select('lineData')).subscribe((lines: Line[]) => {
      this.linesData = lines;
    });
  }

  updateColor(actionObject) {
    this.store.dispatch(actionObject);
  }

  updateVisibility(actionObject) {
    this.store.dispatch(actionObject);
  }

}
