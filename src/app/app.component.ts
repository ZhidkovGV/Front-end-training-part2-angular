import {Component} from '@angular/core';
import {Data$Service} from './data-$.service';
import {Point} from './point-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linesData: Point[];

  constructor(public data$Service: Data$Service) {
  }

  ngOnInit() {
    const $ = this.data$Service.getData$();
    $.subscribe((lines) => {
      this.linesData = lines;
    });

  }
}
