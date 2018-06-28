import {Injectable} from '@angular/core';
import {Point} from './point-class';
import {interval, Observable} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}as any)

export class AddNew$Service {
  getNew$ ($interval: number, color: string) : Observable<Point>{
    return interval($interval)
      .pipe(
        startWith({val: 0, seconds: 0}),
        map(() => Math.random()),
        scan((acc, val) => {
          const date = new Date();
          const seconds = date.getTime();
          acc.push(acc.length > 1 ? {val, seconds} as Point : {val, seconds, color, shouldRender: true} as Point);
          return acc;
        }, [])
      );
  }
}
