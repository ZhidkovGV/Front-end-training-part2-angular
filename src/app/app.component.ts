import {Component, OnDestroy, OnInit} from '@angular/core';
import {Data$Service} from './services/data-$.service';
import {Point} from './interfaces/point.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  linesData: Point[] = [];
  lines$: any;
  constructor(public data$Service: Data$Service) {
  }

  ngOnInit() {
    this.lines$ = this.data$Service.getData$();
    this.lines$.subscribe((lines : Point[]) => {
      this.linesData = lines;
    });

  }
  ngOnDestroy() {
    this.lines$.unsubscribe()
  }
}
