import {Injectable} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {AddNew$Service} from './add-new-$.service';
import {GetInitialColorService} from './get-initial-color.service';
import {Point} from '../interfaces/point.interface';
import {switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Data$Service {
  private lines: Array<Observable<Point>> = [];
  private lines$ = new Subject();

  getData$() {
    return this.lines$.pipe(switchMap(() => combineLatest(...this.lines)));
  }

  add$($interval: number) {
    const color = this.getInitialColor.getColor();
    const new$ = this.addNew$Service.getNew$($interval, color);
    this.lines.push(new$);
    this.lines$.next();
  }

  constructor(private addNew$Service: AddNew$Service, private getInitialColor: GetInitialColorService) {
  }
}
