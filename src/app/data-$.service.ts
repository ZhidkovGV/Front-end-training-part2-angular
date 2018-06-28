import {Injectable} from '@angular/core';
import {AddNew$Service} from './add-new-$.service';
import {combineLatest, Observable} from 'rxjs';
import {share} from 'rxjs/operators';
import {Point} from './point-class';

@Injectable({
  providedIn: 'root'
} as any)
export class Data$Service {
  lines = [];

  data$() {
    Observable.create(() => {
      const pause = 3000;
      const color = 'green';
      const newStream = this.AddNew$Service.getNew$(pause, color);
      this.lines.push(newStream);
      return combineLatest(...this.lines);
    }).pipe(share());

  }

  constructor(private AddNew$Service) {
  }
}
