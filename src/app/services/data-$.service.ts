import {Injectable} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {AddNew$Service} from './add-new-$.service';
import {GetInitialColorService} from './get-initial-color.service';
import {switchMap} from 'rxjs/operators';
import {Line} from '../interfaces/line.interface';
import {Point} from '../interfaces/point.interface';


// $ should be only at the end of var names, and only for variables that contain streams,
// or for functions that return streams (when appropriate)
// there is no need to put your dollars everywhere, the service name should be just LinesDataService.
// and yes, not just DataService. every other service is data service. I should know which data this service handles just by looking at the filename.
// imagine the production code with 42 files named DataService, would it be fun to navigate?

// also, the only method which is named right here, by convention, is getData$
@Injectable({
  providedIn: 'root'
})
export class Data$Service {
  private lines: Array<Observable<Line>> = [];
  private lines$ = new Subject();

  getData$(): Observable<Line[]> {
    return this.lines$.pipe(switchMap(() => combineLatest(...this.lines)));
  }

  // "add stream" ? idk what this does. this should be addLine
  add$($interval: number) {
    const color = this.getInitialColor.getColor();
    const id = this.lines.length;
    const new$ = this.addNew$Service.getNew$($interval, color, id);
    this.lines.push(new$);
    this.lines$.next();
  }

  // "update stream color" ?
  update$Color($interval: number, color: string, id: number, prevValue: Point[]) {
    this.lines.splice(id, 1);
    const new$ = this.addNew$Service.getNew$($interval, color, id, prevValue);
    this.lines.splice(id, 0, new$);
    this.lines$.next();
  }


  // "update stream visibility" ?
  update$Visibility($interval: number, color: string, id: number, prevValue: Point[], shouldRender: boolean) {
    this.lines.splice(id, 1);
    const new$ = this.addNew$Service.getNew$($interval, color, id, prevValue, shouldRender);
    this.lines.splice(id, 0, new$);
    this.lines$.next();
  }

  // constructors should be placed before methods. Code guidelines!
  constructor(private addNew$Service: AddNew$Service, private getInitialColor: GetInitialColorService) {
  }
}
