import {Point} from './point.interface';

export interface Line {
  shouldRender: boolean;
  color: string;
  points: Point[]
}
