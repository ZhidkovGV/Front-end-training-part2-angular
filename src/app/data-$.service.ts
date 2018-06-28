import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {share} from 'rxjs/operators';
import {AppModule} from './app.module';
import {AddNew$Service} from './add-new-$.service';

@Injectable({
  providedIn: 'root'
})
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
    console.log(this.AddNew$Service.getNew$(3000, "green"))
  }

  constructor(private AddNew$Service : AddNew$Service) {
  }
}
