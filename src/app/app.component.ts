import { Component } from '@angular/core';
import {Data$Service} from './data-$.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public data$Service: Data$Service) {

  }
  ngOnInit (){
    let $ = this.data$Service.data$(17);
    $.subscribe((item) => {
      console.log(item)
    });
    console.log($)
  }
}
