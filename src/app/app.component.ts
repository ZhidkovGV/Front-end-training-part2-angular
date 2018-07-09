import {Component, OnDestroy, OnInit} from '@angular/core';
import {LinesDataService} from './services/lines-data.service';
import {Line} from './interfaces/line.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  linesData: Line[];
  lines$: any;

  constructor(public linesDataService: LinesDataService) {
  }

  ngOnInit() {
    this.lines$ = this.linesDataService.getData$();
    this.lines$.subscribe((lines: Line[]) => {
      this.linesData = lines;
    });

  }

  ngOnDestroy() {
    this.lines$.unsubscribe();
  }
}
