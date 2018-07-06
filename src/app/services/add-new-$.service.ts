import {Injectable} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';
import {Point} from '../interfaces/point.interface';
import {Line} from '../interfaces/line.interface';

@Injectable({
  providedIn: 'root'
})

export class AddNew$Service {
  getNew$($interval: number, color: string, id: number, prevValue ?: Point[], shouldRender ?: boolean): Observable<Line> {
    return interval($interval)
      .pipe(
        startWith({shouldRender: true, color, points: []} as Line),
        map(() => Math.random()),
        scan((acc, val: number) => {
          if (acc.points.length < 1) {
            if(prevValue !== undefined) acc.points = acc.points.concat(prevValue);
            acc.color = color;
            acc.shouldRender = shouldRender !== undefined ? shouldRender : true;
            acc.id = id;
            acc.$interval = $interval;
            console.log(acc)
          }
          const seconds = (new Date()).getTime();
          const point: Point = {val, seconds};
          acc.points.push(point);
          return acc;
        }, {points:[]} as Line)
      );
  }
}
