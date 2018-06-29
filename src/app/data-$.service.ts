import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {AddNew$Service} from './add-new-$.service';
import {GetInitialColorService} from './get-initial-color.service';

@Injectable({
  providedIn: 'root'
})
export class Data$Service {
  lines: Array<Observable<Object>> = [];

  data$($interval: number) {
    const color = this.getInitialColor.getColor();
    const new$ :Observable<Object> = this.addNew$Service.getNew$($interval, color);
    console.log(new$);
    this.lines.push(new$);
    console.log(this.lines);
    return combineLatest(...this.lines);
  }

  constructor(private addNew$Service: AddNew$Service, private getInitialColor: GetInitialColorService) {
  }
}
