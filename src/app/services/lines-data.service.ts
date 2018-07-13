import {Injectable} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {AddNewLineService} from './add-new-line.service';
import {GetInitialColorService} from './get-initial-color.service';
import {switchMap} from 'rxjs/operators';
import {Line} from '../interfaces/line.interface';
import {Point} from '../interfaces/point.interface';

@Injectable({
  providedIn: 'root'
})
export class LinesDataService {
  private lines: Observable<Line>[];
  private lines$ = new Subject();

  constructor(private addNewLineService: AddNewLineService, private getInitialColor: GetInitialColorService) {
  }

  getData$(): Observable<Line[]> {
    return this.lines$.pipe(switchMap(() => combineLatest(...this.lines)));
  }

  addLine($interval: number) {
    if (!this.lines) {
      this.lines = [];
    }
    const color = this.getInitialColor.getColor();
    const id = this.lines.length;
    const new$ = this.addNewLineService.getNew$($interval, color, id);
    this.lines.push(new$);
    this.lines$.next();
  }

  updateLineColor($interval: number, color: string, id: number, prevValue: Point[]) {
    const new$ = this.addNewLineService.getNew$($interval, color, id, prevValue);
    this.lines.splice(id, 1, new$);
    this.lines$.next();
  }


  updateLineVisibility($interval: number, color: string, id: number, prevValue: Point[], shouldRender: boolean) {
    const new$ = this.addNewLineService.getNew$($interval, color, id, prevValue, shouldRender);
    this.lines.splice(id, 1, new$);
    this.lines$.next();
  }

}
