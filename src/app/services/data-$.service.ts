import {Injectable} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {AddNew$Service} from './add-new-$.service';
import {GetInitialColorService} from './get-initial-color.service';
import {switchMap} from 'rxjs/operators';
import {Line} from '../interfaces/line.interface';


@Injectable({
  providedIn: 'root'
})
export class Data$Service {
  private lines: Array<Observable<Line>> = [];
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
