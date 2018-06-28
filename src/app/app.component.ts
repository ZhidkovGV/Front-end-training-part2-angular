import { Component } from '@angular/core';
import {Data$Service} from './data-$.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public Data$Service: Data$Service) {

  }
  ngOnInit (){
    this.Data$Service.data$()
  }
}
