import {Component, OnDestroy, OnInit} from '@angular/core';
import {Data$Service} from './services/data-$.service';
import {Line} from './interfaces/line.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  linesData: Line[] = [];
  lines$: any;
  constructor(public data$Service: Data$Service) {
  }

  ngOnInit() {
    this.lines$ = this.data$Service.getData$();
    this.lines$.subscribe((lines : Line[]) => { // TSLINT TSLINT TSLINT
      this.linesData = lines;
    });

  }
  ngOnDestroy() {
    this.lines$.unsubscribe() // TSLINT TSLINT TSLINT
  }
}
