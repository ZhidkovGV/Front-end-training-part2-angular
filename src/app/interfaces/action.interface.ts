import {Action} from '@ngrx/store';
import {Line} from './line.interface';

export interface ActionWithPayload extends Action {
  payload?: any;
}

