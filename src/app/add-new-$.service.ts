import {Injectable} from '@angular/core';
import {interval} from 'rxjs';
import {map, scan, startWith} from 'rxjs/operators';
import {Point} from './point-interface';

@Injectable({
  providedIn: 'root'
})

export class AddNew$Service {
  getNew$ ($interval: number, color: string){
    return interval($interval)
      .pipe(
        startWith({val: 0, seconds: 0}),
        map(() => Math.random()),
        scan((acc, val: number) => {
          const date = new Date();
          const seconds = date.getTime();
          const point: Point = acc.length > 1 ? {val, seconds} : {val, seconds, color, shouldRender: true};
          acc.push(point);
          return acc;
        }, [])
      );
  }
}
