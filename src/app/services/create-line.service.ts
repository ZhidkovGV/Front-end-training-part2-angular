import {Injectable} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {Line} from '../interfaces/line.interface';
import {map, scan, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateLineService {
  constructor() {
  }

  createLine(data, id): Observable<Line> {
    const $interval = parseInt(data.inputValue, 10) || 3000;
    return interval($interval).pipe(
      startWith({} as Line),
      map(() => Math.random()),
      scan((acc, val: number) => {
        if (acc.points.length < 1) {
          acc.id = id;
          acc.shouldRender = true;
        }
        const time = (new Date()).getTime();
        const point = {val, time};
        acc.points = [...acc.points, point];
        return acc;
      }, {points: []} as Line)
    );
  }
}
