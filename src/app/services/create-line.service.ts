import {Injectable} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {Line} from '../interfaces/line.interface';
import {map, scan, startWith} from 'rxjs/operators';
import {GetInitialColorService} from './get-initial-color.service';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CreateLineService {
  constructor(private colorService: GetInitialColorService) {
  }

  createLine(data): Observable<Line> {
    const color = this.colorService.getColor();
    const $interval = parseInt(data.inputValue, 10) || 3000;
    return interval($interval).pipe(
      startWith({} as Line),
      map(() => Math.random()),
      scan((acc, val: number) => {
        if (acc.points.length < 1) {
          acc.id = _.uniqueId();
          acc.color = color;
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
