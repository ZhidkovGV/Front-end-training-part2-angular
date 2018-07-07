import {Point} from './point.interface';

export interface Line {
  shouldRender: boolean;
  color: string;
  points: Point[] // TSLINT TSLINT TSLINT
  id: number,
  $interval: number // TSLINT TSLINT TSLINT
}
